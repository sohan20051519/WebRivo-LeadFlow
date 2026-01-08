"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { Client, LeadStatus } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Upload, Save, CheckCircle, ExternalLink, Github, Database, Globe, Briefcase, DollarSign, Layout, Server, Shield, Layers, Plus, Trash2, Check, XCircle, ArrowLeft, CreditCard, Send, Loader2, Bell, FileText, Smartphone, MessageCircle, MapPin, Search, Calendar, Monitor, LifeBuoy, Link as LinkIcon, User, Package, Settings, Cpu } from 'lucide-react';
import { USER_LABELS } from '@/constants';

const PACKAGES = [
    { id: 'basic', name: 'Basic', price: 2999 },
    { id: 'business', name: 'Business', price: 7999 },
    { id: 'premium', name: 'Premium', price: 19999 },
    { id: 'custom', name: 'Custom', price: 0 }
];

const FEATURES = [
    { id: 'mobile', name: 'Mobile Design', price: 499 },
    { id: 'whatsapp', name: 'Default Website Link', price: 499 },
    { id: 'maps', name: 'Google Maps', price: 499 },
    { id: 'pages_5', name: '5-Page Site', price: 1499 },
    { id: 'seo', name: 'SEO Core', price: 1499 },
    { id: 'gbp', name: 'GBP Optimization', price: 1499 },
    { id: 'booking', name: 'Booking System', price: 2499 },
    { id: 'payment', name: 'Payment Gateway', price: 2999 },
    { id: 'admin', name: 'Admin Dashboard', price: 1999 },
    { id: 'support', name: 'Priority Support', price: 999 }
];

const ADDONS = [
    { id: 'maint', name: 'Maintenance (Per Month)', price: 499 },
    { id: 'wa_auto', name: 'WA Automation', price: 499 },
    { id: 'rank', name: 'Rank Setup', price: 999 },
    { id: 'lang', name: 'Multilingual', price: 1499 }
];

const DOMAINS_LIST = [
    { id: 'com', name: '.com Domain', price: 2500 },
    { id: 'in', name: '.in Domain', price: 2000 },
    { id: 'org', name: '.org Domain', price: 2000 },
    { id: 'xyz', name: '.xyz Domain', price: 2000 }
];

const STATUSES = [
    { id: 'onboarding', label: 'Onboarding', color: 'bg-blue-500' },
    { id: 'development', label: 'Development', color: 'bg-amber-500' },
    { id: 'review', label: 'In Review', color: 'bg-indigo-500' },
    { id: 'live', label: 'Live', color: 'bg-emerald-500' },
    { id: 'maintenance', label: 'Maintenance', color: 'bg-slate-500' }
];

const PLAN_INCLUDES: Record<string, string[]> = {
    basic: ['mobile'],
    business: ['pages_5', 'seo', 'mobile', 'whatsapp'],
    premium: ['pages_5', 'booking', 'payment', 'admin', 'seo', 'mobile', 'whatsapp', 'maps'],
    custom: []
};


