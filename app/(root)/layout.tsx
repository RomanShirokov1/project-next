import type { Metadata } from 'next';
import { Header } from '@/components/shared/index';

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen">
        <Header />
        {children}
        {modal}
      </main>
    </html>
  );
}
