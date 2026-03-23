import { MenuBlock } from "@/components/menu/MenuBlock";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { PageContainer } from "@/components/ui/PageContainer";
import { ShellSection } from "@/components/ui/ShellSection";

const boissonsChaudes = [
  { nom: "Espresso", prix: "2,20€" },
  { nom: "Double espresso", prix: "3,80€" },
  { nom: "Café filtré", prix: "3,50€" },
  { nom: "Cappuccino", prix: "4,20€" },
  { nom: "Latte", prix: "4,50€" },
  { nom: "Matcha latte", prix: "4,90€" },
];

const cuisineEtDouceurs = [
  { nom: "Granola maison", prix: "8,50€" },
  { nom: "Tartine de saison", prix: "10,50€" },
  { nom: "Cake du jour", prix: "4,20€" },
  { nom: "Cookie Oma", prix: "3,80€" },
  { nom: "Part de gâteau", prix: "5,50€" },
];

const boissonsFraiches = [
  { nom: "Iced latte", prix: "4,80€" },
  { nom: "Cold brew", prix: "4,60€" },
  { nom: "Thé glacé maison", prix: "4,30€" },
  { nom: "Jus pressé", prix: "5,20€" },
];

export default function CartePage() {
  return (
    <PageContainer className="space-y-6">
      <ShellSection>
        <Kicker>Carte Oma Café</Kicker>
        <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">
          Boissons, brunch et douceurs
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          Une carte courte et évolutive selon la saison. Préparations maison,
          options végétales et sourcing exigeant.
        </p>
      </ShellSection>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <MenuBlock titre="Boissons chaudes" items={boissonsChaudes} />
        <MenuBlock titre="Cuisine et douceurs" items={cuisineEtDouceurs} />
        <MenuBlock titre="Boissons fraîches" items={boissonsFraiches} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/78 p-4 text-sm leading-relaxed">
          Les prix et la sélection peuvent évoluer selon la saison.
        </Card>
        <Card className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/78 p-4 text-sm leading-relaxed">
          Allergies ou intolérances: parlez-en à notre équipe, nous vous guidons.
        </Card>
      </div>
    </PageContainer>
  );
}
