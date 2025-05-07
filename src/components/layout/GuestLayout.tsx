'use client';

import Header from "../ui/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
        </>
    );
}