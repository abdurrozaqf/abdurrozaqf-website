"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { GITHUB_ACCOUNTS } from "@/features/github";
import { cn } from "@/libs/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
] as const;

const GITHUB_URL = `https://github.com/${GITHUB_ACCOUNTS.username}`;
const GITHUB_AVATAR = `${GITHUB_URL}.png?size=64`;

const TIME_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function formatTime(date: Date): string {
  return TIME_FORMATTER.format(date);
}

export default function Ps5Topbar() {
  const pathname = usePathname();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full",
        "border-b border-white/10",
        "transition-opacity duration-300 motion-reduce:transition-none",
      )}
      style={{ backgroundColor: "rgba(10,13,20,0.72)" }}
    >
      <div className="flex items-center justify-between gap-4 w-full h-14 px-4 mx-auto max-w-container-max md:px-8">
        <nav aria-label="Primary" className="flex items-center gap-1 md:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium",
                  "transition-colors duration-300 motion-reduce:transition-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
                  isActive
                    ? "text-[#F4F5F7] after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#0070D1] after:shadow-[0_0_12px_rgba(0,112,209,0.45)]"
                    : "text-[#8F97A4] hover:text-[#F4F5F7]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <time
            className="font-mono text-xs tracking-[0.15em] text-[#8F97A4]"
            suppressHydrationWarning
          >
            {time ?? "--:--"}
          </time>

          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub profile: ${GITHUB_ACCOUNTS.username}`}
            className={cn(
              "block overflow-hidden rounded-full border border-white/10",
              "transition-all duration-300 motion-reduce:transition-none",
              "hover:border-[#0070D1] hover:shadow-[0_0_12px_rgba(0,112,209,0.45)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
            )}
          >
            <Image
              src={GITHUB_AVATAR}
              alt=""
              width={32}
              height={32}
              unoptimized
              className="size-8 object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}