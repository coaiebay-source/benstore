'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { getCurrentPrice } from '@/lib/types';
import { ShoppingCart, Star, PackageOpen, LayoutGrid, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Using a slightly more sophisticated mock data approach or just updating the existing one
import { MOCK_PRODUCTS } from '@/lib/mock-data';

export default function ProductGrid() {
    const { currentDay, addToCart } = useStore();

    const isMysteryDay = currentDay >= 4; // Fri-Sun
    const isPrepDay = currentDay < 2; // Mon-Tue

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-24" id="drop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase text-[var(--synapse-blue)] flex items-center gap-4 font-main">
                        <LayoutGrid size={40} className="text-[var(--synapse-gold)]" />
                        WEEKLY DROP EXPLORER
                    </h2>
                    <p className="text-zinc-500 font-classic text-lg italic">Bakersfield Liquidations • Batch #2026-03-A • "Reliability in every find."</p>
                </div>

                <div className="flex bg-white p-2 rounded-2xl border border-zinc-200 self-start md:self-auto shadow-sm">
                    <button className="px-8 py-3 rounded-xl bg-[var(--synapse-blue)] text-white text-sm font-black shadow-lg transition-all uppercase tracking-widest">ALL ITEMS</button>
                    <button className="px-8 py-3 rounded-xl text-zinc-400 text-sm font-black hover:text-[var(--synapse-blue)] transition-all uppercase tracking-widest">ELECTRONICS</button>
                    <button className="px-8 py-3 rounded-xl text-zinc-400 text-sm font-black hover:text-[var(--synapse-blue)] transition-all uppercase tracking-widest">HOME GOODS</button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isPrepDay ? (
                    <motion.div
                        key="prep"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center p-32 bg-white rounded-[3rem] text-center border border-zinc-100 shadow-xl"
                    >
                        <div className="w-24 h-24 rounded-full bg-[var(--synapse-warm-bg)] border-2 border-zinc-100 flex items-center justify-center mb-8 animate-pulse">
                            <PackageOpen className="text-[var(--synapse-gold)]" size={40} />
                        </div>
                        <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter text-[var(--synapse-blue)]">New Pallet Unboxing...</h3>
                        <p className="text-zinc-500 font-classic text-xl max-w-lg mb-10 italic">"The Hearth is warming up. Drop goes live Wednesday at 9:00 AM PST. Members get early access."</p>
                        <button className="btn-primary text-xl px-12">NOTIFY ME</button>
                    </motion.div>
                ) : isMysteryDay ? (
                    <motion.div
                        key="mystery"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center p-32 bg-[var(--synapse-blue)] rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="w-24 h-24 rounded-full bg-[var(--synapse-gold)] flex items-center justify-center mb-8 shadow-2xl relative z-10">
                            <Star className="text-[var(--synapse-blue)]" size={40} />
                        </div>
                        <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter text-white relative z-10">Curated Drop Closed</h3>
                        <p className="text-zinc-300 font-classic text-2xl max-w-xl mb-12 italic relative z-10">All remaining treasures have been moved to the Mystery Box Pool. The glitch is yours to master.</p>
                        <button className="btn-primary text-2xl px-16 relative z-10 font-black">ENTER THE MYSTERY ZONE</button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {MOCK_PRODUCTS.map((product) => {
                            const price = getCurrentPrice(product, currentDay);
                            return (
                                <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all h-full">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] m-2">
                                        <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            <span className="px-4 py-1.5 rounded-full bg-white/90 text-[var(--synapse-blue)] text-[10px] font-black border border-zinc-200 uppercase tracking-widest backdrop-blur-md">
                                                {product.category}
                                            </span>
                                            {product.isAnchor && (
                                                <span className="px-4 py-1.5 rounded-full bg-[var(--synapse-gold)] text-[var(--synapse-blue)] text-[10px] font-black uppercase tracking-widest shadow-lg">
                                                    RARITY: ELITE
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="px-8 pb-8 pt-4 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-black text-[var(--synapse-blue)] tracking-tight font-main flex-grow pr-4">{product.name}</h3>
                                            <p className="text-[10px] text-zinc-400 font-black mt-1 uppercase tracking-widest whitespace-nowrap">EST. RETAIL: ${product.retailValue}</p>
                                        </div>
                                        <p className="text-base text-zinc-500 mb-8 font-classic line-clamp-2 leading-relaxed flex-grow italic">"{product.description}"</p>

                                        <div className="flex justify-between items-center bg-[var(--synapse-warm-bg)] p-6 rounded-[1.5rem] border border-zinc-100 mt-auto">
                                            <div>
                                                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1">BIN PRICE</p>
                                                <p className="text-4xl font-black text-[var(--synapse-blue)] leading-none">${price.toFixed(2)}</p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(product, 'product')}
                                                className="w-16 h-16 rounded-full bg-[var(--synapse-gold)] hover:bg-[var(--synapse-blue)] hover:text-white flex items-center justify-center text-[var(--synapse-blue)] transition-all shadow-xl hover:scale-110 active:scale-95 group/btn"
                                            >
                                                <ShoppingCart size={28} className="group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
