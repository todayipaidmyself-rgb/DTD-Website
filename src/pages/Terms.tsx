import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import SEO from '@/components/SEO';
import { Link } from 'wouter';

export default function Terms() {
  return (
    <Layout>
      <SEO 
        title="Terms & Conditions | Dress That Day"
        description="Terms and conditions for Dress That Day luxury event styling services in Cyprus."
        keywords="terms and conditions, event styling terms Cyprus, party planner terms, service terms Cyprus, event planning policies, booking terms Cyprus, Dress That Day policies"
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-luxury-blush/20 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="block font-display text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4">Legal</span>
          <RevealText 
            text="Terms & Conditions" 
            tag="h1" 
            className="font-display text-4xl md:text-6xl text-luxury-text mb-6"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-lg prose-headings:font-display prose-headings:text-luxury-text prose-p:font-body prose-p:text-gray-600 prose-p:font-light prose-li:font-body prose-li:text-gray-600 prose-li:font-light hover:prose-a:text-luxury-gold prose-a:transition-colors">
            
            <h3>1. Introduction</h3>
            <p>
              Welcome to Dress That Day. These Terms and Conditions govern your use of our website and the services provided by Dress That Day ("we", "us", or "our"). By booking our services, you agree to comply with and be bound by these terms.
            </p>

            <h3>2. Services</h3>
            <p>
              Dress That Day provides luxury event styling, decor hire, and planning assistance for weddings, parties, proposals, and corporate events in Cyprus. Our services include, but are not limited to:
            </p>
            <ul>
              <li>Event styling and design concepts</li>
              <li>Prop and furniture hire</li>
              <li>Floral arrangement styling (faux and fresh)</li>
              <li>Balloon installations</li>
              <li>Lighting and backdrop setup</li>
              <li>On-the-day coordination for decor setup and breakdown</li>
            </ul>

            <h3>3. Booking & Payments</h3>
            <p>
              <strong>Enquiries:</strong> All bookings are subject to availability. An enquiry does not guarantee a reservation until a deposit has been paid.
            </p>
            <p>
              <strong>Deposit:</strong> A non-refundable deposit is required to secure your event date. The specific amount will be detailed in your quote.
            </p>
            <p>
              <strong>Balance:</strong> The remaining balance is due prior to the event date, typically 2-4 weeks beforehand, as specified in your booking agreement. Failure to pay the balance on time may result in the cancellation of your booking.
            </p>

            <h3>4. Cancellations & Changes</h3>
            <p>
              <strong>Client Cancellations:</strong> Deposits are non-refundable. Cancellations made within a certain period prior to the event may incur additional charges up to the full value of the booking, to cover costs already incurred.
            </p>
            <p>
              <strong>Changes:</strong> We understand that plans can change. We will do our best to accommodate requested changes to your booking, subject to availability and potential price adjustments.
            </p>

            <h3>5. Hire Items & Liability</h3>
            <p>
              <strong>Ownership:</strong> All hire items remain the property of Dress That Day at all times.
            </p>
            <p>
              <strong>Damage & Loss:</strong> The client is responsible for all hire items during the rental period. Any damage, breakage, or loss of items will be charged to the client at the full replacement cost.
            </p>
            <p>
              <strong>Safety:</strong> We take great care in ensuring our setups are safe. However, Dress That Day cannot be held liable for any injury or damage caused by the misuse of our props or decor by guests.
            </p>

            <h3>6. Locations & Travel</h3>
            <p>
              We primarily operate in the Paphos and Limassol regions of Cyprus. Travel to other areas may be arranged upon request and will incur additional travel fees to cover fuel and time.
            </p>

            <h3>7. Weather Policy</h3>
            <p>
              For outdoor events, we strongly recommend having a backup indoor location or suitable shelter. We reserve the right to refuse to set up certain items (such as paper decor, delicate props, or electrical equipment) outdoors if weather conditions (rain, strong winds, extreme heat) pose a risk to the items or safety.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:Sales@dressthatday.com">Sales@dressthatday.com</a><br />
              <strong>Phone:</strong> <a href="tel:+35799512309">(00 995) 12309</a>
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href="/contact">
                <span className="inline-block px-8 py-3 bg-luxury-text text-white text-xs uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 shadow-lg cursor-pointer no-underline">
                  Contact Us
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
