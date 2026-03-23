const postes = ["Barista", "Cuisine", "Patisserie"];

export default function RecrutementPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <div className="oma-shell rounded-4xl border border-(--oma-green)/20 p-6 text-center sm:p-8">
        <p className="oma-kicker">On recrute</p>
        <h1 className="mt-3 font-display text-5xl leading-[0.94] sm:text-6xl">
          Rejoindre l&apos;equipe Oma Cafe
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed sm:text-xl">
          Nous cherchons des personnes motivees, souriantes et bienveillantes
          pour faire vivre le cafe au quotidien. Si vous aimez le travail
          d&apos;equipe et le sens du service, envoyez-nous votre candidature.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="oma-card rounded-3xl p-6 sm:p-8">
          <p className="oma-kicker text-[0.62rem]">Profil recherche</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Esprit d&apos;equipe et sens du detail
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Nous cherchons des profils fiables, souriants et autonomes, capables
            de garder une vraie qualite de service pendant les rushs.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="oma-chip">CDI / CDD</span>
            <span className="oma-chip">Temps plein</span>
            <span className="oma-chip">Temps partiel</span>
          </div>
        </article>
        <article className="rounded-3xl border border-(--oma-green)/20 bg-(--oma-green) p-6 text-(--oma-paper) sm:p-8">
          <p className="oma-kicker text-(--oma-paper) text-[0.62rem]">
            Ce que nous offrons
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Un cadre sain et formateur
          </h2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-(--oma-cream-soft)">
            <li>Formation cafe et service continue</li>
            <li>Equipe attentive et progression claire</li>
            <li>Planning anticipe et ambiance bienveillante</li>
          </ul>
        </article>
      </div>

      <div className="oma-card rounded-3xl p-6 sm:p-8">
        <h2 className="font-display text-4xl">Postes a pourvoir</h2>
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
          Temps plein, temps partiel ou jobs etudiants.
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
      </div>
    </section>
  );
}
