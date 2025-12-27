
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  XCircle, 
  PauseCircle, 
  Trash2, 
  LayoutDashboard,
  Loader2,
  Search,
  Menu,
  X,
  Edit2,
  TrendingUp,
  Users,
  PieChart,
  ArrowUpRight,
  Send,
  Filter,
  BarChart3,
  Copy,
  Check,
  Calculator,
  Plus,
  CheckSquare,
  Layers,
  Zap
} from 'lucide-react';
import { ResponsiveContainer, PieChart as RePieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { createClient } from '@supabase/supabase-js';
import { Dataset, LeadRow, LeadStatus, ViewState, GlobalStats } from './types';

// Supabase Configuration
const supabaseUrl = 'https://otfrxwmjefcgooqwxdwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJ4d21qZWZjZ29vcXd4ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NDIsImV4cCI6MjA3MTExMTk0Mn0.V7dfPN0E-7vWppS1pOxMc3umNV9_6K6KeE-EwpTZPso';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#94a3b8'];

// --- Calculator Data Configuration ---
const CALCULATOR_FEATURES: Record<string, { id: string, name: string, price: number }> = {
  mobile: { id: 'mobile', name: 'Mobile Design', price: 499 },
  whatsapp: { id: 'whatsapp', name: 'WhatsApp Link', price: 499 },
  maps: { id: 'maps', name: 'Google Maps', price: 499 },
  pages_5: { id: 'pages_5', name: '5-Page Site', price: 1499 },
  services: { id: 'services', name: 'Services List', price: 999 },
  contact: { id: 'contact', name: 'Contact Form', price: 999 },
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
  { id: 'maint', name: 'Maintenance', price: 499 },
  { id: 'rank', name: 'Rank Setup', price: 999 },
  { id: 'wa_auto', name: 'WA Automation', price: 499 },
  { id: 'lang', name: 'Multilingual', price: 1499 }
];

const CALCULATOR_PLANS: Record<string, { name: string, price: number, included: string[] }> = {
  basic: {
    name: "Basic",
    price: 2999,
    included: ['page_1', 'mobile', 'whatsapp', 'maps', 'delivery_3']
  },
  business: {
    name: "Business",
    price: 7999,
    included: ['pages_5', 'services', 'contact', 'seo', 'gbp', 'mobile', 'whatsapp', 'maps']
  },
  premium: {
    name: "Premium",
    price: 19999,
    included: ['pages_5', 'booking', 'payment', 'admin', 'support', 'services', 'contact', 'seo', 'gbp', 'mobile', 'whatsapp', 'maps']
  },
  custom_build: {
    name: "Custom",
    price: 0,
    included: []
  }
};

export default function App() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedDatasetId, setSelectedDatasetId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempName, setTempName] = useState('');
  
  const [editingCell, setEditingCell] = useState<{ dsId: string, rowIndex: number, column: string, value: string } | null>(null);
  const [feedback, setFeedback] = useState<{ text: string, type: 'success' | 'info' | 'error' } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Supabase Operations ---
  const fetchDatasets = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('datasets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);

      if (data) {
        const formattedData: Dataset[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          createdAt: new Date(item.created_at),
          headers: item.headers || [],
          data: item.data || [],
          statuses: item.statuses || {}
        }));
        setDatasets(formattedData);
      }
    } catch (err: any) {
      console.error('Error fetching datasets:', err.message || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatasets();
  }, []);

  // --- Logic ---
  const parseCSV = (text: string): { headers: string[], data: LeadRow[] } => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return { headers: [], data: [] };
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$|'/g, ''));
    const data = lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim().replace(/^"|"$|'/g, ''));
      const row: LeadRow = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      return row;
    });
    return { headers, data };
  };

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFilesToUpload(prev => [...prev, ...Array.from(e.target.files!)]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const processUploadQueue = async () => {
    if (filesToUpload.length === 0) return;
    setUploading(true);
    try {
      let combinedHeaders: string[] = [];
      let combinedData: LeadRow[] = [];
      let combinedName = filesToUpload[0].name;

      if (filesToUpload.length > 1) {
        combinedName = `${filesToUpload[0].name} + ${filesToUpload.length - 1} files`;
      }

      for (const file of filesToUpload) {
        const text = await file.text();
        const { headers, data } = parseCSV(text);

        if (combinedHeaders.length === 0) {
          combinedHeaders = headers;
        } else {
          headers.forEach(h => {
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
        statuses: {},
      };

      const { data, error } = await supabase.from('datasets').insert([payload]).select();
      if (error) throw new Error(error.message);

      await fetchDatasets();
      setFilesToUpload([]);
      showFeedback("Datasets merged and synced to cloud database", 'success');
      if (data && data.length > 0) {
        setSelectedDatasetId(data[0].id);
        setCurrentView('dataset');
      }
    } catch (e: any) {
      console.error("Upload failed", e.message || e);
      showFeedback(`Upload failed: ${e.message}`, 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleStatusChange = async (datasetId: string, rowIndex: number, status: LeadStatus) => {
    const ds = datasets.find(d => d.id === datasetId);
    if (!ds) return;
    const newStatuses = { ...ds.statuses, [rowIndex]: status };
    try {
      setDatasets(prev => prev.map(d => d.id === datasetId ? { ...d, statuses: newStatuses } : d));
      const { error } = await supabase.from('datasets').update({ statuses: newStatuses }).eq('id', datasetId);
      if (error) throw new Error(error.message);
    } catch (e: any) {
      console.error("Status update failed", e.message || e);
      await fetchDatasets();
    }
  };

  const handleRename = async () => {
    if (!editingId || !tempName.trim()) { setEditingId(null); return; }
    try {
      const { error } = await supabase.from('datasets').update({ name: tempName }).eq('id', editingId);
      if (error) throw new Error(error.message);
      setDatasets(prev => prev.map(d => d.id === editingId ? { ...d, name: tempName } : d));
      showFeedback("Dataset renamed successfully", 'info');
    } catch (e: any) {
      console.error("Rename failed", e.message || e);
    } finally {
      setEditingId(null);
    }
  };

  const handleCellSave = async () => {
    if (!editingCell) return;
    const { dsId, rowIndex, column, value } = editingCell;
    const ds = datasets.find(d => d.id === dsId);
    if (!ds) return;
    const newData = [...ds.data];
    newData[rowIndex] = { ...newData[rowIndex], [column]: value };
    try {
      setDatasets(prev => prev.map(d => d.id === dsId ? { ...d, data: newData } : d));
      const { error } = await supabase.from('datasets').update({ data: newData }).eq('id', dsId);
      if (error) throw new Error(error.message);
    } catch (err: any) {
      console.error("Cell update failed", err.message);
      await fetchDatasets();
    } finally {
      setEditingCell(null);
    }
  };

  const showFeedback = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    setFeedback({ text, type });
    setTimeout(() => setFeedback(null), 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showFeedback("Copied to clipboard", 'success');
  };

  const handleDeleteDataset = async (datasetId: string) => {
    if (!window.confirm("PERMANENT DELETE: Are you sure you want to remove this dataset from the cloud database?")) return;
    
    setDeletingId(datasetId);
    try {
      console.log(`Attempting to delete dataset: ${datasetId}`);
      
      // We use .select() to ensure we get confirmation of which rows were actually removed
      const { data, error, count } = await supabase
        .from('datasets')
        .delete({ count: 'exact' })
        .eq('id', datasetId)
        .select();

      if (error) {
        console.error("Supabase error during deletion:", error);
        throw new Error(error.message || "Cloud deletion rejected. Check RLS Universal Policy.");
      }

      // If count is 0, it means the record didn't exist or RLS blocked it without error
      if (!data || data.length === 0) {
        console.warn("Delete request sent but 0 rows were affected. This usually means a mismatch in ID or RLS blocking.");
        throw new Error("No record found to delete. It may have already been removed.");
      }

      console.log("Deletion successful:", data);

      // Update local state ONLY after successful DB deletion
      setDatasets(prev => prev.filter(d => d.id !== datasetId));
      
      if (selectedDatasetId === datasetId) { 
        setSelectedDatasetId(null); 
        setCurrentView('dashboard'); 
      }
      
      showFeedback("Dataset permanently removed from cloud", 'success');
    } catch (e: any) {
      console.error("Delete sequence failed:", e.message || e);
      showFeedback(`Deletion Error: ${e.message}`, 'error');
      // If it failed, refresh to ensure UI is in sync with DB
      fetchDatasets();
    } finally {
      setDeletingId(null);
    }
  };

  const navigateToView = (view: ViewState, id: string | null = null) => {
    setCurrentView(view);
    setSelectedDatasetId(id);
    setMobileMenuOpen(false);
    setSearchTerm('');
    setEditingCell(null);
  };

  // --- Calculator Logic ---
  const [calcPlanId, setCalcPlanId] = useState('basic');
  const [calcUpgrades, setCalcUpgrades] = useState<Set<string>>(new Set());
  const [calcAddons, setCalcAddons] = useState<Set<string>>(new Set());
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
    calcCustomItems.forEach(item => { t += item.price; });
    return t;
  }, [calcPlanId, calcUpgrades, calcAddons, calcCustomItems]);

  // --- UI Helpers ---
  const globalStats: GlobalStats = useMemo(() => {
    let stats = { total: 0, accepted: 0, wait: 0, declined: 0, pending: 0 };
    datasets.forEach(ds => {
      stats.total += ds.data.length;
      Object.values(ds.statuses || {}).forEach(s => {
        if (s === LeadStatus.ACCEPTED) stats.accepted++;
        else if (s === LeadStatus.WAIT) stats.wait++;
        else if (s === LeadStatus.DECLINED) stats.declined++;
      });
    });
    stats.pending = stats.total - (stats.accepted + stats.wait + stats.declined);
    return stats;
  }, [datasets]);

  const chartData = [
    { name: 'Accepted', value: globalStats.accepted, color: COLORS[0] },
    { name: 'Waitlist', value: globalStats.wait, color: COLORS[1] },
    { name: 'Declined', value: globalStats.declined, color: COLORS[2] },
    { name: 'Pending', value: globalStats.pending, color: COLORS[3] },
  ];

  const viewData = useMemo(() => {
    if (currentView === 'calculator') return { title: '', rows: [], headers: [] };
    
    let filtered: { row: LeadRow, idx: number, dsId: string, status: LeadStatus, dsName: string }[] = [];
    let headers: string[] = [];
    let title = '';

    const isSearching = searchTerm.trim() !== '';

    if (currentView === 'dashboard' && isSearching) {
      title = 'Search Results (Global)';
      datasets.forEach(ds => {
        ds.data.forEach((r, i) => {
          filtered.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, status: ds.statuses[i] || LeadStatus.PENDING });
        });
        if (headers.length === 0) headers = ds.headers;
      });
    } else if (currentView === 'dashboard') {
      title = 'Market Overview';
    } else if (currentView === 'dataset' && selectedDatasetId) {
      const ds = datasets.find(d => d.id === selectedDatasetId);
      if (ds) { 
        title = ds.name; 
        headers = ds.headers; 
        filtered = ds.data.map((r, i) => ({ row: r, idx: i, dsId: ds.id, dsName: ds.name, status: ds.statuses[i] || LeadStatus.PENDING })); 
      }
    } else if (currentView === 'accepted' || currentView === 'wait') {
      title = currentView === 'accepted' ? 'Accepted Leads' : 'Waitlist';
      const target = currentView === 'accepted' ? LeadStatus.ACCEPTED : LeadStatus.WAIT;
      datasets.forEach(ds => {
        ds.data.forEach((r, i) => { 
          if (ds.statuses[i] === target) filtered.push({ row: r, idx: i, dsId: ds.id, dsName: ds.name, status: target }); 
        });
        if (filtered.length > 0 && headers.length === 0) headers = ds.headers;
      });
    }

    if (isSearching) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(item => {
        return Object.values(item.row).some(val => 
          val?.toString().toLowerCase().includes(lowerSearch)
        ) || item.dsName.toLowerCase().includes(lowerSearch);
      });
    }

    return { title, rows: filtered, headers };
  }, [currentView, selectedDatasetId, datasets, searchTerm]);

  const filteredDatasets = useMemo(() => {
    if (!searchTerm) return datasets;
    const lower = searchTerm.toLowerCase();
    return datasets.filter(ds => 
      ds.name.toLowerCase().includes(lower) || 
      ds.headers.some(h => h.toLowerCase().includes(lower))
    );
  }, [datasets, searchTerm]);

  if (loading && datasets.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
          <p className="text-slate-500 font-medium animate-pulse">Syncing with LeadFlow Database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateToView('dashboard')}>
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800">LeadFlow</h1>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
          </div>

          <div className="p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
            <div className="space-y-2">
              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-white hover:border-indigo-400 transition-all cursor-pointer group">
                <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 mb-2" />
                <span className="text-xs font-semibold text-slate-600">Drop or Select CSV</span>
                <input type="file" ref={fileInputRef} className="hidden" accept=".csv" multiple onChange={handleFileSelection} />
              </label>

              {filesToUpload.length > 0 && (
                <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase text-indigo-400">
                    <span>Queue ({filesToUpload.length})</span>
                    <button onClick={() => setFilesToUpload([])} className="hover:text-rose-500 text-[10px] font-bold">Clear</button>
                  </div>
                  <div className="max-h-24 overflow-y-auto space-y-1 text-xs">
                    {filesToUpload.map((f, i) => (
                      <div key={i} className="flex justify-between items-center bg-white p-2 rounded-md border border-indigo-50">
                        <span className="truncate flex-1 pr-2">{f.name}</span>
                        <button onClick={() => setFilesToUpload(prev => prev.filter((_, idx) => idx !== i))}><X className="w-3 h-3 text-slate-400 hover:text-rose-500" /></button>
                      </div>
                    ))}
                  </div>
                  <button onClick={processUploadQueue} disabled={uploading} className="w-full py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-md">
                    {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}Cloud Sync
                  </button>
                </div>
              )}
            </div>

            <nav className="space-y-1 pt-4 border-t border-slate-100">
              <p className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigation</p>
              {[
                { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-indigo-500' },
                { id: 'calculator', label: 'Pricing Calculator', icon: Calculator, color: 'text-purple-500' },
                { id: 'accepted', label: 'Accepted', icon: CheckCircle, color: 'text-emerald-500' },
                { id: 'wait', label: 'Waitlist', icon: PauseCircle, color: 'text-amber-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToView(item.id as ViewState)}
                  className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    currentView === item.id ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-6 space-y-1">
              <div className="flex items-center justify-between px-3 pb-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">History</p>
              </div>
              {filteredDatasets.map((ds) => (
                <div key={ds.id} className="group relative">
                  {editingId === ds.id ? (
                    <div className="px-3 py-1 flex items-center gap-2">
                      <input autoFocus value={tempName} onChange={(e) => setTempName(e.target.value)} onBlur={handleRename} onKeyDown={(e) => e.key === 'Enter' && handleRename()} className="flex-1 bg-white border border-indigo-200 rounded px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  ) : (
                    <>
                      <button onClick={() => navigateToView('dataset', ds.id)} className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm text-left transition-all ${selectedDatasetId === ds.id && currentView === 'dataset' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-500 hover:bg-slate-50'}`}>
                        {deletingId === ds.id ? <Loader2 className="w-4 h-4 mr-3 animate-spin text-rose-500" /> : <FileText className={`w-4 h-4 mr-3 flex-shrink-0 ${selectedDatasetId === ds.id ? 'text-indigo-500' : 'text-slate-400'}`} />}
                        <span className={`truncate flex-1 ${deletingId === ds.id ? 'opacity-50 text-rose-500 italic' : ''}`}>{ds.name}</span>
                      </button>
                      <div className="absolute right-2 top-1.5 opacity-0 group-hover:opacity-100 flex items-center gap-1 z-10">
                        <button disabled={!!deletingId} onClick={(e) => { e.stopPropagation(); setEditingId(ds.id); setTempName(ds.name); }} className="p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-indigo-500 disabled:opacity-50"><Edit2 className="w-3 h-3" /></button>
                        <button disabled={!!deletingId} className="p-1 bg-white shadow-sm border rounded text-slate-400 hover:text-rose-500 disabled:opacity-50" onClick={(e) => { e.stopPropagation(); handleDeleteDataset(ds.id); }}>
                          {deletingId === ds.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 relative overflow-hidden">
        {currentView !== 'calculator' && (
          <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}><Menu className="w-6 h-6 text-slate-500" /></button>
              <h2 className="text-xl font-bold tracking-tight text-slate-800">{viewData.title}</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search leads across cloud..." 
                  className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-48 sm:w-64 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
              </div>
            </div>
          </header>
        )}

        <div className={`flex-1 overflow-auto custom-scrollbar ${currentView === 'calculator' ? 'h-full p-0 bg-[#0b0f0e]' : 'p-4 md:p-8'}`}>
          {currentView === 'dashboard' && searchTerm.trim() === '' ? (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 'all', label: 'Total Leads', val: globalStats.total, icon: Users, color: 'bg-white text-slate-900 border-slate-100', trend: 'Global Database' },
                  { id: 'accepted', label: 'Accepted', val: globalStats.accepted, icon: CheckCircle, color: 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 border-transparent cursor-pointer', trend: `${((globalStats.accepted/Math.max(globalStats.total, 1))*100).toFixed(1)}% Conversion` },
                  { id: 'wait', label: 'Waitlist', val: globalStats.wait, icon: PauseCircle, color: 'bg-amber-500 text-white shadow-lg shadow-amber-100 border-transparent cursor-pointer', trend: 'Nurture Stream' },
                  { id: 'pending', label: 'Pending Review', val: globalStats.pending, icon: Filter, color: 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 border-transparent', trend: 'Action Required' },
                ].map((s, i) => (
                  <div key={i} onClick={() => { if (s.id === 'accepted') navigateToView('accepted'); else if (s.id === 'wait') navigateToView('wait'); }} className={`${s.color} p-6 rounded-[2rem] border flex flex-col justify-between h-48 group relative overflow-hidden transition-all hover:scale-[1.02]`}>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl"><s.icon className="w-6 h-6" /></div>
                        { (s.id === 'accepted' || s.id === 'wait') && <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" /> }
                      </div>
                      <div>
                        <p className="text-4xl font-bold tracking-tight mb-1">{s.val.toLocaleString()}</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-widest text-[10px]">{s.label}</p>
                        <p className="text-[10px] mt-2 font-bold opacity-60">{s.trend}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-[400px]">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-500" /> Lead Pipeline</h3>
                  </div>
                  <div className="flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="value" radius={[12, 12, 0, 0]}>{chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 left-8"><h3 className="text-lg font-bold flex items-center gap-2"><PieChart className="w-5 h-5 text-emerald-500" /> Distribution</h3></div>
                  <div className="w-full h-full pt-12">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePieChart><Pie data={chartData} innerRadius={60} outerRadius={100} paddingAngle={8} dataKey="value">{chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Pie><Tooltip /></RePieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Cloud Datasets</h3>
                  <button onClick={fetchDatasets} className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:underline">
                    <TrendingUp className="w-3 h-3" /> Refresh Sync
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50/50">
                      <tr>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Dataset</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Records</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sync Status</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredDatasets.slice(0, 10).map(ds => (
                        <tr key={ds.id} className={`group hover:bg-slate-50 transition-colors ${deletingId === ds.id ? 'opacity-30 pointer-events-none bg-rose-50/30' : ''}`}>
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                {deletingId === ds.id ? <Loader2 className="w-5 h-5 animate-spin text-rose-500" /> : <FileText className="w-5 h-5" />}
                              </div>
                              <div>
                                <p className="font-semibold text-sm">{ds.name}</p>
                                <p className="text-[10px] text-slate-400">{ds.createdAt.toLocaleDateString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-sm font-medium text-slate-600">{ds.data.length} Leads</td>
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                              <span className="text-xs font-bold text-slate-500 uppercase">Cloud Live</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => navigateToView('dataset', ds.id)}
                                className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                              >
                                Manage
                              </button>
                              <button 
                                onClick={() => handleDeleteDataset(ds.id)}
                                className="p-2 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                                title="Delete Permanently"
                                disabled={!!deletingId}
                              >
                                {deletingId === ds.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : currentView === 'calculator' ? (
            <div className="h-full flex flex-col overflow-hidden animate-in fade-in duration-500">
              <div className="flex-1 flex overflow-hidden p-4 gap-4">
                <div className="w-72 flex flex-col gap-4 border-r border-[#222] pr-4">
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
                    <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1">
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
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
                    <h3 className="text-xs font-bold text-[#4fd1a5] flex items-center gap-1.5 uppercase tracking-widest opacity-80"><Zap className="w-3.5 h-3.5" /> Add-ons</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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

              <footer className="h-16 bg-gradient-to-r from-[#0f2027] via-[#1a3a4a] to-[#2c5364] flex justify-between items-center px-8 border-t border-[#333]">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Quotation Total</span>
                  <span className="text-[10px] text-gray-400 font-medium">Estimated build cost including tax</span>
                </div>
                <div className="text-4xl font-black text-[#4fd1a5] tracking-tighter">₹ {calcTotal.toLocaleString()}</div>
              </footer>
            </div>
          ) : (
            <div className="h-full flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="flex-1 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-auto flex-1 custom-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[300px] md:min-w-[800px]">
                    <thead className="sticky top-0 z-20 bg-slate-50 shadow-sm">
                      <tr>
                        <th className="sticky left-0 bg-slate-50 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-r border-slate-100">Status</th>
                        {viewData.headers.map((h, i) => (
                          <th key={i} className="hidden md:table-cell px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">{h}</th>
                        ))}
                        {currentView === 'dashboard' && searchTerm.trim() !== '' && (
                           <th className="hidden md:table-cell px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Source Dataset</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {viewData.rows.length > 0 ? (
                        viewData.rows.map((item, idx) => (
                          <tr key={idx} className={`group hover:bg-slate-50 transition-colors ${item.status === LeadStatus.ACCEPTED ? 'bg-emerald-50/20' : ''}`}>
                            <td className="sticky left-0 bg-white group-hover:bg-slate-50 px-6 py-4 border-r border-slate-100 z-10">
                              <div className="flex items-center gap-2">
                                <button onClick={() => handleStatusChange(item.dsId, item.idx, LeadStatus.ACCEPTED)} className={`p-2 rounded-lg transition-all ${item.status === LeadStatus.ACCEPTED ? 'bg-emerald-100 text-emerald-600 shadow-sm' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500'}`}><CheckCircle className="w-5 h-5" /></button>
                                <button onClick={() => handleStatusChange(item.dsId, item.idx, LeadStatus.WAIT)} className={`p-2 rounded-lg transition-all ${item.status === LeadStatus.WAIT ? 'bg-amber-100 text-amber-600 shadow-sm' : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500'}`}><PauseCircle className="w-5 h-5" /></button>
                                <button onClick={() => handleStatusChange(item.dsId, item.idx, LeadStatus.DECLINED)} className={`p-2 rounded-lg transition-all ${item.status === LeadStatus.DECLINED ? 'bg-rose-100 text-rose-600 shadow-sm' : 'text-slate-300 hover:bg-rose-50 hover:text-rose-500'}`}><XCircle className="w-5 h-5" /></button>
                              </div>
                            </td>
                            {viewData.headers.map((h, i) => {
                              const cellValue = item.row[h] || '';
                              const isEditable = h === 'Phone Number' || h === 'Contact Person' || h === 'phone' || h === 'mobile' || h === 'Name';
                              const isBusinessName = h === 'Business Name' || h === 'Company' || h === 'company' || h === 'Organization';
                              const isEditing = editingCell?.dsId === item.dsId && editingCell?.rowIndex === item.idx && editingCell?.column === h;
                              return (
                                <td key={i} className="hidden md:table-cell px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                                  {isEditing ? (
                                    <input autoFocus className="w-full bg-white border border-indigo-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-500" value={editingCell.value} onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })} onBlur={handleCellSave} onKeyDown={(e) => e.key === 'Enter' && handleCellSave()} />
                                  ) : (
                                    <div className="flex items-center gap-2 group/cell">
                                      <span onClick={() => isBusinessName && copyToClipboard(cellValue)} className={`truncate max-w-[200px] ${isBusinessName ? 'cursor-copy hover:text-indigo-600 hover:underline transition-colors' : ''}`}>{cellValue || '-'}</span>
                                      {isBusinessName && <button onClick={() => copyToClipboard(cellValue)} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all">{feedback?.text === "Copied to clipboard" && feedback.type === 'success' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}</button>}
                                      {isEditable && <button onClick={() => setEditingCell({ dsId: item.dsId, rowIndex: item.idx, column: h, value: cellValue })} className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-indigo-500 transition-all"><Edit2 className="w-3 h-3" /></button>}
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                            {currentView === 'dashboard' && searchTerm.trim() !== '' && (
                               <td className="hidden md:table-cell px-6 py-4 text-xs font-bold text-indigo-500 whitespace-nowrap italic">{item.dsName}</td>
                            )}
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan={viewData.headers.length + 2} className="py-20 text-center text-slate-400"><div className="flex flex-col items-center gap-2"><Filter className="w-8 h-8 opacity-20" /><p className="text-sm font-medium">No cloud records found matching your search.</p></div></td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {feedback && (
        <div className={`fixed bottom-8 right-8 ${feedback.type === 'success' ? 'bg-emerald-600' : feedback.type === 'error' ? 'bg-rose-600' : 'bg-slate-900'} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 z-[100]`}>
          <div className="p-1 bg-white/20 rounded-full">
            {feedback.type === 'success' ? <Check className="w-3 h-3 text-white" /> : feedback.type === 'error' ? <X className="w-3 h-3 text-white" /> : <TrendingUp className="w-3 h-3 text-white" />}
          </div>
          <p className="text-sm font-medium">{feedback.text}</p>
        </div>
      )}
    </div>
  );
}
