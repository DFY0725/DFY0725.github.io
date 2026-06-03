import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'dfy — AI 应用开发工程师',
    template: '%s — dfy',
  },
  description:
    'AI 应用开发工程师，专注 LLM 应用开发、RAG、Agent。安徽大学信息管理与信息系统 2026 届毕业生。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-[#111] font-sans">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
