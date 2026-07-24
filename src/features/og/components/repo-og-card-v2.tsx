import { BsGithub } from "react-icons/bs";
import { OG_COLORS, OG_FONT, OG_RATIOS } from "../constants";
import type { RepoOgCardProps } from "../types";

interface LayoutTokens {
  railWidth: number;
  padX: number;
  padTop: number;
  padBottom: number;
  footerHeight: number;
  metaSize: number;
  titleMaxWidth: number;
  accentHeight: number;
}

const LAYOUT: Record<RepoOgCardProps["ratio"], LayoutTokens> = {
  "16/9": {
    railWidth: 40,
    padX: 56,
    padTop: 48,
    padBottom: 40,
    footerHeight: 88,
    metaSize: 22,
    titleMaxWidth: 980,
    accentHeight: 6,
  },
  "1/1": {
    railWidth: 48,
    padX: 64,
    padTop: 64,
    padBottom: 48,
    footerHeight: 104,
    metaSize: 24,
    titleMaxWidth: 980,
    accentHeight: 8,
  },
};

const BRAND = "CODUR.DEV";

function getTitleLines(raw: string): string[] {
  const cleaned = (raw || "project").trim().replace(/\.+$/, "").toUpperCase();
  const parts = cleaned.split(/[-_\s]+/).filter(Boolean);

  if (parts.length <= 1) {
    return [`${cleaned}.`];
  }

  if (parts.length === 2) {
    return [`${parts[0]} ${parts[1]}.`];
  }

  const mid = Math.ceil(parts.length / 2);
  const first = parts.slice(0, mid).join(" ");
  const second = parts.slice(mid).join(" ");
  return [first, `${second}.`];
}

function getTitleFontSize(
  lines: string[],
  ratio: RepoOgCardProps["ratio"]
): number {
  const longest = Math.max(...lines.map((line) => line.length));
  const lineCount = lines.length;

  if (ratio === "1/1") {
    if (lineCount === 1 && longest <= 10) return 128;
    if (longest <= 12) return 96;
    if (longest <= 18) return 76;
    if (longest <= 24) return 62;
    return 52;
  }

  if (lineCount === 1 && longest <= 10) return 120;
  if (longest <= 12) return 92;
  if (longest <= 18) return 72;
  if (longest <= 24) return 58;
  return 48;
}

export function RepoOgCardV2({ ratio, title }: RepoOgCardProps) {
  const { width, height } = OG_RATIOS[ratio];
  const layout = LAYOUT[ratio];
  const lines = getTitleLines(title);
  const titleFontSize = getTitleFontSize(lines, ratio);
  const contentWidth = width - layout.railWidth;
  const stageHeight = height - layout.footerHeight;

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        flexDirection: "row",
        background: OG_COLORS.black,
        color: OG_COLORS.white,
        fontFamily: OG_FONT.family,
      }}
    >
      <div
        style={{
          display: "flex",
          width: layout.railWidth,
          height,
          background: OG_COLORS.white,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: contentWidth,
          height,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: contentWidth,
            height: stageHeight,
            paddingTop: layout.padTop,
            paddingRight: layout.padX,
            paddingBottom: layout.padBottom,
            paddingLeft: layout.padX,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: layout.metaSize,
                letterSpacing: 5,
                color: OG_COLORS.white,
                textTransform: "uppercase",
              }}
            >
              [ REPOSITORY ]
            </div>
            <div
              style={{
                display: "flex",
                fontSize: layout.metaSize,
                color: "#A3A3A3",
                textTransform: "lowercase",
                gap: 8,
              }}
            >
              <BsGithub className="size-4" />
              <span>@abdurrozaqf</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: layout.titleMaxWidth,
            }}
          >
            <div
              style={{
                display: "flex",
                width: layout.accentHeight * 12,
                height: layout.accentHeight,
                marginBottom: 28,
                background: OG_COLORS.white,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: layout.titleMaxWidth,
              }}
            >
              {lines.map((line) => (
                <div
                  key={line}
                  style={{
                    display: "flex",
                    fontSize: titleFontSize,
                    fontWeight: OG_FONT.weight,
                    lineHeight: 0.88,
                    letterSpacing: 0.5,
                    color: OG_COLORS.white,
                    textTransform: "uppercase",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: contentWidth,
            height: layout.footerHeight,
            paddingRight: layout.padX,
            paddingLeft: layout.padX,
            background: OG_COLORS.white,
            color: OG_COLORS.black,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: layout.metaSize + 2,
              letterSpacing: 6,
              color: OG_COLORS.black,
              textTransform: "uppercase",
            }}
          >
            {BRAND}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: layout.metaSize + 2,
              letterSpacing: 6,
              color: OG_COLORS.black,
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </div>
        </div>
      </div>
    </div>
  );
}
