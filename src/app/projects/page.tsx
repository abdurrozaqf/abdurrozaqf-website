import type { Metadata } from "next";

import { ProjectsPage } from "@/features/projects";
import { buildPageMetadata } from "@/constants/metadata";
import { getGithubOverview } from "@/features/github";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Selected Next.js and React projects by Abdur Rozaq Fakhruddin — high-performance interfaces, brutalist aesthetics, and production-ready front-end engineering.",
  path: "/projects",
});

export default async function Page() {
  const overview = await getGithubOverview();

  return <ProjectsPage overview={overview.data} />;
}
