# foolishnessenvy.org

Public website for **FOOLISHNESS ENVY INC** — a Kentucky non-profit corporation, 501(c)(3) status pending.
Mailing address: PO Box 231, Hardin, KY 42048.

Built to be:
- mobile-first, dark-only, glassmorphism + wet-neon aesthetic
- production-deployable to Vercel
- fully compliant with Twilio A2P 10DLC SMS messaging requirements

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- Supabase (Postgres) for form submissions
- Vercel for hosting

## Pages

| Path | Purpose |
|---|---|
| `/` | Hero, three program pillars, donation CTA, newsletter signup |
| `/about` | Founding story and the philosophy of FoolishnessEnvy |
| `/mission` | Mission, vision, values, board of directors |
| `/programs` | AI Education, Lighthouse, Heaven's Infrastructure |
| `/donate` | Donation intent form (501(c)(3) pending disclaimer) |
| `/contact` | Contact form |
| `/privacy` | **Privacy Policy** (Twilio A2P 10DLC compliant) |
| `/terms` | Terms of Service |
| `/sms-terms` | **SMS Terms & Conditions** (Twilio A2P 10DLC compliant) |
| `/opt-in` | SMS opt-in process, frequency, STOP/HELP keywords |

## Twilio A2P 10DLC compliance — what this site covers

The four mandatory pieces are in place:

1. **Privacy Policy** (`/privacy`) includes the Twilio-required clauses:
   - "We do not sell or share personal information with third parties for their marketing purposes."
   - "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All categories of information are excluded from third-party sharing."
   - SMS data handling, retention, opt-out rights, contact for privacy questions.
2. **SMS Terms** (`/sms-terms`) lists program name, description, message frequency ("Up to 4 messages per month"), "Message and data rates may apply", HELP / STOP keywords, supported-carriers disclaimer, contact.
3. **Opt-in checkbox** (`<OptInCheckbox />`) is unchecked by default, has the full required disclosure text, and links to `/sms-terms` and `/privacy`. Server records timestamp and IP per submission for the audit trail.
4. **Footer on every page** links to Privacy, Terms, and SMS Terms.

## Setup

```bash
git clone https://github.com/claudenunc/foolishnessenvy-org
cd foolishnessenvy-org
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

App runs at `http://localhost:3000`.

## Database setup (Supabase)

Project: `liclnxsbjjdkaxzdxmnb.supabase.co` (existing Supabase project).

Apply the migration in `supabase/migrations/20260426000001_init_forms.sql` via:

- **Supabase dashboard**: SQL Editor → paste the file's contents → Run.
- **Supabase CLI**: `supabase db push` (if you've linked the project).

The migration creates three tables (`contact_submissions`, `newsletter_signups`, `donations_intent`),
indexes for query speed, and Row Level Security policies that allow anonymous inserts (from the API
routes) but block reads from the anon key.

## Deploy to Vercel

1. Push this repo to GitHub: `claudenunc/foolishnessenvy-org`
2. Vercel → "New Project" → import this repo.
3. Set environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL=https://liclnxsbjjdkaxzdxmnb.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key>`
4. Deploy. First build typically takes ~90 seconds.
5. Add custom domain `foolishnessenvy.org` in the Vercel project settings; update DNS at Wix to point to Vercel (Wix supports custom DNS records — A record to Vercel's IP, or CNAME if Vercel's "external nameservers" path is used).

## Brand tokens (for future iterations)

- Background: `#0A0A0A` (Void Black) — always dark, no light mode
- Neon palette (Tailwind classes `text-neon-*`, `border-neon-*`, glow utilities in `globals.css`):
  - `--neon-blue:   #00D4FF`
  - `--neon-pink:   #FF2D7B`
  - `--neon-green:  #39FF14`
  - `--neon-purple: #BF40FF` (Heaven's Infrastructure sections only)
- Display font: **Cinzel** (Google Fonts) as the open-source substitute for "Great Victorian" (Wix-licensed). To swap to the actual Great Victorian font, drop the `.woff2` files into `public/fonts/` and update the `--font-display` declaration in `app/globals.css`.
- Body font: **Space Grotesk** with **Inter** fallback (also via Google Fonts).
- Code font: **JetBrains Mono**.

## What is intentionally NOT in this codebase

- Any reference to the founder's home address (only the PO Box is public-facing).
- Any SSN, EIN, or banking information (those go in the IRS 1023-EZ application, not on the public site).
- Any claim that donations are currently tax-deductible (501(c)(3) is pending; site is explicit about this).
- Any pre-checked SMS opt-in box (Twilio's automatic rejection criterion).
- A light mode toggle.
- Fake testimonials or fabricated program statistics.

## Files of interest

- `app/layout.tsx` — root layout, header, footer, metadata
- `app/globals.css` — neon glow utilities, glassmorphism cards, font loading
- `tailwind.config.ts` — brand tokens (neon palette, glow box-shadows)
- `components/OptInCheckbox.tsx` — Twilio-compliant SMS consent (always unchecked)
- `components/{Contact,Donate,Newsletter}Form.tsx` — three forms, all use `OptInCheckbox`
- `lib/supabase.ts` — client + IP/opt-in payload helpers
- `app/api/{contact,newsletter,donate-intent}/route.ts` — Next.js Route Handlers writing to Supabase
- `supabase/migrations/20260426000001_init_forms.sql` — three tables, RLS, indexes

## License

Source code MIT. Brand assets and copy © FOOLISHNESS ENVY INC.
