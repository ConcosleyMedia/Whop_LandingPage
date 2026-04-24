# Build Room — Funnel Pages v2

Five-page funnel, one shared design system. All payments + waitlist + community on Whop.

## Files

```
brand.css             → shared design system (import in every page)
index.html            → Page 01 · Free opt-in landing (top of funnel)
thank-you.html        → Page 02 · Post-opt-in + $1 trial OTO
build-room.html       → Page 03 · $9/mo sales page (warm traffic)
ship-loop.html        → Page 04 · $297/mo cohort (hidden URL, direct checkout)
ship-and-sell.html    → Page 05 · $2,997 1:1 memo page (fully hidden, waitlist only)
```

## Placeholders to replace before launch

Five Whop URLs. That's it.

| Placeholder | Where | Whop setup |
|---|---|---|
| `{{WHOP_FREE_URL}}` | `index.html` (2x) | Free product — claim page with email capture |
| `{{WHOP_TRIAL_URL}}` | `thank-you.html` | $1 trial → $9/mo (needs trial pricing variant in Whop) |
| `{{WHOP_BUILDROOM_URL}}` | `build-room.html` (2x) | $9/mo direct checkout |
| `{{WHOP_COHORT_URL}}` | `ship-loop.html` | $297/mo direct checkout |
| `{{WHOP_1TO1_WAITLIST_URL}}` | `ship-and-sell.html` | Waitlist link (Whop "coming soon" / waitlist feature) |

### Whop setup checklist

Before swapping placeholders, in Whop you need:
- [ ] Free product published (with claim/access flow)
- [ ] Build Room $9/mo product published
- [ ] $1 trial variant of Build Room (trial pricing option enabled)
- [ ] Ship Loop $297/mo product published, cohort capacity set
- [ ] Ship & Sell $2,997 product in waitlist/coming-soon mode

## Hidden pages

- `ship-loop.html` — noindex. Don't link publicly. Drop the URL in email, milestone calls, or Build Room chat.
- `ship-and-sell.html` — fully hidden. Only drop in 1:1s and DMs.
- `thank-you.html` — noindex. Post-opt-in only.

## Deployment

Static host (Vercel, Netlify, Cloudflare Pages).

Recommended routes:
- `/` → `index.html`
- `/thank-you` → `thank-you.html`
- `/build-room` → `build-room.html`
- `/ship-loop` → `ship-loop.html`
- `/ship-and-sell` → `ship-and-sell.html`

## Brand tokens

Defined in `brand.css` under `:root`. Change colors/fonts there — every page inherits.

## What's intentional

- No testimonials sections yet. Add when real ones exist.
- Ship & Sell has no path from public nav. Only way in is a direct link from you.
- Thank-you OTO is live — needs the Whop trial variant configured.
- Per-tier visual hierarchy: Free = Paper + loud orange, Build Room = Paper + moderate orange, Ship Loop = Ink + sparse orange, Ship & Sell = Paper + near-zero orange (memo style).

## Things to add before paid traffic

1. Favicon (`<link rel="icon">` + `favicon.ico` at root)
2. Open Graph image (1200×630 per brand spec)
3. Analytics (Plausible, Fathom, or Vercel Analytics)
4. 2–3 real testimonials in `build-room.html` — single biggest conversion lever for ad traffic

---
BUILD-ROOM · v2 · 2026-04-24
