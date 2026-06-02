# Spec 11: ContactSection — Contact Options Layout

Supersedes the stub in spec 07.

## Files
- `app/components/ContactSection.vue`
- `app/config/contact.ts` ← new, owns all contact data

## Goal
Display the different ways guests can reach the villa. Each contact channel is a card with an icon, a label, a description, and an action link. Adding or removing a channel requires only editing the config file.

## Configuration
Contact options live in `app/config/contact.ts` as a `contactOptions` array. Each entry has:
- `icon` — Nuxt UI icon name (e.g. `"i-lucide-phone"`)
- `label` — short channel name (e.g. "WhatsApp")
- `description` — one line of context (e.g. "Fastest way to reach us")
- `value` — display value (e.g. phone number, email address, handle)
- `href` — link target (tel:, mailto:, https:// as appropriate)
- `cta` — link label (e.g. "Send a message")

Initial channels (4):
1. **WhatsApp** — fastest response, link to wa.me
2. **Email** — for detailed enquiries, mailto link
3. **Phone** — direct call, tel link
4. **Instagram** — social presence, external link

## Layout

### Section
- `UPageSection` with `id="contact"` and `:ui="sectionUi"`.
- Section heading centered: "Get in Touch".
- `min-h-screen`, enough vertical padding.
- Keep the `border-t border-stone-100` from the stub.

### Cards grid
- Responsive grid: 1 column on mobile, 2 on `md:`, up to 4 on `xl:`.
- Each grid cell uses `flex justify-center` so the card is centered within its cell.
- Each card has `max-w-[250px] w-full`.

### Card
- White background, `rounded-2xl`, `border border-stone-200`, `p-8`.
- Top: icon rendered via `<UIcon>`, large size, amber tint (`text-amber-500`).
- Below: `label` as heading, `description` in muted stone, `value` in a slightly larger weight.
- Bottom (pinned): `UButton` linking to `href`, `color="primary"`, `variant="ghost"`, full-width.

## Style
- Follows the global amber/stone palette from `app.config.ts`.
- No heavy shadows — border + whitespace only.
- Icons provide visual variety; no featured/highlighted card logic needed.

## Out of scope
- Contact form / server-side sending.
- Map embed.
- Opening hours.
