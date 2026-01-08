import './globals.css';
import { GeistMono } from 'geist/font/mono';
import { Metadata, Viewport } from 'next';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'YEEZY',
  description: 'Inspired by yeezy.com, built with Next.js.',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className}`}>
        <Header isBackVisible={false} />
        <div className="flex flex-col min-h-screen h-screen mx-5 overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
