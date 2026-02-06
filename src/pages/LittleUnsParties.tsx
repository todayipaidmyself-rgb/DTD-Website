import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import { Link } from 'wouter';
import SEO from '@/components/SEO';

export default function LittleUnsParties() {
  return (
    <Layout>
      <SEO 
        title="Luxury Kids Parties Cyprus | Dress That Day"
        description="Magical and sophisticated children's party styling in Cyprus. Teepee sleepovers, princess parties, superhero themes, and elegant baby showers."
        canonical="/little-uns-parties"
        image="/images/kids_party_superhero.webp"
      />
      {/* Hero Section */}
      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] w-full overflow-hidden flex items-center justify-center" data-scroll-section>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/images/kids_party_superhero.webp)' }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
          <RevealText 
            text="Little Un's Parties" 
            tag="h1" 
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide luxury-text-shadow"
          />
          <RevealText 
            text="Where Childhood Wonder Meets Sophisticated Design" 
            tag="p" 
            className="font-body text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-white/90"
            delay={0.5}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-luxury-blush relative overflow-hidden" data-scroll-section>
        {/* Parallax Detail Image */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none" data-scroll data-scroll-speed="1">
          <img src="/images/detail_balloons_pastel.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText 
              text="Magical Moments for Little Ones" 
              tag="h2" 
              className="font-display text-4xl md:text-5xl text-luxury-text mb-8"
            />
            <p className="font-body text-gray-600 leading-relaxed mb-6 text-lg font-light">
              We believe that children's parties should be as stylish as they are fun. Our "Little Un's" collection brings a touch of magic and a heap of elegance to your child's special day.
            </p>
            <p className="font-body text-gray-600 leading-relaxed text-lg font-light">
              From superhero adventures to princess tea parties, we craft immersive worlds that spark imagination while maintaining a sophisticated aesthetic that parents adore.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Teepee Tents",
                desc: "The ultimate sleepover experience with our signature luxury teepees.",
                image: "/images/hero_teepee_interior.webp",
                link: "/teepee-tent-parties"
              },
              {
                title: "Afternoon Tea",
                desc: "Elegant tea parties with vintage china and sweet treats for little ladies and gents.",
                image: "/images/afternoon_tea_luxury_v3.webp",
                link: "/contact"
              },
              {
                title: "Cake Smash",
                desc: "Celebrate the first milestone with a stylish, messy, and memorable photo session setup.",
                image: "/images/baby_shower_elegant.webp",
                link: "/contact"
              },
              {
                title: "Princess Parties",
                desc: "Royal celebrations with soft pastels, crowns, and magical decor fit for royalty.",
                image: "/images/princess_party_luxury_v2.webp",
                link: "/contact"
              },
              {
                title: "Superhero Parties",
                desc: "Action-packed themes with a modern, graphic twist and bold colors.",
                image: "/images/kids_party_superhero.webp",
                link: "/contact"
              },
              {
                title: "Teddy Bear Picnics",
                desc: "Whimsical outdoor setups for the littlest adventurers and their furry friends.",
                image: "/images/teddy_bear_picnic_luxury_v2.webp",
                link: "/picnic-parties"
              }
            ].map((theme, i) => (
              <Link 
                key={i} 
                href={theme.link}
                className="group block relative overflow-hidden h-[400px]" 
                data-scroll 
                data-scroll-speed={0.5}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                <img 
                  src={theme.image} 
                  alt={theme.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <h3 className="font-display text-2xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {theme.title}
                  </h3>
                  <p className="font-body text-white/90 font-light text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {theme.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-luxury-blush relative overflow-hidden" data-scroll-section>
        {/* Parallax Detail Image */}
        <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-10 pointer-events-none" data-scroll data-scroll-speed="-1">
          <img src="/images/detail_light_bulb_vintage.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <RevealText 
              text="The Finishing Touches" 
              tag="h2" 
              className="font-display text-3xl md:text-4xl text-luxury-text"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Balloon Styling", "Light Up Numbers", "Event Decor", "Sweet Carts"].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-luxury-pink/20 hover:border-luxury-gold transition-colors duration-300">
                <h4 className="font-display text-lg text-luxury-text">{item}</h4>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 border border-luxury-text text-luxury-text text-sm uppercase tracking-[0.2em] hover:bg-luxury-text hover:text-white transition-all duration-300"
            >
              Request a Brochure
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
