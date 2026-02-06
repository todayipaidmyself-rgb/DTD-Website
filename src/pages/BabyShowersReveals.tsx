import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function BabyShowersReveals() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Luxury Baby Showers & Reveals | Dress That Day Cyprus</title>
        <meta name="description" content="Celebrate new beginnings with our exquisite baby shower and gender reveal styling. Elegant, bespoke, and full of joy." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/experiences/baby-showers-hero.webp" 
            alt="Luxury Baby Shower" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
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
            Baby Showers & Reveals
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
            New Beginnings
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-luxury-text mb-12 leading-tight"
          >
            Welcoming your little one with style, grace, and unforgettable moments.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-gray-600 leading-relaxed mb-12"
          >
            From gender reveal balloons to elegant baby shower brunches, we create bespoke settings that celebrate the joy of new life. Our styling includes organic balloon garlands, custom signage, floral installations, and themed dessert tables.
          </motion.p>
          
          <Link href="/design-your-day">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-cta-btn px-12 py-4 bg-luxury-text text-white font-display uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-300"
            >
              Plan Your Shower
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-4 bg-luxury-blush/10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="/images/new_collection/10.webp" 
              alt="Gender Reveal" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden mt-12 md:mt-24"
          >
            <img 
              src="/images/new_collection/3.webp" 
              alt="Neutral Baby Shower" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
