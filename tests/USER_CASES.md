# USER_CASES.md

> 面向 `@colelab/icons-svg` / `@colelab/icons-react` / `@colelab/icons-vue` 的用户用例清单。  
> 目标：先保证“用户可用、可发布、可维护”。

---

## P0（上线前必须通过）

## UC-001 Vue 直接引入（最常见）

**步骤**
1. 新建 Vue3 项目
2. 安装：`pnpm add @colelab/icons-vue`
3. 代码：`import { AccountBookOutlined } from '@colelab/icons-vue'`
4. 页面渲染 `<AccountBookOutlined />`

**预期**
- 图标正常显示
- 构建无报错

---

## UC-002 通用组件引入（高级场景）

**步骤**
1. 安装：`pnpm add @colelab/icons-vue @colelab/icons-svg`
2. 使用：
   - `import SensoroIcon from '@colelab/icons-vue'`
   - `import XxxSvg from '@colelab/icons-svg/es/asn/Xxx'`
   - `<SensoroIcon :icon="XxxSvg" />`

**预期**
- 图标正常显示
- 无类型错误

---

## UC-003 图片风格（Purely）颜色正确

**步骤**
1. 打开 Vue 文档分类页
2. 切换“图片风格（多色）”
3. 抽查 20 个 purely 图标

**预期**
- 图标多色细节存在
- 不出现“整图发黑”

---

## UC-004 TwoTone 作用域

**步骤**
1. 设置 `setTwoToneColor(['#1677ff', '#e6f4ff'])`
2. 观察多个 TwoTone 图标
3. 对单个图标设置 `:twoToneColor="[...]"`

**预期**
- `setTwoToneColor` 全局生效
- 组件级 `twoToneColor` 仅影响当前实例

---

## UC-005 参数能力

**步骤**
1. `spin`：`<LoadingOutlined :spin="true" />`
2. `rotate`：`<LoadingOutlined :rotate="90" />`
3. 单色染色：`style="color:#1677ff"`

**预期**
- spin 动画正常
- rotate 角度生效
- 单色图标遵循 `currentColor`

---

## UC-006 生成链路可用

**步骤**
1. 在 `packages/core/svg` 新增一个图标
2. 执行：
   - `pnpm generate:core && pnpm build:core`
   - `pnpm generate:vue && pnpm build:vue`
3. 在文档页检索新图标

**预期**
- 产物生成成功
- 新图标可导入、可渲染

---

## P1（首版发布建议通过）

## UC-007 React/Vue 一致性抽样

**步骤**
1. 启动 React 与 Vue 文档
2. 抽样 20 个同名图标对比

**预期**
- 视觉语义一致（线型/填充/颜色层级）

---

## UC-008 分类页交互

**步骤**
1. 访问 `/components/icon-categories`
2. 验证：
   - 搜索
   - 点击复制 import
   - sticky 工具栏
   - 当前分类浮动显示

**预期**
- 全部交互正常
- 无明显卡顿

---

## UC-009 中英文文档一致性

**步骤**
1. 切换中文/英文
2. 检查关键页面：
   - 首页
   - 快速开始
   - 开发与贡献
   - 图标分类

**预期**
- 页面都有内容
- 结构一致、信息不缺失

---

## UC-010 全链路命令

**步骤**
1. 执行：
   - `pnpm generate`
   - `pnpm build`
   - `pnpm site`

**预期**
- 命令成功
- 构建产物完整

---

## P2（后续增强）

## UC-011 异常输入健壮性

**步骤**
- 向 `SensoroIcon` 传入非法 icon definition

**预期**
- 组件不崩溃
- 有清晰错误提示或安全降级

---

## UC-012 性能体验

**步骤**
1. 在分类页连续搜索与切换风格
2. 观察交互响应

**预期**
- 搜索响应可接受（体感流畅）
- 无明显掉帧

---

## UC-013 发布前冒烟

**步骤**
1. 执行 dry-run：
   - `npm publish --dry-run`（各子包）
2. 检查包内容

**预期**
- 发包前检查通过
- 包内文件符合预期（es/lib/types、README、license）

---

## 建议执行顺序

1. 先跑 P0
2. 再跑 P1
3. 发布前至少补一次 UC-013

