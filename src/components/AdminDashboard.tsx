'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { MOCK_PALLETS, MOCK_PRODUCTS } from '@/lib/mock-data';
import { Package, TrendingUp, Users, DollarSign, Activity, AlertTriangle, Truck, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const { currentDay } = useStore();

    const stats = [
        { label: 'Weekly Revenue', value: '$36,225', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
        { label: 'Sell-Through', value: '89.2%', change: '+4.1%', icon: Activity, color: 'text-[var(--synapse-blue)]' },
        { label: 'Active Members', value: '375', change: '+15.2%', icon: Users, color: 'text-[var(--synapse-gold)]' },
        { label: 'Logistic Margin', value: '+24.5%', change: '-1.2%', icon: Truck, color: 'text-indigo-600' },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-24" id="admin">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <div>
                    <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase text-[var(--synapse-blue)] flex items-center gap-4 font-main">
                        <BarChart3 size={40} className="text-[var(--synapse-gold)]" />
                        SYNAPSE BIN CONCIERGE
                    </h2>
                    <p className="text-zinc-500 font-classic text-xl italic italic">Bakersfield Operations • "Intelligence behind the Surplus"</p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-200 self-start md:self-auto shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-[var(--synapse-blue)] font-black uppercase tracking-widest">Core Systems Online</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-xl transition-all"
                    >
                        <div className={`p-4 rounded-2xl bg-[var(--synapse-warm-bg)] border border-zinc-100 w-fit mb-8 ${stat.color}`}>
                            <stat.icon size={28} />
                        </div>
                        <p className="text-[11px] text-zinc-400 font-black uppercase tracking-widest mb-2 font-main">{stat.label}</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-black text-[var(--synapse-blue)] tracking-tighter leading-none mb-2 font-main">{stat.value}</p>
                            <span className={`text-xs font-black ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{stat.change}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Pallet Monitor */}
                <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <BarChart3 size={200} className="text-[var(--synapse-blue)]" />
                    </div>
                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 text-[var(--synapse-blue)] font-main">
                            <Package size={24} className="text-[var(--synapse-gold)]" />
                            Pallet Velocity Monitor
                        </h3>
                        <span className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">LIVE DATA UPDATE</span>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {MOCK_PALLETS.map((pallet) => (
                            <div key={pallet.id} className="p-8 bg-[var(--synapse-warm-bg)] rounded-[2rem] border border-zinc-100">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-lg font-black uppercase tracking-tighter text-[var(--synapse-blue)] font-main">{pallet.name}</p>
                                        <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest">SOURCING: ${pallet.sourcingCost}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black uppercase tracking-tighter text-[var(--synapse-gold)] font-main">NET: $14,250</p>
                                        <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest">MARGIN: 38%</p>
                                    </div>
                                </div>

                                <div className="w-full h-4 bg-zinc-200 rounded-full overflow-hidden mb-6 shadow-inner">
                                    <div className="h-full bg-[var(--synapse-blue)] rounded-full w-[85%] shadow-lg" />
                                </div>

                                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.2em] font-main">
                                    <span className="text-[var(--synapse-blue)]">85% SELL-THROUGH</span>
                                    <span className="text-zinc-400">TARGET: 90%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optimization Sidebar */}
                <div className="bg-[var(--synapse-blue)] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 mb-10 relative z-10 font-main">
                        <AlertTriangle size={24} className="text-[var(--synapse-gold)]" />
                        AI Insights
                    </h3>

                    <div className="space-y-6 relative z-10">
                        <div className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md">
                            <p className="text-[11px] font-black text-[var(--synapse-gold)] uppercase tracking-widest mb-2 font-main">Logistics Optimization</p>
                            <p className="text-sm font-classic italic leading-relaxed text-zinc-100">"35% of orders can be downsized. Expected savings: <span className="text-[var(--synapse-gold)] font-black">$425.00</span>"</p>
                        </div>
                        <div className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md">
                            <p className="text-[11px] font-black text-[var(--synapse-gold)] uppercase tracking-widest mb-2 font-main">Pricing Elasticity</p>
                            <p className="text-sm font-classic italic leading-relaxed text-zinc-100">"Electronics demand remains inelastic at $10. Recommendation: Delay price drop by 6 hours."</p>
                        </div>
                        <div className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md">
                            <p className="text-[11px] font-black text-[var(--synapse-gold)] uppercase tracking-widest mb-2 font-main">Member Retention</p>
                            <p className="text-sm font-classic italic leading-relaxed text-zinc-100">"The Mystery Box incentive has reduced churn by 2% this month."</p>
                        </div>
                    </div>

                    <button className="w-full mt-12 py-5 bg-[var(--synapse-gold)] text-[var(--synapse-blue)] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl relative z-10">
                        GENERATE HEARTH REPORT
                    </button>
                    <div className="mt-8 text-center relative z-10">
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Concierge v2.0-Alpha</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
