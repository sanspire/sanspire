import { ScrollReveal } from "@/components/sandspire/ScrollReveal";

export function CaseStudies() {
  const cases = [
    {
      title: "3 Fils",
      description: "Award-winning Asian restaurant.",
      imageSrc: "/images/projects/3fils/3fils_img.png",
    },
    {
      title: "Brix Journey",
      description: "Cafe with a curated dessert dining experience.",
      imageSrc: "/images/projects/brixjourney/brixjourney_img.png",
    },
    {
      title: "Slrp",
      description:
        "Japanese restaurant combining quality ingredients with a casual dining experience.",
      imageSrc: "/images/projects/slrp/slrp_img.png",
    },
  ];

  return (
    <section
      id="work"
      className="relative z-10 w-full scroll-mt-8 rounded-tl-[70px] rounded-tr-[70px] bg-white px-6 py-14 text-[#0d0d0d] lg:px-10 lg:py-20 xl:px-[72px]"
    >
      <div className="mx-auto flex w-full max-w-[1016px] flex-col items-center gap-14 lg:gap-[4.5rem]">
        <ScrollReveal className="w-full">
          <h2 className="text-center font-[family-name:var(--font-body)] text-[clamp(1.65rem,3.4vw,2.45rem)] font-light leading-[1.15] tracking-[-0.02em] text-[#0d0d0d]">
            Crafting legacy for teams that scale
          </h2>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-10 lg:gap-[4.5rem]">
          {cases.map((c, idx) => (
            <ScrollReveal key={c.title} className="w-full" delay={0.06 + idx * 0.1}>
              <article className="group/case grid items-center gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-8">
              <div className="w-full">
                <div className="overflow-hidden rounded-[20px] border border-black/15 bg-black/20 p-1 shadow-[0_5px_14px_rgba(0,0,0,0.14)] transition-[transform,box-shadow] duration-300 ease-out group-hover/case:-translate-y-0.5 group-hover/case:shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                  <div className="overflow-hidden rounded-[17px] bg-[#d7cec0]">
                    <img
                      src={c.imageSrc}
                      alt={`${c.title} preview`}
                      className="aspect-[3/2] w-full object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/case:scale-[1.03] group-hover/case:brightness-105 lg:min-h-[320px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-h-[200px] flex-col justify-center lg:min-h-[320px]">
                <h3 className="font-[family-name:var(--font-body)] text-[clamp(1.5rem,3.2vw,2.2rem)] font-light leading-tight tracking-[-0.02em] text-[#0d0d0d]">
                  {c.title}
                </h3>
                <p className="mt-4 max-w-[400px] text-[16px] font-normal leading-[1.55] text-[#8a837b]">
                  {c.description}
                </p>

                <a
                  href="#contact"
                  className="group/btn mt-5 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-[#242424] pl-1 pr-4 text-[11px] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#2e2e2e] hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] active:translate-y-0 active:scale-[0.98]"
                >
                  <span className="inline-flex h-7 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="2.4" />
                    </svg>
                  </span>
                  Read More
                </a>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
