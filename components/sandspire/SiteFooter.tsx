import { ScrollReveal } from "@/components/sandspire/ScrollReveal";

export function SiteFooter() {
  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#work" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer id="footer" className="w-full bg-[#0D0D0D] px-6 py-[80px] text-[#FAF3E8] lg:px-0">
      <ScrollReveal className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto flex w-full max-w-[940px] flex-col justify-between gap-10 lg:h-[210px] lg:flex-row lg:gap-[320px]">
          <div className="w-full max-w-[380px] space-y-4">
            <img
              src="/logos/sandspire.svg"
              alt="Sandspire"
              className="h-10 w-auto"
              loading="lazy"
            />
            <p className="font-[family-name:var(--font-display)] text-[28px] font-light leading-[1.05] text-[#FAF3E8]">
              Great design should
              <br />
              feel invisible.
            </p>
            <p className="max-w-[380px] text-[15px] font-normal leading-[1.4] text-[#FAF3E8]">
              We are a creative agency supporting businesses from branding, all the way to automation.
            </p>
            <p className="text-[12px] text-[#BEB7B7]">© Copyright Sandspire | Design by Jabrni</p>
          </div>

          <div className="flex w-full max-w-[160px] gap-8">
            <div className="min-w-[62px]">
              <p className="text-[18px] font-light text-[#F7941D]">Menu</p>
              <ul className="mt-1 space-y-1.5 text-[12px] font-normal text-[#BEB7B7]">
                {menuLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-[#FAF3E8]"
                      href={l.href}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[68px]">
              <p className="text-[18px] font-light text-[#F7941D]">Social</p>
              <ul className="mt-1 space-y-1.5 text-[12px] font-normal text-[#BEB7B7]">
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-[#FAF3E8]"
                      href={l.href}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

