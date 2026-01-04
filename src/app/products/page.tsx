import React from 'react';
import { Package, Check, Zap, Globe, Layout, Search, PenTool, Database, MessageCircle, MapPin, CreditCard, UserCheck, Smartphone, ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS = [
    {
        id: 'basic',
        name: 'Basic Package',
        price: '₹2,999',
        description: 'Essential web presence for small businesses.',
        features: ['Mobile Design Included', 'Default Website Link', 'Hosting Setup', 'Basic SEO', 'Standard Support'],
        icon: Layout,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        id: 'business',
        name: 'Business Package',
        price: '₹7,999',
        description: 'Growth-focused solution for expanding companies.',
        features: ['5-Page Website', 'SEO Core Optimization', 'Mobile Responsive', 'WhatsApp Integration', 'Basic Analytics'],
        icon: Globe,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        popular: true
    },
    {
        id: 'premium',
        name: 'Premium Package',
        price: '₹19,999',
        description: 'Comprehensive digital ecosystem for market leaders.',
        features: ['5-Page Dynamic Site', 'Booking System', 'Payment Gateway', 'Admin Dashboard', 'Google Maps & GBP', 'Priority Support'],
        icon: Database,
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    }
];

const SERVICES = [
    { name: 'Google Maps (GBP)', price: '₹1,499', icon: MapPin },
    { name: 'SEO Core', price: '₹1,499', icon: Search },
    { name: 'Payment Gateway', price: '₹2,999', icon: CreditCard },
    { name: 'Booking System', price: '₹2,499', icon: CalendarIcon },
    { name: 'Priority Support', price: '₹999', icon: UserCheck },
    { name: 'Multilingual Support', price: '₹1,499', icon: MessageCircle }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Header with Back Button */}
                <div className="relative text-center space-y-3">
                    <Link href="/legal" className="absolute left-0 top-0 p-2 hover:bg-slate-200 rounded-lg transition-colors md:block hidden">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div className="md:hidden flex justify-start mb-4">
                        <Link href="/legal" className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">Products & Services</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Transparent pricing for high-quality web solutions. All prices are in INR (₹).
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all relative ${product.popular ? 'border-indigo-500 ring-4 ring-indigo-500/5' : 'border-slate-100'}`}>
                            {product.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}
                            <div className={`w-12 h-12 ${product.bg} rounded-xl flex items-center justify-center mb-4`}>
                                <product.icon className={`w-6 h-6 ${product.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{product.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                                <span className="text-slate-400 text-sm font-medium">/project</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                {product.description}
                            </p>
                            <ul className="space-y-3 mb-6">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">Additional Services & Add-ons</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-sm transition-all group">
                                <service.icon className="w-6 h-6 text-slate-400 mb-3 group-hover:text-indigo-500 transition-colors" />
                                <h4 className="font-bold text-slate-700 text-sm mb-1">{service.name}</h4>
                                <span className="text-indigo-600 font-bold text-sm bg-indigo-50 px-2 py-0.5 rounded">{service.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-xs text-slate-400 mt-10 pb-10">
                    <p>© {new Date().getFullYear()} WebRivo. All prices are subject to GST as applicable.</p>
                </div>
            </div>
        </div>
    );
}
