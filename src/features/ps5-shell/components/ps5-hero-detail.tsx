import Link from "next/link";

import { cn } from "@/libs/utils";

interface Ps5HeroDetailProps {
  title: string;
  description?: string;
  tags?: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function Ps5HeroDetail({
  title,
  description,
  tags,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Ps5HeroDetailProps) {
  return (
    <section className="flex flex-col gap-6 max-w-2xl px-6 py-10 md:px-0 transition-opacity duration-300 motion-reduce:transition-none">
      <h1 className="text-[32px] font-bold leading-tight tracking-tight text-[#F4F5F7] md:text-[48px]">
        {title}
      </h1>

      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-[#8F97A4]">
          {description}
        </p>
      ) : null}

      {tags?.length ? (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-mono rounded-full border border-white/10 text-[#F4F5F7] bg-white/5"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={primaryHref}
          className={cn(
            "inline-flex items-center justify-center min-h-11 px-8 rounded-3xl",
            "text-sm font-semibold text-[#0A0D14] bg-[#F4F5F7]",
            "transition-all duration-300 motion-reduce:transition-none",
            "hover:shadow-[0_0_20px_rgba(0,112,209,0.5)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.25,1,0.5,1)" }}
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className={cn(
              "inline-flex items-center justify-center min-h-11 px-8 rounded-3xl",
              "text-sm font-semibold text-[#F4F5F7]",
              "bg-transparent border border-[#00439C]",
              "transition-all duration-300 motion-reduce:transition-none",
              "hover:border-[#0070D1] hover:shadow-[0_0_20px_rgba(0,112,209,0.5)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.25,1,0.5,1)" }}
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}