"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { Client, LeadStatus } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Upload, Save, CheckCircle, ExternalLink, Github, Database, Globe, Briefcase, DollarSign, Layout, Server, Shield, Layers, Plus, Trash2, Check, XCircle, ArrowLeft, CreditCard, Send, Loader2, Bell, FileText, Smartphone, MessageCircle, MapPin, Search, Calendar, Monitor, LifeBuoy } from 'lucide-react';

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
    const { getClient, updateClient, deleteClient, updateLeadStatus, showFeedback } = useLeadFlow();
    const [client, setClient] = useState<Client | null>(null);
    const [loading, setLoading] = useState(true);
    const [autoSaving, setAutoSaving] = useState(false);
    const isInitialLoad = useRef(true);

    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [linkLoading, setLinkLoading] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

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
                // Update local state immediately so UI reflects it
                setClient(prev => prev ? ({ ...prev, payment_status: 'paid', amount_paid: total }) : null);

                showFeedback("Payment confirmed! Status updated to PAID.", 'success');
                // Clean URL
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
            client.domains.forEach(domainStr => {
                const lowerDomain = domainStr.toLowerCase();
                const matchedTLD = DOMAINS_LIST.find(d => lowerDomain.endsWith(`.${d.id}`) || lowerDomain === d.id);
                if (matchedTLD) total += matchedTLD.price;
            });
        }

        if (client.custom_items) {
            client.custom_items.forEach(item => {
                total += item.price || 0;
            });
        }

        if (total !== client.package_price || total !== client.total_deal_value) {
            setClient(prev => prev ? ({ ...prev, package_price: total, total_deal_value: total }) : null);
        }

    }, [
        client?.selected_package,
        client?.core_upgrades,
        client?.add_ons,
        client?.custom_items,
        client?.domains
    ]);

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

    const handleGenerateLinkOpen = () => {
        if (!client) return;
        const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);
        if (outstanding <= 0) {
            showFeedback("Client has no outstanding payment.", 'info');
            return;
        }
        setShowPaymentModal(true);
    };

    const confirmGenerateLink = async () => {
        if (!client) return;
        const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);

        setLinkLoading(true);
        try {
            const res = await fetch('/api/cashfree/create-link', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: outstanding,
                    customer_phone: client.phone,
                    customer_name: client.contact_name || client.business_name,
                    link_purpose: `Payment for ${client.selected_package} package`,
                    client_id: client.id,
                    customer_email: client.email
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed to generate link');

            showFeedback(`Payment link created & SMS sent! Link ID: ${data.link_id}`, 'success');
            setShowPaymentModal(false);

        } catch (error: any) {
            showFeedback(error.message, 'error');
        } finally {
            setLinkLoading(false);
        }
    };

    const handleSendReminder = async () => {
        if (!client || !client.phone) return;

        const outstanding = (client.total_deal_value || 0) - (client.amount_paid || 0);
        if (outstanding <= 0) {
            showFeedback("Client has no outstanding payment.", 'info');
            return;
        }

        setLinkLoading(true);
        try {
            // Generate Link first
            const res = await fetch('/api/cashfree/create-link', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: outstanding,
                    customer_phone: client.phone,
                    customer_name: client.contact_name || client.business_name,
                    link_purpose: `Payment for ${client.selected_package} package`,
                    client_id: client.id,
                    customer_email: client.email
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed to generate link for reminder');

            // Construct WhatsApp Message with Link
            const linkUrl = data.link_url; // Captured from API response
            const text = `Hi ${client.contact_name || 'Valued Client'},\n\nThis is a gentle reminder regarding the outstanding payment of ₹${outstanding} for your ${client.selected_package} package with WebRivo.\n\nPlease clear the dues at your earliest convenience to avoid any service interruption.\n\nType: Secure Payment Link\nPay Here: ${linkUrl}\n\nBest,\nWebRivo Team`;

            const url = `https://wa.me/${client.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');

            showFeedback('Reminder link generated & WhatsApp opened!', 'success');

        } catch (error: any) {
            showFeedback(error.message, 'error');
        } finally {
            setLinkLoading(false);
        }
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

    if (loading) return <div className="h-full flex items-center justify-center text-slate-400">Loading client profile...</div>;
    if (!client) return null;

    return (
        <div className="h-full flex flex-col bg-slate-50 overflow-hidden relative">

            {/* Payment Confirmation Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="bg-slate-50 border-b border-slate-100 p-4">
                            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-emerald-500" /> Confirm Payment Link
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase font-bold">Client</p>
                                    <p className="font-medium text-slate-800">{client.business_name}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase font-bold">Phone</p>
                                    <p className="font-medium text-slate-800">{client.phone}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase font-bold">Total Deal</p>
                                    <p className="font-medium text-slate-800">₹{client.total_deal_value}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase font-bold">Paid So Far</p>
                                    <p className="font-medium text-emerald-600">₹{client.amount_paid || 0}</p>
                                </div>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-bold text-indigo-900">Link Amount (Outstanding)</span>
                                    <span className="text-xl font-bold text-indigo-600">₹{(client.total_deal_value || 0) - (client.amount_paid || 0)}</span>
                                </div>
                                <p className="text-xs text-indigo-500/80">This amount will be requested via Cashfree.</p>
                            </div>

                            <p className="text-xs text-slate-400 text-center italic">
                                Clicking "Send" will trigger an SMS to the client with the payment link.
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                            <button onClick={() => setShowPaymentModal(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-white hover:border-slate-300 transition-all">Cancel</button>
                            <button onClick={confirmGenerateLink} disabled={linkLoading} className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                                {linkLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                {linkLoading ? 'Sending...' : 'Confirm & Send'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

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

            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 md:p-6">
                <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">

                    {/* Left Column */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Financials & Payment (Merged Card) */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-emerald-500" /> Financials & Payment
                            </h3>

                            <div className="space-y-5">
                                {/* Package Selection */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Selected Package</label>
                                    <select
                                        value={client.selected_package}
                                        onChange={(e) => handleChange('selected_package', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                                    >
                                        {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name} - ₹{p.price}</option>)}
                                    </select>
                                </div>

                                {/* Financial Summary */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider mb-1">Total Deal</p>
                                        <p className="text-lg font-bold text-slate-800">₹{client.total_deal_value || 0}</p>
                                    </div>
                                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                        <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">Paid</p>
                                        <p className="text-lg font-bold text-emerald-600">₹{client.amount_paid || 0}</p>
                                    </div>
                                </div>

                                {/* Outstanding */}
                                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Outstanding</span>
                                    <span className="text-xl font-bold text-indigo-700">₹{(client.total_deal_value || 0) - (client.amount_paid || 0)}</span>
                                </div>

                                {/* Payment Status Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-700">Current Status</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${client.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-600' :
                                        client.payment_status === 'partial' ? 'bg-amber-100 text-amber-600' :
                                            'bg-slate-100 text-slate-500'
                                        }`}>
                                        {client.payment_status === 'paid' ? 'Paid In Full' :
                                            client.payment_status === 'partial' ? 'Partially Paid' : 'Unpaid'}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 pt-2 border-t border-slate-50">
                                    <button
                                        onClick={handleGenerateLinkOpen}
                                        disabled={linkLoading || !client.phone || ((client.total_deal_value || 0) - (client.amount_paid || 0) <= 0)}
                                        className="flex-[2] bg-indigo-600 text-white rounded-xl py-3 text-xs md:text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {linkLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                        Send Link (SMS)
                                    </button>
                                    <button
                                        onClick={handleSendReminder}
                                        disabled={!client.phone}
                                        className="flex-1 bg-amber-500 text-white rounded-xl py-3 text-xs md:text-sm font-bold shadow-lg shadow-amber-200 hover:bg-amber-600 hover:shadow-amber-300 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Bell className="w-4 h-4" />
                                        Reminder
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Custom Line Items (Moved from Middle) */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Plus className="w-4 h-4 text-indigo-500" /> Custom Line Items
                            </h3>
                            <div className="space-y-3 mb-4">
                                {(client.custom_items || []).map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded-lg group border border-slate-100">
                                        <span className="text-slate-700 font-medium">{item.name}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-slate-800">₹{item.price}</span>
                                            <button onClick={() => removeCustomItem(idx)} className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {(!client.custom_items || client.custom_items.length === 0) && (
                                    <p className="text-xs text-slate-400 italic text-center py-2">No custom items added.</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none"
                                        value={newItemPrice}
                                        onChange={(e) => setNewItemPrice(e.target.value)}
                                    />
                                    <button onClick={addCustomItem} disabled={!newItemName} className="bg-indigo-600 text-white rounded-lg p-2 hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center w-10">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Scope & Specs */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" /> Scope & Features
                            </h3>

                            {/* Core Upgrades */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-700 mb-2">Core Upgrades</label>
                                <div className="space-y-2">
                                    {FEATURES.map(f => {
                                        const isIncluded = (PLAN_INCLUDES[client.selected_package] || []).includes(f.id);
                                        const isSelected = (client.core_upgrades || []).includes(f.id);

                                        if (isIncluded) return null; // Don't show if already in plan

                                        return (
                                            <div key={f.id}
                                                onClick={() => handleArrayToggle('core_upgrades', f.id)}
                                                className={`flex items-center justify-between p-2 rounded-lg text-sm cursor-pointer border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                            >
                                                <span>{f.name}</span>
                                                <span className="text-xs font-bold">+₹{f.price}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Add-ons */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-700 mb-2">Add-ons & Services</label>
                                <div className="space-y-2">
                                    {ADDONS.map(a => (
                                        <div key={a.id}
                                            onClick={() => handleArrayToggle('add_ons', a.id)}
                                            className={`flex items-center justify-between p-2 rounded-lg text-sm cursor-pointer border transition-all ${(client.add_ons || []).includes(a.id) ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                        >
                                            <span>{a.name}</span>
                                            <span className="text-xs font-bold">+₹{a.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">

                        {/* Technical Links (Moved from Left) */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <ExternalLink className="w-5 h-5 text-indigo-500" /> Technical Links
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    <Globe className="w-4 h-4 text-indigo-400" />
                                    <input
                                        type="text"
                                        placeholder="Live Website URL"
                                        className="bg-transparent text-sm w-full outline-none text-slate-600 placeholder:text-slate-300"
                                        value={client.live_url || ''}
                                        onChange={(e) => handleChange('live_url', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    <Github className="w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="GitHub Repository"
                                        className="bg-transparent text-sm w-full outline-none text-slate-600 placeholder:text-slate-300"
                                        value={client.github_repo || ''}
                                        onChange={(e) => handleChange('github_repo', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    <Layout className="w-4 h-4 text-pink-400" />
                                    <input
                                        type="text"
                                        placeholder="Figma Design URL"
                                        className="bg-transparent text-sm w-full outline-none text-slate-600 placeholder:text-slate-300"
                                        value={client.design_link || ''}
                                        onChange={(e) => handleChange('design_link', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Domains */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-indigo-500" /> Domains Needed
                            </h3>
                            <div className="space-y-2">
                                {DOMAINS_LIST.map(d => (
                                    <div key={d.id}
                                        onClick={() => {
                                            const has = (client.domains || []).some(x => x === d.id);
                                            // Simple toggle logic for TLD as string
                                            if (has) {
                                                handleChange('domains', (client.domains || []).filter(x => x !== d.id));
                                            } else {
                                                handleChange('domains', [...(client.domains || []), d.id]);
                                            }
                                        }}
                                        className={`flex items-center justify-between p-2 rounded-lg text-sm cursor-pointer border transition-all ${(client.domains || []).includes(d.id) ? 'bg-sky-50 border-sky-200 text-sky-700' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                    >
                                        <span>{d.name}</span>
                                        <span className="text-xs font-bold">+₹{d.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <label className="block text-xs font-bold text-slate-700 mb-2">Specific Domain Names</label>
                                <textarea
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
                                    placeholder="Enter preferred domain names here (e.g. mybusiness.com)..."
                                    rows={3}
                                    value={client.domain_notes || ''}
                                    onChange={(e) => handleChange('domain_notes', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-500" /> Client Notes
                            </h3>
                            <textarea
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 outline-none focus:border-indigo-500 h-[200px]"
                                placeholder="Add any specific requirements, meeting notes, or details about the client here..."
                                value={client.internal_notes || ''}
                                onChange={(e) => handleChange('internal_notes', e.target.value)}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
