import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
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
  title: "Oma Cafe - Bordeaux",
  description:
    "Oma Cafe a Bordeaux: cafe de quartier, brunch, patisseries maison et boissons de saison au 64 rue du Mirail.",
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
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
          <nav className="oma-shell mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-(--oma-green)/20 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo.png"
                alt="Logo Oma Cafe"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-(--oma-green)/25 bg-(--oma-paper) object-cover"
                priority
              />
              <Link href="/" className="font-display text-3xl leading-none sm:text-4xl">
                Oma Cafe
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-cta rounded-full border border-(--oma-green)/20 bg-(--oma-paper)/70 px-3 py-1.5 uppercase hover:-translate-y-0.5"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:contact@omacafe.fr"
                className="font-cta rounded-full bg-(--oma-cocoa) px-3 py-1.5 font-semibold uppercase text-(--oma-paper) hover:-translate-y-0.5"
              >
                Reserver
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1 px-4 pb-8 pt-6 sm:px-6 sm:pt-8">{children}</main>
        <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="oma-shell mx-auto grid w-full max-w-6xl gap-6 rounded-[1.75rem] border border-(--oma-green)/20 px-5 py-6 text-sm sm:grid-cols-3 sm:px-6">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/Logo.png"
                  alt="Logo Oma Cafe"
                  width={30}
                  height={30}
                  className="h-8 w-8 rounded-full border border-(--oma-green)/20 bg-(--oma-paper) object-cover"
                />
                <p className="font-display text-2xl">Oma Cafe</p>
              </div>
              <p className="mt-2 leading-relaxed">
                Coffee house de quartier, cuisine maison et rythme doux au coeur
                de Bordeaux.
              </p>
            </div>
            <div>
              <p className="oma-kicker">Infos pratiques</p>
              <p className="mt-3 leading-relaxed">
                64 rue du Mirail, 33000 Bordeaux
                <br />
                Mar - Dim, 8h30 - 19h00
              </p>
            </div>
            <div>
              <p className="oma-kicker">Contact</p>
              <p className="mt-3 leading-relaxed">
                contact@omacafe.fr
                <br />
                @omacafe.bordeaux
              </p>
            </div>
            <p className="sm:col-span-3 text-xs uppercase tracking-widest opacity-70">
              © 2026 Oma Cafe - Tous droits reserves.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}


