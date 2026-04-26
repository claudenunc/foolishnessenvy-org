-- FOOLISHNESS ENVY INC — site form tables
-- Created: 2026-04-26
-- Three tables capture form submissions; SMS opt-in metadata is recorded per-row
-- for Twilio A2P 10DLC compliance audit purposes.

-- ============================================================================
-- contact_submissions
-- ============================================================================
create table if not exists public.contact_submissions (
    id                 uuid primary key default gen_random_uuid(),
    created_at         timestamptz not null default now(),
    name               text not null,
    email              text not null,
    phone              text,
    message            text not null,
    sms_opt_in         boolean not null default false,
    opt_in_timestamp   timestamptz,
    opt_in_ip          text
);

create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_sms_opt_in_idx on public.contact_submissions (sms_opt_in) where sms_opt_in = true;

-- ============================================================================
-- newsletter_signups
-- ============================================================================
create table if not exists public.newsletter_signups (
    id                 uuid primary key default gen_random_uuid(),
    created_at         timestamptz not null default now(),
    email              text not null,
    phone              text,
    sms_opt_in         boolean not null default false,
    opt_in_timestamp   timestamptz,
    opt_in_ip          text
);

create unique index if not exists newsletter_signups_email_uniq on public.newsletter_signups (lower(email));
create index if not exists newsletter_signups_created_at_idx on public.newsletter_signups (created_at desc);
create index if not exists newsletter_signups_sms_opt_in_idx on public.newsletter_signups (sms_opt_in) where sms_opt_in = true;

-- ============================================================================
-- donations_intent
-- ============================================================================
create table if not exists public.donations_intent (
    id                 uuid primary key default gen_random_uuid(),
    created_at         timestamptz not null default now(),
    name               text not null,
    email              text not null,
    phone              text,
    amount             numeric(12, 2) not null check (amount > 0),
    sms_opt_in         boolean not null default false,
    opt_in_timestamp   timestamptz,
    opt_in_ip          text
);

create index if not exists donations_intent_created_at_idx on public.donations_intent (created_at desc);
create index if not exists donations_intent_sms_opt_in_idx on public.donations_intent (sms_opt_in) where sms_opt_in = true;

-- ============================================================================
-- Row Level Security
-- ============================================================================
-- Lock down all three tables. Inserts are allowed via the anon key from the
-- app's API routes (server-side); reads require the service role key.

alter table public.contact_submissions enable row level security;
alter table public.newsletter_signups   enable row level security;
alter table public.donations_intent     enable row level security;

-- Allow inserts only (no select/update/delete from anon)
create policy "anon insert contact"
    on public.contact_submissions for insert to anon with check (true);
create policy "anon insert newsletter"
    on public.newsletter_signups for insert to anon with check (true);
create policy "anon insert donate"
    on public.donations_intent for insert to anon with check (true);

-- Comments
comment on table public.contact_submissions is 'Contact form submissions. SMS opt-in metadata captured for A2P 10DLC audit.';
comment on table public.newsletter_signups   is 'Newsletter sign-ups (with optional SMS opt-in).';
comment on table public.donations_intent     is 'Donation-intent submissions before payment processing is wired.';
