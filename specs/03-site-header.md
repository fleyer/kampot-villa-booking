# Spec 03: SiteHeader

## File
`app/components/SiteHeader.vue`

## Behavior
- Fixed/sticky at the top of the viewport.
- Transparent when the page is at the top (over the hero/gallery).
- Transitions to solid white background on scroll.

## Layout
- Left side: villa name as a text logo, wrapped in `NuxtLink` pointing to `#`.
- Right side: navigation links — Home, Booking, Contact.
  - Each link uses `NuxtLink :to="{ hash }"` to trigger `scrollBehavior`.
- Mobile: navigation collapses into a hamburger menu.

## Notes
- Header height should be accounted for in `scrollBehavior` offset (80px).
- Transparent → white transition should be smooth (CSS transition on background-color).
