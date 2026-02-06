import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import PageHeading from '@/components/PageHeading';
import { Link } from 'wouter';
import SEO from '@/components/SEO';
import { Sparkles, Heart, Calendar, CheckCircle2, Camera, Users } from 'lucide-react';

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Dress That Day",
    "description": "Luxury event styling in Cyprus — designed with intention, built for emotion, finished for the camera.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Dress That Day",
      "description": "Cyprus's premier luxury event styling company specializing in weddings, proposals, birthdays, and bespoke celebrations",
      "url": "https://dressthatday.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dressthatday.site/images/logo_fresh.svg"
      },
      "image": "https://dressthatday.site/images/about_hero_luxury_experiences.webp",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CY",
        "addressRegion": "Cyprus"
      },
      "sameAs": [
        "https://www.instagram.com/dressthatday",
        "https://www.facebook.com/dressthatday"
      ],
      "areaServed": "Cyprus",
      "serviceType": ["Event Styling", "Wedding Planning", "Party Planning", "Event Design"]
    }
  };

  const experiences = [
    { title: "Teepee Tent Parties", desc: "Magical indoor camping experiences for kids", link: "/teepee-parties" },
    { title: "Picnic Parties", desc: "Sunset setups with grazing and soft styling", link: "/picnic-parties" },
    { title: "Birthday Celebrations", desc: "Milestone moments made magical", link: "/birthday-parties" },
    { title: "Weddings", desc: "Ceremony and reception styling perfection", link: "/weddings" },
    { title: "Engagements & Proposals", desc: "Beach, cliffside, and private villa setups", link: "/experiences/proposals" },
    { title: "Christmas Parties", desc: "Festive celebrations and winter wonderlands", link: "/christmas" },
    { title: "New Years Eve", desc: "Glamorous countdowns and midnight magic", link: "/new-years-eve" },
    { title: "Corporate Events", desc: "Brand activations and professional gatherings", link: "/commercial-events" },
    { title: "Baby Showers", desc: "Welcoming new arrivals with love", link: "/baby-showers" },
    { title: "Balloon & Light Styling", desc: "Organic installations and illuminated details", link: "/lights-balloons-decor" },
    { title: "Themed Parties", desc: "Custom concepts brought to life", link: "/themed-parties" },
    { title: "Milestone Celebrations", desc: "Anniversaries, retirements, and special moments", link: "/milestone-parties" }
  ];

  const benefits = [
    { icon: Sparkles, text: "Styling concept aligned to your vision" },
    { icon: Heart, text: "Curated props, textures, and premium details" },
    { icon: Users, text: "On-site setup and styling team" },
    { icon: Camera, text: "Timing, placement, and finishing touches for photos" },
    { icon: CheckCircle2, text: "Optional add-ons and upgrades" },
    { icon: Calendar, text: "Clean breakdown after the moment" }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us | Luxury Event Styling Cyprus | Dress That Day"
        description="Discover Dress That Day - Cyprus's luxury event styling experts. From romantic proposals to elegant weddings, we create unforgettable experiences with premium decor, bespoke styling, and attention to every detail."
        keywords="about Dress That Day, Cyprus event stylist, luxury event planner Cyprus, event styling company Cyprus, Paphos event planner, Limassol event styling, Cyprus wedding planner, event design Cyprus, celebration stylist Cyprus, party planner Cyprus"
        canonical="/about"
        image="/images/about_hero_luxury_experiences.webp"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center mt-0 pt-0" data-scroll-section>
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(/images/heroes/about-page-hero.webp)` }}
            data-scroll
            data-scroll-speed="-2"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-10" />
        
        <PageHeading 
          text="About Us"
          subtextBelow="Luxury event styling in Cyprus — designed with intention, built for emotion, finished for the camera."
        />
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <RevealText 
              text="Designed around your moment" 
              tag="h2" 
              className="font-serif text-4xl md:text-5xl text-luxury-text mb-12 text-center"
            />
            <div className="space-y-8 text-center">
              <p className="font-body text-gray-700 leading-relaxed text-lg md:text-xl font-light" data-scroll data-scroll-speed="0.5">
                We don't do "decor packages." We create experiences. Every setup is styled to match your story — the light, the setting, the mood, the feeling.
              </p>
              <p className="font-body text-gray-700 leading-relaxed text-lg md:text-xl font-light" data-scroll data-scroll-speed="0.5">
                Whether it's a proposal at golden hour or a wedding celebration that lasts all night, we build a visual world your guests will remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Your Day - 3 Steps */}
      <section className="py-24 md:py-32 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <RevealText 
            text="Design your day in three simple steps" 
            tag="h2" 
            className="font-serif text-4xl md:text-5xl text-luxury-text mb-16 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                title: "Tell us the vibe — Design Your Day",
                desc: "Start by using our Design Your Day feature to share your vision — location, mood, budget and must-haves. This helps us understand your style before we curate your experience.",
                hasLink: true
              },
              {
                num: "02",
                title: "Choose an experience",
                desc: "Pick a signature setup or let us curate something completely bespoke for you."
              },
              {
                num: "03",
                title: "We style, set, transform",
                desc: "Our team handles everything — setup, styling, finishing touches. Ready to walk into."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500" data-scroll data-scroll-speed={i * 0.5}>
                <div className="font-serif text-6xl md:text-7xl text-luxury-gold/20 mb-4">{step.num}</div>
                <h3 className="font-serif text-2xl md:text-3xl text-luxury-text mb-4">
                  {step.hasLink ? (
                    <>
                      Tell us the vibe —{' '}
                      <Link href="/design-your-day" className="design-your-day-link">
                        Design Your Day
                      </Link>
                    </>
                  ) : (
                    step.title
                  )}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24 md:py-32 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <RevealText 
              text="Experiences we style" 
              tag="h2" 
              className="font-serif text-4xl md:text-5xl text-luxury-text mb-6 text-center"
            />
            <p className="font-body text-gray-600 text-lg md:text-xl font-light text-center mb-16 max-w-3xl mx-auto">
              Choose a signature setup or let us curate something completely bespoke.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, i) => (
                <Link 
                  key={i} 
                  href={exp.link}
                  className="group p-6 border border-luxury-text/10 hover:border-luxury-gold hover:bg-luxury-blush/30 transition-all duration-500"
                  data-scroll 
                  data-scroll-speed={i % 3 * 0.3}
                >
                  <h3 className="font-serif text-xl md:text-2xl text-luxury-text mb-3 group-hover:text-luxury-gold transition-colors duration-500">
                    {exp.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-0 bg-white" data-scroll-section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
            <img 
              src="/images/about_proposal_scene.webp" 
              alt="Romantic luxury proposal setup with elegant decor, candles, and floral arrangements in Cyprus" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-scroll
              data-scroll-speed="-1"
            />
          </div>
          <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
            <img 
              src="/images/about_table_styling.webp" 
              alt="Premium luxury table styling with fine dining setup, elegant tableware, and sophisticated decor" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-scroll
              data-scroll-speed="-1.5"
            />
          </div>
          <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
            <img 
              src="/images/about_balloon_installation.webp" 
              alt="Organic balloon installation and arch with premium styling for luxury events in Cyprus" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-scroll
              data-scroll-speed="-1"
            />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <RevealText 
              text="What's included when you work with us" 
              tag="h2" 
              className="font-serif text-4xl md:text-5xl text-luxury-text mb-16 text-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-start space-x-4" data-scroll data-scroll-speed={i % 3 * 0.3}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <p className="font-body text-gray-700 leading-relaxed pt-2">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white text-center" data-scroll-section>
        <div className="container mx-auto px-6">
          <RevealText 
            text="Let's design your day" 
            tag="h2" 
            className="font-serif text-4xl md:text-6xl text-luxury-text mb-8"
          />
          <p className="font-body text-gray-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Tell us what you're dreaming of — we'll handle the details and deliver the wow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/design-your-day"
              className="inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-all duration-500 shadow-lg"
            >
              Design Your Day
            </Link>
            <button
              onClick={() => {
                const experiencesSection = document.querySelector('[data-experiences-section]');
                if (experiencesSection) {
                  experiencesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block px-12 py-5 border-2 border-luxury-text text-luxury-text text-sm uppercase tracking-[0.2em] hover:bg-luxury-text hover:text-white transition-all duration-500"
            >
              Explore Experiences
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
