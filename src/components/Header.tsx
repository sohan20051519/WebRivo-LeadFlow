"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { usePathname } from 'next/navigation';
import { Menu, Search, Bell, Settings } from 'lucide-react';

export default function Header() {
    const { setMobileMenuOpen, searchTerm, setSearchTerm, datasets } = useLeadFlow();
    const pathname = usePathname();

    if (pathname === '/calc') return null;

    let title = '';
    if (pathname === '/dash') title = searchTerm ? 'Search Results' : 'Market Overview';
    else if (pathname === '/accepted') title = 'Accepted Leads';
    else if (pathname === '/waitlist') title = 'Waitlist';
    else if (pathname === '/datasets') title = 'Data Management';
    else if (pathname.startsWith('/dataset/')) {
        const id = pathname.split('/').pop();
        const ds = datasets.find(d => d.id === id);
        title = ds?.name || 'Dataset';
    }

    return (
        <header className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 transition-all duration-300 bg-white/50 backdrop-blur-md border-b border-white/40 supports-[backdrop-filter]:bg-white/20">
            <div className="flex items-center gap-4 flex-1 overflow-hidden">
                <button
                    className="md:hidden p-2 -ml-2 hover:bg-white/50 rounded-full transition-colors active:scale-95"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="w-5 h-5 text-slate-600" />
                </button>

                <h2 className="text-lg md:text-2xl font-bold tracking-tight text-slate-800 truncate flex items-center gap-2">
                    {title}
                    {searchTerm && <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">Global Search</span>}
                </h2>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-500 text-slate-400">
                        <Search className="w-4 h-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search leads..."
                        className="block w-32 sm:w-64 pl-10 pr-3 py-2 rounded-xl leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none ring-1 ring-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:shadow-md transition-all duration-300 sm:text-sm font-medium"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                    {/* Notification icon removed */}
                    {/* Settings or Profile could go here */}
                </div>
            </div>
        </header>
    );
}
