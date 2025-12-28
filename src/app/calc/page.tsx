"use client";

import { useLeadFlow } from '@/context/LeadFlowContext'; // Not used directly for calc state, but maybe for layout
import { useState, useMemo } from 'react';
import { Check, CheckSquare, Plus, Layers, Globe, Zap } from 'lucide-react';

const CALCULATOR_FEATURES: Record<string, { id: string, name: string, price: number }> = {
    mobile: { id: 'mobile', name: 'Mobile Design', price: 499 },
    whatsapp: { id: 'whatsapp', name: 'Default Website Link', price: 499 },
    maps: { id: 'maps', name: 'Google Maps', price: 499 },
    pages_5: { id: 'pages_5', name: '5-Page Site', price: 1499 },
    seo: { id: 'seo', name: 'SEO Core', price: 1499 },
    gbp: { id: 'gbp', name: 'GBP Optimization', price: 1499 },
    booking: { id: 'booking', name: 'Booking System', price: 2499 },
    payment: { id: 'payment', name: 'Payment Gateway', price: 2999 },
    admin: { id: 'admin', name: 'Admin Dashboard', price: 1999 },
    support: { id: 'support', name: 'Priority Support', price: 999 },
    page_1: { id: 'page_1', name: '1-Page Landing', price: 0 },
    delivery_3: { id: 'delivery_3', name: '3-Day Delivery', price: 0 }
};

const CALCULATOR_ADDONS = [
    { id: 'maint', name: 'Maintenance (Per Month)', price: 499 },
    { id: 'rank', name: 'Rank Setup', price: 999 },
    { id: 'wa_auto', name: 'WA Automation', price: 499 },
    { id: 'lang', name: 'Multilingual', price: 1499 }
];

const CALCULATOR_DOMAINS = [
    { id: 'com', name: '.com Domain', price: 2500 },
    { id: 'in', name: '.in Domain', price: 2000 },
    { id: 'org', name: '.org Domain', price: 2000 },
    { id: 'xyz', name: '.xyz Domain', price: 2000 }
];

const CALCULATOR_PLANS: Record<string, { name: string, price: number, included: string[] }> = {
    basic: {
        name: "Basic",
        price: 2999,
        included: ['page_1', 'mobile', 'delivery_3', 'whatsapp']
    },
    business: {
        name: "Business",
        price: 7999,
        included: ['pages_5', 'seo', 'mobile', 'whatsapp']
    },
    premium: {
        name: "Premium",
        price: 19999,
        included: ['pages_5', 'booking', 'payment', 'admin', 'seo', 'mobile', 'whatsapp', 'maps']
    },
    custom_build: {
        name: "Custom",
        price: 0,
        included: []
    }
};

