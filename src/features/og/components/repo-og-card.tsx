import { OG_COLORS, OG_FONT, OG_RATIOS } from "../constants";
import { formatOgTitle } from "../lib/parse";
import type { RepoOgCardProps } from "../types";

interface LayoutTokens {
  fontSize: number;
  titleMaxWidth: number;
  sideBarWidth: number;
  sideBarHeightRatio: number;
  lineReachRatio: number;
  stroke: number;
  underlineGap: number;
  letterSpacing: number;
  lineHeight: number;
}

const LAYOUT: Record<RepoOgCardProps["ratio"], LayoutTokens> = {
  "16/9": {
    fontSize: 72,
    titleMaxWidth: 640,
    sideBarWidth: 52,
    sideBarHeightRatio: 0.4,
    lineReachRatio: 0.26,
    stroke: 2,
    underlineGap: 12,
    letterSpacing: 2,
    lineHeight: 0.95,
  },
  "1/1": {
    fontSize: 72,
    titleMaxWidth: 720,
    sideBarWidth: 64,
    sideBarHeightRatio: 0.36,
    lineReachRatio: 0.28,
    stroke: 2,
    underlineGap: 12,
    letterSpacing: 2,
    lineHeight: 0.95,
  },
};

function SideBar({
  side,
  top,
  width,
  height,
}: {
  side: "left" | "right";
  top: number;
  width: number;
  height: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        [side]: 0,
        top,
        width,
        height,
        background: OG_COLORS.white,
        display: "flex",
      }}
    />
  );
}

function Rule({
  top,
  bottom,
  left,
  height,
  stroke,
}: {
  top?: number;
  bottom?: number;
  left: number;
  height: number;
  stroke: number;
}) {
  const style: Record<string, string | number> = {
    position: "absolute",
    left,
    width: stroke,
    height,
    background: OG_COLORS.white,
    display: "flex",
  };

  if (top !== undefined) {
    style.top = top;
  }

  if (bottom !== undefined) {
    style.bottom = bottom;
  }

  return <div style={style} />;
}

export function RepoOgCard({ ratio, title }: RepoOgCardProps) {
  const { width, height } = OG_RATIOS[ratio];
  const layout = LAYOUT[ratio];
  const displayTitle = formatOgTitle(title);

  const sideBarHeight = Math.round(height * layout.sideBarHeightRatio);
  const sideBarTop = Math.round((height - sideBarHeight) / 2);
  const lineReach = Math.round(height * layout.lineReachRatio);
  const topRuleLeft = Math.round(layout.titleMaxWidth * 0.22);
  const bottomRuleLeft = Math.round(layout.titleMaxWidth * 0.58);

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: OG_COLORS.black,
        color: OG_COLORS.white,
        position: "relative",
        fontFamily: OG_FONT.family,
      }}
    >
      <SideBar
        side="left"
        top={sideBarTop}
        width={layout.sideBarWidth}
        height={sideBarHeight}
      />
      <SideBar
        side="right"
        top={sideBarTop}
        width={layout.sideBarWidth}
        height={sideBarHeight}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "flex-start",
          maxWidth: layout.titleMaxWidth,
        }}
      >
        <Rule
          top={-lineReach}
          left={topRuleLeft}
          height={lineReach}
          stroke={layout.stroke}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: layout.titleMaxWidth,
            fontSize: layout.fontSize,
            fontWeight: OG_FONT.weight,
            lineHeight: layout.lineHeight,
            letterSpacing: layout.letterSpacing,
            color: OG_COLORS.white,
            wordBreak: "break-word",
            textTransform: "uppercase",
          }}
        >
          {displayTitle}
        </div>

        <Rule
          bottom={-(lineReach - layout.underlineGap - layout.stroke)}
          left={bottomRuleLeft}
          height={lineReach}
          stroke={layout.stroke}
        />
      </div>
    </div>
  );
}
