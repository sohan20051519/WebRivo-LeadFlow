-- Create a new table for tracking individual payment records
CREATE TABLE IF NOT EXISTS payment_records (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    proof_url TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for payment_records
ALTER TABLE payment_records ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all access (internal tool)
CREATE POLICY "Allow Full Access" ON payment_records
    FOR ALL
    USING (true)
    WITH CHECK (true);


-- Add addon_links column to clients table
ALTER TABLE clients ADD COLUMN IF NOT EXISTS addon_links JSONB DEFAULT '[]'::jsonb;
