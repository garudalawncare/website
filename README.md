# Garuda Lawn Care — Website

Static website (HTML/CSS/JS). No build step, no dependencies. Just upload and go.

## Files
- `index.html` — Home
- `about.html`, `services.html`, `packages.html`, `gallery.html`, `faqs.html`, `contact.html`
- `styles.css` — all styling (shared by every page)
- `garuda.js` — all behaviour (menu, form, gallery, etc.)
- `garuda-logo.svg` — logo file

Keep every file in the SAME folder — the pages link to each other by name.

## Put it on GitHub Pages (free hosting)
1. Create a new GitHub repository.
2. Upload **the files inside this folder** (not the folder itself) to the repo root —
   `index.html` must sit at the top level.
3. In the repo: **Settings → Pages → Build and deployment**.
4. Source: **Deploy from a branch**. Branch: **main**, folder: **/(root)**. Save.
5. Wait ~1 minute — your site is live at `https://<username>.github.io/<repo>/`.

## Use your own domain (garudalawncare.ca)
In **Settings → Pages → Custom domain**, enter `garudalawncare.ca` and follow the DNS steps.

## Add photos later
Open `garuda.js` and edit the two lists near the top:
- `SERVICE_PHOTOS` — one image URL per service card
- `GALLERY_PHOTOS` — image URLs for the gallery grid
Use your own photo URLs or free ones from unsplash.com. Leave "" to keep the clean placeholder.

## SEO — already built in
Every page includes:
- Unique title + meta description, canonical URL, robots meta
- Open Graph + Twitter Card tags (nice link previews when shared)
- LocalBusiness structured data (helps Google show you as a local business)
- FAQ structured data on the FAQs page
- Favicon (your logo) in the browser tab
- `sitemap.xml` and `robots.txt` for search engines

IMPORTANT: the SEO tags assume your domain is **https://garudalawncare.ca**.
If you use a different URL (e.g. a github.io address), open each `.html` file plus
`sitemap.xml` and search/replace `https://garudalawncare.ca` with your real address.

After publishing, submit your site to **Google Search Console** and add the
`sitemap.xml` there so Google indexes all pages.

## Things to update
- Phone `437-876-5492` and email `info@garudalawncare.ca` (search/replace if they change)
- Business hours (currently 24 hours, 7 days a week)
- The "I'm not a robot" box is a visual check; add Google reCAPTCHA when you connect a real form backend.

## Version
This site is versioned. The current version is in `VERSION.txt` and at the top
of every HTML/CSS/JS file (as a comment). History is in `CHANGELOG.md`.
When I send you an updated build, the version number goes up (v1.0 → v1.1 …)
and the zip filename includes it, so downloads never overwrite each other.
