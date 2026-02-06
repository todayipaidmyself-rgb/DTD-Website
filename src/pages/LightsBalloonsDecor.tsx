import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import FloatingParticles from "../components/FloatingParticles";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SignatureBalloonExperiences from "@/components/SignatureBalloonExperiences";
import SignatureLightExperiences from "@/components/SignatureLightExperiences";

// Lightbox Component
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

// Editorial Slider Component
const EditorialSlider = ({ images, id }: { images: string[], id: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const current = scrollRef.current;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <div 
              key={index} 
              className="flex-none w-[85vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] relative snap-center overflow-hidden cursor-zoom-in group/image"
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 z-10" />
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/image:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        images={images} 
        initialIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />
    </>
  );
};

export default function LightsBalloonsDecor() {
  const [, setLocation] = useLocation();

  // Image Collections - Complete Set
  const lightsImages = [
    "/images/lights-decor/IMG_2228.webp",
    "/images/lights-decor/IMG_2229.JPG",
    "/images/lights-decor/IMG_2230.JPG",
    "/images/lights-decor/IMG_8524.webp",
    "/images/lights-decor/IMG_8163.JPG",
    "/images/lights-decor/8cbf57def198102608709aac1848afc7.webp",
    "/images/lights-decor/2791548de8b44a95b1a031cb8a76f033-0001.webp"
  ];

  const wordsImages = [
    "/images/lights-decor/SEA YOU BEACH BAR MARRY ME CYPRUS 13.webp",
    "/images/lights-decor/IMG_2068.JPG",
    "/images/lights-decor/IMG_0400.JPG",
    "/images/lights-decor/Santa Marina Villa Paphos Marry Me Cyprus 23.JPG",
    "/images/lights-decor/C286468B-F893-401A-A3FE-DCB3A6221F92.webp"
  ];

  const balloonsImages = [
    "/images/lights-decor/IMG_6701.JPG",
    "/images/lights-decor/IMG_6702.JPG",
    "/images/lights-decor/IMG_6703.JPG",
    "/images/lights-decor/IMG_6707.JPG",
    "/images/lights-decor/IMG_6709.JPG",
    "/images/lights-decor/IMG_6712.JPG",
    "/images/lights-decor/IMG_6715.JPG",
    "/images/lights-decor/IMG_6717.JPG",
    "/images/lights-decor/IMG_6719.JPG",
    "/images/lights-decor/IMG_6722.JPG",
    "/images/lights-decor/IMG_6727.JPG",
    "/images/lights-decor/IMG_6732.JPG",
    "/images/lights-decor/IMG_6735.JPG",
    "/images/lights-decor/IMG_6739.JPG",
    "/images/lights-decor/IMG_6744.JPG",
    "/images/lights-decor/IMG_6745.JPG",
    "/images/lights-decor/MMCA-27.webp",
    "/images/lights-decor/MMCA-30.webp",
    "/images/lights-decor/MMC-Christening Setup Alassos-1.webp",
    "/images/lights-decor/MMC-Christening Setup Alassos-60.webp"
  ];

  const decorImages = [
    "/images/lights-decor/IMG_6701.JPG",
    "/images/lights-decor/IMG_6715.JPG",
    "/images/lights-decor/IMG_6739.JPG",
    "/images/lights-decor/IMG_6745.JPG",
    "/images/lights-decor/IMG_6702.JPG",
    "/images/lights-decor/IMG_6712.JPG",
    "/images/lights-decor/IMG_6703.JPG",
    "/images/lights-decor/IMG_6707.JPG",
    "/images/lights-decor/IMG_6709.JPG",
    "/images/lights-decor/IMG_6717.JPG",
    "/images/lights-decor/IMG_6719.JPG",
    "/images/lights-decor/IMG_6722.JPG",
    "/images/lights-decor/IMG_6727.JPG",
    "/images/lights-decor/IMG_6732.JPG",
    "/images/lights-decor/IMG_6735.JPG",
    "/images/lights-decor/IMG_6744.JPG"
  ];

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Lights, Balloons & Event Decor | Luxury Event Styling Cyprus | Dress That Day</title>
        <meta name="description" content="Premium event styling services in Cyprus featuring illuminated marquee letters, organic balloon installations, table styling, floral design, and curated prop hire for weddings, proposals, birthdays, and milestone celebrations." />
        <meta name="keywords" content="Cyprus event styling, marquee lights Cyprus, balloon installations Cyprus, luxury event decor, wedding lights Cyprus, proposal styling, table styling Cyprus, floral design Cyprus, event props Cyprus, organic balloon arches, themed balloon experiences" />
        <meta property="og:title" content="Lights, Balloons & Event Decor | Dress That Day Cyprus" />
        <meta property="og:description" content="Transform your Cyprus celebration with premium light installations, bespoke balloon styling, and elegant event decor." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero/lights-balloons-decor-hero.webp" />
        <link rel="canonical" href="https://dressthatday.com/experiences/lights-balloons-event-decor" />
      </Helmet>

      <Navigation />
      <FloatingParticles />
      
      {/* 1) Editorial Hero - Stable Background */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/hero/lights-balloons-decor-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <PageHeading
          lines={["Lights, Balloons", "& Event Decor"]}
          subtextBelow="Premium styling and installation services"
        />
        
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10 hidden">
          <div className="overflow-hidden">
            <span className="block text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up font-light">
              The Art of Celebration
            </span>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight animate-fade-in-up delay-100">
              Lights, Balloons & Event Decor
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <p className="font-light text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-200 text-white/90">
              Illuminate your celebration with premium styling and installation
            </p>
          </div>
          <button 
            onClick={() => setLocation("/design-your-day")}
            className="px-10 py-4 border border-white/30 text-white tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-black transition-all duration-500 animate-fade-in-up delay-300 backdrop-blur-sm"
          >
            Design Your Day
          </button>
        </div>
      </div>

      {/* Editorial Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            Signature Event Styling
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Where Light, Form &<br/>Atmosphere Come Together
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              From softly glowing statement lights to sculptural balloon installations and refined decorative details, each element is designed to transform a space into an experience. Our approach to styling is intentional and layered — combining light, texture, and movement to create moments that feel immersive, elevated, and unforgettable.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Every installation is thoughtfully curated to complement the setting, enhance the atmosphere, and frame life’s most meaningful celebrations with beauty and intention.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* Signature Light Styling Experiences */}
      <SignatureLightExperiences />

      {/* Signature Balloon Styling Experiences */}
      <SignatureBalloonExperiences />

      {/* 6) Event Decor & Styling */}
      <div className="relative z-10 bg-[#1a1a1a] text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-4">The Finishing Touch</span>
            <h2 className="font-serif text-4xl md:text-6xl">Event Decor & Styling</h2>
          </div>
          
          <EditorialSlider images={decorImages} id="decor" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/lights-balloons-decor/event-decor-table-styling.webp" 
                  alt="Luxury table styling with fine linens, crystal glassware, and gold accents in Cyprus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-3">Table Styling</h3>
                <p className="font-light text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Exquisite tablescapes featuring fine linens, crystal glassware, and bespoke centerpieces.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/lights-balloons-decor/event-decor-floral-design.webp" 
                  alt="Fresh seasonal floral arrangements with white roses and eucalyptus for Cyprus events"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-3">Floral Design</h3>
                <p className="font-light text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Fresh, seasonal blooms arranged with an artistic eye to bring life and fragrance.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/lights-balloons-decor/event-decor-prop-hire.webp" 
                  alt="Curated event furniture and decorative props for Cyprus luxury celebrations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-3">Prop Hire</h3>
                <p className="font-light text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Curated furniture and decorative accents that add character and define style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7) Closing CTA */}
      <div className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/images/lights-decor/IMG_6715.JPG")',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-12 leading-tight">
            Let's Create Something<br/>Extraordinary
          </h2>
          <button 
            onClick={() => setLocation("/design-your-day")}
            className="px-12 py-5 bg-white text-black tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold hover:text-white transition-colors duration-500"
          >
            Design Your Day
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
