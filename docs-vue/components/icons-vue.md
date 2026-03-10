# 图标总览（Vue）

> 本页聚焦：颜色设置、组件参数、TwoTone 生效范围。

<script setup lang="ts">
import {
  AccountBookOutlined,
  AccountBookFilled,
  AccountBookTwoTone,
  LoadingOutlined,
  SensoroIcon,
  setTwoToneColor,
  getTwoToneColor,
} from '@colelab/icons-vue';
import AccountBookOutlinedSvg from '@colelab/icons-svg/es/asn/AccountBookOutlined';

// 演示：设置全局 TwoTone 主题色
setTwoToneColor(['#1677ff', '#e6f4ff']);
const currentTwoTone = getTwoToneColor();
</script>

## 基础展示

<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;align-items:center;">
  <div style="text-align:center">
    <AccountBookOutlined style="font-size:28px" />
    <div style="font-size:12px;margin-top:8px">AccountBookOutlined</div>
  </div>
  <div style="text-align:center">
    <AccountBookFilled style="font-size:28px" />
    <div style="font-size:12px;margin-top:8px">AccountBookFilled</div>
  </div>
  <div style="text-align:center">
    <AccountBookTwoTone style="font-size:28px" />
    <div style="font-size:12px;margin-top:8px">AccountBookTwoTone</div>
  </div>
  <div style="text-align:center">
    <LoadingOutlined :spin="true" style="font-size:28px" />
    <div style="font-size:12px;margin-top:8px">LoadingOutlined (spin)</div>
  </div>
</div>

::: details 查看源码（与上方 4 个图标对应）
```vue
<script setup lang="ts">
import {
  AccountBookOutlined,
  AccountBookFilled,
  AccountBookTwoTone,
  LoadingOutlined,
} from '@colelab/icons-vue';
</script>

<template>
  <AccountBookOutlined />
  <AccountBookFilled />
  <AccountBookTwoTone />
  <LoadingOutlined :spin="true" />
</template>
```
:::

## 单色图标如何设置颜色

### 方式 A：直接设置 `color`（推荐）

<div style="display:flex;gap:16px;align-items:center;">
  <AccountBookOutlined style="font-size:24px; color:#1677ff;" />
  <AccountBookFilled style="font-size:24px; color:#fa541c;" />
</div>

```vue
<AccountBookOutlined style="color:#1677ff" />
<AccountBookFilled style="color:#fa541c" />
```

### 方式 B：父容器继承色

```vue
<div style="color:#52c41a">
  <AccountBookOutlined />
</div>
```

> 单色图标默认使用 `currentColor`，因此支持 CSS 继承。

## 组件参数（核心）

### 1) 普通图标组件（如 `AccountBookOutlined`）

支持透传 `SensoroIcon` 能力，常用参数：

- `spin?: boolean` 旋转动画
- `rotate?: number` 旋转角度（单位：deg）
- `class?: string | object | array`
- `style?: CSSProperties`
- `twoToneColor?: string | [string, string]`（仅双色图标明显）

示例：

```vue
<LoadingOutlined :spin="true" />
<LoadingOutlined :rotate="90" />
<AccountBookTwoTone :twoToneColor="['#1677ff', '#e6f4ff']" />
```

### 2) 通用组件 `SensoroIcon`

- `icon`（必传）：`IconDefinition`
- `spin?`、`rotate?`、`twoToneColor?`、`class?`、`style?`

```vue
<script setup lang="ts">
import { SensoroIcon } from '@colelab/icons-vue';
import AccountBookOutlinedSvg from '@colelab/icons-svg/es/asn/AccountBookOutlined';
</script>

<template>
  <SensoroIcon :icon="AccountBookOutlinedSvg" :rotate="15" style="color:#722ed1" />
</template>
```

## TwoTone 颜色作用域说明（重要）

当前值：`{{ JSON.stringify(currentTwoTone) }}`

- `setTwoToneColor(...)` 是**全局生效**（库级共享配置），不是单组件局部状态。
- 若你只想影响某一个图标，请优先使用组件级参数：

```vue
<AccountBookTwoTone :twoToneColor="['#1677ff', '#e6f4ff']" />
```

这样只影响当前实例，不污染全局默认色。
