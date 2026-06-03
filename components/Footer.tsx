export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} dfy</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/DFY0725"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:1711135028@qq.com"
            className="hover:text-gray-600 transition-colors"
          >
            Email
          </a>
          <span className="text-gray-200">|</span>
          <a
            href="/resume.pdf"
            className="hover:text-gray-600 transition-colors"
          >
            简历 PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
