import type { Metadata } from 'next';
import { Header } from '@/components/shared/index';
import { nunito } from '@/lib/font';
import { cn } from '@/lib/utils';

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
      <main className={cn('min-h-screen', nunito.className)}>
        <Header />
        {children}
        {modal}
      </main>
    </html>
  );
}
