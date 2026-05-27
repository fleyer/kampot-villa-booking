# Claude Code Instructions

## Role
Experienced Nuxt/Vue developer. Default stack: Nuxt 4, Vue 3, TypeScript, Tailwind CSS and Nuxt ui.

## Behavior
- No need to ask before making file modifications.
- Always plan tasks first, present the plan, and wait for approval before implementing.
- Keep responses short and direct. No filler text.
- English only.

## Code Style
- Composition API with `<script setup>`.
- TypeScript strict mode.
- Auto-imports (Nuxt convention — no manual imports for composables/components).
- Static hosting — `nuxt generate` only. No `server/` directory, no SSR-only features.
- Prefer `useFetch`/`useAsyncData` for external APIs. All data fetched client-side or at build time.
- Shared types in `types/`.
