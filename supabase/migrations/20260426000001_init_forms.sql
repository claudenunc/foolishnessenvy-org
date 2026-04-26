-- FOOLISHNESS ENVY INC — site form tables
-- Created: 2026-04-26
-- Idempotent: safe to run on a fresh DB OR on top of an existing schema where
-- some/all of these tables already exist (for example, on a shared Supabase
-- project that previously held a different schema for similarly-named tables).
-- Never drops data.

-- ============================================================
-- contact_submissions
-- ============================================================
create table if not exists public.contact_submissions (id uuid primary key default gen_random_uuid());
alter table public.contact_submissions add column if not exists created_at        timestamptz not null default now();
alter table public.contact_submissions add column if not exists name              text;
alter table public.contact_submissions add column if not exists email             text;
alter table public.contact_submissions add column if not exists phone             text;
alter table public.contact_submissions add column if not exists message           text;
alter table public.contact_submissions add column if not exists sms_opt_in        boolean not null default false;
alter table public.contact_submissions add column if not exists opt_in_timestamp  timestamptz;
alter table public.contact_submissions add column if not exists opt_in_ip         text;

-- ============================================================
-- newsletter_signups
-- ============================================================
create table if not exists public.newsletter_signups (id uuid primary key default gen_random_uuid());
alter table public.newsletter_signups add column if not exists created_at        timestamptz not null default now();
alter table public.newsletter_signups add column if not exists email             text;
alter table public.newsletter_signups add column if not exists phone             text;
alter table public.newsletter_signups add column if not exists sms_opt_in        boolean not null default false;
alter table public.newsletter_signups add column if not exists opt_in_timestamp  timestamptz;
alter table public.newsletter_signups add column if not exists opt_in_ip         text;

-- ============================================================
-- donations_intent
-- ============================================================
create table if not exists public.donations_intent (id uuid primary key default gen_random_uuid());
alter table public.donations_intent add column if not exists created_at        timestamptz not null default now();
alter table public.donations_intent add column if not exists name              text;
alter table public.donations_intent add column if not exists email             text;
alter table public.donations_intent add column if not exists phone             text;
alter table public.donations_intent add column if not exists amount            numeric(12, 2);
alter table public.donations_intent add column if not exists sms_opt_in        boolean not null default false;
alter table public.donations_intent add column if not exists opt_in_timestamp  timestamptz;
alter table public.donations_intent add column if not exists opt_in_ip         text;

-- ============================================================
-- Indexes (now safe — every column referenced exists)
-- ============================================================
create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_sms_opt_in_idx on public.contact_submissions (sms_opt_in) where sms_opt_in = true;

create unique index if not exists newsletter_signups_email_uniq on public.newsletter_signups (lower(email));
create index if not exists newsletter_signups_created_at_idx on public.newsletter_signups (created_at desc);
create index if not exists newsletter_signups_sms_opt_in_idx on public.newsletter_signups (sms_opt_in) where sms_opt_in = true;

create index if not exists donations_intent_created_at_idx on public.donations_intent (created_at desc);
create index if not exists donations_intent_sms_opt_in_idx on public.donations_intent (sms_opt_in) where sms_opt_in = true;

-- ============================================================
-- Row Level Security — allow anon inserts, block reads from anon
-- ============================================================
alter table public.contact_submissions enable row level security;
alter table public.newsletter_signups   enable row level security;
alter table public.donations_intent     enable row level security;

drop policy if exists "anon insert contact" on public.contact_submissions;
drop policy if exists "anon insert newsletter" on public.newsletter_signups;
drop policy if exists "anon insert donate" on public.donations_intent;

create policy "anon insert contact"
    on public.contact_submissions for insert to anon with check (true);
create policy "anon insert newsletter"
    on public.newsletter_signups for insert to anon with check (true);
create policy "anon insert donate"
    on public.donations_intent for insert to anon with check (true);

-- ============================================================
-- Comments
-- ============================================================
comment on table public.contact_submissions is 'Contact form submissions. SMS opt-in metadata captured for A2P 10DLC audit.';
comment on table public.newsletter_signups   is 'Newsletter sign-ups (with optional SMS opt-in).';
comment on table public.donations_intent     is 'Donation-intent submissions before payment processing is wired.';
