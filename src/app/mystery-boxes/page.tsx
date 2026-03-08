import Navigation from '@/components/Navigation';
import MysteryBoxSection from '@/components/MysteryBoxSection';

export default function MysteryBoxesPage() {
    return (
        <main className="min-h-screen bg-[var(--synapse-warm-bg)]">
            <Navigation />
            <div className="pt-24">
                <MysteryBoxSection />
            </div>
        </main>
    );
}
