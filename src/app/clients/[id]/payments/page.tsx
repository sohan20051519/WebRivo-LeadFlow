"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useLeadFlow } from '@/context/LeadFlowContext';
import {
    ArrowLeft, Loader2, Plus, Upload, CheckCircle2, Copy,
    ExternalLink, RefreshCw, FileText, XCircle, Trash2,
    MessageCircle, IndianRupee, Pencil, Receipt, Link as LinkIcon
} from 'lucide-react';
import { Client, PaymentRecord } from '@/types';
import { supabase } from '@/lib/supabase';

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

const PLAN_INCLUDES: Record<string, string[]> = {
    basic: ['mobile'],
    business: ['pages_5', 'seo', 'mobile', 'whatsapp'],
    premium: ['pages_5', 'booking', 'payment', 'admin', 'seo', 'mobile', 'whatsapp', 'maps'],
    custom: []
};

const DEFAULT_ADVANCE_LINK = "https://payments.cashfree.com/forms/webrivo";

const PaymentModal = ({
    isOpen,
    onClose,
    onSubmit,
    initialData,
    loading
}: {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
    initialData: any;
    loading: boolean;
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        id: null as string | null,
        amount: 0,
        file: null as File | null,
        proofLink: '',
        existingProofUrl: null as string | null,
        statusAction: 'none' // none, paid
    });

    useEffect(() => {
        if (isOpen) {
            // Determine if the existing proof is a Supabase PDF or an external link
            const isSupabaseProof = initialData?.proof_url?.includes('supabase');

            setFormData({
                id: initialData?.id || null,
                amount: initialData?.amount || 0,
                file: initialData?.file || null,
                // If it's a URL but NOT from supabase, we treat it as a manual link
                proofLink: initialData?.proof_url && !isSupabaseProof ? initialData.proof_url : '',
                // If it IS from supabase, we treat it as an existing file attachment
                existingProofUrl: isSupabaseProof ? initialData.proof_url : null,
                statusAction: initialData?.statusAction || 'none'
            });
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;
    const isEditMode = !!formData.id;

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">
                        {isEditMode ? 'Edit Payment Record' : 'Record Manual Payment'}
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <XCircle className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    {/* Amount */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount Received</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                            <input
                                type="number"
                                value={formData.amount}
                                onChange={e => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
                                className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    {/* File Attachment Section */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Payment Proof (PDF)</label>

                        {formData.file || formData.existingProofUrl ? (
                            <div className="flex items-center gap-3 p-3 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-100">
                                <FileText className="w-5 h-5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold truncate">
                                        {formData.file ? formData.file.name : 'Existing Proof File'}
                                    </p>
                                    {formData.existingProofUrl && !formData.file && (
                                        <a href={formData.existingProofUrl} target="_blank" className="text-[10px] text-indigo-500 hover:underline">View current proof</a>
                                    )}
                                </div>
                                <button
                                    onClick={() => setFormData({ ...formData, file: null, existingProofUrl: null })}
                                    className="p-1 text-indigo-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Remove file"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-500 cursor-pointer transition-all gap-2"
                            >
                                <Upload className="w-8 h-8" />
                                <span className="text-sm font-bold">Click to Upload PDF</span>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="application/pdf"
                            onChange={e => {
                                if (e.target.files && e.target.files[0]) {
                                    setFormData({ ...formData, file: e.target.files[0] });
                                }
                            }}
                        />
                    </div>

                    {/* Payment Link Option */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Payment Link</label>
                        <input
                            type="text"
                            value={formData.proofLink}
                            onChange={e => setFormData({ ...formData, proofLink: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Paste link here..."
                        />
                    </div>

                    {/* Status Update Option */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={formData.statusAction === 'paid'}
                                onChange={e => setFormData({ ...formData, statusAction: e.target.checked ? 'paid' : 'none' })}
                                className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <span className="text-sm font-medium text-slate-700">Mark project as fully <strong>PAID</strong>?</span>
                        </label>
                    </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSubmit(formData)}
                        disabled={loading || formData.amount <= 0}
                        className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {loading ? 'Processing...' : (isEditMode ? 'Update Payment' : 'Record Payment')}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface BillItem {
    name: string;
    type: 'package' | 'upgrade' | 'addon' | 'domain' | 'custom';
    price: number;
}

export default function ClientPaymentsPage() {
    const { id } = useParams();
    const router = useRouter();
    const { getClient, fetchPaymentRecords, addPaymentRecord, uploadPaymentProof, showFeedback, updateClient } = useLeadFlow();

    const [client, setClient] = useState<Client | null>(null);
    const [payments, setPayments] = useState<PaymentRecord[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal State
    const [isPyModalOpen, setIsPyModalOpen] = useState(false);
    const [modalInitialData, setModalInitialData] = useState<any>(null);
    const [processingPayment, setProcessingPayment] = useState(false);

    // Derived Breakdown
    const [billOfMaterials, setBillOfMaterials] = useState<BillItem[]>([]);

    const loadData = async () => {
        if (!id) return;
        const clientData = await getClient(id as string);

        if (clientData) {
            // Pre-fill default advance link if missing
            if (!clientData.advance_payment_link) {
                clientData.advance_payment_link = DEFAULT_ADVANCE_LINK;
            }
            setClient(clientData);
            const records = await fetchPaymentRecords(clientData.id);
            setPayments(records);
            calculateBreakdown(clientData);
        }
        setLoading(false);
    };

    const calculateBreakdown = (c: Client) => {
        const items: BillItem[] = [];

        // 1. Package
        const pkg = PACKAGES.find(p => p.id === c.selected_package);
        if (pkg) {
            items.push({ name: `${pkg.name} Package`, type: 'package', price: pkg.price });
        }

        const includedFeatures = PLAN_INCLUDES[c.selected_package] || [];

        // 2. Upgrades
        if (c.core_upgrades) {
            c.core_upgrades.forEach(uid => {
                if (!includedFeatures.includes(uid)) {
                    const f = FEATURES.find(x => x.id === uid);
                    if (f) items.push({ name: f.name, type: 'upgrade', price: f.price });
                }
            });
        }

        // 3. Addons
        if (c.add_ons) {
            c.add_ons.forEach(aid => {
                const a = ADDONS.find(x => x.id === aid);
                if (a) items.push({ name: a.name, type: 'addon', price: a.price });
            });
        }

        // 4. Domains
        if (c.domains) {
            const selectedDomains: typeof DOMAINS_LIST = [];
            c.domains.forEach(did => {
                const d = DOMAINS_LIST.find(x => x.id === did);
                if (d) selectedDomains.push(d);
            });

            // Logic to track which one is free for display purposes
            // This is slightly complex because we need to know WHICH one is free to set price to 0 in the list
            let freeDomainId: string | null = null;

            if (c.selected_package === 'business') {
                freeDomainId = 'in';
            } else if (c.selected_package === 'premium' && selectedDomains.length > 0) {
                const maxPrice = Math.max(...selectedDomains.map(d => d.price));
                const freeOne = selectedDomains.find(d => d.price === maxPrice);
                if (freeOne) freeDomainId = freeOne.id;
            }

            selectedDomains.forEach(d => {
                let price = d.price;
                let isFree = false;

                if (c.selected_package === 'business') {
                    if (d.id === 'in') isFree = true;
                } else if (c.selected_package === 'premium') {
                     // For premium, only allow specific TLDs to be free
                     const ALLOWED_FREE = ['com', 'in', 'org', 'xyz'];
                     // Filter selected domains to only those in the allowed list
                     const allowedSelected = selectedDomains.filter(sd => ALLOWED_FREE.includes(sd.id));

                     if (allowedSelected.length > 0) {
                         const maxPrice = Math.max(...allowedSelected.map(asd => asd.price));
                         // Use findLast or find to pick one. The previous logic picked the first one with maxPrice.
                         const freeOne = allowedSelected.find(asd => asd.price === maxPrice);

                         if (freeOne && freeOne.id === d.id) {
                             isFree = true;
                         }
                     }
                }

                if (isFree) {
                    price = 0;
                }
                items.push({ name: d.name, type: 'domain', price });
            });
        }

        // 5. Custom
        if (c.custom_items) {
            c.custom_items.forEach(ci => {
                items.push({ name: ci.name, type: 'custom', price: ci.price });
            });
        }

        setBillOfMaterials(items);
    };

    useEffect(() => {
        loadData();
    }, [id]);

    const totalPaid = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const safeTotalPaid = totalPaid || 0;
    const outstanding = (client?.total_deal_value || 0) - safeTotalPaid;

    // --- Actions ---

    const handleOpenPaymentModal = (file: File | null = null, existingRecord: PaymentRecord | null = null) => {
        if (existingRecord) {
            // Edit Mode
            setModalInitialData({
                id: existingRecord.id,
                amount: existingRecord.amount,
                proof_url: existingRecord.proof_url,
                statusAction: client?.payment_status === 'paid' ? 'paid' : 'none'
            });
        } else {
            // Create Mode
            setModalInitialData({
                amount: file ? outstanding : 0,
                file: file,
                statusAction: outstanding <= 0 ? 'paid' : 'none'
            });
        }
        setIsPyModalOpen(true);
    };

    const handlePaymentSubmit = async (data: any) => {
        if (!client) return;
        setProcessingPayment(true);
        try {
            // Start with either existing PDF url or empty string. 
            // NOTE: We only default to existingProofUrl if it's NOT a link we just edited.
            // But validation logic below handles priority cleanly.
            let proofUrl = data.existingProofUrl || '';

            // Priority: File Upload > Link Input > Existing PDF
            if (data.file) {
                const url = await uploadPaymentProof(data.file, client.id);
                if (url) proofUrl = url;
            } else if (data.proofLink) {
                // If user provided a link, this OVERRIDES any existing PDF logic 
                // unless they uploaded a new file above
                proofUrl = data.proofLink;
            }

            if (data.id) {
                const { error } = await supabase.from('payment_records').update({
                    amount: data.amount,
                    proof_url: proofUrl,
                }).eq('id', data.id);
                if (error) throw error;
                showFeedback('Payment Updated Successfully', 'success');
            } else {
                await addPaymentRecord({
                    client_id: client.id,
                    amount: data.amount,
                    notes: data.file ? 'Proof via PDF Upload' : (data.proofLink ? 'Payment Link Entry' : 'Manual Entry'),
                    proof_url: proofUrl,
                });
                showFeedback('Payment Recorded Successfully', 'success');
            }

            if (data.statusAction === 'paid') {
                await updateClient(client.id, { payment_status: 'paid' });
                setClient(prev => prev ? ({ ...prev, payment_status: 'paid' }) : null);
            }

            setIsPyModalOpen(false);
            await loadData();

        } catch (error: any) {
            console.error(error);
            showFeedback(`Failed: ${error.message || 'Unknown error'}`, 'error');
        } finally {
            setProcessingPayment(false);
        }
    };

    const handleDeleteRecord = async (recordId: string) => {
        if (!confirm('Are you certain you want to delete this payment record? This will affect the totals.')) return;
        try {
            const { error } = await supabase.from('payment_records').delete().eq('id', recordId);
            if (error) throw error;
            showFeedback('Record deleted', 'success');
            loadData();
        } catch (e: any) {
            showFeedback('Delete failed', 'error');
        }
    };

    const handleWhatsAppReminder = () => {
        if (!client) return;

        const mainLink = client.manual_payment_link || '';

        // Construct Invoice-like Message
        let text = `*INVOICE SUMMARY*\n`;
        text += `For: *${client.business_name}* (${client.contact_name})\n`;
        text += `--------------------------------\n`;

        billOfMaterials.forEach(item => {
            text += `• ${item.name}: ₹${item.price}\n`;
        });

        text += `--------------------------------\n`;
        text += `*TOTAL DEAL VALUE: ₹${client.total_deal_value}*\n`;
        text += `✅ Amount Paid: ₹${safeTotalPaid}\n`;
        text += `🚨 *OUTSTANDING DUE: ₹${outstanding}*\n\n`;

        if (outstanding > 0) {
            text += `Please clear the remaining balance to avoid service interruption.\n\n`;
        } else {
            text += `Thank you for your business! All dues are cleared.\n\n`;
        }

        if (mainLink && outstanding > 0) {
            text += `*Payment Link*: ${mainLink}\n`;
        }

        // Include any specific addon links if they exist in the breakdown? 
        // We'll just append any extra addon links stored in client profile
        if (client.addon_links && client.addon_links.length > 0 && outstanding > 0) {
            text += `\n*Specific Payment Links:*\n`;
            client.addon_links.forEach(l => {
                text += `🔗 ${l.title}: ${l.url}\n`;
            });
        }

        const phone = client.phone?.replace(/[^\d]/g, '');
        const formattedPhone = phone?.length === 10 ? `91${phone}` : phone;

        const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    // --- Drag & Drop ---
    const [isDragging, setIsDragging] = useState(false);
    const dragCounter = useRef(0);

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault(); e.stopPropagation();
        dragCounter.current++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setIsDragging(true);
    };
    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault(); e.stopPropagation();
        dragCounter.current--;
        if (dragCounter.current <= 0) {
            setIsDragging(false);
            dragCounter.current = 0;
        }
    };
    const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault(); e.stopPropagation();
        setIsDragging(false); dragCounter.current = 0;
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/pdf') {
                handleOpenPaymentModal(file);
            } else {
                showFeedback('Only PDF files are supported', 'error');
            }
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>;
    if (!client) return <div className="min-h-screen flex items-center justify-center text-slate-400">Client not found</div>;

    // Helper for cost breakdown visual status
    let runningTotal = 0;

    return (
        <div
            className="min-h-screen flex flex-col bg-slate-50 relative"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {/* Drag Overlay */}
            {isDragging && (
                <div className="fixed inset-0 z-[200] bg-indigo-500/90 backdrop-blur-sm flex flex-col items-center justify-center text-white border-[10px] border-white border-dashed m-6 rounded-[2rem] animate-in fade-in duration-200 pointer-events-none">
                    <Upload className="w-24 h-24 mb-6 animate-bounce" />
                    <h2 className="text-4xl font-black tracking-tight">Drop PDF Receipt Here</h2>
                    <p className="text-indigo-100 text-lg mt-2 font-medium">Auto-records payment instantly</p>
                </div>
            )}

            <PaymentModal
                isOpen={isPyModalOpen}
                onClose={() => setIsPyModalOpen(false)}
                onSubmit={handlePaymentSubmit}
                initialData={modalInitialData}
                loading={processingPayment}
            />

            <main className="flex-1 overflow-y-auto w-full">
                <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4">
                            <button onClick={() => router.back()} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-xl font-bold text-slate-800">Financial Overview</h1>
                                <p className="text-slate-500 text-sm">{client.business_name}</p>
                            </div>
                        </div>

                        {/* Quick Main Link Input */}
                        <div className="flex flex-col gap-2 flex-1 max-w-md mx-6">
                            <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1 items-center">
                                <div className="pl-3 pr-2 text-slate-400">
                                    <LinkIcon className="w-4 h-4" />
                                </div>
                                <input
                                    className="bg-transparent text-sm outline-none flex-1 text-slate-700 font-medium placeholder:text-slate-400"
                                    placeholder="Paste Main Payment Link here..."
                                    value={client.manual_payment_link || ''}
                                    onChange={(e) => setClient({ ...client, manual_payment_link: e.target.value })}
                                    onBlur={() => updateClient(client.id, { manual_payment_link: client.manual_payment_link })}
                                />
                                {client.manual_payment_link && (
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(client.manual_payment_link || ''); showFeedback('Copied!', 'success'); }}
                                        className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500"
                                        title="Copy Link"
                                    >
                                        <Copy className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                            {/* Advance Payment Link Input */}
                            <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1 items-center">
                                <div className="pl-3 pr-2 text-slate-400">
                                    <LinkIcon className="w-4 h-4" />
                                </div>
                                <input
                                    className="bg-transparent text-sm outline-none flex-1 text-slate-700 font-medium placeholder:text-slate-400"
                                    placeholder="Paste Advance Payment Link..."
                                    value={client.advance_payment_link || ''}
                                    onChange={(e) => setClient({ ...client, advance_payment_link: e.target.value })}
                                    onBlur={() => {
                                        // Auto-save the updated value
                                        updateClient(client.id, { advance_payment_link: client.advance_payment_link });
                                    }}
                                />
                                {client.advance_payment_link && (
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(client.advance_payment_link || ''); showFeedback('Copied!', 'success'); }}
                                        className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500"
                                        title="Copy Link"
                                    >
                                        <Copy className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <button
                                    onClick={handleWhatsAppReminder}
                                    className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-green-200 text-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Full Breakdown
                                </button>
                                <button
                                    onClick={() => {
                                        if (!client) return;

                                        const advanceLink = client.advance_payment_link || DEFAULT_ADVANCE_LINK;
                                        const advanceAmount = Math.round((client.total_deal_value || 0) * 0.5);

                                        let text = `*PROJECT BOOKING / ADVANCE*\n`;
                                        text += `For: *${client.business_name}* (${client.contact_name})\n`;
                                        text += `--------------------------------\n`;

                                        billOfMaterials.forEach(item => {
                                            text += `• ${item.name}: ₹${item.price}\n`;
                                        });

                                        text += `--------------------------------\n`;
                                        text += `*TOTAL ESTIMATE: ₹${client.total_deal_value}*\n\n`;

                                        text += `To initiate the project, an advance payment of 50% is required.\n`;
                                        text += `👉 *Advance Amount: ₹${advanceAmount.toLocaleString()}*\n\n`;

                                        if (advanceLink) {
                                            text += `🔹 *Advance Payment Link*: ${advanceLink}\n\n`;
                                        } else if (client.manual_payment_link) {
                                            text += `🔹 *Payment Link*: ${client.manual_payment_link}\n\n`;
                                        }

                                        text += `Please share the payment screenshot once done so we can get started immediately! 🚀\n`;

                                        const phone = client.phone?.replace(/[^\d]/g, '');
                                        const formattedPhone = phone?.length === 10 ? `91${phone}` : phone;

                                        const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
                                        window.open(url, '_blank');
                                    }}
                                    className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-emerald-200 text-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Advance Breakdown
                                </button>
                            </div>
                            <button
                                onClick={() => handleOpenPaymentModal()}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200 text-sm"
                            >
                                <Plus className="w-4 h-4" />
                                Record Payment
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-4 opacity-5">
                                <Receipt className="w-24 h-24 text-indigo-600" />
                            </div>
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider relative z-10">Total Invoiced</label>
                            <div className="text-3xl font-black text-slate-800 mt-2 relative z-10">₹{client.total_deal_value?.toLocaleString() || 0}</div>
                        </div>
                        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-4 opacity-10">
                                <CheckCircle2 className="w-24 h-24 text-emerald-600" />
                            </div>
                            <label className="text-xs font-bold text-emerald-600 uppercase tracking-wider relative z-10">Collected</label>
                            <div className="text-3xl font-black text-emerald-700 mt-2 relative z-10">₹{safeTotalPaid.toLocaleString()}</div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Balance Due</label>
                            <div className={`text-3xl font-black mt-2 ${outstanding > 0 ? 'text-amber-500' : 'text-slate-300'}`}>
                                ₹{Math.max(0, outstanding).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* LEFT COLUMN: Cost Breakdown (Replaces Payment Links Card) */}
                        <div className="space-y-6">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Receipt className="w-4 h-4 text-indigo-500" />
                                    Cost Breakdown
                                </h3>
                                <div className="space-y-0 divide-y divide-slate-100">
                                    {billOfMaterials.map((item, idx) => {
                                        runningTotal += item.price;
                                        const isCovered = safeTotalPaid >= runningTotal;

                                        return (
                                            <div key={idx} className="flex justify-between items-center py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isCovered ? 'bg-emerald-100 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-300'}`}>
                                                        {isCovered ? <CheckCircle2 className="w-3.5 h-3.5" /> : <div className="w-2 h-2 rounded-full bg-slate-300" />}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-700">{item.name}</div>
                                                        <div className="text-[10px] uppercase font-bold text-slate-400">{item.type}</div>
                                                    </div>
                                                </div>
                                                <div className="font-medium text-slate-600">
                                                    {item.price === 0 && (item.type === 'domain' || item.type === 'package') ? (
                                                        <span className="text-emerald-500 font-bold text-xs uppercase">Included</span>
                                                    ) : (
                                                        `₹${item.price.toLocaleString()}`
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <div className="flex justify-between items-center pt-4 mt-2 border-t border-slate-200">
                                        <span className="text-xs font-bold text-slate-500 uppercase">Total</span>
                                        <span className="text-lg font-black text-slate-800">₹{client.total_deal_value?.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Status Mini Card */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <span className="font-bold text-slate-800 text-sm">Project Status</span>
                                <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${client.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-700' :
                                        client.payment_status === 'partial' ? 'bg-amber-100 text-amber-700' :
                                            'bg-slate-100 text-slate-600'
                                    }`}>
                                    {client.payment_status}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: History */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="font-bold text-slate-800">Transaction History</h3>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{payments.length} Records</span>
                                </div>

                                {payments.length === 0 ? (
                                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                            <IndianRupee className="w-6 h-6 text-slate-300" />
                                        </div>
                                        <h4 className="text-slate-800 font-bold mb-1">No Payments Yet</h4>
                                        <p className="text-slate-400 text-sm max-w-xs mx-auto mb-6">
                                            Record manual payments or upload proof of payment to start tracking.
                                        </p>
                                        <button
                                            onClick={() => handleOpenPaymentModal()}
                                            className="px-4 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-lg text-sm hover:bg-indigo-100 transition-colors"
                                        >
                                            Add First Payment
                                        </button>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-slate-50 border-b border-slate-100 text-xs uppercase text-slate-400 font-bold">
                                                <tr>
                                                    <th className="px-6 py-4">Date</th>
                                                    <th className="px-6 py-4">Details</th>
                                                    <th className="px-6 py-4 text-right">Amount</th>
                                                    <th className="px-6 py-4 text-center">Proof/Link</th>
                                                    <th className="px-6 py-4 text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {payments.map(record => (
                                                    <tr key={record.id} className="hover:bg-slate-50/80 transition-colors group">
                                                        <td className="px-6 py-4 text-slate-500 font-medium whitespace-nowrap">
                                                            {new Date(record.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="font-medium text-slate-800">{record.notes || 'Manual Entry'}</div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className="font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                                                                ₹{Number(record.amount).toLocaleString()}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            {record.proof_url ? (
                                                                <a
                                                                    href={record.proof_url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors"
                                                                >
                                                                    {record.proof_url.toLowerCase().endsWith('.pdf') || record.notes?.includes('PDF') ? (
                                                                        <><FileText className="w-3 h-3" /> PDF</>
                                                                    ) : (
                                                                        <><ExternalLink className="w-3 h-3" /> Link</>
                                                                    )}
                                                                </a>
                                                            ) : (
                                                                <span className="text-slate-300 text-xs">-</span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            <div className="flex items-center justify-center gap-2">
                                                                <button
                                                                    onClick={() => handleOpenPaymentModal(null, record)}
                                                                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                                    title="Edit Transaction"
                                                                >
                                                                    <Pencil className="w-4 h-4" />
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDeleteRecord(record.id)}
                                                                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                                    title="Delete Transaction"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Hint */}
                    <div className="text-center text-xs text-slate-400 py-4">
                        Drag and drop a PDF anywhere on this page to quickly record a proof.
                    </div>
                </div>
            </main>
        </div>
    );
}
