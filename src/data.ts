import { Product, BrandPillar, Review } from './types';

export const products: Product[] = [
  {
    id: 'florentine-navy-three-piece',
    name: 'The Florentine Navy Three-Piece',
    category: 'suits',
    categoryLabel: "Men's Full Suits",
    price: 38500,
    description: 'Bespoke three-piece suit cut from exquisite Super 150s pure merino wool in midnight blue.',
    longDescription: 'Crafted with master Neapolitan tailoring, this classic three-piece civilian uniform is the essence of Alvi’s heritage. Framed by a modern soft shoulder, an impeccable hand-sewn canvas construction, and delicate pick stitching, it delivers a lifetime of shape retention and understated majesty.',
    details: [
      'Full floating horsehair canvas backing',
      'Hand-milled functional sleeve buttonholes (surgeon cuffs)',
      'High-waisted matching vest with custom silk satin backing',
      'Exquisite horn buttons sourced from native Scottish estates'
    ],
    fabric: '100% Super 150s Tasmanian Merino Wool',
    fit: 'Classic Tailored Fit (Naples drape)',
    image: 'https://images.unsplash.com/photo-1593030041162-8b2fb3456477?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1593030041162-8b2fb3456477?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621570074981-ee6a6a444a9a?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'traditionalist',
    archetypeLabel: 'The Traditionalist',
    archetypeMantra: 'Bespoke Savile Row structures modeled on generations of timeless formal assemblies.',
    inStock: true,
    legacyStory: 'Designed as a homage to Florentine nobility, this suit is patterned on archives of bespoke commissions requested by European diplomat assemblies in the winter of 1928.'
  },
  {
    id: 'belgravia-dinner-suit',
    name: 'The Belgravia Double-Breasted Dinner Suit',
    category: 'suits',
    categoryLabel: "Men's Full Suits",
    price: 45000,
    description: 'Ultra-exclusive double-breasted formal tuxedo with midnight silk satin peaked lapels.',
    longDescription: 'The ultimate twilight ensemble. The Belgravia dinner jacket is carefully constructed with silk satin contrast facing, deep jetted side pockets, and authentic British structured shoulder padding to broaden the frame while narrowing at the waist organically.',
    details: [
      'Silk satin faced peaked lapels from Lyon mills',
      'Traditional heavy grosgrain accents',
      'Trousers feature silk side-stripes and button fly closure',
      'Classic English padded chest canvas construction'
    ],
    fabric: 'Super 160s British Cashmere & Wool blend',
    fit: 'Savile Row Structured Fit',
    image: 'https://images.unsplash.com/photo-1621570074981-ee6a6a444a9a?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621570074981-ee6a6a444a9a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'traditionalist',
    archetypeLabel: 'The Traditionalist',
    archetypeMantra: 'Bespoke Savile Row structures modeled on generations of timeless formal assemblies.',
    inStock: true,
    legacyStory: 'Commissioned for formal galas and high-altitude European lodge dinners, the Belgravia is worn by those who understand the silent weight of tradition.'
  },
  {
    id: 'gstaad-estate-tweed',
    name: 'The Gstaad Estate Tweed Jacket',
    category: 'suits',
    categoryLabel: "Men's Full Suits",
    price: 17500,
    description: 'Structured tailoring in a signature brown houndstooth pattern wool-cashmere fabric.',
    longDescription: 'Capturing the atmosphere of autumnal country hunts and private library fires. The Gstaad Suit utilizes rich Shetland tweed fabric with an unconstructed drape to transition seamlessly from a mountain chateau to corporate quarters.',
    details: [
      'Rich houndstooth check motif woven in Yorkshire',
      'Dual rear vents & genuine brown suede elbow-patch detailing',
      'Italian brass-rimmed genuine leather buttons',
      'Partially lined in self-regulating cupro'
    ],
    fabric: '85% Virgin Wool, 15% Mongolian Cashmere',
    fit: 'Relaxed Gentleman Fit',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1598808503746-f34c53b29ef3?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598808503746-f34c53b29ef3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'estate',
    archetypeLabel: 'The Estate Gentleman',
    archetypeMantra: 'Heavy tweeds, leather button shanks, and equestrian patterns fitting high-altitude forest states.',
    inStock: true,
    legacyStory: 'Recreating the tailored leisure garments worn on high-society retreats in Switzerland during the golden age of mountaineering.'
  },
  {
    id: 'florentine-italian-pant',
    name: 'The Florentine Italian Pant',
    category: 'pants',
    categoryLabel: 'Signature Trousers',
    price: 7500,
    description: 'Neapolitan-cut luxury linen trousers in a sand-weave hue with side adjusters.',
    longDescription: 'The pinnacle of relaxed elegance. Cut with a tapered cuff and a high rise, these trousers feature crisp front creases and hand-finished beltless buckle tabs, offering unmatched comfort under the Italian Sun.',
    details: [
      'Integrated adjustable metal side-tab buckles',
      'Double front reverse-pleats',
      'After-dinner split rear waistband extension',
      'Unfinished hems ready for bespoke tailor length styling'
    ],
    fabric: '100% Belgian Long-Staple Linen',
    fit: 'Italian Sartorial Mid-Rise',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'continental',
    archetypeLabel: 'The Continental',
    archetypeMantra: 'High air circulation linen drape, beltless buckles, and shades of Saint-Tropez sunsets.',
    inStock: true,
    legacyStory: 'Inspired by Neapolitan tailoring guilds, these trousers allow absolute air circulation while projecting immediate sartorial competence.'
  },
  {
    id: 'heritage-gurkha-trouser',
    name: 'The Heritage Gurkha Trouser',
    category: 'pants',
    categoryLabel: 'Signature Trousers',
    price: 7800,
    description: 'Bespoke double-strap buckle waistband pants in premium heavy garment-dyed cotton twin twill.',
    longDescription: 'A classic silhouette return. Featuring the iconic wrap-over double-buckle waistband, these deep-pleated Gurkhas command a strong, high-contrast, military-inspired classic posture.',
    details: [
      'Iconic Gurkha overlapping waistbelt straps with brass buckles',
      'Deep double forward-pleats for athletic leg volume',
      'Broad 5cm waistband band',
      'Hidden watch pocket at the waistline seam'
    ],
    fabric: '100% Heavy Pima Cotton-Gabardine twill',
    fit: 'Classic High-Rise Wide-Leg drape',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'estate',
    archetypeLabel: 'The Estate Gentleman',
    archetypeMantra: 'Heavy tweeds, leather button shanks, and equestrian patterns fitting high-altitude forest states.',
    inStock: true,
    legacyStory: 'Derived from historical Nepalese officers uniforms and subsequently refined on London’s legendary Jermyn street.'
  },
  {
    id: 'amalfi-pleated-trouser',
    name: 'The Amalfi Cotton-Silk Trouser',
    category: 'pants',
    categoryLabel: 'Signature Trousers',
    price: 7200,
    description: 'Masterfully relaxed cream chino trousers with single pleats and silk-soft hand.',
    longDescription: 'Constructed from a premium wool, silk, and linen blend, the Amalfi trouser flows beautifully with motion. Perfectly suited for yachts, seaside evening affairs, and casual gallery openings.',
    details: [
      'Subtle single pleats for standard mobility',
      'Pronged belt loops with French pick-stitch embellishments',
      'Lined to the knee in natural silk-touch fabric',
      'Rear double-welt pockets with secure button covers'
    ],
    fabric: '50% Pima Cotton, 30% Mulberry Silk, 20% Virgin Wool',
    fit: 'Relaxed Tapered Fit',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'minimalist',
    archetypeLabel: 'The Minimalist',
    archetypeMantra: 'Unbranded premium structures, monochromatic palettes, and cashmere-cashmere overlays.',
    inStock: true,
    legacyStory: 'Crafted as a custom orders capsule for the Amalfi coast sailing club, honoring decades of leisurely coastal voyages.'
  },
  {
    id: 'milanese-knit-polo',
    name: 'The Milanese Luxury Knit Polo',
    category: 'shirts',
    categoryLabel: 'Shirts & Polos',
    price: 5800,
    description: 'Masterpiece pure merino-silk long-sleeve knit polo in a deep vintage olive.',
    longDescription: 'Lightweight cashmere feel with high-end silk sheen. Features an authentic open resort collar (retro Johnny collar) without cheap plasticky buttons, draped in an elegant 14-gauge rib-knit finish.',
    details: [
      'Buttonless open Johnny collar structure',
      'Ribbed cuffs and tailored hem hugging the trousers perfectly',
      'Unmatched breathable properties matching skin temperature',
      'Reinforced shoulder seams to prevent stretching'
    ],
    fabric: '70% Fine Merino Wool, 30% Mulberry Silk (14-Gauge)',
    fit: 'Sartorial Fitted Drape',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'continental',
    archetypeLabel: 'The Continental',
    archetypeMantra: 'High air circulation linen drape, beltless buckles, and shades of Saint-Tropez sunsets.',
    inStock: true,
    legacyStory: 'Loved by jet setters from Rome to Saint-Tropez, this shirt represents casual intellectual dressing without the need for a necktie.'
  },
  {
    id: 'oxford-heritage-shirt',
    name: 'The Oxford Royal Heritage Dress Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts & Polos',
    price: 5200,
    description: 'Crisp Sea-Island cotton dress shirt with classic French cuffs and signature wing collar.',
    longDescription: 'Woven with absolute precision to create a luminous, durable texture that holds starch phenomenally. Perfect for formal navy suits and deep black tuxedo pairings.',
    details: [
      'Traditional wingtip collar with rigid stay inserts',
      'French cuffs requiring signature cufflinks',
      'Mother-of-pearl buttons sewn on a secure shank',
      'Generous back box-pleat for full rotational shoulder movement'
    ],
    fabric: '100% Cotton Sea Island (200s Double Ply)',
    fit: 'Sartorial Broad-Shouldered Fit',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'traditionalist',
    archetypeLabel: 'The Traditionalist',
    archetypeMantra: 'Bespoke Savile Row structures modeled on generations of timeless formal assemblies.',
    inStock: true,
    legacyStory: 'Sourced from legendary mills in the West Indies, representing the supreme high-count cotton standard established in 1890.'
  },
  {
    id: 'portofino-silk-linen',
    name: 'The Portofino Silk-Linen Resort Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts & Polos',
    price: 5400,
    description: 'Crisp white breathable linen shirt with short sleeves and luxurious camp collar.',
    longDescription: 'Specially milled to blend the rigid posture of pure Belgian linen with the soft, flowing, anti-wrinkle fall of pure mulberry silk.',
    details: [
      'Laid-back premium camp collar design',
      'Pre-washed with mountain spring water for organic softness',
      'Slightly curved split hem for untucked styling',
      'Side seam reinforcement reinforcements'
    ],
    fabric: '60% Natural Belgian Linen, 40% Mulberry Silk',
    fit: 'Relaxed Riviera fit',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'minimalist',
    archetypeLabel: 'The Minimalist',
    archetypeMantra: 'Unbranded premium structures, monochromatic palettes, and cashmere-cashmere overlays.',
    inStock: true,
    legacyStory: 'Crafted for summer residences on Mediterranean islands where temperatures spike but style rules remain constant.'
  },
  {
    id: 'chelsea-silk-tie',
    name: 'The Chelsea Silk Jacquard Tie',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 1800,
    description: 'Heavyweight hand-folded mulberry silk necktie featuring geometric gold accents on navy.',
    longDescription: 'Crafted with a dense wool lining that holds a stunning, thick knot with a perfect dimple. Woven on 19th-century jacquard looms in East London.',
    details: [
      'Self-tipping in high-grade navy silk satin lining',
      'Classic 3-fold construction with loose slip-stitch loop thread',
      'Woven vintage crest jacquard detailing',
      'Length: 148cm, Width: 8.5cm'
    ],
    fabric: '100% Heavy Mulberry Silk',
    fit: 'Classic Width',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'traditionalist',
    archetypeLabel: 'The Traditionalist',
    archetypeMantra: 'Bespoke Savile Row structures modeled on generations of timeless formal assemblies.',
    inStock: true,
    legacyStory: 'Our flagship neckwear design, representing the deep blue-blood color scheme popularized by traditional British university dining clubs.'
  },
  {
    id: 'sovereign-gold-cufflinks',
    name: 'The Sovereign Gold & Brass Cufflinks',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 2800,
    description: 'Heritage custom brass-rimmed gold-plated cufflinks with Alvi’s hand-engraved emblem.',
    longDescription: 'A quiet signal at the wrist. These cufflinks are individually hand-stamped by historical family silversmiths, finished in a polished antique gold coat.',
    details: [
      'Gold gilding coat on robust solid marine brass core',
      '24-Karat gold gilding coat, hand-burnished',
      'Swivel whaleback fastening system with tight locking action',
      'Comes packaged in a heavy stained mahogany keepsake box'
    ],
    fabric: 'Solid Gold-Plated Marine Brass',
    fit: 'One Size',
    image: 'https://images.unsplash.com/photo-1621335829241-1efd0dedb00a?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621335829241-1efd0dedb00a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'minimalist',
    archetypeLabel: 'The Minimalist',
    archetypeMantra: 'Unbranded premium structures, monochromatic palettes, and cashmere-cashmere overlays.',
    inStock: true,
    legacyStory: 'An exact reproduction of the cufflinks passed down through three generations of the Alavi estate tailoring workshop.'
  },
  {
    id: 'como-silk-pocket-square',
    name: 'The Como Estate Silk Pocket Square',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 1400,
    description: 'Como silk pocket square with beautiful hand-rolled borders in contrasting golden thread.',
    longDescription: 'Features an illustration of classical Italian columns, printed in rich organic vegetable dyes. Hand-rolled borders create a beautiful, organic posture inside the jacket breast pocket.',
    details: [
      'Incredibly delicate hand-rolled and hand-stitched borders',
      'Generous dimensions for robust puff folding options',
      'Natural organic dye extraction process',
      'Size: 42cm x 42cm'
    ],
    fabric: '100% Crepe de Chine Silk (Como, Italy)',
    fit: 'One Size',
    image: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop'
    ],
    archetype: 'continental',
    archetypeLabel: 'The Continental',
    archetypeMantra: 'High air circulation linen drape, beltless buckles, and shades of Saint-Tropez sunsets.',
    inStock: true,
    legacyStory: 'Made in the legendary textile workshops surrounding Lake Como, representing vintage Italian artistic heritage.'
  }
];

