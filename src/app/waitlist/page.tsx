"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { LeadStatus } from '@/types';
import { useState, useMemo } from 'react';
import { CheckCircle, PauseCircle, XCircle, Copy, Check, Edit2, Filter } from 'lucide-react';

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
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <div className="h-full flex flex-col bg-slate-50/50 p-4 md:p-6 animate-fade-in relative z-10 overflow-hidden">
            <div className="flex-1 overflow-auto custom-scrollbar glass-card rounded-2xl border border-white/60 shadow-lg shadow-amber-500/5 ring-1 ring-slate-900/5">
                <table className="w-full text-left border-collapse min-w-[300px] md:min-w-[800px]">
                    <thead className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm">
                        <tr>
                            <th className="sticky left-0 bg-white/95 backdrop-blur-md px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-auto md:w-56 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)]">
                                <span className="flex items-center gap-2"><PauseCircle className="w-3 h-3 text-amber-500" /> Waitlist Actions</span>
                            </th>
                            {headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px]">{h}</th>
                            ))}
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Source ID</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/60">
                        {filteredRows.length > 0 ? (
                            filteredRows.map((item, flatIdx) => {
                                return (
                                    <tr key={`${item.dsId}-${item.idx}`} className="group hover:bg-slate-50/80 transition-all duration-200 bg-amber-50/10">
                                        <td className="sticky left-0 bg-white group-hover:bg-slate-50/90 px-4 py-3 border-r border-slate-100 z-20 box-border shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)] transition-colors">
                                            <div className="flex items-center gap-1.5">
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.ACCEPTED)} className="p-1.5 rounded-lg text-slate-300 hover:bg-emerald-50 hover:text-emerald-500 transition-all hover:scale-105" title="Accept"><CheckCircle className="w-4 h-4 md:w-5 md:h-5" /></button>
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.WAIT)} className="p-1.5 rounded-lg bg-amber-500 text-white shadow-md shadow-amber-200 ring-2 ring-amber-100 transition-all scale-105"><PauseCircle className="w-4 h-4 md:w-5 md:h-5" /></button>
                                                <button onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.DECLINED)} className="p-1.5 rounded-lg text-slate-300 hover:bg-rose-50 hover:text-rose-500 transition-all hover:scale-105" title="Decline"><XCircle className="w-4 h-4 md:w-5 md:h-5" /></button>
                                            </div>
                                        </td>
                                        {headers.map((h, i) => {
                                            const cellValue = item.row[h] || '';
                                            const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                            const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                            const isEditing = editingCell?.dsId === item.dsId && editingCell?.rowIndex === item.idx && editingCell?.column === h;
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
                                                                className={`truncate max-w-[150px] md:max-w-[250px] block ${isBusinessName ? 'cursor-copy font-medium text-slate-800 group-hover:text-indigo-600 transition-colors' : ''}`}
                                                                title={cellValue}
                                                            >
                                                                {cellValue || <span className="text-slate-300 italic">-</span>}
                                                            </span>
                                                            <div className="flex items-center opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                                {isBusinessName && (
                                                                    <button
                                                                        onClick={() => copyToClipboard(cellValue)}
                                                                        className="p-1.5 rounded-md text-slate-400 hover:text-indigo-500 hover:bg-slate-100 transition-all"
                                                                    >
                                                                        {copiedText === cellValue ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                                                    </button>
                                                                )}
                                                                {isEditable && (
                                                                    <button
                                                                        onClick={() => setEditingCell({ dsId: item.dsId, rowIndex: item.idx, column: h, value: cellValue })}
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
                                        <td className="px-6 py-4 text-xs font-bold text-indigo-500 whitespace-nowrap italic text-right">
                                            <span className="bg-indigo-50 px-2 py-1 rounded-lg">{item.dsName}</span>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={headers.length + 2} className="py-32 text-center text-slate-400">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-amber-50 rounded-full">
                                            <Filter className="w-8 h-8 opacity-20 text-amber-500" />
                                        </div>
                                        <p className="text-sm font-medium">No waitlisted leads found.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Background blobs */}
            <div className="fixed top-1/4 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        </div>
    );
}
