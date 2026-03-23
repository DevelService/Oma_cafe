"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CtaAnchor, CtaLink } from "@/components/ui/Cta";

type SiteHeaderProps = {
  navigation: Array<{ href: string; label: string }>;
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="oma-shell mx-auto w-full max-w-6xl rounded-[1.75rem] border border-(--oma-green)/20 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/oma-logo.png"
              alt="Logo Oma Café"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-(--oma-green)/25 bg-(--oma-paper) object-cover"
              priority
            />
            <Link href="/" className="font-display text-3xl leading-none sm:text-4xl">
              Oma Café
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--oma-green)/25 bg-(--oma-paper)/80 sm:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-(--oma-green) transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-(--oma-green) transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-(--oma-green) transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>

          <div className="hidden flex-wrap items-center gap-2 text-xs font-medium sm:flex sm:gap-3 sm:text-sm">
            {navigation.map((item) => (
              <CtaLink key={item.href} href={item.href} variant="nav" size="sm">
                {item.label}
              </CtaLink>
            ))}
            <CtaAnchor href="mailto:contact@omacafe.fr" variant="primary" size="sm">
              Réserver
            </CtaAnchor>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-3 flex flex-col gap-2 border-t border-(--oma-green)/20 pt-3 sm:hidden"
          >
            {navigation.map((item) => (
              <CtaLink key={item.href} href={item.href} variant="nav" size="sm" className="text-center">
                {item.label}
              </CtaLink>
            ))}
            <CtaAnchor href="mailto:contact@omacafe.fr" variant="primary" size="sm" className="text-center">
              Réserver
            </CtaAnchor>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
