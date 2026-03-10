# SVG Design Spec (Design ↔ Engineering Contract)

## Base Rules

1. `viewBox` must be `0 0 1024 1024`
2. Keep about **64px** safe bleeding space
3. Use semantic English camelCase naming (aligned with component names)
4. Assign each icon to one theme: `outlined / filled / twotone / purely`

## Visual Consistency

- Keep stroke width, corners, and endpoints consistent
- Avoid multiple styles for the same semantic icon
- For two-tone icons, define clear primary/secondary layers; do not hard-code status colors in raw SVG

## Engineering Constraints

- Place SVG files under `packages/core/svg/<theme>/`
- After changes, run:

```bash
pnpm generate:core
pnpm build:core
pnpm generate:vue
pnpm build:vue
```

- Verify in docs page: `/en/components/icon-categories`

## Not Recommended

- ❌ Non-1024 canvas
- ❌ Unknown-source or unnormalized SVG files
- ❌ Naming mismatch with semantics (hurts searchability and API readability)
