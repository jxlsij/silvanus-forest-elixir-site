const fragments = ["green glass", "amber pressure", "wet cedar", "black moss", "needle smoke", "skin heat"];

export default function EditorialStatement() {
  return (
    <section id="ritual" className="relative overflow-hidden bg-bone text-ink">
      <div data-marquee className="border-y border-ink/10 py-4">
        <div data-marquee-track className="micro-label flex w-[200%] gap-8 whitespace-nowrap text-ink/42">
          {[...fragments, ...fragments, ...fragments, ...fragments].map((fragment, index) => (
            <span key={`${fragment}-${index}`}>{fragment}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid min-h-[100dvh] max-w-[1440px] grid-cols-1 gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12 lg:py-32">
        <div className="gsap-reveal flex flex-col justify-between border-l border-ink/12 pl-5">
          <p className="micro-label max-w-[19rem] text-ink/48">
            Maison note, archived from a laboratory that never opened to daylight.
          </p>
          <p className="micro-label mt-20 text-resin/80">Batch SFE-04 / Paris</p>
        </div>

        <div className="self-center">
          <p className="gsap-reveal text-balance font-display text-[clamp(3.35rem,15vw,11rem)] font-medium italic leading-[0.82] tracking-[0.01em] text-ink sm:tracking-[0.02em]">
            Not a scent. A controlled fracture in the memory of trees.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <p className="gsap-reveal max-w-[40rem] text-lg leading-relaxed text-ink/62">
              The perfume begins as a polished object and ends as weather: splinters of bottle glass, pine resin suspended in amber, a bitter citrus spark, then the low animal warmth of musk.
            </p>
            <div className="gsap-reveal border-t border-ink/14 pt-5">
              <p className="font-display text-7xl italic leading-none text-resin">121</p>
              <p className="micro-label mt-4 text-ink/48">
                beats in the imagined film; 120 committed frames drive the live canvas sequence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
