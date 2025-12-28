"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
    Users,
    CheckCircle,
    PauseCircle,
    Filter,
    ArrowUpRight,
    BarChart3,
    PieChart,
    TrendingUp,
    FileText,
    Loader2,
    Trash2,
} from 'lucide-react';
import { ResponsiveContainer, PieChart as RePieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { GlobalStats, LeadStatus } from '@/types';

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#94a3b8'];

export default function DashboardPage() {
    const { datasets, visibleDatasets, loading, refreshDatasets, searchTerm, deleteDataset } = useLeadFlow();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Stats use ALL datasets (including preserved) to show accurate counts
    const globalStats: GlobalStats = useMemo(() => {
        let stats = { total: 0, accepted: 0, wait: 0, declined: 0, pending: 0 };
        datasets.forEach(ds => {
            stats.total += ds.data.length;
            Object.values(ds.statuses || {}).forEach(s => {
                if (s === LeadStatus.ACCEPTED) stats.accepted++;
                else if (s === LeadStatus.WAIT) stats.wait++;
                else if (s === LeadStatus.DECLINED) stats.declined++;
            });
        });
        stats.pending = stats.total - (stats.accepted + stats.wait + stats.declined);
        return stats;
    }, [datasets]);

    const chartData = [
        { name: 'Accepted', value: globalStats.accepted, color: COLORS[0] },
        { name: 'Waitlist', value: globalStats.wait, color: COLORS[1] },
        { name: 'Declined', value: globalStats.declined, color: COLORS[2] },
        { name: 'Pending', value: globalStats.pending, color: COLORS[3] },
    ];

    // For the Cloud Datasets table, use visibleDatasets (excludes hidden preserved datasets)
    const filteredDatasets = useMemo(() => {
        if (!searchTerm) return visibleDatasets;
        const lower = searchTerm.toLowerCase();
        return visibleDatasets.filter(ds =>
            ds.name.toLowerCase().includes(lower) ||
            ds.headers.some(h => h.toLowerCase().includes(lower))
        );
    }, [visibleDatasets, searchTerm]);

    const handleDeleteDataset = async (datasetId: string) => {
        if (!window.confirm("PERMANENT DELETE: Are you sure you want to remove this dataset from the cloud database?")) return;
        setDeletingId(datasetId);
        await deleteDataset(datasetId);
        setDeletingId(null);
    };

    if (loading && datasets.length === 0) {
        return (
            <div className="h-full flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
                    <p className="text-slate-500 font-medium animate-pulse">Syncing with LeadFlow Database...</p>
                </div>
            </div>
        );
    }

    // If search is active, show filtered results?
    // In App.tsx: if (currentView === 'dashboard' && isSearching) ...
    // Here I should handle search results view vs dashboard overview.

    if (searchTerm.trim() !== '') {
        // Search View - search across ALL leads regardless of status
        let filteredRows: any[] = [];
        let allHeaders: string[] = [];

        const term = searchTerm.trim().toLowerCase();

        datasets.forEach(ds => {
            // Collect headers
            if (allHeaders.length === 0) allHeaders = ds.headers;

            ds.data.forEach((r, i) => {
                // Case-insensitive search across all values
                const values = Object.values(r).map(val => String(val || '').toLowerCase()).join(' ');
                if (values.includes(term) || ds.name.toLowerCase().includes(term)) {
                    filteredRows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, status: ds.statuses[i] || LeadStatus.PENDING });
                }
            });
        });

        const getStatusBadge = (status: LeadStatus) => {
            switch (status) {
                case LeadStatus.ACCEPTED: return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Accepted</span>;
                case LeadStatus.WAIT: return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">Waitlist</span>;
                case LeadStatus.DECLINED: return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">Declined</span>;
                default: return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">Pending</span>;
            }
        };

        return (
            <div className="h-full flex flex-col bg-white overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                    <h3 className="text-lg font-bold text-slate-800">Search Results ({filteredRows.length} matches for "{searchTerm}")</h3>
                </div>
                <div className="flex-1 overflow-auto custom-scrollbar">
                    {filteredRows.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400">
                            <Filter className="w-12 h-12 opacity-20 mb-4" />
                            <p className="text-lg font-medium">No results found for "{searchTerm}"</p>
                            <p className="text-sm mt-1">Try a different search term</p>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 z-20 bg-slate-50 shadow-sm">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                                    {allHeaders.slice(0, 5).map((h, i) => (
                                        <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">{h}</th>
                                    ))}
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Source</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredRows.map((item, idx) => (
                                    <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                                        {allHeaders.slice(0, 5).map((h, i) => (
                                            <td key={i} className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                                                <span className="truncate max-w-[200px] block">{item.row[h] || '-'}</span>
                                            </td>
                                        ))}
                                        <td className="px-6 py-4 text-xs font-bold text-indigo-500 italic">{item.dsName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 h-full overflow-auto custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { id: 'all', label: 'Total Leads', val: globalStats.total, icon: Users, color: 'bg-white text-slate-900 border-slate-100', trend: 'Global Database' },
                        { id: 'accepted', label: 'Accepted', val: globalStats.accepted, icon: CheckCircle, color: 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 border-transparent cursor-pointer', trend: `${((globalStats.accepted / Math.max(globalStats.total, 1)) * 100).toFixed(1)}% Conversion` },
                        { id: 'wait', label: 'Waitlist', val: globalStats.wait, icon: PauseCircle, color: 'bg-amber-500 text-white shadow-lg shadow-amber-100 border-transparent cursor-pointer', trend: 'Nurture Stream' },
                        { id: 'pending', label: 'Pending Review', val: globalStats.pending, icon: Filter, color: 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 border-transparent', trend: 'Action Required' },
                    ].map((s, i) => (
                        <Link key={i} href={s.id === 'accepted' ? '/accepted' : s.id === 'wait' ? '/waitlist' : '#'} className={`${s.color} p-6 rounded-[2rem] border flex flex-col justify-between h-48 group relative overflow-hidden transition-all hover:scale-[1.02] ${s.id === 'all' || s.id === 'pending' ? 'pointer-events-none' : ''}`}>
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl"><s.icon className="w-6 h-6" /></div>
                                    {(s.id === 'accepted' || s.id === 'wait') && <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />}
                                </div>
                                <div>
                                    <p className="text-4xl font-bold tracking-tight mb-1">{s.val.toLocaleString()}</p>
                                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest text-[10px]">{s.label}</p>
                                    <p className="text-[10px] mt-2 font-bold opacity-60">{s.trend}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-[400px]">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-500" /> Lead Pipeline</h3>
                        </div>
                        <div className="flex-1 min-h-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                    <YAxis hide />
                                    <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                    <Bar dataKey="value" radius={[12, 12, 0, 0]}>{chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute top-8 left-8"><h3 className="text-lg font-bold flex items-center gap-2"><PieChart className="w-5 h-5 text-emerald-500" /> Distribution</h3></div>
                        <div className="w-full h-full pt-12">
                            <ResponsiveContainer width="100%" height="100%">
                                <RePieChart><Pie data={chartData} innerRadius={60} outerRadius={100} paddingAngle={8} dataKey="value">{chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Pie><Tooltip /></RePieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="text-lg font-bold">Cloud Datasets</h3>
                        <button onClick={refreshDatasets} className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:underline">
                            <TrendingUp className="w-3 h-3" /> Refresh Sync
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Dataset</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Records</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sync Status</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredDatasets.slice(0, 10).map(ds => (
                                    <tr key={ds.id} className={`group hover:bg-slate-50 transition-colors ${deletingId === ds.id ? 'opacity-30 pointer-events-none bg-rose-50/30' : ''}`}>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                                    {deletingId === ds.id ? <Loader2 className="w-5 h-5 animate-spin text-rose-500" /> : <FileText className="w-5 h-5" />}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm">{ds.name}</p>
                                                    <p className="text-[10px] text-slate-400">{ds.createdAt.toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{ds.data.length} Leads</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                <span className="text-xs font-bold text-slate-500 uppercase">Cloud Live</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/dataset/${ds.id}`}
                                                    className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                                                >
                                                    Manage
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteDataset(ds.id)}
                                                    className="p-2 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                                                    title="Delete Permanently"
                                                    disabled={!!deletingId}
                                                >
                                                    {deletingId === ds.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
