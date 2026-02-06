import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { Helmet } from 'react-helmet-async';

// Lazy load non-critical components for better performance
const FloatingParticles = lazy(() => import("../components/FloatingParticles"));
const Lightbox = lazy(() => import('@/components/Lightbox'));



export default function TeepeeParties() {
  const [, setLocation] = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/images/teepee-gallery-1.webp",
    "/images/teepee-gallery-2.webp",
    "/images/teepee-gallery-3.webp",
    "/images/teepee-gallery-4.webp",
    "/images/teepee-gallery-5.webp",
    "/images/teepee-gallery-6.webp"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffcfc] overflow-hidden">
      <Helmet>
        <title>Teepee Tent Parties | Dress That Day Cyprus</title>
        <meta name="description" content="Magical teepee sleepover parties in Cyprus. Handcrafted tents, luxury bedding, and themed styling for unforgettable celebrations." />
      </Helmet>

      <Navigation />
      <Suspense fallback={<div />}>
        <FloatingParticles />
      </Suspense>

      {/* Hero Section */}
      <div className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden" data-page="TeepeeParties">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("/images/teepee-parties-hero.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <PageHeading
          lines={["Teepee Tent", "Parties"]}
          subtextBelow="Luxury glamping experiences"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 hidden">
          <div className="max-w-4xl">
            <span className="block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up font-light">
              Sleepovers Reimagined
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight animate-fade-in-up delay-100 mb-8">
              Teepee Tent Parties
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Create a magical indoor camping experience with our handcrafted teepees, luxury bedding, and enchanting themes.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.2em] text-sm uppercase block mb-8 animate-fade-in-up">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-12 animate-fade-in-up delay-100">
            The only dedicated teepee tent party experience in Cyprus.
          </h2>
          <div className="space-y-8 animate-fade-in-up delay-200">
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Beautifully styled teeny-tiny teepee beds designed for unforgettable birthdays, sleepovers, and special celebrations for children of all ages. Each setup is thoughtfully curated to feel magical, playful, and completely unique — creating moments little ones will remember long after the party ends.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              Our themed teepee tent parties are available across Paphos and Limassol, styled with care, creativity, and a refined attention to detail that sets Dress That Day apart.
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg md:text-xl">
              From €37.50 per child, we transform everyday celebrations into treasured memories — designed with imagination, warmth, and a touch of wonder.
            </p>
          </div>
          <div className="w-px h-24 bg-luxury-gold/30 mx-auto mt-16" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Gallery of Dreams</h3>
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
                  alt={`Teepee party setup ${index + 1}`}
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

      {/* Enhance the Experience Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Enhance the Experience</h3>
            <p className="text-gray-500 font-light">Add a few thoughtful extras to make the celebration even more special.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Celebration Cakes",
                desc: "In collaboration with Love Island Cakes, we design bespoke celebration cakes to perfectly complement your party theme.",
                img: "/images/experiences/teepee-enhancements/cake.webp"
              },
              {
                title: "Mini Makeovers",
                desc: "A little pampering for little guests. Our mini makeover experience is fit for a princess and adds a touch of fun and sparkle to any sleepover.",
                img: "/images/experiences/teepee-enhancements/makeover.webp"
              },
              {
                title: "Light Up Numbers",
                desc: "Make their age shine with our 4ft light-up numbers featuring bright white fairground bulbs. Available numbers: 1–18",
                img: "/images/experiences/teepee-enhancements/numbers.webp"
              },
              {
                title: "Sweet Treats",
                desc: "Delight the children with sweet carts and personalised treat bags, styled to suit your chosen theme.",
                img: "/images/experiences/teepee-enhancements/sweets.webp"
              },
              {
                title: "Movie Night",
                desc: "Create a Hollywood-style cinema sleepover. In partnership with Mini Mania, our movie night package brings the big-screen experience home.",
                img: "/images/experiences/teepee-enhancements/movie.webp"
              },
              {
                title: "Afternoon Tea",
                desc: "Let the little ladies ‘do lunch’ with a traditional afternoon tea, beautifully themed to match your sleepover or party.",
                img: "/images/experiences/teepee-enhancements/tea.webp"
              }
            ].map((item, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-8 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-serif text-2xl mb-3">{item.title}</h4>
                  <p className="text-white/90 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="bg-[#f8f5f2] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-gray-900">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Handcrafted wooden teepee frames",
                  "Luxury foam mattresses & fitted sheets",
                  "Plush duvets & pillows (hygienically laundered)",
                  "Decorative cushions & themed styling",
                  "Fairy lights & battery-operated lanterns",
                  "Breakfast trays for each guest",
                  "Personalized name chalkboards"
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
                src="/images/detail_teepee_fabric.webp" 
                alt="Teepee details" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="font-serif text-3xl text-gray-900 mb-6">Download the Teepee Party Brochure</h3>
          <p className="text-gray-600 font-light text-lg mb-10">
            Explore our teepee party packages, themes, and inclusions in more detail.
          </p>
          <a 
            href="https://img1.wsimg.com/blobby/go/3796f76e-8bf8-4f94-ac63-56a6de9aaff0/DTD%20Tee%20Pee%20Tent%20Parties%202025-2026%20(1)-compres.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-gray-900 text-gray-900 tracking-[0.15em] text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Free download — Teepee Tent Parties Brochure 2025–2026 (PDF)
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-32 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to Plan the Ultimate Sleepover?
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Dates fill up quickly. Contact us to secure your preferred weekend.
          </p>
          <button 
            onClick={() => setLocation("/contact")}
            className="inline-block px-12 py-5 bg-white text-black tracking-[0.2em] text-sm uppercase hover:bg-luxury-gold hover:text-white transition-colors duration-500 mt-8"
          >
            Check Availability
          </button>
        </div>
      </div>

      <Footer />
      
      {lightboxOpen && (
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-black/95" />}>
          <Lightbox 
            images={galleryImages} 
            initialIndex={lightboxIndex} 
            isOpen={lightboxOpen} 
            onClose={() => setLightboxOpen(false)} 
          />
        </Suspense>
      )}
    </div>
  );
}