export default function CalculatorPage() {
    const [calcPlanId, setCalcPlanId] = useState('basic');
    const [calcUpgrades, setCalcUpgrades] = useState<Set<string>>(new Set());
    const [calcAddons, setCalcAddons] = useState<Set<string>>(new Set());
    const [calcDomains, setCalcDomains] = useState<Set<string>>(new Set());
    const [calcCustomItems, setCalcCustomItems] = useState<{ name: string, price: number }[]>([]);
    const [newCustomName, setNewCustomName] = useState('');
    const [newCustomPrice, setNewCustomPrice] = useState('');

    const toggleUpgrade = (id: string) => {
        setCalcUpgrades(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const toggleAddon = (id: string) => {
        setCalcAddons(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const toggleDomain = (id: string) => {
        setCalcDomains(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const addCustomItem = () => {
        const p = parseInt(newCustomPrice);
        if (newCustomName.trim() && !isNaN(p)) {
            setCalcCustomItems([...calcCustomItems, { name: newCustomName.trim(), price: p }]);
            setNewCustomName('');
            setNewCustomPrice('');
        }
    };

    const removeCustomItem = (idx: number) => {
        setCalcCustomItems(calcCustomItems.filter((_, i) => i !== idx));
    };

    const calcTotal = useMemo(() => {
        let t = CALCULATOR_PLANS[calcPlanId].price;
        calcUpgrades.forEach(id => { t += CALCULATOR_FEATURES[id]?.price || 0; });
        calcAddons.forEach(id => { t += CALCULATOR_ADDONS.find(a => a.id === id)?.price || 0; });
        calcDomains.forEach(id => { t += CALCULATOR_DOMAINS.find(d => d.id === id)?.price || 0; });
        calcCustomItems.forEach(item => { t += item.price; });
        return t;
    }, [calcPlanId, calcUpgrades, calcAddons, calcDomains, calcCustomItems]);

    return (
        <div className="h-full flex flex-col overflow-hidden animate-in fade-in duration-500 bg-[#0b0f0e]">
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden p-4 gap-4">
                {/* Left Panel - Full width on mobile, fixed width on desktop */}
                <div className="w-full md:w-72 flex flex-col gap-4 md:border-r border-[#222] md:pr-4 pb-4 md:pb-0 border-b md:border-b-0">
                    <div className="bg-[#151917] p-3 rounded-xl border border-[#333]">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Lead Package</label>
                        <select
                            value={calcPlanId}
                            onChange={(e) => {
                                setCalcPlanId(e.target.value);
                                setCalcUpgrades(new Set());
                            }}
                            className="w-full bg-black text-white border border-[#444] p-1.5 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#4fd1a5]"
                        >
                            {Object.keys(CALCULATOR_PLANS).map(id => (
                                <option key={id} value={id}>{CALCULATOR_PLANS[id].name}</option>
                            ))}
                        </select>
                        <div className="text-2xl font-bold text-white text-center mt-3 tracking-tight">₹{CALCULATOR_PLANS[calcPlanId].price.toLocaleString()}</div>
                    </div>

                    <div className="flex-1 flex flex-col min-h-0 gap-3">
                        <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-wider"><CheckSquare className="w-3.5 h-3.5" /> Included</h3>
                        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1 max-h-32 md:max-h-none">
                            {CALCULATOR_PLANS[calcPlanId].included.length === 0 ? (
                                <p className="text-gray-600 text-[10px] italic">No base features.</p>
                            ) : (
                                CALCULATOR_PLANS[calcPlanId].included.map(fid => (
                                    <div key={fid} className="flex items-center gap-2 p-1.5 bg-[#4fd1a5]/5 border-l-2 border-[#4fd1a5] rounded-r text-[11px] text-gray-300">
                                        <Check className="w-3 h-3 text-[#4fd1a5]" /> {CALCULATOR_FEATURES[fid]?.name}
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="pt-3 border-t border-[#333] space-y-2">
                            <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-wider"><Plus className="w-3.5 h-3.5" /> Custom</h3>
                            <div className="flex gap-1.5">
                                <input type="text" placeholder="Item" value={newCustomName} onChange={e => setNewCustomName(e.target.value)} className="flex-1 bg-[#1a1a1a] border border-[#333] text-white p-1.5 rounded-lg text-[10px] outline-none" />
                                <input type="number" placeholder="₹" value={newCustomPrice} onChange={e => setNewCustomPrice(e.target.value)} className="w-14 bg-[#1a1a1a] border border-[#333] text-white p-1.5 rounded-lg text-[10px] outline-none" />
                                <button onClick={addCustomItem} className="bg-[#4fd1a5] text-black w-8 h-8 rounded-lg font-bold flex items-center justify-center hover:bg-[#3db890] transition-colors">+</button>
                            </div>
                            <div className="max-h-24 overflow-y-auto custom-scrollbar space-y-1">
                                {calcCustomItems.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-1 border-b border-[#222] text-[10px]">
                                        <span className="text-gray-400 truncate w-24">{item.name}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#4fd1a5] font-bold">₹{item.price}</span>
                                            <button onClick={() => removeCustomItem(i)} className="text-rose-600 hover:text-rose-400">×</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80"><Layers className="w-3.5 h-3.5" /> Core Upgrades</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                            {Object.keys(CALCULATOR_FEATURES).map(fid => {
                                const feat = CALCULATOR_FEATURES[fid];
                                if (CALCULATOR_PLANS[calcPlanId].included.includes(fid)) return null;
                                if (fid === 'page_1' || fid === 'delivery_3') return null;
                                const isSelected = calcUpgrades.has(fid);
                                return (
                                    <div
                                        key={fid}
                                        onClick={() => toggleUpgrade(fid)}
                                        className={`p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`}
                                    >
                                        <div className="flex justify-between items-start gap-1">
                                            <span className={`text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`}>{feat.name}</span>
                                            <div className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`}>
                                                {isSelected && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                                            </div>
                                        </div>
                                        <span className="text-[#4fd1a5] text-[10px] font-bold">+ ₹{feat.price}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80"><Globe className="w-3.5 h-3.5" /> Domains (Per Year/Renewal)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                            {CALCULATOR_DOMAINS.map(domain => {
                                const isSelected = calcDomains.has(domain.id);
                                return (
                                    <div
                                        key={domain.id}
                                        onClick={() => toggleDomain(domain.id)}
                                        className={`p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`}
                                    >
                                        <div className="flex justify-between items-start gap-1">
                                            <span className={`text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`}>{domain.name}</span>
                                            <div className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`}>
                                                {isSelected && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                                            </div>
                                        </div>
                                        <span className="text-[#4fd1a5] text-[10px] font-bold">+ ₹{domain.price}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80"><Zap className="w-3.5 h-3.5" /> Add-ons</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                            {CALCULATOR_ADDONS.map(addon => {
                                const isSelected = calcAddons.has(addon.id);
                                return (
                                    <div
                                        key={addon.id}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`}
                                    >
                                        <div className="flex justify-between items-start gap-1">
                                            <span className={`text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`}>{addon.name}</span>
                                            <div className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`}>
                                                {isSelected && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                                            </div>
                                        </div>
                                        <span className="text-[#4fd1a5] text-[10px] font-bold">+ ₹{addon.price}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="h-auto md:h-16 bg-gradient-to-r from-[#0f2027] via-[#1a3a4a] to-[#2c5364] flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 py-3 md:py-0 border-t border-[#333] gap-2 sm:gap-0">
                <div className="flex flex-col text-center sm:text-left">
                    <span className="text-white font-bold text-sm">Quotation Total</span>
                    <span className="text-[10px] text-gray-400 font-medium">Estimated build cost including tax</span>
                </div>
                <div className="text-3xl md:text-4xl font-black text-[#4fd1a5] tracking-tighter">₹ {calcTotal.toLocaleString()}</div>
            </footer>
        </div>
    );
}
