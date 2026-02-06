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

export default function MilestoneParties() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/milestone_elegant_anniversary.webp",
    "/images/milestone_retirement_celebration.webp",
    "/images/milestone_40th_birthday.webp",
    "/images/milestone_graduation_party.webp",
    "/images/milestone_sweet16_birthday.webp",
    "/images/milestone_18th_birthday.webp"
  ];

  const galleryAltTexts = [
    "Elegant anniversary celebration with champagne gold, blush pink and white balloon arch, white wooden marquee lights with diamond cabochon bulbs, palm trees and Mediterranean setting in sunny Cyprus",
    "Sophisticated retirement party with navy blue, silver and white balloon installation, white wooden fairground marquee lights, elegant outdoor furniture setup with palm trees in bright Cyprus daylight",
    "Stylish 40th birthday party with rose gold, copper and cream balloon garland, white wooden marquee lights with diamond effect bulbs, chic table arrangement with palm trees in sunny Cyprus Mediterranean setting",
    "Celebratory graduation party with black, gold and white balloon arrangement, white wooden marquee lights with diamond cabochon bulbs, elegant outdoor setup with palm trees in bright Cyprus sunshine",
    "Elegant Sweet 16 birthday with soft pink, lavender and white balloon installation, white wooden fairground marquee lights, sophisticated setup with palm trees in sunny Cyprus Mediterranean setting",
    "Chic 18th birthday celebration with dusty rose, terracotta, sage green and cream balloon garland, white wooden marquee lights with diamond bulbs, modern elegant setup with palm trees in bright Cyprus daylight"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Luxury Milestone Party Styling Cyprus | Anniversaries, Graduations, Sweet 16 & More | Dress That Day</title>
        <meta name="description" content="Celebrate life's biggest moments with luxury milestone party styling in Cyprus. From 50th anniversaries to sweet 16, graduations to retirement parties, we create unforgettable milestone celebrations with premium decor, balloon installations, and sophisticated table styling in Paphos and Limassol." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Milestone Party Styling Services",
            "description": "Complete milestone celebration styling including venue transformation, custom balloon installations, statement backdrops, table centerpieces, personalized signage, lighting design, and full event coordination for anniversaries, graduations, birthdays, and retirement parties in Cyprus.",
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
          style={{ backgroundImage: 'url("/images/heroes/milestone-parties-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          lines={["Milestone", "Parties"]}
          subtextBelow="Celebrate life's important moments"
        />
      </div>

      {/* 2. Experience Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Marking the Occasion
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Whether it's a sweet 16, graduation celebration, 40th birthday, 50th wedding anniversary, or retirement party, we understand the importance of these landmarks. Our luxury styling elevates each occasion with sophisticated decor, premium balloon installations, and refined table settings that honor the milestone you're celebrating.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              We blend celebratory energy with refined aesthetics, creating milestone events that are not just parties, but tributes to life's most important chapters. From intimate family gatherings to grand celebrations, every detail is crafted to reflect the significance of your special moment.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Milestone Inspiration</h3>
            <p className="text-gray-500 font-light">Click to explore our celebrations</p>
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
                  "Venue styling & transformation",
                  "Custom balloon installations",
                  "Statement backdrops & photo zones",
                  "Premium table centerpieces & linens",
                  "Personalized signage & milestone details",
                  "Professional lighting & atmosphere",
                  "Complete vendor coordination",
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
                src="/images/milestone_parties_detail.webp" 
                alt="Luxury milestone celebration table setting with gold charger plates, white roses eucalyptus garland, pillar candles, crystal glassware in elegant Cyprus outdoor terrace" 
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
            Ready to Celebrate Your Milestone?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Let us make your milestone celebration unforgettable.
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
