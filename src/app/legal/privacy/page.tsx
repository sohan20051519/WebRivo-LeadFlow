import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center gap-4">
                    <Link href="/legal" className="p-2 hover:bg-white rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Privacy Policy</h1>
                        <p className="text-xs text-slate-500">Last updated: January 2026</p>
                    </div>
                </div>

                <div className="p-8 prose prose-slate max-w-none prose-sm prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600">
                    <h3>1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and business details.</p>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Communicate with you about products, services, offers, and events.</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                    </ul>

                    <h3>3. Information Sharing</h3>
                    <p>We do not share your personal information with third parties except as described in this policy (e.g., with service providers who assist our operations) or with your consent.</p>

                    <h3>4. Data Security</h3>
                    <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

                    <h3>5. Cookies</h3>
                    <p>We may use cookies to collect information about your browsing activity to improve your experience on our website.</p>

                    <h3>6. Changes to this Policy</h3>
                    <p>We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.</p>

                    <h3>7. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at support@webrivo.com.</p>
                </div>
            </div>
        </div>
    );
}
