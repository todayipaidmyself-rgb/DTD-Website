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

export default function SignatureLightExperiences() {
  const [activeCategory, setActiveCategory] = useState('Statement Light Letters');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'Statement Light Letters',
    'Light Numbers & Milestone Styling',
    'Proposal & Wedding Light Installations'
  ];

  const categorySubheadings: Record<string, string> = {
    'Statement Light Letters': 'Iconic illuminated letters designed to create unforgettable moments.',
    'Light Numbers & Milestone Styling': 'Bold, illuminated number installations for milestone celebrations and birthdays.',
    'Proposal & Wedding Light Installations': 'Romantic, large-scale light installations crafted for proposals and weddings.'
  };

  // Image Data Mapping based on filenames
  const allImages = [
    // Statement Light Letters
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-love-beach.webp", category: "Statement Light Letters", alt: "LOVE Light Letters on Beach" },
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-love-night.webp", category: "Statement Light Letters", alt: "LOVE Light Letters at Night" },
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-love-poolside.webp", category: "Statement Light Letters", alt: "LOVE Light Letters Poolside" },
    
    // Light Numbers & Milestone Styling
    { src: "/images/lights-decor/signature-light-experiences/light-numbers-statement-1-birthday.webp", category: "Light Numbers & Milestone Styling", alt: "Number 1 Birthday Light" },
    { src: "/images/lights-decor/signature-light-experiences/light-numbers-statement-21-birthday.webp", category: "Light Numbers & Milestone Styling", alt: "Number 21 Birthday Light" },
    { src: "/images/lights-decor/signature-light-experiences/light-styling-elegant-baby-shower.webp", category: "Light Numbers & Milestone Styling", alt: "Elegant Baby Shower Light Styling" },
    { src: "/images/lights-decor/signature-light-experiences/light-styling-elegant-christening-detail.webp", category: "Light Numbers & Milestone Styling", alt: "Christening Light Detail" },
    { src: "/images/lights-decor/signature-light-experiences/light-styling-elegant-christening.webp", category: "Light Numbers & Milestone Styling", alt: "Elegant Christening Light Styling" },
    { src: "/images/lights-decor/signature-light-experiences/light-styling-elegant-first-birthday.webp", category: "Light Numbers & Milestone Styling", alt: "First Birthday Light Styling" },

    // Proposal & Wedding Light Installations
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-beach.webp", category: "Proposal & Wedding Light Installations", alt: "Marry Me Light Letters on Beach" },
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-proposal.webp", category: "Proposal & Wedding Light Installations", alt: "Marry Me Proposal Setup" },
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-resort.webp", category: "Proposal & Wedding Light Installations", alt: "Marry Me Resort Setup" },
    { src: "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-sunset.webp", category: "Proposal & Wedding Light Installations", alt: "Marry Me Sunset Setup" },
  ];

  const filteredImages = allImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 md:py-32 bg-white" id="signature-light-experiences">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-4">The Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">
            Signature Light<br/>Styling Experiences
          </h2>

          {/* Category Selectors */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-100 pb-1 mb-12">
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

          {/* Editorial Subheading */}
          <div className="max-w-2xl mx-auto overflow-hidden min-h-[3rem]">
            <p key={activeCategory} className="font-light text-gray-500 text-lg md:text-xl italic animate-fade-in-up">
              {categorySubheadings[activeCategory]}
            </p>
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
