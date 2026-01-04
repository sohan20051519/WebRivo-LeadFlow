import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center gap-4">
                    <Link href="/legal" className="p-2 hover:bg-white rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Refunds & Cancellations</h1>
                        <p className="text-xs text-slate-500">Last updated: January 2026</p>
                    </div>
                </div>

                <div className="p-8 prose prose-slate max-w-none prose-sm prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600">
                    <h3>1. Cancellation Policy</h3>
                    <p>Clients may cancel their service agreement at any time by providing written notice via email. Cancellation requests will be processed within 2-3 business days.</p>

                    <h3>2. Refund Eligibility</h3>
                    <ul>
                        <li><strong>Initial Deposit:</strong> The initial deposit (usually 50% of the project cost) covers the resources allocated for project setup, research, and initial design drafts. As such, once work has commenced (defined as the delivery of the first design draft or wireframe), the initial deposit is non-refundable.</li>
                        <li><strong>Full Refund:</strong> A full refund of the deposit is only applicable if the cancellation request is made within 24 hours of payment AND prior to any project work beginning.</li>
                        <li><strong>Milestone Payments:</strong> Payments made for completed milestones are non-refundable.</li>
                    </ul>

                    <h3>3. Subscription Services</h3>
                    <p>For recurring services (such as maintenance or SEO packages):</p>
                    <ul>
                        <li>Cancellations must be made at least 7 days before the next billing cycle.</li>
                        <li>No refunds will be issued for partial months of service.</li>
                    </ul>

                    <h3>4. Processing of Refunds</h3>
                    <p>Approved refunds will be processed to the original method of payment within 7-10 business days.</p>

                    <h3>5. Disputes</h3>
                    <p>If you are unhappy with the service provided, please contact our support team first to attempt to resolve the issue. We are committed to ensuring client satisfaction and will work with you to address reasonable concerns.</p>

                    <h3>6. Contact</h3>
                    <p>For cancellation requests or refund queries, contact: support@webrivo.com.</p>
                </div>
            </div>
        </div>
    );
}
