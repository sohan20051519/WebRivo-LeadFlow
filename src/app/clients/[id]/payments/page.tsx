"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useLeadFlow } from '@/context/LeadFlowContext';
import {
    ArrowLeft, Loader2, Plus, Upload, CheckCircle2, Copy,
    ExternalLink, RefreshCw, FileText, XCircle, Trash2,
    MessageCircle, IndianRupee, Pencil, Receipt, Link as LinkIcon, User,
    CreditCard
} from 'lucide-react';
import { Client, PaymentRecord } from '@/types';
import { USER_LABELS } from '@/constants';
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

// Hardcoded Plan Links for Main Payment / Breakdown
const PLAN_LINKS: Record<string, string> = {
    basic: 'https://payments.cashfree.com/forms/webrivo-basic',
    business: 'https://payments.cashfree.com/forms/webrivo-business',
    premium: 'https://payments.cashfree.com/forms/webrivo-premium',
};

// Default Advance Link
const DEFAULT_ADVANCE_LINK = 'https://payments.cashfree.com/forms/webrivo';

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
                        {isEditMode ? 'Edit Payment Record' : 'Record Payment'}
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
    const { getClient, fetchPaymentRecords, addPaymentRecord, uploadPaymentProof, showFeedback, updateClient, currentUser } = useLeadFlow();

    const [client, setClient] = useState<Client | null>(null);
    const [payments, setPayments] = useState<PaymentRecord[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal State
    const [isPyModalOpen, setIsPyModalOpen] = useState(false);
    const [modalInitialData, setModalInitialData] = useState<any>(null);
    const [processingPayment, setProcessingPayment] = useState(false);

    // Type selection modal state
    const [isTypeSelectionOpen, setIsTypeSelectionOpen] = useState(false);

    // Derived Breakdown
    const [billOfMaterials, setBillOfMaterials] = useState<BillItem[]>([]);

    const loadData = async () => {
        if (!id) return;
        const clientData = await getClient(id as string);
        setClient(clientData);

        if (clientData) {
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
                if (d.id === freeDomainId && (c.selected_package === 'business' ? d.id === 'in' : true)) {
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

    // Triggered when clicking "Record Payment" button
    const handleInitialRecordClick = () => {
        setIsTypeSelectionOpen(true);
    };

    const handleSelectPaymentType = (type: 'advance' | 'full') => {
        setIsTypeSelectionOpen(false);
        // If 'full', deduct 100 as the user likely wants to pay the 'balance' if advance is considered separate
        // But we only deduct if outstanding is greater than 100 to avoid negative
        const amount = type === 'advance' ? 100 : (outstanding > 100 ? outstanding - 100 : outstanding);

        // Open the modal with pre-filled data
        setModalInitialData({
            amount: amount,
            file: null,
            statusAction: (type === 'full' && outstanding <= amount) ? 'paid' : 'none'
        });
        setIsPyModalOpen(true);
    };

    const handleOpenPaymentModal = (file: File | null = null, existingRecord: PaymentRecord | null = null) => {
        if (existingRecord) {
            // Edit Mode
            setModalInitialData({
                id: existingRecord.id,
                amount: existingRecord.amount,
                proof_url: existingRecord.proof_url,
                statusAction: client?.payment_status === 'paid' ? 'paid' : 'none'
            });
            setIsPyModalOpen(true);
        } else {
            // Create Mode via Drag & Drop (defaults to full outstanding or just opens modal)
            setModalInitialData({
                amount: file ? outstanding : 0,
                file: file,
                statusAction: outstanding <= 0 ? 'paid' : 'none'
            });
            setIsPyModalOpen(true);
        }
    };

    const handlePaymentSubmit = async (data: any) => {
        if (!client) return;
        setProcessingPayment(true);
        try {
            let proofUrl = data.existingProofUrl || '';

            if (data.file) {
                const url = await uploadPaymentProof(data.file, client.id);
                if (url) proofUrl = url;
            } else if (data.proofLink) {
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
                    notes: data.file ? 'Proof via PDF Upload' : (data.proofLink ? 'Payment Link Entry' : (data.amount === 100 ? 'Advance Payment' : 'Manual Entry')),
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

        // Use Hardcoded Plan Link if available, else manual
        let mainLink = client.manual_payment_link || '';
        if (PLAN_LINKS[client.selected_package]) {
            mainLink = PLAN_LINKS[client.selected_package];
        }

        // Calculated Outstanding for Message (Total - 100 - (Paid - 100 paid to advance?))
        // Simplification: We treat 'Net Payable' as (Total - 100).
        // Outstanding is (Net Payable - (TotalPaid that is NOT advance)).
        // Since we don't distinguish payment types easily, we assume the first 100 of any payment covers the advance.
        // So Outstanding = (Total - 100) - Math.max(0, TotalPaid - 100).
        // Which simplifies to: Total - 100 - TotalPaid + 100 (if Paid > 100) => Total - TotalPaid = System Outstanding.
        // BUT if Paid=0, it is Total - 100.
        // So OutstandingMessage = SystemOutstanding - 100 + Math.min(TotalPaid, 100).
        // If Paid=0: O - 100.
        // If Paid=100: O - 100 + 100 = O.

        // Wait, simpler logic based on user request:
        // User wants "OUTSTANDING DUE" to match "NET PAYABLE" (7899) when nothing is paid (7999 total).
        // So they want to deduct 100 from the System Outstanding unless it's already accounted for?
        // Let's use: (Total - 100) - (Paid).
        // If Paid=0, Outstanding=7899.
        // If Paid=100 (Advance), Outstanding=7799. This is wrong if the user still owes 7899.
        // IF Paid=100, the user likely paid the advance. So they owe 7899.
        // So if Paid=100, we want to show 7899.
        // My formula (T-100-P) gives 7799.

        // Let's assume the user logic is:
        // Invoice is for BALANCE.
        // Balance = Total - 100.
        // Paid Balance = TotalPaid - 100 (assuming 100 covers advance).
        // Outstanding Balance = Balance - Paid Balance.
        // = (Total - 100) - (TotalPaid - 100)
        // = Total - TotalPaid = System Outstanding.

        // So mathematically, System Outstanding IS the correct Balance Outstanding IF paid > 100.
        // BUT if Paid < 100 (e.g. 0), then Paid Balance is negative? No.
        // If Paid=0. Balance=7900. Paid Balance=0. Outstanding=7900.
        // Why does the user want 7900?
        // Ah, the user complains: "even after deducting 100rs from advance still it is showing ... OUTSTANDING DUE: 7999" (Total).
        // They want it to show 7899.
        // So when Paid=0, they want Total-100.

        // So:
        // If Paid=0: Show Total - 100.
        // If Paid=100: Show Total - 100. (Since 100 covers advance, 0 covers balance).
        // If Paid=200: Show Total - 200. (100 advance, 100 balance).

        // Formula: Total - 100 - Math.max(0, TotalPaid - 100).
        // Paid=0: T - 100 - 0 = T-100. (Correct).
        // Paid=100: T - 100 - 0 = T-100. (Correct).
        // Paid=200: T - 100 - 100 = T-200. (Correct).

        const netPayable = Math.max(0, (client.total_deal_value || 0) - 100);
        // We consider 'paid against balance' as anything above 100.
        const paidAgainstBalance = Math.max(0, safeTotalPaid - 100);
        const outstandingBalance = Math.max(0, netPayable - paidAgainstBalance);

        // Construct Invoice-like Message
        let text = `*INVOICE SUMMARY*\n`;
        text += `For: *${client.business_name}* (${client.contact_name})\n`;
        text += `--------------------------------\n`;

        billOfMaterials.forEach(item => {
            text += `  ${item.name}: ₹${item.price}\n`;
        });

        text += `--------------------------------\n`;
        text += `*TOTAL DEAL VALUE: ₹${client.total_deal_value}*\n`;
        text += `Less Advance: -₹100\n`;
        text += `*NET PAYABLE: ₹${netPayable}*\n\n`;

        text += `Amount Paid So Far: ₹${safeTotalPaid}\n`;
        text += `*OUTSTANDING DUE: ₹${outstandingBalance}*\n\n`;

        if (outstandingBalance > 0) {
            text += `Please clear the remaining balance to avoid service interruption.\n\n`;
        } else {
            text += `Thank you for your business! All dues are cleared.\n\n`;
        }

        if (mainLink && outstanding > 0) {
            text += `*Payment Link*: ${mainLink}\n`;
        }

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

    const handleAdvanceWhatsAppReminder = () => {
        if (!client) return;

        // Advance link logic: Default to generic Webrivo unless custom one is provided.
        // We do NOT use the plan-specific links here, as they are for the full package usually.
        let advanceLink = client.advance_payment_link || DEFAULT_ADVANCE_LINK;

        let text = `*ADVANCE PAYMENT REQUEST*\n`;
        text += `For: *${client.business_name}* (${client.contact_name})\n`;
        text += `--------------------------------\n`;
        text += `*TOTAL DEAL VALUE: ₹${client.total_deal_value}*\n`;
        text += `--------------------------------\n`;
        text += `Please pay the advance amount to confirm your order.\n\n`;
        text += `*Advance Amount: ₹100*\n`;
        text += `Note: This ₹100 will be deducted from your total deal value.\n\n`;
        text += `*Payment Link*: ${advanceLink}\n`;

        const phone = client.phone?.replace(/[^\d]/g, '');
        const formattedPhone = phone?.length === 10 ? `91${phone}` : phone;

        const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }

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

    // Determine lock states
    // Main Link is locked if a plan is selected (as per Plan Links)
    const isMainLinkLocked = !!PLAN_LINKS[client?.selected_package || ''];
    const displayedMainLink = isMainLinkLocked
        ? PLAN_LINKS[client?.selected_package || '']
        : (client?.manual_payment_link || '');

    // Advance Link is NOT locked by Plan, but defaults to Generic.
    // User can edit it if needed.
    const displayedAdvanceLink = client?.advance_payment_link || DEFAULT_ADVANCE_LINK;

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>;

    if (!client) return <div className="min-h-screen flex items-center justify-center text-slate-400">Client not found</div>;

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

            {/* Payment Type Selection Modal */}
            {isTypeSelectionOpen && (
                <div className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Select Payment Type</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleSelectPaymentType('advance')}
                                className="flex flex-col items-center justify-center p-4 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center mb-2 font-bold">₹</div>
                                <span className="font-bold text-indigo-700">Advance</span>
                                <span className="text-xs text-indigo-400">₹100.00</span>
                            </button>
                            <button
                                onClick={() => handleSelectPaymentType('full')}
                                className="flex flex-col items-center justify-center p-4 bg-emerald-50 border border-emerald-100 rounded-xl hover:bg-emerald-100 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center mb-2">
                                    <Receipt className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-emerald-700">Full / Manual</span>
                                <span className="text-xs text-emerald-500">Other Amount</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setIsTypeSelectionOpen(false)}
                            className="mt-6 w-full py-3 text-slate-400 font-bold text-sm hover:text-slate-600"
                        >
                            Cancel
                        </button>
                    </div>
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
                    <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

                        {/* Top Row: Back, Title, User */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <button onClick={() => router.back()} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <div>
                                    <h1 className="text-xl font-bold text-slate-800">Financial Overview</h1>
                                    <p className="text-slate-500 text-sm flex items-center gap-2">
                                        {client.business_name}
                                        {currentUser === 'admin' && client.assigned_user && (
                                            <span className="flex items-center gap-1 text-indigo-500 font-bold bg-indigo-50 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                                                <User className="w-3 h-3" /> {USER_LABELS[client.assigned_user] || client.assigned_user}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                {/* Advance Breakdown Button */}
                                <button
                                    onClick={handleAdvanceWhatsAppReminder}
                                    className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold rounded-lg transition-colors flex items-center gap-2 border border-indigo-200 text-xs"
                                >
                                    <MessageCircle className="w-3 h-3" />
                                    Send Advance Breakdown
                                </button>

                                <button
                                    onClick={handleWhatsAppReminder}
                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-green-200 text-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Send Breakdown
                                </button>
                                <button
                                    onClick={() => handleInitialRecordClick()}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200 text-sm"
                                >
                                    <Plus className="w-4 h-4" />
                                    Record Payment
                                </button>
                            </div>
                        </div>

                        {/* Links Row */}
                        <div className="flex flex-col md:flex-row gap-4 pt-2 border-t border-slate-50">

                            {/* Main Payment Link */}
                            <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1 items-center flex-1 relative">
                                <div className="pl-3 pr-2 text-slate-400">
                                    <LinkIcon className="w-4 h-4" />
                                </div>
                                <input
                                    className={`bg-transparent text-sm outline-none flex-1 text-slate-700 font-medium placeholder:text-slate-400 ${isMainLinkLocked ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    placeholder="Paste Main Payment Link here..."
                                    value={displayedMainLink}
                                    readOnly={isMainLinkLocked}
                                    onChange={(e) => {
                                        if (!isMainLinkLocked) {
                                            setClient({ ...client, manual_payment_link: e.target.value })
                                        }
                                    }}
                                    onBlur={() => {
                                        if (!isMainLinkLocked) {
                                            updateClient(client.id, { manual_payment_link: client.manual_payment_link })
                                        }
                                    }}
                                />
                                {isMainLinkLocked && (
                                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 mr-2">
                                        Fixed
                                    </span>
                                )}
                                {displayedMainLink && (
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(displayedMainLink); showFeedback('Copied!', 'success'); }}
                                        className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500"
                                        title="Copy Link"
                                    >
                                        <Copy className="w-3 h-3" />
                                    </button>
                                )}
                            </div>

                            {/* Advance Payment Link */}
                            <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1 items-center flex-1 relative">
                                <div className="pl-3 pr-2 text-slate-400">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <input
                                    className="bg-transparent text-sm outline-none flex-1 text-slate-700 font-medium placeholder:text-slate-400 opacity-70 cursor-not-allowed"
                                    placeholder="Advance Payment Link (Defaults to Webrivo)"
                                    value={DEFAULT_ADVANCE_LINK}
                                    readOnly={true}
                                />
                                <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 mr-2">
                                    Fixed
                                </span>
                                <button
                                    onClick={() => { navigator.clipboard.writeText(DEFAULT_ADVANCE_LINK); showFeedback('Copied!', 'success'); }}
                                    className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500"
                                    title="Copy Link"
                                >
                                    <Copy className="w-3 h-3" />
                                </button>
                            </div>
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
                                            onClick={() => handleInitialRecordClick()}
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
