import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center gap-4">
                    <Link href="/legal" className="p-2 hover:bg-white rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Terms & Conditions</h1>
                        <p className="text-xs text-slate-500">Last updated: January 2026</p>
                    </div>
                </div>

                <div className="p-8 prose prose-slate max-w-none prose-sm prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600">
                    <h3>1. Introduction</h3>
                    <p>Welcome to WebRivo. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>

                    <h3>2. Services</h3>
                    <p>WebRivo provides web design, development, and digital marketing services. The specific scope of services for each client is detailed in their respective service agreement or selected package.</p>

                    <h3>3. Payment Terms</h3>
                    <p>Payments must be structured as defined in the service agreement. Typically, a deposit is required to commence work, with the remaining balance due upon completion or project milestones. All prices are in INR (Indian Rupees).</p>

                    <h3>4. Intellectual Property</h3>
                    <p>Upon full payment, the client owns the rights to the final website design and content created specifically for them. WebRivo retains the right to use the work in its portfolio and for marketing purposes.</p>

                    <h3>5. Refunds</h3>
                    <p>Our refund policy is detailed separately. Generally, deposits for work that has already commenced are non-refundable to cover initial resource allocation.</p>

                    <h3>6. Limitation of Liability</h3>
                    <p>WebRivo shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

                    <h3>7. Governing Law</h3>
                    <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

                    <h3>8. Contact Us</h3>
                    <p>If you have any questions about these Terms, please contact us at support@webrivo.com.</p>
                </div>
            </div>
        </div>
    );
}
