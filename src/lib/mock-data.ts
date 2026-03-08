import { Product, Pallet } from './types';

export const MOCK_PALLETS: Pallet[] = [
    { id: 'p1', name: 'March Week 1 Mixed Pallet', sourcingCost: 7500, productCount: 3000, arrivalDate: '2026-03-02' },
];

export const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'UltraHD Wireless Headphones',
        description: 'High-fidelity audio with noise cancellation.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
        category: 'Electronics',
        sourcingCost: 2.50,
        retailValue: 129.99,
        weight: 0.8,
        dimensions: { l: 8, w: 7, h: 3 },
        palletId: 'p1',
        status: 'curated',
        isAnchor: true
    },
    {
        id: '2',
        name: 'Smart Kitchen Blender',
        description: '1200W Professional grade motor.',
        image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1000&auto=format&fit=crop',
        category: 'Home',
        sourcingCost: 2.50,
        retailValue: 89.99,
        weight: 4.5,
        dimensions: { l: 15, w: 10, h: 10 },
        palletId: 'p1',
        status: 'curated'
    },
    {
        id: '3',
        name: 'RGB Mechanical Keyboard',
        description: 'Hot-swappable tactile switches.',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop',
        category: 'Electronics',
        sourcingCost: 2.50,
        retailValue: 59.99,
        weight: 2.2,
        dimensions: { l: 14, w: 6, h: 2 },
        palletId: 'p1',
        status: 'curated'
    },
    {
        id: '4',
        name: 'Pure Cotton Queen Sheets',
        description: '800 Thread count luxury cotton.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop',
        category: 'Home',
        sourcingCost: 2.50,
        retailValue: 45.00,
        weight: 3.0,
        dimensions: { l: 12, w: 12, h: 4 },
        palletId: 'p1',
        status: 'curated'
    },
    {
        id: '5',
        name: 'Stainless Steel Water Bottle',
        description: 'Vacuum insulated, stays cold for 24 hours.',
        image: 'https://images.unsplash.com/photo-1602143303410-b4da799f9797?q=80&w=1000&auto=format&fit=crop',
        category: 'Outdoors',
        sourcingCost: 2.50,
        retailValue: 24.99,
        weight: 0.5,
        dimensions: { l: 10, w: 3, h: 3 },
        palletId: 'p1',
        status: 'curated'
    },
];
