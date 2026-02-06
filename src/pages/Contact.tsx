import PageHeading from '@/components/PageHeading';
import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import SEO from '@/components/SEO';
import { Link } from 'wouter';

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dress That Day",
    "description": "Luxury event styling and party planning services in Cyprus specializing in weddings, proposals, birthday parties, teepee parties, picnics, and special celebrations",
    "url": "https://dressthatday.site",
    "telephone": "+35799512309",
    "email": "hello@dressthatday.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Agiou Stefanou Street",
      "addressLocality": "Chlorakas",
      "addressRegion": "Paphos",
      "postalCode": "8560",
      "addressCountry": "CY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.7833",
      "longitude": "32.4167"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Paphos"
      },
      {
        "@type": "City",
        "name": "Limassol"
      },
      {
        "@type": "Country",
        "name": "Cyprus"
      }
    ],
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/dressthatday",
      "https://www.facebook.com/dressthatday"
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us | Book Your Luxury Event Styling | Dress That Day Cyprus"
        description="Ready to plan your dream event? Contact Dress That Day for luxury event styling in Paphos and Limassol, Cyprus. Weddings, proposals, birthdays, teepee parties, and more. Call +357 99 512309 or email hello@dressthatday.com"
        keywords="contact Dress That Day, book event planner Cyprus, event styling inquiry, Cyprus party planner contact, wedding planner Cyprus contact, event consultation Cyprus, book party stylist Cyprus, Paphos event planner contact, Limassol event styling, Cyprus event booking"
        canonical="/contact"
        schema={schema}
      />
      <section className="pt-40 pb-20 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <RevealText 
              text="Begin Your Journey" 
              tag="h1" 
              className="font-serif text-5xl md:text-7xl text-luxury-text mb-6"
            />
            <p className="font-body text-gray-600 text-lg font-light max-w-2xl mx-auto">
              We invite you to share your vision with us. Whether you're planning an intimate proposal or a grand celebration, we are here to bring your dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl text-luxury-text mb-4">Get in Touch</h2>
                <p className="font-body text-gray-600 font-light mb-2">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</span>
                  <a href="tel:+35799512309" className="hover:text-luxury-gold transition-colors text-lg">(00 357) 99 512309</a>
                </p>
                <p className="font-body text-gray-600 font-light">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Email</span>
                  <a href="mailto:hello@dressthatday.com" className="hover:text-luxury-gold transition-colors text-lg">hello@dressthatday.com</a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-luxury-text mb-4">Visit Us</h2>
                <p className="font-body text-gray-600 font-light leading-relaxed">
                  4 Agiou Stefanou Street<br />
                  8560 Chlorakas<br />
                  Paphos, Cyprus
                </p>
                <p className="font-body text-gray-500 text-sm mt-4 italic">By appointment only</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-luxury-text mb-4">Service Areas</h2>
                <p className="font-body text-gray-600 font-light leading-relaxed">
                  Primarily serving Paphos and Limassol.<br />
                  Available for destination events across Cyprus upon request.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-luxury-text mb-4">Our Services</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/teepee-parties" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Teepee Tent Parties
                  </Link>
                  <Link href="/weddings" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Weddings
                  </Link>
                  <Link href="/experiences/proposals" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Proposals
                  </Link>
                  <Link href="/birthday-parties" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Birthday Parties
                  </Link>
                  <Link href="/picnic-parties" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Picnic Parties
                  </Link>
                  <Link href="/christmas" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Christmas Parties
                  </Link>
                  <Link href="/baby-showers" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Baby Showers
                  </Link>
                  <Link href="/commercial-events" className="font-body text-gray-600 hover:text-luxury-gold transition-colors text-sm">
                    → Corporate Events
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h2 className="font-serif text-2xl text-luxury-text mb-6">Send Us a Message</h2>
              <form className="space-y-8" action="https://formspree.io/f/your-form-id" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs uppercase tracking-widest text-gray-500">Event Type *</label>
                  <select 
                    id="type"
                    name="event_type"
                    required
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                  >
                    <option value="">Select an event type...</option>
                    <option value="wedding">Wedding / Proposal</option>
                    <option value="kids">Little Un's Party</option>
                    <option value="teepee">Teepee Sleepover</option>
                    <option value="picnic">Luxury Picnic</option>
                    <option value="shower">Baby Shower / Gender Reveal</option>
                    <option value="christmas">Christmas Party</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-500">Event Date</label>
                  <input 
                    type="date" 
                    id="date"
                    name="event_date"
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Your Vision *</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light resize-none"
                    placeholder="Tell us about your dream event..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-luxury-text text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <p className="font-body text-gray-600 font-light text-sm">
              Prefer to chat? Reach us on WhatsApp at{' '}
              <a href="https://wa.me/35799512309" className="text-luxury-gold hover:underline" target="_blank" rel="noopener noreferrer">
                +357 99 512309
              </a>
              {' '}for instant responses.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
