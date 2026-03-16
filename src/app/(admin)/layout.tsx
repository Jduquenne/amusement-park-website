const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="p-8">{children}</main>
        </div>
    );
};

export default AdminLayout;
