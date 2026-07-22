import type { Metadata } from "next";

import ProjectsPage from "@/features/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated collection of technical explorations focusing on high-performance interfaces, brutalist aesthetics, and seamless user interaction.",
};

export default function Page() {
  return <ProjectsPage />;
}
