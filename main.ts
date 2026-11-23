import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, Zero Use: a superpower that sounds incredible for half a
// second, then collapses under one specific, fatal condition.
const LINE =
  "I can breathe underwater indefinitely, but only in water shallow enough to stand in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
