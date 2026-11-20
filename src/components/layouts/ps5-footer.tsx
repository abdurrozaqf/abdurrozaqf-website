"use client";

import Link from "next/link";

import { ANALYTICS_EVENTS } from "@/constants/analytics";
import { SOCIAL_MEDIA } from "@/constants/social-media";
import { trackEvent } from "@/libs/analytics";
import { cn } from "@/libs/utils";

const CURRENT_YEAR = new Date().getFullYear();

export default function Ps5Footer() {
  return (
    <footer
      aria-label="Footer"
      className="hidden w-full px-3 pb-10 md:block md:px-5 xl:px-10"
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-container-max flex-wrap items-center justify-between gap-x-8 gap-y-4",
          "border-t border-white/10 pt-6",
        )}
      >
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {SOCIAL_MEDIA.map((social) => {
            const isExternal = social.href.startsWith("http");

            return (
              <li key={social.title}>
                <Link
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={() =>
                    trackEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, {
                      social_network: social.title,
                      social_location: "footer",
                    })
                  }
                  className={cn(
                    "rounded-sm font-mono text-xs uppercase tracking-[0.2em] text-[#8F97A4]",
                    "transition-colors duration-300 motion-reduce:transition-none",
                    "hover:text-[#F4F5F7]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]",
                  )}
                >
                  {social.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="font-mono text-xs uppercase tracking-widest text-[#8F97A4]">
          &copy; {CURRENT_YEAR} codur.dev
        </p>
      </div>
    </footer>
  );
}