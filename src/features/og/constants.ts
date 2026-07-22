export const OG_RATIOS = {
  "16/9": { width: 1200, height: 675 },
  "1/1": { width: 1200, height: 1200 },
} as const;

export type OgRatio = keyof typeof OG_RATIOS;
export type OgSize = (typeof OG_RATIOS)[OgRatio];

export const DEFAULT_OG_RATIO: OgRatio = "16/9";

export const OG_CACHE_SECONDS = 86_400;
export const OG_STALE_SECONDS = 604_800;

export const OG_FONT = {
  family: "Bebas Neue",
  weight: 400,
} as const;

export const OG_COLORS = {
  black: "#000000",
  white: "#FFFFFF",
} as const;

export const REPO_NAME_PATTERN = /^[a-zA-Z0-9._-]+$/;
