-- Supabase schema for Tatiana Blog

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  content text,
  cover_url text,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table posts enable row level security;

-- Allow public read (blog visitors)
create policy "Public can read posts"
on posts for select
using (true);

-- Allow authenticated users to insert
create policy "Authenticated can insert posts"
on posts for insert
with check (auth.role() = 'authenticated');
