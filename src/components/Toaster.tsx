"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { Check, X, TrendingUp } from 'lucide-react';

export function Toaster() {
    const { feedback } = useLeadFlow();

    if (!feedback) return null;

    return (
        <div className={`fixed bottom-8 right-8 ${feedback.type === 'success' ? 'bg-emerald-600' : feedback.type === 'error' ? 'bg-rose-600' : 'bg-slate-900'} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 z-[100]`}>
            <div className="p-1 bg-white/20 rounded-full">
                {feedback.type === 'success' ? <Check className="w-3 h-3 text-white" /> : feedback.type === 'error' ? <X className="w-3 h-3 text-white" /> : <TrendingUp className="w-3 h-3 text-white" />}
            </div>
            <p className="text-sm font-medium">{feedback.text}</p>
        </div>
    );
}
