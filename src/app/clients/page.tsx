"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Briefcase,
    Search,
    Filter,
    ChevronRight,
    User,
    CreditCard,
    MoreVertical,
    Plus,
    Loader2
} from 'lucide-react';
import { USER_LABELS } from '@/constants';

export default function ClientsPage() {
    const { clients, searchTerm, currentUser, loading } = useLeadFlow();
    const router = useRouter();
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const filteredClients = useMemo(() => {
        let result = clients;

        // Search Filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(c =>
                c.business_name.toLowerCase().includes(term) ||
                c.contact_name?.toLowerCase().includes(term) ||
                c.email?.toLowerCase().includes(term) ||
                c.phone?.includes(term)
            );
        }

        // Status Filter
        if (statusFilter !== 'all') {
            result = result.filter(c => c.status === statusFilter);
        }

        return result;
    }, [clients, searchTerm, statusFilter]);

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            'onboarding': 'bg-blue-50 text-blue-600',
            'in_progress': 'bg-amber-50 text-amber-600',
            'review': 'bg-purple-50 text-purple-600',
            'live': 'bg-emerald-50 text-emerald-600',
            'maintenance': 'bg-slate-50 text-slate-600',
            'completed': 'bg-indigo-50 text-indigo-600'
        };
        return colors[status] || 'bg-gray-50 text-gray-600';
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'onboarding': 'Onboarding',
            'in_progress': 'Development',
            'review': 'In Review',
            'live': 'Live',
            'maintenance': 'Maintenance',
            'completed': 'Completed'
        };
        return labels[status] || status;
    };

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center text-slate-400 gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Loading clients...
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-slate-50/50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-indigo-600" />
                        Clients
                        <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            {filteredClients.length}
                        </span>
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">Manage all your active client projects and payments.</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 outline-none focus:ring-2 focus:ring-indigo-500/20 appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
                        >
                            <option value="all">All Statuses</option>
                            <option value="onboarding">Onboarding</option>
                            <option value="in_progress">Development</option>
                            <option value="review">In Review</option>
                            <option value="live">Live</option>
                            <option value="maintenance">Maintenance</option>
                        </select>
                        <Filter className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <button
                        onClick={() => router.push('/accepted')}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4" />
                        New Client
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-4 md:p-6 custom-scrollbar">
                {filteredClients.length > 0 ? (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business / Contact</th>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Payment</th>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deal Value</th>
                                    {currentUser === 'admin' && (
                                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Owner</th>
                                    )}
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredClients.map((client) => {
                                    const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);

                                    return (
                                        <tr
                                            key={client.id}
                                            onClick={() => router.push(`/clients/${client.id}`)}
                                            className="group hover:bg-indigo-50/30 transition-colors cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                                                        {client.business_name}
                                                    </span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-xs text-slate-500 flex items-center gap-1">
                                                            <User className="w-3 h-3" /> {client.contact_name || 'No Contact'}
                                                        </span>
                                                        {client.phone && (
                                                            <>
                                                                <span className="text-slate-300">|</span>
                                                                <span className="text-xs text-slate-400">{client.phone}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(client.status)}`}>
                                                    {getStatusLabel(client.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                                        client.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-600' :
                                                        client.payment_status === 'partial' ? 'bg-amber-100 text-amber-600' :
                                                        'bg-slate-100 text-slate-500'
                                                    }`}>
                                                        {client.payment_status === 'paid' ? 'Paid' :
                                                         client.payment_status === 'partial' ? 'Partial' : 'Unpaid'}
                                                    </span>
                                                    {client.payment_status !== 'paid' && outstanding > 0 && (
                                                        <span className="text-[10px] font-bold text-rose-500">
                                                            Due: ₹{outstanding}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-700">₹{client.total_deal_value || 0}</span>
                                                    {client.amount_paid > 0 && (
                                                        <span className="text-xs text-emerald-600 font-medium">
                                                            Paid: ₹{client.amount_paid}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            {currentUser === 'admin' && (
                                                <td className="px-6 py-4">
                                                    {client.assigned_user ? (
                                                        <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                                                            {USER_LABELS[client.assigned_user] || client.assigned_user}
                                                        </span>
                                                    ) : (
                                                        <span className="text-slate-300 text-xs italic">-</span>
                                                    )}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            router.push(`/clients/${client.id}/payments`);
                                                        }}
                                                        className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-emerald-600 hover:shadow-sm transition-all border border-transparent hover:border-slate-100"
                                                        title="Payments"
                                                    >
                                                        <CreditCard className="w-4 h-4" />
                                                    </button>
                                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                        <Briefcase className="w-16 h-16 mb-4 text-slate-300" />
                        <h3 className="text-lg font-medium text-slate-600">No clients found</h3>
                        <p className="text-sm">
                            {searchTerm ? `No clients match "${searchTerm}"` : "You haven't added any clients yet."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
