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
