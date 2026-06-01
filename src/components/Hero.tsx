import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Shield, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const [isPlayingFilm, setIsPlayingFilm] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Cinematic Ambient Background Image with Slow Zoom-In Motion */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out animate-pulse-slow"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=85&w=1920&auto=format&fit=crop')`, // Luxury mahogany leather lounge / library vibes
          animation: 'zoomIn 45s ease-out infinite alternate',
        }}
        referrerPolicy="no-referrer"
      />

      {/* Dynamic Gradients / Atmospheric Dimming */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-black/40" />

      {/* Thin elegant horizontal lines representing vintage blueprints/pinstripes */}
      <div className="absolute top-[20%] left-6 right-6 h-[1px] bg-gold/15 hidden md:block" />
      <div className="absolute bottom-[25%] left-6 right-6 h-[1px] bg-gold/15 hidden md:block" />

      {/* Artistic Overlay Corner Elements from Luxury / Prestige Theme */}
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/40 pointer-events-none"></div>
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-gold/40 pointer-events-none"></div>

      {/* Main Tagline & Cinematic Typography Wrapper */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Crest Motif */}
        <div className="mb-6 opacity-85 scale-90 md:scale-100 flex flex-col items-center animate-fade-in">
          <Shield className="h-10 w-10 text-gold stroke-[1] mb-2" />
          <div className="w-12 h-[1px] bg-gold/50" />
        </div>

        {/* Brand Pre-title */}
        <p className="text-[10px] md:text-xs font-sans tracking-[0.5em] text-gold font-semibold uppercase mb-4 animate-fade-in [animation-delay:200ms]">
          Alvi’s Autumn / Winter Collective
        </p>

        {/* Primary Cinematic Tagline Statement */}
        <h1 className="max-w-4xl text-pretty font-serif font-light text-3xl sm:text-4.5xl md:text-6xl text-white/95 leading-[1.25] tracking-wide mb-8 animate-fade-in [animation-delay:400ms]">
          They don’t announce themselves.<br />
          <span className="italic font-serif font-normal text-gold py-1">They don’t need to.</span><br />
          <span className="text-white font-sans text-xs tracking-[0.6em] uppercase block mt-6 font-semibold opacity-90">
            Wear the Legacy.
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="max-w-xl text-xs md:text-sm font-sans font-light leading-relaxed text-ivory/60 tracking-wider mb-10 text-pretty animate-fade-in [animation-delay:600ms]">
          Understated Neapolitan tailoring, hand-selected pure cashmere linings, and centuries of Savile Row heritage woven directly into structural modern armor.
        </p>

        {/* CTA Button Group inside custom thin layouts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-md animate-fade-in [animation-delay:800ms]">
          <button
            onClick={onDiscoverClick}
            id="hero-discover-collections-btn"
            className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold/90 text-navy font-sans text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 transform hover:-translate-y-0.5 rounded shadow-xl flex items-center justify-center space-x-2 border border-gold"
          >
            <span>Explore Collections</span>
          </button>
          
          {/* Film trigger (modal presentation) */}
          <button
            onClick={() => setIsPlayingFilm(true)}
            id="hero-cinematic-play-btn"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white text-xs font-sans font-semibold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Play className="h-3 w-3 fill-white stroke-[1.5]" />
            <span>The AW Film</span>
          </button>
        </div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/40 group cursor-pointer" onClick={onDiscoverClick}>
        <span className="text-[9px] font-sans tracking-[0.4em] uppercase mb-2 group-hover:text-gold transition-colors duration-300">Scroll to view</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-gold/60 group-hover:text-gold" />
      </div>

      {/* Decorative Brand seal in bottom right corner */}
      <div className="absolute bottom-10 right-10 hidden xl:flex items-center space-x-4 border-l border-gold/30 pl-4 text-left font-serif">
        <div>
          <p className="text-white/60 text-[10px] tracking-widest font-sans uppercase">LIMITED ENROLLMENT</p>
          <p className="text-gold text-[12px] font-light leading-snug">094 / 300 Suites Annually</p>
        </div>
      </div>

      {/* IMPRESSIVE IMMERSIVE CINEMATIC VIDEO OVERLAY PLAYER */}
      {isPlayingFilm && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Subtle audio element simulating quiet cello/vocal music or classic background ambiance */}
          
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />

          {/* Video Container placeholder styling simulating an ultra high end cinematic film */}
          <div className="relative w-full max-w-5xl aspect-video bg-navy/90 border border-gold/30 rounded flex flex-col justify-between p-6 md:p-12 overflow-hidden shadow-2xl">
            {/* Ambient slow video placeholder */}
            <div 
              className="absolute inset-0 opacity-45 bg-cover bg-center filter grayscale contrast-125 blur-sm mix-blend-luminosity scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop')`,
                animation: 'pulseSlow 6s infinite ease-in-out'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Soft film Grain Simulation overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] pointer-events-none" style={{ backgroundSize: '100% 4px, 6px 100%' }} />

            {/* Custom Cinematic sound alert if unmuted */}
            <div className="flex justify-between items-center z-10 w-full">
              <span className="text-[10px] font-sans tracking-[0.3em] font-medium text-gold uppercase flex items-center">
                <Sparkles className="h-3 w-3 mr-2 text-gold animate-spin-slow" /> ALVI’S LEGACY CINEMA FRAME • 4K ATMOSPHERIC AD
              </span>
              <button 
                onClick={() => setMuted(!muted)}
                className="text-white/50 hover:text-gold transition-colors duration-300 flex items-center space-x-2 text-xs font-sans tracking-widest uppercase focus:outline-none"
              >
                {muted ? (
                  <>
                    <VolumeX className="h-4 w-4 text-white/50" />
                    <span>MUTED</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4 text-gold" />
                    <span className="text-gold">STEREO HD</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated cinematic credits, subtitles, and slow narration text */}
            <div className="my-auto text-center z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-sans tracking-[0.4em] text-white/50 uppercase">SCENE IV: COGNAC & CHALK</span>
              <p className="text-xl md:text-3xl font-serif italic font-light text-white leading-relaxed">
                "Grandfather said real elegance remains invisible. It is the seam that never splits. The drape that never speaks, yet commands the room."
              </p>
              <div className="flex justify-center space-x-3 text-gold/80 text-[10px] font-sans tracking-widest uppercase">
                <span>DOP: RIVIERA</span>
                <span>•</span>
                <span>TAILOR: MASTER M. ALAVI</span>
              </div>
            </div>

            {/* Player Controls layout */}
            <div className="flex justify-between items-end z-10 w-full pt-4 border-t border-white/10 mt-auto">
              <div>
                <p className="text-[10px] tracking-widest text-white/40 font-sans uppercase">PLAYING ATMOSPHERE</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
                  <span className="text-xs text-gold/90 font-sans font-medium tracking-widest">LEGACY_CUT_NO_4.RAW (23:14)</span>
                </div>
              </div>
              
              <button
                onClick={() => setIsPlayingFilm(false)}
                id="close-cinema-overlay-btn"
                className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                Exit Cinema
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inject custom styling keyframes for the exquisite slow zoom */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.05); opacity: 0.55; }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
