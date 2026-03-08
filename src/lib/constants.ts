export const SHIPPING_RATES = {
    NONE: 6.99,
    BASIC: 3.99,
    PREMIUM: 3.99,
};

export const FREE_SHIPPING_THRESHOLD = {
    NONE: 60,
    BASIC: 40,
    PREMIUM: 30,
};

export const MEMBERSHIP_COSTS = {
    BASIC: 4.99,
    PREMIUM: 14.99,
};

export const MYSTERY_BOX_TIERS = [
    { id: 'silver', name: 'Silver Box', price: 15, itemsRange: [2, 3], targetCogs: 5, hasAnchor: false },
    { id: 'gold', name: 'Gold Box', price: 25, itemsRange: [4, 5], targetCogs: 8.5, hasAnchor: false },
    { id: 'platinum', name: 'Platinum Box', price: 35, itemsRange: [6, 8], targetCogs: 12.5, hasAnchor: true },
    { id: 'diamond', name: 'Diamond Box', price: 50, itemsRange: [10, 12], targetCogs: 18, hasAnchor: true },
    { id: 'elite', name: 'Elite Box', price: 75, itemsRange: [15, 20], targetCogs: 28, hasAnchor: true },
];
