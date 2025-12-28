module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = 'https://otfrxwmjefcgooqwxdwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJ4d21qZWZjZ29vcXd4ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NDIsImV4cCI6MjA3MTExMTk0Mn0.V7dfPN0E-7vWppS1pOxMc3umNV9_6K6KeE-EwpTZPso';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadFlowProvider",
    ()=>LeadFlowProvider,
    "useLeadFlow",
    ()=>useLeadFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LeadFlowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LeadFlowProvider({ children }) {
    const [datasets, setDatasets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filesToUpload, setFilesToUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').select('*').order('created_at', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDatasets();
    }, []);
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').insert([
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').delete({
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('datasets').update({
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('clients').select('*').eq('id', id).single();
            if (error) throw error;
            return data;
        } catch (e) {
            console.error("Error fetching client", e);
            return null;
        }
    };
    const getMockClientBySource = async (datasetId, rowIndex)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('clients').select('*').eq('source_dataset_id', datasetId).eq('source_row_index', rowIndex).maybeSingle();
            if (error) throw error;
            return data;
        } catch (e) {
            console.error("Error checking client existence", e);
            return null;
        }
    };
    const createClient = async (clientData)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('clients').insert([
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('clients').update(updates).eq('id', id);
            if (error) throw error;
            showFeedback("Client updated", 'success');
        } catch (e) {
            console.error("Update client failed", e.message);
            showFeedback("Failed to update client", 'error');
        }
    };
    const deleteClient = async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('clients').delete().eq('id', id);
            if (error) throw error;
            showFeedback("Client removed successfully", 'success');
            return true;
        } catch (e) {
            console.error("Delete client failed", e.message);
            showFeedback("Failed to delete client", 'error');
            return false;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadFlowContext.Provider, {
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
function useLeadFlow() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LeadFlowContext);
    if (context === undefined) {
        throw new Error('useLeadFlow must be used within a LeadFlowProvider');
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-ssr] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Sidebar() {
    const { mobileMenuOpen, setMobileMenuOpen, filesToUpload, addFilesToUpload, removeFileFromUpload, clearUploadQueue, uploading, processUploadQueue, datasets, searchTerm, deleteDataset, renameDataset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempName, setTempName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileSelection = (e)=>{
        if (e.target.files) {
            addFilesToUpload(Array.from(e.target.files));
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("PERMANENT DELETE: Are you sure you want to remove this dataset from the cloud database?")) return;
        setDeletingId(id);
        await deleteDataset(id);
        setDeletingId(null);
        if (pathname === `/dataset/${id}`) {
            router.push('/dash');
        }
    };
    const handleRename = async ()=>{
        if (editingId && tempName.trim()) {
            await renameDataset(editingId, tempName);
        }
        setEditingId(null);
    };
    const filteredDatasets = datasets.filter((ds)=>!searchTerm || ds.name.toLowerCase().includes(searchTerm.toLowerCase()) || ds.headers.some((h)=>h.toLowerCase().includes(searchTerm.toLowerCase())));
    const navItems = [
        {
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            color: 'text-indigo-500',
            href: '/dash'
        },
        {
            label: 'Pricing Calculator',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
            color: 'text-purple-500',
            href: '/calc'
        },
        {
            label: 'Accepted',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: 'text-emerald-500',
            href: '/accepted'
        },
        {
            label: 'Waitlist',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"],
            color: 'text-amber-500',
            href: '/waitlist'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-slate-100 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dash",
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-600 p-1.5 rounded-lg text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold tracking-tight text-slate-800",
                                    children: "LeadFlow"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden",
                            onClick: ()=>setMobileMenuOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                lineNumber: 92,
                                columnNumber: 92
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-white hover:border-indigo-400 transition-all cursor-pointer group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-6 h-6 text-slate-400 group-hover:text-indigo-500 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-600",
                                            children: "Drop or Select CSV"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            ref: fileInputRef,
                                            className: "hidden",
                                            accept: ".csv",
                                            multiple: true,
                                            onChange: handleFileSelection
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this),
                                filesToUpload.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-[10px] font-bold uppercase text-indigo-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Queue (",
                                                        filesToUpload.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: clearUploadQueue,
                                                    className: "hover:text-rose-500 text-[10px] font-bold",
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-24 overflow-y-auto space-y-1 text-xs",
                                            children: filesToUpload.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center bg-white p-2 rounded-md border border-indigo-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate flex-1 pr-2",
                                                            children: f.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeFileFromUpload(i),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-3 h-3 text-slate-400 hover:text-rose-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 93
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: processUploadQueue,
                                            disabled: uploading,
                                            className: "w-full py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-md",
                                            children: [
                                                uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-3.5 h-3.5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 50
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 101
                                                }, this),
                                                "Cloud Sync"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-1 pt-4 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                    children: "Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                navItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: `w-full flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: `w-4 h-4 mr-3 ${item.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 37
                                            }, this),
                                            item.label
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-3 pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                        children: "History"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                filteredDatasets.map((ds)=>{
                                    const isActive = pathname === `/dataset/${ds.id}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative",
                                        children: editingId === ds.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-1 flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                autoFocus: true,
                                                value: tempName,
                                                onChange: (e)=>setTempName(e.target.value),
                                                onBlur: handleRename,
                                                onKeyDown: (e)=>e.key === 'Enter' && handleRename(),
                                                className: "flex-1 bg-white border border-indigo-200 rounded px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                lineNumber: 153,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                            lineNumber: 152,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/dataset/${ds.id}`,
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    className: `w-full flex items-center px-3 py-2.5 rounded-xl text-sm text-left transition-all ${isActive ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-500 hover:bg-slate-50'}`,
                                                    children: [
                                                        deletingId === ds.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 mr-3 animate-spin text-rose-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 73
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: `w-4 h-4 mr-3 flex-shrink-0 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 139
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `truncate flex-1 ${deletingId === ds.id ? 'opacity-50 text-rose-500 italic' : ''}`,
                                                            children: ds.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-2 top-1.5 opacity-0 group-hover:opacity-100 flex items-center gap-1 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !!deletingId,
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                setEditingId(ds.id);
                                                                setTempName(ds.name);
                                                            },
                                                            className: "p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-indigo-500 disabled:opacity-50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 293
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !!deletingId,
                                                            className: "p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-rose-500 disabled:opacity-50",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleDelete(ds.id);
                                                            },
                                                            children: deletingId === ds.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-3 h-3 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 77
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 124
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, ds.id, false, {
                                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
            lineNumber: 84,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Sidebar.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client";
;
;
;
;
function Header() {
    const { setMobileMenuOpen, searchTerm, setSearchTerm, datasets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname === '/calc') return null;
    let title = '';
    if (pathname === '/dash') title = searchTerm ? 'Search Results (Global)' : 'Market Overview';
    else if (pathname === '/accepted') title = 'Accepted Leads';
    else if (pathname === '/waitlist') title = 'Waitlist';
    else if (pathname.startsWith('/dataset/')) {
        const id = pathname.split('/').pop();
        const ds = datasets.find((d)=>d.id === id);
        title = ds?.name || 'Loading...';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden",
                        onClick: ()=>setMobileMenuOpen(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6 text-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                            lineNumber: 26,
                            columnNumber: 87
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold tracking-tight text-slate-800",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search leads across cloud...",
                            className: "pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-48 sm:w-64 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/context/LeadFlowContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/lead update 1/WebRivo-LeadFlow/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
"use client";
;
;
;
function Toaster() {
    const { feedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$src$2f$context$2f$LeadFlowContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeadFlow"])();
    if (!feedback) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-8 right-8 ${feedback.type === 'success' ? 'bg-emerald-600' : feedback.type === 'error' ? 'bg-rose-600' : 'bg-slate-900'} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 z-[100]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 bg-white/20 rounded-full",
                children: feedback.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                    lineNumber: 14,
                    columnNumber: 48
                }, this) : feedback.type === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/Downloads/lead update 1/WebRivo-LeadFlow/src/components/Toaster.tsx",
                    lineNumber: 14,
                    columnNumber: 119
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lead__update__1$2f$WebRivo$2d$LeadFlow$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__346ceacb._.js.map