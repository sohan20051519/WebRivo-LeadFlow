"use client";

import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isClientPage = pathname.startsWith('/clients/');

    return (
        <div className="flex h-screen overflow-hidden text-slate-900 bg-transparent">
            {/* Ambient Background Noise/Gradient layer if not globally applied (it is global, so this container just needs to be transparent) */}
            <div className="fixed inset-0 bg-gradient-noise z-[-1]" />

            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 bg-transparent relative overflow-hidden">
                {!isClientPage && <Header />}
                {children}
            </main>
        </div>
    );
}
