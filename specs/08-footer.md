# Spec 08: Footer

## File
Inline in `app/pages/index.vue` (not a dedicated component).

## Layout
- Centered content.
- Villa name + copyright year (e.g. "Villa Serenity © 2026").
- Navigation links: Home · Booking · Contact.
  - Each uses `NuxtLink :to="{ hash }"` for smooth scroll.

## Notes
- Never use plain `<a href="#">` — always `NuxtLink :to="{ hash }"`.
