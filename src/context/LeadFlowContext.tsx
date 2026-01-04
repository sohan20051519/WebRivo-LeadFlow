"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { Dataset, LeadRow, LeadStatus, Client, ClientUpdatePayload } from '@/types';

interface Feedback {
    text: string;
    type: 'success' | 'info' | 'error';
}

interface LeadFlowContextType {
    datasets: Dataset[];  // All datasets including hidden preserved ones (for Accepted/Waitlist pages)
    visibleDatasets: Dataset[];  // Only datasets visible in sidebar/dashboard (excludes preserved)
    loading: boolean;
    refreshDatasets: () => Promise<void>;

    // Global Clients State (for Dashboard)
    clients: Client[];
    refreshClients: () => Promise<void>;

    // Upload
    filesToUpload: File[];
    addFilesToUpload: (files: File[]) => void;
    removeFileFromUpload: (index: number) => void;
    clearUploadQueue: () => void;
    uploading: boolean;
    processUploadQueue: () => Promise<void>;

    // Operations
    deleteDataset: (id: string) => Promise<boolean>;
    renameDataset: (id: string, newName: string) => Promise<void>;
    updateLeadStatus: (datasetId: string, rowIndex: number, status: LeadStatus) => Promise<void>;
    updateCell: (datasetId: string, rowIndex: number, column: string, value: string) => Promise<void>;

    // UI State
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    feedback: Feedback | null;
    showFeedback: (text: string, type?: 'success' | 'info' | 'error') => void;
    // Client Operations
    getClient: (id: string) => Promise<Client | null>;
    getMockClientBySource: (datasetId: string, rowIndex: number) => Promise<Client | null>;
    createClient: (client: Omit<Client, 'id' | 'created_at'>) => Promise<string | null>;
    updateClient: (id: string, updates: ClientUpdatePayload) => Promise<void>;
    deleteClient: (id: string) => Promise<boolean>;
}

const LeadFlowContext = createContext<LeadFlowContextType | undefined>(undefined);

