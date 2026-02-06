import { useState, useEffect } from "react";
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

export default function Christmas() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/christmas_gallery_1.webp",
    "/images/christmas_gallery_2.webp",
    "/images/christmas_gallery_3.webp",
    "/images/christmas_gallery_4.webp",
    "/images/christmas_gallery_5.webp",
    "/images/christmas_gallery_6.webp"
  ];

  const galleryAltTexts = [
    "Outdoor Christmas party setup with inflatable Santa, snow globe, gingerbread house decorations in Cyprus",
    "Festive Christmas cocktails display with elegant glassware and holiday drinks at Cyprus event",
    "White bouncy castle with Santa inflatable and Christmas decorations for kids party in Cyprus",
    "Elegant Christmas entrance decor with festive garland, nutcrackers, and red bows at Cyprus venue",
    "Breakfast with Santa experience featuring children meeting Santa Claus and Mrs. Claus with Christmas tree",
    "Santa and Mrs. Claus welcoming guests at festive Christmas entrance with garland and holiday decor"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Christmas Party Styling Cyprus | Breakfast with Santa | Dress That Day</title>
        <meta name="description" content="Magical Christmas party styling and Breakfast with Santa experiences in Cyprus. Transform your home or venue into a winter wonderland with festive decor, Santa visits, and holiday celebrations in Paphos and Limassol." />
        <meta name="keywords" content="Christmas party styling Cyprus, Breakfast with Santa Cyprus, Christmas decor Cyprus, festive party planner Paphos, holiday event styling Limassol, Christmas tree decoration Cyprus, Santa visit Cyprus, corporate Christmas party Cyprus, residential Christmas decor Cyprus, winter wonderland Cyprus, Christmas event planner Cyprus, holiday styling Cyprus, festive decorations Cyprus, LChâteau Christmas event" />
        <link rel="canonical" href="https://dressthatday.com/experiences/christmas" />
        <meta property="og:title" content="Christmas Party Styling Cyprus | Breakfast with Santa | Dress That Day" />
        <meta property="og:description" content="Magical Christmas party styling and Breakfast with Santa experiences in Cyprus. Transform your home or venue into a winter wonderland with festive decor, Santa visits, and holiday celebrations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dressthatday.com/experiences/christmas" />
        <meta property="og:image" content="https://dressthatday.com/images/heroes/christmas-hero.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Christmas Party Styling Services",
            "description": "Complete Christmas party styling including festive decorations, Breakfast with Santa experiences, corporate events, and residential holiday decor in Cyprus.",
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
          style={{ backgroundImage: 'url("/images/hero/christmas-parties-hero-v2.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          text="Christmas"
          subtextBelow="Festive celebrations with luxury styling"
        />
      </div>

      {/* 2. Experience Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            Winter Wonderland
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Whether it's a grand corporate party or an intimate family gathering, our Christmas styling creates a warm, enchanting atmosphere. We use rich textures, metallic accents, and atmospheric lighting to transform any space into a festive wonderland.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              From towering trees adorned with bespoke ornaments to elegant table settings for your festive feast, we handle every detail so you can relax and enjoy the holiday spirit with your loved ones.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* 3. Editorial Image Gallery */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Festive Inspiration</h3>
            <p className="text-gray-500 font-light">Click to explore our Christmas setups</p>
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

      {/* 4. Breakfast with Santa Section */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-4">
              Special Experience
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              Breakfast with Santa
            </h3>
            <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto leading-relaxed">
              Each year, we proudly partner with <a href="https://www.lchateaucyprus.com" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline font-medium">LChâteau</a> to host our annual charity Breakfast with Santa event, where <strong>all proceeds go to charity</strong>. This heartwarming experience brings together families, local vendors, and the community to create magical Christmas memories while supporting a worthy cause.
            </p>
            <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              Our 2025 Breakfast with Santa was a complete <strong>sell-out success</strong>, welcoming hundreds of children and their families for an unforgettable morning. We invite vendors, sponsors, and local businesses to join us in making this annual tradition even more special. From catering and entertainment to photography and gift donations, there are countless ways to get involved and give back to the community.
            </p>
            <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              Children meet Santa Claus and Mrs. Claus in a beautifully decorated festive setting at LChâteau's stunning venue, complete with professional photo opportunities, personalized gifts, and a delicious holiday breakfast. It's more than just an event—it's a celebration of community, generosity, and the true spirit of Christmas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/christmas_gallery_5.webp" 
                alt="Children enjoying Breakfast with Santa and Mrs. Claus with Christmas tree and festive decorations" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-gray-900">What's Included</h4>
              <ul className="space-y-4">
                {[
                  "Personal meet & greet with Santa and Mrs. Claus",
                  "Professional photo opportunities",
                  "Festive breakfast spread for children and adults",
                  "Gift from Santa for each child",
                  "Christmas-themed decorations and ambiance",
                  "Interactive storytelling and activities",
                  "Memorable keepsake photos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. What's Included Section */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-gray-900">Christmas Styling Services</h3>
              <ul className="space-y-4">
                {[
                  "Bespoke Christmas tree decoration",
                  "Festive table styling & centerpieces",
                  "Garlands, wreaths & floral installations",
                  "Atmospheric lighting & candles",
                  "Corporate event styling",
                  "Residential holiday decor",
                  "Breakfast with Santa experiences",
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
                src="/images/christmas_gallery_4.webp" 
                alt="Elegant Christmas entrance decoration with festive garland, nutcrackers, and holiday styling" 
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Unified Call-To-Action Block */}
      <div className="relative py-32 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready for Festive Magic?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Let us transform your space for the holidays and create unforgettable Christmas memories.
          </p>
          <button 
            onClick={() => setLocation("/contact")}
            className="inline-block px-12 py-5 bg-white text-black tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold hover:text-white transition-colors duration-500 mt-8"
          >
            Get in Touch
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
