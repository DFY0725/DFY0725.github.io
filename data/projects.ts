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
      '本项目构建了一个 AI 驱动的论文辅助阅读工具，用户上传 PDF 论文后，系统自动进行解析、翻译摘要、提取关键图表数据，并支持自然语言问答。核心创新在于多 Agent 协作架构和自建论文知识库。',
    ],
    architecture: `用户上传 PDF → 解析 Agent（PyMuPDF 提取文本/图表）→ 翻译 Agent（调用 LLM 翻译摘要）→ 向量化存入 Milvus → 问答 Agent（RAG 检索 + LLM 生成）→ 总结 Agent（结构化输出）

前端 Streamlit · 后端 FastAPI · Celery 异步任务队列 · Milvus 向量数据库 · 自建 10 万+ ArXiv 论文索引`,
    highlights: [
      'LangGraph 多 Agent 协作：解析 → 翻译 → 问答 → 总结四个 Agent 通过状态图串联，支持流式输出，架构清晰可扩展',
      '自建论文知识库：爬取 10 万+ ArXiv 论文元数据，Milvus 构建语义索引，支持自然语言语义检索',
      '异步任务处理：Celery 处理 PDF 解析等耗时任务，前端 WebSocket 实时反馈进度',
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
      '本项目将传统对话管理方案升级为基于 LLM 的 ReAct Agent 架构，通过 Function Calling 对接订单数据库，使机器人能够自主推理下一步行动，大幅提升了对话成功率和灵活性。同时集成了多模态能力。',
    ],
    architecture: `用户输入 → ReAct Agent（LangChain 实现）→ Thought（推理）→ Action（Function Calling 查询订单/商品/退换货政策）→ Observation（获取结果）→ 生成回复

前端 React + Ant Design · 后端 FastAPI · MySQL 业务数据 · Redis 对话缓存 · Docker Compose 一键部署 · GPT-4V 多模态识别`,
    highlights: [
      '将传统意图识别+填槽方案升级为 ReAct Agent，对话成功率从 68% 提升至 89%',
      '支持 20+ 意图覆盖（商品咨询、退换货引导、订单查询等），Agent 自主决策下一步操作',
      '集成 GPT-4V 多模态能力，用户上传商品图片即可进行「找同款」推荐',
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
