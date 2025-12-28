"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { Client, LeadStatus } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Upload, Save, CheckCircle, ExternalLink, Github, Database, Globe, Briefcase, DollarSign, Layout, Server, Shield, Layers, Plus, Trash2, Check, XCircle, ArrowLeft } from 'lucide-react';

const PACKAGES = [
    { id: 'basic', name: 'Basic', price: 2999 },
    { id: 'business', name: 'Business', price: 7999 },
    { id: 'premium', name: 'Premium', price: 19999 },
    { id: 'custom', name: 'Custom', price: 0 }
];

const FEATURES = [
    { id: 'mobile', name: 'Mobile Design' },
    { id: 'seo', name: 'SEO Core' },
    { id: 'booking', name: 'Booking System' },
    { id: 'payment', name: 'Payment Gateway' },
    { id: 'admin', name: 'Admin Dashboard' },
    { id: 'whatsapp', name: 'WhatsApp Link' },
    { id: 'maps', name: 'Google Maps' }
];

const ADDONS = [
    { id: 'maint', name: 'Maintenance' },
    { id: 'rank', name: 'Rank Setup' },
    { id: 'wa_auto', name: 'WA Automation' },
    { id: 'lang', name: 'Multilingual' },
    { id: 'ai_bot', name: 'AI Chatbot' } // Additional one
];

const STATUSES = [
    { id: 'onboarding', label: 'Onboarding', color: 'bg-blue-500' },
    { id: 'development', label: 'Development', color: 'bg-amber-500' },
    { id: 'review', label: 'In Review', color: 'bg-indigo-500' },
    { id: 'live', label: 'Live', color: 'bg-emerald-500' },
    { id: 'maintenance', label: 'Maintenance', color: 'bg-slate-500' }
];

