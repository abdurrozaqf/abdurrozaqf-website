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
    ]) {
      assert.ok(css.includes(v), `missing ${v}`);
    }
  });

  it("forces dark shell background on body", () => {
    assert.ok(layout.includes("bg-[#0A0D14]"), "missing body bg");
    assert.ok(layout.includes("text-[#F4F5F7]"), "missing body text");
  });
});
