# 安装与快速开始

## Tree Shaking（核心特性）

`@colelab/icons-vue` 支持按需引入，避免全量打包，这是本库的重要特性之一。

✅ 推荐（可 Tree Shaking）：

```ts
import { AccountBookOutlined } from '@colelab/icons-vue';
```

❌ 不推荐（可能引入过多图标）：

```ts
import * as Icons from '@colelab/icons-vue';
```

---

## 两种使用方式与安装差异

## 方式 A：直接使用图标组件（推荐，最常用）

安装：

```bash
pnpm add @colelab/icons-vue
```

使用：

```vue
<script setup lang="ts">
import { AccountBookOutlined, AccountBookTwoTone } from '@colelab/icons-vue';
</script>

<template>
  <AccountBookOutlined />
  <AccountBookTwoTone />
</template>
```

说明：
- 这是默认推荐方式
- 对业务同学最友好
- 支持按需引入与 Tree Shaking

## 方式 B：使用通用 `SensoroIcon` + SVG 定义（高级）

安装：

```bash
pnpm add @colelab/icons-vue @colelab/icons-svg
```

使用：

```vue
<script setup lang="ts">
import SensoroIcon from '@colelab/icons-vue';
import AccountBookOutlinedSvg from '@colelab/icons-svg/es/asn/AccountBookOutlined';
</script>

<template>
  <SensoroIcon :icon="AccountBookOutlinedSvg" />
</template>
```

说明：
- 适合二次封装或动态渲染场景
- 同样可实现按图标级别引入

---

## 运行效果（示例）

<script setup lang="ts">
import { AccountBookOutlined, AccountBookTwoTone, setTwoToneColor } from '@colelab/icons-vue';
setTwoToneColor(['#1677ff', '#e6f4ff']);
</script>

<div style="display:flex;gap:16px;align-items:center;">
  <AccountBookOutlined style="font-size: 24px;" />
  <AccountBookTwoTone style="font-size: 24px;" />
</div>
