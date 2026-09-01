# Clevora — AI services desk

India-first multi-page AI services marketplace. Static site (HTML/CSS/JS) you can host on **Cloudflare Pages**, **GitHub Pages**, or any static host.

## What’s included

| Page | Role |
|------|------|
| `index.html` | Home — menu, stats, services, how-it-works, pricing |
| `services.html` / `service.html` | Full catalog + order brief |
| `builder.html` | Name → multi-page HTML website order |
| `pricing.html` | Starter / Professional / Business |
| `tools.html` / `tool.html` | Free tools (word counter, meta, color, headline) |
| `store.html` | Digital products |
| `api.html` | OpenAI-compatible API docs |
| `blog.html` / `post.html` | Journal |
| `about.html` `contact.html` `privacy.html` | Company |
| `signup.html` `login.html` | Demo auth (browser localStorage) |
| `dashboard.html` | Desk — orders + deliverables |
| `settings.html` | Country, language, theme |

## Design

- Warm paper + ink + single indigo accent (`#2C456F`)
- Display: Fraunces · Body: Figtree
- Light default, dark mode toggle
- 12 countries / currencies, 12 languages (EN/HI UI strings)

## Local demo flow

1. Open `index.html` in a browser (or any static server).
2. **Sign up** → place a service or builder order → open **Desk**.
3. Deliverables are generated client-side as samples. Connect Supabase + LLM for live AI.

## Production next steps

1. **Auth + DB:** Supabase Auth + `orders` table (see prior Edge Function / trigger briefs).
2. **Payments:** Razorpay Checkout + webhook → mark order paid → run generation.
3. **AI:** Supabase Edge Function or Cloudflare Worker calling Gemini / Groq / xAI.
4. **Hosting:** Cloudflare Pages for this static shell; Workers for API gateway.
5. **Email:** Resend for delivery receipts.

## Stack philosophy

Restaurant model: readable menu before signup, fixed prices, desk for pickup. No retainers. No fake “credits.” One job → one file.
