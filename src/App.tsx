import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Aesthetic from './components/Aesthetic';
import OurStory from './components/OurStory';
import CartDrawer from './components/CartDrawer';
import ProductPage from './components/ProductPage';
import CustomerLedger from './components/CustomerLedger';
import Footer from './components/Footer';
import { Sparkles, Shield, X, Bell } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  
  // Immersive dedicated product detail state
  const [detailedProduct, setDetailedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Interactive subtle elegant alerts
  const [notification, setNotification] = useState<{ message: string; show: boolean }>({
    message: '',
    show: false
  });

  // Load from localStorage if present
  useEffect(() => {
    const savedCart = localStorage.getItem('alvis_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart storage', e);
      }
    }
  }, []);

  // Save changes to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('alvis_cart', JSON.stringify(newCart));
  };

  // Sticky Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      if (detailedProduct) {
        // Don't track scrolling sections on detailed product page
        return;
      }
      const scrollPosition = window.scrollY + 150;
      const sections = ['hero', 'collections', 'aesthetic', 'story', 'reviews'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [detailedProduct]);

  const triggerNotification = (message: string) => {
    setNotification({ message, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleAddToCart = (product: Product, size: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === size
    );

    const newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += 1;
    } else {
      newCart.push({ product, quantity: 1, selectedSize: size });
    }

    saveCart(newCart);
    triggerNotification(`"${product.name}" (${size}) secured in your Trunk.`);
    
    // Auto trigger drawer
    setTimeout(() => {
      setIsCartOpen(true);
    }, 400);
  };

  const handleUpdateQuantity = (productId: string, size: string, change: number) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === productId && item.selectedSize === size
    );

    if (existingIndex > -1) {
      const newCart = [...cart];
      const newQuantity = newCart[existingIndex].quantity + change;
      if (newQuantity <= 0) {
        newCart.splice(existingIndex, 1);
        triggerNotification('Garment removed from Trunk.');
      } else {
        newCart[existingIndex].quantity = newQuantity;
      }
      saveCart(newCart);
    }
  };

  const handleRemoveItem = (productId: string, size: string) => {
    const newCart = cart.filter(
      (item) => !(item.product.id === productId && item.selectedSize === size)
    );
    saveCart(newCart);
    triggerNotification('Garment removed from Trunk.');
  };

  const handleCheckoutCommit = () => {
    const checkoutValuation = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    // Append order details directly into ledger if profile exists
    const storedUser = localStorage.getItem('alvis_active_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
        const orderDate = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        
        const newOrderObj = {
          id: orderId,
          date: orderDate,
          items: cart.map(item => ({
            productName: item.product.name,
            quantity: item.quantity,
            size: item.selectedSize,
            priceAtOrder: item.product.price
          })),
          totalPrice: checkoutValuation,
          status: 'Atelier Queue' as const,
          trackingNumber: `ALV-DHL-${Math.floor(1000 + Math.random() * 9000)}-T`
        };

        user.orders = [newOrderObj, ...(user.orders || [])];
        localStorage.setItem('alvis_active_user', JSON.stringify(user));
        // Trigger a force reload inside child component if open
        window.dispatchEvent(new Event('storage'));
      } catch (err) {
        console.error('Failed to write checkout order history', err);
      }
    }

    saveCart([]);
    setIsCartOpen(false);
    triggerNotification('Trunk secure order created. Tracking initialized in Atelier Ledger.');
    
    // Auto open customer ledger so user can see their active tracking immediately
    setTimeout(() => {
      setIsLedgerOpen(true);
    }, 1200);
  };

  const handleSelectDetailedProduct = (product: Product) => {
    setDetailedProduct(product);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleScrollNavigate = (targetId: string) => {
    // If viewing detailed product page, navigate back to main landing page sections
    if (detailedProduct) {
      setDetailedProduct(null);
    }
    
    // Wait slightly for layout to swap back and perform element coordinates scroll
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // navigation bar offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(targetId);
      }
    }, 100);
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-navy text-charcoal flex flex-col font-sans relative selection:bg-gold selection:text-navy">
      
      {/* Exquisite Top Bar Indicator (Quiet, informative, luxurious) */}
      <div className="bg-navy border-b border-gold/10 py-2.5 text-center text-[9px] text-white/50 tracking-[0.4em] uppercase font-sans font-semibold z-40 relative">
        <span className="text-gold">COMPLIMENTARY AIR COURIER SHIPPING</span> ON ALL ANNUALLY ALLOCATED CHOSEN PIECES
      </div>

      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={cartTotalCount}
        onCartClick={() => setIsCartOpen(true)}
        onLedgerClick={() => setIsLedgerOpen(true)}
        activeSection={activeSection}
        onNavigate={handleScrollNavigate}
      />

      {/* Cinematic Hero Header (Renders only on showroom state for a fluid transition) */}
      {!detailedProduct && (
        <Hero onDiscoverClick={() => handleScrollNavigate('collections')} />
      )}

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {detailedProduct ? (
          /* Immersive full-page product page */
          <ProductPage
            product={detailedProduct}
            onBack={() => setDetailedProduct(null)}
            onAddToCart={handleAddToCart}
            onNotify={triggerNotification}
          />
        ) : (
          /* Landing Catalog showroom list */
          <>
            <section id="collections">
              <Collections
                onAddToCart={handleAddToCart}
                onSelectProduct={handleSelectDetailedProduct}
              />
            </section>
            
            <Aesthetic />
            <OurStory />
          </>
        )}

      </main>

      {/* Luxury Footer Layout */}
      <Footer />

      {/* Slide-out Trunk Shopping Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckoutCommit}
      />

      {/* Modern Authenticated Ledger Panel popup portal */}
      <CustomerLedger
        isOpen={isLedgerOpen}
        onClose={() => setIsLedgerOpen(false)}
        onNotify={triggerNotification}
      />

      {/* Minimalist Premium notification bottom toast */}
      {notification.show && (
        <div
          id="system-notification-toast"
          className="fixed bottom-6 right-6 z-50 bg-navy/95 backdrop-blur border border-gold text-white px-5 py-4 rounded shadow-2xl animate-fade-in flex items-center space-x-3 max-w-sm"
          role="alert"
        >
          <div className="p-1 bg-gold/10 rounded border border-gold/30">
            <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-sans text-gold tracking-widest font-bold uppercase">HOUSE NOTIFICATION</p>
            <p className="text-xs font-sans tracking-wide leading-normal text-white/90 mt-0.5">
              {notification.message}
            </p>
          </div>
          <button
            onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
            className="hover:text-gold text-white/40 transition-colors p-1 cursor-pointer"
            aria-label="Dismiss Alert"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
