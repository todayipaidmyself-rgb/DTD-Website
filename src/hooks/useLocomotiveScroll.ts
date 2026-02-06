import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocomotiveScroll(start: boolean = true) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!start || !containerRef.current) return;

    const scrollEl = containerRef.current;
    
    // Detect if device is mobile
    const isMobile = window.innerWidth < 768;

    const options = {
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      // Disable smooth scrolling on mobile for native performance
      smartphone: {
        smooth: false, 
      },
      tablet: {
        smooth: true,
        breakpoint: 1024
      }
    };

    // @ts-ignore - Force bypass of type checking for the constructor
    const scroll = new LocomotiveScroll(options);
    scrollRef.current = scroll;

    // Dispatch custom event for Navigation component
    scroll.on('scroll', (args: any) => {
      if (typeof args.scroll?.y === 'number') {
        window.dispatchEvent(new CustomEvent('locomotive-scroll', { 
          detail: { y: args.scroll.y } 
        }));
      }
    });

    // Update scroll on resize
    const resizeObserver = new ResizeObserver(() => {
      scrollRef.current?.update();
    });
    
    resizeObserver.observe(scrollEl);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
      resizeObserver.disconnect();
    };
  }, [start]);

  return { scrollRef, containerRef };
}
