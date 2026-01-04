-- 1. Add missing columns to clients table (if you haven't run this yet)
ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS manual_payment_link text,
ADD COLUMN IF NOT EXISTS payment_completed_link text;

-- 2. Create the 'payment-proofs' storage bucket for PDF uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-proofs', 'payment-proofs', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Enable RLS policies for the storage bucket to allow uploads
-- Allow public read access
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'payment-proofs' );

-- Allow uploads (insert) for everyone (since this is an internal tool using anon key)
create policy "Allow Uploads"
on storage.objects for insert
with check ( bucket_id = 'payment-proofs' );

-- Allow updates
create policy "Allow Updates"
on storage.objects for update
using ( bucket_id = 'payment-proofs' );

-- Allow deletes
create policy "Allow Deletes"
on storage.objects for delete
using ( bucket_id = 'payment-proofs' );
