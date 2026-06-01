export type Category = 'suits' | 'pants' | 'shirts' | 'accessories';
export type Archetype = 'traditionalist' | 'minimalist' | 'continental' | 'estate';

export interface Product {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  description: string;
  longDescription: string;
  details: string[];
  fabric: string;
  fit: string;
  image: string;
  secondaryImage: string;
  gallery: string[]; // At least 3 detailed close-up images
  archetype: Archetype;
  archetypeLabel: string;
  archetypeMantra: string;
  inStock: boolean;
  legacyStory: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface BrandPillar {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  number: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  heading: string;
  text: string;
  productName: string;
}

export interface SavedAddress {
  id: string;
  label: string; // e.g. "Country Club Estate", "Belgravia Flat"
  fullName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface OrderHistoryItem {
  id: string;
  date: string;
  items: {
    productName: string;
    quantity: number;
    size: string;
    priceAtOrder: number;
  }[];
  totalPrice: number;
  status: 'Atelier Queue' | 'Hand Basting' | 'Air Courier Route' | 'Delivered';
  trackingNumber: string;
}

export interface UserProfile {
  fullName: string;
  email: string;
  registeredSince: string;
  vipRank: 'House Guest' | 'Distinguished Member' | 'Legend Patron' | 'Heritage Trustee';
  legacyId: string; // e.g., "ALV-1928-831"
  addresses: SavedAddress[];
  orders: OrderHistoryItem[];
}

