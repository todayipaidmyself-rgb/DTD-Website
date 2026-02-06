import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export default function RevealText({ 
  text, 
  className, 
  delay = 0, 
  tag: Tag = 'div' 
}: RevealTextProps) {
  const textRef = useRef<any>(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    // Split text into words/chars logic could go here for more complex animations
    // For now, we'll do a simple reveal from bottom
    
    gsap.fromTo(element, 
      { 
        y: 100, 
        opacity: 0,
        rotateX: -20
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        }
      }
    );
  }, [text, delay]);

  return (
    <div className="overflow-hidden">
      <Tag ref={textRef} className={cn("transform-gpu", className)}>
        {text}
      </Tag>
    </div>
  );
}
