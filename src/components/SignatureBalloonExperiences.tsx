import { useState } from 'react';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Lightbox Component (Reused/Adapted for this section)
const Lightbox = ({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose 
}: { 
  images: { src: string; alt: string }[], 
  initialIndex: number, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!isOpen) return null;

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
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
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

export default function SignatureBalloonExperiences() {
  const [activeCategory, setActiveCategory] = useState('Luxury Balloon Installations');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'Luxury Balloon Installations',
    'Organic Balloon Backdrops',
    'Themed Balloon Experiences'
  ];

  // Image Data Mapping based on filenames
  const allImages = [
    // Luxury Balloon Installations
    { src: "/images/lights-balloons-decor/signature-experiences/balloon-ceiling-canopy-purple-luxury-event.webp", category: "Luxury Balloon Installations", alt: "Purple Balloon Ceiling Canopy" },
    { src: "/images/lights-balloons-decor/signature-experiences/statement-organic-balloon-arch-luxury-event.webp", category: "Luxury Balloon Installations", alt: "Statement Organic Balloon Arch" },
    { src: "/images/lights-balloons-decor/signature-experiences/luxury-organic-balloon-garland-rose-gold.webp", category: "Luxury Balloon Installations", alt: "Luxury Rose Gold Balloon Garland" },
    { src: "/images/lights-balloons-decor/signature-experiences/luxury-organic-balloon-ring-arch-blush.webp", category: "Luxury Balloon Installations", alt: "Luxury Blush Balloon Ring Arch" },
    
    // Organic Balloon Backdrops
    { src: "/images/lights-balloons-decor/signature-experiences/botanical-organic-balloon-arch-white-gold.webp", category: "Organic Balloon Backdrops", alt: "Botanical Organic Balloon Arch" },
    { src: "/images/lights-balloons-decor/signature-experiences/baby-shower-organic-balloon-arch-pink.webp", category: "Organic Balloon Backdrops", alt: "Baby Shower Organic Balloon Arch" },
    { src: "/images/lights-balloons-decor/signature-experiences/bridal-shower-organic-balloon-feature-pink.webp", category: "Organic Balloon Backdrops", alt: "Bridal Shower Balloon Feature" },
    { src: "/images/lights-balloons-decor/signature-experiences/organic-balloon-arch-dessert-cart-baby-blue-gold.webp", category: "Organic Balloon Backdrops", alt: "Organic Balloon Arch with Dessert Cart" },
    { src: "/images/lights-balloons-decor/signature-experiences/organic-balloon-garland-table-styling.webp", category: "Organic Balloon Backdrops", alt: "Organic Balloon Garland Table Styling" },

    // Themed Balloon Experiences
    { src: "/images/lights-balloons-decor/signature-experiences/superhero-themed-balloon-backdrop-kids-party.webp", category: "Themed Balloon Experiences", alt: "Superhero Themed Balloon Backdrop" },
    { src: "/images/lights-balloons-decor/signature-experiences/metallic-balloon-ring-arch-blue-celebration.webp", category: "Themed Balloon Experiences", alt: "Metallic Blue Celebration Arch" },
  ];

  const filteredImages = allImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 md:py-32 bg-[#fffcfc]" id="signature-experiences">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-4">The Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12">
            Signature Balloon<br/>Styling Experiences
          </h2>

          {/* Category Selectors */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-100 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "pb-4 text-sm md:text-base tracking-widest uppercase transition-all duration-500 relative",
                  activeCategory === category 
                    ? "text-gray-900 font-normal" 
                    : "text-gray-400 hover:text-gray-600 font-light"
                )}
              >
                {category}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold transition-transform duration-500 origin-left",
                  activeCategory === category ? "scale-x-100" : "scale-x-0"
                )} />
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          {filteredImages.map((image, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-zoom-in animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.backgroundColor = '#f8f5f2'; // Neutral placeholder
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

      <Lightbox 
        images={filteredImages} 
        initialIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />
    </section>
  );
}
