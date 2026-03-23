import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";

type MenuItem = {
  nom: string;
  prix: string;
};

type MenuBlockProps = {
  titre: string;
  items: MenuItem[];
};

export function MenuBlock({ titre, items }: MenuBlockProps) {
  return (
    <Card className="rounded-3xl p-6">
      <Kicker className="text-[0.6rem]">Sélection maison</Kicker>
      <h2 className="mt-3 font-display text-3xl leading-tight">{titre}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item.nom}
            className="flex items-end justify-between gap-5 border-b border-(--oma-green)/14 pb-2"
          >
            <span className="text-lg">{item.nom}</span>
            <span className="text-lg font-semibold">{item.prix}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
