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
          decoding="async"
          width={1200}
          height={800}
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default function PicnicParties() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/experiences/picnic/inspo/picnic-inspo-1.webp",
    "/images/experiences/picnic/inspo/picnic-inspo-2.webp",
    "/images/experiences/picnic/inspo/picnic-inspo-3.webp",
    "/images/experiences/picnic/inspo/picnic-inspo-4.webp",
    "/images/experiences/picnic/inspo/picnic-inspo-5.webp",
    "/images/experiences/picnic/inspo/picnic-inspo-6.webp"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Luxury Picnic Parties | Dress That Day Cyprus</title>
        <meta name="description" content="Elegant outdoor picnic experiences in Cyprus. Perfect for birthdays, bridal showers, and intimate gatherings." />
      </Helmet>

      <Navigation />
      <FloatingParticles />

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden" data-page="PicnicParties">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/hero/picnic-parties-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          text="PICNIC PARTIES"
          subtextBelow="Sophisticated outdoor dining experiences designed for connection and celebration."
          className="pt-24 md:pt-28"
        />
      </div>

      {/* 2. Experience Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Beautifully styled beach and garden picnic experiences designed for relaxed celebrations across Cyprus.
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              From intimate moments for two to elegant picnic parties, each setup is thoughtfully curated with calm styling, soft textures, and refined detail — allowing you to simply arrive and enjoy.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* 3. Signature Picnic Experiences (Dropdowns) */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-12 text-center">Signature Picnic Experiences</h3>
          
          <div className="space-y-4">
            {[
              {
                title: "Afternoon Picnic (For Two)",
                price: "From €149",
                content: [
                  "Savoury & sweet treat basket",
                  "Bottle of bubbly & Swiss chocolates",
                  "Hand-tied seasonal flowers",
                  "Portable music system"
                ]
              },
              {
                title: "Sunset Beach Picnic (For Two)",
                price: "From €159",
                content: [
                  "Sunset picnic styling",
                  "Bubbly, sweets & flowers",
                  "Portable music system"
                ]
              },
              {
                title: "Love Picnic (For Two)",
                price: "From €199",
                content: [
                  "Sunset picnic styling",
                  "Bubbly and floral enhancements"
                ]
              },
              {
                title: "Beach Sunset Table Picnic (For Two)",
                price: "From €329",
                content: [
                  "Full picnic table setup",
                  "Fairy-light star canopy arch",
                  "Savoury & sweet basket",
                  "Bubbly & Swiss chocolates",
                  "Return transport included"
                ]
              }
            ].map((item, index) => (
              <details key={index} className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-serif text-xl text-gray-900">{item.title}</span>
                  <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                    <ChevronRight />
                  </span>
                </summary>
                <div className="px-6 pb-6 animate-fade-in">
                  <ul className="space-y-3 mb-6">
                    {item.content.map((line, i) => (
                      <li key={i} className="text-gray-600 font-light flex items-center gap-3">
                        <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="text-luxury-gold font-medium tracking-wide">{item.price}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Additional Information (Dropdowns) */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          
          {/* Picnic Parties & Group Celebrations */}
          <details className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-serif text-xl text-gray-900">Picnic Parties & Group Celebrations</span>
              <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                <ChevronRight />
              </span>
            </summary>
            <div className="px-6 pb-6 animate-fade-in">
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Picnic parties are ideal for birthdays, anniversaries, family gatherings, and special occasions.
                Available for 2–20 guests, with styling tailored to your group size, theme, and location.
              </p>
              <p className="text-luxury-gold font-medium tracking-wide">From €399+ (final pricing depends on theme and number of guests)</p>
            </div>
          </details>

          {/* Styling Themes */}
          <details className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-serif text-xl text-gray-900">Styling Themes</span>
              <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                <ChevronRight />
              </span>
            </summary>
            <div className="px-6 pb-6 animate-fade-in">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Sienna Beach", "Sage Sunset", "Ocean Garden", 
                  "Country Chic", "Princess Pastels", "Rustic Boho", 
                  "Kiddies Picnics & Afternoon Tea"
                ].map((theme, i) => (
                  <li key={i} className="text-gray-600 font-light flex items-center gap-3">
                    <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                    {theme}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm italic">Each theme is styled with coordinated décor, colour palettes, and finishing touches.</p>
            </div>
          </details>

          {/* Kiddies Picnics & Afternoon Tea */}
          <details className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-serif text-xl text-gray-900">Kiddies Picnics & Afternoon Tea</span>
              <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                <ChevronRight />
              </span>
            </summary>
            <div className="px-6 pb-6 animate-fade-in">
              <p className="text-gray-600 font-light mb-4">Children’s picnic experiences include:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Child-friendly food selections",
                  "Juice or lemonade in styled jars",
                  "Mini picnic setups"
                ].map((item, i) => (
                  <li key={i} className="text-gray-600 font-light flex items-center gap-3">
                    <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 font-light">Little Ladies Afternoon Tea is also available — beautifully themed and perfect for celebrations.</p>
            </div>
          </details>

          {/* Dry Hire Picnic Styling */}
          <details className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-serif text-xl text-gray-900">Dry Hire Picnic Styling</span>
              <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                <ChevronRight />
              </span>
            </summary>
            <div className="px-6 pb-6 animate-fade-in">
              <p className="text-gray-600 font-light mb-4">Prefer to bring your own food? Dry hire styling includes:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Blankets & cushions",
                  "Low tables",
                  "Styling décor"
                ].map((item, i) => (
                  <li key={i} className="text-gray-600 font-light flex items-center gap-3">
                    <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-luxury-gold font-medium tracking-wide">From €25–€40 per person (Minimum 2 guests)</p>
            </div>
          </details>

          {/* Locations & Travel */}
          <details className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-serif text-xl text-gray-900">Locations & Travel</span>
              <span className="text-luxury-gold transform group-open:rotate-180 transition-transform duration-300">
                <ChevronRight />
              </span>
            </summary>
            <div className="px-6 pb-6 animate-fade-in">
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Prices shown are for Paphos. Travel charges apply for Limassol, Larnaca, Nicosia, Agia Napa, Polis & Protaras.
              </p>
              <p className="text-gray-500 text-sm italic">Travel fees quoted on request.</p>
            </div>
          </details>

        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="font-serif text-3xl text-gray-900 mb-6">Download the Picnic Parties Brochure</h3>
          <p className="text-gray-600 font-light text-lg mb-10">
            Explore our picnic packages, themes, and styling options in more detail.
          </p>
          <a 
            href="https://img1.wsimg.com/blobby/go/3796f76e-8bf8-4f94-ac63-56a6de9aaff0/DTD%20Party%20Picnics%202025-2026-compressed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-gray-900 text-gray-900 tracking-[0.15em] text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Free download — Picnic Parties Brochure 2025–2026 (PDF)
          </a>
        </div>
      </div>

      {/* 5. Unified Call-To-Action Block */}
      <div className="relative py-32 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to Dine Al Fresco?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Let us create the perfect outdoor setting for your celebration.
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
