import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import { Link } from 'wouter';
import SEO from '@/components/SEO';

export default function TeepeeTentParties() {
  return (
    <Layout>
      <SEO 
        title="Luxury Teepee Sleepover Parties Cyprus | Dress That Day"
        description="The only luxury teepee tent party experience in Cyprus. Transform your home into a magical sleepover wonderland for birthdays and special occasions."
        canonical="/teepee-tent-parties"
        image="/images/hero_teepee_interior.webp"
      />
      {/* Hero Section */}
      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] w-full overflow-hidden flex items-center justify-center" data-scroll-section>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/images/hero_teepee_interior.webp)' }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
          <RevealText 
            text="Teepee Tent Parties" 
            tag="h1" 
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide luxury-text-shadow"
          />
          <RevealText 
            text="The Only Luxury Teepee Experience in Cyprus" 
            tag="p" 
            className="font-body text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-white/90"
            delay={0.5}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white relative overflow-hidden" data-scroll-section>
        {/* Parallax Detail Image */}
        <div className="absolute top-1/4 left-0 w-1/4 h-full opacity-10 pointer-events-none" data-scroll data-scroll-speed="1">
          <img src="/images/detail_teepee_fabric.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-scroll data-scroll-speed="1">
              <RevealText 
                text="Sleepovers Reimagined" 
                tag="h2" 
                className="font-display text-4xl md:text-5xl text-luxury-text mb-8"
              />
              <p className="font-body text-gray-600 leading-relaxed mb-6 text-lg font-light">
                Transform your home into a magical wonderland with our exclusive teeny tiny teepee tent beds. Perfect for birthdays, sleepovers, and creating memories that last a lifetime.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8 text-lg font-light">
                Available in Paphos and Limassol, our themed setups are meticulously styled with plush cushions, fairy lights, and premium linens to ensure the sweetest of dreams.
              </p>
              <p className="font-display text-luxury-gold text-xl">From €37.50 per person</p>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden group" data-scroll data-scroll-speed="-1">
              <img 
                src="/images/fabric_texture_draping.webp" 
                alt="Luxury fabric details" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-24 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <RevealText 
              text="Curated Add-Ons" 
              tag="h2" 
              className="font-display text-3xl md:text-4xl text-luxury-text mb-4"
            />
            <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Elevate the Experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Celebration Cakes",
                desc: "Bespoke designs by Love Island Cakes to match your theme perfectly."
              },
              {
                title: "Mini Makeovers",
                desc: "Pampering fit for a princess, a delightful addition to any sleepover."
              },
              {
                title: "Movie Night",
                desc: "Cinema Hollywood style with our complete movie night package."
              },
              {
                title: "Sweet Treats",
                desc: "Custom sweet carts and treat bags to delight every guest."
              },
              {
                title: "Light Up Numbers",
                desc: "4ft marquee numbers with bright white fairground bulbs."
              },
              {
                title: "Afternoon Tea",
                desc: "Traditional tea service themed to your sleepover party."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 text-center hover:shadow-md transition-shadow duration-300 hover:border-luxury-gold border border-transparent">
                <h3 className="font-display text-xl text-luxury-text mb-3">{item.title}</h3>
                <p className="font-body text-gray-600 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="luxury-cta-section text-center relative overflow-hidden" data-scroll-section>
        {/* Parallax Detail Image */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" data-scroll data-scroll-speed="-1">
          <img src="/images/detail_balloons_pastel.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealText 
            text="Book Your Sleepover" 
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
