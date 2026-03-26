# Kōwhai & Clay — Development Handoff

Build a multi-page marketing site for an artisan pottery studio and café in Raglan, Waikato. The site should feel warm, handmade, and coastal. Not SaaS. Not generic hospitality. Think tactile editorial design with clear booking paths.

## Repo
- GitHub: `https://github.com/superusermiles/kowhai-clay`
- Local path: `/home/bob/workspace/kowhai-clay`

## Tech Direction
Use a modern React-based stack already standard in the studio. Prioritize fast loading, responsive behavior, and clean component reuse. Use optimized remote image loading for Unsplash assets.

## Tailwind Tokens
```ts
colors: {
  kowhai: '#D8A93A',
  clay: '#9B6C53',
  seaglass: '#7FA7A1',
  sand: '#E9DCCB',
  foam: '#F8F4EE',
  basalt: '#2F2926',
},
fontFamily: {
  heading: ['Cormorant Garamond', 'serif'],
  body: ['Manrope', 'sans-serif'],
},
borderRadius: {
  sm: '18px',
  md: '24px',
  lg: '28px',
  full: '999px',
},
boxShadow: {
  soft: '0 12px 40px rgba(47, 41, 38, 0.08)',
  lift: '0 20px 60px rgba(47, 41, 38, 0.12)',
}
```

## Global UI Rules
- Page background: `foam`
- Body text: `basalt/85`
- Max width: `1200px`
- Standard section padding: `py-24 md:py-20 py-14`
- Primary CTA: kowhai background, basalt text, pill radius
- Secondary CTA: transparent/foam with basalt border
- Cards: use `sand` or white surfaces with large radius
- Reserve dark `basalt` sections for contrast bands and footer

## Navigation
### Desktop
- Transparent over hero on Home.
- Solid Foam nav on interior pages.
- Left: logo.
- Middle/right: Home, Workshops, Open Studio, Café, Gallery, About, Visit, Contact.
- Right CTA button: `Book a Workshop`.

### Mobile
- Hamburger menu.
- Full-screen or drawer navigation with large tap targets.
- Keep CTA visible in menu.

## Core Components

### 1. `SiteHeader`
**Props:**
- `transparent?: boolean`
- `currentPath?: string`

Behavior:
- Transparent over home hero.
- Adds blurred Foam background on scroll.
- Active nav item gets underline or Sea Glass accent.

### 2. `SiteFooter`
**Props:** none

Content:
- Logo
- Tagline
- Quick links
- Visit snapshot: hours, address
- Contact links
- Instagram prompt

### 3. `HeroSplit`
**Props:**
- `eyebrow`
- `title`
- `text`
- `primaryCta`
- `secondaryCta`
- `imageMain`
- `imageSecondary`

Layout:
- 2-column asymmetric split
- secondary image overlaps main image
- text column vertically centered

### 4. `SectionIntro`
**Props:**
- `eyebrow`
- `title`
- `body`
- `align?: 'left' | 'center'`

### 5. `FeatureCardGrid`
**Props:**
- `items: { title, text, icon, href }[]`

Use for:
- Home feature links
- Open Studio benefits
- Visit practical info

### 6. `ImageTextSplit`
**Props:**
- `title`
- `body`
- `image`
- `reverse?: boolean`
- `cta?`

Use alternating layout on Workshops, Café, About.

### 7. `PricingCard`
**Props:**
- `title`
- `price`
- `duration`
- `description`
- `features: string[]`
- `cta`
- `highlighted?: boolean`

### 8. `TimelineSteps`
**Props:**
- `steps: { title, text }[]`

Use for:
- Open Studio process
- About story timeline

### 9. `GalleryMasonry`
**Props:**
- `images: { src, alt, span? }[]`

### 10. `FaqAccordion`
**Props:**
- `items: { question, answer }[]`

### 11. `ContactForm`
**Props:** none
Fields:
- name
- email
- phone
- enquiry type
- message

### 12. `Logo`
**Props:**
- `variant?: 'default' | 'reversed' | 'mark'`
- `className?`

### 13. `Favicon`
Export SVG as static asset.

## Page-by-Page Build

## Home
### Sections
1. **HeroSplit**
   - Eyebrow: `Artisan Pottery Studio & Café · Raglan, Waikato`
   - Title: `Shaped by the sea. Made by hand.`
   - Text: Intro to pottery, workshops, café, and local atmosphere.
   - Primary CTA: `Book a Workshop`
   - Secondary CTA: `Visit the Café`
   - Images:
     - Main: `https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=1500&fit=crop`
     - Secondary: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=900&fit=crop`

2. **SectionIntro + FeatureCardGrid**
   - 3 cards: Workshops, Open Studio, Café
   - Supporting image: `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=1100&fit=crop`

3. **Workshop Feature Split**
   - Image: `https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&h=1200&fit=crop`
   - Copy around beginner classes, wheel sessions, glazing, giftable experiences

4. **Café Feature Split**
   - Image: `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=1200&fit=crop`
   - Copy around cabinet food, espresso, handmade vessels

5. **Gallery Band / Full-width image + quote**
   - Image: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1400&h=800&fit=crop`
   - Quote overlay or adjacent text block

6. **Visit Snapshot + CTA**
   - Address, hours, quick directions

## Workshops
### Sections
1. Hero intro with page image
   - `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=900&fit=crop`
2. Intro text on class philosophy
3. Alternating workshop types:
   - Wheel Throwing — `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&h=1100&fit=crop`
   - Hand Building — `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=1100&fit=crop`
   - Group/Private Sessions — `https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=900&h=1100&fit=crop`
