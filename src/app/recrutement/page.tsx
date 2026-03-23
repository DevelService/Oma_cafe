import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Kicker } from "@/components/ui/Kicker";
import { PageContainer } from "@/components/ui/PageContainer";
import { ShellSection } from "@/components/ui/ShellSection";

const postes = ["Barista", "Cuisine", "Pâtisserie"];

export default function RecrutementPage() {
  return (
    <PageContainer className="space-y-6">
      <ShellSection className="text-center">
        <Kicker>On recrute</Kicker>
        <h1 className="mt-3 font-display text-5xl leading-[0.94] sm:text-6xl">
          Rejoindre l&apos;équipe Oma Café
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed sm:text-xl">
          Nous cherchons des personnes motivées, souriantes et bienveillantes
          pour faire vivre le café au quotidien. Si vous aimez le travail
          d&apos;équipe et le sens du service, envoyez-nous votre candidature.
        </p>
      </ShellSection>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-3xl p-6 sm:p-8">
          <Kicker className="text-[0.62rem]">Profil recherché</Kicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Esprit d&apos;équipe et sens du détail
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Nous cherchons des profils fiables, souriants et autonomes, capables
            de garder une vraie qualité de service pendant les rushs.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Chip>CDI / CDD</Chip>
            <Chip>Temps plein</Chip>
            <Chip>Temps partiel</Chip>
          </div>
        </Card>
        <article className="rounded-3xl border border-(--oma-green)/20 bg-(--oma-green) p-6 text-(--oma-paper) sm:p-8">
          <Kicker className="text-(--oma-paper) text-[0.62rem]">
            Ce que nous offrons
          </Kicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Un cadre sain et formateur
          </h2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-(--oma-cream-soft)">
            <li>Formation café et service continue</li>
            <li>Équipe attentive et progression claire</li>
            <li>Planning anticipé et ambiance bienveillante</li>
          </ul>
        </article>
      </div>

      <Card className="rounded-3xl p-6 sm:p-8">
        <h2 className="font-display text-4xl">Postes à pourvoir</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {postes.map((poste) => (
            <li
              key={poste}
              className="rounded-full border border-(--oma-green)/40 bg-(--oma-paper) px-4 py-2 text-sm font-semibold"
            >
              {poste}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-base leading-relaxed sm:text-lg">
          Temps plein, temps partiel ou jobs étudiants.
        </p>
        <p className="mt-2 text-base leading-relaxed sm:text-lg">
          Lieu: 64 rue du Mirail, Bordeaux
        </p>
        <p className="mt-2 text-base leading-relaxed sm:text-lg">
          Contact:{" "}
          <a href="mailto:contact@omacafe.fr" className="underline">
            contact@omacafe.fr
          </a>
        </p>
      </Card>
    </PageContainer>
  );
}
