'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { MYSTERY_BOX_TIERS } from '@/lib/constants';
import { Package, Sparkles, AlertCircle, ShoppingCart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MysteryBoxSection() {
    const { currentDay, addToCart } = useStore();

    const isMysteryDay = currentDay >= 4; // Fri-Sun

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-24" id="mystery">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase text-[var(--synapse-blue)] flex items-center justify-center md:justify-start gap-4 font-main">
                        <Package size={40} className="text-[var(--synapse-gold)]" />
                        MYSTERY BOX POOL
                    </h2>
                    <p className="text-zinc-500 font-classic text-lg italic">Volume Clearance • High-Yield Arbitrage • "The Glitch in your Favor"</p>
                </div>

                {!isMysteryDay && (
                    <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-zinc-200 self-center md:self-auto shadow-sm">
                        <AlertCircle size={20} className="text-[var(--synapse-gold)]" />
                        <span className="text-xs text-[var(--synapse-blue)] font-black uppercase tracking-widest">Early Access Members Only</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {MYSTERY_BOX_TIERS.map((tier) => (
                    <motion.div
                        key={tier.id}
                        whileHover={{ y: -12 }}
                        className={`group relative bg-white p-8 rounded-[2.5rem] border border-zinc-100 transition-all ${isMysteryDay ? 'cursor-pointer shadow-xl hover:shadow-2xl' : 'opacity-50 grayscale pointer-events-none'}`}
                    >
                        <div className="relative w-full aspect-square bg-[var(--synapse-warm-bg)] rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden border border-zinc-50">
                            <Package className={`w-20 h-20 ${tier.id === 'elite' ? 'text-[var(--synapse-gold)]' : 'text-zinc-300'} group-hover:scale-110 transition-transform`} />
                            {tier.hasAnchor && (
                                <div className="absolute top-4 right-4 p-2 rounded-full bg-[var(--synapse-gold)] text-[var(--synapse-blue)] shadow-xl relative z-10">
                                    <Sparkles size={16} />
                                </div>
                            )}
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-[var(--synapse-blue)] font-main">{tier.name}</h3>
                            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-6 italic">{tier.itemsRange[0]}-{tier.itemsRange[1]} ELITE ITEMS</p>

                            <div className="w-12 h-1 bg-[var(--synapse-gold)] mx-auto mb-6 opacity-30" />

                            <p className="text-5xl font-black text-[var(--synapse-blue)] mb-2 font-main">${tier.price}</p>
                            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">CUBIC-OPTIMIZED RATE</p>
                        </div>

                        <button
                            onClick={() => addToCart(tier as any, 'mystery-box')}
                            className="w-full py-5 rounded-2xl bg-[var(--synapse-blue)] text-white group-hover:bg-[var(--synapse-gold)] group-hover:text-[var(--synapse-blue)] transition-all font-black text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            GET IT
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Psychological Slogan Callout */}
            <div className="mt-24 p-12 bg-white rounded-[3rem] border border-zinc-100 shadow-xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Zap size={120} className="text-[var(--synapse-gold)]" />
                </div>
                <h3 className="text-3xl font-black text-[var(--synapse-blue)] mb-4 uppercase tracking-tighter relative z-10">Own the Excess.</h3>
                <p className="text-xl text-zinc-500 font-classic max-w-2xl mx-auto italic relative z-10">
                    "When the warehouse overflows, our glitch becomes your gain. Don't let good products go to waste. Own the treasure within."
                </p>
            </div>
        </div>
    );
}
