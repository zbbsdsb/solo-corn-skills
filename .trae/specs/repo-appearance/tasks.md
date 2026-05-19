# Tasks - Repo 外表专业化改造

## 1. Logo 生成与导出

### 1.1 优化 SVG Logo
- [x] 完善 `design/logo.svg` - 使用纯直线构建 SCS 三个字母
  - S: 由5个矩形组成（顶部横、顶部竖、中间横、底部竖、底部横）
  - C: 由3个矩形组成（左竖、顶部横、底部横）
  - 参考现有 brutalist-linear-identity.md 设计哲学
  - 添加装饰性横线作为强调元素
  - 设置标准化 viewBox (400 x 150)

### 1.2 生成 PNG 变体
- [x] 创建 `design/logo-32.svg` - Favicon 版本（32x32 viewBox）
- [x] 创建 `design/logo-128.svg` - 中等尺寸（128x128 viewBox）
- [x] 创建 `design/logo-512.svg` - 大尺寸展示（512x512 viewBox）

### 1.3 创建 Favicon
- [x] 生成 `design/favicon.svg` - 网站 favicon 版本
- [x] 可选：生成 ICO 格式（Windows 兼容）

## 2. README.md 专业重写

### 2.1 Banner 与项目标题
- [x] 添加 SVG logo 作为 Banner（居中显示）
- [x] 添加项目名称 "SOLO CORN SKILLS"
- [x] 添加副标题：可扩展的 AI 技能工作流

### 2.2 徽章与统计
- [x] 添加 GitHub Stars 徽章
- [x] 添加许可证徽章 (MIT)
- [x] 添加语言统计徽章
- [x] 添加贡献者统计

### 2.3 项目描述区块
- [x] 编写项目使命宣言（1-2 句话）
- [x] 列出核心价值主张（4-5 个要点）
- [x] 描述目标用户群体

### 2.4 核心技能概览
- [x] 展示 7 个技能卡片：
  - research-integration（研究整合）
  - product-builder（产品构建）
  - marketing-growth（营销增长）
  - collector（收集者）
  - landing（落地）
  - strategic-decision（战略决策）
  - mental-models（心智模型库）

### 2.5 快速开始指南
- [x] 安装/使用前提条件
- [x] 基本使用示例（2-3 个代码示例）
- [x] 链接到各技能详细文档

### 2.6 目录结构展示
- [x] 树形展示项目结构
- [x] 说明各目录用途
- [x] 标注主要文件

### 2.7 贡献与联系
- [x] 添加贡献指南
- [x] 添加联系方式 (GitHub: zbbsdsb)
- [x] 添加致谢区块

## 3. GitHub 仓库元数据优化

### 3.1 仓库设置
- [x] 更新 Description：提供 1-2 句话的项目描述
- [x] 添加 Topics：
  - ai-skills
  - productivity
  - workflow
  - mental-models
  - solopreneur
  - one-person-company
  - tools
  - automation

## 4. 视觉规范文档

### 4.1 创建品牌指南
- [x] 创建 `design/brand-guidelines.md`
  - 配色方案（主色、辅色）
  - 字体规范
  - Logo 使用规则
  - 排版指南

## Task Dependencies

1. Task 1.1 必须在 Task 1.2 之前完成（SVG 是源文件）
2. Task 2.1-2.7 可并行执行（各自独立区块）
3. Task 3 依赖 Task 1 完成（需要 logo 用于元数据）
4. Task 4 可在 Task 1 完成后独立进行
