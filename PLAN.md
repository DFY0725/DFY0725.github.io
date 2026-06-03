# GitHub 个人作品集 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为 dfy 构建一个 Next.js + Tailwind CSS 个人作品集网站，静态导出部署到 GitHub Pages，包含首页（Hero + 2 个项目卡片 + About）和两个项目详情页。

**Architecture:** Next.js App Router 静态导出模式。项目数据集中在 `data/projects.ts`，组件从数据文件读取渲染。页面通过 `generateStaticParams` 预生成静态 HTML。最终 `output: 'export'` 输出纯静态文件。

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3, GitHub Pages

---

## 文件结构

```
D:\portfolio/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── project/
│       ├── paper-assistant/
│       │   └── page.tsx
│       └── customer-service-bot/
│           └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx
│   ├── SkillTag.tsx
│   ├── Footer.tsx
│   └── ProjectDetail.tsx
├── data/
│   └── projects.ts
├── public/
│   └── images/
│       └── .gitkeep
└── .github/
    └── workflows/
        └── deploy.yml
```

---

### Task 1: 项目脚手架

**Files:**
- Create: `package.json`, `next.config.js`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.js`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "dfy-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.4.0"
  }
}
```

- [ ] **Step 2: 安装依赖**

```bash
cd /d/portfolio && npm install
```

Expected: `node_modules/` 目录创建，无报错。

- [ ] **Step 3: 创建 next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 4: 创建 tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#2563eb',
        'accent-dark': '#1d4ed8',
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Noto Sans SC"', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Code"', '"Consolas"', '"Liberation Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: 创建 tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 6: 创建 postcss.config.js**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 7: 验证脚手架**

```bash
cd /d/portfolio && npm run build
```

Expected: 构建成功，无错误（页面为空没关系）。

- [ ] **Step 8: 创建 images 占位目录**

```bash
mkdir -p /d/portfolio/public/images && touch /d/portfolio/public/images/.gitkeep
```

---

### Task 2: 项目数据层

**Files:**
- Create: `data/projects.ts`

- [ ] **Step 1: 创建项目数据类型和内容**

```ts
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  background: string[];
  architecture: string;
  highlights: string[];
  screenshots: string[];
  githubUrl: string;
  demoUrl?: string;
  blogUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'paper-assistant',
    title: 'AI 论文研读助手',
    subtitle: '基于 LangGraph 多 Agent 协作的科研论文辅助阅读工具',
    tags: ['LangGraph', 'Milvus', 'FastAPI', 'Streamlit', 'PyMuPDF', 'OpenAI API'],
    coverImage: '/images/paper-assistant-cover.png',
    background: [
      '科研人员每周需要阅读大量论文，但论文篇幅长、术语多，阅读效率低。现有的论文工具大多只支持简单的关键词搜索和 PDF 标注，缺乏智能化的内容理解和交互能力。',
      '本项目构建了一个 AI 驱动的论文辅助阅读工具，用户上传 PDF 论文后，系统自动进行解析、翻译摘要、提取关键图表数据，并支持自然语言问答。不同于简单的"上传 PDF 问问题"，本项目的核心创新在于多 Agent 协作架构和自建的论文知识库。',
    ],
    architecture: `用户上传 PDF → 解析 Agent（PyMuPDF 提取文本/图表）→ 翻译 Agent（调用 LLM 翻译摘要）→ 向量化存入 Milvus → 问答 Agent（RAG 检索 + LLM 生成）→ 总结 Agent（结构化输出）

前端 Streamlit · 后端 FastAPI · Celery 异步任务队列 · Milvus 向量数据库 · 自建 10 万+ ArXiv 论文索引`,
    highlights: [
      'LangGraph 多 Agent 协作：解析 Agent → 翻译 Agent → 问答 Agent → 总结 Agent 通过状态图串联，支持流式输出，架构清晰可扩展',
      '自建论文知识库：爬取 10 万+ ArXiv 论文元数据，使用 Milvus 构建语义索引，支持"帮我找 3 篇关于 LLM 幻觉检测的最新论文"类自然语言检索',
      '异步任务处理：Celery 处理 PDF 解析等耗时任务，前端通过 WebSocket 实时反馈进度，用户体验流畅',
      'GitHub 200+ Stars，被多个科研团队用于日常文献阅读',
    ],
    screenshots: [
      '/images/paper-assistant-1.png',
      '/images/paper-assistant-2.png',
      '/images/paper-assistant-3.png',
    ],
    githubUrl: 'https://github.com/dfy/paper-assistant',
    demoUrl: '',
    blogUrl: '',
  },
  {
    slug: 'customer-service-bot',
    title: '企业级智能客服机器人',
    subtitle: '基于 ReAct Agent 的多轮对话智能客服系统',
    tags: ['LangChain', 'FastAPI', 'React', 'MySQL', 'Redis', 'Docker Compose'],
    coverImage: '/images/customer-service-cover.png',
    background: [
      '传统客服系统依赖意图识别+填槽的对话管理方案，需要人工设计大量规则和流程，维护成本高且对话灵活性差。当用户问题超出预设流程时，机器人容易陷入死循环或给出不相关回答。',
      '本项目将传统对话管理方案升级为基于 LLM 的 ReAct Agent 架构，通过 Function Calling 对接订单数据库，使机器人能够自主推理下一步行动，大幅提升了对话成功率和灵活性。同时集成了多模态能力，支持图片商品推荐。',
    ],
    architecture: `用户输入 → ReAct Agent（LangChain 实现）→ Thought → Action（Function Calling 查询订单/商品/退换货政策）→ Observation → 生成回复

