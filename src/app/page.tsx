import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { CtaLink } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { PageContainer } from "@/components/ui/PageContainer";
import { ShellSection } from "@/components/ui/ShellSection";

const atouts = [
  {
    titre: "Café de spécialité",
    texte: "Extraction précise, grains choisis et boissons signatures.",
  },
  {
    titre: "Brunch & cuisine maison",
    texte: "Une carte courte, généreuse, préparée avec des produits de saison.",
  },
  {
    titre: "Lieu de vie",
    texte: "Un espace calme et lumineux pour se retrouver ou travailler.",
  },
];

export default function Home() {
  return (
    <PageContainer className="space-y-8">
      <ShellSection className="relative overflow-hidden rounded-[2.2rem] p-6 sm:p-9 md:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-(--oma-green)/15" />
        <div className="absolute -left-14 top-16 h-24 w-24 rounded-full bg-(--oma-cocoa)/12" />
        <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <Kicker>Bordeaux - 64 rue du Mirail</Kicker>
            <h1 className="oma-title text-5xl sm:text-7xl">
              Un café vivant, élégant et chaleureux.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              Oma Café propose des cafés de spécialité, une cuisine de saison et
              un service attentif dans un cadre premium mais accessible.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink href="/carte" variant="primary" size="md">
                Voir la carte
              </CtaLink>
              <CtaLink href="/contact" variant="light" size="md" className="border-(--oma-green)/50">
                Nous trouver
              </CtaLink>
            </div>
          </div>
          <Card className="rounded-[1.8rem] p-6">
            <Kicker>Cette semaine</Kicker>
            <h2 className="mt-3 font-display text-4xl leading-[0.95]">
              Brunch signature
            </h2>
            <p className="mt-4 leading-relaxed">
              Assiette salée maison, toast de saison, café filtré ou cappuccino
              et une douceur du jour.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Mardi - vendredi</Chip>
              <Chip>8h30 - 18h30</Chip>
              <Chip>Sam - dim 9h - 19h</Chip>
            </div>
            <p className="mt-6 rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/72 p-4 text-sm leading-relaxed">
              Réservez les grands groupes par email pour privatisations, brunchs
              d&apos;équipe ou événements doux.
            </p>
          </Card>
        </div>
      </ShellSection>

      <section className="grid gap-4 md:grid-cols-3">
        {atouts.map((item) => (
          <Card key={item.titre} className="rounded-3xl p-6">
            <Kicker className="text-[0.62rem]">Expérience Oma</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{item.titre}</h2>
            <p className="mt-3 text-lg leading-relaxed">{item.texte}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-[1.8rem] p-6 sm:p-8">
          <Kicker>Story</Kicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Une histoire de famille
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Oma est une aventure mère-fille imaginée comme un café de proximité:
            beau, bon, vivant, et toujours attentif à l&apos;accueil.
          </p>
          <CtaLink href="/notre-histoire" variant="light" size="pill" className="mt-5 border-(--oma-green)/40">
            Notre histoire
          </CtaLink>
        </Card>
        <article className="relative overflow-hidden rounded-[1.8rem] border border-(--oma-green)/20 bg-(--oma-green) p-6 text-(--oma-paper) sm:p-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-(--oma-paper)/25" />
          <Kicker className="text-(--oma-paper)">Équipe</Kicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Recrutement en cours
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-(--oma-cream-soft)">
            Barista, cuisine, pâtisserie: rejoignez une équipe bienveillante et
            motivée pour faire grandir Oma Café.
          </p>
          <CtaLink href="/recrutement" variant="onDark" size="pill" className="mt-5">
            Voir les offres
          </CtaLink>
        </article>
      </section>

    </PageContainer>
  );
}
