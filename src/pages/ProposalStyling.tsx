import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { Link } from 'wouter';

export default function ProposalStyling() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Proposal Styling Services",
    "description": "Bespoke proposal styling and romantic setup services in Cyprus. Beach proposals, private dinners, light-up letters, and breathtaking romantic backdrops for your perfect moment.",
    "provider": {
      "@type": "Organization",
      "name": "Dress That Day",
      "url": "https://dressthatday.site"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Cyprus"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Luxury Proposal Styling Cyprus | Romantic Beach Proposals Paphos & Limassol | Dress That Day</title>
        <meta name="description" content="Create the perfect 'Yes' moment with our bespoke proposal styling in Cyprus. Romantic beach setups, Marry Me light-up letters, rose petal arrangements, private dinners, and breathtaking backdrops in Paphos and Limassol. We handle every detail for your life-changing moment." />
        <meta name="keywords" content="Cyprus proposal styling, romantic beach proposal Cyprus, Paphos proposal setup, Limassol engagement styling, Marry Me lights Cyprus, beach proposal Paphos, romantic dinner setup, proposal planning Cyprus, engagement styling, Cyprus proposal planner" />
        <meta property="og:title" content="Luxury Proposal Styling Cyprus | Romantic Beach Proposals" />
        <meta property="og:description" content="Create the perfect 'Yes' moment with bespoke proposal styling in Cyprus. Beach setups, light-up letters, and breathtaking romantic backdrops." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/heroes/proposals-hero.webp" />
        <link rel="canonical" href="https://dressthatday.com/experiences/proposal-styling" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/heroes/proposals-hero.webp" 
            alt="Luxury romantic proposal setup with elegant styling in Cyprus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <PageHeading
          text="Proposals"
          subtextBelow="Romantic moments, perfectly styled"
        />
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 hidden">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase mb-4"
          >
            Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Proposal Styling
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-luxury-gold text-xl tracking-widest uppercase mb-8"
          >
            The Perfect Question
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-luxury-text mb-12 leading-tight"
          >
            Crafting the ultimate romantic setting for your life-changing moment.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-gray-600 leading-relaxed mb-12"
          >
            We specialize in creating breathtaking proposal settings that capture the essence of your love story. From intimate beach picnics at sunset to grand gestures with light-up letters and thousands of rose petals, we handle every detail so you can focus on the moment. Whether you envision a romantic beach proposal in Paphos, a private dinner setup in Limassol, or a surprise engagement with stunning floral arrangements, we bring your vision to life.
          </motion.p>
          
          <Link href="/design-your-day">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-cta-btn px-12 py-4 bg-luxury-text text-white font-display uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-300"
            >
              Design Your Day
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Proposal Inspiration Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-luxury-gold text-xl tracking-widest uppercase mb-4"
            >
              Inspiration
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl text-luxury-text"
            >
              Real Proposal Moments
            </motion.h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_1.webp" 
                alt="Romantic beach proposal with sparkler lights and couple embracing at sunset in Cyprus" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_2.webp" 
                alt="Marry Me light-up letters proposal setup with red roses at iconic Cyprus shipwreck location" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_3.webp" 
                alt="Luxury beach proposal with floral arch, white aisle runner, and Will You Marry Me sign at sunset" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_4.webp" 
                alt="Marry Me giant light-up letters on beach at golden hour for romantic Cyprus proposal" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_5.webp" 
                alt="I Do light-up letters beach proposal setup with red roses and candles at sunset in Cyprus" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/proposal_gallery_6.webp" 
                alt="Will You Marry Me red heart arch with roses, candles, and red carpet aisle for romantic proposal" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-luxury-blush/20">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-luxury-text mb-8"
          >
            Ready to Pop the Question?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-gray-600 mb-12"
          >
            Let us create the perfect romantic backdrop for your proposal. From intimate beach setups to grand gestures, we handle every detail.
          </motion.p>
          <Link href="/design-your-day">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-luxury-text text-white font-display uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-300"
            >
              Design Your Day
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
