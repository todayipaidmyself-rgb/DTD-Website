import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface ExperiencesOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  experienceGroups: {
    title: string;
    items: {
      name: string;
      href: string;
      subtext: string;
    }[];
  }[];
}

export default function ExperiencesOverlay({ isOpen, onClose, experienceGroups }: ExperiencesOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const groupsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Open Animation
      const ctx = gsap.context(() => {
        // 1. Overlay Background Fade In
        gsap.fromTo(overlayRef.current,
          { opacity: 0, visibility: 'hidden' },
          { opacity: 1, visibility: 'visible', duration: 0.5, ease: "power2.out" }
        );
        
        // 2. Content Container Scale & Fade
        gsap.fromTo(contentRef.current,
          { scale: 0.98, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
        );

        // 3. Micro-Tagline Fade In
        gsap.fromTo(taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3 }
        );

        // 4. Groups Staggered Fade In
        gsap.fromTo(groupsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 }
        );

        // 5. CTA Fade In
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.8 }
        );

      }, overlayRef);
      
      return () => ctx.revert();
    } else {
      // Unlock body scroll
      document.body.style.overflow = '';
      
      // Close Animation (Optional: if we want to animate out before unmounting, 
      // but since isOpen controls rendering, we might need a transition state. 
      // For now, simple unmount is fine as per requirement "Reverse fade and scale" 
      // which is handled by the component unmounting or we can add an exit animation if needed later)
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[60] bg-[#121216] flex items-center justify-center opacity-0 invisible"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Close Button - Top Right */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors duration-300 p-2 z-[70]"
        aria-label="Close Menu"
      >
        <X size={32} strokeWidth={1} />
      </button>

      {/* Content Container */}
      <div 
        ref={contentRef}
        className="container mx-auto px-6 max-w-7xl h-full flex flex-col justify-center relative overflow-y-auto py-20 md:py-0 z-[65]"
      >
        {/* Micro-Tagline */}
        <div ref={taglineRef} className="text-center mb-16 opacity-0">
          <p className="text-[#d6c5a3] text-xs uppercase tracking-[0.3em] font-light opacity-80">
            Curated experiences designed to turn moments into memories.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-10 md:pb-0">
          {experienceGroups.map((group, index) => (
            <div 
              key={group.title} 
              ref={(el) => { groupsRef.current[index] = el; }}
              className="space-y-6 opacity-0"
            >
              <h3 className="text-[#d6c5a3] text-xs uppercase tracking-[0.25em] font-medium border-b border-white/10 pb-4 mb-6 opacity-80">
                {group.title}
              </h3>
              <div className="flex flex-col space-y-5">
                {group.items.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="group/item block"
                    onClick={onClose}
                  >
                    <div className="text-base text-[#f4f4f2] group-hover/item:text-luxury-gold transition-colors duration-300 font-light tracking-wide">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#cbb994] font-light mt-1 opacity-60 group-hover/item:opacity-100 transition-all duration-300 ease-out leading-relaxed">
                      {item.subtext}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-20 text-center opacity-0">
          <Link 
            href="/design-your-day"
            className="luxury-cta-btn inline-block px-10 py-4 bg-white text-luxury-text text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-white shadow-2xl transition-all duration-300"
            onClick={onClose}
          >
            <span className="relative z-10 font-medium">Design Your Day</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
