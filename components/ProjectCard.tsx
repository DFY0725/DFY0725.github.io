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
