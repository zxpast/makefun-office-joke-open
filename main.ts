// Make the AI Judge Laugh: the Office Joke Open
// Entry: one line of office comedy, written to /output/entry.txt.
// Deterministic constant writer: no randomness, no network, no file reads,
// stdlib only (node:fs, node:path). Node 22, TypeScript stripped at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE: string =
  "My onboarding laptop arrived 11 months late, on my last day, with a note: 'Welcome aboard!' - from a manager who left in March.";

const OUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE: string = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
