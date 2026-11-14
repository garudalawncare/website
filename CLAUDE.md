# Garuda Lawn Care — working rules for Claude

This file carries forward everything decided about this site so no session has to
re-derive it. Keep it up to date as decisions change.

> **THIS REPOSITORY IS PUBLIC.** Anything committed here is readable by anyone on
> github.com. Never commit revenue or sales figures, customer data, account or
> login details, research reports, or the owner's private notes. The owner keeps
> the full rebuild brief, the Semrush research and the private version of these
> notes himself; ask him to upload them when a task needs them. `docs/` and
> `private/` are git-ignored for that reason. The live site publishes only website
> files (see `.github/workflows/static.yml`), never `*.md`.

## The one goal

**Rank in the top 3 on Google** for the city/service searches that matter, and get
found in AI answers. Every page, wording and structural decision is judged against
that goal first.

**Working rule:** make SEO and design calls freely, but never invent facts about the
business (years in business, customer counts, services, prices, policies). Ask the
owner (Vijay) for those. If a decision he's asking for would hurt ranking, say so
plainly before building it — don't just comply and don't just agree to be agreeable.
His words: "don't just say you are right, tell whatever is right."

## Business facts (confirmed by the owner)

- **Name:** Garuda Lawn Care. Tagline: "We mow. You enjoy."
- **Phone/text:** (437) 876-5492 · WhatsApp: https://wa.me/14378765492
- **Email:** info@garudalawncare.ca (public on site; treat as private in any outbound request to a third party)
- **Address:** 28 Hoover Rd, Brampton, ON L7A 4N4
- **Hours:** 7 AM–9 PM, seven days a week
- **Service area:** Brampton, Mississauga, Oakville (north of QEW/403 only), Milton
- **Rating:** 5.0 on Google. Never print a review count anywhere on the site.
- **History:** owner providing lawn service since 2020; Garuda Lawn Care established 2026.
  Do not claim "years in business" for the company itself. Reviews that mention
  "4 years" are real and fine to quote verbatim.
- **No contracts.**
- Google review link: https://g.page/r/CcZy6X9SsifnEBM/review
- Facebook: https://www.facebook.com/share/1BofVToZzT/ · No Instagram.

### Services offered
- Grass cutting & mowing with edge trimming (say "edge trimming," not "edging")
- Fertilization (from $50)
- Weed control — starts spring 2027. It may appear on the site now, but always
  labelled "Spring 2027" (see Confirmed service details below)
- Overseeding (quoted after review)
- Spring & fall cleanup, one combined page (from $100)
- Sod installation: $4/sq ft, $990 minimum, supply + install + removal of old lawn +
  grading + delivery + watering instructions
- "Other yard work" (cleanup page only, all quoted after review): hedge trimming,
  shrub trimming, garden bed prep, mulch installation

### Not offered — never advertise
Snow removal, aeration, commercial properties, tree trimming, weed pulling.
(Tips & Guides articles may mention things not offered, as general advice.)

### Grass cutting prices (per visit, bi-weekly; weekly is $5 less per visit)

| Lot size | Price |
|---|---|
| Under 2,000 sq ft | $50 |
| 2,001–4,000 sq ft | $55 |
| 4,001–5,000 sq ft | $60 |
| 5,001–6,000 sq ft | $65 |
| 6,001–7,000 sq ft | $70 |
| 7,001–7,500 sq ft | $75 |
| 7,501–8,000 sq ft | $80 |
| Corner lots | From $80 |
| Over 8,000 sq ft / irregular | Priced after review |

Headline: "starting from $50 per visit." Show the full table in plain visible HTML
text on every city page and the Grass Cutting page — do not collapse it.

### Confirmed service details
- Each visit: mowing, string trimming, edge trimming, clippings blown off walkways/driveway.
- Clippings: **bagged and left on the property — we do not haul them away.** Say nothing about whether the city/region collects them.
- Being home: not required. Customer leaves the gate unlocked; it's closed on exit.
- Visit length: 30 min–1 hr. "Our goal is to do the work properly, not rush."
- One-time cuts available; don't enumerate reasons (overgrown lawns, events, etc.).
- Cutting height/season: ~3–3.5" in summer, slightly shorter spring/fall, never
  scalp; first cut late April/early May, peak May–Sept, final cut late Oct/early Nov.
