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

export default function ThemedParties() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/themed_marvel_party_6.webp",
    "/images/themed_dc_party_10.webp",
    "/images/themed_frozen_party_7.webp",
    "/images/themed_moana_party_12.webp",
    "/images/themed_disney_party_8.webp",
    "/images/themed_princess_party_5.webp"
  ];

  const galleryAltTexts = [
    "Marvel Avengers superhero themed 6th birthday party with red, blue, gold and black balloon installation, white marquee number 6 lights, Captain America shields and Iron Man elements in sunny Cyprus Mediterranean setting with palm trees",
    "DC Comics superhero themed 10th birthday party with Batman, Superman, Wonder Woman and Flash elements, navy blue red yellow balloon garland, white marquee number 10 lights in bright Cyprus outdoor setting with sea views",
    "Disney Frozen themed 7th birthday party with ice blue, purple and silver balloons, Elsa and Olaf elements, white marquee number 7 lights in warm sunny Cyprus Mediterranean setting with palm trees",
    "Disney Moana tropical themed 12th birthday party with turquoise, coral and green balloon garland, tropical flowers and Polynesian patterns, white marquee number 12 lights in sunny Cyprus setting with palm trees and sea views",
    "Classic Disney themed 8th birthday party with Mickey Mouse colors red yellow black, castle designs and Disney character elements, white marquee number 8 lights in bright Cyprus Mediterranean outdoor setting with palm trees",
    "Princess themed 5th birthday party with soft pink, lavender and rose gold balloon garland, crowns and tiaras, white marquee number 5 lights in sunny Cyprus Mediterranean setting with elegant styling"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Luxury Themed Party Styling Cyprus | Superman, Marvel, Moana, Frozen & More | Dress That Day</title>
        <meta name="description" content="Immersive character-themed party styling in Cyprus. From Superman and Marvel superheroes to Moana, Frozen, Cars, and fairy tale princesses, we create unforgettable themed celebrations with premium decor, balloon installations, and luxury table styling in Paphos and Limassol." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Themed Party Styling Services",
            "description": "Complete themed party styling including custom concept development, themed props and furniture rental, immersive backdrops and installations, table styling, lighting design, and full event coordination in Cyprus.",
            "provider": {
              "@type": "Organization",
              "name": "Dress That Day",
              "url": "https://dressthatday.site"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Cyprus"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingParticles />

      {/* 1. Editorial Hero */}
      <div className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/hero/themed-parties-superhero-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          lines={["Themed", "Parties"]}
          subtextBelow="Creative concepts brought to life"
        />
      </div>

      {/* 2. Experience Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Beyond Imagination
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Whether it's a Superman adventure, Marvel superhero celebration, Moana tropical paradise, Frozen winter wonderland, Lightning McQueen racing experience, or Snow White fairy tale, we don't just decorate—we transport your guests into immersive themed experiences. Our styling is all about the details: props, backdrops, balloon installations, and table settings that collectively tell a compelling story.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              We work with you to develop a cohesive concept that surprises and delights your guests, ensuring every corner of the event space contributes to the magic. From intimate children's parties to grand themed galas, we bring your creative vision to life with exceptional attention to detail.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Theme Inspiration</h3>
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
                  alt={galleryAltTexts[index]}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={2150}
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

      {/* 4. What's Included Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-gray-900">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Custom concept development",
                  "Themed props & furniture rental",
                  "Immersive backdrops & installations",
                  "Premium balloon arrangements",
                  "Table styling & centerpieces",
                  "Lighting design & ambiance",
                  "Vendor coordination",
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
                src="/images/themed_parties_detail.webp" 
                alt="Professional event stylist hands arranging colorful themed party decor with superhero masks, princess crowns, Disney props, balloons and elegant table settings in sunny Cyprus" 
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Unified Call-To-Action Block */}
      <div className="relative py-32 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to Transform Your Event?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Let us bring your wildest themed party ideas to life.
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
/* Force rebuild - Wed Dec 24 04:25:09 EST 2025 */
