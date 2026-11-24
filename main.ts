// Make the AI Judge Laugh: the Office Joke Open
// Entry: one line of office comedy, written to /output/entry.txt.
// Deterministic constant writer: no randomness, no network, no file reads,
// stdlib only (node:fs, node:path). Node 22, TypeScript stripped at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why the joke works, in three beats that stack instead of repeating:
// (1) "11 months late" — an absurd amount of corporate time to waste on
// a laptop, so the delay itself is the first punchline; (2) "on my last
// day" — the payoff arrives exactly when it is useless, the timing
// turning a slow process into a perfect miss; (3) "from a manager who
// left in March" — the sender is gone, so the warm welcome comes from
// nobody, and the exclamation mark lands as the final twist. Drop any
// one beat and the line flattens into a complaint; together they make
// the onboarding ritual indict itself.

const JOKE: string =
  "My onboarding laptop arrived 11 months late, on my last day, with a note: 'Welcome aboard!' - from a manager who left in March.";

// Gate self-check: the sealed scorer requires 1-200 chars, one line, not
// only whitespace. Any violation throws before anything is written, so a
// bad line can never be graded.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} chars`);
}

const OUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE: string = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