- Guarantee (confirmed 13 Nov 2026): "If you are not happy with a cut, tell us and
  we will come back to make it right."
- Ask customers to mark sprinkler heads, garden lights, buried wires.
- Rain: the visit moves to the next day. Customer does nothing.
- Overgrown lawns: priced after the owner reviews photos the customer sends.
- Payment: e-Transfer. (Timing/terms not stated by owner; don't invent them.)
- Pets: ask customers to clean up the yard the day before the scheduled visit.
- Insurance: yes, insured. Don't claim coverage details beyond "carries insurance."
- Weekends: open and working 7 days, including weekends.
- After-visit photos: yes, sent when the customer isn't home. Owner wants this
  framed as a trust point ("so you can see the job was done right").
- Weed control: page/section may be published now (for page age before spring),
  but always labelled "Spring 2027" / coming soon.
  The Fertilization & Weed Control page carries a gold banner under the hero:
  "Weed control starts spring 2027. Fertilization and overseeding are available now."
- Quote form: phone required, email optional (owner agreed 13 Nov 2026). Don't make
  email required.

## Design spec (locked)

- Font: Poppins only. Pill buttons. Green-tinted shadows.
- Palette: green `#196021`, dark green `#0f451a`, sage `#5c9264`, sage soft `#eaf1e9`,
  gold `#d49b19`, gold soft `#f7eacb`, ink `#1e2a20`, muted `#5d6b61`, line `#e6ede3`,
  white `#fff`, soft bg `#f6f9f3`, footer `#12331b`.
- Hero bands (blog/service-area pages): 135deg gradient `#0f451a → #196021`.
  Closing band: 160deg `#196021 → #0f451a`.
- Header (owner-approved 13 Nov 2026): logo + GARUDA LAWN CARE name on the LEFT;
  on the RIGHT, in order: phone button (green circle icon; shows the number next to
  it on desktop only), gold "Free Quote" button with the text on two lines
  ("Free / Quote", .68rem, invisible enlarged tap area), then the 3-line menu.
  Must fit on one line at 360px. Real logo SVG (inline, see any existing page's
  `<symbol id="garudaLogo">`).
- Menu: Home, About Us, FAQs, Services (Grass Cutting, Fertilization & Weed Control,
  Spring & Fall Cleanup, Sod Installation, Brampton, Mississauga, Oakville, Milton),
  Gallery, Tips & Guides, Reviews, Contact.

## SEO rules — do not violate these without flagging it first

1. **Homepage must not compete with city pages.** Homepage carries short summaries
   per city (a few neighbourhood names + "from $50" + link out) — never full city
   content. Full depth lives only on the city page. This was the single biggest
   ranking problem found (homepage outranking Garuda's own Brampton/Mississauga
   pages for the same searches).
2. **No page targeted at a search with ~0 measured volume.** Confirmed dead ends:
   city+cost combinations ("lawn care cost mississauga"), city+weekly/bi-weekly
   combinations as standalone pages, "owner-operated" as a page target. Cover these
   as sections/FAQs inside a page that targets a real search instead.
3. **The cost guide targets the plain cost question, not a city+cost phrase.**
   Title/H1 around "How much does grass cutting cost?" / "lawn mowing cost," not
   "Grass Cutting Prices in Mississauga." Keep Mississauga and the lot-size table in
   the body and URL. (Plain questions measure 50–140 searches/mo each in Canada;
   city-qualified cost searches measure ~0.)
4. **Keep city pages unique, not templated clones.** Target: under ~30% overlap
   between any two city pages (5-word-phrase overlap, city names normalized). It was
   52–69% before the v4.13 rewrite; v4.13 brought it to 26–29%. Don't regress this.
5. **Effort is not spread evenly across the four cities** (owner's decision, based
   on his own business data, kept private). Mississauga and Brampton get full build
   depth; Milton and Oakville get accuracy-maintenance only unless the owner says
   otherwise.
   Oakville's own search demand is real (~750/mo "lawn care oakville" in May) and its
   page already ranks (#29–32), so don't remove it — just don't over-invest there.
6. **Seasonality:** city search demand peaks May–July depending on city and term
   (Mississauga: lawn care/maintenance peak May; Oakville: lawn care/grass
   cutting/lawn service peak May, drop ~80% by Aug; Brampton: lawn mowing peaks May
   at >2x its yearly average; Milton: peaks Jun–Jul). New/changed pages take ~2–3
   months to settle in Google, so **finish the winter build (Dec–Mar) to be ready for
   the May rush**, not after it.
7. **Don't react to single-day rank swings.** Day-to-day jumps in Brampton tracking
   are often Google showing/hiding the map-pack listing, not real ranking change.
   Judge trends over at least a week.
8. **No pages/headlines built around "owner-operated"** (and the phrase is now
   retired sitewide for growth reasons). Nobody searches it (10 of
   12 variants have ~0 Canada volume, and none of the owner's own Search Console
   queries contain "owner"). Trust copy only, never a target.
9. **No landscaping-only pages, no second Google profile, no chatbot, no quote-form
   rebuild beyond Web3Forms, no bought links/syndication, no paid ads** — all
   explicitly decided against.
10. Reviews: real Google reviews only, reviewer's own words (may shorten), first
    name + last initial, city only where known. Public wording is always "Rated 5.0
    on Google" with **no review count** anywhere.
11. Photos: real photos only, one caption per photo (city + work type, no dates/
    addresses), never reuse a photo across cities, cleanup photos stay on the
    cleanup page and Gallery only.
12. Local bylaw/yard-waste facts per city (see the full brief, section 6) are a
    genuine ranking and trust asset — competitors rarely have this. Keep them
    current; they're dated "checked November 2026" and should be re-verified before
    each spring.

## Build status

- Rebuild went live 13 Nov 2026 (PR #1): Homepage, Grass Cutting, Fertilization &
  Weed Control (new), Sod, Spring & Fall Cleanup (kept at fall-cleanup.html to keep
  its rankings), all four city pages, cost guide, new sitewide menu/footer, Packages
  forwards to Grass Cutting.
- Quote behaviour (owner request, 13 Nov 2026): NO bottom button bar. A compact gold
  two-line "Free Quote" button sits in the header between the phone button and
  the menu button. Every quote link
  (text contains "quote" or "exact price") opens the same quote form as an overlay
  in place (garuda.js: openQuote/closeQuote); pages with an inline form lend it to
  the overlay, other pages get an identical copy generated from contact.html's
  form. No scrolling or page change; closing returns to the same scroll position.
  If the contact.html form ever changes, regenerate QUOTE_CARD in garuda.js.
- Minifying happens at publish time (workflow step "Minify JS and CSS", esbuild
  0.23.1). Always edit the readable garuda.js / styles.css in the repo; never commit
  minified copies. If minifying fails, the readable files are published instead.
  **IMPORTANT (found 13 Nov 2026):** the repo also had GitHub's built-in Pages
  "Deploy from a branch" (Jekyll) builder enabled alongside this workflow. Both
  fire on every push to main and both deploy to the live site; Jekyll copies
  .js/.css through unminified and was finishing a few seconds after this workflow
  on every push, silently overwriting the minified files every time (content
  fixes like schema/links still worked, since both builders serve identical raw
  HTML — only minifying was being defeated). Owner switched Settings > Pages >
  Source to "GitHub Actions" on 13 Nov 2026 to stop this. If minify issues ever
  reappear, check Settings > Pages > Source is still "GitHub Actions" and that no
  "pages build and deployment" run appears in the Actions tab after a push.
  The same step rewrites every page's script/stylesheet link to `?v=<commit>` so
  browsers and crawlers fetch the new files. The HTML templates embedded in
  garuda.js (QUOTE_CARD, QUOTE_ICONS) are kept whitespace-compact (`> <` between
  tags) so the minified file stays on one line; regenerate them that way.
- Page speed (14 Nov 2026, after Semrush Core Web Vitals showed LCP "Poor" on 9 of
  10 pages, gallery LCP 16.7s):
  - Poppins is self-hosted in `fonts/` (Fontsource copies of Google's files, same
    character ranges; OFL licence in `fonts/OFL.txt`). No Google Fonts link anywhere.
    Every page preloads the five weights its first screen uses (800, 400, 700, 600,
    500) with absolute `/fonts/...` paths; the @font-face URLs in styles.css use the
    same paths, so keep them matching. Italic 400 is the only italic face (as before).
  - "Poppins Fallback" / "Poppins Fallback R" in styles.css are Arial/Roboto scaled
    to Poppins' width, shown only until Poppins loads, so headings don't re-wrap and
    shift the page (that was the homepage's 0.110 layout shift). If you change the
    font stacks, keep them in the order Poppins, fallbacks, system font.
  - The publish workflow inlines the minified styles.css into every page
    (`.github/inline-css.py`), so the first paint waits for no second file. The repo
    keeps the `<link>` tags and readable CSS; url()s in styles.css must be absolute
    (`/fonts/...`) because inlined CSS resolves paths from the page, not from root.
  - Images: give every `<img>` width/height (CSS needs `height:auto` where it sets
    only a width), `loading="lazy"` below the first screen, and a 700px `-700.webp`
    phone copy via srcset for large photos (hero photos on Home/Grass Cutting, all
    gallery photos). Gallery photos are max 1000px, WebP q72.
  - Measure before/after with Lighthouse mobile over HTTP/2 (GitHub Pages is HTTP/2;
    an HTTP/1.1 test server gives misleading results for image-heavy pages).
- Every LocalBusiness node in JSON-LD (including Service.provider) must carry the
  full PostalAddress (28 Hoover Rd, Brampton, ON, L7A 4N4, CA), or Google/Semrush
  flag it as invalid.
- service-areas.html is linked from the homepage ("See all service areas") and every
  footer ("All service areas"); keep it linked so it is not orphaned.
- Halton outdoor water use page moved (Nov 2026) to
  https://www.halton.ca/for-residents/water-and-wastewater-services/water-conservation/outdoor-water-use-and-restrictions
- Menu: fixed full-height panel that scrolls internally (overscroll contained),
  page behind locked while open, close (X) pinned at the top.
- Not yet rebuilt to the new design: About, FAQs, Contact, Gallery, Services,
  Service Areas, blog articles. Their facts were corrected in the pre-launch review.
- Wording: "call or text, we usually reply right away". Never say "personally" or
  "owner answers".
- Weekly vs bi-weekly: never say what most customers choose. Site wording: weekly in
  peak season, bi-weekly later, customer's choice.
- City-page overlap check: 5-word shingles of `<main>` text, form, price table and
  closing band excluded, city names normalised. All six pairs 17-23% (target <30%).
  Price table, CTA band and quote form are meant to be identical; vary the rest.
- Brampton neighbourhoods (owner-confirmed 13 Nov 2026, 10 pills, in this order):
  Mount Pleasant, Fletcher's Meadow, Fletcher's West, Credit Valley, Bram West,
  Heart Lake, Bramalea, Springdale, Castlemore, Bram East. (Downtown Brampton and
  Peel Village also served but left off to keep the list at 10.)
- Growth framing (owner, 13 Nov 2026): the owner plans to expand beyond himself.
  Write about the business, not the owner: no owner name on pages, no
  "owner-operated" (now "Brampton-based"), no "owner on every job". Reviews that
  name Vijay stay, as customers' own words.
- Gallery patio/vine/weed clearing photos are real cleanup work done with a
  trimmer; keep them, no extra explanation needed.
- Owner's real job photos were extracted from the owner's approved v4.13 visual
  preview PDF into `images/` with descriptive names, e.g.
  `brampton-front-lawn-grass-cutting-before.webp`, `mississauga-leaf-cleanup-after.webp`.
  City attribution follows the captions in the brief. Max ~1000px, WebP q72.
  Milton has no grass-cutting photo yet. Gallery's older `work-NN.webp` files
  carry no city attribution.
- City pages use the preview layout: dark green hero (city name in gold),
  two-column body with the quote form in a sticky right column (on phones it
  appears straight after the price table), recent-work photos, FAQs.

## Working with the owner

- Short, practical answers, clear next steps.
- Discuss before building anything that changes live pages: lay out options,
  recommend one, wait for "go." Routine fixes (broken links, price typos) don't need
  this; a full page rebuild or nav change does.
- Build on the assigned feature branch; nothing reaches the live site without the
  owner's explicit go-ahead to merge/deploy.
