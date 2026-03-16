import Header from "../ui/Header";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
        </>
    );
};

export default GuestLayout;
