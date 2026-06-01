import React, { useState } from 'react';
import { Mail, Instagram, ArrowRight, ShieldCheck, Twitter, Facebook, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-navy text-white pt-20 pb-12 border-t border-gold/15 relative overflow-hidden"
      id="brand-footer-section"
    >
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Newsletter & brand statement Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-serif text-3xl tracking-[0.2em] text-white uppercase font-bold">ALVI’S</span>
              <p className="text-[10px] tracking-[0.5em] text-gold font-sans uppercase">WEAR THE LEGACY</p>
            </div>
            
            <p className="text-xs text-ivory/60 font-sans tracking-wide leading-relaxed max-w-sm text-pretty">
              An international sartorial house dedicated to preserving hand-cut Neapolitan tailoring, fine English fabrics, and standard-setting luxury clothes designed for generations of quiet eminence.
            </p>

            <div className="flex items-center space-x-3 text-[10px] tracking-widest text-gold/80 font-sans uppercase">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span>SAVILE ROW LONDON</span>
              <span>•</span>
              <span>VIA CHIATAMONE NAPOLI</span>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="lg:col-span-1 hidden lg:block" />

          {/* Newsletter signup Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <span className="text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block">THE HOUSE LEDGER</span>
              <h4 className="font-serif text-xl md:text-2xl text-white font-light">Join the Legacy</h4>
              <p className="text-xs text-white/50 font-sans leading-relaxed tracking-wider">
                Enroll your email address below to receive private invitations to seasonal fittings, limited-run suit sears, and custom fabric capsule announcements.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 bg-gold/10 border border-gold/25 rounded flex items-center space-x-3 animate-fade-in">
                <ShieldCheck className="h-5 w-5 text-gold animate-bounce" />
                <div>
                  <p className="text-xs font-sans text-gold font-semibold uppercase tracking-widest">Enrollment Confirmed</p>
                  <p className="text-[10px] font-sans text-white/60 mt-0.5">We have registered your credentials into the private Alvi’s archives.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md relative" id="email-signup-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-white/5 text-xs text-white placeholder-white/35 font-sans py-3.5 pl-4 pr-12 rounded border border-white/10 focus:border-gold/50 focus:outline-none transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 p-3.5 bg-gold text-navy hover:bg-white hover:text-navy rounded transition-colors duration-300 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Quick Links Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-sans text-white/60">
          
          <div className="space-y-4">
            <span className="block text-[9px] tracking-widest text-gold font-semibold uppercase">BOUTIQUES</span>
            <ul className="space-y-2.5 tracking-wider font-light">
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">London Showroom</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Naples Tailory</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Milanese House</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Como Herbarium</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="block text-[9px] tracking-widest text-gold font-semibold uppercase">COLLECTIONS</span>
            <ul className="space-y-2.5 tracking-wider font-light">
              <li><button onClick={() => handleScrollTo('collections')} className="hover:text-gold transition-colors duration-300 text-left">Bespoke Full Suits</button></li>
              <li><button onClick={() => handleScrollTo('collections')} className="hover:text-gold transition-colors duration-300 text-left">Signature Trousers</button></li>
              <li><button onClick={() => handleScrollTo('collections')} className="hover:text-gold transition-colors duration-300 text-left">Fine Knit Polos</button></li>
              <li><button onClick={() => handleScrollTo('collections')} className="hover:text-gold transition-colors duration-300 text-left">Silk Accessories</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="block text-[9px] tracking-widest text-gold font-semibold uppercase">RESOURCES</span>
            <ul className="space-y-2.5 tracking-wider font-light">
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">The Care Manual</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Bespoke Fabric Seeding</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Private Fittings Portal</span></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Returns Ledger</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="block text-[9px] tracking-widest text-gold font-semibold uppercase">LEGACY CREED</span>
            <ul className="space-y-2.5 tracking-wider font-light">
              <li><button onClick={() => handleScrollTo('story')} className="hover:text-gold transition-colors duration-300 text-left">Atelier Chronicles</button></li>
              <li><button onClick={() => handleScrollTo('aesthetic')} className="hover:text-gold transition-colors duration-300 text-left">Our Philosophy</button></li>
              <li><span className="hover:text-gold transition-colors duration-300 cursor-pointer">Limited Volume Guarantee</span></li>
              <li><span className="text-gold flex items-center space-x-1 font-semibold">
                <Sparkles className="h-3 w-3" /> <span>EST. 1928</span>
              </span></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Social media Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-sans text-white/40 tracking-wider">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Alvi’s Ltd. Handcrafted traditions preserved.
            </p>
            <p className="text-[10px] text-gold/50 font-sans tracking-widest mt-1 block uppercase">
              Muhammad Umar Alavi - Capstone Project
            </p>
          </div>

          {/* Minimalist social icons */}
          <div className="flex space-x-6">
            <a href="#instagram" className="hover:text-gold transition-colors duration-300 p-1" aria-label="Instagram">
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a href="#twitter" className="hover:text-gold transition-colors duration-300 p-1" aria-label="Twitter">
              <Twitter className="h-4.5 w-4.5" />
            </a>
            <a href="#facebook" className="hover:text-gold transition-colors duration-300 p-1" aria-label="Facebook">
              <Facebook className="h-4.5 w-4.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
