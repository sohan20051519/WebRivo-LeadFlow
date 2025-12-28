"use client";

import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isClientPage = pathname.startsWith('/clients/');

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 bg-slate-50 relative overflow-hidden">
                {!isClientPage && <Header />}
                {children}
            </main>
        </div>
    );
}
