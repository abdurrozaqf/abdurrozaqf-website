"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ANALYTICS_EVENTS } from "@/constants/analytics";
import { trackEvent } from "@/libs/analytics";

export default function ViewProjectsButton() {
  return (
    <Link
      href="/projects"
      onClick={() => trackEvent(ANALYTICS_EVENTS.VIEW_PROJECTS_CLICK)}
      className="flex flex-col items-center justify-center w-full gap-4 transition-all border-2 group aspect-square hover:bg-foreground hover:text-background"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em]">
        View Projects
      </span>
      <ArrowRight className="transition-transform size-10 group-hover:translate-x-2" />
    </Link>
  );
}
