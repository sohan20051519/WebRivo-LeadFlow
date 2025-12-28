"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { LeadStatus } from '@/types';
import { useState, useMemo } from 'react';
import { CheckCircle, PauseCircle, XCircle, Copy, Check, Edit2, Filter, User, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

function ManageClientButton({ dsId, rowIdx, rowData }: { dsId: string, rowIdx: number, rowData: any }) {
    const { getMockClientBySource, createClient } = useLeadFlow();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            // Check if profile exists
            let client = await getMockClientBySource(dsId, rowIdx);

            if (!client) {
                // Determine sensible defaults from row data
                const business = rowData['Business Name'] || rowData['Company'] || rowData['Organization'] || 'Unknown Business';
                const contact = rowData['Contact Person'] || rowData['Name'] || '';
                const email = rowData['Email'] || rowData['email'] || '';
                const phone = rowData['Phone Number'] || rowData['Phone'] || rowData['mobile'] || '';

                const newId = await createClient({
                    business_name: business,
                    contact_name: contact,
                    email: email,
                    phone: phone,
                    source_dataset_id: dsId,
                    source_row_index: rowIdx,
                    status: 'onboarding',
                    selected_package: 'basic',
                    package_price: 0,
                    core_upgrades: [],
                    add_ons: [],
                    domains: [],
                    custom_items: [],
                    internal_notes: ''
                });

                if (newId) {
                    router.push(`/clients/${newId}`);
                }
            } else {
                router.push(`/clients/${client.id}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleClick} disabled={loading} className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all ml-1" title="Manage Client Profile">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <User className="w-5 h-5" />}
        </button>
    );
}

export default function WaitlistPage() {
    const { datasets, updateLeadStatus, updateCell, showFeedback, searchTerm } = useLeadFlow();
    const [editingCell, setEditingCell] = useState<{ dsId: string, rowIndex: number, column: string, value: string } | null>(null);
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const filteredRows = useMemo(() => {
        let rows: any[] = [];
        const term = searchTerm ? searchTerm.trim().toLowerCase() : '';

        datasets.forEach(ds => {
            ds.data.forEach((r, i) => {
                if (ds.statuses[i] === LeadStatus.WAIT) {
                    if (!term) {
                        rows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name });
                    } else {
                        // Safe robust search
                        const values = Object.values(r).map(v => String(v || '').toLowerCase()).join(' ');
                        if (values.includes(term)) {
                            rows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name });
                        }
                    }
                }
            });
        });
        return rows;
    }, [datasets, searchTerm]);

    const headers = useMemo(() => {
        if (datasets.length === 0) return [];
        const contributingDs = datasets.find(ds => ds.data.some((_, i) => ds.statuses[i] === LeadStatus.WAIT));
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
                            <th className="sticky left-0 bg-slate-50 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-48">Status</th>
                            {headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px]">{h}</th>
                            ))}
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Source Dataset</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredRows.length > 0 ? (
                            filteredRows.map((item, flatIdx) => {
                                return (
                                    <tr key={`${item.dsId}-${item.idx}`} className="group hover:bg-slate-50 transition-colors bg-amber-50/20">
                                        <td className="sticky left-0 bg-white group-hover:bg-slate-50 px-6 py-4 border-r border-slate-100 z-10 box-border">
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.ACCEPTED)} className="p-2 rounded-lg text-slate-300 hover:bg-emerald-50 hover:text-emerald-500 transition-all"><CheckCircle className="w-5 h-5" /></button>
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.WAIT)} className="p-2 rounded-lg bg-amber-100 text-amber-600 shadow-sm transition-all"><PauseCircle className="w-5 h-5" /></button>
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.DECLINED)} className="p-2 rounded-lg text-slate-300 hover:bg-rose-50 hover:text-rose-500 transition-all"><XCircle className="w-5 h-5" /></button>
                                                <ManageClientButton dsId={item.dsId} rowIdx={item.idx} rowData={item.row} />
                                            </div>
                                        </td>
                                        {headers.map((h, i) => {
                                            const cellValue = item.row[h] || '';
                                            const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                            const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                            const isEditing = editingCell?.dsId === item.dsId && editingCell?.rowIndex === item.idx && editingCell?.column === h;
                                            return (
                                                <td key={i} className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                                                    {isEditing ? (
                                                        <input autoFocus className="w-full bg-white border border-indigo-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-500" value={editingCell.value} onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })} onBlur={handleCellSave} onKeyDown={(e) => e.key === 'Enter' && handleCellSave()} />
                                                    ) : (
                                                        <div className="flex items-center gap-2 group/cell">
                                                            <span onClick={() => isBusinessName && copyToClipboard(cellValue)} className={`truncate max-w-[200px] block ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`}>{cellValue || '-'}</span>
                                                            {isBusinessName && <button onClick={() => copyToClipboard(cellValue)} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all">{copiedText === cellValue ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}</button>}
                                                            {isEditable && <button onClick={() => setEditingCell({ dsId: item.dsId, rowIndex: item.idx, column: h, value: cellValue })} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all"><Edit2 className="w-3 h-3" /></button>}
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td className="px-6 py-4 text-xs font-bold text-indigo-500 whitespace-nowrap italic">{item.dsName}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr><td colSpan={headers.length + 2} className="py-20 text-center text-slate-400"><div className="flex flex-col items-center gap-2"><Filter className="w-8 h-8 opacity-20" /><p className="text-sm font-medium">No waitlisted leads found.</p></div></td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
