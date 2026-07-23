import { OG_FONT } from "../constants";

const FONT_CACHE = new Map<string, ArrayBuffer>();

/**
 * Google Fonts CSS varies by User-Agent. This older Safari UA returns
 * TTF/OTF, which `next/og` (Satori) can embed reliably.
 */
const GOOGLE_FONTS_USER_AGENT =
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1";

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
      headers: {
        "User-Agent": GOOGLE_FONTS_USER_AGENT,
      },
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

  const fontResponse = await fetch(match[1]);

  if (!fontResponse.ok) {
    throw new Error(`Failed to fetch font file for ${family}`);
  }

  const data = await fontResponse.arrayBuffer();
  FONT_CACHE.set(cacheKey, data);
  return data;
}
