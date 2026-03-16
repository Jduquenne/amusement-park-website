import GuestLayout from "@/components/layout/GuestLayout";

const GuestsGroupLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return <GuestLayout>{children}</GuestLayout>;
};

export default GuestsGroupLayout;
