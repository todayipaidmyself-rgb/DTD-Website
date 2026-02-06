import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import FloatingParticles from "../components/FloatingParticles";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Christenings() {
  const [, setLocation] = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      if (textRef.current) {
        const scrolled = window.scrollY;
        const opacity = 1 - Math.min(1, scrolled / 500);
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff4f7] overflow-hidden">
      <Helmet>
        <title>Luxury Christenings | Dress That Day Cyprus</title>
        <meta name="description" content="Elegant christening styling in Cyprus. Creating pure, timeless settings for your child's special day with bespoke floral and decor design." />
      </Helmet>

      <Navigation />
      <FloatingParticles />
      
      {/* Parallax Hero */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/images/experiences/christening-luxury.webp")',
            height: '120%' // Extra height for parallax
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div 
          ref={textRef}
          className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10"
        >
          <span className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            A Sacred Celebration
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in-up delay-100">
            Christenings
          </h1>
          <p className="font-light text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Timeless elegance for a day of purity and joy. We create serene, beautiful settings that honor tradition while embracing modern sophistication.
          </p>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px] overflow-hidden group">
              <img 
                src="/images/new_collection/7.webp" 
                alt="Christening Detail" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                Pure & Timeless
              </h2>
              <p className="text-gray-600 leading-loose font-light text-lg">
                From the church entrance to the reception venue, we weave a thread of elegance throughout the day. Think soft whites, delicate florals, and refined details that create a calm, welcoming atmosphere for your guests.
              </p>
              <p className="text-gray-600 leading-loose font-light text-lg">
                Whether you envision a classic "Little Prince" theme or a modern botanical aesthetic, our styling ensures your child's christening is as beautiful as the meaning behind it.
              </p>
              <button 
                onClick={() => setLocation("/design-your-day")}
                className="luxury-cta-btn inline-block mt-8 px-8 py-4 bg-gray-900 text-white tracking-widest text-sm hover:bg-[#d4af37] transition-colors duration-500"
              >
                START PLANNING
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
