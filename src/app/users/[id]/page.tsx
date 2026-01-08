"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    User, ArrowLeft, TrendingUp, IndianRupee, CheckCircle,
    XCircle, Clock, AlertCircle, Loader2
} from 'lucide-react';
import Link from 'next/link';
import { LeadStatus } from '@/types';

// Commission Rules
const COMMISSION_RATES: any = {
    'basic': 1000,
    'business': 2000,
    'premium': 4000
};

export default function UserDetailsPage() {
    const { id } = useParams(); // username
    const username = Array.isArray(id) ? id[0] : id;
    const { currentUser, datasets, clients, supabase } = useLeadFlow();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [userClients, setUserClients] = useState<any[]>([]);
    const [stats, setStats] = useState({
        totalEarned: 0,
        paid: 0,
        pending: 0,
        count: 0
    });

    // Track local payment status changes before sync
    // We will use a special dataset '__system_commissions__' to store payment status
    // Format: client_id -> { status: 'paid' | 'unpaid', date: string }
    const [commissionRecords, setCommissionRecords] = useState<Record<string, any>>({});

    useEffect(() => {
        if (currentUser === null) return;

        if (currentUser !== 'admin') {
            router.push('/dash');
            return;
        }

        const fetchData = async () => {
            setLoading(true);

            // 1. Identify datasets assigned to this user
            // Assigned via prefix "[username]" or explicit DB assignment
            const assignedDatasets = datasets.filter(ds => {
                return ds.assignedUser?.toLowerCase() === username.toLowerCase();
            });

            const assignedDatasetIds = new Set(assignedDatasets.map(ds => ds.id));

            // 2. Identify ALL Accepted Leads from these datasets
            // This ensures we show leads that are accepted but not yet converted to Clients
            let allAcceptedLeads: any[] = [];

            assignedDatasets.forEach(ds => {
                Object.entries(ds.statuses).forEach(([rowIdxStr, status]) => {
                    if (status === LeadStatus.ACCEPTED) {
                        const rowIdx = parseInt(rowIdxStr);
                        const rowData = ds.data[rowIdx];

                        // Try to find existing client
                        const existingClient = clients.find(c =>
                            c.source_dataset_id === ds.id &&
                            c.source_row_index === rowIdx
                        );

                        if (existingClient) {
                            allAcceptedLeads.push({
                                ...existingClient,
                                type: 'client',
                                // Original commission logic will be applied later
                            });
                        } else {
                            // Create a placeholder client object
                            allAcceptedLeads.push({
                                id: `temp_${ds.id}_${rowIdx}`, // Temporary ID
                                type: 'lead',
                                business_name: rowData['Business Name'] || rowData['Company'] || rowData['Organization'] || 'Unknown Business',
                                contact_name: rowData['Contact Person'] || rowData['Name'] || '',
                                selected_package: 'basic', // Default for calc, but maybe show as pending
                                status: 'lead_accepted', // Special status for UI
                                source_dataset_id: ds.id,
                                source_row_index: rowIdx
                            });
                        }
                    }
                });
            });

            // 3. Fetch Commission Records
            const commDataset = datasets.find(d => d.name === '__system_commissions__');
            let commData: Record<string, any> = {};

            if (commDataset) {
                commDataset.data.forEach((row: any) => {
                    if (row.client_id) {
                        commData[row.client_id] = {
                            status: row.status,
                            date: row.date
                        };
                    }
                });
            }
            setCommissionRecords(commData);

            // 4. Calculate Stats & Merge
            let total = 0;
            let paid = 0;
            let pending = 0;

            const finalClients = allAcceptedLeads.map(item => {
                // If it's a raw lead, commission is potential (0 until setup?)
                // Or user assumes Basic plan commission?
                // Let's assume 0 commission until they are a Client with a selected package.
                // UNLESS we want to show potential earnings.
                // For now, let's treat them as actionable items but 0 commission to avoid inflating stats falsely.

                let amount = 0;
                let isPaid = false;

                if (item.type === 'client') {
                    const pkg = item.selected_package || 'basic';
                    amount = COMMISSION_RATES[pkg] || 0;
                    const record = commData[item.id];
                    isPaid = record?.status === 'paid';
                }

                if (amount > 0) {
                    total += amount;
                    if (isPaid) paid += amount;
                    else pending += amount;
                }

                return {
                    ...item,
                    commissionAmount: amount,
                    commissionStatus: isPaid ? 'paid' : 'unpaid'
                };
            });

            setUserClients(finalClients);
            setStats({
                totalEarned: total,
                paid,
                pending,
                count: finalClients.length
            });

            setLoading(false);
        };

        if (datasets.length > 0) {
            fetchData();
        }
    }, [currentUser, datasets, clients, username, router]);


    const handleMarkPaid = async (clientId: string) => {
        if (!confirm('Mark commission as PAID?')) return;

        try {
            // Update local state first
            setCommissionRecords(prev => ({
                ...prev,
                [clientId]: { status: 'paid', date: new Date().toISOString() }
            }));

            // Save to DB (__system_commissions__)
            let commDataset = datasets.find(d => d.name === '__system_commissions__');

            const newRecord = {
                client_id: clientId,
                status: 'paid',
                date: new Date().toISOString()
            };

            if (commDataset) {
                // Update or Append
                // We need to check if row exists.
                // Since data is array of objects, we map and replace or push.
                const existingIndex = commDataset.data.findIndex((r: any) => r.client_id === clientId);
                let newData = [...commDataset.data];

                if (existingIndex >= 0) {
                    newData[existingIndex] = newRecord;
                } else {
                    newData.push(newRecord);
                }

                const { error } = await supabase
                    .from('datasets')
                    .update({ data: newData })
                    .eq('id', commDataset.id);

                if (error) throw error;
            } else {
                // Create
                const { error } = await supabase
                    .from('datasets')
                    .insert([{
                        name: '__system_commissions__',
                        headers: ['client_id', 'status', 'date'],
                        data: [newRecord]
                    }]);
                if (error) throw error;
            }

            // Refresh handled via context usually, but we might need to trigger it or just rely on local state update for now
            // To be safe, we reload stats locally
            const updatedClients = userClients.map(c => {
                if (c.id === clientId) return { ...c, commissionStatus: 'paid' };
                return c;
            });
            setUserClients(updatedClients);

            // Recalc totals
            let paid = 0;
            let pending = 0;
            let total = 0;
            updatedClients.forEach(c => {
                total += c.commissionAmount;
                if (c.commissionStatus === 'paid') paid += c.commissionAmount;
                else pending += c.commissionAmount;
            });
            setStats(prev => ({ ...prev, totalEarned: total, paid, pending }));

        } catch (err) {
            console.error("Failed to update commission", err);
            alert("Failed to update status");
        }
    };

    if (loading || currentUser === null) {
        return (
             <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <Link href="/users" className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-500" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 capitalize flex items-center gap-2">
                                {username} <span className="text-slate-400 font-normal text-lg">Analysis</span>
                            </h1>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                                </div>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Earnings</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900">₹{stats.totalEarned.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm bg-emerald-50/30">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Paid Commission</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-emerald-700">₹{stats.paid.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm bg-amber-50/30">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Pending Payout</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-amber-700">₹{stats.pending.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Clients List */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100">
                            <h2 className="font-bold text-slate-800">Attributed Clients & Commissions</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4">Client Name</th>
                                        <th className="px-6 py-4">Plan</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Commission</th>
                                        <th className="px-6 py-4 text-center">Payout</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {userClients.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                                                No clients found for this user.
                                            </td>
                                        </tr>
                                    ) : (
                                        userClients.map((client) => (
                                            <tr key={client.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900">
                                                    {client.business_name || 'Unknown Business'}
                                                    <div className="text-xs text-slate-400 font-normal">{client.contact_name}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                                        client.selected_package === 'premium' ? 'bg-purple-100 text-purple-700' :
                                                        client.selected_package === 'business' ? 'bg-indigo-100 text-indigo-700' :
                                                        'bg-blue-100 text-blue-700'
                                                    }`}>
                                                        {client.selected_package || 'Basic'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                                        client.status === 'live' ? 'bg-emerald-100 text-emerald-700' :
                                                        client.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                                                        client.status === 'lead_accepted' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                                                        'bg-slate-100 text-slate-600'
                                                    }`}>
                                                        {client.status === 'lead_accepted' ? 'Pending Setup' : client.status.replace('_', ' ')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right font-bold text-slate-700">
                                                    ₹{client.commissionAmount.toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {client.commissionAmount > 0 ? (
                                                        client.commissionStatus === 'paid' ? (
                                                            <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                                                <CheckCircle className="w-3 h-3" /> PAID
                                                            </span>
                                                        ) : (
                                                            <button
                                                                onClick={() => handleMarkPaid(client.id)}
                                                                className="inline-flex items-center gap-1 text-amber-600 hover:text-white hover:bg-amber-500 font-bold text-xs bg-amber-50 px-3 py-1.5 rounded border border-amber-200 transition-all shadow-sm"
                                                            >
                                                                Pay Now
                                                            </button>
                                                        )
                                                    ) : (
                                                        <span className="text-slate-300">-</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
