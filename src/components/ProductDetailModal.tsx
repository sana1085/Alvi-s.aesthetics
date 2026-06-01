import React, { useState } from 'react';
import { Product } from '../types';
import { X, Shield, Sparkles, Check, Heart } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart
}: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [addedPrompt, setAddedPrompt] = useState<boolean>(false);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  if (!product || !isOpen) return null;

  // Sizing definitions depending on luxury category
  const sizes = product.category === 'accessories' 
    ? ['O/S'] 
    : ['46 (S)', '48 (M)', '50 (L)', '52 (XL)', '54 (XXL)'];

  // Establish initial size if empty
  if (!selectedSize && sizes.length > 0) {
    setSelectedSize(sizes[0]);
  }

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedPrompt(true);
    setTimeout(() => {
      setAddedPrompt(false);
      onClose();
    }, 1800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in"
      id="product-quickview-backdrop"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-ivory text-charcoal rounded-lg shadow-2xl overflow-hidden border border-gold/25 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        id="product-quickview-container"
      >
        
        {/* Left Column: Product Photography Display */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:h-inherit relative bg-navy/5 overflow-hidden">
          {/* Main Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
          />
          
          {/* Custom micro detail banner */}
          <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur border border-gold/20 p-3 rounded flex items-center justify-between text-white">
            <span className="text-[9px] font-sans tracking-widest font-semibold text-gold uppercase">SPECIFICATION SHEET</span>
            <span className="text-[10px] font-serif italic text-white/80">{product.fit}</span>
          </div>
        </div>

        {/* Right Column: Sartorial content details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto scrollbar-none max-h-[50vh] md:max-h-[90vh]">
          
          {/* Header row */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] font-sans tracking-[0.3em] text-gold uppercase font-bold block mb-1">
                  {product.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-navy font-light leading-tight">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:text-gold text-charcoal/50 transition-colors duration-300 focus:outline-none"
                id="close-quickview-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Price display with noble currency format */}
            <div className="flex items-baseline space-x-3 pt-1 border-b border-navy/5 pb-4">
              <span className="font-serif text-2xl text-navy font-semibold">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-[10px] font-sans font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded uppercase tracking-wider">
                Exquisite Batch Available
              </span>
            </div>

            {/* Document descriptions */}
            <div className="space-y-4 pt-1">
              <p className="text-sm font-sans font-normal text-charcoal/80 leading-relaxed tracking-wide">
                {product.longDescription}
              </p>
              
              {/* Garment Legacy Story capsule */}
              <div className="p-4 bg-navy/5 rounded border border-navy/5 space-y-1.5">
                <span className="text-[9px] font-sans tracking-widest text-gold font-bold uppercase flex items-center">
                  <Shield className="h-3.5 w-3.5 mr-1.5 text-gold" /> THE HERITAGE CHRONICLE
                </span>
                <p className="text-[11px] font-serif italic leading-relaxed text-charcoal/70">
                  "{product.legacyStory}"
                </p>
              </div>
            </div>

            {/* Fabric & Fit badges */}
            <div className="grid grid-cols-2 gap-4 py-2 text-xs font-sans">
              <div className="space-y-1">
                <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase">Mill Composition</span>
                <span className="block font-medium text-navy tracking-wide">{product.fabric}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase">Atelier Cut</span>
                <span className="block font-medium text-navy tracking-wide">{product.fit}</span>
              </div>
            </div>

            {/* Detailed Tailor specifications */}
            <div className="space-y-2 pt-1">
              <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase mb-1 font-semibold">Garment Finish specifications</span>
              <ul className="space-y-1.5 font-sans text-[11px] text-charcoal/75 tracking-wide">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizing selection block */}
            <div className="space-y-3 pt-3">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="text-charcoal/70 font-semibold tracking-wider">CHOOSE EUROPEAN SIZE</span>
                <span className="text-[10px] text-charcoal/40 tracking-wider">Continental Standards</span>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-sans tracking-widest rounded border transition-all duration-300 focus:outline-none ${
                      selectedSize === size
                        ? 'bg-navy text-gold border-navy font-semibold shadow-md'
                        : 'bg-white text-navy border-navy/10 hover:border-gold/60 hover:bg-neutral-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Controls Add-to-Trunk buttons */}
          <div className="pt-6 border-t border-navy/5 mt-6 flex items-center space-x-4">
            <button
              onClick={handleAdd}
              disabled={addedPrompt}
              className={`flex-grow py-3.5 px-6 font-sans text-xs font-bold uppercase tracking-[0.22em] text-center rounded transition-all duration-350 shadow-xl flex items-center justify-center space-x-2 ${
                addedPrompt 
                  ? 'bg-green-700 text-white border-green-700' 
                  : 'bg-gold hover:bg-gold/90 text-navy border border-gold hover:-translate-y-0.5'
              }`}
            >
              {addedPrompt ? (
                <>
                  <Check className="h-4 w-4 stroke-[2.5]" />
                  <span>Secured to Trunk</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Insert into Trunk</span>
                </>
              )}
            </button>

            {/* Favorite button */}
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-3.5 border rounded transition-colors duration-300 focus:outline-none ${
                isFavorited
                  ? 'border-red-400 bg-red-50 text-red-500'
                  : 'border-navy/10 hover:border-gold/50 text-navy/40 hover:text-gold'
              }`}
              title="Add to wishlist"
            >
              <Heart className={`h-4.5 w-4.5 ${isFavorited ? 'fill-red-500 stroke-red-500' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
