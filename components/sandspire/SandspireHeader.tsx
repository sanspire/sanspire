import Link from "next/link";

const navLinkClass =
  "relative text-[12px] font-normal capitalize tracking-[0.12px] text-white/90 transition-colors duration-200 after:pointer-events-none after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:ease-out hover:text-white hover:after:w-full";

export const sandspireNavLinks: { label: string; href: string }[] = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SandspireHeaderProps = {
  /** Primary CTA in the bar (defaults to dedicated contact page). */
  ctaHref?: string;
};

export function SandspireHeader({ ctaHref = "/contact" }: SandspireHeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-[54px] bg-gradient-to-b from-[#141414]/75 to-[#0d0d0d]/65 px-5 backdrop-blur-[6px] lg:px-7">
      <div className="mx-auto flex h-full w-full max-w-[1220px] items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="transition-opacity duration-200 hover:opacity-80 active:opacity-70"
        >
          <img src="/logos/sandspire.svg" alt="Sandspire" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center justify-center gap-[38px] md:flex">
          {sandspireNavLinks.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaHref}
          className="inline-flex h-9 shrink-0 items-center rounded-full bg-[var(--background)] px-5 text-[12px] font-medium text-[var(--foreground)] shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf3e8]/60"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
