import React from 'react';
import { reviews } from '../data';
import { Star, ShieldAlert, Award, Clock } from 'lucide-react';

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-24 md:py-32 bg-ivory text-charcoal border-t border-gold/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Two Column Layout: Story Content & Heritage Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          
          {/* Story Details (Left Column) */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-sans font-semibold">
                SARTORIAL ORIGINS
              </span>
              <h2 className="font-serif font-light text-3.5xl md:text-5xl text-navy tracking-tight leading-tight">
                Crafted by Hand,<br />
                <span className="italic text-gold font-serif font-light">Evolved Across Generations</span>
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mt-4" />
            </div>

            <div className="space-y-5 text-xs md:text-sm font-sans font-light text-charcoal/75 leading-relaxed tracking-wider text-pretty">
              <p>
                Founded in the quiet alleys bordering London's Savile Row and posteriormente integrated with Neapolitan tailoring guilds, Alvi’s represents an uncompromising marriage between rigid British structural architecture and warm Italian fluidity.
              </p>
              <p>
                Our master atelier, pioneered by Master Tailor Muhammad Umar Alavi, rejects modern industrial schedules. Working exclusively with certified looms in Yorkshire and Biella, every chest canvas is basted with over twelve hundred hand-stitches, letting the coat drape three-dimensionally around the physical form instead of hugging it blindly.
              </p>
              <p className="border-l-2 border-gold pl-4 italic text-navy font-serif text-sm">
                "We do not strive to be modern. We strive to be immortal. The greatest sign of status is the absolute silence of your garments."
              </p>
            </div>

            {/* Heritage stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-navy/10">
              <div className="space-y-1">
                <span className="block font-serif font-semibold text-2xl text-navy">1928</span>
                <span className="block text-[8px] tracking-widest font-sans uppercase text-charcoal/50">Founded</span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-semibold text-2xl text-navy">12,000+</span>
                <span className="block text-[8px] tracking-widest font-sans uppercase text-charcoal/50">Hand Stitches</span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-semibold text-2xl text-navy">300</span>
                <span className="block text-[8px] tracking-widest font-sans uppercase text-charcoal/50">Suits / Year</span>
              </div>
            </div>
          </div>

          {/* Heritage Photograph (Right Column) */}
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/15 rounded pointer-events-none translate-x-3 -translate-y-3" />
            
            <div className="aspect-[4/3] md:aspect-square overflow-hidden rounded bg-navy">
              <img
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop"
                alt="Alvi's drafting workshop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.3] contrast-110 filter sepia-[0.05] hover:scale-103 transition-transform duration-[1000ms]"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-navy/95 backdrop-blur border border-gold/25 p-5 text-white rounded flex items-center space-x-4">
              <div className="p-2.5 bg-gold/15 rounded border border-gold/35">
                <Award className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase font-sans text-gold font-semibold">THE SARTORIAL CERTIFICATE</p>
                <p className="text-xs font-serif italic text-white/80 mt-0.5">Every garment comes stamped with its individual registry master tailor seal.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Heritage Reviews Testimonial Grid section */}
        <div id="reviews" className="pt-16 border-t border-navy/15">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Clock className="h-5 w-5 text-gold mx-auto mb-2 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-sans font-semibold">THE LEGACY ROSTER</span>
            <h3 className="font-serif font-light text-2.5xl md:text-4xl text-navy">Verified Appraisals</h3>
            <p className="text-xs text-charcoal/60 font-sans tracking-wide">
              Selected letters from families who have entrusted their milestones to our Savile Row and Neapolitan ateliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white/60 p-8 rounded-lg border border-navy/5 hover:border-gold/30 hover:bg-white transition-all duration-350 flex flex-col justify-between shadow-sm relative group"
                id={`review-card-${review.id}`}
              >
                {/* Five star indicator */}
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold stroke-none" />
                    ))}
                  </div>

                  <h4 className="font-serif font-medium text-navy text-[15px]">
                    "{review.heading}"
                  </h4>

                  <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light tracking-wide italic">
                    {review.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy/5 flex flex-col">
                  <span className="text-[11px] font-sans font-semibold text-navy tracking-wider">
                    {review.author}
                  </span>
                  <span className="text-[9px] font-sans text-charcoal/50 tracking-widest uppercase mt-0.5">
                    {review.location} • Acquired {review.productName.split(' ')[2] || 'Garment'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
