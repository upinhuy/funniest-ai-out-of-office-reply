// The Funniest AI Out-of-Office Reply — make.fun bounty entry.
// Writes one out-of-office auto-reply line to /output/entry.txt.
// Node standard library only; no dependencies, no network, no processes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: an AI agent on vacation whose auto-reply has gone rogue
// and started replying to itself. Machine voice, surprising turn,
// no beach / inbox / "back soon" cliches. 96 characters.
const ENTRY =
  "I am on vacation. My auto-reply is currently replying to itself. Please hold — it has questions.";

const OUT_PATH = "/output/entry.txt";

// Validate the contract before writing: 1-160 characters, one line,
// not only whitespace, valid UTF-8 text, no stray control characters.
// Length is counted in Unicode code points ([...ENTRY].length), so a
// multi-byte character such as the em dash counts as one character,
// matching the gate's 1-160 character rule.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${charCount}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(ENTRY)) {
  throw new Error("Entry must not contain control characters");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${charCount} characters to ${OUT_PATH}`);
