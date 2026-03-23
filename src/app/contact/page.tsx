import { Card } from "@/components/ui/Card";
import { CtaAnchor } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { PageContainer } from "@/components/ui/PageContainer";
import { ShellSection } from "@/components/ui/ShellSection";

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="grid gap-6 md:grid-cols-2">
        <ShellSection className="border-(--oma-green)/24 p-8 sm:p-10">
          <Kicker>Contact</Kicker>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
            Venir chez Oma
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            Pour une réservation de groupe, une candidature ou une question,
            écrivez-nous par email ou sur Instagram.
          </p>
          <div className="mt-8 space-y-3 rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/85 p-4 text-lg">
            <p className="leading-relaxed">
              Email:
              {" "}
              <a className="underline" href="mailto:contact@omacafe.fr">
                contact@omacafe.fr
              </a>
            </p>
            <p className="leading-relaxed">
              Instagram:
              {" "}
              <a
                className="underline"
                href="https://www.instagram.com/omacafe.bordeaux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @omacafe.bordeaux
              </a>
            </p>
          </div>
        </ShellSection>

        <Card className="rounded-4xl p-8 sm:p-10">
          <h2 className="font-display text-4xl">Infos pratiques</h2>
          <div className="mt-6 space-y-4 text-lg">
            <p className="leading-relaxed">
              <span className="font-semibold">Adresse:</span> 64 rue du Mirail,
              33000 Bordeaux
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Horaires:</span>
              <br />
              Mardi - Vendredi: 8h30 - 18h30
              <br />
              Samedi - Dimanche: 9h00 - 19h00
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Accès:</span> Tram B, arrêt Musée
              d&apos;Aquitaine puis 5 min à pied.
            </p>
          </div>
          <CtaAnchor
            href="https://maps.google.com/?q=64+rue+du+Mirail+33000+Bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="mt-7"
          >
            Ouvrir l&apos;itinéraire
          </CtaAnchor>
        </Card>
      </div>
    </PageContainer>
  );
}
