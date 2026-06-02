# Spec 13: Theme Refinement

## Files
- `app/assets/css/main.css` — register custom brand color
- `app/app.config.ts` — switch primary from `amber` to the custom color
- `app/components/BookingSection.vue` — card style: border → shadow
- `app/components/ContactSection.vue` — card style: border → shadow; remove section border-t
- `app/components/AppFooter.vue` — remove border-t (or keep — see note below)

## Goals
1. Replace the amber/orange accent with `#009E60` throughout the UI.
2. Remove visible borders between sections.
3. Replace card borders with shadows on BookingSection and ContactSection.

---

## 1. Custom brand color

Nuxt UI v3 resolves `primary` to a Tailwind color name. To use an arbitrary hex we define
a custom palette in the CSS layer and register it as `primary`.

In `main.css`, add a custom color scale under `@theme static`:

```css
--color-brand-50:  #e6f8ef;
--color-brand-100: #c0efd7;
--color-brand-200: #8adcb6;
--color-brand-300: #4dc990;
--color-brand-400: #1eb86e;
--color-brand-500: #009E60;   /* base */
--color-brand-600: #008a53;
--color-brand-700: #007345;
--color-brand-800: #005c37;
--color-brand-900: #004528;
--color-brand-950: #002d1a;
```

In `app.config.ts`, change `primary` from `'amber'` to `'brand'`.

---

## 2. Section borders

Remove `border-t border-stone-*` from:
- `ContactSection.vue` (currently `border-t border-stone-100` on `UPageSection`)
- `AppFooter.vue` (currently `border-t border-stone-200`) — keep this one, it's a
  structural separator between content and footer, not a section divider.

---

## 3. Card shadows

**BookingSection cards** — replace:
```
border border-stone-200
```
with:
```
shadow-md
```
Keep `border-amber-400` → `border-brand-400` on the featured card (VIP), as it still
serves as a visual highlight, not a structural separator. Actually, replace the featured
highlight with `ring-2 ring-brand-500` instead of a border, for consistency.

**ContactSection cards** — replace:
```
border border-stone-200
```
with:
```
shadow-md
```

---

## Style notes
- All `text-amber-*` and `text-amber-500` references in components become `text-primary`
  (Nuxt UI token) so they follow the primary color automatically.
- `UButton color="primary"` already inherits the new color from `app.config.ts` — no
  component change needed for buttons.
- No new colours outside `brand`/`stone`/`white`.
