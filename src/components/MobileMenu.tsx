import { useState } from 'react';
import { Link } from 'wouter';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  experienceGroups: {
    title: string;
    items: {
      name: string;
      href: string;
      subtext: string;
    }[];
  }[];
}

export default function MobileMenu({ isOpen, onClose, experienceGroups }: MobileMenuProps) {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setExpandedAccordion(expandedAccordion === title ? null : title);
  };

  const handleLinkClick = () => {
    setExpandedAccordion(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-[#1a1a1a]/95 backdrop-blur-md md:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300 p-2 z-[70]"
        aria-label="Close Menu"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      {/* Menu Content */}
      <div className="pt-24 pb-32 px-6 overflow-y-auto h-full max-h-screen">
        <div className="space-y-6">
          
          {/* About Link */}
          <Link 
            href="/about"
            onClick={handleLinkClick}
            className="block text-lg font-light text-[#f4f4f2] hover:text-luxury-gold transition-colors duration-300 tracking-wide"
          >
            About
          </Link>

          {/* Experiences Accordion */}
          <div className="border-t border-white/10 pt-6">
            <button
              onClick={() => toggleAccordion('Experiences')}
              className="w-full flex items-center justify-between text-lg font-light text-[#f4f4f2] hover:text-luxury-gold transition-colors duration-300 tracking-wide"
            >
              Experiences
              <ChevronDown 
                size={20}
                className={cn(
                  "transition-transform duration-300",
                  expandedAccordion === 'Experiences' ? "rotate-180" : ""
                )}
              />
            </button>

            {/* Accordion Content */}
            {expandedAccordion === 'Experiences' && (
              <div className="mt-4 space-y-6 pl-4 border-l border-white/10">
                {experienceGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#d6c5a3] font-medium opacity-70 mb-3">
                      {group.title}
                    </h4>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block text-sm text-[#f4f4f2] hover:text-luxury-gold transition-colors duration-300 font-light"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Journal Link */}
          <Link 
            href="/blog"
            onClick={handleLinkClick}
            className="block text-lg font-light text-[#f4f4f2] hover:text-luxury-gold transition-colors duration-300 tracking-wide border-t border-white/10 pt-6"
          >
            Journal
          </Link>

          {/* Contact Link */}
          <Link 
            href="/contact"
            onClick={handleLinkClick}
            className="block text-lg font-light text-[#f4f4f2] hover:text-luxury-gold transition-colors duration-300 tracking-wide border-t border-white/10 pt-6"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <div className="border-t border-white/10 pt-6 mt-8">
            <Link 
              href="/design-your-day"
              onClick={handleLinkClick}
              className="block w-full py-4 bg-[#f7f3eb] text-black text-center text-sm uppercase tracking-[0.2em] font-medium rounded-md border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
            >
              Design Your Day
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
