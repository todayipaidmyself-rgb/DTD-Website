import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function LightUpLetters() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Luxury Light-Up Letters | Dress That Day Cyprus</title>
        <meta name="description" content="Make a statement with our giant light-up marquee letters. Perfect for weddings, proposals, and milestone birthdays." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/experiences/light-up-letters-hero.webp" 
            alt="Light Up Letters" 
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
            Light-Up Letters
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
            Illuminated Statements
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-luxury-text mb-12 leading-tight"
          >
            Add a touch of glamour and a warm glow to your special occasion.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-gray-600 leading-relaxed mb-12"
          >
            Our giant marquee letters are the perfect centerpiece for any event. Whether spelling out "LOVE" for a wedding, "ONE" for a first birthday, or a custom name, these lights create an unforgettable backdrop and photo opportunity.
          </motion.p>
          
          <Link href="/design-your-day">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-cta-btn px-12 py-4 bg-luxury-text text-white font-display uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-300"
            >
              Light Up Your Event
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
              src="/images/new_collection/20.webp" 
              alt="Marry Me Letters" 
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/88957639/UBzYxZsLfuaujzBj.webp" 
              alt="Bride Lights" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
