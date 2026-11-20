import type { Metadata } from "next";

import AboutPage from "@/features/about";
import { buildPageMetadata } from "@/constants/metadata";
import { JsonLd } from "@/components/elements/json-ld";
import { buildAboutPageSchema } from "@/libs/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Engineering philosophy, experience, and technical toolkit of Abdur Rozaq Fakhruddin, Front-End Engineer specializing in Next.js, React, and TypeScript.",
  path: "/about",
  type: "profile",
});

export default function Page() {
  return (
    <>
      <JsonLd data={buildAboutPageSchema()} />
      <AboutPage />
    </>
  );
}
