import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/35799512309"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-luxury-pink rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
      <div className="relative bg-[#e5c1cd] text-white p-4 rounded-full shadow-lg hover:bg-[#dcb0be] transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
        <MessageCircle className="w-8 h-8 fill-current" />
      </div>
      <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md text-luxury-text text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
