const colorMap: Record<string, string> = {
  // AI/ML — 紫色系
  LangChain: 'bg-purple-50 text-purple-700 border-purple-100',
  LangGraph: 'bg-purple-50 text-purple-700 border-purple-100',
  RAG: 'bg-purple-50 text-purple-700 border-purple-100',
  Agent: 'bg-purple-50 text-purple-700 border-purple-100',
  'Prompt Engineering': 'bg-purple-50 text-purple-700 border-purple-100',
  'Fine-tuning': 'bg-purple-50 text-purple-700 border-purple-100',
  'Function Calling': 'bg-purple-50 text-purple-700 border-purple-100',
  // 后端 — 蓝色系
  Python: 'bg-blue-50 text-blue-700 border-blue-100',
  FastAPI: 'bg-blue-50 text-blue-700 border-blue-100',
  Node: 'bg-blue-50 text-blue-700 border-blue-100',
  PostgreSQL: 'bg-blue-50 text-blue-700 border-blue-100',
  MySQL: 'bg-blue-50 text-blue-700 border-blue-100',
  Redis: 'bg-blue-50 text-blue-700 border-blue-100',
  Docker: 'bg-blue-50 text-blue-700 border-blue-100',
  // 前端 — 绿色系
  TypeScript: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Next.js': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  React: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  // 数据 — 橙色系
  Milvus: 'bg-amber-50 text-amber-700 border-amber-100',
};

export default function SkillTag({ name }: { name: string }) {
  const colors = colorMap[name] || 'bg-gray-50 text-gray-600 border-gray-100';
  return (
    <span className={`inline-block px-3 py-1 text-xs font-mono font-medium border rounded-md transition-colors hover:border-gray-300 ${colors}`}>
      {name}
    </span>
  );
}
