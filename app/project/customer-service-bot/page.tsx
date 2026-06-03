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
