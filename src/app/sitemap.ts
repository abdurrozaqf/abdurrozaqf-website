import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/metadata";
import { getGithubOverview } from "@/features/github";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const overview = await getGithubOverview();
  const repositories = overview?.data?.repositories ?? [];

  const projectRoutes: MetadataRoute.Sitemap = repositories.map((repo) => ({
    url: `${SITE_URL}/projects/${repo.name}`,
    lastModified: new Date(repo.pushedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
