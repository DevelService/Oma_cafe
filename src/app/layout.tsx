import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const providenceSansProBold = localFont({
  src: "./fonts/ProvidenceSans-Bold.ttf",
  variable: "--font-providence",
  display: "swap",
});

const hossRoundXNarrowDisplay = localFont({
  src: "./fonts/Hoss-Round-XNarrow-Heavy.otf",
  variable: "--font-hoss-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oma Café - Bordeaux",
  description:
    "Oma Café à Bordeaux: café de quartier, brunch, pâtisseries maison et boissons de saison au 64 rue du Mirail.",
  icons: {
    icon: "/oma-logo.png",
    shortcut: "/oma-logo.png",
    apple: "/oma-logo.png",
  },
};

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/carte", label: "Carte" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${providenceSansProBold.variable} ${hossRoundXNarrowDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-(--oma-green)">
        <SiteHeader navigation={navigation} />
        <main className="flex-1 px-4 pb-8 pt-6 sm:px-6 sm:pt-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}


