# Installation & Quick Start

## Tree Shaking (Key Feature)

`@colelab/icons-vue` supports on-demand imports to avoid full bundle inclusion.

✅ Recommended (tree-shaking friendly):

```ts
import { AccountBookOutlined } from '@colelab/icons-vue';
```

❌ Not recommended (may pull too many icons):

```ts
import * as Icons from '@colelab/icons-vue';
```

---

## Two Usage Modes & Package Requirements

## Mode A: Direct Icon Components (Recommended)

Install:

```bash
pnpm add @colelab/icons-vue
```

Usage:

```vue
<script setup lang="ts">
import { AccountBookOutlined, AccountBookTwoTone } from '@colelab/icons-vue';
</script>

<template>
  <AccountBookOutlined />
  <AccountBookTwoTone />
</template>
```

Notes:
- Default and most common approach
- Best developer ergonomics
- Supports on-demand import and tree shaking

## Mode B: Generic `SensoroIcon` + SVG ASN (Advanced)

Install:

```bash
pnpm add @colelab/icons-vue @colelab/icons-svg
```

Usage:

```vue
<script setup lang="ts">
import SensoroIcon from '@colelab/icons-vue';
import AccountBookOutlinedSvg from '@colelab/icons-svg/es/asn/AccountBookOutlined';
</script>

<template>
  <SensoroIcon :icon="AccountBookOutlinedSvg" />
</template>
```

Notes:
- Useful for advanced wrapping/dynamic rendering scenarios
- Still tree-shaking friendly at icon-definition level
