# Spec 02: Homepage

## Goal
Build the homepage for a luxury villa rental in Cambodia (Koh Rong Sanloem).
Clean, minimal aesthetic. Easy to restyle via a single config file.

## Configuration
All copy lives in `app/config/villa.ts` so it can be changed without touching components.

```ts
export const villa = {
  name: 'Villa Serenity',
  tagline: 'Your private retreat on Koh Rong Sanloem',
  location: 'Koh Rong Sanloem, Cambodia'
}
```

## Pages & Routes

### `/` — Home (`app/pages/index.vue`)

Page composes dedicated section components top to bottom:

```
<SiteHeader />
<GallerySection />
<BookingSection />
<ContactSection />
<footer>
```

---

### Components

#### `SiteHeader` (`app/components/SiteHeader.vue`)
- Fixed/sticky, transparent over hero → solid white on scroll
- Left: villa name (text logo, `NuxtLink` to `#`)
- Right: nav — Home, Booking, Contact using `NuxtLink :to="{ hash }"` (triggers `scrollBehavior`)
- Mobile: hamburger menu

#### `GallerySection` (`app/components/GallerySection.vue`)
- `UPageSection` with `id="gallery"`
- Contains `GalleryAccordion`

#### `GalleryAccordion` (`app/components/GalleryAccordion.vue`)
- Horizontal accordion: 5 panels side by side, full viewport height
- Each panel = a villa photo (placeholder from `picsum.photos`)
- Default: equal narrow width; hover → panel expands, others compress
- Smooth CSS transition (300ms ease)
- Expanded panel shows label (Pool, Bedroom, Garden, Living, Beach)

#### `BookingSection` (`app/components/BookingSection.vue`)
- `UPageSection` with `id="booking"`
- Stub: placeholder text, `min-h-screen`

#### `ContactSection` (`app/components/ContactSection.vue`)
- `UPageSection` with `id="contact"`
- Stub: placeholder text, `min-h-screen`

---

### Footer (`app/pages/index.vue`)
- Centered: villa name + © year
- Links: Home · Booking · Contact — all `NuxtLink :to="{ hash }"` for smooth scroll

---

## Style
- Color palette: white background, `stone` neutrals, `amber` accent
- Font: system serif for headings, sans for body (via Tailwind)
- No heavy shadows — thin borders and whitespace instead
- `app.config.ts`: primary → `amber`, neutral → `stone`
- Smooth scrolling: `app/router.options.ts` `scrollBehavior` with 80px offset for sticky header
- All anchor navigation uses `NuxtLink :to="{ hash }"` — never plain `<a href="#">`

## Out of scope
- Booking form logic
- Contact form logic
- Real images
- Mobile accordion behavior (desktop-first for now)
