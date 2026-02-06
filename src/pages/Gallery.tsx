import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import PageHeading from '@/components/PageHeading';
import SEO from '@/components/SEO';
import { useState } from 'react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All'];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Dress That Day Event Styling Portfolio",
    "description": "Authentic photos from luxury events styled by Dress That Day in Cyprus - weddings, proposals, birthday parties, picnics, and special celebrations",
    "provider": {
      "@type": "Organization",
      "name": "Dress That Day",
      "url": "https://dressthatday.site"
    }
  };

  const images = [
    "/images/new_collection/1.webp",
    "/images/new_collection/2.webp",
    "/images/new_collection/3.webp",
    "/images/new_collection/4.webp",
    "/images/new_collection/5.webp",
    "/images/new_collection/6.webp",
    "/images/new_collection/7.webp",
    "/images/new_collection/8.webp",
    "/images/new_collection/9.webp",
    "/images/new_collection/10.webp",
    "/images/new_collection/11.webp",
    "/images/new_collection/12.webp",
    "/images/new_collection/13.webp",
    "/images/new_collection/14.webp",
    "/images/new_collection/15.webp",
    "/images/new_collection/16.webp",
    "/images/new_collection/17.webp",
    "/images/new_collection/18.webp",
    "/images/new_collection/19.webp",
    "/images/new_collection/20.webp",
    "/images/new_collection/21.webp",
  ].map((src, idx) => ({
    src,
    title: "",
    loc: "",
    category: "All",
    alt: `Gallery image ${idx + 1}`,
  }));

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <Layout>
      <SEO 
        title="Event Styling Portfolio Gallery | Authentic Photos | Dress That Day Cyprus"
        description="Browse our authentic portfolio of luxury event styling in Cyprus. Real photos from weddings, proposals, birthday parties, picnics, and special celebrations styled by Dress That Day."
        canonical="/gallery"
        schema={schema}
        keywords="event styling gallery Cyprus, party styling portfolio Cyprus, wedding styling photos Cyprus, event planner gallery Paphos, luxury event photos Limassol, birthday party gallery Cyprus, proposal styling portfolio Cyprus, picnic party photos Cyprus, event design gallery Cyprus, party planner portfolio Cyprus, celebration styling photos Cyprus, event decoration gallery Cyprus"
      />
      {/* Hero Section */}
      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] bg-luxury-blush overflow-hidden flex items-center justify-center" data-scroll-section>
        <PageHeading
          text="Gallery"
          subtextBelow="Authentic moments from real events we've styled"
          textColor="text-black"
          subtextColor="text-black/80"
        />
      </section>

      {/* Gallery Content Section */}
      <section className="pt-20 pb-20 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <RevealText 
              text="Our Portfolio" 
              tag="h1" 
              className="font-serif text-5xl md:text-7xl text-luxury-text mb-6 hidden"
            />
            <p className="font-body text-gray-600 text-lg font-light max-w-2xl mx-auto mb-10">
              Every image tells a story. These are real moments from real events we've had the privilege to style across Cyprus.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 border ${
                    filter === cat 
                      ? 'bg-luxury-text text-white border-luxury-text' 
                      : 'bg-transparent text-luxury-text border-luxury-text/30 hover:border-luxury-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden mb-8 animate-fade-in" data-scroll data-scroll-speed={0.5}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-serif text-white text-2xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                  <p className="font-body text-white/80 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.loc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <RevealText 
              text="Ready to create your moment?" 
              tag="h2" 
              className="font-serif text-3xl md:text-4xl text-luxury-text mb-6"
            />
            <p className="font-body text-gray-600 text-lg font-light mb-8 max-w-xl mx-auto">
              Let's design an event that's uniquely yours. Every celebration deserves to be styled with intention.
            </p>
            <a 
              href="/contact"
              className="inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-all duration-500 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
