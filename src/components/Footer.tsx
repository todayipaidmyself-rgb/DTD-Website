import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-luxury-white pt-20 pb-10 border-t border-luxury-pink/20" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 w-48">
              <img src="/images/logo_fresh.svg" alt="Dress That Day" className="w-full h-auto brightness-0 opacity-80" />
            </div>
            <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
              Orchestrating emotions and crafting immersive experiences in Cyprus. Where moments become masterpieces.
            </p>
            
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg mb-6">Experiences</h4>
            <ul className="space-y-3 font-body text-sm text-gray-600">
              <li><Link href="/experiences/little-ones-parties" className="hover:text-luxury-gold transition-colors">Little Un's Parties</Link></li>
              <li><Link href="/experiences/teepee-parties" className="hover:text-luxury-gold transition-colors">Teepee Sleepovers</Link></li>
              <li><Link href="/experiences/picnic-parties" className="hover:text-luxury-gold transition-colors">Luxury Picnics</Link></li>
              <li><Link href="/experiences/proposals" className="hover:text-luxury-gold transition-colors">Proposal Styling</Link></li>
              <li><Link href="/experiences/baby-showers" className="hover:text-luxury-gold transition-colors">Baby Showers</Link></li>
              <li><Link href="/experiences/themed-parties" className="hover:text-luxury-gold transition-colors">Themed Parties</Link></li>
              <li><Link href="/experiences/milestone-parties" className="hover:text-luxury-gold transition-colors">Milestone Parties</Link></li>
              <li><Link href="/experiences/commercial-events" className="hover:text-luxury-gold transition-colors">Commercial Events</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg mb-6">Information</h4>
            <ul className="space-y-3 font-body text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-luxury-gold transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-luxury-gold transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-luxury-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-gray-600">
              <li>Paphos & Limassol, Cyprus</li>
              <li><a href="tel:+35726323212" className="hover:text-luxury-gold transition-colors">26323212</a></li>
              <li><a href="tel:+35726323209" className="hover:text-luxury-gold transition-colors">26323209</a></li>
              <li><a href="tel:+35799512309" className="hover:text-luxury-gold transition-colors">+99512309</a></li>
              <li><a href="mailto:Sales@dressthatday.com" className="hover:text-luxury-gold transition-colors">Sales@dressthatday.com</a></li>
              <li className="pt-4">
                <Link href="/contact" className="inline-block px-6 py-2 border border-luxury-text text-xs uppercase tracking-widest hover:bg-luxury-text hover:text-white transition-all duration-300">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-body">
          <p>&copy; {new Date().getFullYear()} Dress That Day. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Luxury in Mind</p>
        </div>
      </div>
    </footer>
  );
}
