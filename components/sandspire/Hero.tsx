import Link from "next/link";

import { LogoMarquee } from "@/components/sandspire/LogoMarquee";
import { ScrollReveal } from "@/components/sandspire/ScrollReveal";

const heroNavLinkClass =
  "relative text-[12px] font-normal capitalize tracking-[0.12px] text-white/90 transition-colors duration-200 after:pointer-events-none after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:ease-out hover:text-white hover:after:w-full";

const navLinks: { label: string; href: string }[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const heroServices: { num: string; label: string }[] = [
  { num: "#01", label: "Brand Strategy" },
  { num: "#02", label: "Web Design" },
  { num: "#03", label: "Social Media" },
  { num: "#04", label: "AI Automation" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-black">
      <div className="relative w-full overflow-hidden">
        <div className="relative isolate h-[93vh] min-h-[680px] overflow-hidden rounded-b-[42px] [transform:translateZ(0)]">
          <div className="absolute inset-0 z-0">
            <video
              className="block h-full w-full rounded-b-[42px] object-cover"
              src="/videos/HeroVideo-2%20(1).mp4"
              poster="/images/HeroVideoFallback.png"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute bottom-0 right-0 z-[1] h-full w-full bg-gradient-to-b from-black/72 via-black/48 to-black/20" />

          <div className="sticky top-0 z-30 h-[50px] bg-gradient-to-b from-[#141414]/65 to-[#0d0d0d]/55 px-5 backdrop-blur-[6px] lg:px-7">
            <div className="mx-auto flex h-full max-w-[1220px] items-center justify-between gap-5">
              <Link
                href="/"
                aria-label="Sandspire home"
                className="transition-opacity duration-200 hover:opacity-80 active:opacity-70"
              >
                <img
                  src="/logos/sandspire.svg"
                  alt="Sandspire"
                  className="h-7 w-auto"
                  loading="eager"
                />
              </Link>

              <nav className="hidden items-center justify-center gap-[38px] md:flex">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className={heroNavLinkClass}>
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="/contact"
                className="inline-flex h-9 items-center rounded-full bg-[var(--background)] px-5 text-[12px] font-medium text-[var(--foreground)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf3e8]/50"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Figma 153:558 structure — copy aligned to Sandspire (z-10 so overlays below don’t cover type) */}
          <div className="relative z-10 mx-auto flex h-full max-w-[1220px] flex-col justify-end px-4 pb-10 sm:px-6 sm:pb-12 lg:px-6 lg:pb-16">
            <ScrollReveal className="w-full" y={24} delay={0.04}>
              <div className="flex w-full flex-col gap-14 lg:gap-[5rem]">
              <div className="flex w-full flex-col items-start gap-5 lg:flex-row lg:gap-5">
                <div className="flex min-w-0 flex-1 flex-col items-start">
                  <p className="font-[family-name:var(--font-body)] text-[clamp(1rem,2vw,1.65rem)] font-medium leading-[1.15] text-white">
                    Hey, we&apos;re a
                  </p>
                  <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(2.35rem,9vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-white">
                    Creative Studio
                  </h1>
                </div>

                <div className="flex w-full min-w-0 max-w-[498px] flex-col gap-4 pt-1 lg:pt-2.5">
                  <div className="font-[family-name:var(--font-body)] text-[clamp(1rem,1.85vw,1.6rem)] font-semibold leading-[1.2] text-white">
                    <p className="mb-0">Great brands should feel</p>
                    <p>effortless.</p>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-[14px] font-normal leading-[1.7] text-white/95 md:text-[15px]">
                    From strategy to launch, we create brands, experiences, and workflows that work
                    without friction—so your customers never have to fight the experience.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-wrap items-start justify-between gap-x-6 gap-y-8 text-white">
                {heroServices.map(({ num, label }) => (
                  <div key={label} className="flex min-w-[140px] flex-col gap-1.5">
                    <p className="font-[family-name:var(--font-body)] text-sm font-semibold leading-tight">
                      {num}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-sm font-normal leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[2] rounded-b-[42px] ring-1 ring-white/15" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 rounded-b-[42px] bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <ScrollReveal className="mt-2 w-full" y={18} delay={0.08}>
          <LogoMarquee />
        </ScrollReveal>
      </div>
    </header>
  );
}
