# Repo 外表专业化改造规格

## Why

当前 solo-corn-skills 仓库仅有基础结构，README.md 仅两行内容，缺乏专业形象和视觉吸引力。需要通过系统化的视觉设计、logo生成和文档改造，打造一个能够吸引开发者、提升品牌认知度的专业化开源项目形象。

## What Changes

### 1. Logo 设计与生成
- 使用 Brutalist Linear Identity 设计哲学（纯直线、几何、无曲线）
- 白底黑字 SCS 字母组合
- 生成多种格式：SVG（主文件）、PNG（多尺寸）、favicon
- 确保 logo 在不同尺寸下保持清晰可读

### 2. README.md 专业重写
- 添加醒目的 Banner（使用 SVG logo）
- 包含项目徽章（GitHub Stats、许可证、语言统计）
- 项目简介与价值主张
- 核心技能概览
- 快速开始指南
- 目录结构展示
- 贡献指南与联系方式

### 3. 视觉规范统一
- 建立项目配色规范（黑白为主，强调色）
- 定义排版规范
- 建立图标使用规范
- GitHub 仓库元数据优化（Topics、Description）

## Impact

- 受影响的功能：项目形象、品牌认知度、开发者第一印象
- 受影响的文件：
  - `README.md` - 完全重写
  - `design/logo.svg` - 新增
  - `design/logo-32.png`, `logo-128.png`, `logo-512.png` - 新增
  - `design/favicon.svg` - 新增
  - `.github/profile/README.md` - 可选个性化

## ADDED Requirements

### Requirement: SCS Logo 矢量版本
系统应生成符合 Brutalist Linear Identity 规范的 SVG logo 文件，包含以下特性：
- 纯直线构成，无曲线
- 精确的网格对齐
- 标准化的 viewBox

#### Scenario: Logo 生成
- **WHEN** 生成 logo 时
- **THEN** 输出 SVG 文件，保留所有设计细节，支持无损缩放

### Requirement: README.md 专业布局
系统应提供结构化的 README.md 模板，包含以下标准区块：
- Banner 区域（logo + 项目名称）
- 徽章行（可选）
- 项目描述
- 核心特性列表
- 快速开始
- 目录结构
- 贡献指南

#### Scenario: README 展示
- **WHEN** 访问项目主页时
- **THEN** 用户看到专业、有序、易于理解的仓库概览

### Requirement: 多尺寸 logo 资源
系统应生成适合不同用途的 logo 变体：
- Favicon: 32x32
- 中等: 128x128
- 大图: 512x512
- 原始矢量: SVG

#### Scenario: Logo 应用
- **WHEN** 在不同场景使用 logo 时
- **THEN** 有对应尺寸的 PNG 文件可用

## MODIFIED Requirements

### Requirement: 项目根目录 README
- **现状**：仅有两行内容
- **目标**：完整、专业、信息丰富、具有吸引力的项目主页

### Requirement: design/ 目录
- **现状**：包含 brutalist-linear-identity.md 和 logo.html
- **目标**：扩展为完整的视觉资产目录，包含 SVG logo、PNG 变体、favicon

## REMOVED Requirements

无

## Design Constraints

### Logo 设计约束
1. **纯直线**：所有字母轮廓必须由矩形组成
2. **白底黑字**：背景 #FFFFFF，文字 #000000
3. **几何精度**：元素必须精确对齐
4. **无装饰元素**：不使用渐变、阴影、曲线
5. **Brutalist 风格**：极简、精确、功能性

### README 约束
1. **清晰层次**：使用 Markdown 标准结构
2. **简洁有力**：每段不超过 3 行
3. **视觉平衡**：合理使用代码块和列表
4. **开发者友好**：提供快速开始指南

### 文件命名约束
1. 使用 kebab-case
2. 包含尺寸信息（如 `logo-128.png`）
3. 保持一致的目录结构
