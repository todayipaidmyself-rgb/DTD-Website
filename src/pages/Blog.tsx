import { useState } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog/blogPosts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Kids Parties',
    'Teepee Sleepovers',
    'Luxury Picnics',
    'Baby Showers & Reveals',
    'Proposal Styling',
    'Event Styling Tips'
  ];

  const plainTextFromHtml = (html: string) =>
    html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <SEO 
        title="Event Styling Blog | Dress That Day Cyprus"
        description="Expert tips, inspiration, and guides for luxury events in Cyprus. Read about kids parties, weddings, proposals, and more."
        canonical="/blog"
        keywords="event styling blog Cyprus, party planning tips Cyprus, luxury event inspiration Cyprus, wedding blog Cyprus, kids party ideas Cyprus, proposal planning Cyprus, event styling guide Cyprus, party styling tips Paphos, event planning blog Limassol, celebration ideas Cyprus, event design blog Cyprus, party inspiration Cyprus"
      />

      {/* Hero Section */}
      <section className="pt-36 pb-18 bg-[#f7f7f7] border-b border-black/10 relative overflow-hidden" data-scroll-section>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/60">Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-black tracking-tight">
            Stories & Inspiration
          </h1>
          <p className="font-body text-base md:text-lg text-black/70 max-w-3xl mx-auto font-light leading-relaxed">
            Refinement, behind-the-scenes details, and ideas from our luxury event styling journeys across Cyprus.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#fdfdfd] border-b border-black/10" data-scroll-section>
        <div className="container mx-auto px-6">
          {/* Mobile Swipe Hint */}
          <div className="md:hidden text-center mb-4">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light">
              Swipe to explore more
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-black text-white border-black shadow-sm' 
                    : 'bg-transparent text-black/70 border-black/20 hover:border-black/50 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col h-full">
                <article className="flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden mb-6 rounded-md bg-gray-100">
                    <img 
                      src={post.heroImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center', 'bg-luxury-blush/30');
                          const placeholder = document.createElement('div');
                          placeholder.className = 'text-luxury-text/30 font-serif text-xl uppercase tracking-widest';
                          placeholder.innerText = 'Dress That Day';
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-xs uppercase tracking-widest text-luxury-text">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-400 mb-3 uppercase tracking-wider space-x-4">
                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Tag size={12} className="mr-1" /> {post.category}</span>
                  </div>

                  <h2 className="font-serif text-2xl text-black mb-4 group-hover:text-[#d8c07f] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="font-body text-black/70 font-light mb-6 flex-grow line-clamp-3">
                    {(post as any).excerpt ?? plainTextFromHtml(post.content).slice(0, 180)}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center text-sm uppercase tracking-widest text-black group-hover:text-[#d8c07f] transition-colors duration-300 border-b border-transparent group-hover:border-[#d8c07f] pb-1">
                      Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-gray-400">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-luxury-gold hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>


    </Layout>
  );
}
