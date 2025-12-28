(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadStatus",
    ()=>LeadStatus
]);
var LeadStatus = /*#__PURE__*/ function(LeadStatus) {
    LeadStatus["ACCEPTED"] = "accepted";
    LeadStatus["WAIT"] = "wait";
    LeadStatus["DECLINED"] = "declined";
    LeadStatus["PENDING"] = "pending";
    return LeadStatus;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AcceptedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AcceptedPage() {
    _s();
    const { datasets, updateLeadStatus, updateCell, showFeedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedText, setCopiedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AcceptedPage.useMemo[filteredRows]": ()=>{
            let rows = [];
            datasets.forEach({
                "AcceptedPage.useMemo[filteredRows]": (ds)=>{
                    ds.data.forEach({
                        "AcceptedPage.useMemo[filteredRows]": (r, i)=>{
                            if (ds.statuses[i] === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED) {
                                rows.push({
                                    row: r,
                                    idx: i,
                                    dsId: ds.id,
                                    dsName: ds.name
                                });
                            }
                        }
                    }["AcceptedPage.useMemo[filteredRows]"]);
                }
            }["AcceptedPage.useMemo[filteredRows]"]);
            return rows;
        }
    }["AcceptedPage.useMemo[filteredRows]"], [
        datasets
    ]);
    // Get headers from first dataset that has headers? Ideally merge headers or just take union.
    // App.tsx logic: if (filtered.length > 0 && headers.length === 0) headers = ds.headers;
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AcceptedPage.useMemo[headers]": ()=>{
            if (datasets.length === 0) return [];
            // Find a dataset that contributes rows
            const contributingDs = datasets.find({
                "AcceptedPage.useMemo[headers].contributingDs": (ds)=>ds.data.some({
                        "AcceptedPage.useMemo[headers].contributingDs": (_, i)=>ds.statuses[i] === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED
                    }["AcceptedPage.useMemo[headers].contributingDs"])
            }["AcceptedPage.useMemo[headers].contributingDs"]);
            return contributingDs ? contributingDs.headers : datasets[0]?.headers || [];
        }
    }["AcceptedPage.useMemo[headers]"], [
        datasets
    ]);
    const handleCellSave = async ()=>{
        if (!editingCell) return;
        const { dsId, rowIndex, column, value } = editingCell;
        await updateCell(dsId, rowIndex, column, value);
        setEditingCell(null);
    };
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(()=>setCopiedText(null), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-auto custom-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left border-collapse min-w-[300px] md:min-w-[800px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "sticky top-0 z-20 bg-slate-50 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "sticky left-0 bg-slate-50 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-48",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this),
                                headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px]",
                                        children: h
                                    }, i, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap",
                                    children: "Source Dataset"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-slate-50",
                        children: filteredRows.length > 0 ? filteredRows.map((item, flatIdx)=>{
                            // flatIdx is just loop index, we use item.idx for row index
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "group hover:bg-slate-50 transition-colors bg-emerald-50/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "sticky left-0 bg-white group-hover:bg-slate-50 px-6 py-4 border-r border-slate-100 z-10 box-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(item.dsId, item.idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED),
                                                    className: "p-2 rounded-lg bg-emerald-100 text-emerald-600 shadow-sm transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 216
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(item.dsId, item.idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatus"].WAIT),
                                                    className: "p-2 rounded-lg text-slate-300 hover:bg-amber-50 hover:text-amber-500 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 224
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(item.dsId, item.idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatus"].DECLINED),
                                                    className: "p-2 rounded-lg text-slate-300 hover:bg-rose-50 hover:text-rose-500 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 226
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManageClientButton, {
                                                    dsId: item.dsId,
                                                    rowIdx: item.idx,
                                                    rowData: item.row
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 41
                                    }, this),
                                    headers.map((h, i)=>{
                                        const cellValue = item.row[h] || '';
                                        const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                        const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                        const isEditing = editingCell?.dsId === item.dsId && editingCell?.rowIndex === item.idx && editingCell?.column === h;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-slate-600 whitespace-nowrap",
                                            children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                autoFocus: true,
                                                className: "w-full bg-white border border-indigo-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-500",
                                                value: editingCell.value,
                                                onChange: (e)=>setEditingCell({
                                                        ...editingCell,
                                                        value: e.target.value
                                                    }),
                                                onBlur: handleCellSave,
                                                onKeyDown: (e)=>e.key === 'Enter' && handleCellSave()
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 57
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 group/cell",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onClick: ()=>isBusinessName && copyToClipboard(cellValue),
                                                        className: `truncate max-w-[200px] block ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`,
                                                        children: cellValue || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 61
                                                    }, this),
                                                    isBusinessName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(cellValue),
                                                        className: "opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all",
                                                        children: copiedText === cellValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3 text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 266
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 315
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 80
                                                    }, this),
                                                    isEditable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingCell({
                                                                dsId: item.dsId,
                                                                rowIndex: item.idx,
                                                                column: h,
                                                                value: cellValue
                                                            }),
                                                        className: "opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 292
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 76
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 57
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 49
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-xs font-bold text-indigo-500 whitespace-nowrap italic",
                                        children: item.dsName
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, `${item.dsId}-${item.idx}`, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                lineNumber: 66,
                                columnNumber: 37
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: headers.length + 2,
                                className: "py-20 text-center text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "w-8 h-8 opacity-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 161
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: "No accepted leads found."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 202
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 111
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                                lineNumber: 99,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                            lineNumber: 99,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/accepted/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(AcceptedPage, "nXaxR4PyFSiyn9iSNg+80I1VWWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeadFlow"]
    ];
});
_c = AcceptedPage;
var _c;
__turbopack_context__.k.register(_c, "AcceptedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleX
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
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
];
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-x", __iconNode);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Copy
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
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
];
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Funnel
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
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }
    ]
];
const Funnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("funnel", __iconNode);
;
 //# sourceMappingURL=funnel.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_lead%20update%201_WebRivo-LeadFlow_fae3623a._.js.map