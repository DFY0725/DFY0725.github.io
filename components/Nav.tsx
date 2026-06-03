import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full max-w-3xl mx-auto px-6 py-4 flex justify-end gap-6 text-sm text-gray-500">
      <Link href="/" className="hover:text-accent transition-colors">
        首页
      </Link>
      <Link href="/#projects" className="hover:text-accent transition-colors">
        项目
      </Link>
      <Link href="/#about" className="hover:text-accent transition-colors">
        关于
      </Link>
    </nav>
  );
}
