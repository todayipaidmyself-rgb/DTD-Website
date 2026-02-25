import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface PageHeadingProps {
  text?: string;
  lines?: string[];
  subtextBelow?: string;
  className?: string;
  textColor?: string;
  subtextColor?: string;
}

/**
 * PageHeading Component - Live text heading with BrittanySignature font
 * 
 * Replaces PNG heading images with live, responsive text.
 * 
 * Features:
 * - BrittanySignature font for elegant styling
 * - Centered horizontally and vertically using flexbox
 * - Responsive scaling with clamp() for all screen sizes
 * - Gentle glow pulse animation
 * - GSAP animations matching homepage logo behavior
 * - Optional subtext below the heading
 */
export default function PageHeading({ 
  text,
  lines,
  subtextBelow,
  className,
  textColor = "text-white",
  subtextColor = "text-white/90"
}: PageHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtext = subtextRef.current;
    
    if (!heading) return;

    // Match homepage logo animation: soft fade-in with subtle upward motion
    // Duration: 2s, Easing: power2.out, Delay: 0.5s
    gsap.fromTo(
      heading,
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
        "flex flex-col items-center justify-center gap-4 md:gap-6 pt-24 md:pt-28",
        // Positioning and stacking
        "relative z-20 w-full h-full",
        // Pointer events - allow interaction with elements below if needed
        "pointer-events-none",
        className
      )}
    >
      {/* Page Heading - Live text with BrittanySignature font */}
      <h1
        ref={headingRef}
        className={cn("page-heading--inner uppercase", textColor)}
      >
        {lines && lines.length > 0 ? (
          lines.map((line, index) => <span key={index}>{line}</span>)
        ) : (
          <span>{text}</span>
        )}
      </h1>
      
      {/* Subtext - Positioned below heading with proper spacing */}
      {subtextBelow && (
        <p
          ref={subtextRef}
          className={cn(
            // Typography
            subtextColor, "text-center font-light",
            // Responsive sizing
            "text-sm md:text-base lg:text-lg",
            // Spacing and constraints
            "px-4 md:px-6 max-w-xl md:max-w-2xl",
            // Line height for readability
            "leading-relaxed",
            // Prevent layout shift during animation
            "will-change-transform"
          )}
        >
          {subtextBelow}
        </p>
      )}
    </div>
  );
}
