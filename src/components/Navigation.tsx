'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/lib/store';
import { ShoppingCart, User, LayoutDashboard, Package, Crown, Search, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const { cart, tier, setTier, currentDay, setCurrentDay } = useStore();
    const [isOpen, setIsOpen] = useState(false);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-zinc-200/50">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                    <Image
                        src="/logo.png"
                        alt="Synapse Bin Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-black text-2xl tracking-tight text-[var(--synapse-blue)] leading-none font-main">SYNAPSE BIN</span>
                    <span className="text-[10px] text-[var(--synapse-text-muted)] uppercase tracking-[0.2em] font-bold font-main">Digital Hearth</span>
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--synapse-blue)] font-main uppercase tracking-widest">
                <Link href="/" className="hover:text-[var(--synapse-gold)] transition-colors">The Drop</Link>
                <Link href="/mystery-boxes" className="hover:text-[var(--synapse-gold)] transition-colors">Mystery Boxes</Link>
                <Link href="/memberships" className="hover:text-[var(--synapse-gold)] transition-colors">Memberships</Link>
                <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full border border-zinc-200">
                    <Search size={14} className="text-zinc-400" />
                    <input type="text" placeholder="Find a gift..." className="bg-transparent border-none focus:outline-none text-xs w-32" />
                    <Mic size={14} className="text-[var(--synapse-gold)] cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Demo Controller */}
                <div className="hidden lg:flex items-center gap-1 bg-zinc-100 p-1 rounded-full border border-zinc-200">
                    {days.map((day, i) => (
                        <button
                            key={day}
                            onClick={() => setCurrentDay(i)}
                            className={`px-3 py-1.5 rounded-full text-[10px] uppercase font-bold transition-all ${currentDay === i
                                ? 'bg-[var(--synapse-blue)] text-white shadow-lg'
                                : 'text-zinc-400 hover:text-[var(--synapse-blue)]'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setTier(tier === 'none' ? 'basic' : tier === 'basic' ? 'premium' : 'none')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 text-xs font-black transition-all ${tier === 'premium' ? 'border-[var(--synapse-gold)] text-[var(--synapse-blue)] bg-[var(--synapse-gold)]' :
                        tier === 'basic' ? 'border-[var(--synapse-blue)] text-white bg-[var(--synapse-blue)]' :
                            'border-zinc-200 text-zinc-500 bg-white'
                        }`}
                >
                    <Crown size={14} />
                    {tier === 'none' ? 'JOIN US' : tier.toUpperCase()}
                </button>

                <button className="relative p-3 hover:bg-zinc-100 rounded-full transition-all group border border-zinc-200 text-[var(--synapse-blue)]">
                    <ShoppingCart size={22} className="group-hover:text-[var(--synapse-gold)]" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-[10px] text-white font-bold flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}
