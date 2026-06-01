import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Globe, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onLedgerClick: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ cartCount, onCartClick, onLedgerClick, activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', id: 'collections' },
    { name: 'The Aesthetic', id: 'aesthetic' },
    { name: 'Our Story', id: 'story' },
    { name: 'Heritage Review', id: 'reviews' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md py-4 border-b border-gold/20 shadow-lg'
          : 'bg-gradient-to-b from-navy/80 to-transparent py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left: Vintage Globe / Heritage Language Indicator */}
        <div className="hidden lg:flex items-center space-x-2 text-white/50 text-xs font-sans tracking-widest uppercase">
          <Globe className="h-3.5 w-3.5 text-gold" />
          <span>London</span>
          <span className="text-white/20">•</span>
          <span>Como</span>
          <span className="text-white/20">•</span>
          <span>Naples</span>
        </div>

        {/* Center: Stunning brand typography logo */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-white font-serif text-2xl md:text-3.5xl tracking-[0.25em] hover:text-gold transition-colors duration-300 font-bold focus:outline-none uppercase cursor-pointer"
            style={{ textShadow: scrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.5)' }}
            id="brand-logo-btn"
          >
            Alvi’s
          </button>
          <span className="hidden md:block text-[8px] tracking-[0.55em] font-sans text-gold/80 font-semibold uppercase mt-0.5">
            Wear the Legacy
          </span>
        </div>

        {/* Right Nav Menu & Controls */}
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs tracking-[0.25em] font-sans font-semibold uppercase transition-colors duration-300 relative py-1 focus:outline-none cursor-pointer ${
                  activeSection === link.id
                    ? 'text-gold'
                    : 'text-white/75 hover:text-gold'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold animate-pulse" />
                )}
              </button>
            ))}

            {/* Atelier Private Registry Ledger Link */}
            <button
              onClick={onLedgerClick}
              className="text-xs tracking-[0.25em] font-sans font-bold uppercase transition-colors duration-300 text-gold hover:text-white flex items-center gap-1.5 py-1 focus:outline-none cursor-pointer"
              id="ledger-navigation-btn"
            >
              <User className="h-3.5 w-3.5" />
              <span>Atelier Ledger</span>
            </button>
          </nav>

          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-gold transition-colors duration-300 focus:outline-none cursor-pointer"
            aria-label="Shopping Cart"
            id="cart-navigation-btn"
          >
            <ShoppingBag className="h-5 w-5 md:h-5.5 md:w-5.5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-gold text-navy text-[9px] font-sans font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-fade-in border border-navy shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors duration-300 p-2 focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-navy border-b border-gold/15 transition-all duration-[400ms] ease-in-out z-30 ${
          isOpen ? 'opacity-100 max-h-screen py-6 shadow-2xl block' : 'opacity-0 max-h-0 overflow-hidden hidden'
        }`}
      >
        <ul className="px-6 space-y-5 flex flex-col justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full text-center">
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`py-2 text-sm tracking-[0.2em] font-sans uppercase font-medium focus:outline-none ${
                  activeSection === link.id ? 'text-gold' : 'text-white/80'
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}

          <li className="w-full text-center py-1">
            <button
              onClick={() => {
                setIsOpen(false);
                onLedgerClick();
              }}
              className="py-2 text-sm tracking-[0.2em] font-sans uppercase font-bold text-gold flex items-center justify-center gap-1.5 w-full"
            >
              <User className="h-4.5 w-4.5" />
              <span>Atelier Ledger</span>
            </button>
          </li>

          <li className="pt-2 border-t border-white/5 w-full text-center text-[10px] text-white/40 tracking-widest font-sans uppercase">
            ESTABLISHED 1928 • SAVILE ROW
          </li>
        </ul>
      </div>
    </header>
  );
}
