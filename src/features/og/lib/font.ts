import { OG_FONT } from "../constants";

const FONT_CACHE = new Map<string, ArrayBuffer>();

/**
 * Loads a Google Font once per isolate and reuses the buffer.
 * Omits the `text` subset so one cached file covers every repo title.
 */
export async function loadOgFont(
  family: string = OG_FONT.family,
  weight: number = OG_FONT.weight
): Promise<ArrayBuffer> {
  const cacheKey = `${family}:${weight}`;
  const cached = FONT_CACHE.get(cacheKey);
  if (cached) {
    return cached;
  }

  const params = new URLSearchParams({
    family: `${family}:wght@${weight}`,
  });

  const cssResponse = await fetch(
    `https://fonts.googleapis.com/css2?${params.toString()}`,
    {
      // Font CSS rarely changes; keep it warm at the edge.
      next: { revalidate: 60 * 60 * 24 * 30 },
    }
  );

  if (!cssResponse.ok) {
    throw new Error(`Failed to resolve font CSS for ${family}`);
  }

  const css = await cssResponse.text();
  const match = css.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/
  );

  if (!match?.[1]) {
    throw new Error(`Could not resolve font source for ${family}`);
  }

  const fontResponse = await fetch(match[1], {
    next: { revalidate: 60 * 60 * 24 * 30 },
  });

  if (!fontResponse.ok) {
    throw new Error(`Failed to fetch font file for ${family}`);
  }

  const data = await fontResponse.arrayBuffer();
  FONT_CACHE.set(cacheKey, data);
  return data;
}
