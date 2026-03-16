import GuestLayout from "@/components/layout/GuestLayout";

interface GuestsGroupLayoutProps {
    children: React.ReactNode;
}

const GuestsGroupLayout = ({ children }: GuestsGroupLayoutProps) => {
    return <GuestLayout>{children}</GuestLayout>;
};

export default GuestsGroupLayout;
