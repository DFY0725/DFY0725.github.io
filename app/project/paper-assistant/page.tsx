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
