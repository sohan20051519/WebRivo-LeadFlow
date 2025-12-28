import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { LeadFlowProvider } from '@/context/LeadFlowContext';
import { Toaster } from '@/components/Toaster';
import AppShell from '@/components/AppShell';
import AuthGate from '@/components/AuthGate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'LeadFlow AI',
    description: 'Intelligent Lead Management',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <AuthGate>
                    <LeadFlowProvider>
                        <AppShell>
                            {children}
                            <Toaster />
                        </AppShell>
                    </LeadFlowProvider>
                </AuthGate>
            </body>
        </html>
    );
}
