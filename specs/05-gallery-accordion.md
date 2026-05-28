# Spec 05: GalleryAccordion

## File
`app/components/GalleryAccordion.vue`

## Behavior
- Horizontal accordion with 5 panels arranged side by side.
- Full viewport height.
- Default state: all panels at equal narrow width.
- On hover: the hovered panel expands, all others compress proportionally.
- Transition: smooth CSS transition at 300ms ease.
- Expanded panel displays a label overlay.

## Panels (in order)
1. Pool
2. Bedroom
3. Garden
4. Living
5. Beach

## Images
- Placeholder images from `picsum.photos` (one per panel).

## Notes
- Desktop-first. Mobile behavior is out of scope.
- Interaction is CSS-only (`:hover` on each panel, no JavaScript required).
- Labels can be hidden or subtle in the collapsed state; clearly visible when expanded.
