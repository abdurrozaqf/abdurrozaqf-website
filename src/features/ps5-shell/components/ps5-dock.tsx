import Link from "next/link";
import { FoldersIcon, HomeIcon, User2Icon } from "lucide-react";

import { cn } from "@/libs/utils";

const DOCK_LINKS = [
  { label: "Home", href: "/", Icon: HomeIcon },
  { label: "Projects", href: "/projects", Icon: FoldersIcon },
  { label: "About", href: "/about", Icon: User2Icon },
] as const;

export default function Ps5Dock() {
  return (
    <nav
      aria-label="Mobile"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 w-full md:hidden",
        "bg-[rgba(10,13,20,0.85)] backdrop-blur-md",
        "border-t border-white/10",
        "transition-opacity duration-300 motion-reduce:transition-none",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#0070D1] to-[#00439C]"
      />
      <ul className="flex items-stretch justify-around w-full">
        {DOCK_LINKS.map(({ label, href, Icon }) => (
          <li key={href} className="flex-1">
            <Link
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2.5",
                "font-mono text-[10px] uppercase tracking-[0.15em] text-[#8F97A4]",
                "transition-colors duration-300 motion-reduce:transition-none",
                "hover:text-[#F4F5F7]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-inset",
              )}
            >
              <Icon aria-hidden className="size-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}