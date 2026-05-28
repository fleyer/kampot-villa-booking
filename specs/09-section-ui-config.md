# Spec 09: Section UI Config

## Goal
Define a shared `ui` prop object passed to every `UPageSection` so all sections render full-width with no default margins or container padding added by Nuxt UI.

## Problem
`UPageSection` applies default container constraints and vertical padding that push content to the center of the page. Each section needs the same override so spacing is controlled entirely by the section component itself.

## Config

A single exported constant lives in `app/config/ui.ts`:

```
sectionUi — the ui prop object to spread onto every UPageSection
```

It overrides these Nuxt UI slots:
- `root` — remove vertical padding
- `container` — remove max-width constraint and horizontal padding
- `wrapper` — remove any inner wrapper spacing

## Usage
Every section component (`GallerySection`, `BookingSection`, `ContactSection`) passes `:ui="sectionUi"` to its `UPageSection`. Sections own their own internal spacing from that point on.

## Notes
- `app/config/ui.ts` is the single place to tune these defaults. Changing it affects all sections at once.
- Sections that need to deviate (e.g. a section with a narrow reading column) can spread `sectionUi` and override individual slots locally.
