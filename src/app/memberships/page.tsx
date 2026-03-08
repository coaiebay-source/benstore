import Navigation from '@/components/Navigation';
import MembershipSection from '@/components/MembershipSection';

export default function MembershipsPage() {
    return (
        <main className="min-h-screen bg-[var(--synapse-warm-bg)]">
            <Navigation />
            <div className="pt-24">
                <MembershipSection />
            </div>
        </main>
    );
}
