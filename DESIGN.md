# GitHub个人作品集 — 设计文档

**日期**: 2026-06-03  
**创建者**: dfy  
**状态**: 已确认

---

## 1. 概述

为 dfy（段风云）构建一个 GitHub Pages 个人作品网站，用于求职展示。面向 AI 应用开发 / LLM 应用开发岗位，以项目展示为核心，让面试官快速了解技术能力和工程水平。

- **URL**: `https://dfy.github.io`
- **仓库**: `github.com/dfy/dfy.github.io`
- **技术栈**: Next.js + Tailwind CSS

---

## 2. 目标用户与场景

| 用户 | 场景 |
|------|------|
| 面试官/HR | 看到简历上的链接，点击了解候选人 |
| 技术负责人 | 快速浏览项目技术栈、代码质量、工程深度 |
| 同行开发者 | 从项目文档/博客找到灵感，可能关注 GitHub |

**核心体验**: 打开链接 → 3秒内看到定位 → 1分钟内浏览完两个核心项目 → 有兴趣则点进详情。

---

## 3. 页面结构

### 3.1 首页 `/`

| 区块 | 内容 |
|------|------|
| **Hero** | 名字 "dfy"（48px）、定位 "AI 应用开发 · LLM 应用开发"、一句话 Slogan、GitHub/Email/简历PDF 三个按钮 |
| **Projects** | 2 张项目卡片并排，每张包含封面占位图、标题、3-5个技术栈标签、一句话简介、"查看详情 →"链接 |
| **About** | 3-4句自我描述 + 技能标签云（15-20个标签） |
| **Footer** | © dfy · GitHub · Email |

### 3.2 项目详情页 `/project/[slug]`

| 区块 | 内容 |
|------|------|
| **Header** | ← 返回首页 + 外部链接（GitHub / Demo） |
| **Hero** | 项目名称、一句话定位、技术栈标签 |
| **背景与目标** | 2-3段说明为什么要做这个项目、解决什么问题 |
| **技术架构** | 文字描述 + ASCII 框图，展示核心组件与数据流 |
| **核心亮点** | 3-5条要点，每条含具体技术细节和量化效果 |
| **演示截图** | 3张占位图（标注 "添加截图"），等用户补充 |
| **相关链接** | GitHub仓库 · 在线Demo · 相关博客文章 |

**项目1: AI论文研读助手** — slug: `paper-assistant`  
**项目2: 智能客服机器人** — slug: `customer-service-bot`

---

## 4. 视觉设计

| 属性 | 值 |
|------|----|
| **风格** | 极简黑白 + 蓝色强调 |
| **背景** | `#ffffff`（纯白） |
| **主文字** | `#111111` |
| **辅助文字** | `#6b7280`（灰色） |
| **强调色** | `#2563eb`（蓝色，用于链接 hover、标签边框、卡片底线） |
| **标题字体** | PingFang SC / Microsoft YaHei 36-48px |
| **正文字体** | 同上 16px, line-height 1.7 |
| **代码标签** | SF Mono / Consolas 13px |
| **卡片** | 白色背景 + 1px `#e5e7eb` 边框 + 8px 圆角 |
| **阴影** | `0 2px 8px rgba(0,0,0,0.06)` hover 状态加深 |

---

## 5. 技术实现

### 5.1 项目结构

```
dfy.github.io/
├── app/
│   ├── layout.tsx          # 全局布局（Nav + Footer）
│   ├── page.tsx            # 首页
│   ├── project/
│   │   ├── paper-assistant/
│   │   │   └── page.tsx    # 论文研读助手详情
│   │   └── customer-service-bot/
│   │       └── page.tsx    # 智能客服机器人详情
│   └── globals.css         # Tailwind + 自定义样式
├── components/
│   ├── Nav.tsx             # 导航栏
│   ├── Hero.tsx            # 首页 Hero
│   ├── ProjectCard.tsx     # 项目卡片
│   ├── ProjectGrid.tsx     # 项目卡片容器
│   ├── About.tsx           # About 区块
│   ├── SkillTag.tsx        # 技能标签
│   ├── Footer.tsx          # 页脚
│   └── ProjectDetail.tsx   # 详情页布局组件
├── data/
│   └── projects.ts         # 项目数据（TS 结构化数据）
├── public/
│   └── images/             # 项目截图和头像
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### 5.2 数据管理

项目信息提取为 TypeScript 数据结构，组件从数据文件读取，方便后续维护：

```ts
interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  description: string;
  background: string;
  architecture: string;
  highlights: string[];
  screenshots: string[];
  links: { label: string; url: string }[];
}
```

### 5.3 部署

- `next.config.js` 配置 `output: 'export'` + `basePath` 支持 GitHub Pages
- GitHub Actions 自动构建部署到 `gh-pages` 分支
- 或手动 `npm run build && npx gh-pages -d out`

---

## 6. 非功能需求

| 需求 | 方案 |
|------|------|
| **性能** | Next.js 静态导出，首屏加载 < 2s |
| **响应式** | Tailwind 响应式断点，移动端卡片纵向排列 |
| **可维护性** | 项目数据独立文件，新增项目只需加一条数据记录 |
| **SEO** | 每个页面独立的 `<title>` 和 `<meta description>` |

---

## 7. 不含的内容（YAGNI）

- ❌ 博客功能（当前不需要）
- ❌ 暗色模式切换
- ❌ 多语言
- ❌ 评论系统
- ❌ 分析统计

---

## 8. 自审清单

- [x] 无 TBD / TODO 占位符
- [x] 页面结构与项目展示目标一致
- [x] 技术栈选择与用户简历技能匹配
- [x] 项目数量（2个）与用户选择一致
- [x] 品牌命名（dfy）与用户要求一致
- [x] 部署方案可行
