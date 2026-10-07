import Link from "next/link";
import Image from "next/image";

import { cn } from "@/libs/utils";

interface Ps5TileProps {
  title: string;
  subtitle?: string;
  imageUrl?: string | null;
  href: string;
  isActive?: boolean;
}

export default function Ps5Tile({
  title,
  subtitle,
  imageUrl,
  href,
  isActive = false,
}: Ps5TileProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative flex flex-col w-full overflow-hidden",
        "rounded-[14px] p-4 min-h-[132px]",
        "transition-all duration-300 motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
        isActive
          ? "opacity-100 scale-[1.08] border-2 border-[#F4F5F7] shadow-[0_0_20px_rgba(0,112,209,0.5)]"
          : "opacity-70 border border-white/10",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.25,1,0.5,1)" }}
    >
      {imageUrl ? (
        <Image
          fill
          sizes="(min-width: 1024px) 320px, 50vw"
          src={imageUrl}
          alt={title}
          className="object-cover"
        />
      ) : null}

      <div className="relative z-10 flex flex-col gap-1 mt-auto">
        <span className="text-base font-semibold tracking-tight text-[#F4F5F7]">
          {title}
        </span>
        {subtitle ? (
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#8F97A4]">
            {subtitle}
          </span>
        ) : null}
      </div>
    </Link>
  );
}