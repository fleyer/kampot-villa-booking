# Spec 01: Clean Slate

## Goal
Remove all Nuxt starter template boilerplate so the app renders a blank page.

## Changes

| File | Action |
|------|--------|
| `app/app.vue` | Keep `<UApp>` + `<NuxtPage />` only. Remove header, footer, separator. Reset title/description to project name. |
| `app/pages/index.vue` | Replace all content with an empty `<div>`. |
| `app/components/TemplateMenu.vue` | Delete. |
| `app/components/AppLogo.vue` | Delete. |

## Expected result
Navigating to `/` renders a blank white (or dark) page with no visible content.

## Out of scope
- `nuxt.config.ts`
- `app.config.ts`
- `app/assets/css/main.css`
- All tooling files
