import Header from "../ui/Header";

const GuestLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
        </>
    );
};

export default GuestLayout;
