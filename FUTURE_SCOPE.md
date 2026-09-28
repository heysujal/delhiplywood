# Future Scope: Ranking for Plywood Searches in Delhi

Plan written 28 Sept 2026, after the rebrand to Nitin Plywood House, the canonical fix, the www redirect and the mobile speed work. It covers what to do next to rank for plywood searches in Delhi, with [delhisales.in](https://delhisales.in/) as the main online competitor.

## Where we stand (28 Sept 2026)

- **Search Console (last 3 months):** 557 impressions and 5 clicks, almost all on the homepage. The top searches are local: "plywood shop near me" (average position 4.6), "plywood house", "ply house", "bakhtawar pur".
- **Indexing:** Google last crawled the homepage on 23 Sept, when the site still said "Delhi Plywood House". Indexing was requested again on 28 Sept, and validation of the Page indexing issues has started.
- **Mobile Lighthouse (local):** Performance 97–98, Accessibility 100, SEO 100.
- **DNS:** nameservers at Hostinger, site hosted on Vercel. `delhiply.in` and `www` redirect to `delhiplywood.com`.
- **Content:** 18 product pages, 13 blog posts (Hinglish buying guides), an About page, a Renovation page.

## Who ranks for "plywood in Delhi"

| Type | Examples | What to do |
|---|---|---|
| Directories | IndiaMART, Justdial, Sulekha, magicpin | Too big to outrank. List the shop on them with the same name, address and phone everywhere |
| Brand dealer finders | Greenply and CenturyPly dealer locators | Get listed, but only for brands the shop is an authorised dealer of |
| Online sellers | delhisales.in | Beat them on the searches below |
| Nearby shops (Alipur Road, Narela) | Bharti Plywood, Shree Shyam Plywood & Hardware (4.9★, 18 reviews on Justdial), Vikas Plywood, Shri Ram Plywood & Glass House, Maa Gouri Plywood, Tinku Plywood, Atul Ply & Glass | Our real rivals on Google Maps. None of them has a proper website |

Big directories hold the broad search "plywood in Delhi", and we shouldn't expect to rank there soon. What we can win:

1. The Google Maps results for North Delhi (Alipur, Narela, Bawana, Burari, Bakhtawarpur).
2. "[brand] dealer in Delhi" searches, for brands the shop actually stocks.
3. Price searches ("plywood price in Delhi").
4. Hinglish question searches ("block board vs plywood", "asli nakli plywood kaise pehchane").

## delhisales.in

**What they do well:**
- **About 500 pages:** 342 product pages (brand + grade, e.g. "Century Club Prime Plywood BWP") and 97 brand pages. This is why they rank for "Greenply dealer Delhi" and "Century ply dealers".
- **Prices on every product**, for example Century Club Prime BWP at ₹42.21/sq ft.
- **Big national brands:** Greenply, Century, Kitply, Merino, Greenlam, Duro, Action TESA.
- **Buying reassurance:** cash on delivery (up to ₹1.5 lakh), same-day delivery, replacement within 2 working days, an FAQ section.

**Where they are weak:**
- **Stale:** all 500 pages in their sitemap were last updated on **2 Dec 2019**, so their prices are likely out of date.
- **Weak SEO basics:** no main heading (`<h1>`) on the homepage, a canonical URL still on `http://`, and no structured data at all.
- **Old tech:** PHP 7.0 (unsupported since 2019) and jQuery.
- **No real shop:** no shop address or shop photos, and no Google reviews shown.
- **No guides:** no blog, and nothing in Hindi or Hinglish.

**Where we already beat them:** a real shop running since 2000, real Google reviews and photos, a fast modern site with structured data, and Hinglish buying guides.

**What not to copy:** pages for brands the shop doesn't sell (Greenply, Kitply, Duro). They would mislead customers and turn into bad enquiries.

## Plan, in order of impact

### 1. Google Business Profile (no code, biggest win)

The Google Maps results come from the Business Profile, not the website.

- [ ] Ask every customer for a review on WhatsApp after the sale, using `writeReviewUrl` from `config/reviews.json`. Target: 5–10 new reviews a month.
- [ ] Set the primary category to "Plywood supplier". Add Laminate supplier, Hardware store, Building materials store and Door supplier.
- [ ] Add all 18 product categories under Products.
- [ ] Upload new photos weekly. There are 20 unused ones in `Takeout/newphotos/`.
- [ ] Publish a weekly post (new stock, offers).
- [ ] Answer the questions in the Q&A section.

### 2. Directory listings (one time, 1–2 hours)

Use exactly the same name, address, phone and website on every listing:

- [ ] Justdial
- [ ] IndiaMART
- [ ] Sulekha
- [ ] magicpin
- [ ] Mappls (MapmyIndia)
- [ ] Bing Places
- [ ] Apple Business Connect
- [ ] Brand dealer finders (Century laminates, Greenlam, Merino, Action TESA), only where the shop is an authorised dealer

### 3. New pages on the site

These need the owner's input first (see the list under "Needed from the owner").

- [ ] **Brand pages** (`/brands/<slug>`), only for brands the shop stocks: Action TESA, Century / Greenlam / Merino laminates, Fevicol, Lee Perry, Goldberg, Dawar, DP Plus, Awani and so on. Each lists the products carried and links to the product pages. Target: "[brand] dealer in North Delhi / Alipur".
- [ ] **"Plywood price in Delhi 2026" page:** price ranges per sq ft by grade and thickness, with an "updated on" date. Refresh it every quarter. Also add the price ranges to each product page.
- [ ] **Area pages (5–6)** for places the shop really delivers to near Alipur: Narela, Bawana, Burari, Bakhtawarpur, Holambi, Kundli. Each needs genuine content (delivery time, distance, route, landmarks), or Google treats them as low-quality filler pages.
- [ ] **More detail on product pages:** thickness and size tables, 3–5 FAQs, and delivery, cash-on-delivery and replacement terms (only if the shop offers them).
- [ ] **Blog:** 1–2 Hinglish guides a week, following [BLOGGING.md](BLOGGING.md), each linking to the matching product page.
- [ ] Put brand and area pages in `app/sitemap.ts` and link them from the homepage or footer.

### 4. Tracking

- [ ] Check Search Console weekly: which pages appear for brand searches ("nitin plywood", "nitin ply") and for "plywood shop near me", and at what average position.
- [ ] Watch the GA4 events `call_click`, `whatsapp_click` and `directions_click`, broken down by page. `components/ContactBar.tsx` already sends them.
- [ ] Check the Business Profile monthly for calls, direction requests and website clicks.

## Needed from the owner

1. Which brands the shop stocks, and which of them it's an authorised dealer for.
2. Current price ranges per sq ft, by grade and thickness (rough ranges are fine).
3. Areas the shop delivers to, and how fast.
4. Whether the shop offers cash on delivery, or replacement of damaged sheets.

## Timing

- Rankings settle 2–4 weeks after a deploy. Judge results after that, not before.
- For about a month after the rebrand, don't rename pages or change page addresses (URLs). Adding new pages is fine.
- Steps 1 and 2 don't depend on the website, so they can start right away.