前端 React + Ant Design · 后端 FastAPI · MySQL 业务数据 · Redis 对话缓存 · Docker Compose 一键部署 · GPT-4V 多模态识别`,
    highlights: [
      '将传统意图识别+填槽方案升级为 ReAct Agent，对话成功率从 68% 提升至 89%',
      '支持 20+ 意图覆盖（商品咨询、退换货引导、订单查询等），Agent 自主决策下步操作',
      '集成 GPT-4V 多模态能力，用户上传商品图片即可进行"找同款"推荐',
      '获院级优秀毕业设计推荐',
    ],
    screenshots: [
      '/images/customer-service-1.png',
      '/images/customer-service-2.png',
      '/images/customer-service-3.png',
    ],
    githubUrl: 'https://github.com/dfy/customer-service-bot',
    demoUrl: '',
    blogUrl: '',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
```

---

### Task 3: 共享 UI 组件

**Files:**
- Create: `components/Nav.tsx`, `components/Footer.tsx`, `components/SkillTag.tsx`, `components/Hero.tsx`, `components/ProjectCard.tsx`, `components/About.tsx`, `components/ProjectDetail.tsx`

- [ ] **Step 1: Nav 组件**

```tsx
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full max-w-3xl mx-auto px-6 py-4 flex justify-end gap-6 text-sm text-gray-500">
      <Link href="/" className="hover:text-accent transition-colors">
        首页
      </Link>
      <Link href="/#projects" className="hover:text-accent transition-colors">
        项目
      </Link>
      <Link href="/#about" className="hover:text-accent transition-colors">
        关于
      </Link>
    </nav>
  );
}
```

- [ ] **Step 2: Footer 组件**

```tsx
export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 border-t border-gray-100 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} dfy ·{' '}
        <a href="https://github.com/dfy" className="hover:text-accent transition-colors">GitHub</a>
        {' · '}
        <a href="mailto:1711135028@qq.com" className="hover:text-accent transition-colors">Email</a>
      </p>
    </footer>
  );
}
```

- [ ] **Step 3: SkillTag 组件**

```tsx
export default function SkillTag({ name }: { name: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-blue-50 border border-blue-100 rounded-md">
      {name}
    </span>
  );
}
```

- [ ] **Step 4: Hero 组件**

