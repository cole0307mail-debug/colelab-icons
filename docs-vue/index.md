---
layout: home

hero:
  name: "Sensoro Icons"
  text: "Vue 图标系统"
  tagline: "统一风格 · 工程化生成 · 面向企业场景"
  actions:
    - theme: brand
      text: 浏览图标
      link: /components/icon-categories
    - theme: alt
      text: 组件总览
      link: /components/icons-vue

features:
  - title: 全量图标体系
    details: 覆盖 Outlined / Filled / TwoTone / Purely 等主题，命名一致、语义清晰。
  - title: 同源生成
    details: 基于 @colelab/icons-svg 自动生成 Vue 组件，保证源数据与组件层一致。
  - title: 企业级可维护
    details: Monorepo + pnpm workspace，支持版本治理、按包构建与标准化发布流程。
  - title: 统一视觉风格
    details: 图标在大小、线条、色彩和状态表达上保持一致，降低页面视觉噪音。
  - title: 可扩展架构
    details: 底层 SVG 定义与框架适配层解耦，便于扩展 React / Vue 等多端实现。
  - title: 开发体验优先
    details: 支持主题切换（亮色/暗色/跟随系统）与中英文文档导航，易于团队协作。
---

## 核心能力

- **标准化图标资产管理**：统一来源、统一命名、统一主题分层。
- **可追溯生成链路**：从 SVG 资产到组件产物全链路可追踪。
- **多包协同治理**：与 `icons-svg`、`icons-react` 保持一致的分层结构。
- **稳定交付能力**：支持在不同项目中复用同一套图标规范。

## 包结构

- `@colelab/icons-svg`：底层图标定义与源数据。
- `@colelab/icons-vue`：Vue 组件层封装与导出。
- `@colelab/icons-react`：React 组件层封装（并行维护）。

## 设计目标

1. **一致性**：让图标在跨页面、跨业务中保持一致表达。
2. **可维护**：让图标演进有规范、有结构、可持续。
3. **可扩展**：让同一套资产可以稳定支持多框架。
4. **可落地**：让团队在真实工程中低成本接入与升级。
