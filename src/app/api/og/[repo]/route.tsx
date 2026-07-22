import { ImageResponse } from "next/og";

import {
  getOgCacheControl,
  getOgSize,
  loadOgFont,
  normalizeRepoParam,
  OG_CACHE_SECONDS,
  OG_FONT,
  OG_STALE_SECONDS,
  parseOgRatio,
  RepoOgCard,
} from "@/features/og";

export const runtime = "edge";

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

    return new ImageResponse(<RepoOgCard ratio={ratio} title={repo} />, {
      width,
      height,
      headers: {
        "Cache-Control": getOgCacheControl(
          OG_CACHE_SECONDS,
          OG_STALE_SECONDS
        ),
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
