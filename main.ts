// Funniest Forecast for a City That Isn't — make.fun entry.
// Deterministic: always writes the same single forecast line.
// Node 22+, standard library only. No input, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The forecast line is kept under the 120-character limit on purpose:
// it has to land on its own when the judge reads it against another entry.
const FORECAST =
  "Fluffernutter: sunny with a 90% chance of marshmallow flurries. Locals advised to lick the snow, not shovel it.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), FORECAST + "\n", "utf8");
}

main();
