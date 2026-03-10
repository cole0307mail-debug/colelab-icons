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
