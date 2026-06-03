import Link from 'next/link';

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
      className="group card-lift block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
    >
      {/* 封面图 */}
      <div className="relative w-full h-48 bg-gray-50 overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover img-zoom"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            添加项目截图
          </div>
        )}
        {/* hover 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 信息区 */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-[#111] mb-1.5 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3.5 leading-relaxed line-clamp-2">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-[11px] font-mono text-gray-500 bg-gray-50 border border-gray-100 rounded-md group-hover:border-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono text-gray-400">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
