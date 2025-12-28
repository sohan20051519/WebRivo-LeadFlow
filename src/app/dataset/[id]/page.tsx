"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useParams } from 'next/navigation';
import { LeadStatus } from '@/types';
import { useState, useMemo } from 'react';
import { CheckCircle, PauseCircle, XCircle, Copy, Check, Edit2, Filter } from 'lucide-react';

export default function DatasetPage() {
    const params = useParams();
    const id = params?.id as string;
    const { datasets, updateLeadStatus, updateCell, showFeedback, searchTerm } = useLeadFlow();
    const [editingCell, setEditingCell] = useState<{ rowIndex: number, column: string, value: string } | null>(null);
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const ds = datasets.find(d => d.id === id);

    // Filter rows based on search term
    const filteredData = useMemo(() => {
        if (!ds) return [];
        const term = searchTerm ? searchTerm.trim().toLowerCase() : '';
        if (!term) return ds.data.map((row, idx) => ({ row, idx }));

        return ds.data
            .map((row, idx) => ({ row, idx }))
            .filter(({ row }) => {
                const values = Object.values(row).map(v => String(v || '').toLowerCase()).join(' ');
                return values.includes(term);
            });
    }, [ds, searchTerm]);

    const handleCellSave = async () => {
        if (!editingCell || !ds) return;
        const { rowIndex, column, value } = editingCell;
        await updateCell(ds.id, rowIndex, column, value);
        setEditingCell(null);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(() => setCopiedText(null), 2000);
    };

    if (!ds) {
        return (
            <div className="h-full flex items-center justify-center text-slate-400">
                <div className="flex flex-col items-center gap-2">
                    <Filter className="w-8 h-8 opacity-20" />
                    <p className="text-sm font-medium">Dataset not found or loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-white overflow-hidden">
            <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[300px] md:min-w-[800px]">
                    <thead className="sticky top-0 z-20 bg-slate-50 shadow-sm">
                        <tr>
                            <th className="sticky left-0 bg-slate-50 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-48">Status</th>
                            {ds.headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px]">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredData.length > 0 ? (
                            filteredData.map(({ row, idx }) => {
                                const status = ds.statuses[idx] || LeadStatus.PENDING;
                                return (
                                    <tr key={idx} className={`group hover:bg-slate-50 transition-colors ${status === LeadStatus.ACCEPTED ? 'bg-emerald-50/20' : ''}`}>
                                        <td className="sticky left-0 bg-white group-hover:bg-slate-50 px-6 py-4 border-r border-slate-100 z-10 box-border">
                                            <div className="relative min-w-[120px]">
                                                {/* Status Label - shows when status is set (not pending) */}
                                                {status !== LeadStatus.PENDING && (
                                                    <div className="group-hover:hidden">
                                                        {status === LeadStatus.ACCEPTED && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                                                                <CheckCircle className="w-3.5 h-3.5" /> Accepted
                                                            </span>
                                                        )}
                                                        {status === LeadStatus.WAIT && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                                                                <PauseCircle className="w-3.5 h-3.5" /> Waitlist
                                                            </span>
                                                        )}
                                                        {status === LeadStatus.DECLINED && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                                                                <XCircle className="w-3.5 h-3.5" /> Declined
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Status Buttons - show on hover OR when pending */}
                                                <div className={`flex items-center gap-2 ${status !== LeadStatus.PENDING ? 'hidden group-hover:flex' : 'flex'}`}>
                                                    <button onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.ACCEPTED)} className={`p-2 rounded-lg transition-all ${status === LeadStatus.ACCEPTED ? 'bg-emerald-100 text-emerald-600 shadow-sm' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500'}`}><CheckCircle className="w-5 h-5" /></button>
                                                    <button onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.WAIT)} className={`p-2 rounded-lg transition-all ${status === LeadStatus.WAIT ? 'bg-amber-100 text-amber-600 shadow-sm' : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500'}`}><PauseCircle className="w-5 h-5" /></button>
                                                    <button onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.DECLINED)} className={`p-2 rounded-lg transition-all ${status === LeadStatus.DECLINED ? 'bg-rose-100 text-rose-600 shadow-sm' : 'text-slate-300 hover:bg-rose-50 hover:text-rose-500'}`}><XCircle className="w-5 h-5" /></button>
                                                </div>
                                            </div>
                                        </td>
                                        {ds.headers.map((h, i) => {
                                            const cellValue = row[h] || '';
                                            const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                            const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                            const isEditing = editingCell?.rowIndex === idx && editingCell?.column === h;
                                            return (
                                                <td key={i} className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                                                    {isEditing ? (
                                                        <input autoFocus className="w-full bg-white border border-indigo-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-500" value={editingCell.value} onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })} onBlur={handleCellSave} onKeyDown={(e) => e.key === 'Enter' && handleCellSave()} />
                                                    ) : (
                                                        <div className="flex items-center gap-2 group/cell">
                                                            <span onClick={() => isBusinessName && copyToClipboard(cellValue)} className={`truncate max-w-[300px] block ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`}>{cellValue || '-'}</span>
                                                            {isBusinessName && <button onClick={() => copyToClipboard(cellValue)} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all">{copiedText === cellValue ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}</button>}
                                                            {isEditable && <button onClick={() => setEditingCell({ rowIndex: idx, column: h, value: cellValue })} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all"><Edit2 className="w-3 h-3" /></button>}
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr><td colSpan={ds.headers.length + 1} className="py-20 text-center text-slate-400"><div className="flex flex-col items-center gap-2"><Filter className="w-8 h-8 opacity-20" /><p className="text-sm font-medium">{searchTerm ? `No results for "${searchTerm}"` : 'No records found.'}</p></div></td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
