import React from 'react';
import { brandPillars } from '../data';
import { Sparkles, Calendar, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Aesthetic() {
  const getIconForPillar = (num: string) => {
    switch (num) {
      case 'I': return <Calendar className="h-5 w-5 text-gold" />;
      case 'II': return <HeartHandshake className="h-5 w-5 text-gold" />;
      case 'III': return <ShieldCheck className="h-5 w-5 text-gold" />;
      default: return <Sparkles className="h-5 w-5 text-gold" />;
    }
  };

  return (
    <section
      id="aesthetic"
      className="py-24 md:py-32 bg-navy text-white relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title Editorial */}
        <div className="max-w-3xl mb-24 space-y-4">
          <span className="text-[10px] tracking-[0.45em] text-gold uppercase font-sans font-semibold">
            THE ALVI’S HOUSE CREED
          </span>
          <h2 className="font-serif font-light text-3.5xl md:text-5.5xl text-white tracking-tight leading-tight">
            An Uncompromising Way<br />
            <span className="italic text-gold font-serif font-light">Of Existing in the World</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold/60 mt-4" />
          <p className="max-w-xl text-xs md:text-sm text-ivory/60 font-sans leading-relaxed tracking-wider">
            Fashion passes, but a posture is permanent. Our craft ignores cyclic industry calendars, opting instead for a singular commitment to extreme refinement.
          </p>
        </div>

        {/* Brand Pillars Editorial Alternate Layout */}
        <div className="space-y-32 md:space-y-40">
          {brandPillars.map((pillar, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={pillar.title}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-20 items-center justify-between`}
                id={`brand-pillar-${index + 1}`}
              >
                
                {/* Image Showcase Container */}
                <div className="w-full lg:w-[48%] relative group">
                  {/* Subtle gold offset photo border */}
                  <div className={`absolute -inset-2 md:-inset-4 border border-gold/15 transition-transform duration-500 group-hover:scale-102 ${
                    isEven ? 'translate-x-2 translate-y-2' : '-translate-x-2 translate-y-2'
                  }`} />
                  
                  {/* Premium Crop Frame */}
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded bg-charcoal">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter sepia-[0.10] contrast-[1.05] grayscale-[0.15] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                  </div>

                  {/* Elegant floating Roman Numeral */}
                  <div className={`absolute -top-8 ${
                    isEven ? 'right-4' : 'left-4'
                  } font-serif font-semibold text-[60px] md:text-[90px] text-gold/15 leading-none select-none tracking-widest`}>
                    {pillar.number}
                  </div>
                </div>

                {/* Text Editorial Content */}
                <div className="w-full lg:w-[45%] space-y-6">
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gold/10 border border-gold/25 rounded">
                      {getIconForPillar(pillar.number)}
                    </div>
                    <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-gold uppercase">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif font-light text-2.5xl md:text-3.5xl text-white tracking-tight">
                    {pillar.title}
                    <span className="block text-xs md:text-sm font-sans tracking-[0.2em] font-medium text-gold uppercase mt-2 italic">
                      {pillar.subtitle}
                    </span>
                  </h3>

                  <p className="text-xs md:text-sm text-ivory/70 leading-relaxed font-sans tracking-wide text-pretty">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center space-x-4">
                    <span className="text-[10px] font-sans text-white/40 tracking-widest uppercase">
                      FABRIC SEEDING • LIFETIME REPAIRS • NO MARGIN STAMP
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
