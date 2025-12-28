-- Create a new table for Clients/Projects
create table public.clients (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Core Identity (Copied from Lead)
  business_name text not null,
  contact_name text,
  email text,
  phone text,
  
  -- Link back to original lead (to avoid duplicates)
  source_dataset_id text,
  source_row_index integer,
  
  -- Project Status
  status text default 'onboarding', -- 'onboarding', 'in_progress', 'review', 'live', 'maintenance'
  
  -- Package & Financials
  selected_package text default 'basic',
  package_price numeric default 0,
  core_upgrades text[] default '{}',
  add_ons text[] default '{}',
  domains text[] default '{}',
  custom_items jsonb default '[]', -- Store array of {name, price}
  
  -- Payment Tracking
  payment_status text default 'unpaid', -- 'unpaid', 'partial', 'paid'
  amount_paid numeric default 0,
  total_deal_value numeric default 0,

  -- Technical Links
  github_repo text,
  live_url text,
  admin_url text,
  design_link text,
  
  -- Notes
  internal_notes text
);

-- Enable RLS (Optional depending on your setup, but good practice)
alter table public.clients enable row level security;

-- Create policy to allow all access (since we are using anon key for this MVP)
create policy "Allow all access" on public.clients for all using (true) with check (true);
