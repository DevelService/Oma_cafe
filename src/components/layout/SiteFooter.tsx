import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="oma-shell mx-auto grid w-full max-w-6xl gap-6 rounded-[1.75rem] border border-(--oma-green)/20 px-5 py-6 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/oma-logo.png"
              alt="Logo Oma Café"
              width={30}
              height={30}
              className="h-8 w-8 rounded-full border border-(--oma-green)/20 bg-(--oma-paper) object-cover"
            />
            <p className="font-display text-2xl">Oma Café</p>
          </div>
          <p className="mt-2 leading-relaxed">
            Coffee house de quartier, cuisine maison et rythme doux au cœur de Bordeaux.
          </p>
        </div>
        <div>
          <Kicker>Infos pratiques</Kicker>
          <p className="mt-3 leading-relaxed">
            64 rue du Mirail, 33000 Bordeaux
            <br />
            Mar - Dim, 8h30 - 19h00
          </p>
        </div>
        <div>
          <Kicker>Contact</Kicker>
          <p className="mt-3 leading-relaxed">
            contact@omacafe.fr
            <br />
            @omacafe.bordeaux
          </p>
        </div>
        <p className="sm:col-span-3 text-xs uppercase tracking-widest opacity-70">
          © 2026 Oma Café - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
