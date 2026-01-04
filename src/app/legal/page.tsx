import React from 'react';
import Link from 'next/link';
import { Package, Phone, FileText, RefreshCw, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LegalHubPage() {
    const items = [
        {
            title: 'Products & Services',
            description: 'View our packages, pricing, and available services.',
            icon: Package,
            href: '/products',
            color: 'bg-pink-50 text-pink-600',
            border: 'border-pink-100'
        },
        {
            title: 'Contact Us',
            description: 'Get in touch with our team for support or inquiries.',
            icon: Phone,
            href: '/contact',
            color: 'bg-sky-50 text-sky-600',
            border: 'border-sky-100'
        },
        {
            title: 'Terms & Conditions',
            description: 'Read the terms of service governing our platform.',
            icon: FileText,
            href: '/legal/terms',
            color: 'bg-indigo-50 text-indigo-600',
            border: 'border-indigo-100'
        },
        {
            title: 'Refunds & Cancellations',
            description: 'Understand our policies regarding refunds and cancellations.',
            icon: RefreshCw,
            href: '/legal/refund',
            color: 'bg-emerald-50 text-emerald-600',
            border: 'border-emerald-100'
        },
        {
            title: 'Privacy Policy',
            description: 'Learn how we collect, use, and protect your data.',
            icon: ShieldCheck,
            href: '/legal/privacy',
            color: 'bg-violet-50 text-violet-600',
            border: 'border-violet-100'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="relative text-center space-y-3">
                    <Link href="/dash" className="absolute left-0 top-0 p-2 hover:bg-slate-200 rounded-lg transition-colors md:block hidden">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div className="md:hidden flex justify-start mb-4">
                        <Link href="/dash" className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">Legal & Support</h1>
                    <p className="text-slate-500">Access our legal documents and support resources.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className={`flex items-center gap-4 bg-white p-5 rounded-2xl border ${item.border} shadow-sm hover:shadow-md transition-all group`}
                        >
                            <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
