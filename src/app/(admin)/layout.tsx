export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* TODO: AdminSidebar ou AdminHeader */}
            <main className="p-8">{children}</main>
        </div>
    );
}
