(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = 'https://otfrxwmjefcgooqwxdwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJ4d21qZWZjZ29vcXd4ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NDIsImV4cCI6MjA3MTExMTk0Mn0.V7dfPN0E-7vWppS1pOxMc3umNV9_6K6KeE-EwpTZPso';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadFlowProvider",
    ()=>LeadFlowProvider,
    "useLeadFlow",
    ()=>useLeadFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LeadFlowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LeadFlowProvider({ children }) {
    _s();
    const [datasets, setDatasets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filesToUpload, setFilesToUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showFeedback = (text, type = 'info')=>{
        setFeedback({
            text,
            type
        });
        setTimeout(()=>setFeedback(null), 3000);
    };
    // ... (existing fetch datasets)
    const fetchDatasets = async ()=>{
        setLoading(true);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').select('*').order('created_at', {
                ascending: false
            });
            if (error) throw new Error(error.message);
            if (data) {
                const formattedData = data.map((item)=>({
                        id: item.id,
                        name: item.name,
                        createdAt: new Date(item.created_at),
                        headers: item.headers || [],
                        data: item.data || [],
                        statuses: item.statuses || {}
                    }));
                setDatasets(formattedData);
            }
        } catch (err) {
            console.error('Error fetching datasets:', err.message || err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadFlowProvider.useEffect": ()=>{
            fetchDatasets();
        }
    }["LeadFlowProvider.useEffect"], []);
    const parseCSV = (text)=>{
        const lines = text.split('\n').filter((line)=>line.trim() !== '');
        if (lines.length < 2) return {
            headers: [],
            data: []
        };
        const headers = lines[0].split(',').map((h)=>h.trim().replace(/^"|"$|'/g, ''));
        const data = lines.slice(1).map((line)=>{
            const values = line.split(',').map((v)=>v.trim().replace(/^"|"$|'/g, ''));
            const row = {};
            headers.forEach((header, index)=>{
                row[header] = values[index] || '';
            });
            return row;
        });
        return {
            headers,
            data
        };
    };
    const processUploadQueue = async ()=>{
        if (filesToUpload.length === 0) return;
        setUploading(true);
        try {
            let combinedHeaders = [];
            let combinedData = [];
            let combinedName = filesToUpload[0].name;
            if (filesToUpload.length > 1) {
                combinedName = `${filesToUpload[0].name} + ${filesToUpload.length - 1} files`;
            }
            for (const file of filesToUpload){
                const text = await file.text();
                const { headers, data } = parseCSV(text);
                if (combinedHeaders.length === 0) {
                    combinedHeaders = headers;
                } else {
                    headers.forEach((h)=>{
                        if (!combinedHeaders.includes(h)) {
                            combinedHeaders.push(h);
                        }
                    });
                }
                combinedData.push(...data);
            }
            const payload = {
                name: combinedName,
                headers: combinedHeaders,
                data: combinedData.slice(0, 5000),
                statuses: {}
            };
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').insert([
                payload
            ]);
            if (error) throw new Error(error.message);
            await fetchDatasets();
            setFilesToUpload([]);
            showFeedback("Datasets merged and synced to cloud database", 'success');
        } catch (e) {
            console.error("Upload failed", e.message || e);
            showFeedback(`Upload failed: ${e.message}`, 'error');
        } finally{
            setUploading(false);
        }
    };
    const deleteDataset = async (datasetId)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').delete({
                count: 'exact'
            }).eq('id', datasetId);
            if (error) throw new Error(error.message);
            setDatasets((prev)=>prev.filter((d)=>d.id !== datasetId));
            showFeedback("Dataset permanently removed from cloud", 'success');
            return true;
        } catch (e) {
            console.error("Delete failed:", e.message || e);
            showFeedback(`Deletion Error: ${e.message}`, 'error');
            fetchDatasets();
            return false;
        }
    };
    const renameDataset = async (id, newName)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
                name: newName
            }).eq('id', id);
            if (error) throw new Error(error.message);
            setDatasets((prev)=>prev.map((d)=>d.id === id ? {
                        ...d,
                        name: newName
                    } : d));
            showFeedback("Dataset renamed successfully", 'info');
        } catch (e) {
            console.error("Rename failed", e.message || e);
            showFeedback(`Rename failed: ${e.message}`, 'error');
        }
    };
    const updateLeadStatus = async (datasetId, rowIndex, status)=>{
        const ds = datasets.find((d)=>d.id === datasetId);
        if (!ds) return;
        const newStatuses = {
            ...ds.statuses,
            [rowIndex]: status
        };
        setDatasets((prev)=>prev.map((d)=>d.id === datasetId ? {
                    ...d,
                    statuses: newStatuses
                } : d));
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
                statuses: newStatuses
            }).eq('id', datasetId);
            if (error) throw new Error(error.message);
        } catch (e) {
            console.error("Status update failed", e.message || e);
            fetchDatasets();
        }
    };
    const updateCell = async (dsId, rowIndex, column, value)=>{
        const ds = datasets.find((d)=>d.id === dsId);
        if (!ds) return;
        const newData = [
            ...ds.data
        ];
        newData[rowIndex] = {
            ...newData[rowIndex],
            [column]: value
        };
        setDatasets((prev)=>prev.map((d)=>d.id === dsId ? {
                    ...d,
                    data: newData
                } : d));
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
                data: newData
            }).eq('id', dsId);
            if (error) throw new Error(error.message);
        } catch (err) {
            console.error("Cell update failed", err.message);
            fetchDatasets();
        }
    };
    // Client Operations
    const getClient = async (id)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').select('*').eq('id', id).single();
            if (error) throw error;
            return data;
        } catch (e) {
            console.error("Error fetching client", e);
            return null;
        }
    };
    const getMockClientBySource = async (datasetId, rowIndex)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').select('*').eq('source_dataset_id', datasetId).eq('source_row_index', rowIndex).maybeSingle();
            if (error) throw error;
            return data;
        } catch (e) {
            console.error("Error checking client existence", e);
            return null;
        }
    };
    const createClient = async (clientData)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').insert([
                clientData
            ]).select().single();
            if (error) throw error;
            showFeedback("Client profile created successfully", 'success');
            return data.id;
        } catch (e) {
            console.error("Create client failed", e.message);
            showFeedback(`Failed to create client: ${e.message}`, 'error');
            return null;
        }
    };
    const updateClient = async (id, updates)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').update(updates).eq('id', id);
            if (error) throw error;
            showFeedback("Client updated", 'success');
        } catch (e) {
            console.error("Update client failed", e.message);
            showFeedback("Failed to update client", 'error');
        }
    };
    const deleteClient = async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').delete().eq('id', id);
            if (error) throw error;
            showFeedback("Client removed successfully", 'success');
            return true;
        } catch (e) {
            console.error("Delete client failed", e.message);
            showFeedback("Failed to delete client", 'error');
            return false;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadFlowContext.Provider, {
        value: {
            datasets,
            loading,
            refreshDatasets: fetchDatasets,
            filesToUpload,
            addFilesToUpload: (files)=>setFilesToUpload((prev)=>[
                        ...prev,
                        ...files
                    ]),
            removeFileFromUpload: (index)=>setFilesToUpload((prev)=>prev.filter((_, i)=>i !== index)),
            clearUploadQueue: ()=>setFilesToUpload([]),
            uploading,
            processUploadQueue,
            deleteDataset,
            renameDataset,
            updateLeadStatus,
            updateCell,
            getClient,
            getMockClientBySource,
            createClient,
            updateClient,
            deleteClient,
            searchTerm,
            setSearchTerm,
            mobileMenuOpen,
            setMobileMenuOpen,
            feedback,
            showFeedback
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, this);
}
_s(LeadFlowProvider, "3yJEK/69B6E2XqbiAf14NeBv7LY=");
_c = LeadFlowProvider;
function useLeadFlow() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LeadFlowContext);
    if (context === undefined) {
        throw new Error('useLeadFlow must be used within a LeadFlowProvider');
    }
    return context;
}
_s1(useLeadFlow, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LeadFlowProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { feedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    if (!feedback) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-8 right-8 ${feedback.type === 'success' ? 'bg-emerald-600' : feedback.type === 'error' ? 'bg-rose-600' : 'bg-slate-900'} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 z-[100]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 bg-white/20 rounded-full",
                children: feedback.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                    lineNumber: 14,
                    columnNumber: 48
                }, this) : feedback.type === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                    lineNumber: 14,
                    columnNumber: 119
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                    lineNumber: 14,
                    columnNumber: 158
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium",
                children: feedback.text
            }, void 0, false, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(Toaster, "GBVLnKboJ0RSm4gqXRTnAbqOsrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeadFlow"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_lead%20update%201_WebRivo-LeadFlow_src_14de00e2._.js.map