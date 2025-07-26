
# JoJo’s Life Kitchen — Video Catalog & Etsy Shop

**Version:** 1.2  
**Platform:** Next.js + Tailwind + Vercel Hosting + Vercel Postgres  
**Environment:** Cursor IDE  
**Owner:** Nancy Jo Spear  

---

## 📌 Project Objective

Design and develop a branded website for Nancy Jo Spear, the creator of JoJo’s Life Kitchen, to:
- Showcase all video content from TikTok/Instagram in a searchable, modern card layout.
- Integrate JoJo’s Life Kitchen Etsy products into a beautifully styled shop.
- Use Vercel Postgres for storing post and product data.
- Exclude newsletter or user login features in this phase.

---

## ⚙️ Technical Stack

| Component     | Technology                       |
|---------------|-----------------------------------|
| Front-End     | Next.js, Tailwind CSS, Framer Motion |
| Data Storage  | Vercel Postgres (with Prisma ORM)  |
| Hosting       | Vercel                            |
| Build Tool    | Cursor IDE                        |
| Social API    | TikTok (manual scrape or unofficial) / Instagram Graph API |
| Commerce API  | Etsy Public API                   |

---

## 🗃️ Database Schema (Vercel Postgres)

### `posts`
| Field       | Type       | Description                           |
|-------------|------------|----------------------------------------|
| id          | UUID       | Primary Key                            |
| title       | TEXT       | Video title/caption                    |
| platform    | TEXT       | TikTok / Instagram                     |
| video_url   | TEXT       | Link to video                          |
| thumbnail   | TEXT       | Video thumbnail                        |
| date_posted | TIMESTAMP  | Upload date                            |
| views       | INTEGER    | Optional                               |
| tags        | TEXT[]     | Content tags                           |

### `products`
| Field       | Type       | Description                           |
|-------------|------------|----------------------------------------|
| id          | UUID       | Primary Key                            |
| name        | TEXT       | Product name                           |
| image_url   | TEXT       | Product image                          |
| price       | TEXT       | e.g. "$12.99"                          |
| description | TEXT       | Product description                    |
| product_url | TEXT       | Link to Etsy page                      |
| featured    | BOOLEAN    | Whether to display as featured         |

---

## 🗺️ Page Architecture + Copy

### `/` — Home
**Hero:**  
> “Cook with joy—and a little st‑st‑stutter.”

**CTA Button:** “Browse Recipes”

**Featured Reels Grid:**  
Pulled from latest TikTok/Instagram content.

---

### `/catalog` — Video Catalog
**Search Placeholder:**  
> “Search by dish, vibe, or season…”

**Filters:**  
- Platform (TikTok, Instagram)  
- Tags (Mood Food, Trader Joe’s, Holidays)  
- Season (Spring, Fall)

**Card Info:**  
- Thumbnail  
- Title  
- Meta info (views, date)  
- CTA: “Watch Reel”

---

### `/shop` — Etsy Product Grid
**Intro Copy:**  
> “Nancy Jo’s favorite kitchen finds, handmade gifts, and cozy home moments—all crafted with love.”

**Card Info:**  
- Product image  
- Name + price  
- CTA: “Buy on Etsy”  
- Optional: "Featured" badge

---

### `/about`
**Title:** “Meet Nancy Jo Spear”  
**Bio:**  
> “Hi, I’m Nancy Jo Spear, the st‑st‑stuttering voice behind JoJo’s Life Kitchen—cooking up joyful, practical meals and seasonal vibes from Wilmington, NC.”

---

### `/contact`
**Copy:**  
> “Want to collaborate, invite me to an event, or just say hi?  
Email: nancy@lifekitchenstudios.com”

---

## 🎨 Visual Design Guide

**Inspired by:**  
- MinimalistBaker.com  
- HalfBakedHarvest.com  
- PinchofYum.com

**Colors:**
- Cream: `#FAF5EF`
- Tomato Red: `#FF6A5A`
- Charcoal: `#222222`
- Warm Gray: `#B7B7B7`

**Typography:**
- Headings: `Playfair Display` or script style
- Body: `Inter` or `Lato`

**Animations:**
- Card fade-in on scroll
- Hover zoom + ripple
- "Stutter-style" title animation (Framer Motion)

**Layout:**
- Responsive grid (1–4 columns)
- Sticky CTA on mobile
- Hero video autoplay on homepage

---

## 🧠 Cursor Prompt

```
Create a video content catalog and Etsy shop site using:
- Next.js with Tailwind CSS
- Prisma ORM with Vercel Postgres
- No user logins or newsletter
- Fetch social posts manually or via API (TikTok/IG)
- Fetch Etsy products via Etsy API
- Pages: /, /catalog, /shop, /about, /contact
- Use Framer Motion for card animations
- Include search + filters for /catalog
- Design style: cream/red/charcoal, script font headings, clean card layout
```

---

## ✅ MVP Summary

| Feature                       | Status |
|------------------------------|--------|
| Home Page Hero               | ✅     |
| Reels Catalog Page           | ✅     |
| Etsy Product Page            | ✅     |
| About Page                   | ✅     |
| Contact Page                 | ✅     |
| Vercel DB Schema             | ✅     |
| Responsive Design            | ✅     |
| TikTok/IG API (manual)       | ⚠️     |
| Etsy API                     | ⚠️     |
