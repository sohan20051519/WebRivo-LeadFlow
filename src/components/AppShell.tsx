"use client";

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { useLeadFlow } from '@/context/LeadFlowContext';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isClientPage = pathname.startsWith('/clients/');
    const { currentUser, showFeedback } = useLeadFlow();

    useEffect(() => {
        if (currentUser) {
            const hasShownWelcome = sessionStorage.getItem('leadflow_welcome_shown');
            if (!hasShownWelcome) {
                showFeedback(`Welcome back, ${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}!`, 'success');
                sessionStorage.setItem('leadflow_welcome_shown', 'true');
            }
        }
    }, [currentUser, showFeedback]);

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
