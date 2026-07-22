import type { OgRatio } from "../constants";

export function getRepositoryOgImage(
  repositoryName: string,
  ratio: OgRatio = "16/9"
): string {
  const repo = encodeURIComponent(repositoryName);
  const query = encodeURIComponent(ratio);
  return `/api/og/${repo}?ratio=${query}`;
}

export function getOgCacheControl(
  maxAge: number,
  staleWhileRevalidate: number
): string {
  return `public, s-maxage=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`;
}
