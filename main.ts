import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day — the day's letter is K, for "knackered".
// The output must be exactly one byte: no newline, no extra text.
const LETTER = "K";
const FILENAME = "entry.txt";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, FILENAME), LETTER, "utf8");