export function LeadFlowProvider({ children }: { children: ReactNode }) {
    const [datasets, setDatasets] = useState<Dataset[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
    const [feedback, setFeedback] = useState<Feedback | null>(null);

    const showFeedback = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
        setFeedback({ text, type });
        setTimeout(() => setFeedback(null), 3000);
    };

    // ... (existing fetch datasets)

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

    const fetchAllClients = async () => {
        try {
            const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            if (data) setClients(data as Client[]);
        } catch (e: any) {
            console.error("Error fetching clients:", e.message);
        }
    };

    useEffect(() => {
        fetchDatasets();
        fetchAllClients();
    }, []);

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

            // Build index of existing data for duplicate detection
            const existingPhones = new Set<string>();
            const existingNames = new Set<string>();

            datasets.forEach(ds => {
                ds.data.forEach(row => {
                    const phone = row['Phone Number'] || row['Phone'] || row['mobile'] || row['phone'];
                    if (phone) existingPhones.add(String(phone).trim().toLowerCase());

                    const name = row['Business Name'] || row['Company'] || row['Organization'] || row['company'];
                    if (name) existingNames.add(String(name).trim().toLowerCase());
                });
            });

            for (const file of filesToUpload) {
                const text = await file.text();
                const { headers, data } = parseCSV(text);

                // Check for duplicates in the new data
                data.forEach(row => {
                    // Check Phone
                    const phoneKey = Object.keys(row).find(k => ['Phone Number', 'Phone', 'mobile', 'phone'].includes(k));
                    if (phoneKey) {
                        const val = String(row[phoneKey]).trim();
                        // Check if it exists in DB (ignore if it already has the warning from a previous run, though unlikely on new upload)
                        if (val && existingPhones.has(val.toLowerCase().replace(' ⚠️', ''))) {
                            row[phoneKey] = val + " ⚠️";
                        }
                    }

                    // Check Name
                    const nameKey = Object.keys(row).find(k => ['Business Name', 'Company', 'Organization', 'company'].includes(k));
                    if (nameKey) {
                        const val = String(row[nameKey]).trim();
                        if (val && existingNames.has(val.toLowerCase().replace(' ⚠️', ''))) {
                            row[nameKey] = val + " ⚠️";
                        }
                    }
                });

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

            const { error } = await supabase.from('datasets').insert([payload]);
            if (error) throw new Error(error.message);

            await fetchDatasets();
            setFilesToUpload([]);
            showFeedback("Datasets merged and synced to cloud database", 'success');
        } catch (e: any) {
            console.error("Upload failed", e.message || e);
            showFeedback(`Upload failed: ${e.message}`, 'error');
        } finally {
            setUploading(false);
        }
    };

    const deleteDataset = async (datasetId: string): Promise<boolean> => {
        try {
            const ds = datasets.find(d => d.id === datasetId);
            if (!ds) {
                showFeedback("Dataset not found", 'error');
                return false;
            }

            // Check for leads that need to be preserved (ACCEPTED or WAIT status)
            const preservedLeads: { row: any, status: LeadStatus }[] = [];
            ds.data.forEach((row, idx) => {
                const status = ds.statuses[idx];
                if (status === LeadStatus.ACCEPTED || status === LeadStatus.WAIT) {
                    preservedLeads.push({ row, status });
                }
            });

            // If there are leads to preserve, create a new dataset for them
            if (preservedLeads.length > 0) {
                const preservedData = preservedLeads.map(l => l.row);
                const preservedStatuses: { [key: number]: LeadStatus } = {};
                preservedLeads.forEach((l, idx) => {
                    preservedStatuses[idx] = l.status;
                });

                const payload = {
                    name: `__preserved__${ds.name}`,
                    headers: ds.headers,
                    data: preservedData,
                    statuses: preservedStatuses,
                };

                const { error: insertError } = await supabase.from('datasets').insert([payload]);
                if (insertError) {
                    console.error("Failed to preserve leads:", insertError.message);
                    showFeedback(`Failed to preserve ${preservedLeads.length} leads. Delete cancelled.`, 'error');
                    return false;
                }

                showFeedback(`Preserved ${preservedLeads.length} accepted/waitlisted leads`, 'info');
            }

            // Now delete the original dataset
            const { error } = await supabase
                .from('datasets')
                .delete({ count: 'exact' })
                .eq('id', datasetId);

            if (error) throw new Error(error.message);

            await fetchDatasets(); // Refresh to show preserved dataset
            showFeedback("Dataset removed. Accepted/waitlisted leads preserved.", 'success');
            return true;
        } catch (e: any) {
            console.error("Delete failed:", e.message || e);
            showFeedback(`Deletion Error: ${e.message}`, 'error');
            fetchDatasets();
            return false;
        }
    };

    const renameDataset = async (id: string, newName: string) => {
        try {
            const { error } = await supabase.from('datasets').update({ name: newName }).eq('id', id);
            if (error) throw new Error(error.message);
            setDatasets(prev => prev.map(d => d.id === id ? { ...d, name: newName } : d));
            showFeedback("Dataset renamed successfully", 'info');
        } catch (e: any) {
            console.error("Rename failed", e.message || e);
            showFeedback(`Rename failed: ${e.message}`, 'error');
        }
    };

    const updateLeadStatus = async (datasetId: string, rowIndex: number, status: LeadStatus) => {
        const ds = datasets.find(d => d.id === datasetId);
        if (!ds) return;
        const newStatuses = { ...ds.statuses, [rowIndex]: status };
        setDatasets(prev => prev.map(d => d.id === datasetId ? { ...d, statuses: newStatuses } : d));

        try {
            const { error } = await supabase.from('datasets').update({ statuses: newStatuses }).eq('id', datasetId);
            if (error) throw new Error(error.message);
        } catch (e: any) {
            console.error("Status update failed", e.message || e);
            fetchDatasets();
        }
    };

    const updateCell = async (dsId: string, rowIndex: number, column: string, value: string) => {
        const ds = datasets.find(d => d.id === dsId);
        if (!ds) return;
        const newData = [...ds.data];
        newData[rowIndex] = { ...newData[rowIndex], [column]: value };
        setDatasets(prev => prev.map(d => d.id === dsId ? { ...d, data: newData } : d));

        try {
            const { error } = await supabase.from('datasets').update({ data: newData }).eq('id', dsId);
            if (error) throw new Error(error.message);
        } catch (err: any) {
            console.error("Cell update failed", err.message);
            fetchDatasets();
        }
    };

    // Client Operations
    const getClient = async (id: string): Promise<Client | null> => {
        try {
            const { data, error } = await supabase.from('clients').select('*').eq('id', id).single();
            if (error) throw error;
            return data as Client;
        } catch (e) {
            console.error("Error fetching client", e);
            return null;
        }
    };

    const getMockClientBySource = async (datasetId: string, rowIndex: number): Promise<Client | null> => {
        try {
            const { data, error } = await supabase.from('clients').select('*')
                .eq('source_dataset_id', datasetId)
                .eq('source_row_index', rowIndex)
                .maybeSingle();

            if (error) throw error;
            return data as Client;
        } catch (e) {
            console.error("Error checking client existence", e);
            return null;
        }
    }

    const createClient = async (clientData: Omit<Client, 'id' | 'created_at'>): Promise<string | null> => {
        try {
            const { data, error } = await supabase.from('clients').insert([clientData]).select().single();
            if (error) throw error;
            showFeedback("Client profile created successfully", 'success');
            setClients(prev => [data as Client, ...prev]);
            return data.id;
        } catch (e: any) {
            console.error("Create client failed", e.message);
            showFeedback(`Failed to create client: ${e.message}`, 'error');
            return null;
        }
    }

    const updateClient = async (id: string, updates: ClientUpdatePayload) => {
        try {
            const { error } = await supabase.from('clients').update(updates).eq('id', id);
            if (error) throw error;
            setClients(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
            showFeedback("Client updated", 'success');
        } catch (e: any) {
            console.error("Update client failed", e.message);
            showFeedback("Failed to update client", 'error');
        }
    }

    const deleteClient = async (id: string): Promise<boolean> => {
        try {
            const { error } = await supabase.from('clients').delete().eq('id', id);
            if (error) throw error;
            setClients(prev => prev.filter(c => c.id !== id));
            showFeedback("Client removed successfully", 'success');
            return true;
        } catch (e: any) {
            console.error("Delete client failed", e.message);
            showFeedback("Failed to delete client", 'error');
            return false;
        }
    }

    return (
        <LeadFlowContext.Provider
            value={{
                datasets,
                visibleDatasets: datasets.filter(d => !d.name.startsWith('__preserved__')),
                loading,
                refreshDatasets: fetchDatasets,

                clients,
                refreshClients: fetchAllClients,

                filesToUpload,
                addFilesToUpload: (files) => setFilesToUpload(prev => [...prev, ...files]),
                removeFileFromUpload: (index) => setFilesToUpload(prev => prev.filter((_, i) => i !== index)),
                clearUploadQueue: () => setFilesToUpload([]),
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
            }}
        >
            {children}
        </LeadFlowContext.Provider>
    );
}

export function useLeadFlow() {
    const context = useContext(LeadFlowContext);
    if (context === undefined) {
        throw new Error('useLeadFlow must be used within a LeadFlowProvider');
    }
    return context;
}
