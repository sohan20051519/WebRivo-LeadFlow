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
    Search,
    MoreHorizontal,
    DollarSign,
    Calendar,
    Wallet
} from 'lucide-react';
import { ResponsiveContainer, PieChart as RePieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, AreaChart, Area } from 'recharts';
import { GlobalStats, LeadStatus } from '@/types';

const COLORS = ['#8b5cf6', '#10b981', '#f59e0b', '#f43f5e', '#94a3b8']; // Violet, Emerald, Amber, Rose, Slate

export default function DashboardPage() {
    const { datasets, visibleDatasets, loading, refreshDatasets, searchTerm, deleteDataset, clients, updateLeadStatus } = useLeadFlow();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Revenue Calculations
    const revenueStats = useMemo(() => {
        const now = new Date();
        const currentMonth = now.getMonth(); // 0-indexed
        const currentYear = now.getFullYear();

        let month = 0, year = 0, all = 0;

        clients.forEach(c => {
            const paid = c.amount_paid || 0;
            all += paid;

            if (c.created_at) {
                const d = new Date(c.created_at);
                if (d.getFullYear() === currentYear) {
                    year += paid;
                    if (d.getMonth() === currentMonth) {
                        month += paid;
                    }
                }
            }
        });

        return { month, year, all };
    }, [clients]);

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
        { name: 'Total', value: globalStats.total, color: COLORS[4] },
        { name: 'Accepted', value: globalStats.accepted, color: COLORS[1] },
        { name: 'Waitlist', value: globalStats.wait, color: COLORS[2] },
        { name: 'Pending', value: globalStats.pending, color: COLORS[0] },
        { name: 'Declined', value: globalStats.declined, color: COLORS[3] },
    ];

    // Filtered for display
    const pieData = [
        { name: 'Accepted', value: globalStats.accepted, color: COLORS[1] },
        { name: 'Waitlist', value: globalStats.wait, color: COLORS[2] },
        { name: 'Pending', value: globalStats.pending, color: COLORS[0] },
        { name: 'Declined', value: globalStats.declined, color: COLORS[3] },
    ].filter(d => d.value > 0);

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
            <div className="h-full flex items-center justify-center bg-slate-50/50 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse"></div>
                        <Loader2 className="w-12 h-12 animate-spin text-indigo-600 relative z-10" />
                    </div>
                    <p className="text-slate-500 font-medium animate-pulse tracking-wide text-sm">SYNCING LEADFLOW...</p>
                </div>
            </div>
        );
    }

    if (searchTerm.trim() !== '') {
        // Search View Logic
        let filteredRows: any[] = [];
        let allHeaders: string[] = [];

        const term = searchTerm.trim().toLowerCase();

        datasets.forEach(ds => {
            if (allHeaders.length === 0) allHeaders = ds.headers;
            ds.data.forEach((r, i) => {
                const values = Object.values(r).map(val => String(val || '').toLowerCase()).join(' ');
                if (values.includes(term) || ds.name.toLowerCase().includes(term)) {
                    filteredRows.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, status: ds.statuses[i] || LeadStatus.PENDING });
                }
            });
        });

        const getStatusBadge = (status: LeadStatus) => {
            switch (status) {
                case LeadStatus.ACCEPTED: return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100/80 text-emerald-700 border border-emerald-200">Accepted</span>;
                case LeadStatus.WAIT: return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100/80 text-amber-700 border border-amber-200">Waitlist</span>;
                case LeadStatus.DECLINED: return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100/80 text-rose-700 border border-rose-200">Declined</span>;
                default: return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">Pending</span>;
            }
        };

        return (
            <div className="h-full flex flex-col bg-slate-50/50">
                <div className="px-8 py-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Search className="w-5 h-5 text-indigo-500" />
                        Search Results
                        <span className="text-sm font-normal text-slate-500 ml-2 bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-100">{filteredRows.length} matches</span>
                    </h3>
                </div>
                <div className="flex-1 overflow-auto px-8 pb-8 custom-scrollbar">
                    {filteredRows.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-slate-400 glass-card rounded-3xl">
                            <Filter className="w-12 h-12 opacity-20 mb-4" />
                            <p className="text-lg font-medium">No results found for "{searchTerm}"</p>
                            <p className="text-xs mt-1 bg-slate-100 px-2 py-1 rounded">Try checking spelling or generic terms</p>
                        </div>
                    ) : (
                        <div className="glass-card rounded-2xl overflow-hidden border-0 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/80 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                                        {allHeaders.slice(0, 4).map((h, i) => (
                                            <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">{h}</th>
                                        ))}
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredRows.map((item, idx) => {
                                        const client = clients.find(c => c.source_dataset_id === item.dsId && c.source_row_index === item.idx);
                                        return (
                                            <tr key={idx} className="group hover:bg-slate-50/80 transition-colors">
                                                <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                                                {allHeaders.slice(0, 4).map((h, i) => (
                                                    <td key={i} className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                                                        <span className="truncate max-w-[200px] block font-medium">{item.row[h] || '-'}</span>
                                                    </td>
                                                ))}
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="hidden group-hover:block text-[10px] text-slate-300 mr-2">{item.dsName}</span>
                                                        {client && (
                                                            <Link href={`/clients/${client.id}`} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors text-xs font-bold flex items-center gap-1">
                                                                Client <ArrowUpRight className="w-3 h-3" />
                                                            </Link>
                                                        )}
                                                        <div className="flex items-center gap-1 pl-2 border-l border-slate-200 ml-2">
                                                            <button
                                                                onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.ACCEPTED)}
                                                                className={`p-1.5 rounded-lg transition-colors ${item.status === LeadStatus.ACCEPTED ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-emerald-50 text-slate-400 hover:text-emerald-600'}`}
                                                                title="Accept"
                                                            >
                                                                <CheckCircle className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.WAIT)}
                                                                className={`p-1.5 rounded-lg transition-colors ${item.status === LeadStatus.WAIT ? 'bg-amber-100 text-amber-600' : 'hover:bg-amber-50 text-slate-400 hover:text-amber-600'}`}
                                                                title="Waitlist"
                                                            >
                                                                <PauseCircle className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => updateLeadStatus(item.dsId, item.idx, LeadStatus.DECLINED)}
                                                                className={`p-1.5 rounded-lg transition-colors ${item.status === LeadStatus.DECLINED ? 'bg-rose-100 text-rose-600' : 'hover:bg-rose-50 text-slate-400 hover:text-rose-600'}`}
                                                                title="Decline"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 h-full overflow-auto custom-scrollbar no-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">

                {/* Bento Grid Layout - Hybrid Mobile/Desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-[minmax(140px,auto)] grid-flow-dense pb-6">

                    {/* 1. Revenue: Month */}
                    <div className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:shadow-emerald-500/10 transition-all duration-300 border border-slate-100/50">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Calendar className="w-16 h-16 text-emerald-500" />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-500">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">This Month</span>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">₹{revenueStats.month.toLocaleString()}</div>
                                <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-2">Collected</div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Revenue: Year */}
                    <div className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-100/50">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp className="w-16 h-16 text-indigo-500" />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-500">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">This Year</span>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">₹{revenueStats.year.toLocaleString()}</div>
                                <div className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mt-2">Annual</div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Hero: Total Leads (Mobile: Top Order, Desktop: Pos 3) */}
                    <div className="col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 shadow-2xl shadow-slate-900/20 flex flex-col justify-between border border-white/10 order-first lg:order-none">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                            <Users className="w-56 h-56" />
                        </div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                                <Users className="w-6 h-6 text-slate-200" />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Database</span>
                                <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 mt-1 shadow-sm">Live Sync Active</span>
                            </div>
                        </div>
                        <div className="relative z-10 mt-6">
                            <div className="text-6xl md:text-7xl font-black tracking-tighter mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                                {globalStats.total.toLocaleString()}
                            </div>
                            <p className="text-slate-400 font-medium text-sm md:text-base">Total Leads Processed</p>
                        </div>
                    </div>

                    {/* 4. Revenue: All Time */}
                    <div className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:shadow-purple-500/10 transition-all duration-300 border border-slate-100/50">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Wallet className="w-16 h-16 text-purple-500" />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-purple-50 rounded-lg text-purple-500">
                                    <Wallet className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">All Time</span>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">₹{revenueStats.all.toLocaleString()}</div>
                                <div className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full inline-block mt-2">Total Earnings</div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Accepted Leads */}
                    <Link href="/accepted" className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:ring-2 hover:ring-emerald-500/20 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50/50 flex flex-col justify-between border border-slate-100/50">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-1.5 bg-emerald-100/50 rounded-lg text-emerald-600">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Accepted</span>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{globalStats.accepted}</div>
                            <div className="mt-2 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: `${((globalStats.accepted / Math.max(globalStats.total, 1)) * 100)}%` }}></div>
                            </div>
                        </div>
                    </Link>

                    {/* 6. Waitlist Leads */}
                    <Link href="/waitlist" className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:ring-2 hover:ring-amber-500/20 transition-all duration-300 bg-gradient-to-br from-white to-amber-50/50 flex flex-col justify-between border border-slate-100/50">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-4 h-4 text-amber-500" />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-1.5 bg-amber-100/50 rounded-lg text-amber-600">
                                <PauseCircle className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Waitlist</span>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{globalStats.wait}</div>
                            <p className="text-[9px] text-slate-400 font-medium mt-1">Nurture Pipeline</p>
                        </div>
                    </Link>

                    {/* 7. Pipeline Bar Chart */}
                    <div className="col-span-2 row-span-2 glass-card p-5 rounded-3xl flex flex-col border border-slate-100/50">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">Lead Pipeline</h3>
                                <p className="text-[10px] text-slate-400 font-medium">Status distribution</p>
                            </div>
                            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                                <BarChart3 className="w-4 h-4 text-indigo-500" />
                            </div>
                        </div>
                        <div className="flex-1 min-h-[160px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} dy={10} />
                                    <YAxis hide />
                                    <Tooltip cursor={{ fill: '#f8fafc', radius: 8 }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', padding: '8px', fontSize: '12px' }} />
                                    <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={32}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.9} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 8. Donut Distribution */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:row-span-2 glass-card p-5 rounded-3xl flex flex-col relative overflow-hidden border border-slate-100/50">
                        <div className="flex items-center justify-between mb-2 relative z-10">
                            <div>
                                <h3 className="text-xs font-bold text-slate-800">Distribution</h3>
                            </div>
                            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                                <PieChart className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                        </div>
                        <div className="flex-1 relative min-h-[160px] flex items-center justify-center">
                            <div className="w-full h-full absolute inset-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RePieChart>
                                        <Pie data={pieData} innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value" stroke="none">
                                            {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                        </Pie>
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }} />
                                    </RePieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="pointer-events-none flex flex-col items-center justify-center z-10">
                                <span className="text-lg font-bold text-slate-800">{globalStats.total}</span>
                                <span className="text-[7px] uppercase font-bold text-slate-400 tracking-wider">Leads</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 justify-center mt-2 relative z-10">
                            {pieData.map((d, i) => (
                                <div key={i} className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                                    <span className="text-[8px] font-bold text-slate-500">{d.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 9. Pending Leads */}
                    <div className="glass-card p-5 rounded-3xl relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity bg-gradient-to-br from-white to-slate-50/50 flex flex-col justify-between border border-slate-100/50 order-last lg:order-none">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
                                <Filter className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Pending</span>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{globalStats.pending}</div>
                            <p className="text-[9px] text-slate-400 font-medium mt-1">Action Required</p>
                        </div>
                    </div>

                </div>

                {/* Cloud Datasets Table */}
                <div className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-sm">
                    <div className="p-6 md:p-8 border-b border-slate-100/50 flex items-center justify-between bg-white/30 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-50 rounded-xl">
                                <FileText className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Cloud Datasets</h3>
                                <p className="text-xs text-slate-400">Manage your synced CSV files</p>
                            </div>
                        </div>
                        <button
                            onClick={refreshDatasets}
                            className="text-indigo-600 font-bold text-xs flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Refresh
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50/50 text-slate-400">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest pl-8">Dataset Name</th>
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Records / Size</th>
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Live Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right pr-8">Context Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50/80">
                                {filteredDatasets.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-12 text-center text-slate-400">
                                            No datasets found. Upload a CSV to get started.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredDatasets.slice(0, 10).map(ds => (
                                        <tr key={ds.id} className={`group hover:bg-slate-50/50 transition-all duration-200 ${deletingId === ds.id ? 'opacity-30 pointer-events-none bg-rose-50/30' : ''}`}>
                                            <td className="px-6 py-4 pl-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                                                        {deletingId === ds.id ? <Loader2 className="w-5 h-5 animate-spin text-rose-500" /> : <FileText className="w-5 h-5" />}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-slate-700 group-hover:text-indigo-600 transition-colors">{ds.name}</p>
                                                        <p className="text-[10px] font-medium text-slate-400">{ds.createdAt ? new Date(ds.createdAt).toLocaleDateString() : 'Just now'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-600">{ds.data.length} Leads</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">Synced Cloud Storage</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="relative flex h-2.5 w-2.5">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                                    </span>
                                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Active</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right pr-8">
                                                <div className="flex items-center justify-end gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <Link
                                                        href={`/dataset/${ds.id}`}
                                                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                                                    >
                                                        Manage
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteDataset(ds.id)}
                                                        className="p-2 bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 rounded-lg transition-all"
                                                        title="Delete Permanently"
                                                        disabled={!!deletingId}
                                                    >
                                                        {deletingId === ds.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    {filteredDatasets.length > 10 && (
                        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 10 of {filteredDatasets.length} datasets</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Background elements for depth */}
            <div className="fixed top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="fixed bottom-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        </div>
    );
}
