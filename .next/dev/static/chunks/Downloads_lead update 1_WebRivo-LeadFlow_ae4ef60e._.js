(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalculatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CALCULATOR_FEATURES = {
    mobile: {
        id: 'mobile',
        name: 'Mobile Design',
        price: 499
    },
    whatsapp: {
        id: 'whatsapp',
        name: 'WhatsApp Link',
        price: 499
    },
    maps: {
        id: 'maps',
        name: 'Google Maps',
        price: 499
    },
    pages_5: {
        id: 'pages_5',
        name: '5-Page Site',
        price: 1499
    },
    seo: {
        id: 'seo',
        name: 'SEO Core',
        price: 1499
    },
    gbp: {
        id: 'gbp',
        name: 'GBP Optimization',
        price: 1499
    },
    booking: {
        id: 'booking',
        name: 'Booking System',
        price: 2499
    },
    payment: {
        id: 'payment',
        name: 'Payment Gateway',
        price: 2999
    },
    admin: {
        id: 'admin',
        name: 'Admin Dashboard',
        price: 1999
    },
    support: {
        id: 'support',
        name: 'Priority Support',
        price: 999
    },
    page_1: {
        id: 'page_1',
        name: '1-Page Landing',
        price: 0
    },
    delivery_3: {
        id: 'delivery_3',
        name: '3-Day Delivery',
        price: 0
    }
};
const CALCULATOR_ADDONS = [
    {
        id: 'maint',
        name: 'Maintenance',
        price: 499
    },
    {
        id: 'rank',
        name: 'Rank Setup',
        price: 999
    },
    {
        id: 'wa_auto',
        name: 'WA Automation',
        price: 499
    },
    {
        id: 'lang',
        name: 'Multilingual',
        price: 1499
    }
];
const CALCULATOR_DOMAINS = [
    {
        id: 'com',
        name: '.com Domain',
        price: 2500
    },
    {
        id: 'in',
        name: '.in Domain',
        price: 2000
    },
    {
        id: 'org',
        name: '.org Domain',
        price: 2000
    },
    {
        id: 'xyz',
        name: '.xyz Domain',
        price: 2000
    }
];
const CALCULATOR_PLANS = {
    basic: {
        name: "Basic",
        price: 2999,
        included: [
            'page_1',
            'mobile',
            'delivery_3'
        ]
    },
    business: {
        name: "Business",
        price: 7999,
        included: [
            'pages_5',
            'seo',
            'mobile',
            'whatsapp'
        ]
    },
    premium: {
        name: "Premium",
        price: 19999,
        included: [
            'pages_5',
            'booking',
            'payment',
            'admin',
            'seo',
            'mobile',
            'whatsapp',
            'maps'
        ]
    },
    custom_build: {
        name: "Custom",
        price: 0,
        included: []
    }
};
function CalculatorPage() {
    _s();
    const [calcPlanId, setCalcPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('basic');
    const [calcUpgrades, setCalcUpgrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [calcAddons, setCalcAddons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [calcDomains, setCalcDomains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [calcCustomItems, setCalcCustomItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newCustomName, setNewCustomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newCustomPrice, setNewCustomPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const toggleUpgrade = (id)=>{
        setCalcUpgrades((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const toggleAddon = (id)=>{
        setCalcAddons((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const toggleDomain = (id)=>{
        setCalcDomains((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const addCustomItem = ()=>{
        const p = parseInt(newCustomPrice);
        if (newCustomName.trim() && !isNaN(p)) {
            setCalcCustomItems([
                ...calcCustomItems,
                {
                    name: newCustomName.trim(),
                    price: p
                }
            ]);
            setNewCustomName('');
            setNewCustomPrice('');
        }
    };
    const removeCustomItem = (idx)=>{
        setCalcCustomItems(calcCustomItems.filter((_, i)=>i !== idx));
    };
    const calcTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalculatorPage.useMemo[calcTotal]": ()=>{
            let t = CALCULATOR_PLANS[calcPlanId].price;
            calcUpgrades.forEach({
                "CalculatorPage.useMemo[calcTotal]": (id)=>{
                    t += CALCULATOR_FEATURES[id]?.price || 0;
                }
            }["CalculatorPage.useMemo[calcTotal]"]);
            calcAddons.forEach({
                "CalculatorPage.useMemo[calcTotal]": (id)=>{
                    t += CALCULATOR_ADDONS.find({
                        "CalculatorPage.useMemo[calcTotal]": (a)=>a.id === id
                    }["CalculatorPage.useMemo[calcTotal]"])?.price || 0;
                }
            }["CalculatorPage.useMemo[calcTotal]"]);
            calcDomains.forEach({
                "CalculatorPage.useMemo[calcTotal]": (id)=>{
                    t += CALCULATOR_DOMAINS.find({
                        "CalculatorPage.useMemo[calcTotal]": (d)=>d.id === id
                    }["CalculatorPage.useMemo[calcTotal]"])?.price || 0;
                }
            }["CalculatorPage.useMemo[calcTotal]"]);
            calcCustomItems.forEach({
                "CalculatorPage.useMemo[calcTotal]": (item)=>{
                    t += item.price;
                }
            }["CalculatorPage.useMemo[calcTotal]"]);
            return t;
        }
    }["CalculatorPage.useMemo[calcTotal]"], [
        calcPlanId,
        calcUpgrades,
        calcAddons,
        calcDomains,
        calcCustomItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col overflow-hidden animate-in fade-in duration-500 bg-[#0b0f0e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden p-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-72 flex flex-col gap-4 border-r border-[#222] pr-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#151917] p-3 rounded-xl border border-[#333]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5",
                                        children: "Lead Package"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: calcPlanId,
                                        onChange: (e)=>{
                                            setCalcPlanId(e.target.value);
                                            setCalcUpgrades(new Set());
                                        },
                                        className: "w-full bg-black text-white border border-[#444] p-1.5 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#4fd1a5]",
                                        children: Object.keys(CALCULATOR_PLANS).map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: id,
                                                children: CALCULATOR_PLANS[id].name
                                            }, id, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-white text-center mt-3 tracking-tight",
                                        children: [
                                            "₹",
                                            CALCULATOR_PLANS[calcPlanId].price.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col min-h-0 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 125
                                            }, this),
                                            " Included"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1",
                                        children: CALCULATOR_PLANS[calcPlanId].included.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-[10px] italic",
                                            children: "No base features."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 33
                                        }, this) : CALCULATOR_PLANS[calcPlanId].included.map((fid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 p-1.5 bg-[#4fd1a5]/5 border-l-2 border-[#4fd1a5] rounded-r text-[11px] text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3 h-3 text-[#4fd1a5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 41
                                                    }, this),
                                                    " ",
                                                    CALCULATOR_FEATURES[fid]?.name
                                                ]
                                            }, fid, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t border-[#333] space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-wider",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 129
                                                    }, this),
                                                    " Custom"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Item",
                                                        value: newCustomName,
                                                        onChange: (e)=>setNewCustomName(e.target.value),
                                                        className: "flex-1 bg-[#1a1a1a] border border-[#333] text-white p-1.5 rounded-lg text-[10px] outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        placeholder: "₹",
                                                        value: newCustomPrice,
                                                        onChange: (e)=>setNewCustomPrice(e.target.value),
                                                        className: "w-14 bg-[#1a1a1a] border border-[#333] text-white p-1.5 rounded-lg text-[10px] outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addCustomItem,
                                                        className: "bg-[#4fd1a5] text-black w-8 h-8 rounded-lg font-bold flex items-center justify-center hover:bg-[#3db890] transition-colors",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-24 overflow-y-auto custom-scrollbar space-y-1",
                                                children: calcCustomItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-1 border-b border-[#222] text-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400 truncate w-24",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4fd1a5] font-bold",
                                                                        children: [
                                                                            "₹",
                                                                            item.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeCustomItem(i),
                                                                        className: "text-rose-600 hover:text-rose-400",
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 137
                                            }, this),
                                            " Core Upgrades"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2",
                                        children: Object.keys(CALCULATOR_FEATURES).map((fid)=>{
                                            const feat = CALCULATOR_FEATURES[fid];
                                            if (CALCULATOR_PLANS[calcPlanId].included.includes(fid)) return null;
                                            if (fid === 'page_1' || fid === 'delivery_3') return null;
                                            const isSelected = calcUpgrades.has(fid);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleUpgrade(fid),
                                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`,
                                                                children: feat.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-2.5 h-2.5 text-black font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 64
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#4fd1a5] text-[10px] font-bold",
                                                        children: [
                                                            "+ ₹",
                                                            feat.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, fid, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 137
                                            }, this),
                                            " Domains"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2",
                                        children: CALCULATOR_DOMAINS.map((domain)=>{
                                            const isSelected = calcDomains.has(domain.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleDomain(domain.id),
                                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`,
                                                                children: domain.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-2.5 h-2.5 text-black font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 64
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#4fd1a5] text-[10px] font-bold",
                                                        children: [
                                                            "+ ₹",
                                                            domain.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, domain.id, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 137
                                            }, this),
                                            " Add-ons"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2",
                                        children: CALCULATOR_ADDONS.map((addon)=>{
                                            const isSelected = calcAddons.has(addon.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleAddon(addon.id),
                                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between min-h-[64px] ${isSelected ? 'border-[#4fd1a5] bg-[#1b2622]' : 'border-[#222] bg-[#151917] hover:border-[#444]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[11px] font-semibold leading-tight ${isSelected ? 'text-[#4fd1a5]' : 'text-gray-400'}`,
                                                                children: addon.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-[#4fd1a5] border-[#4fd1a5]' : 'border-[#333]'}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-2.5 h-2.5 text-black font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 64
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#4fd1a5] text-[10px] font-bold",
                                                        children: [
                                                            "+ ₹",
                                                            addon.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, addon.id, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "h-16 bg-gradient-to-r from-[#0f2027] via-[#1a3a4a] to-[#2c5364] flex justify-between items-center px-8 border-t border-[#333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-sm",
                                children: "Quotation Total"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400 font-medium",
                                children: "Estimated build cost including tax"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl font-black text-[#4fd1a5] tracking-tighter",
                        children: [
                            "₹ ",
                            calcTotal.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                        lineNumber: 257,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/calc/page.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(CalculatorPage, "PIWS4BCllJ4sd4T3PyZQug5Z6Cw=");
_c = CalculatorPage;
var _c;
__turbopack_context__.k.register(_c, "CalculatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SquareCheckBig
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
            key: "2acyp4"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const SquareCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("square-check-big", __iconNode);
;
 //# sourceMappingURL=square-check-big.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
 //# sourceMappingURL=layers.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Globe
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
];
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("globe", __iconNode);
;
 //# sourceMappingURL=globe.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_lead%20update%201_WebRivo-LeadFlow_ae4ef60e._.js.map