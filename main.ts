// Have You Tried Turning It Off? — make.fun entry
// Writes one funny line from a hopeless tech support agent to a
// desperate customer, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? No rush \u2014 I'll be right here on hold for the rest of my natural life.";

// The gate: entry.txt must be UTF-8 text of 1 to 199 characters.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
