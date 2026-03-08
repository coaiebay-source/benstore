'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { Ticket, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
    const { currentDay } = useStore();

    const isDropDay = currentDay === 2; // Wednesday
    const isSecondDropDay = currentDay === 3; // Thursday
    const isMysteryDay = currentDay >= 4; // Friday - Sunday

    const getStatusText = () => {
        if (currentDay < 2) return 'PREPARING FOR THE NEXT DROP...';
        if (isDropDay) return 'THE DROP IS LIVE! EVERYTHING $10';
        if (isSecondDropDay) return 'FINAL CHANCE! EVERYTHING $8';
        if (isMysteryDay) return 'LIMITED MYSTERY BOX WEEKEND';
        return '';
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-[var(--synapse-warm-bg)]">
            {/* Background Texture/Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-[var(--synapse-blue)] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
                            {getStatusText()}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${isDropDay || isSecondDropDay ? 'bg-green-500 shadow-[0_0_15px_green]' : 'bg-zinc-300'} animate-pulse`} />
                    </div>

                    <h1 className="text-7xl lg:text-[100px] font-black mb-6 tracking-tighter leading-[0.9] text-[var(--synapse-blue)] font-main uppercase">
                        MASTER THE <br />
                        <span className="text-[var(--synapse-gold)]">GLITCH.</span>
                    </h1>

                    <h2 className="text-4xl lg:text-5xl font-classic italic text-[var(--synapse-text-muted)] mb-8">
                        Own the Excess.
                    </h2>

                    <p className="text-xl text-[var(--synapse-text)] mb-10 max-w-lg font-classic leading-relaxed italic">
                        "The Digital Hearth" — Where reliability meets the speed of the find. Grab curated picks for as low as $8 or roll the dice on our premium mystery boxes.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <button className="btn-primary flex items-center gap-3 group text-xl scale-110">
                            <Zap size={24} className="group-hover:animate-bounce" />
                            SHOP THE DROP
                        </button>
                        <button className="btn-secondary flex items-center gap-2 text-xl scale-110">
                            BECOME A MEMBER
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-12 mt-20 pt-10 border-t border-zinc-200">
                        <div>
                            <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-2">Weekly Volume</p>
                            <p className="text-4xl font-black text-[var(--synapse-blue)]">3,000+</p>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">NEW ITEMS DROPPED</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-2">Trust Score</p>
                            <p className="text-4xl font-black text-[var(--synapse-blue)]">4.9/5</p>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">FROM 500+ DEAL HUNTERS</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-2">Cubic Shipping</p>
                            <p className="text-4xl font-black text-[var(--synapse-gold)]">$3.99</p>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">FLAT RATE OPTIMIZATION</p>
                        </div>
                    </div>
                </motion.div>

                {/* Video Integration Prototype */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="absolute -inset-10 bg-[var(--synapse-gold)]/10 blur-[100px] rounded-full" />
                    <div className="relative group w-full max-w-lg ml-auto perspective-1000">
                        <div className="bg-white p-4 rounded-[var(--border-radius)] shadow-2xl border border-zinc-100 transform transition-all group-hover:rotate-1 group-hover:scale-[1.02]">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-zinc-100">
                                <Image src="/hero.png" alt="Featured Drop" fill className="object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--synapse-blue)]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                                    <div className="flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Watch: How the Wed Drop Works</span>
                                    </div>
                                    <h3 className="text-4xl font-black text-white leading-tight uppercase font-main">Human-First <br />Liquidation.</h3>
                                </div>
                            </div>
                            <div className="px-4 pb-4 flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-zinc-400 uppercase font-black tracking-widest mb-1">CURRENT STATUS</p>
                                    <p className="text-3xl font-black text-[var(--synapse-blue)] uppercase">WAREHOUSE LIVE</p>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-[var(--synapse-gold)] flex items-center justify-center text-[var(--synapse-blue)] shadow-xl animate-pulse">
                                    <Zap size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
