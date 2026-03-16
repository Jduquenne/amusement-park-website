import Header from "./Header";
import Footer from "./Footer";

interface GuestLayoutProps {
    children: React.ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
        </>
    );
};

export default GuestLayout;
