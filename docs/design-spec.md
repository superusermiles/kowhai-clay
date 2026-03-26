# Kōwhai & Clay — Design Specification

## Design Intent
Create a warm handmade coastal website that blends artisan pottery studio, workshop destination, and café journal. The site should feel tactile, sun-softened, and quietly refined. It should reference Raglan’s sea light and black-sand coast without becoming beachy. The overall mood is clay dust, oat milk foam, timber shelving, linen aprons, salt air, and hand-thrown forms.

## Brand Personality
- Handmade, not rustic cliché.
- Coastal, not tropical.
- Premium, not luxury cold.
- Calm, not sparse.
- Welcoming, not overly cute.

## Visual Identity

### Color Palette
Use the provided warm handmade coastal mood through a restrained but characterful palette.

- **Kōwhai Gold** — `#D8A93A` — primary accent, button fills, highlights
- **Wet Clay** — `#9B6C53` — secondary brand tone, cards, icon fills
- **Sea Glass** — `#7FA7A1` — cool balancing accent, links, dividers, hover moments
- **Drift Sand** — `#E9DCCB` — soft background wash
- **Foam** — `#F8F4EE` — primary page background
- **Basalt** — `#2F2926` — headings, body text, dark sections

### Typography
Use a pairing that feels editorial and tactile.

- **Headings:** `Cormorant Garamond` — elegant, arts-led, organic curves, ideal for poetic brand moments
- **Body/UI:** `Manrope` — clean, modern, readable, keeps the site practical and contemporary

Suggested scale:
- Display: 64/72
- H1: 52/58
- H2: 40/46
- H3: 30/36
- H4: 22/28
- Body large: 18/30
- Body: 16/28
- Small/meta: 13/20

### Design Tokens
- **Max content width:** 1200px
- **Text column width:** 720px
- **Section spacing desktop:** 96px
- **Section spacing tablet:** 72px
- **Section spacing mobile:** 56px
- **Grid gap:** 24px desktop, 16px mobile
- **Card radius:** 24px
- **Button radius:** 999px
- **Input radius:** 18px
- **Image radius:** 28px
- **Shadow soft:** `0 12px 40px rgba(47, 41, 38, 0.08)`
- **Shadow lifted:** `0 20px 60px rgba(47, 41, 38, 0.12)`
- **Border color:** `rgba(47, 41, 38, 0.10)`

## Layout System

### Overall Feel
Airy but layered. The site uses a mix of editorial text blocks, offset image compositions, rounded cards, and full-width atmospheric sections. Shapes should feel hand-placed rather than rigid.

### Navigation
Transparent overlay navigation on the home hero that becomes a Foam solid bar on scroll. Interior pages use a solid top bar. Nav includes logo left, primary page links centered or right, and a pill CTA button for **Book a Workshop**.

### Hero Style
Home uses an asymmetric split hero:
- Left: oversized serif headline, supporting copy, two CTAs.
- Right: stacked photo composition with one large portrait image and one smaller overlapping detail image.
- Background includes a soft Drift Sand wash with a subtle irregular topographic line motif or clay-ring pattern at low opacity.

### Section Layout Variety
- **Home:** editorial intro + card grid + immersive image band + café/workshop split panels
- **Workshops:** alternating image/text sections plus pricing cards
- **Open Studio:** benefits grid with membership card and process timeline
- **Café:** menu preview in magazine-style layout with chef/counter imagery
- **Gallery:** masonry or uneven aspect ratio image grid
- **About:** story timeline and founder/studio imagery
- **Visit:** map/info split plus local cues
- **Contact:** approachable contact panel with FAQ accordion and enquiry form

### Footer
Centered multi-column footer on desktop. Includes logo, short brand line, navigation links, hours snapshot, Instagram prompt, and contact details. On mobile it stacks with centered alignment.

## Components

### Buttons
- Primary: Kōwhai Gold fill, Basalt text, pill shape, slight lift on hover
- Secondary: Basalt outline on Foam, subtle Sea Glass hover border
- Text link: underline animation from left to right

### Cards
Use large radius and warm surfaces. Mix Drift Sand, Foam, and occasional Wet Clay blocks with inverted light text.

### Image Treatment
Photography should be warm, natural light, tactile, low-staged. Avoid overly saturated travel imagery. Use rounded corners and occasional overlapping crops.

