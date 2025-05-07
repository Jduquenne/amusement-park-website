import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import GuestLayout from "@/components/layout/GuestLayout";

const montserratBlack = Montserrat({
  variable: "--font-montserrat-black",
  subsets: ["latin"],
});

const ralewrayRegular = Raleway({
  variable: "--font-raleway-regular",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amusement Park - Next.js",
  description: "Application pour un parc d'attraction",
  authors: {
    name: "Jason Duquenne"
  },
  icons: {
    icon: [
      {
        url: '/favicon/light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserratBlack.variable} ${ralewrayRegular.variable} antialiased`}
      >
        <GuestLayout>{children}</GuestLayout>
      </body>
    </html>
  );
}
