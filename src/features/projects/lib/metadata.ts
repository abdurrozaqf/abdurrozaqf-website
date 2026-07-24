import type { Metadata } from "next";

import type { TDetailRepositories } from "@/features/github";
import { buildPageMetadata, METADATA, SITE_URL } from "@/constants/metadata";
import { getRepositoryOgImage } from "@/features/og";

const OG_IMAGE_SIZE = {
  width: 1200,
  height: 675,
} as const;

function getProjectPath(slug: string): string {
  return `/projects/${slug}`;
}

function getProjectDescription(
  name: string,
  description: string | null
): string {
  return (
    description || `${name} — open-source project by ${METADATA.authors.name}.`
  );
}

export function buildProjectMetadata(repo: TDetailRepositories): Metadata {
  const path = getProjectPath(repo.name);

  return buildPageMetadata({
    title: repo.name,
    description: getProjectDescription(repo.name, repo.description),
    path,
    image: {
      url: `${SITE_URL}${getRepositoryOgImage(repo.name, "16/9")}`,
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      alt: `${repo.name} project preview`,
    },
  });
}

export function buildMissingProjectMetadata(slug: string): Metadata {
  return buildPageMetadata({
    title: slug,
    description: `Project details for ${slug} by ${METADATA.authors.name}.`,
    path: getProjectPath(slug),
    noIndex: true,
  });
}

export { getProjectPath, getProjectDescription };
