"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';

export default function Header() {
    const { setMobileMenuOpen, searchTerm, setSearchTerm, datasets } = useLeadFlow();
    const pathname = usePathname();

    if (pathname === '/calc') return null;

    let title = '';
    if (pathname === '/dash') title = searchTerm ? 'Search Results (Global)' : 'Market Overview';
    else if (pathname === '/accepted') title = 'Accepted Leads';
    else if (pathname === '/waitlist') title = 'Waitlist';
    else if (pathname.startsWith('/dataset/')) {
        const id = pathname.split('/').pop();
        const ds = datasets.find(d => d.id === id);
        title = ds?.name || 'Loading...';
    }

    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}><Menu className="w-6 h-6 text-slate-500" /></button>
                <h2 className="text-xl font-bold tracking-tight text-slate-800">{title}</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search leads across cloud..."
                        className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-48 sm:w-64 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
}
