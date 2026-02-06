import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import ExperiencesOverlay from './ExperiencesOverlay';
import MobileMenu from './MobileMenu';
import { experienceGroups as experienceGroupsData } from '@/content/experienceCategories';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Mobile Menu State
  const [mobileLevel, setMobileLevel] = useState(1); // 1: Main, 2: Categories, 3: Services
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    // Handle native scroll (for mobile/fallback)
    const handleNativeScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Handle Locomotive Scroll custom event
    const handleLocomotiveScroll = (e: any) => {
      const scrollY = e.detail?.y || 0;
      setScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleNativeScroll);
    window.addEventListener('locomotive-scroll', handleLocomotiveScroll);
    
    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('locomotive-scroll', handleLocomotiveScroll);
    };
  }, []);

  // Reset mobile menu state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setMobileLevel(1);
        setActiveCategory(null);
      }, 500); // Wait for transition to finish
    }
  }, [isOpen]);

  // New Structured Menu Data
  const experienceGroups = useMemo(() => experienceGroupsData || [
    {
      title: "For Children",
      items: [
        { name: 'Teepee Tent Parties', href: '/experiences/teepee-parties', subtext: 'Luxury sleepover experiences for little dreamers' },
        { name: 'Little Ones Parties', href: '/experiences/little-ones-parties', subtext: 'Thoughtfully styled celebrations for early years' },
        { name: 'Birthday Parties', href: '/experiences/birthday-parties', subtext: 'Beautifully curated birthday moments' },
        { name: 'Themed Parties', href: '/experiences/themed-parties', subtext: 'Immersive themes brought to life' },
      ]
    },
    {
      title: "For Celebrations",
      items: [
        { name: 'Picnic Parties', href: '/experiences/picnic-parties', subtext: 'Relaxed luxury dining experiences' },
        { name: 'Milestone Parties', href: '/experiences/milestone-parties', subtext: 'Celebrate life’s defining moments' },

        { name: 'Lights, Balloons & Event Decor', href: '/experiences/lights-balloons-event-decor', subtext: 'Statement styling for unforgettable moments' },
      ]
    },
    {
      title: "Weddings & Proposals",
      items: [
        { name: 'Proposals', href: '/experiences/proposals', subtext: 'Iconic moments designed to be remembered forever' },
        { name: 'Weddings', href: '/experiences/weddings', subtext: 'Luxury wedding styling across Cyprus' },
      ]
    },
    {
      title: "Seasonal & Commercial",
      items: [
        { name: 'Christmas', href: '/experiences/christmas', subtext: 'Festive styling with a refined touch' },
        { name: 'New Year’s Eve', href: '/experiences/new-years-eve', subtext: 'Celebrate the countdown in style' },
        { name: 'Commercial Events', href: '/experiences/commercial-events', subtext: 'Professional event styling for brands and venues' },
      ]
    }
  ], []);

  const handleMobileCategoryClick = (title: string) => {
    setActiveCategory(title);
    setMobileLevel(3);
  };

  const handleBack = () => {
    if (mobileLevel === 3) {
      setMobileLevel(2);
      setActiveCategory(null);
    } else if (mobileLevel === 2) {
      setMobileLevel(1);
    }
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6",
          scrolled 
            ? "bg-black/95 backdrop-blur-md shadow-lg py-4" 
            : "bg-black/90 backdrop-blur-md py-6"
        )}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1" />
            <Link href="/" className="z-50 relative block group flex-1 text-center">
              <img 
                src="/brand/dtd-logo-light.png" 
                alt="Dress That Day"
                className="mx-auto h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="flex-1 flex justify-end">
              <button 
                className={cn(
                  "md:hidden z-50 relative transition-colors duration-300",
                  mobileMenuOpen ? "text-white" : "text-white",
                  overlayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-center mt-4 space-y-4">
            <div className="flex space-x-8 items-center uppercase tracking-[0.12em] text-sm font-[Poppins]">
              
              <Link 
                href="/about"
                className={cn(
                  "text-[#c6b4ab] hover:text-[#a19e98] transition-colors duration-300 relative group",
                  location === '/about' ? "text-white" : "text-[#c6b4ab]",
                  overlayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                About
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a19e98] transition-all duration-300 group-hover:w-full",
                  location === '/about' ? "w-full" : ""
                )} />
              </Link>

              <button 
                onClick={() => setOverlayOpen(true)}
                className={cn(
                  "text-[#c6b4ab] hover:text-[#a19e98] transition-colors duration-300 flex items-center gap-1 font-[Poppins] uppercase tracking-[0.12em]",
                  overlayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                Experiences
              </button>

              <Link 
                href="/gallery"
                className={cn(
                  "text-[#c6b4ab] hover:text-[#a19e98] transition-colors duration-300 relative group",
                  location === '/gallery' ? "text-white" : "text-[#c6b4ab]",
                  overlayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                Gallery
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a19e98] transition-all duration-300 group-hover:w-full",
                  location === '/gallery' ? "w-full" : ""
                )} />
              </Link>

              <Link 
                href="/blog"
                className={cn(
                  "text-[#c6b4ab] hover:text-[#a19e98] transition-colors duration-300 relative group",
                  location === '/blog' ? "text-white" : "text-[#c6b4ab]",
                  overlayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                Journal
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a19e98] transition-all duration-300 group-hover:w-full",
                  location === '/blog' ? "w-full" : ""
                )} />
              </Link>

            </div>

          </div>
        </div>
      </nav>

      {/* Desktop Experiences Overlay */}
      <ExperiencesOverlay 
        isOpen={overlayOpen} 
        onClose={() => setOverlayOpen(false)} 
        experienceGroups={experienceGroups} 
      />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        experienceGroups={experienceGroups} 
      />

      {/* Legacy Mobile Menu (Hidden/Removed as we use the overlay for both) */}
      <div className="hidden">
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto relative w-full h-full pt-28 pb-32 px-8 scrollbar-hide">
          
          {/* Level 1: Main Menu */}
          <div className={cn(
            "absolute inset-0 pt-28 px-8 flex flex-col space-y-8 transition-all duration-500 ease-in-out w-full",
            mobileLevel === 1 ? "translate-x-0 opacity-100 relative" : "-translate-x-full opacity-0 pointer-events-none absolute"
          )}>
            <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors">About</Link>
            
            <button 
              onClick={() => setMobileLevel(2)}
              className="text-3xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors flex items-center justify-between w-full group"
            >
              Experiences 
              <ChevronRight size={24} className="opacity-50 group-hover:opacity-100 transition-opacity text-[#C8A96A]" />
            </button>

            <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-3xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors">Gallery</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-3xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors">Journal</Link>
          </div>

          {/* Level 2: Experience Categories */}
          <div className={cn(
            "absolute inset-0 pt-28 px-8 flex flex-col space-y-10 transition-all duration-500 ease-in-out w-full",
            mobileLevel === 2 ? "translate-x-0 opacity-100 relative" : mobileLevel > 2 ? "-translate-x-full opacity-0 pointer-events-none absolute" : "translate-x-full opacity-0 pointer-events-none absolute"
          )}>
            <button 
              onClick={handleBack}
              className="flex items-center text-[#C8A96A] text-sm uppercase tracking-widest mb-2 hover:text-[#F5F1EC] transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </button>

            {experienceGroups.map((group) => (
              <button 
                key={group.title}
                onClick={() => handleMobileCategoryClick(group.title)}
                className="text-2xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors text-left flex items-center justify-between w-full group"
              >
                {group.title}
                <ChevronRight size={20} className="opacity-50 group-hover:opacity-100 transition-opacity text-[#C8A96A]" />
              </button>
            ))}
          </div>

          {/* Level 3: Services List */}
          <div className={cn(
            "absolute inset-0 pt-28 px-8 flex flex-col space-y-8 transition-all duration-500 ease-in-out w-full pb-32",
            mobileLevel === 3 ? "translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 pointer-events-none absolute"
          )}>
            <button 
              onClick={handleBack}
              className="flex items-center text-[#C8A96A] text-sm uppercase tracking-widest mb-2 hover:text-[#F5F1EC] transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </button>

            <h3 className="text-[#C8A96A] text-xs uppercase tracking-[0.2em] font-medium opacity-80 border-b border-[#F5F1EC]/10 pb-4 mb-2">
              {activeCategory}
            </h3>

            <div className="flex flex-col space-y-6">
              {activeCategory && experienceGroups.find(g => g.title === activeCategory)?.items.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-xl font-display text-[#F5F1EC] hover:text-[#C8A96A] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Fixed Bottom CTA - Always Visible & Tappable */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#4A4238] border-t border-[#F5F1EC]/10 z-50 safe-area-bottom">
          <Link 
            href="/design-your-day" 
            onClick={() => setIsOpen(false)}
            className="block w-full py-4 bg-[#F5F1EC] text-[#4A4238] text-center uppercase tracking-widest font-medium hover:bg-[#C8A96A] hover:text-white transition-all"
          >
            Design Your Day
          </Link>
        </div>
      </div>
    </>
  );
}
