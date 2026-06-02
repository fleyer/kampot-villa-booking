# Spec 12: Footer v2 — Component extraction + portfolio credit

Supersedes the inline footer in spec 08.

## Files
- `app/components/AppFooter.vue` ← new dedicated component
- `app/config/credits.ts` ← new, owns the creator identity
- `app/pages/index.vue` ← replace inline footer with `<AppFooter />`

## Goal
Extract the footer into its own component, keep the existing villa info and nav links,
and add a clearly worded attribution line linking to the creator's portfolio.
The creator's identity is fully configurable without touching the component.

## Configuration
Creator identity lives in `app/config/credits.ts` as a `credits` object:
- `name` — display name (e.g. "Romain Manchado")
- `url` — portfolio URL
- `label` — full attribution sentence, interpolated at render time
  (e.g. `"Designed & built by {name}"` — component replaces `{name}` with a link)

## Layout

### Top row
- Villa name + copyright year, centered: `Villa Serenity · © 2026`
- Same style as the current inline footer.

### Nav row
- Same three links as today: Home · Booking · Contact.
- `NuxtLink :to="{ hash }"` for smooth scroll — never plain `<a>`.

### Attribution row
- Below the nav, visually lighter (smaller text, more muted).
- Renders the `credits.label` sentence with `credits.name` as a clickable link to `credits.url`.
- Link opens in a new tab (`target="_blank"`), styled to blend with the muted text
  but with a subtle hover underline.
- Example output: `Designed & built by Romain Manchado`

## Style
- `border-t border-stone-200`, `py-8`, `text-center` — matches the current footer.
- Attribution row: `text-xs text-stone-400`, name link `hover:text-stone-600 underline-offset-2 hover:underline`.
- No new colours outside the amber/stone palette.

## Out of scope
- Social icons in the footer (already handled by ContactSection).
- Multi-column footer layout.
- Cookie / legal links.
