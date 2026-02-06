import { useState } from 'react';
import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import SEO from '@/components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Bookings & Enquiries",
    items: [
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking as early as possible to secure your preferred date, especially for weekends and peak seasons (summer and Christmas). For weddings and large events, 6-12 months in advance is ideal. For smaller parties, 2-3 months is often sufficient, but availability cannot be guaranteed without a deposit."
      },
      {
        question: "How do I secure my date?",
        answer: "A non-refundable deposit is required to secure your date in our calendar. The remaining balance is typically due 2-4 weeks prior to the event, depending on the scale and nature of the booking."
      },
      {
        question: "Do you offer consultations?",
        answer: "Yes, we offer initial consultations to discuss your vision, theme, and requirements. This can be done via phone, video call, or in person for larger events."
      }
    ]
  },
  {
    title: "Styling & Setup",
    items: [
      {
        question: "Do you provide the decor or do I need to hire it separately?",
        answer: "We are a full-service styling company with an extensive inventory of props, backdrops, lighting, and decor. We handle the design, sourcing, delivery, setup, and breakdown, so you don't have to worry about a thing."
      },
      {
        question: "Can you style an event based on a specific theme?",
        answer: "Absolutely. We specialize in bespoke themed styling. Whether you have a specific vision in mind or need us to create a concept from scratch, we tailor every detail to match your theme and aesthetic."
      },
      {
        question: "How long does setup take?",
        answer: "Setup time varies depending on the complexity of the design. Small setups may take 1-2 hours, while large weddings or elaborate parties can take 4-8 hours or more. We will coordinate with your venue to ensure we have sufficient access time."
      }
    ]
  },
  {
    title: "Locations & Travel",
    items: [
      {
        question: "Which areas of Cyprus do you cover?",
        answer: "We primarily serve Paphos and Limassol. We are happy to travel to other locations across Cyprus for larger events, though additional travel and logistics fees may apply."
      },
      {
        question: "Do you style outdoor events?",
        answer: "Yes, we love outdoor celebrations! From beach picnics to garden parties, we are experienced in styling al fresco events. However, we always recommend having a 'Plan B' for weather, as we cannot be held responsible for wind, rain, or extreme heat affecting the decor."
      }
    ]
  },
  {
    title: "Customisation",
    items: [
      {
        question: "Can I customize a package?",
        answer: "Yes, all our packages can be tailored to suit your specific needs. We believe every event is unique, so we are flexible in adjusting our services to fit your vision and budget."
      },
      {
        question: "Do you offer personalized signage?",
        answer: "Yes, we design and produce custom signage, including welcome signs, seating charts, and personalized backdrops to add that personal touch to your event."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions | Dress That Day"
        description="Find answers to common questions about our luxury event styling services, booking process, and coverage areas in Cyprus."
        keywords="event styling FAQ, party planner questions Cyprus, event planning FAQ Cyprus, wedding planner FAQ, Cyprus event services questions, booking event planner Cyprus, event styling pricing Cyprus, party planning FAQ"
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-luxury-blush/20 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="block font-serif text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4">Information</span>
          <RevealText 
            text="Frequently Asked Questions" 
            tag="h1" 
            className="font-serif text-4xl md:text-6xl text-luxury-text mb-6"
          />
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Everything you need to know about our services, process, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="font-serif text-2xl text-luxury-text mb-8 border-b border-luxury-pink/20 pb-4">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const uniqueId = `${catIndex}-${itemIndex}`;
                  const isOpen = openIndex === uniqueId;
                  
                  return (
                    <div 
                      key={itemIndex} 
                      className="border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 hover:border-luxury-pink/30"
                    >
                      <button
                        onClick={() => toggleAccordion(uniqueId)}
                        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-luxury-blush/10 transition-colors duration-300"
                        aria-expanded={isOpen}
                      >
                        <span className="font-body text-luxury-text font-medium text-lg pr-8">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="text-luxury-gold flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                        )}
                      </button>
                      
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-500 ease-in-out",
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="p-6 pt-0 text-gray-600 font-body font-light leading-relaxed border-t border-dashed border-gray-100">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-20 p-10 bg-luxury-blush/10 border border-luxury-pink/20">
            <h3 className="font-serif text-2xl text-luxury-text mb-4">Still have questions?</h3>
            <p className="font-body text-gray-600 mb-8 font-light">
              We're here to help. Reach out to us directly and we'll get back to you shortly.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-luxury-text text-white text-xs uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
