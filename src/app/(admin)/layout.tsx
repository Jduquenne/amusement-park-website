interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="p-8">{children}</main>
        </div>
    );
};

export default AdminLayout;
