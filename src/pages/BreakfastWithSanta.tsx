import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import { Link } from 'wouter';
import SEO from '@/components/SEO';
import { Calendar, Clock, MapPin, Gift, Heart } from 'lucide-react';

export default function BreakfastWithSanta() {
  return (
    <Layout>
      <SEO 
        title="Breakfast with Santa 2025 | Dress That Day"
        description="Join us for a magical morning at L'Chateau. Breakfast, Santa meet-and-greet, Christmas market, and Shoebox Appeal. Sunday 14th Dec 2025."
        canonical="/breakfast-with-santa"
        image="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/craUngKWFOaUinZu.webp"
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center" data-scroll-section>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/88957639/craUngKWFOaUinZu.webp)' }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto text-white">
          <RevealText 
            text="Breakfast with Santa" 
            tag="h1" 
            className="font-display text-5xl md:text-7xl lg:text-9xl mb-6 tracking-wide luxury-text-shadow text-white"
          />
          <RevealText 
            text="A Magical Christmas Tradition at L'Chateau" 
            tag="p" 
            className="font-body text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-12 text-white/90"
            delay={0.5}
          />
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-white/90 font-light text-lg">
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5 text-luxury-gold" />
              <span>Sunday, 14th Dec 2025</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-5 h-5 text-luxury-gold" />
              <span>10:30 AM - 2:30 PM</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="w-5 h-5 text-luxury-gold" />
              <span>L'Chateau Venue, Paphos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Gallery Grid */}
      <section className="py-24 bg-white relative" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div data-scroll data-scroll-speed="1">
              <RevealText 
                text="The Magic Returns" 
                tag="h2" 
                className="font-display text-4xl md:text-5xl text-luxury-text mb-8"
              />
              <p className="font-body text-gray-600 leading-relaxed mb-6 text-lg font-light">
                L’Chateau is delighted to welcome families and friends to our annual <strong>Breakfast with Santa 2025</strong> — a joyful celebration filled with laughter, delicious food, and the true spirit of Christmas.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8 text-lg font-light">
                Step into a winter wonderland where children can meet Santa himself, share their wishes, and receive a special gift. For the grown-ups, our <strong>NEW Christmas Market</strong> offers unique finds, mulled wine, and a festive atmosphere like no other.
              </p>
              <Link href="/contact" className="luxury-cta-btn inline-block px-8 py-4 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors">
                Book Tickets
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/VIZY1202.webp" alt="Santa" className="w-full h-64 object-cover rounded-sm" />
              <img src="/images/VIZY1224.webp" alt="Christmas Decor" className="w-full h-64 object-cover rounded-sm translate-y-8" />
              <img src="/images/VIZY1169.webp" alt="Festive Fun" className="w-full h-64 object-cover rounded-sm" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/bUkVdAruEvtAgMUO.webp" alt="Holiday Spirit" className="w-full h-64 object-cover rounded-sm translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Shoebox Appeal Section */}
      <section className="py-24 bg-luxury-cream/30 relative overflow-hidden" data-scroll-section>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
            <RevealText 
              text="Sharing the Joy: Shoebox Appeal" 
              tag="h2" 
              className="font-display text-4xl md:text-5xl text-luxury-text mb-8"
            />
            <p className="font-body text-gray-600 leading-relaxed mb-10 text-lg font-light">
              Every year, <em>Breakfast with Santa</em> brings our community together to share the true spirit of Christmas. This year, we are proud to support <strong>SPAVO</strong>, helping children affected by domestic violence.
            </p>
            <div className="bg-white p-8 md:p-12 shadow-sm border border-luxury-gold/20 rounded-sm text-left">
              <h3 className="font-display text-2xl text-luxury-text mb-6 flex items-center gap-3">
                <Gift className="w-6 h-6 text-luxury-gold" />
                How to Participate
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Fill a shoebox with small gifts to brighten a child's Christmas. Mark the box for a boy or girl and an age group, and pop a little note inside!
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 font-light text-sm">
                <li className="flex items-center gap-2">• Toys & Cuddly Plushies</li>
                <li className="flex items-center gap-2">• Hats, Gloves & Scarves</li>
                <li className="flex items-center gap-2">• Sweets & Confectionery</li>
                <li className="flex items-center gap-2">• Pens, Pencils & Coloring Books</li>
                <li className="flex items-center gap-2">• Toiletries & Essentials</li>
                <li className="flex items-center gap-2">• A Personal Christmas Note</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-12 bg-white overflow-hidden" data-scroll-section>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 no-scrollbar">
          <img src="/images/VIZY1194.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 1" />
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/OHsiFdhPONcPTlGY.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 2" />
          <img src="/images/VIZY1232.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 3" />
          <img src="/images/VIZY1260.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 4" />
          <img src="/images/VIZY1524.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 5" />
          <img src="/images/VIZY1372.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 6" />
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/uQiivxBXoDRXLecI.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 7" />
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/ZLiCJslReLmXuqqo.webp" className="h-64 w-auto object-cover rounded-sm flex-shrink-0" alt="Gallery 8" />
        </div>
      </section>

      {/* CTA */}
      <section className="luxury-cta-section text-center relative overflow-hidden" data-scroll-section>
        <div className="absolute inset-0 bg-luxury-text/5 z-0" />
        <div className="container mx-auto px-6 relative z-10 py-24">
          <RevealText 
            text="Join the Celebration" 
            tag="h2" 
            className="font-display text-4xl md:text-6xl text-luxury-text mb-8"
          />
          <p className="font-body text-gray-600 mb-10 max-w-2xl mx-auto font-light text-lg">
            Tickets can be collected from our offices Monday to Friday (9am - 4pm) or on the morning of the event. Don't forget your receipt!
          </p>
          <Link 
            href="/contact"
            className="luxury-cta-btn inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold"
          >
            Get Tickets
          </Link>
        </div>
      </section>
    </Layout>
  );
}
