import React, { useState, useEffect } from 'react';
import { UserProfile, SavedAddress, OrderHistoryItem } from '../types';
import { Shield, Sparkles, Key, MapPin, Package, LogOut, Check, ArrowRight, User, Plus, Compass } from 'lucide-react';

interface CustomerLedgerProps {
  onNotify: (msg: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomerLedger({ onNotify, isOpen, onClose }: CustomerLedgerProps) {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Form Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  // Address Inputs
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressLabel, setAddressLabel] = useState('');
  const [addressName, setAddressName] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [addressCountry, setAddressCountry] = useState('');

  // Initialize and load any existing session from localStorage
  useEffect(() => {
    const session = localStorage.getItem('alvis_active_user');
    if (session) {
      try {
        setCurrentUser(JSON.parse(session));
      } catch (e) {
        console.error('Session restore failed', e);
      }
    } else {
      // Create a default heritage guest profile to guarantee rich pre-loaded data on first view!
      const defaultUser: UserProfile = {
        fullName: 'Harrison Sterling',
        email: 'sterling@heritage.com',
        registeredSince: 'June 2024',
        vipRank: 'Distinguished Member',
        legacyId: 'ALV-1928-892',
        addresses: [
          {
            id: 'addr-1',
            label: 'Belgravia Flat',
            fullName: 'Harrison Sterling',
            street: '14 Eaton Place',
            city: 'London',
            postalCode: 'SW1X 8AL',
            country: 'United Kingdom'
          },
          {
            id: 'addr-2',
            label: 'Cotswolds Country Estate',
            fullName: 'Harrison Sterling',
            street: 'The Manor House, Chipping Campden',
            city: 'Gloucestershire',
            postalCode: 'GL55 6JZ',
            country: 'United Kingdom'
          }
        ],
        orders: [
          {
            id: 'ORD-9302',
            date: 'May 12, 2026',
            items: [
              { productName: 'The Florentine Navy Three-Piece', quantity: 1, size: '50 (L)', priceAtOrder: 38500 },
              { productName: 'The Chelsea Silk Jacquard Tie', quantity: 2, size: 'O/S', priceAtOrder: 1800 }
            ],
            totalPrice: 42100,
            status: 'Hand Basting',
            trackingNumber: 'ALV-DHL-9032-C'
          },
          {
            id: 'ORD-8931',
            date: 'March 04, 2026',
            items: [
              { productName: 'The Milanese Luxury Knit Polo', quantity: 1, size: '48 (M)', priceAtOrder: 5800 }
            ],
            totalPrice: 5800,
            status: 'Delivered',
            trackingNumber: 'ALV-DHL-2101-A'
          }
        ]
      };
      localStorage.setItem('alvis_active_user', JSON.stringify(defaultUser));
      setCurrentUser(defaultUser);
    }
  }, []);

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      onNotify('Please complete credentials shanks.');
      return;
    }