4. Pricing cards for sample offerings:
   - First Wheel Session — NZ$95 — 2 hours
   - Hand-Build & Glaze — NZ$85 — 2 hours
   - Weekend Series — NZ$240 — 3 sessions
5. FAQ accordion
6. CTA strip

## Open Studio
### Sections
1. Hero with intro image
   - `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=900&fit=crop`
2. Benefits grid
3. Shelf/tools image section
   - `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&h=1100&fit=crop`
4. How it works timeline
5. Membership card
6. Maker detail image
   - `https://images.unsplash.com/photo-1503602642458-232111445657?w=900&h=1100&fit=crop`
7. Enquiry CTA

Suggested membership details:
- Casual studio pass — NZ$35
- 10-visit pass — NZ$280
- Monthly membership — NZ$185

## Café
### Sections
1. Hero with counter image
   - `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=900&fit=crop`
2. Café story / seasonal menu intro
3. Magazine-style 2-column menu highlight with coffee detail
   - `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1100&fit=crop`
4. Food section with plated dish image
   - `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=1100&fit=crop`
5. Handmade tableware section with ceramics image
   - `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&h=1100&fit=crop`
6. Hours + dietary note + CTA to visit

Sample menu snippets:
- Flat White — NZ$5.50
- Batch Brew — NZ$5.00
- Lemon Thyme Scone — NZ$7.50
- Roasted Beet Toast — NZ$18
- Seasonal Tartine — NZ$19

## Gallery
### Layout
Masonry gallery of pottery, process, café, shelves, and atmosphere.

Images:
- `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=1000&fit=crop`
- `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1200&fit=crop`
- `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=900&fit=crop`
- `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=1100&fit=crop`
- `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop`
- `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&fit=crop`

Include lightbox or simple modal if fast to implement.

## About
### Sections
1. Intro story
2. Founder portrait
   - `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=1100&fit=crop`
3. Studio interior
   - `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&h=1100&fit=crop`
4. Story timeline: sea, clay, community, café
5. Values grid: craft, hospitality, place, sustainability
6. Detail image
   - `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=1100&fit=crop`

Suggested founder story:
- Founded by Maia Ritchie, a ceramic artist who returned to Raglan after years in Tāmaki Makaurau design studios.
- The studio began as a small wheel room and grew into a combined making and gathering space.

## Visit
### Sections
1. Hero / practical intro
   - `https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop`
2. Address and map split
3. Hours card
4. What to expect cards
5. Café seating image
   - `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1100&fit=crop`
6. Raglan mood/local area image
   - `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=1100&fit=crop`

Suggested details:
- Address: 18 Bow Street, Raglan 3225
- Pottery Studio Hours: Wed–Sun, 10am–4pm
- Café Hours: Daily, 7:30am–2:30pm
- Parking: limited street parking, short walk to waterfront

## Contact
### Sections
1. Contact intro
2. Form + details split
3. FAQ accordion
4. Interior image
   - `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&h=1100&fit=crop`
5. Process detail image
   - `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&h=1100&fit=crop`
6. Counter image
   - `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1100&fit=crop`

Suggested contact info:
- Email: `hello@kowhaiandclay.co.nz`
- Phone: `07 825 4126`
- Instagram: `@kowhaiandclay`

## Responsive Behavior
- At `lg` and below, split layouts collapse to single column.
- Overlap images only on desktop/tablet.
- Keep body copy line length comfortable.
- Use 2-column card grids on tablet, 1-column on mobile.
- Gallery becomes simple vertical rhythm on small screens.
- Sticky CTA can be considered on mobile for workshop booking.

## Hover and Motion
- CTA buttons lift slightly and brighten.
- Cards gain stronger shadow on hover.
- Large images scale very subtly.
- Nav links animate underline in Sea Glass.
- Accordion opens with smooth transition.

## Logo SVG
Copy-paste directly:
```svg
<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0 4)">
    <path d="M20 4C14 4 10 8 10 14C10 17.5 11.4 20.5 13.5 22.8C15.8 25.4 17 28.2 17 31.5V34H23V31.5C23 28.2 24.2 25.4 26.5 22.8C28.6 20.5 30 17.5 30 14C30 8 26 4 20 4Z" fill="#9B6C53"/>
    <path d="M12 14C12 9.6 15.6 6 20 6C24.4 6 28 9.6 28 14" stroke="#D8A93A" stroke-width="2" stroke-linecap="round"/>
    <path d="M11 36H29" stroke="#2F2926" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <text x="42" y="24" fill="#2F2926" font-family="Cormorant Garamond, serif" font-size="24" font-weight="600">Kōwhai &amp; Clay</text>
  <text x="43" y="38" fill="#7FA7A1" font-family="Manrope, sans-serif" font-size="8" font-weight="600" letter-spacing="0.18em">SHAPED BY THE SEA</text>
</svg>
```

## Favicon SVG
Copy-paste directly:
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 14C24 14 19 19 19 27C19 31.5 20.8 35.2 23.8 38.4C26.1 41 27 43.4 27 47H37C37 43.4 37.9 41 40.2 38.4C43.2 35.2 45 31.5 45 27C45 19 40 14 32 14Z" fill="#D8A93A"/>
  <path d="M21 27C21 20.9 25.9 16 32 16C38.1 16 43 20.9 43 27" stroke="#2F2926" stroke-width="3" stroke-linecap="round"/>
</svg>
```

## Build Notes
- Use semantic page sections.
- Keep accessibility contrast strong, especially on kowhai buttons.
- Use real alt text tied to pottery/café content.
- Avoid generic stock icon overload.
- The final build should feel curated and artisanal, with enough utility for bookings and visits.
