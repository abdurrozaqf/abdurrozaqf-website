import {
  DEFAULT_OG_RATIO,
  OG_RATIOS,
  REPO_NAME_PATTERN,
  type OgRatio,
  type OgSize,
} from "../constants";

export function isOgRatio(value: string | null): value is OgRatio {
  return value === "16/9" || value === "1/1";
}

export function parseOgRatio(value: string | null): OgRatio {
  return isOgRatio(value) ? value : DEFAULT_OG_RATIO;
}

export function getOgSize(ratio: OgRatio): OgSize {
  return OG_RATIOS[ratio];
}

export function normalizeRepoParam(raw: string | undefined): string | null {
  const repo = decodeURIComponent(raw ?? "").trim();
  if (!repo || !REPO_NAME_PATTERN.test(repo)) {
    return null;
  }
  return repo;
}

export function formatOgTitle(title: string): string {
  return `${title.trim().replace(/\.+$/, "")}.`;
}
