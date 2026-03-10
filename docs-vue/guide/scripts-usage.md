# 命令使用说明（Scripts Usage）

> 本文用于统一团队对 `package.json scripts` 的理解，避免误用。

## 一、日常开发

| 命令 | 作用 | 何时使用 |
|---|---|---|
| `pnpm start` | 同时启动 React + Vue 文档开发服务 | 日常联调、对比两端展示 |
| `pnpm start:react` | 仅启动 React 文档（dumi） | 只改 React 文档/组件展示 |
| `pnpm start:vue` | 仅启动 Vue 文档（VitePress） | 只改 Vue 文档/交互 |
| `pnpm preview` | 同时预览 React + Vue 构建产物 | 本地验收发布前静态产物 |
| `pnpm preview:react` | 预览 React 构建产物 | 检查 dumi build 输出 |
| `pnpm preview:vue` | 预览 Vue 构建产物 | 检查 vitepress build 输出 |

---

## 二、生成与构建

| 命令 | 作用 | 何时使用 |
|---|---|---|
| `pnpm generate` | 全量生成（core/react/vue） | 推荐默认，保证三端产物同步 |
| `pnpm generate:core` | 仅生成 icons-svg | 改了 `packages/core/svg` 时先跑 |
| `pnpm generate:react` | 仅生成 React 图标层 | 只改 React 模板或 React 适配层 |
| `pnpm generate:vue` | 仅生成 Vue 图标层 | 只改 Vue 模板或 Vue 适配层 |
| `pnpm build` | 先 `build:core`，再并行 `build:react + build:vue` | 推荐默认构建命令 |
| `pnpm build:core` | 仅构建 icons-svg | 只验证 core 包 |
| `pnpm build:react` | 仅构建 React 包 | 只验证 React 包 |
| `pnpm build:vue` | 仅构建 Vue 包 | 只验证 Vue 包 |
| `pnpm site` | 构建 React + Vue 文档站 | 发布前统一构建文档 |
| `pnpm site:react` | 构建 React 文档站 | 只发布/检查 React 文档 |
| `pnpm site:vue` | 构建 Vue 文档站 | 只发布/检查 Vue 文档 |

---

## 三、测试与 CI

| 命令 | 作用 | 何时使用 |
|---|---|---|
| `pnpm test` | 执行 smoke test | 每次提交前建议执行 |
| `pnpm test:smoke` | 校验关键产物/关键文件是否存在 | 快速冒烟检查 |
| `pnpm ci:check` | CI 检查入口（等价 `release:check`） | 本地模拟 CI |

---

## 四、发布流程

| 命令 | 作用 | 何时使用 |
|---|---|---|
| `pnpm release:check` | `generate + build + test` | 发版前全量校验 |
| `pnpm release:version` | 用 lerna 递增版本号 | 确认发版后执行 |
| `pnpm release:prepare` | `release:version + build + test` | 版本变更后二次确认 |
| `pnpm release:publish` | 递归发布 npm 包 | 最终发包 |
| `pnpm release:ship` | `check -> prepare -> publish` 一键发版 | 推荐发版入口 |

---

## 五、推荐工作流

### 日常改动（默认）

```bash
pnpm generate
pnpm build
pnpm test
```

### 仅 Vue 改动（提速）

```bash
pnpm generate:vue
pnpm build:vue
pnpm test
```

### 正式发版

```bash
pnpm release:ship
```

---

## 六、注意事项

1. 改了 `packages/core/svg` 后，建议使用全量 `generate/build`，确保 React/Vue 同步。
2. `pnpm publish --recursive --tag latest` 会发布所有可发布子包，请在 `release:check` 通过后再执行。
3. 若需清理依赖可使用 `pnpm clean`，但这是重操作（会删除所有子包 `node_modules`）。



---

## 七、GitHub 工作流说明（重点）

### `deploy.yml`（文档部署）

用途：发布文档站到 GitHub Pages。

- 触发：`master/main` push
- 主要命令：`pnpm generate && pnpm build && pnpm site`
- 产物：
  - `/react`（dumi 文档）
  - `/vue`（vitepress 文档）

### `release.yml`（npm 发包）

用途：发布 npm 包（`@colelab/icons-*`）。

- 触发：手动触发（workflow_dispatch）
- 认证：OIDC Trusted Publishing（不使用长期 `NPM_TOKEN`）
- 主要命令：`release:check` ->（可选 `release:version`）-> `release:publish`

### 一句话区分

- `deploy.yml` = **发文档**
- `release.yml` = **发包**


---

## 八、命令产物目录说明（Generate / Build）

### `pnpm generate` 会生成的目录

1. `generate:core`（`@colelab/icons-svg`）
   - `packages/core/src`
   - `packages/core/inline-svg`
   - `packages/core/inline-namespaced-svg`

2. `generate:react`（`@colelab/icons-react`）
   - `packages/react/src/icons`

3. `generate:vue`（`@colelab/icons-vue`）
   - `packages/vue/src/icons`

### `pnpm build` 会生成的目录

1. `build:core`
   - `packages/core/es`
   - `packages/core/lib`

2. `build:react`
   - `packages/react/es`
   - `packages/react/lib`

3. `build:vue`
   - `packages/vue/es`
   - `packages/vue/lib`

### 文档构建相关目录（补充）

- `pnpm site:react` 产物：`dist`
- `pnpm site:vue` 产物：`docs-vue/.vitepress/dist`
- 部署聚合目录：`deploy-dist`

> 说明：`cache/dist/es/lib` 等构建产物目录不建议提交到 Git 仓库。
