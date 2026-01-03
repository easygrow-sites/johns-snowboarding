import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Johns Snowboarding - Premier Snowboard Hire in Perth, WA',
  description: 'Professional snowboard hire and rental services in Perth, WA. Quality equipment for all skill levels. Same-day service available. Call 1300 567 669.',
  keywords: 'snowboard hire Perth, snowboard rental Perth, snowboard equipment Perth, snowboarding Perth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
