import { useState } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

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

  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Luxury Teepee Sleepovers in Cyprus",
      excerpt: "Transform your child's birthday into a magical overnight adventure. Discover the secrets to hosting the perfect teepee sleepover, from themes to breakfast ideas.",
      category: "Teepee Sleepovers",
      date: "October 15, 2025",
      image: "/images/hero_slide_teepee_luxury.webp",
      slug: "/blog/luxury-teepee-sleepovers-cyprus"
    },
    {
      id: 2,
      title: "5 Romantic Proposal Ideas in Paphos That She'll Never Forget",
      excerpt: "Planning to pop the question? Explore our curated list of the most breathtaking proposal spots in Paphos, complete with styling tips for that perfect 'Yes'.",
      category: "Proposal Styling",
      date: "September 28, 2025",
      image: "/images/hero_slide_proposal_luxury.webp",
      slug: "/blog/romantic-proposal-ideas-paphos"
    },
    {
      id: 3,
      title: "How to Style a Chic Baby Shower: Trends for 2024",
      excerpt: "Move over traditional pink and blue. We're exploring the sophisticated world of neutral palettes, organic textures, and immersive baby shower experiences.",
      category: "Baby Showers & Reveals",
      date: "November 2, 2025",
      image: "/images/hero_slide_baby_shower_luxury.webp",
      slug: "/blog/chic-baby-shower-trends-2024"
    },
    {
      id: 4,
      title: "Creating the Perfect Beach Picnic: A Step-by-Step Guide",
      excerpt: "From selecting the right location to choosing the menu, learn how to orchestrate a flawless luxury beach picnic on the stunning coast of Cyprus.",
      category: "Luxury Picnics",
      date: "August 10, 2025",
      image: "/images/hero_slide_picnic_luxury.webp",
      slug: "/blog/perfect-beach-picnic-guide"
    },
    {
      id: 5,
      title: "Why Professional Event Styling Matters for Kids' Parties",
      excerpt: "It's more than just balloons. Discover how professional styling creates immersive worlds that spark imagination and create lasting childhood memories.",
      category: "Kids Parties",
      date: "July 5, 2025",
      image: "/images/hero_slide_kids_luxury.webp",
      slug: "/blog/professional-event-styling-kids-parties"
    },
    {
      id: 6,
      title: "Top 10 Venues for Luxury Events in Limassol",
      excerpt: "A curated selection of Limassol's most exclusive venues, perfect for hosting elegant celebrations, from intimate gatherings to grand parties.",
      category: "Event Styling Tips",
      date: "June 20, 2025",
      image: "/images/cyprus_hero_terrace_v2.webp",
      slug: "/blog/top-luxury-event-venues-limassol"
    },
    // New Posts
    {
      id: 7,
      title: "Safari Adventure: Styling a Wildly Elegant Kids Party",
      excerpt: "Go wild with style! Learn how to create a sophisticated safari-themed birthday bash with sage green balloons, gold accents, and life-sized animal props.",
      category: "Kids Parties",
      date: "January 12, 2025",
      image: "/images/blog_kids_party_safari.webp",
      slug: "/blog/safari-adventure-kids-party-styling"
    },
    {
      id: 8,
      title: "Enchanted Garden: A Whimsical Fairy Party Theme",
      excerpt: "Sprinkle some magic on your little one's special day. We share tips for creating an ethereal fairy garden party with pastel florals, tulle details, and butterfly accents.",
      category: "Kids Parties",
      date: "February 5, 2025",
      image: "/images/blog_kids_party_fairy.webp",
      slug: "/blog/enchanted-garden-fairy-party-theme"
    },
    {
      id: 9,
      title: "Boho Chic Sleepovers: The Ultimate Indoor Glamping Experience",
      excerpt: "Bring the outdoors in with a cozy boho-chic teepee sleepover. Discover how to layer textures, lights, and macrame for a dreamy slumber party setup.",
      category: "Teepee Sleepovers",
      date: "January 28, 2025",
      image: "/images/blog_teepee_boho_chic.webp",
      slug: "/blog/boho-chic-teepee-sleepover-ideas"
    },
    {
      id: 10,
      title: "Movie Night Magic: Hosting a Luxury Cinema Sleepover",
      excerpt: "Lights, camera, action! Create a blockbuster birthday with a luxury movie night teepee setup, complete with a popcorn bar and cozy viewing area.",
      category: "Teepee Sleepovers",
      date: "March 10, 2025",
      image: "/images/blog_teepee_movie_night.webp",
      slug: "/blog/luxury-movie-night-sleepover-guide"
    },
    {
      id: 11,
      title: "Sunset Romance: Planning a Cliffside Picnic in Cyprus",
      excerpt: "Celebrate love with a breathtaking view. Our guide to planning a romantic sunset picnic on the cliffs of Cyprus, featuring champagne and gourmet treats.",
      category: "Luxury Picnics",
      date: "April 2, 2025",
      image: "/images/blog_picnic_sunset_romance.webp",
      slug: "/blog/sunset-cliffside-picnic-cyprus"
    },
    {
      id: 12,
      title: "Beachside Bliss: Styling a Luxury Group Picnic",
      excerpt: "Gather your friends for an unforgettable beach day. Tips for styling a large group picnic with low tables, crystal glassware, and coastal-inspired decor.",
      category: "Luxury Picnics",
      date: "May 15, 2025",
      image: "/images/blog_picnic_group_celebration.webp",
      slug: "/blog/luxury-beach-group-picnic-styling"
    },
    {
      id: 13,
      title: "Neutral Elegance: A Modern Take on Baby Showers",
      excerpt: "Embrace the beauty of beige. Explore the trend of neutral-toned baby showers featuring pampas grass, white balloons, and minimalist luxury styling.",
      category: "Baby Showers & Reveals",
      date: "February 20, 2025",
      image: "/images/blog_baby_shower_neutral.webp",
      slug: "/blog/neutral-elegance-baby-shower-ideas"
    },
    {
      id: 14,
      title: "Pink or Blue? Creative Gender Reveal Party Ideas",
      excerpt: "Make the big reveal unforgettable. From smoke cannons to giant light-up letters, discover creative and stylish ways to announce your baby's gender.",
      category: "Baby Showers & Reveals",
      date: "March 5, 2025",
      image: "/images/blog_baby_shower_gender_reveal.webp",
      slug: "/blog/creative-gender-reveal-party-ideas"
    },
    {
      id: 15,
      title: "The Perfect 'Yes': Styling a Beach Proposal at Sunset",
      excerpt: "Set the scene for a life-changing moment. How to style a romantic beach proposal with candles, roses, and the stunning backdrop of a Cyprus sunset.",
      category: "Proposal Styling",
      date: "January 8, 2025",
      image: "/images/blog_proposal_beach_sunset.webp",
      slug: "/blog/styling-perfect-beach-proposal"
    },
    {
      id: 16,
      title: "Intimate Luxury: A Private Dinner Proposal Guide",
      excerpt: "For a more private moment, consider a luxury dinner proposal. We share ideas for creating a romantic, candlelit atmosphere for just the two of you.",
      category: "Proposal Styling",
      date: "February 14, 2025",
      image: "/images/blog_proposal_private_dinner.webp",
      slug: "/blog/private-dinner-proposal-styling-guide"
    },
    {
      id: 17,
      title: "5 Essential Tips for Styling an Outdoor Event in Cyprus",
      excerpt: "Planning an event under the sun? Expert advice on managing heat, wind, and lighting to ensure your outdoor celebration is both beautiful and comfortable.",
      category: "Event Styling Tips",
      date: "April 20, 2025",
      image: "/images/blog_styling_tips_outdoor.webp",
      slug: "/blog/outdoor-event-styling-tips-cyprus"
    },
    {
      id: 18,
      title: "Choosing the Right Color Palette for Your Celebration",
      excerpt: "Colors set the mood. Learn how to select a cohesive and sophisticated color palette that reflects your personal style and the theme of your event.",
      category: "Event Styling Tips",
      date: "May 5, 2025",
      image: "/images/blog_styling_tips_color_palette.webp",
      slug: "/blog/choosing-event-color-palette-guide"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <SEO 
        title="Event Styling Blog | Dress That Day Cyprus"
        description="Expert tips, inspiration, and guides for luxury events in Cyprus. Read about kids parties, weddings, proposals, and more."
        canonical="/blog"
        keywords="event styling blog Cyprus, party planning tips Cyprus, luxury event inspiration Cyprus, wedding blog Cyprus, kids party ideas Cyprus, proposal planning Cyprus, event styling guide Cyprus, party styling tips Paphos, event planning blog Limassol, celebration ideas Cyprus, event design blog Cyprus, party inspiration Cyprus"
      />

      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-[#f7f7f7] border-b border-black/10 relative overflow-hidden" data-scroll-section>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/60">Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-black tracking-tight">
            Stories & Inspiration
          </h1>
          <p className="font-body text-base md:text-lg text-black/70 max-w-2xl mx-auto font-light">
            Refinement, behind-the-scenes details, and ideas from our luxury event styling journeys across Cyprus.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-[#fdfdfd] border-b border-black/10 sticky top-16 z-30" data-scroll-section>
        <div className="container mx-auto px-6 overflow-x-auto">
          {/* Mobile Swipe Hint */}
          <div className="md:hidden text-center mb-4">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light">
              Swipe to explore more
            </span>
          </div>
          <div className="flex space-x-4 md:justify-center min-w-max">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                <div className="relative h-64 overflow-hidden mb-6 rounded-sm bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      // Create a placeholder div if image fails
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
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm uppercase tracking-widest text-black group-hover:text-[#d8c07f] transition-colors duration-300 border-b border-transparent group-hover:border-[#d8c07f] pb-1">
                    Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </article>
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
