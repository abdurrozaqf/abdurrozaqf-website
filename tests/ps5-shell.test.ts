import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

const SOURCES = {
  barrel: "src/features/ps5-shell/index.ts",
  topbar: "src/features/ps5-shell/components/ps5-topbar.tsx",
  backdrop: "src/features/ps5-shell/components/ps5-backdrop.tsx",
  tile: "src/features/ps5-shell/components/ps5-tile.tsx",
  hero: "src/features/ps5-shell/components/ps5-hero-detail.tsx",
  dock: "src/features/ps5-shell/components/ps5-dock.tsx",
} as const;

const files = Object.fromEntries(
  Object.entries(SOURCES).map(([key, path]) => [key, readFileSync(path, "utf8")]),
) as Record<keyof typeof SOURCES, string>;

describe("ps5 shell barrel", () => {
  it("re-exports the five shell components by name", () => {
    for (const name of [
      "Ps5Backdrop",
      "Ps5Tile",
      "Ps5HeroDetail",
      "Ps5Topbar",
      "Ps5Dock",
    ]) {
      assert.ok(
        files.barrel.includes(`as ${name}`),
        `barrel must export ${name} as a named export`,
      );
    }
  });

  it("exports every component file from the barrel", () => {
    for (const path of [
      "ps5-topbar",
      "ps5-backdrop",
      "ps5-tile",
      "ps5-hero-detail",
      "ps5-dock",
    ]) {
      assert.ok(files.barrel.includes(path), `barrel missing ${path}`);
    }
  });
});

describe("ps5 shell palette drift guard", () => {
  it("keeps the exact ps5 hex values in component sources", () => {
    const all = Object.values(files).join("\n");

    for (const value of ["#0A0D14", "#F4F5F7", "#8F97A4", "#0070D1", "#00439C"]) {
      assert.ok(all.includes(value), `ps5 palette value missing: ${value}`);
    }

    assert.ok(all.includes("rgba(0,112,209,0.45)"), "ps5 glow rgba missing");
  });

  it("pins the exact glow per component", () => {
    // Presence-anywhere is too loose: the tile-only 0.5 glow could drift into the
    // hero and still pass. Pin the value each component is allowed to carry.
    assert.ok(
      files.topbar.includes("rgba(0,112,209,0.45)"),
      "topbar glow must be the palette 0.45",
    );
    assert.ok(
      files.hero.includes("rgba(0,112,209,0.45)"),
      "hero glow must be the palette 0.45",
    );
    assert.ok(
      !files.hero.includes("rgba(0,112,209,0.5)"),
      "hero must not use the tile-only 0.5 glow",
    );
    assert.ok(
      files.tile.includes("rgba(0,112,209,0.5)"),
      "tile glow stays 0.5 per the tile brief",
    );
  });

  it("leaves bg and text surface to the body token utilities", () => {
    for (const key of ["topbar", "dock", "tile", "hero", "backdrop"] as const) {
      assert.ok(
        !files[key].includes("bg-[#0A0D14]"),
        `${key} must not hardcode the bg hex`,
      );
    }
  });
});

describe("ps5 shell behavior constraints", () => {
  it("marks only the topbar as a client component", () => {
    assert.ok(
      files.topbar.startsWith('"use client"'),
      "topbar needs use client for usePathname and the clock",
    );
    for (const key of ["backdrop", "tile", "hero", "dock"] as const) {
      assert.ok(!files[key].includes('"use client"'), `${key} must stay server-compatible`);
    }
  });

  it("keeps navigation silent: no audio, no autoplay, no infinite animation", () => {
    const all = Object.values(files).join("\n");

    for (const banned of [
      "AudioContext",
      "webkitAudioContext",
      "<audio",
      "new Audio",
      "autoplay",
      "animate-",
      "infinite",
    ]) {
      assert.ok(!all.includes(banned), `banned construct present: ${banned}`);
    }
  });

  it("respects reduced motion on every animated surface", () => {
    for (const key of ["topbar", "backdrop", "tile", "hero", "dock"] as const) {
      assert.ok(files[key].includes("motion-reduce"), `${key} must guard transitions with motion-reduce`);
    }
  });

  it("exposes visible keyboard focus on interactive surfaces", () => {
    for (const key of ["topbar", "tile", "hero", "dock"] as const) {
      assert.ok(files[key].includes("focus-visible"), `${key} must show focus-visible ring`);
    }
  });

  it("keeps the required prop signatures", () => {
    const sig = (s: string, needle: string) =>
      assert.ok(s.includes(needle), `missing signature: ${needle}`);

    sig(files.backdrop, "imageUrl?: string | null");
    sig(files.backdrop, "alt?: string");
    sig(files.tile, "title: string");
    sig(files.tile, "subtitle?: string");
    sig(files.tile, "imageUrl?: string | null");
    sig(files.tile, "href: string");
    sig(files.tile, "isActive?: boolean");
    sig(files.hero, "title: string");
    sig(files.hero, "description?: string");
    sig(files.hero, "tags?: string[]");
    sig(files.hero, "primaryHref: string");
    sig(files.hero, "primaryLabel: string");
    sig(files.hero, "secondaryHref?: string");
    sig(files.hero, "secondaryLabel?: string");
  });
});

// Only external http(s) URLs or the internal absolute allowlist may pass.
// Everything else — javascript:, data:, mailto:, ftp:, protocol-relative, relative
// paths, or any unknown internal route — must be rejected.
function isAllowedDestination(destination: string): boolean {
  return (
    /^https?:\/\//.test(destination) ||
    /^\/(?:$|projects(?:\/|$)|about(?:\/|$))/.test(destination)
  );
}

describe("ps5 shell route destinations", () => {
  it("links only to real routes", () => {
    const all = [files.topbar, files.dock].join("\n");

    for (const route of ['"/"', '"/projects"', '"/about"']) {
      assert.ok(all.includes(`href: ${route}`), `missing route ${route}`);
    }

    // The navigation hrefs are declared as object literals, so read them by shape.
    const destinations = Array.from(
      all.matchAll(/href:\s*"([^"]+)"/g),
      (match) => match[1],
    );

    for (const destination of destinations) {
      assert.ok(
        isAllowedDestination(destination),
        `unknown route in topbar/dock: ${destination}`,
      );
    }
  });

  it("rejects unsafe or unknown destinations", () => {
    for (const unsafe of [
      "javascript:alert(1)",
      "data:text/html,x",
      "mailto:x@y.z",
      "ftp://example.com",
      "//evil.com",
      "/evil",
      "relative/path",
    ]) {
      assert.ok(
        !isAllowedDestination(unsafe),
        `guard must reject unsafe destination: ${unsafe}`,
      );
    }

    for (const allowed of [
      "/",
      "/projects",
      "/projects/foo",
      "/about",
      "https://github.com/abdurrozaqf",
      "http://example.com",
    ]) {
      assert.ok(
        isAllowedDestination(allowed),
        `guard must allow real destination: ${allowed}`,
      );
    }
  });
});