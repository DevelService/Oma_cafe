const valeurs = [
  {
    titre: "Bienveillance",
    texte: "Un accueil simple, humain, sans pretention.",
  },
  {
    titre: "Authenticite",
    texte: "Des produits de saison et une cuisine artisanale.",
  },
  {
    titre: "Transmission",
    texte: "Un lieu pense comme un pont entre generations.",
  },
];

export default function NotreHistoirePage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <div className="oma-shell grid gap-10 rounded-4xl border border-(--oma-green)/20 p-6 sm:p-9 md:grid-cols-2 md:items-center">
        <article className="space-y-6">
          <p className="oma-kicker">Oma cafe Bordeaux</p>
          <h1 className="font-display text-5xl leading-[0.94] sm:text-6xl">
            Une aventure mere-fille, un lieu de vie
          </h1>
          <p className="text-lg leading-relaxed">
            Oma Cafe est ne d&apos;une envie simple: creer un cafe de quartier ou
            l&apos;on se sent bien, a tout age. Un lieu d&apos;echange, de douceur et de
            rencontres dans le centre de Bordeaux.
          </p>
          <p className="text-lg leading-relaxed">
            Chaque detail compte: le cafe, la cuisine, la relation client, le
            rythme du lieu. Nous faisons grandir Oma pas a pas, avec exigence et
            beaucoup de coeur.
          </p>
          <div className="rounded-2xl border border-(--oma-green)/24 bg-(--oma-paper)/80 p-4">
            <p className="oma-kicker text-[0.62rem]">Notre adresse</p>
            <p className="mt-2">64 rue du Mirail, Bordeaux</p>
          </div>
        </article>
        <div className="mx-auto w-full max-w-md rounded-[1.8rem] border border-(--oma-green)/20 bg-(--oma-paper)/90 p-6 shadow-[0_20px_40px_rgb(37_56_47/14%)]">
          <p className="oma-kicker">Depuis 2022</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95]">
            Une maison de quartier
          </h2>
          <p className="mt-4 leading-relaxed">
            Nous construisons un lieu qui melange artisanat, hospitalite et
            culture cafe. Notre ambition: faire simple, beau et bon chaque jour.
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
          <article key={valeur.titre} className="oma-card rounded-3xl p-6">
            <p className="oma-kicker text-[0.62rem]">{valeur.titre}</p>
            <p className="mt-3 text-lg leading-relaxed">{valeur.texte}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
