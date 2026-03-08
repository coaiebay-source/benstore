export type UserTier = 'none' | 'basic' | 'premium';

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    sourcingCost: number;
    retailValue: number;
    weight: number; // in lbs
    dimensions: {
        l: number;
        w: number;
        h: number;
    };
    palletId: string;
    isAnchor?: boolean;
    status: 'curated' | 'mystery-pool' | 'sold';
}

export function getCurrentPrice(product: Product, currentDay: number): number {
    if (product.status === 'mystery-pool') return 0; // Not sold individually
    if (currentDay === 2) return 10.00; // Wednesday
    if (currentDay === 3) return 8.00;  // Thursday
    return 10.00; // Default/Preview
}

export interface Pallet {
    id: string;
    name: string;
    sourcingCost: number;
    productCount: number;
    arrivalDate: string;
}

export interface MysteryBox {
    id: string;
    tier: 'silver' | 'gold' | 'platinum' | 'diamond' | 'elite';
    price: number;
    itemsRange: [number, number];
    targetCogs: number;
    name: string;
    hasAnchor: boolean;
}
