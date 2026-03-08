'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { MEMBERSHIP_COSTS } from '@/lib/constants';
import { Crown, Zap, Package, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MembershipSection() {
    const { tier, setTier } = useStore();

    const tiers = [
        {
            id: 'none',
            name: 'GUEST',
            price: 0,
            perks: ['Standard $10/$8 Price Drops', 'Access at Thursday 12:01 AM', 'Standard $6.99 Shipping', 'Free Shipping Threshold: $60'],
            color: '#636e72',
        },
        {
            id: 'basic',
            name: 'BASIC',
            price: MEMBERSHIP_COSTS.BASIC,
            perks: ['24-Hour Early Access (Wednesday)', 'Reduced $3.99 Shipping', 'Free Shipping Threshold: $40', 'Priority Email Notifcations'],
            color: '#1A2A6C',
            tag: 'MOST RELIABLE',
        },
        {
            id: 'premium',
            name: 'PREMIUM',
            price: MEMBERSHIP_COSTS.PREMIUM,
            perks: ['All Basic Perks', 'One FREE $25 Box Monthly', 'Free Shipping Threshold: $30', 'Exclusive "Premium-only" Drops', 'Concierge Priority Support'],
            color: '#FDBB2D',
            tag: 'ELITE VALUE',
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-24" id="memberships">
            <div className="text-center mb-20">
                <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase text-[var(--synapse-blue)] flex items-center justify-center gap-4 font-main">
                    <Crown size={40} className="text-[var(--synapse-gold)]" />
                    MEMBERSHIP TIERS
                </h2>
                <p className="text-zinc-500 font-classic text-xl italic max-w-2xl mx-auto">"Recurring revenue for us, recurring reliability for you. Join the inner hearth."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {tiers.map((t) => (
                    <motion.div
                        key={t.id}
                        whileHover={{ y: -15 }}
                        className={`relative bg-white p-12 rounded-[3.5rem] border border-zinc-100 transition-all shadow-xl ${tier === t.id ? `ring-4 ring-[var(--synapse-gold)] shadow-2xl` : 'hover:border-zinc-200'}`}
                    >
                        {t.tag && (
                            <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs shadow-xl`} style={{ backgroundColor: t.id === 'premium' ? 'var(--synapse-gold)' : 'var(--synapse-blue)', color: t.id === 'premium' ? 'var(--synapse-blue)' : 'white' }}>
                                {t.tag}
                            </span>
                        )}

                        <div className="mb-10">
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter font-main" style={{ color: t.id === 'premium' ? 'var(--synapse-gold)' : 'var(--synapse-blue)' }}>{t.name}</h3>
                            <div className="flex items-end gap-1">
                                <span className="text-6xl font-black text-[var(--synapse-blue)] font-main">${t.price}</span>
                                <span className="text-zinc-400 font-bold text-sm mb-2 font-main">/MO</span>
                            </div>
                        </div>

                        <div className="space-y-6 mb-12">
                            {t.perks.map((perk, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 size={24} className="mt-0.5 flex-shrink-0" style={{ color: t.id === 'premium' ? 'var(--synapse-gold)' : 'var(--synapse-blue)' }} />
                                    <span className="text-base text-[var(--synapse-text)] font-classic italic leading-snug">{perk}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setTier(t.id as any)}
                            className={`w-full py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-lg ${tier === t.id
                                ? `bg-[var(--synapse-blue)] text-white`
                                : t.id === 'none'
                                    ? 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                                    : t.id === 'premium'
                                        ? 'bg-[var(--synapse-gold)] text-[var(--synapse-blue)] hover:scale-105'
                                        : 'border-2 border-[var(--synapse-blue)] text-[var(--synapse-blue)] hover:bg-[var(--synapse-blue)] hover:text-white'
                                }`}
                        >
                            {tier === t.id ? 'CURRENT PLAN' : `SELECT THE HEARTH`}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Accessibility / 90-year-old focused callout */}
            <div className="mt-24 p-12 bg-[var(--synapse-blue)] rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter relative z-10 font-main">Built for Every Generation.</h3>
                <p className="text-xl text-zinc-300 font-classic max-w-3xl mx-auto italic relative z-10 leading-relaxed">
                    "From the 18-year-old unboxing a rare find to the 90-year-old finding the perfect gift for their grandson.
                    We've made the 'Join' button big, the text clear, and the trust unbreakable."
                </p>
            </div>
        </div>
    );
}
