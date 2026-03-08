import Navigation from '@/components/Navigation';
import AdminDashboard from '@/components/AdminDashboard';

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-[var(--synapse-warm-bg)]">
            <Navigation />
            <div className="pt-24 pb-24">
                <AdminDashboard />
            </div>
        </main>
    );
}
