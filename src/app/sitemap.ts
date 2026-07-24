import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/constants/metadata";
import { getGithubOverview } from "@/features/github";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const overview = await getGithubOverview();
  const repositories = overview?.data?.repositories ?? [];

  const projectRoutes: MetadataRoute.Sitemap = repositories.map((repo) => ({
    url: absoluteUrl(`/projects/${repo.name}`),
    lastModified: new Date(repo.pushedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