export const brandPillars: BrandPillar[] = [
  {
    title: 'Timelessness Over Trends',
    subtitle: 'The Pursuit of the Eternal',
    description: 'We do not acknowledge temporary fads. Under the Alvi’s design doctrine, a garment is crafted to remain as visually striking and posture-perfect today as it will be half a century in the future. We cut fabrics designed for legacies.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
    number: 'I'
  },
  {
    title: 'Craftsmanship Over Volume',
    subtitle: 'Sacrosanct Methods',
    description: 'No fast machines, no assembly lines. Each buttonhole is hand-cut; every chest canvas is meticulously stitched in dry workshops where time slows down. We produce extremely limited quantities per year to maintain absolute focus on individual perfection.',
    image: 'https://images.unsplash.com/photo-1589756823855-ede9bd2db774?q=80&w=600&auto=format&fit=crop',
    number: 'II'
  },
  {
    title: 'Identity Over Impulse',
    subtitle: 'Quiet Eminence',
    description: 'An Alvi’s garment does not scream. There are no massive branded logos, no loud color schemes. It makes itself known purely through the crispness of the shoulder, the sway of the drape, and the deep presence of the wearer.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    number: 'III'
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Lord Julian Sterling',
    location: 'London, UK',
    rating: 5,
    heading: 'An Absolute Standard of Tailoring',
    text: 'The horsehair canvas on the Navy Three-Piece adapts beautifully. After three months of wear, it holds my shoulder posture like a second skin. It is rare to see this caliber of hand-work nowadays.',
    productName: 'The Florentine Navy Three-Piece'
  },
  {
    id: 'rev-2',
    author: 'Alessandro Moretti',
    location: 'Florence, Italy',
    rating: 5,
    heading: 'Pure Neapolitan Artistry',
    text: 'The linen of the Florentine Italian Pant behaves exactly as requested. It wrinkles elegantly, showing a deep vintage sand tone that pairing with knit polos elevates fully.',
    productName: 'The Florentine Italian Pant'
  },
  {
    id: 'rev-3',
    author: 'Charles Sterling-Devereux',
    location: 'Gstaad, Switzerland',
    rating: 5,
    heading: 'Stately warmth',
    text: 'Wearing the Estate Tweed jacket is like stepping back into high-society Alpine history. The York Tweed weave is thick yet remarkably supple to wear. Absolute craftsmanship.',
    productName: 'The Gstaad Estate Tweed Jacket'
  }
];
