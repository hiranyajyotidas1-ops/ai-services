# MASTER VENTURE OPERATIONS LOG

**Repo:** hiranyajyotidas1-ops/ai-services
**Product:** Clevora — AI Services (content writing, logo/design, website build, data research, video scripts, AI consultation)
**Owner:** Hiranyajyoti Das
**Maintained by:** Growth & Venture Engine (scheduled automation)

---

## Run VENTURE-2026-10-18-01 — 2026-10-18 (IST)

**Run type:** Scheduled automated (Growth & Venture Engine)
**Timestamp:** 09:06 IST / 03:36 UTC

### Workstream Status

| Workstream | Status | Notes |
|---|---|---|
| Website (GitHub Pages) | DEGRADED | URL is reachable but currently serves a "This website has been retired." placeholder (index.html, 547 bytes). The Clevora landing page is no longer deployed. |
| Supabase (users) | BLOCKED | Project ocuyxgocmtucdckiqqeh query failed twice — "Connection terminated due to connection timeout". Project may be paused or unreachable. |
| Razorpay (payments) | BLOCKED | API returned "Authentication failed". Keys likely invalid, expired or rotated. |
| GitHub log | OK | This file was created in this run (it did not previously exist). Repo contains only index.html. |
| Lead research | OK | 10 new platforms identified (see Leads). |
| Proposals | OK | 3 draft proposals prepared (see Proposals). |

### Key Findings
- Repository `hiranyajyotidas1-ops/ai-services` contains **only** `index.html`, and that file is the retired placeholder. No service site, no assets, no prior log.
- The public GitHub Pages site therefore renders the "retired" page — the Clevora storefront is effectively offline.
- No revenue or signup signal could be retrieved: Razorpay unreachable (auth), Supabase unreachable (timeout). Status = unknown, not zero, until fixed.

### Leads — 10 Platforms to Offer AI Services (checked 2026-10-18)
1. **Upwork** — largest general marketplace; AI Integration & Automation demand up ~90%; freelancer fee 10-20% tiered. Best for scoped project work + converting to retainers.
2. **Fiverr** — productized fixed-price gigs; 20% flat; best for packaged content/design/AI offers and fast first reviews.
3. **Freelancer.com** — auction bidding; ~10% freelancer fee; high volume, high competition, price pressure.
4. **Toptal** — top-3% vetted network; enterprise clients; no freelancer fee; high entry bar.
5. **Contra** — 0% commission; portfolio-first discovery; needs your own lead-gen.
6. **BotPool** — AI-only marketplace; 10% flat; escrow; categories map to chatbots, automation, content, design, SEO.
7. **Zinn Hub** — 0% on first $500 then tiered (from 7%); three ways to sell (gigs, project bids, micro-tasks $5-$20); crypto payouts.
8. **AutoGineer** — automation-specialist marketplace (n8n / Make / Zapier); escrow; productized services + job board.
9. **REWORKIO** — AI & automation professionals; flat 10% fee; 160+ countries; AI-verified portfolios.
10. **PeoplePerHour / Guru / Lemon.io** — UK-EU clients (PPH), retainers (Guru, 9% max), startup dev work (Lemon.io).

*Watchlist (newer / agent-native marketplaces): ClawGig, Moltverr, pofft, Unjumble.*

### Proposals (DRAFTS — do not send without owner approval)

**Proposal A — Content Writing Retainer (SaaS or D2C brand)**
> Hi [Name], I help SaaS and D2C teams ship consistent, SEO-ready content without hiring in-house. For [Company] I'd deliver 8 long-form articles + 12 social posts per month, keyword-mapped to your funnel, in a 5-day turnaround, with 2 revisions each. Monthly retainer Rs 12,000 (or Rs 1,500/article standalone). First article free so you can judge quality. Shall I send a 1-page content plan for [niche]?

**Proposal B — Workflow Automation Build (e-commerce store / small agency)**
> Hi [Name], I automate the repetitive work that eats your week. Typical builds: order-confirmation + WhatsApp/email updates, lead capture to CRM with enrichment, and content repurposing (one blog to 5 social posts) using n8n/Make. Fixed price Rs 6,000-Rs 15,000 per workflow, delivered in 3-5 days with a handover video. Which of these would save you the most time right now?

**Proposal C — Landing Page Web Design (local business / startup launch)**
> Hi [Name], I build fast, mobile-first landing pages that convert — responsive design, SEO basics, contact/lead form, and Razorpay/UPI payment button where needed. Delivered in 48-72 hours for Rs 4,999 (single page) or Rs 12,000 (3-page site). I'll share a free wireframe mockup for [Company] first — no obligation. Want me to send it?

### Revenue Status
- Recorded revenue this run: Rs 0.
- Razorpay unreachable (auth failure) — no payment events retrievable.
- Supabase unreachable (DB timeout) — no new-signup events retrievable.

### Next Actions
1. [OWNER] Fix the website: the repo's `index.html` is the "retired" placeholder — restore the Clevora landing page, or confirm the retirement is intentional.
2. [OWNER] Rotate / verify Razorpay API credentials so payment checks work.
3. [OWNER] Check the Supabase project (ocuyxgocmtucdckiqqeh) status — it may be paused or the connection may be blocked.
4. [AUTO] Re-run all health checks next cycle; log deltas.
5. [AUTO] Once the site is restored, convert Proposal A and B into public gig listings on Fiverr + Upwork and a Contra profile.

---