    if (isSignUp) {
      if (!fullName) {
        onNotify('Signature name must be appended.');
        return;
      }
      // Simulate Registering
      const vipRankOptions: ('House Guest' | 'Distinguished Member' | 'Legend Patron' | 'Heritage Trustee')[] = [
        'House Guest', 'Distinguished Member', 'Legend Patron', 'Heritage Trustee'
      ];
      const assignedRank = inviteCode.toLowerCase() === 'legacy1928' ? 'Heritage Trustee' : 'House Guest';
      const randomID = `ALV-1928-${Math.floor(100 + Math.random() * 900)}`;

      const newProfile: UserProfile = {
        fullName,
        email,
        registeredSince: 'June 2026',
        vipRank: assignedRank,
        legacyId: randomID,
        addresses: [
          {
            id: 'addr-init',
            label: 'Primary residence',
            fullName,
            street: '45 Mayfair Square',
            city: 'London',
            postalCode: 'W1J 8AJ',
            country: 'United Kingdom'
          }
        ],
        orders: []
      };

      localStorage.setItem('alvis_active_user', JSON.stringify(newProfile));
      setCurrentUser(newProfile);
      onNotify(`Welcome, ${fullName}. Credentials appended under Ledger ID: ${randomID}`);
    } else {
      // Simulate login of any registered user, or restore Harrison for demonstration
      const randomID = `ALV-1928-${Math.floor(100 + Math.random() * 900)}`;
      const storedUser = localStorage.getItem('alvis_active_user');
      
      if (storedUser) {
        const u = JSON.parse(storedUser);
        if (u.email === email) {
          setCurrentUser(u);
          onNotify(`Signature authenticated. Welcome back, ${u.fullName}.`);
          return;
        }
      }

      // Default generated custom login
      const defaultLogin: UserProfile = {
        fullName: fullName || 'Distinguished Patron',
        email: email,
        registeredSince: 'June 2026',
        vipRank: 'Distinguished Member',
        legacyId: randomID,
        addresses: [],
        orders: []
      };
      localStorage.setItem('alvis_active_user', JSON.stringify(defaultLogin));
      setCurrentUser(defaultLogin);
      onNotify(`Access granted. Ledger ID: ${randomID}`);
    }
  };

  const handleSignout = () => {
    localStorage.removeItem('alvis_active_user');
    setCurrentUser(null);
    onNotify('Returned safely out of Private Atelier Registry.');
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressLabel || !addressStreet || !addressCity || !addressCountry) {
      onNotify('Deliver address shanks must be completed');
      return;
    }
    if (!currentUser) return;

    const newAddr: SavedAddress = {
      id: `addr-${Date.now()}`,
      label: addressLabel,
      fullName: addressName || currentUser.fullName,
      street: addressStreet,
      city: addressCity,
      postalCode: addressZip,
      country: addressCountry
    };

    const updatedUser = {
      ...currentUser,
      addresses: [...currentUser.addresses, newAddr]
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('alvis_active_user', JSON.stringify(updatedUser));
    
    // reset form
    setShowAddressForm(false);
    setAddressLabel('');
    setAddressName('');
    setAddressStreet('');
    setAddressCity('');
    setAddressZip('');
    setAddressCountry('');

    onNotify(`"${addressLabel}" securely pinned to your ledger destinations.`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-ivory text-charcoal rounded-lg shadow-2xl overflow-hidden border border-gold/30 flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        id="ledger-modal-container"
      >
        
        {/* Close Button Trigger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-25 bg-navy/10 hover:bg-gold hover:text-navy text-navy p-2 rounded-full transition-all duration-300"
          aria-label="Close portal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Column 1: Editorial Invite */}
        <div className="w-full md:w-5/12 bg-navy p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-[10%] left-6 right-6 h-[1px] bg-gold/15" />
          <div className="absolute bottom-[10%] left-6 right-6 h-[1px] bg-gold/15" />

          <div className="relative space-y-6 z-10 py-4">
            <div className="flex items-center space-x-2 text-gold">
              <Compass className="h-4 w-4" />
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-gold">Hone Your Presence</span>
            </div>
            
            <h3 className="font-serif text-3xl font-light tracking-tight leading-tight text-white">
              The Atelier <span className="italic font-normal font-serif text-gold">Cabinet Ledger</span>
            </h3>
            
            <p className="text-[11px] font-sans text-white/70 leading-relaxed tracking-wider">
              Our Digital Ledger maintains authentic high-contrast baseline statistics for elite private tailoring allocations. Track hand basting progress of bespoke orders directly from Savile Row and Lake Como workshops.
            </p>

            <ul className="space-y-3 pt-4 text-[10px] uppercase tracking-widest font-sans text-gold/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rotate-45 inline-block" />
                <span>24-Hour Air Logistics Mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rotate-45 inline-block" />
                <span>Multiple Family Estate Destinations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rotate-45 inline-block" />
                <span>Atelier Live Status Chronicle</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 text-[9px] tracking-[0.3em] font-sans text-white/40 uppercase mt-8 md:mt-0">
            ESTABLISHED 1928 • HOUSE OF ALVI
          </div>
        </div>

        {/* Column 2: Authentication OR Private Account Panel */}
        <div className="w-full md:w-7/12 p-8 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-[92vh] scrollbar-none bg-ivory">
          
          {!currentUser ? (
            /* ================= SIGN IN OR UP PANEL ================= */
            <div className="space-y-6">
              <div className="border-b border-navy/10 pb-4">
                <span className="text-[9px] tracking-widest text-gold font-bold uppercase block mb-1">
                  Atelier Registry
                </span>
                <h4 className="font-serif text-2.5xl text-navy">
                  {isSignUp ? "Affix Timeless Signature" : "Access Registered Account"}
                </h4>
                <p className="text-[11px] text-charcoal/50 font-sans tracking-wide mt-1">
                  {isSignUp 
                    ? "Establish your custom member number on our private cabinet roll."
                    : "Enter your registered credentials to synchronize bespoke orders."
                  }
                </p>
              </div>

              <form onSubmit={handleAuthentication} className="space-y-4 font-sans">
                {isSignUp && (
                  <div>
                    <label className="block text-[8px] tracking-widest uppercase text-charcoal/55 font-bold mb-1.5">
                      Sartorial Full Name / Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sir Archibald Sterling"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-navy/10 text-xs tracking-wider rounded focus:outline-none focus:border-gold transition-colors duration-300"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[8px] tracking-widest uppercase text-charcoal/55 font-bold mb-1.5">
                    Private Email Coordinates
                  </label>
                  <input
                    type="email"
                    placeholder="email@heritage.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-navy/10 text-xs tracking-wider rounded focus:outline-none focus:border-gold transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[8px] tracking-widest uppercase text-charcoal/55 font-bold mb-1.5">
                    Private Ledger Key (Password)
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-navy/10 text-xs tracking-wider rounded focus:outline-none focus:border-gold transition-colors duration-300"
                    required
                  />
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-[8px] tracking-widest uppercase text-charcoal/55 font-bold mb-1.5">
                      Invitation Passcode (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter LEGACY1928 for elite status"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-navy/10 text-xs tracking-wider rounded focus:outline-none focus:border-gold transition-colors duration-300 placeholder:italic"
                    />
                    <span className="text-[9px] text-gold font-sans block mt-1">
                      Entering standard code grants 'Heritage Trustee' credentials instantly.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-navy hover:bg-navy/95 text-gold font-bold uppercase text-[10px] tracking-[0.2em] rounded border border-gold/30 shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 mt-6 cursor-pointer"
                >
                  <Key className="h-3.5 w-3.5" />
                  <span>{isSignUp ? "Append My Legacy Identity" : "Verify Safe Entry Key"}</span>
                </button>
              </form>

              <div className="pt-4 border-t border-navy/5 text-center">
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[10px] font-sans tracking-widest uppercase text-navy hover:text-gold transition-all font-semibold"
                >
                  {isSignUp 
                    ? "Already listed? Authenticate Key coordinates" 
                    : "First engagement? Register on The Ledger"
                  }
                </button>
              </div>
            </div>
          ) : (
            /* ================= LOGGED IN DASHBOARD PANEL ================= */
            <div className="space-y-8">
              
              {/* Profile Card Header */}
              <div className="bg-navy p-6 rounded-lg border border-gold/25 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold/15 rounded-full border border-gold/30">
                    <User className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif text-lg text-white font-medium">{currentUser.fullName}</h4>
                      <span className="text-[8px] bg-gold text-navy font-bold uppercase px-2 py-0.5 font-sans tracking-wider rounded-sm animate-pulse whitespace-nowrap">
                        {currentUser.vipRank}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-white/50 tracking-wider mt-0.5">
                      Registry ID: {currentUser.legacyId} • Registered {currentUser.registeredSince}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSignout}
                  className="flex items-center space-x-2 border border-white/10 hover:border-red-400 p-2.5 rounded text-white/60 hover:text-red-400 text-[10px] uppercase font-sans tracking-widest transition-all duration-300"
                  title="Sign Out of Registry"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </div>

              {/* Order History */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-navy/10 pb-2">
                  <h5 className="font-serif text-md font-semibold text-navy flex items-center gap-2">
                    <Package className="h-4 w-4 text-gold" />
                    <span>Active Atelier Commissions</span>
                  </h5>
                  <span className="text-[9px] font-mono text-gold/85 bg-navy px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    {currentUser.orders.length} ACTIVE ITEMS
                  </span>
                </div>

                {currentUser.orders.length === 0 ? (
                  <div className="p-6 bg-white rounded border border-navy/5 text-center space-y-2">
                    <p className="text-xs font-sans text-charcoal/50 italic">
                      There are currently no master tailor orders scheduled under this signature.
                    </p>
                    <button
                      onClick={onClose}
                      className="text-[9px] font-sans font-bold uppercase tracking-widest text-gold hover:text-navy inline-flex items-center gap-1.5"
                    >
                      <span>Explore Showroom</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {currentUser.orders.map((order) => (
                      <div 
                        key={order.id}
                        className="bg-white p-4 rounded border border-navy/10 hover:border-gold/30 transition-all duration-400 space-y-3 shadow-xs"
                      >
                        <div className="flex justify-between items-start text-xs font-sans">
                          <div>
                            <span className="font-bold text-navy tracking-wider">Commission ID: {order.id}</span>
                            <span className="text-[10px] text-charcoal/40 block mt-0.5">Allocated on {order.date}</span>
                          </div>
                          
                          <div className="text-right">
                            <span className="bg-gold/10 text-gold text-[9px] font-sans font-bold uppercase px-2.5 py-1 tracking-widest border border-gold/30 rounded inline-block">
                              STATUS: {order.status}
                            </span>
                            <span className="text-[9px] font-mono block text-charcoal/40 mt-1">Air Track: {order.trackingNumber}</span>
                          </div>
                        </div>

                        {/* Order Items List */}
                        <div className="space-y-1.5 border-t border-dashed border-navy/5 pt-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs font-sans">
                              <span className="text-navy/80">
                                {item.productName} <span className="text-charcoal/40">({item.size})</span>
                                <span className="text-gold/80 font-semibold ml-2">x{item.quantity}</span>
                              </span>
                              <span className="font-serif font-semibold text-navy">
                                Rs. {(item.priceAtOrder * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-baseline pt-2 border-t border-navy/5">
                          <span className="text-[9px] font-sans tracking-widest text-charcoal/40 uppercase">Committed Valuation</span>
                          <span className="font-serif text-[15px] font-bold text-navy">
                            Rs. {order.totalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Saved Delivery Addresses */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-navy/10 pb-2">
                  <h5 className="font-serif text-md font-semibold text-navy flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>Family Estate Destinations (Saved Addresses)</span>
                  </h5>
                  
                  <button
                    onClick={() => setShowAddressForm(!showAddressForm)}
                    className="p-1 px-2.5 bg-navy/5 text-navy hover:text-gold hover:bg-navy border border-navy/10 rounded font-sans text-[9px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="h-3 w-3" />
                    <span>APPEND NEW</span>
                  </button>
                </div>

                {/* Add Address Form Toggle */}
                {showAddressForm && (
                  <form onSubmit={handleAddAddress} className="bg-white/90 border border-gold/30 p-4 rounded space-y-3 animate-fade-in font-sans">
                    <p className="text-[9px] font-sans text-gold tracking-widest uppercase font-bold border-b border-navy/5 pb-1.5">
                      New Estate Coordinates
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                          Destination Label
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. St Moritz Chalet"
                          value={addressLabel}
                          onChange={(e) => setAddressLabel(e.target.value)}
                          className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                          Full Addressee Name
                        </label>
                        <input
                          type="text"
                          placeholder="Lord Harrison Sterling"
                          value={addressName}
                          onChange={(e) => setAddressName(e.target.value)}
                          className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="Via Serlas 12"
                        value={addressStreet}
                        onChange={(e) => setAddressStreet(e.target.value)}
                        className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="St. Moritz"
                          value={addressCity}
                          onChange={(e) => setAddressCity(e.target.value)}
                          className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                          Postal / Zip
                        </label>
                        <input
                          type="text"
                          placeholder="7500"
                          value={addressZip}
                          onChange={(e) => setAddressZip(e.target.value)}
                          className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] tracking-widest uppercase text-charcoal/50 font-bold mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          placeholder="Switzerland"
                          value={addressCountry}
                          onChange={(e) => setAddressCountry(e.target.value)}
                          className="w-full p-2 border border-navy/10 rounded text-xs bg-white text-navy focus:outline-none focus:border-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-navy/5">
                      <button
                        type="button"
                        onClick={() => setShowAddressForm(false)}
                        className="px-3 py-1.5 border border-navy/10 hover:border-navy text-navy font-bold uppercase text-[9px] tracking-widest rounded transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-gold text-navy font-bold uppercase text-[9px] tracking-widest rounded transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="h-3 w-3" />
                        <span>Save Address</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Addresses Grid list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentUser.addresses.map((address) => (
                    <div 
                      key={address.id}
                      className="bg-white p-4 rounded border border-navy/10 hover:border-gold/40 transition-all duration-300 relative group text-xs font-sans space-y-1"
                    >
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-navy uppercase tracking-widest text-[9px] text-gold">{address.label}</span>
                        <MapPin className="h-3.5 w-3.5 text-navy/30 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      
                      <p className="font-semibold text-navy leading-normal">{address.fullName}</p>
                      <p className="text-charcoal/70">{address.street}</p>
                      <p className="text-charcoal/70">
                        {address.postalCode} {address.city}, {address.country}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
