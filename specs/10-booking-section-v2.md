# Spec 10: BookingSection — Options Layout

Supersedes the stub in spec 06.

## File
`app/components/BookingSection.vue`

## Goal
Display all booking options clearly, side by side, so the user can compare and choose at a glance.

## Configuration
Booking options live in `app/config/villa.ts` as a `bookingOptions` array so copy can be updated without touching the component. Each option has:
- `name` — short label (e.g. "Private Room")
- `price` — display price (e.g. "From $120 / night")
- `description` — one sentence on what's included
- `cta` — button label (e.g. "Book now")
- `href` — link target (`"#"` for now)
- `featured` — optional boolean, highlights the card

Options (3):
1. **Private Room** — rent a single room, ideal for solo travellers or couples
2. **Group Rent** — rent the full villa for a group
3. **VIP Rent** — full villa with premium services included

## Layout

### Section
- `UPageSection` with `id="booking"` and `:ui="sectionUi"`.
- Section heading centered above the cards: "Book Your Stay".
- `min-h-screen`, enough vertical padding to breathe.

### Cards grid
- Cards sit in a row: `flex` with `gap`, centered horizontally and vertically (`justify-center items-center`).
- On mobile: stack vertically; on desktop (`lg:`): side by side.
- Each card is equal width.

### Card
- White background, `rounded-2xl`, `border border-stone-200`.
- Generous internal padding (`p-8`).
- Top: option `name` as heading.
- Below: `duration` and `price` displayed prominently.
- Below: `description` in muted text.
- Bottom (pinned): CTA `UButton` full-width, `color="primary"`, `variant="solid"`, linking to `href`.

## Style
- Follows the global amber/stone palette from `app.config.ts`.
- No heavy shadows — border + whitespace only (consistent with spec 02).
- The `featured: true` card (VIP) gets `border-amber-400` instead of `border-stone-200`.

## Out of scope
- Actual booking flow.
- Calendar / availability logic.
- Payment integration.
