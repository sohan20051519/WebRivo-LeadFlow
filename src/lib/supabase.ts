import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://otfrxwmjefcgooqwxdwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJ4d21qZWZjZ29vcXd4ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NDIsImV4cCI6MjA3MTExMTk0Mn0.V7dfPN0E-7vWppS1pOxMc3umNV9_6K6KeE-EwpTZPso';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
