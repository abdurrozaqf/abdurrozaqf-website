"use client";

import { cn } from "@/libs/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  tags: string[];
}

export default function ExperienceItem({
  title,
  company,
  period,
  current = false,
  description,
  tags,
}: ExperienceItemProps) {
  return (
    <article className="p-6 transition-colors group hover:bg-muted/40 md:p-12">
      <div className="flex flex-col items-baseline mb-6 md:flex-row md:justify-between gap-3">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "size-3 shrink-0 rounded-full transition-all duration-200 group-hover:scale-[1.3]",
              current
                ? "bg-foreground"
                : "border-2 border-foreground group-hover:bg-foreground"
            )}
          />
          <h3 className="text-2xl uppercase font-heading md:text-3xl">
            {title} @ {company}
          </h3>
        </div>
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-widest",
            current ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {period}
        </span>
      </div>

      <p className="max-w-2xl mb-8 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 font-mono text-[10px] uppercase border"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
