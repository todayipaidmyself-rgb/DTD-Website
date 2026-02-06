import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import FloatingParticles from "../components/FloatingParticles";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

export default function KidsParties() {
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
        <title>Luxury Kids Parties | Dress That Day Cyprus</title>
        <meta name="description" content="Magical kids party styling in Cyprus. From fairy tales to superheroes, we create enchanting worlds for your little ones to explore." />
      </Helmet>

      <Navigation />
      <FloatingParticles />
      
      {/* Parallax Hero */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/images/experiences/kids-parties-hero.webp")',
            height: '120%' // Extra height for parallax
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div 
          ref={textRef}
          className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10"
        >
          <span className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Little Dreams, Big Memories
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in-up delay-100">
            Kids Parties
          </h1>
          <p className="font-light text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Where imagination takes flight. We craft magical environments that turn childhood dreams into reality, creating a day of wonder for your little ones.
          </p>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                Playful Elegance
              </h2>
              <p className="text-gray-600 leading-loose font-light text-lg">
                We believe kids' parties can be both fun and stylish. Our approach blends playful themes with sophisticated design, ensuring the event is enjoyable for children and visually stunning for adults.
              </p>
              <p className="text-gray-600 leading-loose font-light text-lg">
                From custom dessert tables to interactive play areas, every element is designed to spark joy and creativity, making your child's special day truly unforgettable.
              </p>
              <button 
                onClick={() => setLocation("/design-your-day")}
                className="luxury-cta-btn inline-block mt-8 px-8 py-4 bg-gray-900 text-white tracking-widest text-sm hover:bg-[#d4af37] transition-colors duration-500"
              >
                START PLANNING
              </button>
            </div>
            <div className="relative h-[600px] overflow-hidden group">
              <img 
                src="/images/new_collection/19.webp" 
                alt="Kids Party Detail" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