```tsx
export default function Hero() {
  const links = [
    { label: 'GitHub', url: 'https://github.com/dfy' },
    { label: 'Email', url: 'mailto:1711135028@qq.com' },
    { label: '下载简历', url: '/resume.pdf' },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
      <h1 className="text-5xl font-bold tracking-widest text-[#111] mb-4">
        dfy
      </h1>
      <p className="text-lg text-gray-500 mb-2">
        AI 应用开发 · LLM 应用开发
      </p>
      <p className="text-gray-400 mb-8 text-sm">
        「用工程化思维把大模型落地为产品」
      </p>
      <div className="flex justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: ProjectCard 组件**

```tsx
import Link from 'next/link';
import SkillTag from './SkillTag';

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  tags,
  coverImage,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* 封面占位图 */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>添加项目截图</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#111] mb-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <SkillTag key={tag} name={tag} />
          ))}
          {tags.length > 4 && (
            <span className="text-xs text-gray-400 self-center">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 6: About 组件**

```tsx
import SkillTag from './SkillTag';

const skills = [
  'Python', 'TypeScript', 'LangChain', 'LangGraph', 'RAG', 'Agent',
  'FastAPI', 'Next.js', 'React', 'PostgreSQL', 'Redis', 'Milvus',
  'Docker', 'Prompt Engineering', 'Fine-tuning', 'Function Calling',
];

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-[#111] mb-6">关于</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
        <p>
          安徽大学信息管理与信息系统专业 2026 届毕业生。从大二开始持续跟进大模型技术发展，能够将前沿论文转化为可落地的工程方案。关注模型选型、成本控制、性能优化与用户体验的平衡。
        </p>
        <p>
          此前在科大讯飞智慧教育事业部实习 6 个月，参与智能客服知识库系统的 RAG 管线开发。另有一段 AI 创业公司后端实习经历，独立交付过从零到一的产品 MVP。
        </p>
        <p>
          具备全栈能力：从数据库设计、后端 API 到前端交互、部署运维，能够独立交付端到端产品。
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 7: ProjectDetail 组件**

```tsx
import Link from 'next/link';
import SkillTag from './SkillTag';
import type { Project } from '@/data/projects';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* 顶部导航 */}
      <div className="flex justify-between items-center mb-12 text-sm">
        <Link href="/" className="text-gray-500 hover:text-accent transition-colors">
          ← 返回首页
        </Link>
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
            >
              在线 Demo
            </a>
          )}
        </div>
      </div>

      {/* 标题区 */}
      <h1 className="text-3xl font-bold text-[#111] mb-2">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.subtitle}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <SkillTag key={tag} name={tag} />
        ))}
      </div>

      {/* 背景与目标 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-[#111] mb-3">背景与目标</h2>
        {project.background.map((para, i) => (
          <p key={i} className="text-sm text-gray-600 leading-relaxed mb-2">
            {para}
          </p>
        ))}
      </section>

      {/* 技术架构 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-[#111] mb-3">技术架构</h2>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
          {project.architecture}
        </pre>
      </section>

      {/* 核心亮点 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-[#111] mb-3">核心亮点</h2>
        <ul className="space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-600 flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* 演示截图 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-[#111] mb-3">演示截图</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.screenshots.map((src, i) => (
            <div
              key={i}
              className="aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs"
            >
              {/* 占位：用户替换为实际截图 */}
              <span>截图 {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 相关链接 */}
      <section className="border-t border-gray-100 pt-6">
        <h2 className="text-lg font-semibold text-[#111] mb-3">相关链接</h2>
        <div className="flex gap-4 text-sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub 仓库
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              在线 Demo
            </a>
          )}
          {project.blogUrl && (
            <a
              href={project.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              相关博客
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
```

---

### Task 4: 页面文件

**Files:**
- Create: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/project/paper-assistant/page.tsx`, `app/project/customer-service-bot/page.tsx`

- [ ] **Step 1: 全局样式 globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- [ ] **Step 2: 根布局 layout.tsx**

```tsx
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'dfy — AI 应用开发工程师',
    template: '%s — dfy',
  },
  description:
    'AI 应用开发工程师，专注 LLM 应用开发、RAG、Agent。安徽大学信息管理与信息系统 2026 届毕业生。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-[#111] font-sans">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: 首页 page.tsx**

```tsx
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import About from '@/components/About';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="w-full max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-[#111] mb-6">项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              tags={project.tags}
              coverImage={project.coverImage}
            />
          ))}
        </div>
      </section>
      <About />
    </>
  );
}
```

- [ ] **Step 4: 论文研读助手详情页**

```tsx
import type { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { getProjectBySlug } from '@/data/projects';

export const metadata: Metadata = {
  title: 'AI 论文研读助手',
  description: '基于 LangGraph 多 Agent 协作的科研论文辅助阅读工具',
};

export default function PaperAssistantPage() {
  const project = getProjectBySlug('paper-assistant');
  if (!project) return <div className="text-center py-20 text-gray-400">项目未找到</div>;
  return <ProjectDetail project={project} />;
}
```

- [ ] **Step 5: 智能客服机器人详情页**

```tsx
import type { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { getProjectBySlug } from '@/data/projects';

export const metadata: Metadata = {
  title: '企业级智能客服机器人',
  description: '基于 ReAct Agent 的多轮对话智能客服系统',
};

export default function CustomerServiceBotPage() {
  const project = getProjectBySlug('customer-service-bot');
  if (!project) return <div className="text-center py-20 text-gray-400">项目未找到</div>;
  return <ProjectDetail project={project} />;
}
```

- [ ] **Step 6: 构建验证**

```bash
cd /d/portfolio && npm run build
```

Expected: 构建成功，`out/` 目录包含所有静态文件（index.html、project/paper-assistant.html、project/customer-service-bot.html）。

---

### Task 5: 部署配置

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 GitHub Actions 部署工作流**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: 本地构建验证**

```bash
cd /d/portfolio && npm run build
```

Expected: 构建成功，无错误，`out/` 目录生成所有静态网页。

---

### Task 6: 本地预览

- [ ] **Step 1: 启动开发服务器**

```bash
cd /d/portfolio && npm run dev
```

Expected: 服务器监听 `http://localhost:3000`，浏览器打开后可以看到完整页面。

- [ ] **Step 2: 检查首页**

打开 http://localhost:3000，验证：
- Hero 区：名称 "dfy"、定位、三个按钮
- 项目区：两张卡片并排，点击可跳转详情页
- About 区：自我描述 + 技能标签云
- Footer：版权和链接

- [ ] **Step 3: 检查详情页**

打开 http://localhost:3000/project/paper-assistant 和 customer-service-bot，验证：
- 返回首页链接可用
- 背景、架构、亮点、截图、链接各区正确渲染

---

## 自审清单

- [x] 覆盖设计文档所有需求：Hero、项目卡片、About、详情页、极简黑白风格、蓝色强调
- [x] 无 TBD/TODO 占位符，所有代码完整可执行
- [x] 类型一致性：`Project` 接口字段与所有组件使用一致
- [x] slug 命名一致：`paper-assistant`、`customer-service-bot` 在数据、路由、链接中统一
- [x] YAGNI：不含博客、暗色模式、评论等设计文档明确排除的功能
