import React, { useState } from 'react';
import { Product, Archetype } from '../types';
import { products } from '../data';
import { Eye, ShoppingBag, SlidersHorizontal, Sparkles, Compass } from 'lucide-react';

interface CollectionsProps {
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export default function Collections({ onAddToCart, onSelectProduct }: CollectionsProps) {
  // Dual layout mode: 'category' or 'archetype'
  const [filterMode, setFilterMode] = useState<'category' | 'archetype'>('category');
  
  // States of filter select
  const [activeCategory, setActiveCategory] = useState<'all' | 'suits' | 'pants' | 'shirts' | 'accessories'>('all');
  const [activeArchetype, setActiveArchetype] = useState<'all' | Archetype>('all');

  const categories = [
    { label: 'All Garments', id: 'all' as const },
    { label: 'Suits (Bespoke)', id: 'suits' as const },
    { label: 'Pants (Gurkhas & Chinos)', id: 'pants' as const },
    { label: 'Polos & Resort Shirts', id: 'shirts' as const },
    { label: 'Royal Accessories', id: 'accessories' as const },
  ];

  const archetypes = [
    { 
      label: 'All Archetypes', 
      id: 'all' as const,
      mantra: 'A full-spectrum curation spanning generations of classic aristocrat wardrobes.'
    },
    { 
      label: 'The Traditionalist', 
      id: 'traditionalist' as const,
      mantra: 'Bespoke corporate uniforms, structured shoulders, and classic English wool lines.' 
    },
    { 
      label: 'The Minimalist', 
      id: 'minimalist' as const,
      mantra: 'Unbranded elite knitwear, neutral cashmere hues, and Loro Piana level luxury.' 
    },
    { 
      label: 'The Continental', 
      id: 'continental' as const,
      mantra: 'Riviera drapes, Neapolitan shoulders, open-neck polos, and linen ease.' 
    },
    { 
      label: 'The Estate Gentleman', 
      id: 'estate' as const,
      mantra: 'Alpine country tweed houndstooth checks, suede trims, and Gurkha buckle trousers.' 
    }
  ];

  // Apply filters depending on the selected filter layer
  const filteredProducts = products.filter(product => {
    if (filterMode === 'category') {
      return activeCategory === 'all' ? true : product.category === activeCategory;
    } else {
      return activeArchetype === 'all' ? true : product.archetype === activeArchetype;
    }
  });

  const getDefaultSize = (category: string) => {
    if (category === 'accessories') return 'O/S';
    return '48 (M)'; // Classic standard
  };

  // Obtain active description string for selected archetype helper
  const currentArchetypeMantra = archetypes.find(a => a.id === activeArchetype)?.mantra;

  return (
    <section
      id="collections"
      className="py-24 md:py-32 bg-ivory text-charcoal border-t border-gold/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gold text-xs font-sans tracking-[0.4em] uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>ALVI’S CASUAL & BESPOKE APPAREL</span>
          </div>
          <h2 className="font-serif font-light text-3.5xl md:text-5xl text-navy tracking-tight">
            The Heritage Collections
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto my-3" />
          <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-charcoal/60 tracking-wider">
            Timeless garments are engineered to outlive temporary style cycles. Select your pieces by formal categories or shop via private Old Money style archetype lineages.
          </p>
        </div>

        {/* Dual Mode Switcher Ribbon */}
        <div className="flex justify-center mb-8" id="filter-mode-switcher-container">
          <div className="inline-flex p-1 bg-navy/5 rounded-md border border-navy/10 overflow-hidden">
            <button
              onClick={() => {
                setFilterMode('category');
                setActiveArchetype('all');
              }}
              className={`px-6 py-2.5 rounded text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                filterMode === 'category' 
                  ? 'bg-navy text-gold shadow-md' 
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              Shop by Category
            </button>
            <button
              onClick={() => {
                setFilterMode('archetype');
                setActiveCategory('all');
              }}
              className={`px-6 py-2.5 rounded text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                filterMode === 'archetype' 
                  ? 'bg-navy text-gold shadow-md' 
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              Shop by Style Archetype
            </button>
          </div>
        </div>

        {/* Category Controls Block / Archetype Controls Block */}
        <div className="flex flex-col items-center mb-16">
          {filterMode === 'category' ? (
            /* Category Filtering controls */
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-gold">
                <SlidersHorizontal className="h-3.5 w-3.5 animate-pulse" />
                <span>SELECT SARTORIAL COMPOSITION</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 max-w-4xl">
                {categories.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveCategory(filter.id)}
                    className={`px-5 py-2.5 rounded text-[11px] font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none border ${
                      activeCategory === filter.id
                        ? 'bg-navy text-gold border-navy shadow-md'
                        : 'bg-white text-navy/70 border-navy/5 hover:border-gold/40'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Archetype Filtering controls */
            <div className="space-y-6 text-center w-full max-w-4xl">
              <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-gold">
                <Compass className="h-3.5 w-3.5 animate-pulse" />
                <span>CHOOSE OLD MONEY STYLE LINEAGE ARCHETYPE</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 md:gap-3.5">
                {archetypes.map((archetype) => (
                  <button
                    key={archetype.id}
                    onClick={() => setActiveArchetype(archetype.id)}
                    className={`px-5 py-2.5 rounded text-[11px] font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none border ${
                      activeArchetype === archetype.id
                        ? 'bg-navy text-gold border-navy shadow-lg'
                        : 'bg-white text-navy/70 border-navy/5 hover:border-gold/40'
                    }`}
                  >
                    {archetype.label}
                  </button>
                ))}
              </div>

              {/* Mantra display banner */}
              <div className="p-4 bg-navy/5 border border-dashed border-gold/35 rounded max-w-2xl mx-auto transition-all duration-500 animate-fade-in">
                <span className="text-[9px] font-sans tracking-[0.3em] font-bold text-gold uppercase block mb-1">
                  ARCHETYPE CREED
                </span>
                <p className="text-xs font-serif italic text-charcoal/70 leading-relaxed">
                  "{currentArchetypeMantra}"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid Layout */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12"
          id="product-grid-display"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between h-full bg-white rounded-lg overflow-hidden border border-navy/10 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative p-1.5"
              id={`product-card-${product.id}`}
            >
              {/* Exquisite internal tailor stitching borders */}
              <div className="absolute inset-1.5 border border-dashed border-gold/0 group-hover:border-gold/25 transition-all duration-500 pointer-events-none rounded"></div>

              {/* Product Badge Tag */}
              <span className="absolute top-5 left-5 z-10 bg-navy/95 border border-gold/45 text-gold text-[8px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold rotate-45 inline-block opacity-80 animate-pulse"></span>
                {product.archetypeLabel}
              </span>

              {/* Elegant Interactive Image Container */}
              <div 
                className="relative aspect-[3/4] bg-navy/5 overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                {/* Primary garment image */}
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-750 ease-out group-hover:scale-105 group-hover:opacity-0"
                />
                
                {/* Secondary details / alternative image on hover */}
                <img
                  src={product.secondaryImage}
                  alt={`${product.name} alternate view`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-all duration-700 ease-out group-hover:scale-103 group-hover:opacity-100"
                />

                {/* Cover gradient on hover to showcase buttons */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 space-y-3" />

                {/* Floating Quick Action Buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-3 pointer-events-none group-hover:pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    id={`quick-view-${product.id}`}
                    className="p-3.5 bg-white text-navy hover:text-gold hover:bg-navy transition-all duration-300 rounded-full shadow-lg pointer-events-auto cursor-pointer"
                    title="Detailed Product Page"
                  >
                    <Eye className="h-4.5 w-4.5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, getDefaultSize(product.category));
                    }}
                    id={`quick-add-${product.id}`}
                    className="p-3.5 bg-gold text-navy hover:bg-navy hover:text-gold transition-all duration-300 rounded-full shadow-lg pointer-events-auto cursor-pointer"
                    title="Quick Add to Trunk"
                  >
                    <ShoppingBag className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Product Labeling / Information Section */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-medium text-[16px] text-navy tracking-normal leading-snug group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="font-serif font-semibold text-[15px] text-navy whitespace-nowrap pl-3">
                      Rs. {product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-[12px] font-serif italic text-charcoal/50 pr-4 line-clamp-2 leading-relaxed">
                    "{product.description}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-navy/5 flex items-center justify-between text-[11px] font-sans text-charcoal/65 tracking-widest uppercase">
                  <span>{product.fabric.split(',')[0]}</span>
                  <button
                    onClick={() => onSelectProduct(product)}
                    id={`explore-product-${product.id}`}
                    className="text-gold font-bold hover:text-navy transition-colors duration-300 flex items-center uppercase tracking-widest text-[10px]"
                  >
                    <span>Inspect Piece</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Exclusive Membership Note banner styling */}
        <div className="mt-24 p-8 bg-navy text-white rounded-lg border border-gold/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left max-w-2xl mb-6 md:mb-0">
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold">BESPOKE MEASUREMENTS</span>
            <h4 className="font-serif text-xl md:text-2.5xl text-white">Require sizing custom modifications?</h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed tracking-wider">
              All Alvi’s garments ship with generous internal seam allowances. We coordinate direct fitting consultants in our Milan, London and Como salons for exact bespoke personalization.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('story');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-350 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] rounded"
          >
            Read Our Heritage
          </button>
        </div>

      </div>
    </section>
  );
}
