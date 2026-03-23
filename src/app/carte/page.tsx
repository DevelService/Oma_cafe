const boissonsChaudes = [
  { nom: "Espresso", prix: "2,20€" },
  { nom: "Double espresso", prix: "3,80€" },
  { nom: "Cafe filtre", prix: "3,50€" },
  { nom: "Cappuccino", prix: "4,20€" },
  { nom: "Latte", prix: "4,50€" },
  { nom: "Matcha latte", prix: "4,90€" },
];

const cuisineEtDouceurs = [
  { nom: "Granola maison", prix: "8,50€" },
  { nom: "Tartine de saison", prix: "10,50€" },
  { nom: "Cake du jour", prix: "4,20€" },
  { nom: "Cookie Oma", prix: "3,80€" },
  { nom: "Part de gateau", prix: "5,50€" },
];

const boissonsFraiches = [
  { nom: "Iced latte", prix: "4,80€" },
  { nom: "Cold brew", prix: "4,60€" },
  { nom: "The glace maison", prix: "4,30€" },
  { nom: "Jus presse", prix: "5,20€" },
];

function BlocCarte({
  titre,
  items,
}: {
  titre: string;
  items: { nom: string; prix: string }[];
}) {
  return (
    <article className="oma-card rounded-3xl p-6">
      <p className="oma-kicker text-[0.6rem]">Selection maison</p>
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
    </article>
  );
}

export default function CartePage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <div className="oma-shell rounded-4xl border border-(--oma-green)/20 p-6 sm:p-8">
        <p className="oma-kicker">Carte Oma Cafe</p>
        <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">
          Boissons, brunch et douceurs
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          Une carte courte et evolutive selon la saison. Preparations maison,
          options vegetales et sourcing exigeant.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <BlocCarte titre="Boissons chaudes" items={boissonsChaudes} />
        <BlocCarte titre="Cuisine et douceurs" items={cuisineEtDouceurs} />
        <BlocCarte titre="Boissons fraiches" items={boissonsFraiches} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <p className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/78 p-4 text-sm leading-relaxed">
          Les prix et la selection peuvent evoluer selon la saison.
        </p>
        <p className="rounded-2xl border border-(--oma-green)/20 bg-(--oma-paper)/78 p-4 text-sm leading-relaxed">
          Allergies ou intolerances: parlez-en a notre equipe, nous vous guidons.
        </p>
      </div>
    </section>
  );
}
