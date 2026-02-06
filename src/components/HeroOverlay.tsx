import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface HeroOverlayProps {
  imagePath: string;
  altText: string;
  subtextBelow?: string;
  subtextClassName?: string;
  className?: string;
}

/**
 * HeroOverlay Component - Standardized hero heading overlay
 * 
 * Uses flexbox centering (not absolute positioning) for better reliability
 * across different parent containers and viewport sizes.
 * 
 * Features:
 * - Centered horizontally and vertically using flexbox
 * - Responsive scaling with max-width/max-height constraints
 * - Proper z-index stacking (z-20 to sit above background images)
 * - GSAP animations matching homepage logo behavior
 * - Mobile-first responsive design
 */
export default function HeroOverlay({ 
  imagePath, 
  altText,
  subtextBelow,
  subtextClassName,
  className 
}: HeroOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const subtext = subtextRef.current;
    
    if (!overlay) return;

    // Match homepage logo animation: soft fade-in with subtle upward motion
    // Duration: 2s, Easing: power2.out, Delay: 0.5s
    gsap.fromTo(
      overlay,
      { 
        opacity: 0, 
        scale: 0.95, 
        y: 30, 
        filter: "blur(10px)" 
      },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        filter: "blur(0px)", 
        duration: 2, 
        ease: "power2.out", 
        delay: 0.5 
      }
    );

    // Animate subtext if present
    // Duration: 1.5s, Easing: power2.out, Delay: 1.2s
    if (subtext) {
      gsap.fromTo(
        subtext,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out", 
          delay: 1.2 
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Flexbox centering - reliable across all parent containers
        "flex flex-col items-center justify-center gap-2 md:gap-4",
        // Positioning and stacking
        "relative z-20 w-full h-full",
        // Pointer events - allow interaction with elements below if needed
        "pointer-events-none",
        className
      )}
    >
      {/* Overlay Image - Responsive sizing with safe constraints */}
      <img
        ref={overlayRef}
        src={imagePath}
        alt={altText}
        className={cn(
          // Responsive sizing
          "w-auto h-auto",
          // Max constraints to prevent oversizing
          "max-w-[100%] md:max-w-[95%] lg:max-w-[90%]",
          "max-h-[65%] md:max-h-[75%] lg:max-h-[80%]",
          // Object fit for proper scaling
          "object-contain",
          // Prevent layout shift during animation
          "will-change-transform"
        )}
      />
      
      {/* Subtext - Positioned below overlay with proper spacing */}
      {subtextBelow && (
        <p
          ref={subtextRef}
          className={cn(
            // Typography
            "text-white/90 text-center font-light",
            // Responsive sizing
            "text-sm md:text-base lg:text-lg",
            // Spacing and constraints
            "px-4 md:px-6 max-w-xl md:max-w-2xl",
            // Line height for readability
            "leading-relaxed",
            // Prevent layout shift during animation
            "will-change-transform",
            subtextClassName
          )}
        >
          {subtextBelow}
        </p>
      )}
    </div>
  );
}
