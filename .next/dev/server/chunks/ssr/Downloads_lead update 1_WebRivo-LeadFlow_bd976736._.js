module.exports = [
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DatasetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-ssr] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
"use client";
;
;
;
;
;
;
function DatasetPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    const { datasets, updateLeadStatus, updateCell, showFeedback, searchTerm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedText, setCopiedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const ds = datasets.find((d)=>d.id === id);
    // Filter rows based on search term
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!ds) return [];
        const term = searchTerm ? searchTerm.trim().toLowerCase() : '';
        if (!term) return ds.data.map((row, idx)=>({
                row,
                idx
            }));
        return ds.data.map((row, idx)=>({
                row,
                idx
            })).filter(({ row })=>{
            const values = Object.values(row).map((v)=>String(v || '').toLowerCase()).join(' ');
            return values.includes(term);
        });
    }, [
        ds,
        searchTerm
    ]);
    const handleCellSave = async ()=>{
        if (!editingCell || !ds) return;
        const { rowIndex, column, value } = editingCell;
        await updateCell(ds.id, rowIndex, column, value);
        setEditingCell(null);
    };
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        showFeedback("Copied to clipboard", 'success');
        setTimeout(()=>setCopiedText(null), 2000);
    };
    if (!ds) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center text-slate-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "w-8 h-8 opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Dataset not found or loading..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-auto custom-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left border-collapse min-w-[300px] md:min-w-[800px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "sticky top-0 z-20 bg-slate-50 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "sticky left-0 bg-slate-50 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100 w-48",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, this),
                                ds.headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap min-w-[150px]",
                                        children: h
                                    }, i, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-slate-50",
                        children: filteredData.length > 0 ? filteredData.map(({ row, idx })=>{
                            const status = ds.statuses[idx] || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].PENDING;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: `group hover:bg-slate-50 transition-colors ${status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED ? 'bg-emerald-50/20' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "sticky left-0 bg-white group-hover:bg-slate-50 px-6 py-4 border-r border-slate-100 z-10 box-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(ds.id, idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED),
                                                    className: `p-2 rounded-lg transition-all ${status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].ACCEPTED ? 'bg-emerald-100 text-emerald-600 shadow-sm' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 309
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(ds.id, idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].WAIT),
                                                    className: `p-2 rounded-lg transition-all ${status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].WAIT ? 'bg-amber-100 text-amber-600 shadow-sm' : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 293
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateLeadStatus(ds.id, idx, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].DECLINED),
                                                    className: `p-2 rounded-lg transition-all ${status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadStatus"].DECLINED ? 'bg-rose-100 text-rose-600 shadow-sm' : 'text-slate-300 hover:bg-rose-50 hover:text-rose-500'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 297
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 41
                                    }, this),
                                    ds.headers.map((h, i)=>{
                                        const cellValue = row[h] || '';
                                        const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                                        const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                                        const isEditing = editingCell?.rowIndex === idx && editingCell?.column === h;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-slate-600 whitespace-nowrap",
                                            children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 57
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 group/cell",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onClick: ()=>isBusinessName && copyToClipboard(cellValue),
                                                        className: `truncate max-w-[300px] block ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`,
                                                        children: cellValue || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 61
                                                    }, this),
                                                    isBusinessName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(cellValue),
                                                        className: "opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all",
                                                        children: copiedText === cellValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3 text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 266
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 315
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 80
                                                    }, this),
                                                    isEditable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingCell({
                                                                rowIndex: idx,
                                                                column: h,
                                                                value: cellValue
                                                            }),
                                                        className: "opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 270
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 76
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 57
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 49
                                        }, this);
                                    })
                                ]
                            }, idx, true, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                lineNumber: 74,
                                columnNumber: 37
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: ds.headers.length + 1,
                                className: "py-20 text-center text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "w-8 h-8 opacity-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 164
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: searchTerm ? `No results for "${searchTerm}"` : 'No records found.'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 114
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/app/dataset/[id]/page.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-x", __iconNode);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Funnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("funnel", __iconNode);
;
 //# sourceMappingURL=funnel.js.map
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Downloads_lead%20update%201_WebRivo-LeadFlow_bd976736._.js.map