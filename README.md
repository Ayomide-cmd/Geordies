# Geordie's Salon — Next.js Website

A full Next.js 14 website for Geordie's Salon, Lagos.




##  Quick Start (3 commands)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---


##  Adding Your Photos

Drop images into `public/images/` then update the placeholder comments in each page:

| Image | File | Used in |
|---|---|---|
| Hero background | `public/images/hero.jpg` | `app/page.tsx` |
| About / Founder | `public/images/about.jpg` | `app/page.tsx`, `app/about/page.tsx` |
| Team - Amaka | `public/images/team/amaka.jpg` | Both pages |
| Team - Kunle | `public/images/team/kunle.jpg` | Both pages |
| Team - Fatima | `public/images/team/fatima.jpg` | Both pages |
| Team - Tunde | `public/images/team/tunde.jpg` | Both pages |

For hero background, find this comment in `app/page.tsx` and add:
```tsx
// Inside the hero section background div, add:
style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', ... }}
```

For team/about photos, replace the placeholder `<span>` with Next.js Image:
```tsx
import Image from 'next/image'
// Then:
<Image src="/images/team/amaka.jpg" alt="Amaka Osei" fill style={{objectFit:'cover'}} />
```

---

## 🗺️ Google Maps

In `app/contact/page.tsx` and `app/page.tsx`, find the map placeholder comment and replace with your embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" height="100%"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
/>
```

---

## ✏️ Update Your Details

Search and replace across the project:
- `+234 801 234 5678` → your real number
- `hello@geordies.ng` → your email
- `14 Bayo Kuku Road, Ikoyi` → your address
- `https://wa.me/2348012345678` → your WhatsApp link
- `@geordies.ng` → your Instagram handle

---

## 🎨 Customise Brand Colours

Open `app/globals.css` and edit the CSS variables:
```css
:root {
  --gold:    #c9a84c;   /* Brand accent — change this first */
  --black:   #0d0d0d;   /* Background */
  --cream:   #f5f0e8;   /* Text colour */
}
```

---

## 📦 Deploy to Vercel (free, recommended)

```bash
npm install -g vercel
vercel
```
Or drag the folder to vercel.com — it auto-detects Next.js.

## Deploy to Netlify
```bash
npm run build
# Upload the .next folder via Netlify dashboard
```

---

## 💳 Connect a Real Booking System

Replace the booking form `onSubmit` in `app/booking/page.tsx` with:

**Option A — WhatsApp redirect**
```ts
const msg = encodeURIComponent(`New booking request from ${name}`)
window.open(`https://wa.me/2348012345678?text=${msg}`, '_blank')
```

**Option B — Calendly embed**
```tsx
<iframe src="https://calendly.com/YOUR_LINK" width="100%" height="600px" />
```

**Option C — Email via Resend / Nodemailer**
Create `app/api/booking/route.ts` and POST to it from the form.

---

Built with Next.js 14 App Router · TypeScript · No UI framework dependency
