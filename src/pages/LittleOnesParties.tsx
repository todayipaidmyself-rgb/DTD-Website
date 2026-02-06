import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { Helmet } from 'react-helmet-async';
import FloatingParticles from "../components/FloatingParticles";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable Lightbox Component
const Lightbox = ({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose 
}: { 
  images: string[], 
  initialIndex: number, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
      >
        <X size={32} />
      </button>

      <button 
        onClick={prevImage}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 hidden md:block"
      >
        <ChevronLeft size={48} />
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 hidden md:block"
      >
        <ChevronRight size={48} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`}
          className={cn(
            "max-w-full max-h-full object-contain transition-opacity duration-300",
            isTransitioning ? "opacity-50" : "opacity-100"
          )}
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default function LittleOnesParties() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/kids_party_superhero.webp",
    "/images/hero_slide_kids_luxury.webp",
    "/images/blog_kids_party_fairy.webp",
    "/images/blog_kids_party_safari.webp",
    "/images/cyprus_kids_party_v2.webp",
    "/images/kids_tea_party.webp",
    "/images/lights-balloons-decor/signature-experiences/superhero-themed-balloon-backdrop-kids-party.webp",
    "/images/lights-balloons-decor/signature-experiences/comic-book-superhero-balloon-arch-birthday.webp",
    "/images/lights-balloons-decor/signature-experiences/pastel-organic-balloon-birthday-arch.webp"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Little Ones Parties | Dress That Day Cyprus</title>
        <meta name="description" content="Imaginative and stylish parties for children in Cyprus. Themed decor, balloon artistry, and magical setups for birthdays and milestones." />
      </Helmet>

      <Navigation />
      <FloatingParticles />

      {/* 1. Editorial Hero */}
      <div className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/hero/little-ones-parties-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          lines={["Little Ones", "Parties"]}
          subtextBelow="Magical moments for the youngest guests"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 hidden">
          <div className="max-w-4xl">
            <span className="block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up font-light">
              Magic & Wonder
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight animate-fade-in-up delay-100 mb-8">
              Little Ones Parties
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              From first birthdays to superhero adventures, we create immersive worlds that spark joy and imagination.
            </p>
          </div>
        </div>
      </div>

      {/* Baby Showers Section */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden order-1 lg:order-1">
              <img 
                src="/images/little-ones/baby-shower-cyprus.webp" 
                alt="Luxury baby shower setup in Cyprus"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-2">
              <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block animate-fade-in-up">
                Celebrate New Beginnings
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight animate-fade-in-up delay-100">
                Baby Showers
              </h2>
              <div className="space-y-6 animate-fade-in-up delay-200">
                <p className="text-gray-600 leading-loose font-light text-lg">
                  Welcome the newest addition with a beautifully styled baby shower that reflects the joy and anticipation of this special moment. Our Cyprus-inspired setups blend soft pastels, organic balloon installations, and elegant table styling to create a sophisticated yet playful atmosphere.
                </p>
                <p className="text-gray-600 leading-loose font-light text-lg">
                  From intimate garden gatherings to larger celebrations, we design every detail with care — fresh florals, premium tableware, and thoughtful touches that make your baby shower as memorable as the journey ahead.
                </p>
              </div>
              <button 
                onClick={() => setLocation("/design-your-day")}
                className="inline-block px-10 py-4 bg-luxury-text text-white tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold transition-colors duration-500 mt-6"
              >
                Design Your Day
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Reveals Section */}
      <div className="relative z-10 bg-[#f8f5f2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block animate-fade-in-up">
                The Big Reveal
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight animate-fade-in-up delay-100">
                Gender Reveals
              </h2>
              <div className="space-y-6 animate-fade-in-up delay-200">
                <p className="text-gray-600 leading-loose font-light text-lg">
                  Make the moment unforgettable with a gender reveal celebration that's as joyful as it is beautiful. We create stunning setups featuring dramatic balloon displays, confetti moments, and premium styling that captures the excitement of discovering whether it's a boy or a girl.
                </p>
                <p className="text-gray-600 leading-loose font-light text-lg">
                  Set against Cyprus's Mediterranean backdrop, our gender reveal parties combine playful energy with sophisticated design — from elegant signage to colour-coordinated details that make your reveal truly spectacular.
                </p>
              </div>
              <button 
                onClick={() => setLocation("/design-your-day")}
                className="inline-block px-10 py-4 bg-luxury-text text-white tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold transition-colors duration-500 mt-6"
              >
                Design Your Day
              </button>
            </div>
            
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden order-1 lg:order-2">
              <img 
                src="/images/little-ones/gender-reveal-cyprus.webp" 
                alt="Joyful gender reveal party setup in Cyprus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Experience Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Childhood Dreams, Realized
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              We believe children's parties should be as stylish as they are fun. Our approach blends playful themes with sophisticated design, ensuring the celebration delights both the little ones and the grown-ups.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Whether your child dreams of a fairy garden, a safari expedition, or a superhero headquarters, we bring it to life with bespoke backdrops, balloon artistry, and curated props.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* 3. Editorial Image Gallery */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Party Inspiration</h3>
            <p className="text-gray-500 font-light">Click to explore our themes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.slice(0, 6).map((src, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/5] overflow-hidden cursor-zoom-in bg-white shadow-sm"
                onClick={() => openLightbox(index)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={src} 
                  alt={`Kids party setup ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundColor = '#f0f0f0';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-white text-xs tracking-[0.2em] uppercase font-light drop-shadow-md">
                    View Detail
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Optional Experience-Specific Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-gray-900">Popular Themes</h3>
              <ul className="space-y-4">
                {[
                  "Enchanted Garden & Fairy Tales",
                  "Safari & Jungle Adventures",
                  "Superhero Academy",
                  "Under the Sea / Mermaid",
                  "Boho Chic & Pastel Dreams",
                  "Space & Astronauts",
                  "Circus & Carnival"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/kids_party_superhero.webp" 
                alt="Superhero party details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Unified Call-To-Action Block */}
      <div className="relative py-32 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Let's Make Magic Happen
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Share your child's dream theme with us, and we'll handle the rest.
          </p>
          <button 
            onClick={() => setLocation("/design-your-day")}
            className="inline-block px-12 py-5 bg-white text-black tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold hover:text-white transition-colors duration-500 mt-8"
          >
            Design Your Day
          </button>
        </div>
      </div>

      <Footer />
      
      <Lightbox 
        images={galleryImages} 
        initialIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />
    </div>
  );
}
