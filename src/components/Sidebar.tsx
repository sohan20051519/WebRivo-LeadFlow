"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Calculator,
    CheckCircle,
    PauseCircle,
    Upload,
    X,
    Loader2,
    Send,
    FileText,
    Edit2,
    Trash2
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function Sidebar() {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
        filesToUpload,
        addFilesToUpload,
        removeFileFromUpload,
        clearUploadQueue,
        uploading,
        processUploadQueue,
        visibleDatasets,
        searchTerm,
        deleteDataset,
        renameDataset,
    } = useLeadFlow();

    const pathname = usePathname();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempName, setTempName] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addFilesToUpload(Array.from(e.target.files));
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("PERMANENT DELETE: Are you sure you want to remove this dataset from the cloud database?")) return;
        setDeletingId(id);
        await deleteDataset(id);
        setDeletingId(null);
        if (pathname === `/dataset/${id}`) {
            router.push('/dash');
        }
    };

    const handleRename = async () => {
        if (editingId && tempName.trim()) {
            await renameDataset(editingId, tempName);
        }
        setEditingId(null);
    };

    const filteredDatasets = visibleDatasets.filter(ds =>
        !searchTerm ||
        ds.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ds.headers.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const navItems = [
        { label: 'Dashboard', icon: LayoutDashboard, color: 'text-indigo-500', href: '/dash' },
        { label: 'Pricing Calculator', icon: Calculator, color: 'text-purple-500', href: '/calc' },
        { label: 'Accepted', icon: CheckCircle, color: 'text-emerald-500', href: '/accepted' },
        { label: 'Waitlist', icon: PauseCircle, color: 'text-amber-500', href: '/waitlist' },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <Link href="/dash" className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                            <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800">LeadFlow</h1>
                    </Link>
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
                    <div className="space-y-2">
                        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-white hover:border-indigo-400 transition-all cursor-pointer group">
                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 mb-2" />
                            <span className="text-xs font-semibold text-slate-600">Drop or Select CSV</span>
                            <input type="file" ref={fileInputRef} className="hidden" accept=".csv" multiple onChange={handleFileSelection} />
                        </label>

                        {filesToUpload.length > 0 && (
                            <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 space-y-3">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase text-indigo-400">
                                    <span>Queue ({filesToUpload.length})</span>
                                    <button onClick={clearUploadQueue} className="hover:text-rose-500 text-[10px] font-bold">Clear</button>
                                </div>
                                <div className="max-h-24 overflow-y-auto space-y-1 text-xs">
                                    {filesToUpload.map((f, i) => (
                                        <div key={i} className="flex justify-between items-center bg-white p-2 rounded-md border border-indigo-50">
                                            <span className="truncate flex-1 pr-2">{f.name}</span>
                                            <button onClick={() => removeFileFromUpload(i)}><X className="w-3 h-3 text-slate-400 hover:text-rose-500" /></button>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={processUploadQueue} disabled={uploading} className="w-full py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-md">
                                    {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}Cloud Sync
                                </button>
                            </div>
                        )}
                    </div>

                    <nav className="space-y-1 pt-4 border-t border-slate-100">
                        <p className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigation</p>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-slate-50'
                                        }`}
                                >
                                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-6 space-y-1">
                        <div className="flex items-center justify-between px-3 pb-2">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">History</p>
                        </div>
                        {filteredDatasets.map((ds) => {
                            const isActive = pathname === `/dataset/${ds.id}`;
                            return (
                                <div key={ds.id} className="group relative">
                                    {editingId === ds.id ? (
                                        <div className="px-3 py-1 flex items-center gap-2">
                                            <input autoFocus value={tempName} onChange={(e) => setTempName(e.target.value)} onBlur={handleRename} onKeyDown={(e) => e.key === 'Enter' && handleRename()} className="flex-1 bg-white border border-indigo-200 rounded px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-500" />
                                        </div>
                                    ) : (
                                        <>
                                            <Link href={`/dataset/${ds.id}`} onClick={() => setMobileMenuOpen(false)} className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm text-left transition-all ${isActive ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-500 hover:bg-slate-50'}`}>
                                                {deletingId === ds.id ? <Loader2 className="w-4 h-4 mr-3 animate-spin text-rose-500" /> : <FileText className={`w-4 h-4 mr-3 flex-shrink-0 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`} />}
                                                <span className={`truncate flex-1 ${deletingId === ds.id ? 'opacity-50 text-rose-500 italic' : ''}`}>{ds.name}</span>
                                            </Link>
                                            <div className="absolute right-2 top-1.5 opacity-0 group-hover:opacity-100 flex items-center gap-1 z-10">
                                                <button disabled={!!deletingId} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditingId(ds.id); setTempName(ds.name); }} className="p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-indigo-500 disabled:opacity-50"><Edit2 className="w-3 h-3" /></button>
                                                <button disabled={!!deletingId} className="p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-rose-500 disabled:opacity-50" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDelete(ds.id); }}>
                                                    {deletingId === ds.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
}
