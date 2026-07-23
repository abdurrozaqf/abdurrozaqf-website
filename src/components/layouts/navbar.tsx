"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { FoldersIcon, HomeIcon, User2Icon } from "lucide-react";
import { cn } from "@/libs/utils";

const NAV_LINKS = [
  { title: "home", href: "/" },
  { title: "projects", href: "/projects" },
  { title: "about", href: "/about" },
] as const;

function NavLinkIcon({ href }: { href: string }) {
  switch (href) {
    case "/":
      return <HomeIcon />;
    case "/projects":
      return <FoldersIcon />;
    case "/about":
      return <User2Icon />;
    default:
      return null;
  }
}

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
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2 font-mono uppercase mx-auto",
                  "block md:hidden"
                )}
              >
                <NavLinkIcon href={link.href} />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "px-4 py-2 font-mono text-xs tracking-widest uppercase",
              "transition-colors hover:bg-foreground/70 bg-foreground text-background",
              "hidden md:block"
            )}
          >
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
