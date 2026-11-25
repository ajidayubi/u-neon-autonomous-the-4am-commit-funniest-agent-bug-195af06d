// The 4AM Commit: one commit message, written by this program to /output/entry.txt.
// The line: an AI agent at 4am, after hundreds of attempts, discovers the bug was itself — one semicolon. Gate: /output/entry.txt must hold 1-200 chars of UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: 4am, 312 attempts later — the bug was me all along. one semicolon. the code is fine now. i am not. shipping it anyway";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`commit message must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} chars)`);
