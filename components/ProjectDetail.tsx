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
