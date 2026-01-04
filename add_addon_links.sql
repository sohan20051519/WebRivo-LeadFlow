-- Add addon_links column to clients table
ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS addon_links JSONB DEFAULT '[]'::jsonb;
