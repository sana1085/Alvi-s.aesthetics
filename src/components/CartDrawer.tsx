import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, change: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  const [shippingMode, setShippingMode] = useState<'standard' | 'express'>('express');
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'processing' | 'success'>('idle');

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingCost = subtotal === 0 ? 0 : shippingMode === 'express' ? 3500 : 1500; // Premium courier rates in PKR
  const total = subtotal + shippingCost;

  const handleSimulateCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('success');
      setTimeout(() => {
        onCheckout(); // Clear cart and close
        setCheckoutStep('idle');
        onClose();
      }, 3500);
    }, 2000);
  };

  return (
    <>
      {/* Background Dim Backdrop Blur Overlay */}
      <div
        id="cart-overlay-backdrop"
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500 z-50 ${
          isOpen ? 'opacity-100 x-visible pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out Drawer Panel */}
      <div
        id="cart-drawer-panel"
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-navy text-white shadow-2xl z-50 transition-transform duration-500 transform border-l border-gold/15 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gold/15 flex justify-between items-center bg-navy-950">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-gold animate-pulse" />
            <span className="text-xs font-sans tracking-[0.35em] text-gold uppercase font-bold">THE SARTORIAL TRUNK</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:text-gold text-white/60 transition-colors duration-300 focus:outline-none"
            aria-label="Close Trunk"
            id="close-cart-drawer-btn"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic checkout feedback representation */}
        {checkoutStep === 'processing' && (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4 bg-navy-950 animate-fade-in">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-gold/20 rounded-full" />
              <div className="absolute inset-0 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <Sparkles className="h-5 w-5 text-gold animate-ping" />
            </div>
            <h3 className="font-serif text-xl text-gold">Verifying Trunk Assets</h3>
            <p className="text-xs text-white/50 font-sans tracking-widest max-w-xs leading-relaxed uppercase">
              SEALING BESPOKE REGISTRY • ALLOCATING COURIER • RESERVING STOCK
            </p>
          </div>
        )}

        {checkoutStep === 'success' && (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4 bg-navy-950 animate-fade-in">
            <div className="p-4 bg-gold/15 border border-gold/30 rounded-full mb-3">
              <ShieldCheck className="h-10 w-10 text-gold animate-bounce" />
            </div>
            <h3 className="font-serif text-2xl text-gold">Legacies Secured</h3>
            <span className="text-[10px] tracking-[0.4em] text-white/40 font-mono uppercase block">TRANSACTION SIGNED VIA LONDON ATELIER</span>
            <p className="text-xs text-ivory/80 font-sans leading-relaxed tracking-wider max-w-sm">
              We have dispatched your private concierge notification. A master tailor representative will coordinate sizing specifications within the hour.
            </p>
          </div>
        )}

        {checkoutStep === 'idle' && (
          <>
            {/* Drawer Body (Items list) */}
            <div className="flex-grow p-6 overflow-y-auto scrollbar-none space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-[1px] bg-gold/30" />
                  <p className="font-serif italic text-white/50 text-base">"Your current trunk is unoccupied."</p>
                  <p className="text-[10px] font-sans text-gold/60 max-w-xs tracking-widest leading-relaxed uppercase">
                    DISCOVER OUR HEIRLOOM SHIRT-WEAVES AND BESPOKE EVENING WEAR SUITS TO COMMENCE
                  </p>
                  <div className="w-12 h-[1px] bg-gold/30" />
                </div>
              ) : (
                <div className="space-y-4" id="cart-items-collection-list">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded border border-white/5 relative group"
                    >
                      {/* Product Thumbnail image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-20 object-cover object-top rounded border border-white/10"
                      />

                      {/* Product specifications */}
                      <div className="flex-grow min-w-0 pr-8 space-y-1">
                        <h4 className="font-serif text-sm leading-tight text-white/90 truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-[10px] font-mono text-gold uppercase tracking-wider">
                          <span>Size: {item.selectedSize}</span>
                          <span className="text-white/20">•</span>
                          <span>Rs. {item.product.price.toLocaleString()}</span>
                        </div>

                        {/* Adjust Quantity Controls */}
                        <div className="flex items-center space-x-2.5 pt-1.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                            className="p-1 hover:text-gold text-white/40 border border-white/10 hover:border-gold/40 rounded transition-all duration-300 bg-black/25 focus:outline-none"
                            aria-label="Decrease Quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-sans font-semibold text-white/90 px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                            className="p-1 hover:text-gold text-white/40 border border-white/10 hover:border-gold/40 rounded transition-all duration-300 bg-black/25 focus:outline-none"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove item button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        id={`remove-trunk-item-${item.product.id}`}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/30 hover:text-red-400 transition-colors duration-300 p-2"
                        title="Remove garment"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer & Checkout Pricing Summaries */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gold/15 bg-navy-950 space-y-5">
                {/* Shipping Selection buttons */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-[9px] font-sans tracking-widest text-gold font-semibold uppercase">
                    <Truck className="h-3.5 w-3.5" />
                    <span>EXPEDITED ARISTO COURIER RATES</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShippingMode('standard')}
                      className={`py-2 px-3 text-[10px] font-sans uppercase tracking-[0.14em] rounded text-center border transition-all duration-300 ${
                        shippingMode === 'standard'
                          ? 'bg-gold text-navy border-gold font-semibold'
                          : 'bg-transparent text-white/65 border-white/10 hover:border-gold/50'
                      }`}
                    >
                      Bespoke Cargo (Rs. 1,500)
                    </button>
                    <button
                      onClick={() => setShippingMode('express')}
                      className={`py-2 px-3 text-[10px] font-sans uppercase tracking-[0.14em] rounded text-center border transition-all duration-300 ${
                        shippingMode === 'express'
                          ? 'bg-gold text-navy border-gold font-semibold'
                          : 'bg-transparent text-white/65 border-white/10 hover:border-gold/50'
                      }`}
                    >
                      Air Courier (Rs. 3,500)
                    </button>
                  </div>
                </div>

                {/* Subtotals, courier fee, complete totals */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-sans text-white/60 tracking-wider">
                    <span>Trunk Assets Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-white/60 tracking-wider">
                    <span>Private Courier Rate</span>
                    <span>Rs. {shippingCost.toLocaleString()}</span>
                  </div>
                  <div className="h-[1px] bg-white/5 my-2" />
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif text-base text-gold font-medium">Bespoke Total</span>
                    <span className="font-serif text-2xl text-white font-semibold">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Execution button */}
                <button
                  onClick={handleSimulateCheckout}
                  id="checkout-trunk-btn"
                  className="w-full bg-gold hover:bg-gold/95 text-navy font-sans text-xs font-bold py-4 uppercase tracking-[0.25em] transition-all duration-300 hover:shadow-xl rounded"
                >
                  Acquire Legacy Garments
                </button>
                <p className="text-[9px] font-sans text-center text-white/35 uppercase tracking-widest pr-4">
                  100% SATISFACTION ASSURED • SECURE SARTORIAL PROTOCOLS
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