export default function ClientPage() {
    const params = useParams();
    const router = useRouter();
    const { getClient, updateClient, deleteClient, updateLeadStatus, showFeedback } = useLeadFlow();
    const [client, setClient] = useState<Client | null>(null);
    const [loading, setLoading] = useState(true);
    const [autoSaving, setAutoSaving] = useState(false);
    const isInitialLoad = useRef(true);

    // New item state
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    useEffect(() => {
        const load = async () => {
            if (params.id) {
                const data = await getClient(params.id as string);
                if (data) {
                    setClient(data);
                } else {
                    showFeedback("Client not found", 'error');
                    router.push('/dash');
                }
                setLoading(false);
            }
        };
        load();
    }, [params.id]);

    // Auto-save with debounce
    useEffect(() => {
        if (!client || isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }

        const timeoutId = setTimeout(async () => {
            setAutoSaving(true);
            try {
                const { id, created_at, ...updates } = client;
                await updateClient(client.id, updates);
            } finally {
                setAutoSaving(false);
            }
        }, 1000); // 1 second debounce

        return () => clearTimeout(timeoutId);
    }, [client]);

    const handleChange = (field: keyof Client, value: any) => {
        if (!client) return;
        setClient({ ...client, [field]: value });
    };

    const handleArrayToggle = (field: 'core_upgrades' | 'add_ons' | 'domains', item: string) => {
        if (!client) return;
        const current = client[field] || [];
        const updated = current.includes(item)
            ? current.filter(i => i !== item)
            : [...current, item];
        handleChange(field, updated);
    };

    const handleDomainToggle = (domain: string) => {
        if (!client) return;
        handleArrayToggle('domains', domain);
    }

    const addCustomItem = () => {
        if (!client || !newItemName) return;
        const price = parseInt(newItemPrice) || 0;
        const newItems = [...(client.custom_items || []), { name: newItemName, price }];
        handleChange('custom_items', newItems);
        setNewItemName('');
        setNewItemPrice('');
    };

    const removeCustomItem = (idx: number) => {
        if (!client) return;
        const newItems = [...client.custom_items];
        newItems.splice(idx, 1);
        handleChange('custom_items', newItems);
    }

    if (loading) return <div className="h-full flex items-center justify-center text-slate-400">Loading client profile...</div>;
    if (!client) return null;

    return (
        <div className="h-full flex flex-col bg-slate-50 overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center z-10 shadow-sm relative">
                <button onClick={() => router.back()} className="absolute left-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-all" title="Back">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="pl-8">
                    <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        {client.business_name}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full text-white uppercase tracking-wider ${STATUSES.find(s => s.id === client.status)?.color || 'bg-gray-400'}`}>
                            {STATUSES.find(s => s.id === client.status)?.label}
                        </span>
                        {autoSaving && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 uppercase tracking-wider flex items-center gap-1">
                                <Upload className="w-3 h-3 animate-spin" /> Saving...
                            </span>
                        )}
                    </h1>
                    <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                        <Briefcase className="w-3 h-3" /> {client.contact_name || 'No Contact'}
                        <span className="text-slate-300">|</span>
                        {client.email}
                        <span className="text-slate-300">|</span>
                        {client.phone}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={async () => {
                        if (confirm(`Are you sure you want to delete ${client.business_name}? This will remove the profile and reset lead status to 'Waitlist'.`)) {
                            // Reset status in dataset if linked
                            if (client.source_dataset_id && client.source_row_index !== undefined) {
                                await updateLeadStatus(client.source_dataset_id, client.source_row_index, LeadStatus.WAIT);
                            }

                            const success = await deleteClient(client.id);
                            if (success) router.push('/accepted');
                        }
                    }} className="p-2 hover:bg-rose-50 rounded-lg text-slate-400 hover:text-rose-600 transition-all border border-transparent hover:border-rose-200" title="Delete Client">
                        <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
                    <select
                        value={client.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                        className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                        {STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                    </select>
                </div>
            </div>

            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

                    {/* Left Column: Plan & Financials */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Package Card */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <DollarSign className="w-4 h-4" /> Package & Pricing
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Selected Package</label>
                                    <select
                                        value={client.selected_package}
                                        onChange={(e) => {
                                            const pkg = PACKAGES.find(p => p.id === e.target.value);
                                            handleChange('selected_package', e.target.value);
                                            if (pkg && pkg.price > 0) handleChange('package_price', pkg.price);
                                        }}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                                    >
                                        {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name} - ₹{p.price}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Agreed Price (₹)</label>
                                    <input
                                        type="number"
                                        value={client.package_price}
                                        onChange={(e) => handleChange('package_price', Number(e.target.value))}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xl font-bold text-emerald-600 outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Technical Links Card */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Deployment & Links
                            </h3>
                            <div className="space-y-3">
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Github className="w-3.5 h-3.5 text-slate-400" />
                                        <label className="text-xs font-medium text-slate-500">GitHub Repo</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="https://github.com/..."
                                        value={client.github_repo || ''}
                                        onChange={(e) => handleChange('github_repo', e.target.value)}
                                        className="w-full bg-slate-50 border-b border-slate-200 p-2 text-xs text-slate-600 outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                                        <label className="text-xs font-medium text-slate-500">Live URL</label>
                                        {client.live_url && <a href={client.live_url} target="_blank" className="ml-auto"><ExternalLink className="w-3 h-3 text-indigo-500" /></a>}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        value={client.live_url || ''}
                                        onChange={(e) => handleChange('live_url', e.target.value)}
                                        className="w-full bg-slate-50 border-b border-slate-200 p-2 text-xs text-slate-600 outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                                        <label className="text-xs font-medium text-slate-500">Admin Panel</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="https://.../admin"
                                        value={client.admin_url || ''}
                                        onChange={(e) => handleChange('admin_url', e.target.value)}
                                        className="w-full bg-slate-50 border-b border-slate-200 p-2 text-xs text-slate-600 outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Layout className="w-3.5 h-3.5 text-slate-400" />
                                        <label className="text-xs font-medium text-slate-500">Design File (Figma)</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Figma Link"
                                        value={client.design_link || ''}
                                        onChange={(e) => handleChange('design_link', e.target.value)}
                                        className="w-full bg-slate-50 border-b border-slate-200 p-2 text-xs text-slate-600 outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Features & Upgrades */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm min-h-[500px]">
                            <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <Database className="w-4 h-4 text-indigo-500" /> Project Specifications
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Core Upgrades */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Upgrades</h4>
                                    <div className="space-y-2">
                                        {FEATURES.map(feat => (
                                            <div key={feat.id} onClick={() => handleArrayToggle('core_upgrades', feat.id)} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${client.core_upgrades?.includes(feat.id) ? 'bg-indigo-500 border-indigo-500' : 'border-slate-200 bg-white group-hover:border-indigo-300'}`}>
                                                    {client.core_upgrades?.includes(feat.id) && <Check className="w-3.5 h-3.5 text-white" />}
                                                </div>
                                                <span className={`text-sm ${client.core_upgrades?.includes(feat.id) ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{feat.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Addons */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Add-ons & Services</h4>
                                    <div className="space-y-2">
                                        {ADDONS.map(addon => (
                                            <div key={addon.id} onClick={() => handleArrayToggle('add_ons', addon.id)} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${client.add_ons?.includes(addon.id) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-200 bg-white group-hover:border-emerald-300'}`}>
                                                    {client.add_ons?.includes(addon.id) && <Check className="w-3.5 h-3.5 text-white" />}
                                                </div>
                                                <span className={`text-sm ${client.add_ons?.includes(addon.id) ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{addon.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Domains & Custom Items</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Domains */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-2">Connected Domains</label>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {client.domains?.map(d => (
                                                <span key={d} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                                    <Globe className="w-3 h-3 text-slate-400" /> {d}
                                                    <button onClick={() => handleArrayToggle('domains', d)} className="hover:text-rose-500"><XCircle className="w-3 h-3" /></button>
                                                </span>
                                            ))}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Add domain (e.g. site.com) + Enter"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleDomainToggle(e.currentTarget.value);
                                                    e.currentTarget.value = '';
                                                }
                                            }}
                                        />
                                    </div>

                                    {/* Custom Items */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-2">Custom Adjustments</label>
                                        <div className="space-y-2 mb-3">
                                            {client.custom_items?.map((item, i) => (
                                                <div key={i} className="flex justify-between text-sm p-2 bg-slate-50 rounded-lg">
                                                    <span>{item.name}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-bold text-slate-700">₹{item.price}</span>
                                                        <button onClick={() => removeCustomItem(i)} className="text-slate-400 hover:text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="text" placeholder="Item Name" value={newItemName} onChange={e => setNewItemName(e.target.value)} className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-emerald-500" />
                                            <input type="number" placeholder="Price" value={newItemPrice} onChange={e => setNewItemPrice(e.target.value)} className="w-24 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-emerald-500" />
                                            <button onClick={addCustomItem} className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600"><Plus className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Internal Notes</h3>
                            <textarea
                                value={client.internal_notes || ''}
                                onChange={(e) => handleChange('internal_notes', e.target.value)}
                                placeholder="Write internal notes, credentials, or reminders here..."
                                className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 leading-relaxed outline-none focus:ring-2 focus:ring-indigo-100 resize-none"
                            ></textarea>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
