"use client";

import Link from "next/link";

import about from "@/data/about.json";

import { ANALYTICS_EVENTS } from "@/constants/analytics";
import { trackEvent } from "@/libs/analytics";

export default function DownloadCvButton() {
  const isExternalCv = about.cvHref.startsWith("http");

  return (
    <Link
      href={about.cvHref}
      target={isExternalCv ? "_blank" : undefined}
      rel={isExternalCv ? "noopener noreferrer" : undefined}
      download={!isExternalCv ? "Abdur-Rozaq-Fakhruddin-Resume.pdf" : undefined}
      onClick={() => trackEvent(ANALYTICS_EVENTS.DOWNLOAD_CV_CLICK)}
      className="w-full py-4 text-2xl text-center uppercase transition-all border-2 border-background font-heading hover:bg-background hover:text-foreground md:py-6 md:text-3xl"
    >
      Download CV
    </Link>
  );
}
