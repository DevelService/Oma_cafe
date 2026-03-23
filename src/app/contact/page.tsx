export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="oma-shell rounded-4xl border border-(--oma-green)/24 p-8 sm:p-10">
          <p className="oma-kicker">Contact</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
            Venir chez Oma
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            Pour une reservation de groupe, une candidature ou une question,
            ecrivez-nous par email ou sur Instagram.
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
        </div>

        <div className="oma-card rounded-4xl p-8 sm:p-10">
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
              <span className="font-semibold">Acces:</span> Tram B, arret Musee
              d&apos;Aquitaine puis 5 min a pied.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=64+rue+du+Mirail+33000+Bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cta mt-7 inline-block rounded-full bg-(--oma-cocoa) px-6 py-3 text-sm font-bold uppercase text-(--oma-paper)"
          >
            Ouvrir l&apos;itineraire
          </a>
        </div>
      </div>
    </section>
  );
}
