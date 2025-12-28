"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useParams } from 'next/navigation';
import { LeadStatus } from '@/types';
import { useState, useMemo } from 'react';
import { CheckCircle, PauseCircle, XCircle, Copy, Check, Edit2, Filter, Search, Table as TableIcon } from 'lucide-react';

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
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(() => setCopiedText(null), 2000);
    };

    if (!ds) {
        return (
            <div className="h-full flex items-center justify-center text-slate-400">
                <div className="flex flex-col items-center gap-4 glass-card p-10 rounded-2xl">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20"></div>
                        <Filter className="w-10 h-10 opacity-30 relative z-10" />
                    </div>
                    <p className="text-sm font-medium animate-pulse">Loading dataset...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col overflow-hidden bg-slate-50/50 p-4 md:p-6 animate-fade-in relative z-10">
            <div className="flex-1 overflow-auto custom-scrollbar glass-card rounded-2xl border border-white/60 shadow-lg shadow-indigo-500/5 ring-1 ring-slate-900/5">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm">
                        <tr>
                            <th className="sticky left-0 bg-white/95 backdrop-blur-md px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 z-40 w-48 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)]">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-3 h-3" />
                                    Lead Status
                                </div>
                            </th>
                            {ds.headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px] group cursor-default">
                                    <div className="flex items-center gap-2">
                                        {h}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/60">
                        {filteredData.length > 0 ? (
                            filteredData.map(({ row, idx }) => {
                                const status = ds.statuses[idx] || LeadStatus.PENDING;
                                return (
                                    <tr key={idx} className={`group hover:bg-slate-50/80 transition-all duration-200 ${status === LeadStatus.ACCEPTED ? 'bg-emerald-50/30 hover:bg-emerald-50/50' : ''}`}>
                                        <td className="sticky left-0 bg-white group-hover:bg-slate-50/90 px-6 py-3 border-r border-slate-100 z-20 box-border transition-colors shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)]">
                                            <div className="relative min-w-[140px]">
                                                {/* Status Label - shows when status is set (not pending) - Desktop Only */}
                                                {status !== LeadStatus.PENDING && (
                                                    <div className="hidden md:block group-hover:hidden animate-fade-in">
                                                        {status === LeadStatus.ACCEPTED && (
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/90 text-emerald-700 text-[10px] font-bold border border-emerald-200 shadow-sm">
                                                                <CheckCircle className="w-3 h-3" /> Accepted
                                                            </span>
                                                        )}
                                                        {status === LeadStatus.WAIT && (
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100/90 text-amber-700 text-[10px] font-bold border border-amber-200 shadow-sm">
                                                                <PauseCircle className="w-3 h-3" /> Waitlist
                                                            </span>
                                                        )}
                                                        {status === LeadStatus.DECLINED && (
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100/90 text-rose-700 text-[10px] font-bold border border-rose-200 shadow-sm">
                                                                <XCircle className="w-3 h-3" /> Declined
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Status Buttons - show on hover (Desktop) OR always (Mobile) OR when pending */}
                                                <div className={`flex items-center gap-1 ${status !== LeadStatus.PENDING ? 'flex md:hidden md:group-hover:flex' : 'flex'}`}>
                                                    <button
                                                        onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.ACCEPTED)}
                                                        className={`p-1.5 rounded-lg transition-all active:scale-95 ${status === LeadStatus.ACCEPTED ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-100' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500 hover:shadow-sm'}`}
                                                        title="Accept"
                                                    >
                                                        <CheckCircle className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.WAIT)}
                                                        className={`p-1.5 rounded-lg transition-all active:scale-95 ${status === LeadStatus.WAIT ? 'bg-amber-500 text-white shadow-md shadow-amber-200 ring-2 ring-amber-100' : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500 hover:shadow-sm'}`}
                                                        title="Waitlist"
                                                    >
                                                        <PauseCircle className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => updateLeadStatus(ds.id, idx, LeadStatus.DECLINED)}
                                                        className={`p-1.5 rounded-lg transition-all active:scale-95 ${status === LeadStatus.DECLINED ? 'bg-rose-500 text-white shadow-md shadow-rose-200 ring-2 ring-rose-100' : 'text-slate-300 hover:bg-rose-50 hover:text-rose-500 hover:shadow-sm'}`}
                                                        title="Decline"
                                                    >
                                                        <XCircle className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        {ds.headers.map((h, i) => {
                                            const cellValue = row[h] || '';
                                            const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                            const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                            const isEditing = editingCell?.rowIndex === idx && editingCell?.column === h;
                                            return (
                                                <td key={i} className="px-6 py-3 text-sm text-slate-600 whitespace-nowrap">
                                                    {isEditing ? (
                                                        <input
                                                            autoFocus
                                                            className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
                                                            value={editingCell.value}
                                                            onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })}
                                                            onBlur={handleCellSave}
                                                            onKeyDown={(e) => e.key === 'Enter' && handleCellSave()}
                                                        />
                                                    ) : (
                                                        <div className="flex items-center gap-2 group/cell">
                                                            <span
                                                                onClick={() => isBusinessName && copyToClipboard(cellValue)}
                                                                className={`truncate max-w-[200px] md:max-w-[300px] block ${isBusinessName ? 'cursor-copy font-medium text-slate-800 group-hover:text-indigo-600 transition-colors' : ''}`}
                                                                title={cellValue}
                                                            >
                                                                {cellValue || <span className="text-slate-300 italic">-</span>}
                                                            </span>

                                                            <div className="flex items-center opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                                {isBusinessName && (
                                                                    <button
                                                                        onClick={(e) => { e.stopPropagation(); copyToClipboard(cellValue); }}
                                                                        className="p-1.5 rounded-md text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 transition-all"
                                                                    >
                                                                        {copiedText === cellValue ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                                                    </button>
                                                                )}
                                                                {isEditable && (
                                                                    <button
                                                                        onClick={() => setEditingCell({ rowIndex: idx, column: h, value: cellValue })}
                                                                        className="p-1.5 rounded-md text-slate-400 hover:text-indigo-500 hover:bg-slate-100 transition-all"
                                                                    >
                                                                        <Edit2 className="w-3 h-3" />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={ds.headers.length + 1} className="py-32 text-center text-slate-400">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-slate-50 rounded-full">
                                            <Search className="w-8 h-8 opacity-20" />
                                        </div>
                                        <p className="text-sm font-medium">{searchTerm ? `No matches found for "${searchTerm}"` : 'No records in this dataset.'}</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Background blobs */}
            <div className="fixed top-1/4 right-10 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="fixed bottom-10 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        </div>
    );
}
