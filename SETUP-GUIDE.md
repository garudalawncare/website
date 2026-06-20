# Garuda Lawn Care — GitHub Pages Setup Guide

Your full website is built and ready. Here's exactly how to get it live at
**garudalawncare.ca**.

---

## What You're Getting

```
garuda-site/
├── index.html                  → Homepage
├── services.html                → Services page
├── service-areas.html           → Service areas hub
├── about.html                   → About page
├── contact.html                 → Contact page (quote, WhatsApp, map)
├── cities/
│   ├── brampton-lawn-care.html
│   ├── mississauga-lawn-care.html
│   ├── oakville-lawn-care.html
│   └── milton-lawn-care.html
├── assets/
│   ├── logo-transparent.png     → Your real logo, background removed
│   ├── favicon-32.png           → Browser tab icon
│   ├── apple-touch-icon.png     → iPhone home screen icon
│   └── style.css                → All site styling
├── sitemap.xml                  → Tells Google every page that exists
├── robots.txt                   → Tells Google it's allowed to crawl
└── CNAME                        → Connects your custom domain
```

---

## STEP 1 — Create a GitHub Account (if you don't have one)

Go to **github.com** → Sign up. It's free.

---

## STEP 2 — Create a New Repository

1. Click the **+** icon top-right → **New repository**
2. Repository name: `garuda-lawn-care` (or anything you like)
3. Set it to **Public**
4. Do NOT initialize with a README
5. Click **Create repository**

---

## STEP 3 — Upload Your Site Files

**Easiest method (no command line needed):**

1. On your new repo page, click **uploading an existing file**
2. Drag and drop **everything inside** the `garuda-site` folder
   (the `index.html`, `cities/` folder, `assets/` folder, etc. — not the
   outer folder itself)
3. Scroll down, click **Commit changes**

---

## STEP 4 — Turn On GitHub Pages

1. In your repo, click **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under "Build and deployment" → Source: **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)** → **Save**
5. Wait 1–2 minutes. GitHub will give you a URL like:
   `https://yourusername.github.io/garuda-lawn-care/`

Visit that link to confirm the site loads correctly before moving to your
custom domain.

---

## STEP 5 — Connect garudalawncare.ca

You already have the `CNAME` file in the project, which tells GitHub which
domain to expect. Now you need to point your domain's DNS to GitHub.

### Where you bought garudalawncare.ca (GoDaddy, Namecheap, etc.):

Go to your domain's **DNS settings** and add these records:

**A Records** (point the root domain to GitHub's servers):
```
Type: A     Host: @     Value: 185.199.108.153
Type: A     Host: @     Value: 185.199.109.153
Type: A     Host: @     Value: 185.199.110.153
Type: A     Host: @     Value: 185.199.111.153
```

**CNAME Record** (point www to GitHub):
```
Type: CNAME     Host: www     Value: yourusername.github.io
```

> Replace `yourusername` with your actual GitHub username.

### Back in GitHub:

1. Go to **Settings → Pages** again
2. Under "Custom domain," type `garudalawncare.ca` → **Save**
3. Wait for the DNS check to pass (can take up to 24 hours, often faster)
4. Once it passes, check **Enforce HTTPS** — this gives you the padlock
   icon and is important for both trust and SEO

---

## STEP 6 — Submit to Google Search Console

This tells Google your site exists and gets it indexed faster.

1. Go to **search.google.com/search-console**
2. Add property → enter `https://garudalawncare.ca`
3. Verify ownership (the HTML tag method is easiest — GitHub Pages
   supports adding it directly to the page if needed)
4. Once verified, go to **Sitemaps** in the left menu
5. Submit: `sitemap.xml`

---

## STEP 7 — Update Your Google Business Profile

Make sure your GBP "Website" field points to **https://garudalawncare.ca**
(not the old Google Sites link). This is one of the most important steps —
it tells Google your business and your website are the same entity, which
directly helps your local ranking in Brampton, Mississauga, Oakville, and
Milton.

---

## When You Need to Make a Change (Once a Year)

Just send me what needs updating (new phone number, new review quote, price
change, etc.) and I'll edit the code and give you updated files. You just
re-upload the changed file(s) to GitHub the same way you did in Step 3 —
GitHub automatically updates the live site within a minute or two.

---

## Quick Reference

| What | Where |
|---|---|
| Live site (before custom domain) | `https://yourusername.github.io/garuda-lawn-care/` |
| Live site (after DNS connects) | `https://garudalawncare.ca` |
| Edit files | Your GitHub repo → click file → pencil icon |
| Check indexing status | search.google.com/search-console |
| WhatsApp number used | 437-876-5492 |
| Yardbook quote link | Embedded in all "Get Free Quote" buttons |
| Google Business Profile link | Embedded in all "View on Google Maps & Reviews" buttons |

---

*Questions or need a change made? Just ask — I'll edit the code directly and hand you updated files.*
