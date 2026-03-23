import Link from "next/link";

const atouts = [
  {
    titre: "Cafe de specialite",
    texte: "Extraction precise, grains choisis et boissons signatures.",
  },
  {
    titre: "Brunch & cuisine maison",
    texte: "Une carte courte, genereuse, preparee avec des produits de saison.",
  },
  {
    titre: "Lieu de vie",
    texte: "Un espace calme et lumineux pour se retrouver ou travailler.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8">
      <section className="oma-shell relative overflow-hidden rounded-[2.2rem] border border-(--oma-green)/20 p-6 sm:p-9 md:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-(--oma-green)/15" />
        <div className="absolute -left-14 top-16 h-24 w-24 rounded-full bg-(--oma-cocoa)/12" />
        <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <p className="oma-kicker">Bordeaux - 64 rue du Mirail</p>
            <h1 className="oma-title text-5xl sm:text-7xl">
              Un cafe vivant, elegant et chaleureux.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              Oma Cafe propose des cafes de specialite, une cuisine de saison et
              un service attentif dans un cadre premium mais accessible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/carte"
                className="font-cta rounded-full bg-(--oma-cocoa) px-6 py-3 text-sm font-bold uppercase text-(--oma-paper) hover:-translate-y-0.5"
              >
                Voir la carte
              </Link>
              <Link
                href="/contact"
                className="font-cta rounded-full border border-(--oma-green)/50 bg-(--oma-paper)/70 px-6 py-3 text-sm font-bold uppercase hover:-translate-y-0.5"
              >
                Nous trouver
              </Link>
            </div>
          </div>
          <aside className="oma-card rounded-[1.8rem] p-6">
            <p className="oma-kicker">Cette semaine</p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95]">
              Brunch signature
            </h2>
            <p className="mt-4 leading-relaxed">
              Assiette salee maison, toast de saison, cafe filtre ou cappuccino
              et une douceur du jour.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="oma-chip">Mardi - vendredi</span>
              <span className="oma-chip">8h30 - 18h30</span>
              <span className="oma-chip">Sam - dim 9h - 19h</span>
            </div>
            <p className="mt-6 rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/72 p-4 text-sm leading-relaxed">
              Reserve les grands groupes par email pour privatisations, brunchs
              d&apos;equipe ou evenements doux.
            </p>
          </aside>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {atouts.map((item) => (
          <article key={item.titre} className="oma-card rounded-3xl p-6">
            <p className="oma-kicker text-[0.62rem]">Experience Oma</p>
            <h2 className="mt-3 font-display text-3xl leading-tight">{item.titre}</h2>
            <p className="mt-3 text-lg leading-relaxed">{item.texte}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="oma-card rounded-[1.8rem] p-6 sm:p-8">
          <p className="oma-kicker">Story</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Une histoire de famille
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Oma est une aventure mere-fille imaginee comme un cafe de proximite:
            beau, bon, vivant, et toujours attentif a l&apos;accueil.
          </p>
          <Link
            href="/notre-histoire"
            className="font-cta mt-5 inline-block rounded-full border border-(--oma-green)/40 bg-(--oma-paper)/72 px-5 py-2.5 text-sm font-semibold uppercase"
          >
            Notre histoire
          </Link>
        </article>
        <article className="relative overflow-hidden rounded-[1.8rem] border border-(--oma-green)/20 bg-(--oma-green) p-6 text-(--oma-paper) sm:p-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-(--oma-paper)/25" />
          <p className="oma-kicker text-(--oma-paper)">Equipe</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Recrutement en cours
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-(--oma-cream-soft)">
            Barista, cuisine, patisserie: rejoignez une equipe bienveillante et
            motivee pour faire grandir Oma Cafe.
          </p>
          <Link
            href="/recrutement"
            className="font-cta mt-5 inline-block rounded-full border border-(--oma-paper)/50 bg-(--oma-paper)/10 px-5 py-2.5 text-sm font-semibold uppercase"
          >
            Voir les offres
          </Link>
        </article>
      </section>

      <section className="grid gap-4 rounded-[1.8rem] border border-(--oma-green)/20 bg-(--oma-cream-soft)/75 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
        <article className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/88 p-4">
          <p className="oma-kicker text-[0.6rem]">Adresse</p>
          <p className="mt-2 text-base">64 rue du Mirail, Bordeaux</p>
        </article>
        <article className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/88 p-4">
          <p className="oma-kicker text-[0.6rem]">Acces</p>
          <p className="mt-2 text-base">Tram B - Musee d&apos;Aquitaine</p>
        </article>
        <article className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/88 p-4">
          <p className="oma-kicker text-[0.6rem]">Contact</p>
          <p className="mt-2 text-base">contact@omacafe.fr</p>
        </article>
        <article className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/88 p-4">
          <p className="oma-kicker text-[0.6rem]">Instagram</p>
          <p className="mt-2 text-base">@omacafe.bordeaux</p>
        </article>
      </section>
    </div>
  );
}
