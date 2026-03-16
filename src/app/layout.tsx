import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserratBlack = Montserrat({
  variable: "--font-montserrat-black",
  weight: "900",
  subsets: ["latin"],
});

const ralewayRegular = Raleway({
  variable: "--font-raleway-regular",
  weight: "400",
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

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="fr">
      <body className={`${montserratBlack.variable} ${ralewayRegular.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default AppLayout;
