import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Fallback hardcoded credentials if DB fails or is empty
const DEFAULT_PASSWORDS: { [key: string]: { username: string, role: string } } = {
    '151910': { username: 'admin', role: 'admin' },
    '151920': { username: 'sahana', role: 'user' },
    '151930': { username: 'himesh', role: 'user' },
    '151940': { username: 'akash', role: 'user' }
};

// Initialize Supabase Client
const supabaseUrl = 'https://otfrxwmjefcgooqwxdwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJ4d21qZWZjZ29vcXd4ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NDIsImV4cCI6MjA3MTExMTk0Mn0.V7dfPN0E-7vWppS1pOxMc3umNV9_6K6KeE-EwpTZPso';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SYSTEM_USERS_DATASET = '__system_users__';

export async function POST(request: NextRequest) {
    try {
        const { passcode } = await request.json();

        // 1. Try to fetch from Supabase Dataset
        try {
            const { data: datasets, error } = await supabase
                .from('datasets')
                .select('*')
                .eq('name', SYSTEM_USERS_DATASET)
                .single();

            if (!error && datasets && datasets.data) {
                // Dataset exists, look for password
                const userRow = datasets.data.find((row: any) =>
                    (row.password && row.password === passcode) ||
                    (row['1'] && row['1'] === passcode)
                );

                if (userRow) {
                    const user = userRow.username || userRow['0'];
                    // We assume admin if role is admin
                    const role = userRow.role || userRow['2'] || 'user';

                    // The client expects { user: string }, but we might need to handle roles better in future.
                    // For now, mapping 'admin' username to 'Admin' helps the frontend logic if needed,
                    // but the frontend logic `currentUser === 'admin'` implies lowercase usually?
                    // Previous logic returned 'sahana' (lowercase).
                    // Wait, previous logic `PASSWORDS` values were 'admin', 'sahana', etc.
                    // And sidebar checked `currentUser === 'admin'`.
                    // So we should return username in lowercase.

                    // However, let's normalize.
                    return NextResponse.json({ success: true, user: user.toLowerCase() });
                }
            }
        } catch (dbError) {
            console.error("Database auth check failed, falling back to defaults", dbError);
        }

        // 2. Fallback to hardcoded
        const defaultUser = DEFAULT_PASSWORDS[passcode];
        if (defaultUser) {
            return NextResponse.json({ success: true, user: defaultUser.username });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid passcode' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
