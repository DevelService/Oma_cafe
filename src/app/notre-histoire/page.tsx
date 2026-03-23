import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { PageContainer } from "@/components/ui/PageContainer";

const valeurs = [
  {
    titre: "Bienveillance",
    texte: "Un accueil simple, humain, sans prétention.",
  },
  {
    titre: "Authenticité",
    texte: "Des produits de saison et une cuisine artisanale.",
  },
  {
    titre: "Transmission",
    texte: "Un lieu pensé comme un pont entre générations.",
  },
];

export default function NotreHistoirePage() {
  return (
    <PageContainer className="space-y-6">
      <div className="oma-shell grid gap-10 rounded-4xl border border-(--oma-green)/20 p-6 sm:p-9 md:grid-cols-2 md:items-center">
        <article className="space-y-6">
          <Kicker>Oma Café Bordeaux</Kicker>
          <h1 className="font-display text-5xl leading-[0.94] sm:text-6xl">
            Une aventure mère-fille, un lieu de vie
          </h1>
          <p className="text-lg leading-relaxed">
            Oma Café est né d&apos;une envie simple: créer un café de quartier où
            l&apos;on se sent bien, à tout âge. Un lieu d&apos;échange, de douceur et de
            rencontres dans le centre de Bordeaux.
          </p>
          <p className="text-lg leading-relaxed">
            Chaque détail compte: le café, la cuisine, la relation client, le
            rythme du lieu. Nous faisons grandir Oma pas à pas, avec exigence et
            beaucoup de cœur.
          </p>
          <div className="rounded-2xl border border-(--oma-green)/24 bg-(--oma-paper)/80 p-4">
            <Kicker className="text-[0.62rem]">Notre adresse</Kicker>
            <p className="mt-2">64 rue du Mirail, Bordeaux</p>
          </div>
        </article>
        <div className="mx-auto w-full max-w-md rounded-[1.8rem] border border-(--oma-green)/20 bg-(--oma-paper)/90 p-6 shadow-[0_20px_40px_rgb(37_56_47/14%)]">
          <Kicker>Depuis 2022</Kicker>
          <h2 className="mt-3 font-display text-4xl leading-[0.95]">
            Une maison de quartier
          </h2>
          <p className="mt-4 leading-relaxed">
            Nous construisons un lieu qui mélange artisanat, hospitalité et
            culture café. Notre ambition: faire simple, beau et bon chaque jour.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-cream-soft)/65 p-3">
              <p className="text-3xl font-display leading-none">120+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em]">
                Brunchs / semaine
              </p>
            </div>
            <div className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-cream-soft)/65 p-3">
              <p className="text-3xl font-display leading-none">7/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em]">
                Accueil local
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {valeurs.map((valeur) => (
          <Card key={valeur.titre} className="rounded-3xl p-6">
            <Kicker className="text-[0.62rem]">{valeur.titre}</Kicker>
            <p className="mt-3 text-lg leading-relaxed">{valeur.texte}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
