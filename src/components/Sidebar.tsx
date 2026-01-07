"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Calculator,
    CheckCircle,
    PauseCircle,
    Database,
    Zap,
    X,
    Package,
    Phone,
    FileText,
    RefreshCw,
    ShieldCheck
} from 'lucide-react';

export default function Sidebar() {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
        currentUser
    } = useLeadFlow();

    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', icon: LayoutDashboard, color: 'text-indigo-500', href: '/dash' },
        { label: 'Datasets', icon: Database, color: 'text-blue-500', href: '/datasets' },
        { label: 'Pricing Calculator', icon: Calculator, color: 'text-purple-500', href: '/calc' },
        { label: 'Accepted', icon: CheckCircle, color: 'text-emerald-500', href: '/accepted' },
        { label: 'Waitlist', icon: PauseCircle, color: 'text-amber-500', href: '/waitlist' },
    ];

    return (
        <>
            {/* Mobile backdrop overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            <aside className={`fixed inset-y-0 left-0 z-50 w-72 h-screen transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full glass-sidebar">
                    {/* Header */}
                    <div className="p-6 pb-2 flex items-center justify-between">
                        <Link href="/dash" className="flex items-center gap-3 group">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-5 h-5 fill-white" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                                    Lead<span className="text-indigo-600">Flow</span>
                                </h1>
                                <span className="text-[10px] font-medium text-slate-400 -mt-1 tracking-wider uppercase">Enterprise AI</span>
                            </div>
                        </Link>
                        <button className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            <X className="w-5 h-5 text-slate-500" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 no-scrollbar">

                        {/* Navigation */}
                        <nav className="space-y-1">
                            <p className="px-3 pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</p>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-indigo-50/80 text-indigo-600 shadow-sm ring-1 ring-indigo-100'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`p-1.5 rounded-lg mr-3 transition-colors ${isActive ? 'bg-white shadow-sm' : 'bg-slate-100 group-hover:bg-white'}`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                    </div>

                    {/* User Profile & Legal - Fixed at Bottom */}
                    <div className="p-4 border-t border-slate-100 space-y-2">
                        {currentUser && (
                            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold uppercase text-xs">
                                    {currentUser[0]}
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-sm font-bold text-slate-700 capitalize truncate">{currentUser}</span>
                                    <span className="text-[10px] text-slate-400 truncate">Authorized User</span>
                                </div>
                            </div>
                        )}

                        <Link
                            href="/legal"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${pathname.startsWith('/legal') || pathname === '/products' || pathname === '/contact'
                                ? 'bg-indigo-50/80 text-indigo-600 shadow-sm ring-1 ring-indigo-100'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <div className={`p-1.5 rounded-lg mr-3 transition-colors ${pathname.startsWith('/legal') ? 'bg-white shadow-sm' : 'bg-slate-100'}`}>
                                <ShieldCheck className="w-4 h-4 text-slate-500" />
                            </div>
                            Legal & Support
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
