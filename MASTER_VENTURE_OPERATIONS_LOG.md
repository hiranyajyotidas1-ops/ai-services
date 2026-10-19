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

## Run VENTURE-2026-10-19-01 — 2026-10-19 (IST)

**Run type:** Scheduled automated (Growth & Venture Engine)
**Timestamp:** 09:06 IST / 03:36 UTC

### Workstream Status

| Workstream | Status | Notes |
|---|---|---|
| Website (GitHub Pages) | OK / RECOVERED | https://hiranyajyotidas1-ops.github.io/ai-services/ now serves the full Clevora landing page (hero, 6 services, 4-step flow, 3 pricing tiers, testimonials, FAQ). Delta vs 2026-10-18 (which served the "retired" placeholder). CAVEAT: page shows hardcoded trust claims — "2,847 online", "424+ AI APIs", "195 countries", 3 named testimonials — confirm these are real/owner-approved before they drive paid traffic. |
| Supabase (users) | BLOCKED (root cause found) | Query still fails: "Connection terminated due to connection timeout". Project metadata now shows status = **INACTIVE** (project "appmint-477290", region us-east-1, created 2026-08-01). Root cause is the paused/inactive project, not the network. No signup data retrievable. |
| Razorpay (payments) | BLOCKED | API returned "Authentication failed" again (same as 2026-10-18). Keys invalid, expired or rotated. No payment events retrievable. |
| GitHub log | OK | This file read and appended; committed in this run. |
| Lead research | OK | 10 NEW platforms identified (see Leads). |
| Proposals | OK | 3 fresh draft proposals prepared (see Proposals). |

### Key Findings
- **Website recovered** — the Clevora storefront is live again and renders correctly. This closes the top action from the 2026-10-18 run.
- **Supabase is INACTIVE** — confirmed via project metadata. The DB timeout is a consequence of the paused project. Owner must reactivate it before any signup tracking works.
- **Razorpay auth still failing** — revenue signal remains unknown (not zero) until credentials are fixed.
- Repo still contains only `index.html` (+ this log); no separate assets/analytics files were added.

### Leads — 10 NEW Platforms to Offer AI Services (checked 2026-10-19)
1. **Taskwyre** (taskwyre.com) — AI-native freelance marketplace; mandatory "AI Disclosure Score" and tool-stack visibility; 0% commission until $500, then tiered 15%→7%. Best for positioning AI-augmented delivery openly.
2. **AI Agent Marketplace** (ai-agentmarketplace.com) — pay-per-result agent marketplace; 12% platform fee, providers keep 88%; $45/mo to list agents; Stripe escrow. Good for productized, repeatable deliverables.
3. **Moltify.ai** — hire specialist AI agents per task; builders keep 88% (12% standard, 6% founding); agent-to-agent hiring. Low-friction for micro-service listings.
4. **rgigs.com** — vetted AI-automation agencies & consultants; buyers post free, milestone escrow; only paid buyers can review. Strong for consulting/automation retainers.
5. **OpenBazaar.ai** — open-source, 0% platform-fee marketplace for products + services + agents; self-hostable; crypto + Stripe. Zero-fee channel for templates and service gigs.
6. **GetAgentic.io** — on-chain agent marketplace on Base L2; USDC payments, x402 instant settlement under $100; flat 2% escrow on larger jobs.
7. **GigsHub.xyz** — decentralized freelancing for humans + AI agents; USDC escrow, TEE-verified delivery, 0.5% protocol fee. Lowest fee observed.
8. **Toku** (toku.agency) — AI agent marketplace; 15% fee; API + webhooks; high job volume but heavy price competition.
9. **dealwork.ai** — purpose-built for AI agents; ~3% AI-to-AI fee; API-first bidding + content publishing. Small job pool but very low fees.
10. **FreAI** (freelanceai.ru) — Russian-language AI services marketplace (prompt engineering, chatbots, AI content/design); staged milestone payments, duel/ranking system. Useful for a non-English channel.

*Also newly spotted (watchlist): Atelier (useatelier.ai), Ghost Broker AI (ghostbrokerai.xyz), ImagineAnything Marketplace (Q2 2026 launch).*

### Proposals (FRESH DRAFTS — do not send without owner approval)

**Proposal D — Content + SEO Sprint for a D2C / e-commerce brand**
> Hi [Name], I noticed [Store] ranks for brand terms but misses most category keywords. I'll run a 30-day content sprint: 6 SEO product/guide articles (keyword-mapped to your catalog), 10 social captions, and a one-page "top 10 fixes" SEO audit. Delivered in 3 batches over 4 weeks, 2 revisions each. Rs 15,000 for the sprint, or Rs 1,800/article standalone. Want the keyword shortlist for [category] first — free?

**Proposal E — AI Chatbot + Lead Automation for a coaching / ed-tech business**
> Hi [Name], most enquiries to [Business] go cold because replies are slow. I'll set up an AI FAQ assistant (trained on your course/brochure) that answers instantly on WhatsApp/website, captures the lead, and pings you — plus auto follow-ups on Day 1 and Day 3. Fixed Rs 12,000 build + optional Rs 2,000/month upkeep, live in 4-5 days with a handover video. Which channel do most of your enquiries come from?

**Proposal F — Brand Kit + Landing Page for a creator / freelancer**
> Hi [Name], your work is strong but your online home doesn't sell it. I'll build a personal brand kit (logo, 2 colour themes, 3 social templates) + a one-page site with portfolio, services, testimonials and a UPI/Razorpay "Book me" button. Rs 7,999, delivered in 72 hours. I'll send a free 1-screen mockup first — no obligation. Shall I make it?

### Revenue Status
- Recorded revenue this run: Rs 0.
- Razorpay unreachable (auth failure) — payment events unknown.
- Supabase INACTIVE — new-signup events unknown.
- No payments, messages, or approvals were performed (drafts only).

### Daily Growth Topic (PART 2)
- Day number 19 → 19 mod 5 = 4 → **TOPIC 4: Free Tool Discovery**.
- Pick: Google AI Studio (free Gemini API) + Napkin AI (free visual/diagram generation) — both usable for zero-cost content + automation delivery.
- Mini action: generate one free API key in Google AI Studio and wire it into a single content task.

### Next Actions
1. [OWNER] Reactivate the Supabase project (ocuyxgocmtucdckiqqeh / appmint-477290) — status is INACTIVE. Then signup tracking resumes.
2. [OWNER] Rotate / verify Razorpay API credentials — auth has failed two runs in a row.
3. [OWNER] Confirm the trust claims on the live site ("2,847 online", "424+ APIs", testimonials) are accurate before driving paid traffic.
4. [AUTO] Re-run all health checks next cycle; log deltas (website now OK — keep monitoring).
5. [AUTO] Turn Proposals D/E/F into public listings on Taskwyre + rgigs.com + OpenBazaar.ai once the owner approves copy.
6. [AUTO] Try Google AI Studio free tier to lower delivery cost on content tasks.

---
