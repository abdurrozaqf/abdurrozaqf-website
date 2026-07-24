import { ImageResponse } from "next/og";

import {
  OG_FONT,
  OG_CACHE_SECONDS,
  OG_STALE_SECONDS,
  getOgCacheControl,
  getOgSize,
  loadOgFont,
  normalizeRepoParam,
  parseOgRatio,
  RepoOgCardV2,
} from "@/features/og";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ repo: string }> }
) {
  const { repo: rawRepo } = await params;
  const repo = normalizeRepoParam(rawRepo);

  if (!repo) {
    return new Response("Invalid or missing repo parameter", { status: 400 });
  }

  const ratio = parseOgRatio(new URL(request.url).searchParams.get("ratio"));
  const { width, height } = getOgSize(ratio);

  try {
    const font = await loadOgFont();

    return new ImageResponse(<RepoOgCardV2 ratio={ratio} title={repo} />, {
      width,
      height,
      headers: {
        "Cache-Control": getOgCacheControl(OG_CACHE_SECONDS, OG_STALE_SECONDS),
      },
      fonts: [
        {
          name: OG_FONT.family,
          data: font,
          weight: OG_FONT.weight,
          style: "normal",
        },
      ],
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown image generation error";
    return new Response(`Failed to generate image: ${message}`, {
      status: 500,
    });
  }
}
