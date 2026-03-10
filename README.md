<h1 align="center">Cole Icons</h1>

<div align="center">

语义化矢量图标库，基于单一 SVG 源数据生成 React / Vue 组件产物。

<br />

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
</div>

## ✨ 特性

- 📦 丰富图标资源（Outlined / Filled / TwoTone / Purely）
- 🧱 分层架构：`icons-svg`（数据层）+ `icons-react/icons-vue`（适配层）
- 🌲 支持按需引入（Tree Shaking）
- 💻 TypeScript 开发，提供完整类型定义

## 📦 包结构

- `@colelab/icons-svg`：底层图标定义（source of truth）
- `@colelab/icons-react`：React 组件包
- `@colelab/icons-vue`：Vue 组件包

## 🏗 安装

按需安装：

```bash
# Vue 项目（推荐）
pnpm add @colelab/icons-vue

# React 项目
pnpm add @colelab/icons-react

# 高级场景（通用 icon + ASN）
pnpm add @colelab/icons-svg
```

## 🤝 本地开发

```bash
git clone <your-repo-url>
cd colelab-icons
pnpm install
pnpm generate
pnpm build
pnpm start
```

## 🔧 常用命令

### 文档开发

```bash
pnpm start          # 同时启动 React + Vue 文档
pnpm start:react    # 仅 React 文档（dumi）
pnpm start:vue      # 仅 Vue 文档（vitepress）
```

### 生成与构建

```bash
pnpm generate       # 全量生成（core/react/vue）
pnpm build          # 先 core，再并行 react+vue
pnpm site           # 构建两套文档站
```

### 测试与发布

```bash
pnpm test           # smoke test
pnpm release:ship   # check -> version -> publish
```

> 更详细命令说明见：`docs-vue/guide/scripts-usage.md`

## 🚀 发布流程（推荐）

```bash
pnpm release:check
pnpm release:prepare
pnpm release:publish
# or
pnpm release:ship
```

## 🧠 架构原理

```mermaid
flowchart LR
  A[packages/core/svg] --> B[generate:core]\n(SVGO + ASN)
  B --> C[@colelab/icons-svg]
  C --> D[generate:react]
  C --> E[generate:vue]
  D --> F[@colelab/icons-react]
  E --> G[@colelab/icons-vue]
```

## ⚠️ Node 版本说明

文档链路（dumi）在新版本 Node 下可能有兼容问题，推荐在本仓库使用：

```bash
nvm use 20
```

（已通过 `.nvmrc` 固定）

[npm-image]: https://img.shields.io/npm/v/@colelab/icons-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@colelab/icons-react
[download-image]: https://img.shields.io/npm/dm/@colelab/icons-react.svg?style=flat-square
[download-url]: https://npmjs.org/package/@colelab/icons-react


## 🔄 GitHub Actions 工作流

- `deploy.yml`：部署文档站（GitHub Pages）
- `release.yml`：发布 npm 包（OIDC Trusted Publishing）

> 记忆口诀：`deploy` 发文档，`release` 发包。
