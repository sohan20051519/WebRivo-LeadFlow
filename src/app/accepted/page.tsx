"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { LeadStatus } from '@/types';
import { useState, useMemo } from 'react';
import { CheckCircle, PauseCircle, XCircle, Copy, Check, Edit2, Filter, User, Loader2, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { USER_LABELS } from '@/constants';

function ClientActions({ dsId, rowIdx, rowData }: { dsId: string, rowIdx: number, rowData: any }) {
    const { getMockClientBySource, createClient, datasets } = useLeadFlow();
    const router = useRouter();
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [loadingPayment, setLoadingPayment] = useState(false);

    const handleNavigate = async (destination: 'profile' | 'payments') => {
        if (destination === 'profile') setLoadingProfile(true);
        else setLoadingPayment(true);

        try {
            // Check if profile exists
            let client = await getMockClientBySource(dsId, rowIdx);
            let clientId = client?.id;

            if (!client) {
                // Determine sensible defaults from row data
                const business = rowData['Business Name'] || rowData['Company'] || rowData['Organization'] || 'Unknown Business';
                const contact = rowData['Contact Person'] || rowData['Name'] || '';
                const email = rowData['Email'] || rowData['email'] || '';
                const phone = rowData['Phone Number'] || rowData['Phone'] || rowData['mobile'] || '';

                // Lookup source dataset to get assignment
                const sourceDs = datasets.find(d => d.id === dsId);
                const assignedUser = sourceDs?.assignedUser || sourceDs?.assignedTo;

                clientId = await createClient({
                    business_name: business,
                    contact_name: contact,
                    email: email,
                    phone: phone,
                    source_dataset_id: dsId,
                    source_row_index: rowIdx,
                    assigned_user: assignedUser, // Explicitly carry over ownership
                    status: 'onboarding',
                    selected_package: 'basic',
                    package_price: 0,
                    core_upgrades: [],
                    add_ons: [],
                    domains: [],
                    custom_items: [],
                    internal_notes: ''
                });
            }

            if (clientId) {
                router.push(destination === 'profile' ? `/clients/${clientId}` : `/clients/${clientId}/payments`);
            }
        } finally {
            if (destination === 'profile') setLoadingProfile(false);
            else setLoadingPayment(false);
        }
    };

    return (
        <div className="flex items-center justify-center gap-1">
            <button
                onClick={() => handleNavigate('profile')}
                disabled={loadingProfile || loadingPayment}
                className="p-1 md:p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all border border-indigo-100"
                title="Manage Client Profile"
            >
                {loadingProfile ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : <User className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
            <button
                onClick={() => handleNavigate('payments')}
                disabled={loadingProfile || loadingPayment}
                className="p-1 md:p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all border border-emerald-100"
                title="Manage Payments"
            >
                {loadingPayment ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : <CreditCard className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
        </div>
    );
}

function PaymentStatusCell({ dsId, rowIdx }: { dsId: string, rowIdx: number }) {
    const { clients } = useLeadFlow();
    const client = clients.find(c => c.source_dataset_id === dsId && c.source_row_index === rowIdx);

    if (!client) return <span className="text-slate-300 text-[10px] italic">-</span>;

    // Calculate outstanding
    const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);

    return (
        <div className="flex flex-col items-center gap-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider rounded px-2.5 py-0.5 inline-block text-center ${client.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-600' :
                client.payment_status === 'partial' ? 'bg-amber-100 text-amber-600' :
                    'bg-slate-100 text-slate-500'
                }`}>
                {client.payment_status === 'paid' ? 'Paid' :
                    client.payment_status === 'partial' ? 'Partial' : 'Unpaid'}
            </span>
            {client.payment_status !== 'paid' && outstanding > 0 && (
                <span className="text-[9px] font-bold text-rose-500">
                    Due: ₹{outstanding}
                </span>
            )}
        </div>
    );
}

function ClientStatusCell({ dsId, rowIdx }: { dsId: string, rowIdx: number }) {
    const { clients } = useLeadFlow();
    const client = clients.find(c => c.source_dataset_id === dsId && c.source_row_index === rowIdx);

    if (!client) return <span className="text-slate-300 text-[10px] italic">No Client Profile</span>;

    const statusColors: Record<string, string> = {
        'onboarding': 'bg-blue-50 text-blue-600',
        'in_progress': 'bg-amber-50 text-amber-600',
        'review': 'bg-purple-50 text-purple-600',
        'live': 'bg-emerald-50 text-emerald-600',
        'maintenance': 'bg-rose-50 text-rose-600',
        'completed': 'bg-slate-50 text-slate-600'
    };

    const statusLabels: Record<string, string> = {
        'onboarding': 'Onboarding',
        'in_progress': 'Development',
        'review': 'In Review',
        'live': 'Live',
        'maintenance': 'Maintenance',
        'completed': 'Completed'
    };

    return (
        <span className={`text-[10px] font-bold uppercase tracking-wider rounded px-2.5 py-1 inline-block min-w-[100px] text-center ${statusColors[client.status] || 'bg-slate-100 text-slate-500'}`}>
            {statusLabels[client.status] || client.status}
        </span>
    );
}

export default function AcceptedPage() {
    const { datasets, updateLeadStatus, updateCell, showFeedback, searchTerm, clients, currentUser } = useLeadFlow();
    const [editingCell, setEditingCell] = useState<{ dsId: string, rowIndex: number, column: string, value: string } | null>(null);
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const filteredRows = useMemo(() => {
        let rows: any[] = [];
        const term = searchTerm ? searchTerm.trim().toLowerCase() : '';

        datasets.forEach(ds => {
            ds.data.forEach((r, i) => {
                if (ds.statuses[i] === LeadStatus.ACCEPTED) {
                    const assignedUser = ds.assignedUser || ds.assignedTo;
                    if (!term) {
                        rows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, assignedUser });
                    } else {
                        // Safe robust search
                        const values = Object.values(r).map(v => String(v || '').toLowerCase()).join(' ');
                        if (values.includes(term)) {
                            rows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, assignedUser });
                        }
                    }
                }
            });
        });
        return rows;
    }, [datasets, searchTerm]);

    const headers = useMemo(() => {
        if (datasets.length === 0) return [];
        const contributingDs = datasets.find(ds => ds.data.some((_, i) => ds.statuses[i] === LeadStatus.ACCEPTED));
        return contributingDs ? contributingDs.headers : (datasets[0]?.headers || []);
    }, [datasets]);

    const handleCellSave = async () => {
        if (!editingCell) return;
        const { dsId, rowIndex, column, value } = editingCell;
        await updateCell(dsId, rowIndex, column, value);
        setEditingCell(null);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <div className="h-full flex flex-col bg-white overflow-hidden">
            <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[300px] md:min-w-[800px]">
                    <thead className="sticky top-0 z-20 bg-slate-50 shadow-sm">
                        <tr>
                            <th className="sticky left-0 bg-slate-50 px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-16">
                                {/* Actions */}
                            </th>
                            <th className="px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[120px]">
                                Client Status
                            </th>
                            <th className="px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[120px]">
                                Payment
                            </th>
                            {headers.map((h, i) => (
                                <th key={i} className="px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[120px] md:min-w-[150px]">{h}</th>
                            ))}
                            <th className="px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Source Dataset</th>
                            {currentUser === 'admin' && (
                                <th className="px-4 py-3 md:px-6 md:py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Owner</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredRows.length > 0 ? (
                            filteredRows.map((item, flatIdx) => {
                                // flatIdx is just loop index, we use item.idx for row index
                                return (
                                    <tr key={`${item.dsId}-${item.idx}`} className="group hover:bg-slate-50 transition-colors bg-emerald-50/20">
                                        <td className="sticky left-0 bg-white group-hover:bg-slate-50 px-2 py-3 md:py-4 border-r border-slate-100 z-10 box-border text-center">
                                            <ClientActions dsId={item.dsId} rowIdx={item.idx} rowData={item.row} />
                                        </td>
                                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-center">
                                            <ClientStatusCell dsId={item.dsId} rowIdx={item.idx} />
                                        </td>
                                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-center">
                                            <PaymentStatusCell dsId={item.dsId} rowIdx={item.idx} />
                                        </td>
                                        {headers.map((h, i) => {
                                            const cellValue = item.row[h] || '';
                                            const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                            const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                            const isEditing = editingCell?.dsId === item.dsId && editingCell?.rowIndex === item.idx && editingCell?.column === h;
                                            return (
                                                <td key={i} className="px-4 py-3 md:px-6 md:py-4 text-sm text-slate-600 whitespace-nowrap">
                                                    {isEditing ? (
                                                        <input autoFocus className="w-full bg-white border border-indigo-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-500" value={editingCell.value} onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })} onBlur={handleCellSave} onKeyDown={(e) => e.key === 'Enter' && handleCellSave()} />
                                                    ) : (
                                                        <div className="flex items-center gap-2 group/cell">
                                                            <span onClick={() => isBusinessName && copyToClipboard(cellValue)} className={`truncate max-w-[150px] md:max-w-[200px] block ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`}>{cellValue || '-'}</span>
                                                            {isBusinessName && <button onClick={() => copyToClipboard(cellValue)} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all">{copiedText === cellValue ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}</button>}
                                                            {isEditable && <button onClick={() => setEditingCell({ dsId: item.dsId, rowIndex: item.idx, column: h, value: cellValue })} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all"><Edit2 className="w-3 h-3" /></button>}
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td className="px-4 py-3 md:px-6 md:py-4 text-xs font-bold text-indigo-500 whitespace-nowrap italic">{item.dsName}</td>
                                        {currentUser === 'admin' && (
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-xs font-bold text-slate-500 whitespace-nowrap">
                                                {item.assignedUser ? (USER_LABELS[item.assignedUser] || item.assignedUser) : '-'}
                                            </td>
                                        )}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr><td colSpan={headers.length + 4} className="py-20 text-center text-slate-400"><div className="flex flex-col items-center gap-2"><Filter className="w-8 h-8 opacity-20" /><p className="text-sm font-medium">No accepted leads found.</p></div></td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
