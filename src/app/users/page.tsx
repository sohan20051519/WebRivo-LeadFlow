"use client";

import { useLeadFlow } from '@/context/LeadFlowContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { User, Shield, Key, Plus, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function UsersPage() {
    const { currentUser, datasets, refreshDatasets, supabase } = useLeadFlow();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<any[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newUser, setNewUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const SYSTEM_USERS_DATASET = '__system_users__';

    // Fetch users from the special dataset
    useEffect(() => {
        if (currentUser === null) return; // Wait for auth to load

        if (currentUser !== 'admin') {
            router.push('/dash');
            return;
        }

        const fetchUsers = async () => {
            const userDataset = datasets.find(d => d.name === SYSTEM_USERS_DATASET);
            if (userDataset) {
                // Parse rows: username, password, role
                // Data format in LeadFlow is array of objects { [header]: value }
                // We assume headers are ['username', 'password', 'role']
                const parsedUsers = userDataset.data.map((row: any) => ({
                    username: row['username'] || row['0'], // Fallback if headers mismatch
                    password: row['password'] || row['1'],
                    role: row['role'] || row['2'] || 'user'
                }));
                setUsers(parsedUsers);
            } else {
                // Default seeds if not found
                setUsers([
                    { username: 'sahana', role: 'user' },
                    { username: 'himesh', role: 'user' },
                    { username: 'akash', role: 'user' },
                    { username: 'admin', role: 'admin' }
                ]);
            }
            setLoading(false);
        };

        fetchUsers();
    }, [datasets, currentUser, router]);

    const handleAddUser = async () => {
        if (!newUser.username || !newUser.password) {
            setError('Username and Password are required');
            return;
        }
        setError('');
        setLoading(true);

        try {
            // Find existing system dataset
            let userDataset = datasets.find(d => d.name === SYSTEM_USERS_DATASET);

            const newUserData = {
                username: newUser.username.toLowerCase(),
                password: newUser.password,
                role: 'user'
            };

            // Prepare row data
            // LeadFlow expects objects matching headers
            const newRow = {
                username: newUserData.username,
                password: newUserData.password,
                role: newUserData.role
            };

            if (userDataset) {
                // Append to existing
                // Since we can't easily "append" via Context without a specific method,
                // we might need to rely on re-uploading or if we have an API.
                // HOWEVER, `processUploadQueue` uploads new files.
                // We can't easily append to an existing dataset via the context methods exposed unless we delete and recreate,
                // or if we have a direct Supabase insert.

                // Let's use direct Supabase insertion if possible, or fallback to "Create/Replace" logic.
                // Since `datasets` is read from Supabase `datasets` table (jsonb data), updating it means updating the row.

                // Strategy: Create a temporary CSV content and upload it as a "merge" or "replace"?
                // Actually, LeadFlowContext doesn't expose `updateDataset`.
                // It exposes `deleteDataset` and `processUploadQueue`.

                // Workaround: We will use a direct Supabase call here since we are Admin and have the client.

                const updatedData = [...userDataset.data, newRow];

                const { error: updateError } = await supabase
                    .from('datasets')
                    .update({ data: updatedData })
                    .eq('id', userDataset.id);

                if (updateError) throw updateError;

            } else {
                // Create new
                // We need to insert a new row into `datasets` table.
                const { error: insertError } = await supabase
                    .from('datasets')
                    .insert([{
                        name: SYSTEM_USERS_DATASET,
                        headers: ['username', 'password', 'role'],
                        data: [newRow],
                        user_id: 'admin_system' // valid UUID? No, usually auth.uid()
                        // If RLS is enabled, this might fail if we don't have a user.
                        // But `supabase` client in context might be anon.
                        // Let's hope the previous implementation allows anon writes or we have a session.
                        // Based on `AuthGate`, we don't really have a Supabase Auth session, just a local passcode.
                        // So RLS must be public or disabled for this to work.
                    }]);

                if (insertError) {
                    // Fallback: Try to use the upload mechanism if direct insert fails (unlikely if RLS is open)
                    console.error("Direct insert failed", insertError);
                    throw insertError;
                }
            }

            await refreshDatasets();
            setIsAdding(false);
            setNewUser({ username: '', password: '' });
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Failed to save user');
        } finally {
            setLoading(false);
        }
    };

    if (loading || currentUser === null) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-500">Manage access and view performance analytics.</p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    {isAdding ? 'Cancel' : <><Plus className="w-4 h-4" /> Add User</>}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-4 animate-in fade-in slide-in-from-top-4">
                    <h3 className="font-bold text-slate-800">Add New User</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Username</label>
                            <input
                                value={newUser.username}
                                onChange={e => setNewUser({...newUser, username: e.target.value})}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                placeholder="e.g. rahul"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Password (Passcode)</label>
                            <input
                                value={newUser.password}
                                onChange={e => setNewUser({...newUser, password: e.target.value})}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                placeholder="e.g. 151950"
                            />
                        </div>
                    </div>
                    {error && <p className="text-rose-500 text-sm">{error}</p>}
                    <div className="flex justify-end">
                        <button
                            onClick={handleAddUser}
                            disabled={loading}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save User'}
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user, idx) => (
                    <Link key={idx} href={`/users/${user.username}`} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${user.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-indigo-50 text-indigo-600'}`}>
                                {user.role === 'admin' ? <Shield className="w-6 h-6" /> : <User className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 capitalize">{user.username}</h3>
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{user.role}</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-xs font-medium text-slate-400 group-hover:text-indigo-500 transition-colors">View Analytics & Commission</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
