"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { title: "home", href: "/" },
  { title: "projects", href: "/projects" },
  { title: "about", href: "/about" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b backdrop-blur-md",
        "px-3 md:px-5 xl:px-10"
      )}
    >
      <div
        className={cn(
          "w-full mx-auto max-w-container-max",
          "grid grid-cols-2 md:grid-cols-4",
          "border-x h-14 divide-x"
        )}
      >
        <div className="flex items-center col-span-1 px-4 md:col-span-2">
          <Link
            href="/"
            className="text-2xl tracking-tight uppercase font-heading md:text-3xl md:leading-8"
          >
            codur.dev
          </Link>
        </div>

        <nav
          aria-label="Primary"
          className="items-center justify-center hidden gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-colors text-foreground",
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end px-4">
          <Link
            href="/contact"
            className="px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors bg-foreground text-background hover:bg-foreground/70"
          >
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
