import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

const css = readFileSync("src/styles/globals.css", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");

describe("ps5 tokens", () => {
  it("defines ps5 palette vars", () => {
    for (const v of [
      "--color-ps5-bg: #0A0D14",
      "--color-ps5-text: #F4F5F7",
      "--color-ps5-muted: #8F97A4",
      "--color-ps5-blue: #0070D1",
      "--color-ps5-blue-deep: #00439C",
      "--color-ps5-glow: rgba(0,112,209,0.45)",
      "--color-ps5-card: rgb(255 255 255 / 0.08)",
      "--color-ps5-card-active: rgb(255 255 255 / 0.2)",
      "--color-ps5-overlay: rgb(10 13 20 / 0.7)",
    ]) {
      assert.ok(css.includes(v), `missing ${v}`);
    }
  });

  it("points root surface tokens at the ps5 palette", () => {
    assert.ok(
      css.includes("--background: var(--color-ps5-bg);"),
      "root --background must derive from --color-ps5-bg",
    );
    assert.ok(
      css.includes("--foreground: var(--color-ps5-text);"),
      "root --foreground must derive from --color-ps5-text",
    );
    assert.ok(
      !css.includes("--background: oklch(1 0 0);"),
      "root --background must not stay white",
    );
    assert.ok(
      !css.includes("--foreground: oklch(0.145 0 0);"),
      "root --foreground must not stay near-black",
    );
  });

  it("forces dark shell background on body via token utilities", () => {
    assert.ok(layout.includes("bg-ps5-bg"), "missing body bg token utility");
    assert.ok(layout.includes("text-ps5-text"), "missing body text token utility");
    assert.ok(
      !layout.includes("bg-[#0A0D14]"),
      "body must not hardcode the bg hex",
    );
    assert.ok(
      !layout.includes("text-[#F4F5F7]"),
      "body must not hardcode the text hex",
    );
  });
});