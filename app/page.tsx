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
