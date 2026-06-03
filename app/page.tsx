import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import About from '@/components/About';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Hero />

      {/* 项目区 */}
      <section id="projects" className="w-full max-w-3xl mx-auto px-6 pb-16 border-t border-gray-100">
        <div className="flex items-center gap-3 pt-16 mb-8">
          <h2 className="text-xl font-bold text-[#111]">精选项目</h2>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
