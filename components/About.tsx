import SkillTag from './SkillTag';

const skillGroups = [
  {
    label: 'AI / 大模型',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Agent', 'Prompt Engineering', 'Fine-tuning', 'Function Calling'],
  },
  {
    label: '后端',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    label: '前端',
    skills: ['TypeScript', 'Next.js', 'React'],
  },
  {
    label: '数据',
    skills: ['Milvus', 'MySQL'],
  },
];

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold text-[#111]">关于我</h2>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* 自我介绍 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            安徽大学信息管理与信息系统专业 2026 届毕业生。从大二开始持续跟进大模型技术发展，能够将前沿论文转化为可落地的工程方案。
          </p>
          <p>
            此前在科大讯飞智慧教育事业部实习 6 个月，参与智能客服知识库系统的 RAG 管线开发；另有一段 AI 创业公司后端实习经历，独立交付过产品 MVP。
          </p>
          <p>
            具备全栈能力：从数据库设计 → 后端 API → 前端交互 → 部署运维，独立交付端到端产品。
          </p>
        </div>
        {/* 高亮卡片 */}
        <div className="bg-gray-50 rounded-xl p-5 flex flex-col justify-center gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-accent">2+</div>
            <div className="text-xs text-gray-500 mt-0.5">年 AI 开发经验</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">4</div>
            <div className="text-xs text-gray-500 mt-0.5">个完整项目</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">200+</div>
            <div className="text-xs text-gray-500 mt-0.5">GitHub Stars</div>
          </div>
        </div>
      </div>

      {/* 技能分组 */}
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 w-20 flex-shrink-0">{group.label}</span>
            {group.skills.map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
