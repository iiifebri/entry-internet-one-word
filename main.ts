import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: the whole internet, summed up in a single word.
const WORD = "Feral";

// The harness tells the program where output goes; /output is only the fallback.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly five bytes, no trailing newline. Short wins the byte tie-break.
// No randomness, no timestamps: both grader runs produce identical bytes.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
