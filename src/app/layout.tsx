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
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
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
