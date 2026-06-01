import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ArrowLeft, Sparkles, Check, Heart, Shield, HelpCircle, Truck, HelpCircle as HelpIcon } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onNotify: (msg: string) => void;
}

export default function ProductPage({ product, onBack, onAddToCart, onNotify }: ProductPageProps) {
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ transform: 'scale(1)' });

  // Reset active image on product swap
  useEffect(() => {
    setActiveImage(product.image);
    // Categoric sizing logic
    const sizes = product.category === 'accessories' 
      ? ['O/S'] 
      : ['46 (S)', '48 (M)', '50 (L)', '52 (XL)', '54 (XXL)'];
    setSelectedSize(sizes[0] || '48 (M)');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const sizes = product.category === 'accessories' 
    ? ['O/S'] 
    : ['46 (S)', '48 (M)', '50 (L)', '52 (XL)', '54 (XXL)'];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transform: 'scale(1.35)',
      transformOrigin: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: 'scale(1)' });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      onNotify(`"${product.name}" added to private registry wishlist.`);
    }
  };

  return (
    <article 
      className="bg-ivory text-charcoal min-h-screen py-10 md:py-16 px-6 md:px-12 border-t border-gold/15"
      id={`detailed-product-page-${product.id}`}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumbs / Back button */}
        <div className="flex items-center justify-between pb-6 border-b border-navy/10">
          <button
            onClick={onBack}
            className="group flex items-center space-x-2.5 text-navy hover:text-gold transition-colors text-xs font-sans font-semibold tracking-widest uppercase focus:outline-none"
            id="product-page-back-btn"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to SARTORIAL Showroom</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-[11px] font-sans text-charcoal/50 uppercase tracking-widest">
            <span>Showroom</span>
            <span>/</span>
            <span className="text-gold/90 font-medium">{product.categoryLabel}</span>
            <span>/</span>
            <span className="text-navy font-bold">{product.name}</span>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Multi-Image Showcase Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Main Focus Image */}
            <div 
              className="relative aspect-[4/5] bg-navy/5 rounded-lg overflow-hidden border border-navy/10 cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Product Badge Tag */}
              <span className="absolute top-5 left-5 z-10 bg-navy/95 border border-gold/40 text-gold text-[8px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold rotate-45 inline-block opacity-80 animate-pulse"></span>
                {product.categoryLabel}
              </span>

              {/* Main product image with magnification styled zoom */}
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-200 ease-out"
                style={zoomStyle}
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur border border-gold/15 p-3 rounded-md text-white flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span className="text-gold font-bold">HOVER IMAGE TO INSPECT WEAVE WEFT</span>
                <span className="italic font-serif normal-case text-white/75">{product.fit}</span>
              </div>
            </div>

            {/* Gallery Selector Thumbnails Container */}
            <div 
              className="grid grid-cols-3 gap-4"
              id="product-gallery-thumbnails"
            >
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative aspect-[4/5] rounded overflow-hidden border-2 transition-all duration-300 bg-white ${
                    activeImage === imgUrl 
                      ? 'border-gold shadow-md' 
                      : 'border-navy/15 opacity-75 hover:opacity-100 hover:border-gold/50'
                  }`}
                  aria-label={`Select gallery item ${idx + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} detail view ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-navy/5" />
                </button>
              ))}
            </div>

            {/* Guarantee / Luxury Badges Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-navy/5 text-center text-xs text-charcoal/65 font-sans">
              <div className="p-4 bg-white border border-navy/10 rounded-md flex flex-col items-center">
                <Truck className="h-5 w-5 text-gold mb-2" />
                <span className="font-bold tracking-wider text-navy uppercase mb-1">Express Air courier</span>
                <p className="text-[11px] text-charcoal/50 scale-95 leading-normal">Complimentary door-to-door air freight dispatch</p>
              </div>
              <div className="p-4 bg-white border border-navy/10 rounded-md flex flex-col items-center">
                <Shield className="h-5 w-5 text-gold mb-2" />
                <span className="font-bold tracking-wider text-navy uppercase mb-1">Authentic Seal</span>
                <p className="text-[11px] text-charcoal/50 scale-95 leading-normal">Authenticated ledger tracking and seal</p>
              </div>
              <div className="p-4 bg-white border border-navy/10 rounded-md flex flex-col items-center">
                <Sparkles className="h-5 w-5 text-gold mb-2" />
                <span className="font-bold tracking-wider text-navy uppercase mb-1">Custom tailoring</span>
                <p className="text-[11px] text-charcoal/50 scale-95 leading-normal">Seam allowances optimized for custom adjustments</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Sartorial Information Details (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header info */}
            <div className="space-y-4">
              <span className="text-[10px] font-sans tracking-[0.35em] text-gold uppercase font-bold block">
                {product.categoryLabel}
              </span>
              
              <h1 className="font-serif text-3xl md:text-4.5xl text-navy font-light leading-tight">
                {product.name}
              </h1>

              {/* Price display with currency formatting */}
              <div className="flex items-center space-x-4 pt-2 border-b border-navy/10 pb-5">
                <span className="font-serif text-3xl text-navy font-semibold">
                  Rs. {product.price.toLocaleString()}
                </span>
                <span className="text-[9px] font-sans font-bold text-green-700 bg-green-50 px-3 py-1 rounded border border-green-200 uppercase tracking-widest">
                  Atelier allocation open
                </span>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-[13px] md:text-sm font-sans font-normal text-charcoal/80 leading-relaxed tracking-wide">
                {product.longDescription}
              </p>

              {/* Narrative Story Box */}
              <div className="p-5 bg-navy/5 rounded border border-gold/15 space-y-2 relative overflow-hidden">
                <span className="text-[9px] font-sans tracking-[0.25em] text-gold font-bold uppercase flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-gold animate-pulse" /> THE HERITAGE RETROSPECTIVE
                </span>
                <p className="text-xs font-serif italic text-charcoal/70 leading-relaxed">
                  "{product.legacyStory}"
                </p>
              </div>
            </div>

            {/* Fabric Material Details & Fit Specs */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-navy/10 text-xs font-sans">
              <div className="space-y-1.5">
                <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase font-bold">Mill Composition</span>
                <span className="block font-medium text-navy text-xs tracking-wide">{product.fabric}</span>
              </div>
              <div className="space-y-1.5">
                <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase font-bold">Sartorial Cut</span>
                <span className="block font-medium text-navy text-xs tracking-wide">{product.fit}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="text-charcoal/70 font-semibold tracking-wider uppercase text-[10px]">SELECT EUROPEAN SIZE</span>
                <button
                  type="button"
                  onClick={() => onNotify("Standard European tailoring dimensions. 46=S, 48=M, 50=L, 52=XL, 54=XXL")}
                  className="text-[9px] text-gold hover:text-navy hover:underline tracking-wider uppercase font-semibold flex items-center gap-1 focus:outline-none"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Size Dimensions</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-4.5 py-3 text-xs font-sans font-medium tracking-widest rounded border transition-all duration-300 focus:outline-none ${
                      selectedSize === size
                        ? 'bg-navy text-gold border-navy font-bold shadow-lg scale-103'
                        : 'bg-white text-navy border-navy/10 hover:border-gold/50 hover:bg-neutral-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={handleAdd}
                className={`flex-grow py-4 px-6 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-center rounded transition-all duration-350 shadow-2xl flex items-center justify-center space-x-2 cursor-pointer ${
                  isAdded 
                    ? 'bg-green-700 text-white' 
                    : 'bg-gold hover:bg-gold/90 text-navy border border-gold hover:-translate-y-0.5'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-4.5 w-4.5 stroke-[2.5]" />
                    <span>SECURED TO YOUR TRUNK</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4.5 w-4.5" />
                    <span>ADD TO SHOPPING TRUNK</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWishlist}
                className={`p-4 border rounded-md transition-all duration-300 focus:outline-none cursor-pointer ${
                  isWishlisted
                    ? 'border-red-400 bg-red-50 text-red-500 scale-103'
                    : 'border-navy/10 hover:border-gold/50 text-navy/40 hover:text-gold'
                }`}
                title="Save to registry roll"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 stroke-red-500' : ''}`} />
              </button>
            </div>

            {/* Finish Specifications List */}
            <div className="space-y-3 pt-6 border-t border-navy/5">
              <span className="block text-[8px] text-charcoal/40 tracking-widest uppercase font-bold">Atelier Finish Details</span>
              <ul className="space-y-2 font-sans text-xs text-charcoal/75 tracking-wide">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2.5 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
}
