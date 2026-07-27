import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Quicksand } from 'next/font/google';

interface LayoutProps {
  children: ReactNode;
}

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export function Layout({ children }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-orange-50 flex flex-col ${quicksand.className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
