import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import HeroOverlay from '@/components/HeroOverlay';
import ExperienceSpotlight from '@/components/ExperienceSpotlight';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "name": "Dress That Day",
    "url": "https://dressthatday.com",
    "logo": "https://dressthatday.com/logo.webp",
    "description": "Luxury event styling and decor services in Cyprus. Specializing in weddings, proposals, children's parties, and bespoke celebrations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Agiou Stefanou Street",
      "addressLocality": "Chlorakas",
      "addressRegion": "Paphos",
      "postalCode": "8560",
      "addressCountry": "CY"
    },
    "telephone": "+35799512309",
    "priceRange": "€€€"
  };
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const subtexts = [
    "Luxury event styling, designed to feel unforgettable.",
    "Balloons, décor & details — curated with intention.",
    "From children’s parties to milestone celebrations — styled beautifully.",
    "Elevated proposal moments & romantic installs, made in Cyprus.",
    "Luxury event styling, designed to feel unforgettable.",
    "Elevated proposal moments & romantic installs, made in Cyprus.",
    "From children’s parties to milestone celebrations — styled beautifully.",
    "Balloons, décor & details — curated with intention."
  ];

  const heroSlides = [
    '/images/gallery_proposal_setup.webp', // Little Prince Christening - UNCHANGED
    '/images/hero-slide-2.webp', // Christmas Parties
    '/images/hero-slide-3.webp', // Christmas Parties v2
    '/images/hero-slide-4.webp', // New Year's Eve
    '/images/hero-slide-5.webp', // Proposals
    '/images/hero-slide-6.webp', // Lights, Balloons & Event Decor
    '/images/hero-slide-7.webp', // Themed Parties
    '/images/hero-slide-8.webp' // Gender Reveal
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background Elements
      gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
        gsap.to(bg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Soft Fade In for Sections
      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Little Un's Parties",
      description: "Where childhood wonder is spun into sophisticated, magical celebrations.",
      image: "/images/occasions-little-ones.webp",
      link: "/little-uns-parties"
    },
    {
      title: "Teepee & Tent Parties",
      description: "Our iconic, immersive sleepover experiences, reimagined with luxury.",
      image: "/images/occasions-teepee.webp",
      link: "/teepee-tent-parties"
    },
    {
      title: "Picnic Parties",
      description: "Elegant alfresco dining, from sun-drenched gardens to sunset-kissed beaches.",
      image: "/images/occasions-picnic.webp",
      link: "/picnic-parties"
    },
    {
      title: "Proposal Styling",
      description: "The ultimate romantic gesture, meticulously crafted to ensure an unforgettable 'yes'.",
      image: "/images/occasions-proposals.webp",
      link: "/proposal-styling"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Luxury Event Styling Cyprus"
        description="Transform your special occasions into timeless masterpieces with Dress That Day. Premier event styling for weddings, proposals, and parties in Paphos and Limassol."
        keywords="luxury event styling Cyprus, event planner Cyprus, party styling Paphos, wedding planner Limassol, event decorator Cyprus, kids party planner Cyprus, proposal styling Cyprus, balloon decorations Cyprus, event design Cyprus, celebration styling Cyprus, luxury party planner Cyprus, event styling services Cyprus"
        schema={schema}
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center" data-scroll-section>
        {/* Slider Images with Cinematic Scale */}
        {heroSlides.map((slide, index) => (
          slide === 'https://files.manuscdn.com/user_upload_by_module/session_file/88957639/craUngKWFOaUinZu.webp' ? (
            <Link key={index} href="/breakfast-with-santa">
              <div 
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2500ms] ease-in-out transform cursor-pointer ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                style={{ backgroundImage: `url(${slide})` }}
                data-scroll
                data-scroll-speed="-2"
              />
            </Link>
          ) : (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2500ms] ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
              style={{ backgroundImage: `url(${slide})` }}
              data-scroll
              data-scroll-speed="-2"
            />
          )
        ))}
        
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="absolute inset-0 z-20 text-center px-6 max-w-6xl mx-auto text-white flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <HeroOverlay 
              imagePath="/brand/dtd-logo-light.png"
              altText="Dress That Day Logo"
              subtextBelow=""
              className="w-[900px] md:w-[1800px] lg:w-[2200px] xl:w-[2400px] max-w-[95vw]"
            />
            <p className="text-white/85 text-sm md:text-base lg:text-lg font-[Poppins] tracking-[0.25em] uppercase max-w-4xl px-4">
              {subtexts[currentSlide]}
            </p>
            
            <Link href="/design-your-day">
              <button className="px-6 py-3 text-xs uppercase tracking-[0.3em] font-[Poppins] transition-all duration-300 relative overflow-hidden rounded-md border border-transparent bg-[#f7f3eb] text-black hover:bg-transparent hover:text-white hover:border-white">
                Design Your Day
              </button>
            </Link>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <ExperienceSpotlight />

      {/* SECTION 1 — Professional Event Decor & Styling */}
      <section className="py-32 bg-luxury-blush/10 relative overflow-hidden fade-in-section" data-scroll-section>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none parallax-bg">
          <img src="/images/logo_fresh.svg" alt="" className="w-full h-full object-cover brightness-0 opacity-10" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-scroll data-scroll-speed="1">
              <span className="block font-display text-luxury-gold text-lg tracking-[0.2em] uppercase mb-6">Professional Event Decor, Styling & Hire Services, Cyprus</span>
              <RevealText 
                text="The Finishing Touch." 
                tag="h2" 
                className="font-serif text-5xl md:text-6xl text-luxury-text mb-8 leading-tight"
              />
              <p className="font-body text-gray-600 leading-relaxed mb-8 text-lg font-light">
                Looking for an event décor provider to finish and ‘dress’ your event? Dress That Day delivers a five-star styling service, refined inspiration, and beautifully executed details — from concept to final flourish.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-10 text-lg font-light">
                We believe that every event is a canvas waiting to be "dressed." Our mission is to infuse your celebration with creativity, inspiration, and an obsessive attention to detail, delivering a refined 5-star experience that lingers in the memory long after the last guest has departed.
              </p>
              
              <div className="mb-10">
                <h3 className="font-serif text-2xl text-luxury-text mb-4">Event Decor & Styling</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-body text-gray-600 text-sm font-light">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Inspiration & Ideas</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Themed Styling</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Event Dressing, Decor & Hire</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Lighting</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Table Decor</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>Prop Hire</li>
                </ul>
              </div>

              <Link href="/about">
                <span className="inline-block border-b border-luxury-text pb-1 text-luxury-text uppercase tracking-widest text-sm hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 cursor-pointer">
                  Discover Our Story
                </span>
              </Link>
            </div>
            
            <div className="relative h-[700px] w-full overflow-hidden group" data-scroll data-scroll-speed="-1">
              <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img 
                src="/images/about_founder_portrait_style.webp" 
                alt="Dress That Day Founder" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — All Kinds of Occasions */}
      <section className="py-32 bg-white relative fade-in-section" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="block font-display text-luxury-gold text-lg tracking-[0.2em] uppercase mb-6">Our Craft</span>
            <RevealText 
              text="All Kinds of Occasions" 
              tag="h2" 
              className="font-serif text-5xl md:text-6xl text-luxury-text mb-8"
            />
            <p className="font-body text-gray-600 leading-relaxed text-lg font-light mb-10">
              From intimate gatherings to grand celebrations, we curate bespoke environments that reflect your unique style. Our passion lies in the details—the textures, the colors, the light—weaving them together to tell your story.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Gender Reveal", "Baby Showers", "Christenings", "Birthday Parties", "Engagements & Proposals", "Anniversaries", "Weddings", "Milestone Birthdays", "Christmas & New Year Parties"].map((item, i) => (
                <span key={i} className="px-4 py-2 border border-luxury-pink/30 text-luxury-text text-xs uppercase tracking-widest rounded-full hover:bg-luxury-blush transition-colors duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group relative aspect-square overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 text-white">
                    <h3 className="font-serif text-3xl mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {category.title}
                    </h3>
                    <p className="font-body text-sm font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                      {category.description}
                    </p>
                    <span className="mt-6 inline-block text-xs uppercase tracking-widest border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 w-max">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — All Kinds of Occasions */}
      <section className="py-32 bg-luxury-blush relative overflow-hidden fade-in-section" data-scroll-section>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] w-full overflow-hidden" data-scroll data-scroll-speed="1">
              <img 
                src="/images/versatility-elegance.webp" 
                alt="Luxury Event Setup" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2" data-scroll data-scroll-speed="-0.5">
              <span className="block font-display text-luxury-gold text-lg tracking-[0.2em] uppercase mb-6">Versatility & Elegance</span>
              <RevealText 
                text="All Kinds of Occasions" 
                tag="h2" 
                className="font-serif text-5xl md:text-6xl text-luxury-text mb-8 leading-tight"
              />
              <p className="font-body text-gray-600 leading-relaxed mb-8 text-lg font-light">
                Whether it's a whimsical children's birthday, a sophisticated baby shower, a romantic proposal, or a corporate gala, we bring the same level of dedication and artistry to every event.
              </p>
              <ul className="space-y-4 mb-10 font-body text-gray-600 font-light">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-4" />
                  Bespoke Concept Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-4" />
                  Full-Service Styling & Setup
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-4" />
                  Premium Prop Hire & Floral Artistry
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-4" />
                  Seamless Coordination
                </li>
              </ul>
              <Link href="/contact">
                <span className="luxury-cta-btn inline-block px-10 py-4 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                  Start Planning
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-cta-section text-center relative overflow-hidden fade-in-section" data-scroll-section>
        {/* Background Watermark with Parallax */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-[0.03] pointer-events-none z-0 parallax-bg">
          <img src="/images/logo_fresh.svg" alt="" className="w-full brightness-0 opacity-10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealText 
            text="Ready to Design Your Day?" 
            tag="h2" 
            className="font-serif text-4xl md:text-6xl text-luxury-text mb-8"
          />
          <p className="font-body text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Let's turn your vision into a breathtaking reality. Contact us today to begin your journey.
          </p>
          <Link 
            href="/design-your-day"
            className="luxury-cta-btn inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </Layout>
  );
}
