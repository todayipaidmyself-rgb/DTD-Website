import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import { Link } from 'wouter';
import SEO from '@/components/SEO';

export default function LightUpLights() {
  return (
    <Layout>
      <SEO 
        title="Light Up Letters & Numbers Hire Cyprus | Dress That Day"
        description="Rent stunning 4ft light-up letters and numbers for weddings and parties in Cyprus. 'MARRY ME', 'LOVE', and milestone birthday numbers available."
        canonical="/light-up-lights"
        image="/images/closeup_light_bulbs.webp"
      />
      {/* Hero Section */}
      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] w-full overflow-hidden flex items-center justify-center" data-scroll-section>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/images/closeup_light_bulbs.webp)' }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
          <RevealText 
            text="Illuminated Elegance" 
            tag="h1" 
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide luxury-text-shadow"
          />
          <RevealText 
            text="Light Up Your Celebration" 
            tag="p" 
            className="font-body text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-white/90"
            delay={0.5}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-scroll data-scroll-speed="1">
              <RevealText 
                text="A Statement in Lights" 
                tag="h2" 
                className="font-display text-4xl md:text-5xl text-luxury-text mb-8"
              />
              <p className="font-body text-gray-600 leading-relaxed mb-6 text-lg font-light">
                Make your event shine with our gorgeous white wooden lights, finished with diamond effect cabochon fairground bulbs.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8 text-lg font-light">
                From milestone numbers to romantic statements like "MARRY ME" and "LOVE", our collection adds a warm, cinematic glow to any occasion.
              </p>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden" data-scroll data-scroll-speed="-1">
              <img 
                src="/images/light_up_lights_showcase.webp" 
                alt="Light up numbers" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing List */}
      <section className="py-24 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-12 shadow-sm border border-luxury-pink/20">
            <h3 className="font-display text-3xl text-center text-luxury-text mb-12">Collection & Pricing</h3>
            
            <div className="space-y-8">
              {[
                { item: "Single Number (1-99)", price: "From €75.00" },
                { item: "Two Numbers", price: "From €125.00" },
                { item: "LOVE Lights", price: "€165.00" },
                { item: "I DO Lights", price: "€165.00" },
                { item: "2 Initials + &", price: "€165.00" },
                { item: "MR & MRS", price: "€215.00" },
                { item: "MARRY ME", price: "€250.00" },
                { item: "JUST MARRIED", price: "€350.00" },
                { item: "Your Name in Lights", price: "From €220.00" }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
                  <span className="font-body text-gray-600 font-light">{row.item}</span>
                  <span className="font-display text-luxury-gold">{row.price}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-8 uppercase tracking-widest">
              Prices for Paphos only. Additional charges apply for Limassol & Larnaca.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="luxury-cta-section text-center" data-scroll-section>
        <div className="container mx-auto px-6">
          <RevealText 
            text="Illuminate Your Night" 
            tag="h2" 
            className="font-display text-4xl md:text-6xl text-luxury-text mb-8"
          />
          <Link 
            href="/contact"
            className="luxury-cta-btn inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </Layout>
  );
}
