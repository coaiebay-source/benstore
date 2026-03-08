import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import MysteryBoxSection from '@/components/MysteryBoxSection';
import MembershipSection from '@/components/MembershipSection';
import AdminDashboard from '@/components/AdminDashboard';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--synapse-warm-bg)] text-[var(--synapse-text)] relative">
      <Navigation />

      <div className="relative z-0">
        <Hero />

        <div className="space-y-4 px-6 md:px-0 max-w-7xl mx-auto">
          <ProductGrid />

          <div className="py-24">
            <MysteryBoxSection />
          </div>

          <div className="py-24">
            <MembershipSection />
          </div>

          {/* Divider with Brand Statement */}
          <div className="w-full flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-px bg-[var(--synapse-gold)] mb-8" />
            <p className="font-classic text-3xl italic text-[var(--synapse-blue)] opacity-80 max-w-2xl px-6">
              "We built for the 18-year-old's speed and the 90-year-old's trust. This is the bridge between surplus and soul."
            </p>
            <div className="w-24 h-px bg-[var(--synapse-gold)] mt-8" />
          </div>

          <AdminDashboard />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 py-32 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Synapse Bin Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black text-3xl tracking-tighter text-[var(--synapse-blue)] font-main">SYNAPSE BIN</span>
            </div>
            <p className="text-zinc-500 font-classic text-lg mt-4 leading-relaxed max-w-md">
              The Digital Hearth. Built for Chaotically Organized AI.
              Disrupting the secondary market by marrying algorithmic efficiency with human-first reliability.
            </p>
            <p className="text-[var(--synapse-gold)] font-bold mt-6 uppercase tracking-widest text-xs">
              Master the Glitch. Own the Excess.
            </p>
          </div>

          <div className="flex flex-col gap-6 font-main font-black uppercase tracking-[0.2em] text-[11px] text-[var(--synapse-blue)]">
            <span className="text-zinc-400 font-bold border-b border-zinc-100 pb-2">Navigation</span>
            <a href="#" className="hover:text-[var(--synapse-gold)] transition-colors">The Drop</a>
            <a href="#" className="hover:text-[var(--synapse-gold)] transition-colors">Mystery Boxes</a>
            <a href="#" className="hover:text-[var(--synapse-gold)] transition-colors">Memberships</a>
            <a href="#" className="hover:text-[var(--synapse-gold)] transition-colors">Shipping</a>
          </div>

          <div className="bg-[var(--synapse-warm-bg)] p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <span className="text-xs text-[var(--synapse-blue)] font-black uppercase tracking-widest block mb-4">JOIN THE HEARTH</span>
            <p className="text-xs text-zinc-500 mb-6 font-classic">Get alerts for the Wednesday 9AM drop before everyone else.</p>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="your@email.com" className="bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-[var(--synapse-gold)]" />
              <button className="w-full py-4 bg-[var(--synapse-blue)] text-white text-xs font-black rounded-xl hover:bg-[var(--synapse-gold)] hover:text-[var(--synapse-blue)] transition-all uppercase tracking-widest">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em]">
            © 2026 SYNAPSE BIN • BEAKERFIELD BLUEPRINT • ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8 text-[10px] text-zinc-400 font-black uppercase tracking-widest">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Logistics</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