### Decorative Elements
- Hand-drawn circular line motifs inspired by thrown clay rings
- Fine divider lines in Sea Glass or translucent Basalt
- Occasional colored blobs behind quote or CTA sections, kept subtle

## Logo Specification

### Logo Concept
A simple icon + wordmark lockup. The icon combines a hand-thrown vessel silhouette with a rising sun/horizon line to suggest sea, kiln warmth, and place. The wordmark uses a refined serif for “Kōwhai & Clay” with optional small caps tagline beneath.

### Logo SVG
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

### Color Variants
- **Primary:** Wet Clay vessel, Kōwhai Gold arc, Basalt wordmark, Sea Glass tagline
- **Reversed:** Foam text and linework on Basalt or Wet Clay background
- **Monochrome:** Entire mark in Basalt or white

### Usage Notes
- Minimum full logo width: 120px
- Minimum icon-only width: 24px
- Clear space: height of vessel icon on all sides
- Do not add gradients, strokes around text, or heavy shadows

## Favicon Specification

### Favicon Concept
A simplified vessel and sun arc from the main logo. The shape is bold enough to read at 16x16.

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 14C24 14 19 19 19 27C19 31.5 20.8 35.2 23.8 38.4C26.1 41 27 43.4 27 47H37C37 43.4 37.9 41 40.2 38.4C43.2 35.2 45 31.5 45 27C45 19 40 14 32 14Z" fill="#D8A93A"/>
  <path d="M21 27C21 20.9 25.9 16 32 16C38.1 16 43 20.9 43 27" stroke="#2F2926" stroke-width="3" stroke-linecap="round"/>
</svg>
```

### Favicon Colors
- Primary shape in Kōwhai Gold
- Arc stroke in Basalt
- Transparent background

## Image Plan
Use cohesive warm natural-light Unsplash imagery with pottery, hands, cups, shelves, food, and coastal atmosphere. Developers can replace final URLs if licensing or art direction changes, but these establish direction and layout.

### Home
- Hero main: `https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=1500&fit=crop`
- Hero detail: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=900&fit=crop`
- Intro/process: `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=1100&fit=crop`
- Workshop feature: `https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&h=1200&fit=crop`
- Café feature: `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=1200&fit=crop`
- Gallery band: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1400&h=800&fit=crop`

### Workshops
- Page hero: `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=900&fit=crop`
- Wheel throwing: `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&h=1100&fit=crop`
- Hand building: `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=1100&fit=crop`
- Group class detail: `https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=900&h=1100&fit=crop`

### Open Studio
- Hero/process: `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=900&fit=crop`
- Tools/shelves: `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&h=1100&fit=crop`
- Maker detail: `https://images.unsplash.com/photo-1503602642458-232111445657?w=900&h=1100&fit=crop`

### Café
- Hero counter: `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=900&fit=crop`
- Coffee detail: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1100&fit=crop`
- Food plating: `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=1100&fit=crop`
- Ceramics on table: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&h=1100&fit=crop`

### Gallery
- Grid 1: `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=1000&fit=crop`
- Grid 2: `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1200&fit=crop`
- Grid 3: `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=900&fit=crop`
- Grid 4: `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=1100&fit=crop`
- Grid 5: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop`
- Grid 6: `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&fit=crop`

### About
- Founder portrait: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=1100&fit=crop`
- Studio interior: `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&h=1100&fit=crop`
- Detail shot: `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=1100&fit=crop`

### Visit
- Exterior/arrival: `https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop`
- Café seating: `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1100&fit=crop`
- Local mood: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=1100&fit=crop`

### Contact
- Warm interior: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&h=1100&fit=crop`
- Hands/detail: `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&h=1100&fit=crop`
- Counter scene: `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1100&fit=crop`

## Responsive Notes
- Collapse nav into hamburger at 980px.
- Home hero stack becomes single column on mobile with image below text.
- Overlapping image compositions simplify into standard vertical stack below 768px.
- Gallery masonry becomes 2 columns on tablet and 1 column on narrow mobile.
- Workshop cards remain swipeable or stacked on mobile.
- Footer columns stack with centered text and larger tap targets.

## Motion and Micro-interactions
- Soft fade-up on section reveal.
- Buttons lift by 2px on hover.
- Image cards scale to `1.02` on hover with shadow increase.
- Underlines animate for links.
- FAQ accordion uses smooth height transition.
- Sticky nav background transitions from transparent to Foam with subtle blur.
