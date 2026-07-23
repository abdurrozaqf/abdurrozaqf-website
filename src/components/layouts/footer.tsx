"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { SOCIAL_MEDIA } from "@/constants/social-media";
import { cn } from "@/libs/utils";

function pathnameToLabel(pathname: string) {
  if (pathname === "/") return "10";
  if (pathname === "/about") return "05";
  if (pathname === "/projects") return "07";
  return "Home";
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const label = pathnameToLabel(pathname);

  return (
    <footer className={cn("w-full", "px-3 md:px-5 xl:px-10")}>
      <section
        className={cn(
          "grid grid-cols-1 max-w-container-max md:grid-cols-4",
          "divide-y md:divide-x md:divide-y-0 border-x w-full mx-auto"
        )}
        aria-label="Footer Content"
      >
        <div className="flex flex-col justify-between col-span-1 p-6 md:p-12">
          <Link href="/" className="w-fit">
            <h1 className="text-3xl tracking-tighter uppercase font-heading md:text-4xl">
              {/* {PORTFOLIO.brand} */}
              codur.dev
            </h1>
          </Link>
          {/* <div className="mt-8 font-mono text-xs leading-relaxed uppercase text-muted-foreground">
            STATUS: OPERATIONAL
            <br />
            ENGINEER: ONLINE
          </div> */}
        </div>

        <nav
          className="flex flex-col justify-between w-full col-span-1 p-6 md:col-span-2 md:p-12"
          aria-label="Social Media Links"
        >
          <span className="block mb-8 modular-label">{`[ ${label} // CONNECT ]`}</span>
          <ul className="grid w-full grid-cols-2 gap-8">
            {SOCIAL_MEDIA.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <li
                  key={social.title}
                  className="w-full pb-2 border-b-2 border-foreground"
                >
                  <Link
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={cn(
                      "tracking-[0.2em] transition-colors hover:text-foreground/80",
                      "uppercase font-mono text-xs"
                    )}
                  >
                    {social.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <aside className="flex flex-col justify-end col-span-1 p-6 md:p-12">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            © {currentYear} codur.dev.
            <br />
            {/* BUILT FOR ABSOLUTE PRECISION. */}
          </p>
        </aside>
      </section>
    </footer>
  );
}
