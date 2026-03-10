# 开发与贡献

> 本页参考 React 文档中的「贡献指南」，并增加 Vue / React 分场景命令规范。

## 命令分层（先看这个）

### A. 全量生成（推荐，版本同步）

```bash
pnpm generate
```

说明：
- 会触发 workspace 内所有包的 `generate`
- **建议日常默认使用**，确保 `icons-svg / icons-react / icons-vue` 产物同步

### B. 仅生成 Vue（按需）

```bash
pnpm generate:vue
```

说明：
- 只生成 `@colelab/icons-vue`
- 适合你只改了 Vue 适配层文档或模板的场景

### C. 仅生成 React（按需）

```bash
pnpm generate:react
```

说明：
- 只生成 `@colelab/icons-react`

### D. 仅生成 Core（图标源处理）

```bash
pnpm generate:core
```

说明：
- 只生成 `@colelab/icons-svg`
- 当你改了 `packages/core/svg` 时优先执行

---

## 构建命令分层

### 全量构建（推荐）

```bash
pnpm build
```

当前链路：`core -> react -> vue`

### 按包构建（按需）

```bash
pnpm build:core
pnpm build:react
pnpm build:vue
```

---

## 场景决策表

1. **只改 Vue 文档/样式，不改图标源**
   - `pnpm generate:vue`
   - `pnpm build:vue`

2. **只改 React 模板**
   - `pnpm generate:react`
   - `pnpm build:react`

3. **改了 SVG 源图（core）**
   - 推荐直接：`pnpm generate && pnpm build`（确保三端同步）
   - 或最小链路：
     - `pnpm generate:core && pnpm build:core`
     - `pnpm generate:react && pnpm build:react`
     - `pnpm generate:vue && pnpm build:vue`

---

## 新增图标

1. 将 SVG 放入 `packages/core/svg` 对应主题目录（filled / outlined / twotone / purely）
2. 推荐执行全量：

```bash
pnpm generate
pnpm build
```

3. 在文档页验证：`/components/icon-categories`

## 修改 / 删除图标

直接修改或删除 `packages/core/svg` 下对应文件后，重复执行生成与构建命令。


## 文档构建命令（site）

- `pnpm site:react`：构建 React 文档站（dumi）
- `pnpm site:vue`：构建 Vue 文档站（VitePress）

建议新增统一入口：

```bash
pnpm site
```

用于一次性构建两套文档产物（react + vue）。

---

## `pnpm generate` 核心流程

`pnpm generate` 的设计目标是“全链路同步生成”，核心步骤：

1. **Core 层（icons-svg）**：
   - 扫描 `packages/core/svg/*`
   - SVG 规范化（svgo）
   - 生成 asn 抽象定义与入口
2. **React 层（icons-react）**：
   - 基于 asn 模板批量生成 React 组件
3. **Vue 层（icons-vue）**：
   - 基于 asn 模板批量生成 Vue 组件

因此 `pnpm generate` 是推荐默认命令，可保证三层产物一致。

---

## 这套 Icon 的原理（核心逻辑）

一句话：**数据层与框架层解耦的代码生成体系**。

- `@colelab/icons-svg`：唯一源数据层（source of truth）
- `@colelab/icons-react` / `@colelab/icons-vue`：框架适配层

核心价值：

1. 新增图标只改一处（core/svg）
2. React/Vue 产物自动同步
3. 保持 API 命名和视觉语义一致
4. 支持按需引入（Tree Shaking）

---

## 生成链路图（Mermaid）

```mermaid
flowchart LR
  A[packages/core/svg<br/>原始SVG资产] --> B[generate:core<br/>SVGO + ASN生成]
  B --> C[@colelab/icons-svg]
  C --> D[generate:react<br/>生成React组件]
  C --> E[generate:vue<br/>生成Vue组件]
  D --> F[@colelab/icons-react]
  E --> G[@colelab/icons-vue]
  F --> H[site:react / dumi]
  G --> I[site:vue / vitepress]
```

## 本地文档开发

```bash
# 默认（Vue 文档）
pnpm start

# 仅 Vue 文档
pnpm start:vue

# React 文档（dumi）
pnpm start:react
```

## 提交建议

- 先提交 SVG 变更
- 再提交生成产物变更
- 最后提交文档变更

这样更利于 code review。
