export default function Hero() {
  const links = [
    { label: 'GitHub', url: 'https://github.com/DFY0725' },
    { label: 'Email', url: 'mailto:1711135028@qq.com' },
    { label: '下载简历', url: '/resume.pdf' },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
      <h1 className="text-5xl font-bold tracking-widest text-[#111] mb-4">
        dfy
      </h1>
      <p className="text-lg text-gray-500 mb-2">
        AI 应用开发 · LLM 应用开发
      </p>
      <p className="text-gray-400 mb-8 text-sm">
        「用工程化思维把大模型落地为产品」
      </p>
      <div className="flex justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