export default function ClientPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { getClient, updateClient, deleteClient, updateLeadStatus, showFeedback, uploadPaymentProof, currentUser } = useLeadFlow();
    const [client, setClient] = useState<Client | null>(null);
    const [loading, setLoading] = useState(true);
    const [autoSaving, setAutoSaving] = useState(false);
    const isInitialLoad = useRef(true);

    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [uploadingProof, setUploadingProof] = useState(false);
    const [dragActive, setDragActive] = useState(false);

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

    // Check for Payment Return Status
    useEffect(() => {
        if (!client || !searchParams.get('status')) return;

        if (searchParams.get('status') === 'paid' && client.payment_status !== 'paid') {
            const updatePayment = async () => {
                const total = client.total_deal_value || 0;
                await updateClient(client.id, {
                    payment_status: 'paid',
                    amount_paid: total
                });
                setClient(prev => prev ? ({ ...prev, payment_status: 'paid', amount_paid: total }) : null);
                showFeedback("Payment confirmed! Status updated to PAID.", 'success');
                router.replace(`/clients/${client.id}`);
            };
            updatePayment();
        }
    }, [searchParams, client]);

    // Auto-Calculate Price based on packages/features
    useEffect(() => {
        if (!client) return;

        const pkg = PACKAGES.find(p => p.id === client.selected_package);
        let total = pkg ? pkg.price : 0;
        const includedFeatures = PLAN_INCLUDES[client.selected_package] || [];

        if (client.core_upgrades) {
            client.core_upgrades.forEach(id => {
                if (!includedFeatures.includes(id)) {
                    const feat = FEATURES.find(f => f.id === id);
                    if (feat) total += feat.price;
                }
            });
        }
        if (client.add_ons) {
            client.add_ons.forEach(id => {
                const addon = ADDONS.find(a => a.id === id);
                if (addon) total += addon.price;
            });
        }
        if (client.domains) {
            let domainTotal = 0;
            const selectedDomains: { id: string, price: number }[] = [];

            client.domains.forEach(domainStr => {
                const lowerDomain = domainStr.toLowerCase();
                const matchedTLD = DOMAINS_LIST.find(d => lowerDomain.endsWith(`.${d.id}`) || lowerDomain === d.id);
                if (matchedTLD) {
                    selectedDomains.push(matchedTLD);
                }
            });

            selectedDomains.forEach(d => {
                let price = d.price;
                if (client.selected_package === 'business' && d.id === 'in') {
                    price = 0;
                }
                domainTotal += price;
            });

            if (client.selected_package === 'premium' && selectedDomains.length > 0) {
                const maxPrice = Math.max(...selectedDomains.map(d => d.price));
                domainTotal -= maxPrice;
            }

            total += domainTotal;
        }
        if (client.custom_items) {
            client.custom_items.forEach(item => { total += item.price || 0; });
        }

        if (total !== client.package_price || total !== client.total_deal_value) {
            setClient(prev => {
                if (!prev) return null;
                const newState: Client = { ...prev, package_price: total, total_deal_value: total };
                if (newState.payment_status === 'paid' && total > (newState.amount_paid || 0)) {
                    newState.payment_status = 'partial';
                } else if (total <= (newState.amount_paid || 0) && newState.payment_status === 'partial') {
                    newState.payment_status = 'paid';
                }
                return newState;
            });
        }

    }, [client?.selected_package, client?.core_upgrades, client?.add_ons, client?.custom_items, client?.domains]);

    // Auto-save
    useEffect(() => {
        if (!client || isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        const timeoutId = setTimeout(async () => {
            setAutoSaving(true);
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id, created_at, ...updates } = client;
                await updateClient(client.id, updates);
            } finally {
                setAutoSaving(false);
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [client]);

    const handleChange = (field: keyof Client, value: any) => {
        if (!client) return;
        setClient(prev => prev ? ({ ...prev, [field]: value }) : null);
    };

    const handleArrayToggle = (field: 'core_upgrades' | 'add_ons' | 'domains', item: string) => {
        if (!client) return;
        const current = client[field] || [];
        const isAdding = !current.includes(item);

        const updated = isAdding
            ? [...current, item]
            : current.filter(i => i !== item);

        handleChange(field, updated);
    };

    const handleSendReminder = async () => {
        if (!client || !client.phone) return;

        const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);
        const mainLink = client.manual_payment_link;

        // Build Breakdown Item List
        let breakdownText = "";

        // 1. Package
        const pkg = PACKAGES.find(p => p.id === client.selected_package);
        if (pkg) breakdownText += `• ${pkg.name} Package: ₹${pkg.price}\n`;

        const includedFeatures = PLAN_INCLUDES[client.selected_package] || [];

        // 2. Upgrades
        if (client.core_upgrades) {
            client.core_upgrades.forEach(uid => {
                if (!includedFeatures.includes(uid)) {
                    const f = FEATURES.find(x => x.id === uid);
                    if (f) breakdownText += `• ${f.name}: ₹${f.price}\n`;
                }
            });
        }

        // 3. Addons
        if (client.add_ons) {
            client.add_ons.forEach(aid => {
                const a = ADDONS.find(x => x.id === aid);
                if (a) breakdownText += `• ${a.name}: ₹${a.price}\n`;
            });
        }

        // 4. Domains
        if (client.domains) {
            client.domains.forEach(dStr => {
                const lower = dStr.toLowerCase();
                const d = DOMAINS_LIST.find(x => lower.endsWith(`.${x.id}`) || lower === x.id);
                if (d) breakdownText += `• Domain (${d.name}): ₹${d.price}\n`;
            });
        }

        // 5. Custom
        if (client.custom_items) {
            client.custom_items.forEach(ci => {
                breakdownText += `• ${ci.name}: ₹${ci.price}\n`;
            });
        }

        // Construct Message
        let text = `*INVOICE SUMMARY*\n`;
        text += `For: *${client.business_name}* (${client.contact_name})\n`;
        text += `--------------------------------\n`;
        text += breakdownText;
        text += `--------------------------------\n`;
        text += `*TOTAL DEAL VALUE: ₹${client.total_deal_value}*\n`;
        text += `✅ Amount Paid: ₹${client.amount_paid || 0}\n`;
        text += `🚨 *OUTSTANDING DUE: ₹${outstanding}*\n\n`;

        if (outstanding > 0) {
            text += `Please clear the dues at your earliest convenience.\n\n`;
        } else {
            text += `All dues cleared. Thank you!\n\n`;
        }

        if (mainLink && outstanding > 0) {
            text += `🔹 *Payment Link*: ${mainLink}\n`;
        }

        if (client.addon_links && client.addon_links.length > 0 && outstanding > 0) {
            text += `\n*Specific Payment Links:*\n`;
            client.addon_links.forEach(l => {
                text += `🔸 ${l.title}: ${l.url}\n`;
            });
        }

        text += `\nBest,\nWebRivo Team`;

        const phone = client.phone.replace(/[^0-9]/g, '');
        const formattedPhone = phone?.length === 10 ? `91${phone}` : phone;

        const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');

        showFeedback('WhatsApp opened with detailed invoice!', 'success');
    };

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
        const newItems = [...(client.custom_items || [])];
        newItems.splice(idx, 1);
        handleChange('custom_items', newItems);
    }

    // --- File Upload Logic ---
    const processFile = async (file: File) => {
        if (file.type !== 'application/pdf') { showFeedback('Please upload a PDF file only.', 'error'); return; }
        setUploadingProof(true);
        try {
            const publicUrl = await uploadPaymentProof(file, client!.id);
            if (publicUrl) {
                let currentLinks: string[] = [];
                try {
                    if (client!.payment_completed_link) {
                        currentLinks = client!.payment_completed_link.startsWith('[') ? JSON.parse(client!.payment_completed_link) : [client!.payment_completed_link];
                    }
                } catch (e) { currentLinks = [client!.payment_completed_link || '']; }
                currentLinks.push(publicUrl);

                // Update everything
                const updates = {
                    payment_completed_link: JSON.stringify(currentLinks),
                    payment_status: 'paid' as const,
                    amount_paid: client!.total_deal_value
                };
                setClient(prev => prev ? ({ ...prev, ...updates }) : null);
                await updateClient(client!.id, updates);
                showFeedback('Payment proof uploaded & Status updated to PAID!', 'success');
            }
        } finally { setUploadingProof(false); }
    };
    const handleProofUpload = async (e: React.ChangeEvent<HTMLInputElement>) => { if (!client || !e.target.files) return; processFile(e.target.files[0]); };
    const handleDrag = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); if (e.type === "dragenter" || e.type === "dragover") setDragActive(true); else if (e.type === "dragleave") setDragActive(false); };
    const handleDrop = async (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (!client || !e.dataTransfer.files) return; processFile(e.dataTransfer.files[0]); };

    if (loading) return <div className="h-full flex items-center justify-center text-slate-400">Loading client profile...</div>;
    if (!client) return null;

    const currentOutstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);

    return (
        <div className="h-full flex flex-col bg-slate-50 overflow-hidden relative">

            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-4 py-3 md:px-8 md:py-4 flex flex-col md:flex-row justify-between items-start md:items-center z-10 shadow-sm relative gap-4 md:gap-0">
                <div className="flex items-center w-full md:w-auto">
                    <button onClick={() => router.back()} className="mr-3 p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-all flex-shrink-0" title="Back">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800 flex flex-wrap items-center gap-2">
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
                        <p className="text-xs text-slate-500 flex flex-wrap items-center gap-2 mt-1">
                            <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {client.contact_name || 'No Contact'}</span>
                            <span className="text-slate-300 hidden md:inline">|</span>
                            {client.email}
                            <span className="text-slate-300 hidden md:inline">|</span>
                            {client.phone}
                            {currentUser === 'admin' && client.assigned_user && (
                                <>
                                    <span className="text-slate-300 hidden md:inline">|</span>
                                    <span className="flex items-center gap-1 text-indigo-500 font-bold bg-indigo-50 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                                        <User className="w-3 h-3" /> {USER_LABELS[client.assigned_user] || client.assigned_user}
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end md:justify-start pl-12 md:pl-0">
                    <button onClick={async () => {
                        if (confirm(`Are you sure you want to delete ${client.business_name}? This will remove the profile and reset lead status to 'Waitlist'.`)) {
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

            {/* Content Grid (Refactored to 2 Columns) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">

                    {/* === MAIN CONTENT (Left - 8 cols) === */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Scope & Features Configuration */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" /> Project Scope & Features
                            </h3>

                            {/* Core Upgrades */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Core Upgrades</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {FEATURES.map(f => {
                                        const isIncluded = (PLAN_INCLUDES[client.selected_package] || []).includes(f.id);
                                        const isSelected = (client.core_upgrades || []).includes(f.id);

                                        if (isIncluded) return null; // Don't show if already in plan

                                        return (
                                            <div key={f.id}
                                                onClick={() => handleArrayToggle('core_upgrades', f.id)}
                                                className={`flex flex-col justify-center p-3 rounded-xl text-sm cursor-pointer border-2 transition-all relative ${isSelected ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' : 'bg-white border-slate-100 text-slate-500 hover:border-indigo-100 hover:shadow-sm'}`}
                                            >
                                                {isSelected && <div className="absolute top-2 right-2 text-indigo-500"><CheckCircle className="w-4 h-4" /></div>}
                                                <span className="font-semibold pr-4">{f.name}</span>
                                                <span className="text-xs mt-1 font-bold">+₹{f.price}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Add-ons */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Add-ons & Services</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {ADDONS.map(a => {
                                        const isSelected = (client.add_ons || []).includes(a.id);
                                        return (
                                            <div key={a.id}
                                                onClick={() => handleArrayToggle('add_ons', a.id)}
                                                className={`flex flex-col justify-center p-3 rounded-xl text-sm cursor-pointer border-2 transition-all relative ${isSelected ? 'bg-amber-50 border-amber-400 text-amber-800 shadow-sm' : 'bg-white border-slate-100 text-slate-500 hover:border-amber-100 hover:shadow-sm'}`}
                                            >
                                                {isSelected && <div className="absolute top-2 right-2 text-amber-500"><CheckCircle className="w-4 h-4" /></div>}
                                                <span className="font-semibold pr-4">{a.name}</span>
                                                <span className="text-xs mt-1 font-bold">+₹{a.price}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Technical Setup (Merged Domains + Links) */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-indigo-500" /> Technical Setup
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Domains */}
                                <div className="space-y-4">
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Domains Needed</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {DOMAINS_LIST.map(d => {
                                            const has = (client.domains || []).some(x => x === d.id);
                                            let isFree = false;

                                            if (client.selected_package === 'business' && d.id === 'in') {
                                                isFree = true;
                                            } else if (client.selected_package === 'premium' && has) {
                                                const selectedDomains = (client.domains || [])
                                                    .map(id => DOMAINS_LIST.find(x => x.id === id))
                                                    .filter(x => x !== undefined) as typeof DOMAINS_LIST;

                                                if (selectedDomains.length > 0) {
                                                    const maxPrice = Math.max(...selectedDomains.map(x => x.price));
                                                    const freeDomain = selectedDomains.find(x => x.price === maxPrice);
                                                    if (freeDomain?.id === d.id) {
                                                        isFree = true;
                                                    }
                                                }
                                            }

                                            return (
                                                <div key={d.id}
                                                    onClick={() => {
                                                        if (has) {
                                                            handleChange('domains', (client.domains || []).filter(x => x !== d.id));
                                                        } else {
                                                            handleChange('domains', [...(client.domains || []), d.id]);
                                                        }
                                                    }}
                                                    className={`flex flex-col items-center justify-center p-3 rounded-xl text-center cursor-pointer border-2 transition-all ${has ? 'bg-sky-50 border-sky-400 text-sky-800' : 'bg-white border-slate-100 text-slate-400 hover:border-sky-100'}`}
                                                >
                                                    <span className="font-bold">{d.name}</span>
                                                    <span className="text-[10px] font-bold uppercase mt-1">{isFree ? 'Free (Included)' : `+₹${d.price}`}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="pt-2">
                                        <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Specific Domain Preferences</label>
                                        <textarea
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="Enter preferred domain names (e.g. mybusiness.com)..."
                                            rows={2}
                                            value={client.domain_notes || ''}
                                            onChange={(e) => handleChange('domain_notes', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Technical Links */}
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Repository & Deployment</label>

                                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 focus-within:border-indigo-400 transition-colors">
                                        <Globe className="w-4 h-4 text-indigo-400" />
                                        <input
                                            type="text"
                                            placeholder="Live Website URL"
                                            className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder:text-slate-400"
                                            value={client.live_url || ''}
                                            onChange={(e) => handleChange('live_url', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 focus-within:border-indigo-400 transition-colors">
                                        <Github className="w-4 h-4 text-slate-500" />
                                        <input
                                            type="text"
                                            placeholder="GitHub Repository"
                                            className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder:text-slate-400"
                                            value={client.github_repo || ''}
                                            onChange={(e) => handleChange('github_repo', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 focus-within:border-indigo-400 transition-colors">
                                        <Layout className="w-4 h-4 text-pink-400" />
                                        <input
                                            type="text"
                                            placeholder="Figma Design URL"
                                            className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder:text-slate-400"
                                            value={client.design_link || ''}
                                            onChange={(e) => handleChange('design_link', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-500" /> Client Notes
                            </h3>
                            <textarea
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors h-[150px]"
                                placeholder="Add any specific requirements, meeting notes, or details about the client here..."
                                value={client.internal_notes || ''}
                                onChange={(e) => handleChange('internal_notes', e.target.value)}
                            />
                        </div>

                    </div>

                    {/* === SIDEBAR (Right - 4 cols) === */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Financials & Payment */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm sticky top-6">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-emerald-500" /> Financial Summary
                            </h3>

                            <div className="space-y-5">
                                {/* Package Selection */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Selected Package</label>
                                    <div className="relative">
                                        <Package className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                                        <select
                                            value={client.selected_package}
                                            onChange={(e) => handleChange('selected_package', e.target.value)}
                                            className="w-full pl-9 bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
                                        >
                                            {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name} - ₹{p.price}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Financial Stats Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Value</p>
                                        <p className="text-lg font-bold text-slate-800">₹{client.total_deal_value || 0}</p>
                                    </div>
                                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                                        <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">Amount Paid</p>
                                        <p className="text-lg font-bold text-emerald-600">₹{client.amount_paid || 0}</p>
                                    </div>
                                </div>

                                {/* Outstanding Bar */}
                                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex flex-col items-center justify-center">
                                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Outstanding Due</span>
                                    <span className="text-3xl font-bold text-indigo-600">₹{currentOutstanding}</span>
                                </div>

                                {/* Payment Actions */}
                                <div className="space-y-3 pt-2 border-t border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Status</label>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${client.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-600' :
                                            client.payment_status === 'partial' ? 'bg-amber-100 text-amber-600' :
                                                'bg-slate-200 text-slate-500'
                                            }`}>
                                            {client.payment_status === 'paid' ? 'Paid' : client.payment_status === 'partial' ? 'Partial' : 'Unpaid'}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => router.push(`/clients/${client.id}/payments`)}
                                        className="w-full py-3 bg-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                                    >
                                        <CreditCard className="w-4 h-4" />
                                        Manage Payments
                                    </button>

                                    <button
                                        onClick={handleSendReminder}
                                        className="w-full py-3 bg-white border border-green-500 text-green-600 rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-green-50 transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp Reminder
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Custom Line Items */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Plus className="w-4 h-4 text-indigo-500" /> Custom Line Items
                            </h3>
                            <div className="space-y-3 mb-4">
                                {(client.custom_items || []).map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-lg group border border-slate-100 hover:border-slate-300 transition-all">
                                        <span className="text-slate-700 font-medium">{item.name}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-slate-800">₹{item.price}</span>
                                            <button onClick={() => removeCustomItem(idx)} className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-rose-50 rounded">
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {(!client.custom_items || client.custom_items.length === 0) && (
                                    <div className="text-center py-4 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                                        <p className="text-xs text-slate-400 italic">No custom items added.</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs outline-none focus:border-indigo-400 transition-colors"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs outline-none focus:border-indigo-400 transition-colors"
                                        value={newItemPrice}
                                        onChange={(e) => setNewItemPrice(e.target.value)}
                                    />
                                    <button onClick={addCustomItem} disabled={!newItemName} className="bg-indigo-600 text-white rounded-lg px-4 hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
