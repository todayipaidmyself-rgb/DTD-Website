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

export default function NewYearsEve() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/experiences/new-years-eve/inspo/nye_gallery_1.webp",
    "/images/experiences/new-years-eve/inspo/nye_gallery_2.webp",
    "/images/experiences/new-years-eve/inspo/nye_gallery_3.webp",
    "/images/nye_closeup_floral.webp",
    "/images/nye_closeup_dining.webp",
    "/images/nye_closeup_balloons.webp"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Luxury New Year's Eve Party Planning Cyprus | Dress That Day</title>
        <meta name="description" content="Spectacular New Year's Eve party styling and event planning in Cyprus. Ring in the new year with glamorous decor, champagne towers, balloon drops, and unforgettable celebration design. NYE events in Limassol, Paphos, Larnaca, Nicosia." />
        <meta name="keywords" content="New Year's Eve Cyprus, NYE party planning Cyprus, New Year party styling Paphos, New Year event planner Limassol, champagne tower Cyprus, balloon drop Cyprus, midnight celebration Cyprus, New Year gala Cyprus, countdown party Cyprus, luxury NYE events Cyprus, New Year's Eve decor Cyprus, party planner Cyprus, event styling Cyprus" />
        <link rel="canonical" href="https://dressthatday.com/experiences/new-years-eve" />
        <meta property="og:title" content="Luxury New Year's Eve Party Planning Cyprus | Dress That Day" />
        <meta property="og:description" content="Spectacular New Year's Eve party styling and event planning in Cyprus. Ring in the new year with glamorous decor, champagne towers, balloon drops, and unforgettable celebration design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dressthatday.com/experiences/new-years-eve" />
        <meta property="og:image" content="https://dressthatday.com/images/heroes/new-years-eve-hero.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "New Year's Eve Party Planning",
            "description": "Spectacular New Year's Eve party styling and event planning in Cyprus with glamorous decor, champagne towers, and balloon installations.",
            "provider": {
              "@type": "Organization",
              "name": "Dress That Day",
              "url": "https://dressthatday.com"
            },
            "areaServed": "Cyprus",
            "serviceType": "Event Planning"
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingParticles />

      {/* 1. Editorial Hero */}
      <div className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/heroes/new-years-eve-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          lines={["New Years", "Eve"]}
          subtextBelow="Ring in the new year in style"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 hidden">
          <div className="max-w-4xl">
            <span className="block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up font-light">
              Midnight Glamour
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight animate-fade-in-up delay-100 mb-8">
              New Year's Eve
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              A night of sparkle and anticipation. We design spectacular New Year's Eve events that set the tone for a year of luxury and joy.
            </p>
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
            Countdown to Luxury
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Gold, glitter, and glamour define our New Year's Eve styling. We create high-energy environments perfect for dancing the night away and toasting to new beginnings.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              From dramatic balloon drops to elegant champagne towers, we ensure every moment leading up to midnight is picture-perfect and filled with excitement.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* 3. Editorial Image Gallery */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">NYE Inspiration</h3>
            <p className="text-gray-500 font-light">Click to explore our setups</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/5] overflow-hidden cursor-zoom-in bg-white shadow-sm"
                onClick={() => openLightbox(index)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={src} 
                  alt={[
                    "Luxury black and gold New Year's Eve party decor setup in Cyprus with balloon garland and 2025 marquee numbers",
                    "Elegant silver and white winter wonderland NYE celebration styling in Cyprus villa",
                    "Rose gold and champagne New Year's Eve outdoor terrace decor with sea view in Cyprus",
                    "Sophisticated navy blue and gold NYE party styling with illuminated 2025 letters in Cyprus",
                    "Burgundy and gold luxe New Year's Eve celebration decor on Mediterranean terrace",
                    "Emerald green and gold festive NYE party setup in Cyprus stone villa"
                  ][index]}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  loading="lazy"
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
              <h3 className="font-serif text-3xl text-gray-900">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Glamorous venue styling",
                  "Champagne towers & bar styling",
                  "Balloon drops & installations",
                  "Photo booths & backdrops",
                  "Lighting & special effects",
                  "Table decor & centerpieces",
                  "Full setup & breakdown"
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
                src="/images/experiences/new-years-eve/inspo/nye_details.webp"
                loading="lazy" 
                alt="Luxury New Year's Eve table styling detail with gold charger, 2025 napkin ring, champagne flute, and Mediterranean sea view in Cyprus" 
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
            Ready to Ring in the New Year?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Let us create a spectacular celebration for you.
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
