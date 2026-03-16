import Header from "../ui/Header";
import Footer from "./Footer";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
        </>
    );
};

export default GuestLayout;
