-- Add assigned_user column to datasets if it doesn't exist
ALTER TABLE datasets ADD COLUMN IF NOT EXISTS assigned_user TEXT;

-- Add assigned_user column to clients if it doesn't exist
ALTER TABLE clients ADD COLUMN IF NOT EXISTS assigned_user TEXT;

-- Backfill datasets: Extract user from [user] prefix in name
-- Regex captures content inside first []
UPDATE datasets
SET assigned_user = substring(name from '^\[(.*?)\]')
WHERE assigned_user IS NULL AND name ~ '^\[(.*?)\]';

-- Backfill clients: Inherit from source dataset
UPDATE clients c
SET assigned_user = d.assigned_user
FROM datasets d
WHERE c.source_dataset_id::uuid = d.id
AND c.assigned_user IS NULL;
