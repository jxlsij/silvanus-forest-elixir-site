const noteFamilies = [
  {
    title: "Canopy",
    index: "01",
    accent: "top accord",
    notes: ["Wild bergamot rind", "Siberian pine needle", "Rain-bitten spruce"],
    copy: "The first lift is cold and green, like crushing needles between gloved fingers before dawn."
  },
  {
    title: "Understory",
    index: "02",
    accent: "heart accord",
    notes: ["Mineral vetiver", "Cedar smoke", "Velvet moss"],
    copy: "A darker middle opens slowly: resin, wet bark, and the hush of soil below old roots."
  },
  {
    title: "Ember",
    index: "03",
    accent: "base accord",
    notes: ["Aged oud", "Dark amber tincture", "Black musk"],
    copy: "The drydown burns close to skin, warm and animalic, with a fine amber afterglow."
  }
];

export default function FragranceNotes() {
  return (
    <section id="notes" data-drift-section className="relative overflow-hidden bg-[#0b0f0c] px-4 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute left-[-14rem] top-24 h-[32rem] w-[32rem] rounded-full bg-pine/28 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-18rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-resin/18 blur-[130px]" />

      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-y border-bone/12 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-16">
          <div className="gsap-reveal">
            <p className="micro-label mb-5 text-gold/64">Olfactive architecture</p>
            <h2 className="text-balance font-display text-[clamp(3.05rem,16vw,10.4rem)] font-medium uppercase leading-[0.76] tracking-[0.035em] text-bone sm:tracking-[0.06em]">
              Three
              <span className="block italic text-gold/82">terrains</span>
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <p className="gsap-reveal max-w-[34rem] text-lg leading-relaxed text-bone/62">
              SILVANUS is built like a walk into conifer shadow: bright sap at the perimeter, mineral green in the center, and a smoked amber base that stays behind after the bottle disappears.
            </p>
            <div className="gsap-reveal glass-edge p-5">
              <div className="flex items-end justify-between gap-8">
                <span className="font-display text-6xl italic leading-none text-bone/84">18%</span>
                <span className="micro-label max-w-[9rem] text-right text-bone/44">
                  extrait concentration
                </span>
              </div>
              <div className="mt-5 h-px bg-bone/12" />
              <p className="micro-label mt-5 text-gold/62">
                macerated in black glass for 47 days
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.02fr_0.98fr_1.08fr]">
          {noteFamilies.map((family, familyIndex) => (
            <article
              key={family.title}
              data-drift={familyIndex === 1 ? "right" : "left"}
              className="gsap-reveal group min-h-[28rem] border border-bone/12 bg-bone/[0.035] p-6 transition duration-500 hover:border-gold/34 hover:bg-bone/[0.055] md:p-8"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <span className="micro-label text-gold/64">{family.accent}</span>
                  <h3 className="mt-4 font-display text-[clamp(3rem,14vw,5.8rem)] font-medium italic leading-[0.82] text-bone">
                    {family.title}
                  </h3>
                </div>
                <span className="font-wide text-[0.64rem] font-medium uppercase tracking-[0.18em] text-bone/32">{family.index}</span>
              </div>

              <p className="mt-12 max-w-[25rem] text-sm leading-relaxed text-bone/54">{family.copy}</p>

              <ul className="mt-12 space-y-4">
                {family.notes.map((note) => (
                  <li key={note} className="flex items-center justify-between gap-5 border-t border-bone/10 pt-4">
                    <span className="font-wide text-[0.58rem] font-medium uppercase tracking-[0.16em] text-bone/58">{note}</span>
                    <span className="h-2 w-2 rounded-full bg-gold/54 transition duration-500 group-hover:scale-150" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
