export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 border-t border-gray-100 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} dfy ·{' '}
        <a href="https://github.com/dfy" className="hover:text-accent transition-colors">
          GitHub
        </a>
        {' · '}
        <a href="mailto:1711135028@qq.com" className="hover:text-accent transition-colors">
          Email
        </a>
      </p>
    </footer>
  );
}
