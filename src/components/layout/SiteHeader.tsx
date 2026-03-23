import Image from "next/image";
import Link from "next/link";
import { CtaAnchor, CtaLink } from "@/components/ui/Cta";

type SiteHeaderProps = {
  navigation: Array<{ href: string; label: string }>;
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="oma-shell mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-(--oma-green)/20 px-4 py-3 sm:px-6">
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
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm">
          {navigation.map((item) => (
            <CtaLink key={item.href} href={item.href} variant="nav" size="sm">
              {item.label}
            </CtaLink>
          ))}
          <CtaAnchor href="mailto:contact@omacafe.fr" variant="primary" size="sm">
            Réserver
          </CtaAnchor>
        </div>
      </nav>
    </header>
  );
}
