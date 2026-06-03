export default function Hero() {
  const links = [
    { label: 'GitHub', url: 'https://github.com/DFY0725', icon: '⌘' },
    { label: 'Email', url: 'mailto:1711135028@qq.com', icon: '✉' },
    { label: '简历 PDF', url: '/resume.pdf', icon: '↗' },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-6 pt-28 pb-20 text-center overflow-hidden">
      {/* 背景纹理 */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* 顶部装饰线 */}
      <div className="flex justify-center mb-10 animate-fade-up">
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      {/* 名字 */}
      <h1 className="relative text-6xl font-bold tracking-[0.3em] text-[#111] mb-5 animate-fade-up">
        dfy
      </h1>

      {/* 定位 */}
      <p className="relative text-base text-gray-500 mb-3 tracking-wide animate-fade-up" style={{ animationDelay: '0.1s' }}>
        AI 应用开发 &nbsp;·&nbsp; LLM 应用开发
      </p>

      {/* Slogan */}
      <p className="relative text-gray-400 mb-10 text-sm tracking-wide animate-fade-up" style={{ animationDelay: '0.15s' }}>
        「 用工程化思维把大模型落地为产品 」
      </p>

      {/* 按钮组 */}
      <div className="relative flex justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-full hover:border-accent hover:text-accent hover:bg-blue-50/30 transition-all duration-200 shadow-sm"
          >
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
