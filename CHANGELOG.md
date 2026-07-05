# Garuda Lawn Care — Website Changelog

## v1.0 — 2026-07-04
- Initial full website: Home, About, Services, Packages, Gallery, FAQs, Contact
- 4 city pages: Brampton, Mississauga, Oakville, Milton (unique local SEO content)
- Sectioned quote form wired to Web3Forms (leads emailed to info@garudalawncare.ca)
- Google Business Profile map embedded on Contact page
- Full SEO: titles, meta descriptions, Open Graph, structured data, FAQ schema, sitemap.xml, robots.txt, favicon
- Shared theme via styles.css and garuda.js (Poppins, green #196021 + gold #d49b19)
- Seobility on-page score: 90%

## v1.1 — 2026-07-04
- Gallery completed: real before/after project photos (18 images) with drag-to-compare sliders
- Re-themed the gallery to match the site (Poppins + green #196021 / gold #d49b19 on white)
- Wrapped gallery in the standard header, menu and footer
- Fixed first project: relabelled from "sod installation" to an overgrown lawn cut back for a homeowner who'd given up
- Photos extracted to /images (webp) instead of inline data — much faster page load
- "Get a free quote" buttons now link to the contact page (was a dead #book anchor)

## v1.2 — 2026-07-05
- Rotated the first gallery photo 90 degrees clockwise (was sideways)
- Confirmed before/after drag sliders work in-browser (note: a PDF/print export cannot show the drag)

## v1.3 — 2026-07-05
- Fixed before/after drag sliders on the gallery: moved the slider script inline into gallery.html (self-contained, like the original working file) instead of the shared garuda.js, so it no longer depends on other scripts running first
- Added DOMContentLoaded guard + explicit window listeners for reliability

## v1.4 — 2026-07-05
- Business hours changed to 24 hours a day, 7 days a week (always open)
- Updated in footer (all pages), the contact info card, and the SEO structured data on all 11 pages
- README hours note updated

<!-- Add future changes above this line, newest first:
## v1.1 — YYYY-MM-DD
- what changed
-->
