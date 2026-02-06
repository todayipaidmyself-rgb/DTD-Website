import { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';
import useLocomotiveScroll from '@/hooks/useLocomotiveScroll';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isHome = location === "/";
  const { containerRef } = useLocomotiveScroll(true);

  return (
    <div className="bg-luxury-blush min-h-screen flex flex-col">
      <Navigation />
      
      <main
        ref={containerRef}
        data-scroll-container
        className={cn(
          "flex-grow",
          !isHome && "pt-28 md:pt-32"
        )}
      >
        {children}
        <Footer />
        <WhatsAppButton />
      </main>
    </div>
  );
}
