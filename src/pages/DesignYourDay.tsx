import { useState } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import SEO from '@/components/SEO';
import { ChevronRight, Check } from 'lucide-react';

export default function DesignYourDay() {
  const [step, setStep] = useState<number | 'result'>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'occasion',
      question: "What are we celebrating?",
      options: ["Wedding Proposal", "Child's Birthday", "Baby Shower", "Private Dinner", "Corporate Event"]
    },
    {
      id: 'style',
      question: "Which aesthetic speaks to you?",
      options: ["Timeless Elegance", "Bohemian Luxe", "Modern Minimalist", "Whimsical & Playful", "Rustic Charm"]
    },
    {
      id: 'palette',
      question: "Your preferred color palette?",
      options: ["Soft Pastels (Blush, Sage, Cream)", "Bold & Vibrant (Gold, Emerald, Navy)", "Neutral & Earthy (Terracotta, Beige, Olive)", "Monochrome (Black, White, Grey)", "I'm open to suggestions"]
    },
    {
      id: 'guests',
      question: "Estimated guest count?",
      options: ["Just the two of us", "Intimate (up to 10)", "Small Gathering (10-30)", "Grand Celebration (30+)"]
    },
    {
      id: 'budget',
      question: "Do you have a budget in mind?",
      options: ["€500 - €1,000", "€1,000 - €2,500", "€2,500 - €5,000", "€5,000+"]
    }
  ];

  const handleSelect = (option: string) => {
    if (typeof step === 'number') {
      setAnswers({ ...answers, [questions[step - 1].id]: option });
      if (step < questions.length) {
        setTimeout(() => setStep(step + 1), 300);
      } else {
        setTimeout(() => setStep('result'), 300);
      }
    }
  };

  const generateWhatsAppLink = () => {
    const text = `Hi Dress That Day! I just completed your Design Your Day quiz.%0A%0AOccasion: ${answers.occasion}%0AStyle: ${answers.style}%0APalette: ${answers.palette}%0AGuests: ${answers.guests}%0ABudget: ${answers.budget}%0A%0AI'd love to discuss my vision!`;
    return `https://wa.me/35799512309?text=${text}`;
  };

  return (
    <Layout>
      <SEO 
        title="Design Your Day | Dress That Day Cyprus"
        description="Create your bespoke event vision with our interactive styling quiz. Discover your perfect celebration package."
        keywords="event planning Cyprus, party planner Cyprus, event stylist Cyprus, custom event design, bespoke celebration Cyprus, event consultation Cyprus, party planning services, event styling consultation, Cyprus event planner, celebration design Cyprus"
        canonical="/design-your-day"
      />
      <section className="min-h-screen pt-32 pb-20 bg-luxury-blush flex items-center justify-center relative overflow-hidden" data-scroll-section>
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <img src="/images/logo_fresh.svg" alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] brightness-0 opacity-10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          {step !== 'result' ? (
            <div className="bg-white p-8 md:p-16 shadow-2xl border border-luxury-gold/20 animate-[fadeIn_0.8s_ease-out]">
              <div className="mb-12 text-center">
                <span className="text-luxury-gold text-sm uppercase tracking-[0.2em] mb-4 block">Step {step} of {questions.length}</span>
                <h2 className="font-serif text-3xl md:text-4xl text-luxury-text">{questions[(step as number) - 1].question}</h2>
                <div className="w-full bg-gray-100 h-1 mt-8 rounded-full overflow-hidden">
                  <div 
                    className="bg-luxury-gold h-full transition-all duration-500 ease-out"
                    style={{ width: `${((step as number) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                {questions[(step as number) - 1].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group
                      ${answers[questions[(step as number) - 1].id] === option 
                        ? 'border-luxury-gold bg-luxury-gold/5 text-luxury-text' 
                        : 'border-gray-200 hover:border-luxury-gold hover:bg-white text-gray-600 hover:text-luxury-text'
                      }`}
                  >
                    <span className="font-body text-lg font-light">{option}</span>
                    {answers[questions[(step as number) - 1].id] === option ? (
                      <Check className="w-5 h-5 text-luxury-gold" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-luxury-gold transition-colors" />
                    )}
                  </button>
                ))}
              </div>
              
              {(step as number) > 1 && (
                <button 
                  onClick={() => setStep((step as number) - 1)}
                  className="mt-8 text-gray-400 hover:text-luxury-text text-sm uppercase tracking-widest transition-colors"
                >
                  Back
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white p-8 md:p-16 shadow-2xl border border-luxury-gold/20 text-center animate-[fadeIn_0.8s_ease-out]">
              <RevealText 
                text="Your Vision Awaits" 
                tag="h2" 
                className="font-serif text-4xl md:text-5xl text-luxury-text mb-6"
              />
              <p className="font-body text-gray-600 text-lg font-light mb-12 leading-relaxed">
                Based on your preferences, we have some exquisite ideas in mind. Let's bring your 
                <span className="text-luxury-gold font-medium"> {answers.style} {answers.occasion} </span> 
                to life.
              </p>
              
              <div className="bg-luxury-blush/30 p-8 mb-12 border border-luxury-gold/10">
                <h3 className="font-serif text-xl text-luxury-text mb-4">Your Curated Profile</h3>
                <ul className="text-left space-y-3 max-w-md mx-auto">
                  {Object.entries(answers).map(([key, value]) => (
                    <li key={key} className="flex justify-between text-sm border-b border-white/50 pb-2">
                      <span className="text-gray-500 uppercase tracking-widest">{key}</span>
                      <span className="text-luxury-text font-medium text-right">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discuss My Vision on WhatsApp
              </a>
              <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">Or <Link href="/contact" className="underline hover:text-luxury-gold">send us an email</Link></p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
