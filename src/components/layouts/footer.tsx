import Link from "next/link";

import { SOCIAL_MEDIA } from "@/constants/social-media";
export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-1 mx-auto divide-x max-w-container-max md:grid-cols-4 border-x">
      <div className="flex flex-col justify-between col-span-1 p-6 md:p-12">
        <div className="text-3xl tracking-tighter uppercase font-heading md:text-4xl">
          {/* {PORTFOLIO.brand} */}
          codur.dev
        </div>
        <div className="mt-8 font-mono text-xs leading-relaxed uppercase text-muted-foreground">
          STATUS: OPERATIONAL
          <br />
          ENGINEER: ONLINE
        </div>
      </div>

      <div className="flex flex-col justify-between col-span-1 p-6 md:col-span-2 md:p-12">
        <span className="block mb-8 modular-label">[ 10 // CONNECT ]</span>
        <div className="grid grid-cols-2 gap-8">
          {SOCIAL_MEDIA.map((social) => {
            const isExternal = social.href.startsWith("http");
            return (
              <Link
                key={social.title}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="border-b-2 border-foreground pb-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-foreground/80"
              >
                {social.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-end col-span-1 p-6 md:p-12">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          © {currentYear} codur.dev.
          <br />
          BUILT FOR ABSOLUTE PRECISION.
        </p>
      </div>
    </footer>
  );
}
