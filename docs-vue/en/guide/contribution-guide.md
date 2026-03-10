# Development & Contribution

> This page mirrors the React contribution guide and adds Vue/React command strategy.

## Command Layers

### A. Full Generate (Recommended for Sync)

```bash
pnpm generate
```

- Triggers `generate` in all workspace packages
- Recommended daily default to keep `icons-svg / icons-react / icons-vue` aligned

### B. Vue-only Generate

```bash
pnpm generate:vue
```

### C. React-only Generate

```bash
pnpm generate:react
```

### D. Core-only Generate

```bash
pnpm generate:core
```

Use this first when SVG source files under `packages/core/svg` are changed.

---

## Build Layers

### Full Build (Recommended)

```bash
pnpm build
```

Current chain: `core -> react -> vue`

### Package-only Build

```bash
pnpm build:core
pnpm build:react
pnpm build:vue
```

---

## Decision Matrix

1. **Only Vue docs/style changed**
   - `pnpm generate:vue`
   - `pnpm build:vue`

2. **Only React templates changed**
   - `pnpm generate:react`
   - `pnpm build:react`

3. **SVG source changed (core)**
   - Recommended: `pnpm generate && pnpm build`

---

## Site Build Commands

- `pnpm site:react`: build dumi docs
- `pnpm site:vue`: build VitePress docs
- `pnpm site`: build both

---

## `pnpm generate` Core Pipeline

1. Core (`icons-svg`): scan SVG -> optimize -> generate ASN/entries
2. React (`icons-react`): generate React components from ASN
3. Vue (`icons-vue`): generate Vue components from ASN

---

## Architecture Principle

**Decouple icon data layer from framework adapter layers.**

- `@colelab/icons-svg`: source of truth
- `@colelab/icons-react` / `@colelab/icons-vue`: generated adapters

---

## Pipeline Diagram

```mermaid
flowchart LR
  A[packages/core/svg<br/>raw SVG assets] --> B[generate:core<br/>SVGO + ASN generation]
  B --> C[@colelab/icons-svg]
  C --> D[generate:react<br/>generate React components]
  C --> E[generate:vue<br/>generate Vue components]
  D --> F[@colelab/icons-react]
  E --> G[@colelab/icons-vue]
  F --> H[site:react / dumi]
  G --> I[site:vue / vitepress]
```
