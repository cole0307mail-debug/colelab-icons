# SVG 设计规范（设计与开发约定）

> 这是设计师与开发协作的关键约束，请在新增图标前先对齐。

## 基础规格

1. `viewBox` 必须为：`0 0 1024 1024`
2. 图标外围建议预留 **64px** 安全出血位
3. 命名需语义化、英文、驼峰（与组件名保持一致）
4. 主题需明确归类：`outlined / filled / twotone / purely`

## 视觉一致性

- 线条粗细、圆角风格、端点处理保持统一
- 避免同语义图标出现多套风格混用
- 双色图标需明确主色/辅色分层，不要把“状态色”写死在源图

## 工程约束

- SVG 文件放在 `packages/core/svg/<theme>/` 目录
- 新增后必须执行：

```bash
pnpm generate:core
pnpm build:core
pnpm generate:vue
pnpm build:vue
```

- 在文档页验证展示：`/components/icon-categories`

## 不推荐做法

- ❌ 使用非 1024 画板
- ❌ 直接提交来源不明、未经统一清洗的 SVG
- ❌ 命名与语义不一致（影响检索与 API 可读性）

