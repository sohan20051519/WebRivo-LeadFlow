"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Upload,
    X,
    Loader2,
    Send,
    FileText,
    Trash2,
    Edit2,
    Database,
    BarChart3,
    Calendar,
    CheckCircle2,
    Clock
} from 'lucide-react';
import { useRef, useState } from 'react';
import { LeadStatus } from '@/types';

export default function DatasetsPage() {
    const {
        visibleDatasets,
        filesToUpload,
        addFilesToUpload,
        removeFileFromUpload,
        clearUploadQueue,
        uploading,
        processUploadQueue,
        deleteDataset,
        renameDataset,
        searchTerm,
        setSearchTerm
    } = useLeadFlow();

    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempName, setTempName] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            addFilesToUpload(Array.from(e.dataTransfer.files));
            e.dataTransfer.clearData();
        }
    };

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addFilesToUpload(Array.from(e.target.files));
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!window.confirm("PERMANENT DELETE: Are you sure you want to remove this dataset from the cloud database?")) return;
        setDeletingId(id);
        await deleteDataset(id);
        setDeletingId(null);
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

    return (
        <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Upload Section */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-indigo-500" /> Upload New Leads
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Drag & Drop Area */}
                            <label
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer group overflow-hidden h-64 
                                ${isDragging ? 'border-indigo-500 bg-indigo-50 scale-[1.02] shadow-lg shadow-indigo-500/10' : 'border-indigo-100 bg-indigo-50/30 hover:bg-indigo-50/60 hover:border-indigo-300'}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 transition-all duration-500 ${isDragging ? 'opacity-100 from-indigo-500/5 to-purple-500/5' : 'group-hover:from-indigo-500/5 group-hover:to-purple-500/5'}`} />
                                <div className={`bg-white p-4 rounded-full shadow-sm mb-4 transition-all duration-300 ${isDragging ? 'scale-110 shadow-md ring-4 ring-indigo-50' : 'group-hover:scale-110 group-hover:shadow-md'}`}>
                                    <Upload className={`w-8 h-8 transition-colors ${isDragging ? 'text-indigo-600' : 'text-indigo-500'}`} />
                                </div>
                                <span className={`text-lg font-semibold transition-colors ${isDragging ? 'text-indigo-700' : 'text-slate-700'}`}>
                                    {isDragging ? 'Drop CSV Here' : 'Upload CSV'}
                                </span>
                                <span className="text-sm text-slate-400 mt-2">Drag file here or click to browse</span>
                                <input type="file" ref={fileInputRef} className="hidden" accept=".csv" multiple onChange={handleFileSelection} />
                            </label>

                            {/* Queue Area */}
                            <div className="flex flex-col h-64 bg-slate-50 rounded-2xl border border-slate-200 p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Upload Queue ({filesToUpload.length})</span>
                                    {filesToUpload.length > 0 && (
                                        <button onClick={clearUploadQueue} className="text-xs font-bold text-rose-500 hover:text-rose-600">CLEAR ALL</button>
                                    )}
                                </div>

                                {filesToUpload.length === 0 ? (
                                    <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                                        <FileText className="w-8 h-8 opacity-20 mb-2" />
                                        <span className="text-sm">No files selected</span>
                                    </div>
                                ) : (
                                    <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar mb-4">
                                        {filesToUpload.map((f, i) => (
                                            <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <div className="bg-indigo-50 p-1.5 rounded-md">
                                                        <FileText className="w-4 h-4 text-indigo-500" />
                                                    </div>
                                                    <span className="truncate text-sm text-slate-700 font-medium">{f.name}</span>
                                                    <span className="text-xs text-slate-400">({(f.size / 1024).toFixed(1)} KB)</span>
                                                </div>
                                                <button onClick={() => removeFileFromUpload(i)} className="text-slate-400 hover:text-rose-500 transition-colors">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <button
                                    onClick={processUploadQueue}
                                    disabled={filesToUpload.length === 0 || uploading}
                                    className="w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                                >
                                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                    {uploading ? 'Syncing to Cloud...' : 'Process Files'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Datasets Grid */}
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-indigo-500" /> Existing Datasets
                            </h2>
                            <div className="text-sm text-slate-500">
                                Total: {filteredDatasets.length}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredDatasets.map(ds => {
                                const total = ds.data.length;
                                const processed = Object.keys(ds.statuses || {}).length;
                                const accepted = Object.values(ds.statuses || {}).filter(s => s === LeadStatus.ACCEPTED).length;
                                const completion = total > 0 ? Math.round((processed / total) * 100) : 0;

                                return (
                                    <Link key={ds.id} href={`/dataset/${ds.id}`} className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden relative">
                                        {/* Progress Bar Top */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                                            <div className="h-full bg-indigo-500 transition-all" style={{ width: `${completion}%` }} />
                                        </div>

                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="bg-indigo-50 p-2 rounded-lg">
                                                    <FileText className="w-6 h-6 text-indigo-500" />
                                                </div>
                                                <div className="flex gap-1" onClick={(e) => e.preventDefault()}>
                                                    <button
                                                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditingId(ds.id); setTempName(ds.name); }}
                                                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Rename"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDelete(ds.id, e)}
                                                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete"
                                                    >
                                                        {deletingId === ds.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                            </div>

                                            {editingId === ds.id ? (
                                                <div className="mb-2" onClick={(e) => e.preventDefault()}>
                                                    <input
                                                        autoFocus
                                                        value={tempName}
                                                        onChange={(e) => setTempName(e.target.value)}
                                                        onBlur={handleRename}
                                                        onKeyDown={(e) => e.key === 'Enter' && handleRename()}
                                                        className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                            ) : (
                                                <h3 className="font-bold text-slate-800 text-lg mb-1 truncate group-hover:text-indigo-600 transition-colors">
                                                    {ds.name}
                                                </h3>
                                            )}

                                            <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-6">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(ds.createdAt).toLocaleDateString()}
                                                <span>•</span>
                                                <Clock className="w-3 h-3" />
                                                {new Date(ds.createdAt).toLocaleTimeString()}
                                            </p>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Leads</span>
                                                    <p className="text-xl font-bold text-slate-700">{total}</p>
                                                </div>
                                                <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                                                    <span className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">Accepted</span>
                                                    <p className="text-xl font-bold text-emerald-700">{accepted}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
