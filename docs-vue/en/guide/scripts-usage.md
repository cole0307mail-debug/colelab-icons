# Scripts Usage

Use this page as the command reference for local development, build, test, and release.

## Recommended default flow

```bash
pnpm generate
pnpm build
pnpm test
```

## Release flow

```bash
pnpm release:ship
```

`release:ship` runs:
1. `release:check`
2. `release:prepare`
3. `release:publish`


---


## GitHub Workflows (Important)

### `deploy.yml` (Docs Deploy)

Purpose: deploy documentation to GitHub Pages.

- Trigger: push on `master/main`
- Main commands: `pnpm generate && pnpm build && pnpm site`
- Outputs:
  - `/react` (dumi docs)
  - `/vue` (vitepress docs)

### `release.yml` (npm Publish)

Purpose: publish npm packages (`@colelab/icons-*`).

- Trigger: manual (`workflow_dispatch`)
- Auth: OIDC Trusted Publishing (no long-lived `NPM_TOKEN`)
- Main commands: `release:check` -> optional `release:version` -> `release:publish`

### TL;DR

- `deploy.yml` = **docs**
- `release.yml` = **packages**
