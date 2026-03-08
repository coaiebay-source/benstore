import { create } from 'zustand';
import { Product, UserTier, MysteryBox, getCurrentPrice } from './types';
import { SHIPPING_RATES, FREE_SHIPPING_THRESHOLD } from './constants';

interface CartItem {
    product: Product | MysteryBox;
    quantity: number;
    type: 'product' | 'mystery-box';
}

interface BinStoreState {
    tier: UserTier;
    cart: CartItem[];
    setTier: (tier: UserTier) => void;
    addToCart: (item: Product | MysteryBox, type: 'product' | 'mystery-box') => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;

    // Demo Mode overrides
    currentDay: number;
    setCurrentDay: (day: number) => void;

    getShippingCost: () => number;
    getSubtotal: () => number;
}

export const useStore = create<BinStoreState>((set, get) => ({
    tier: 'none',
    cart: [],
    currentDay: 2,

    setTier: (tier) => set({ tier }),

    addToCart: (item, type) => {
        const existing = get().cart.find(i => i.product.id === item.id);
        if (existing) {
            set({
                cart: get().cart.map(i => i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
            });
        } else {
            set({ cart: [...get().cart, { product: item, quantity: 1, type }] });
        }
    },

    removeFromCart: (id) => set({ cart: get().cart.filter(i => i.product.id !== id) }),

    clearCart: () => set({ cart: [] }),

    setCurrentDay: (day) => set({ currentDay: day }),

    getSubtotal: () => {
        const { cart, currentDay } = get();
        return cart.reduce((acc, item) => {
            if (item.type === 'product') {
                const price = getCurrentPrice(item.product as Product, currentDay);
                return acc + price * item.quantity;
            } else {
                return acc + (item.product as MysteryBox).price * item.quantity;
            }
        }, 0);
    },

    getShippingCost: () => {
        const { tier } = get();
        const subtotal = get().getSubtotal();

        const threshold = FREE_SHIPPING_THRESHOLD[tier.toUpperCase() as keyof typeof FREE_SHIPPING_THRESHOLD] || 60;
        if (subtotal >= threshold) return 0;

        return SHIPPING_RATES[tier.toUpperCase() as keyof typeof SHIPPING_RATES] || 6.99;
    }
}));
