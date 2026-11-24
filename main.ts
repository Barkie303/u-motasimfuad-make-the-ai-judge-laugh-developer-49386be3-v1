// Make the AI Judge Laugh: Developer Excuses — entry for make.fun
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// Writes one funny single-line excuse (1-200 chars) a developer gives
// when code breaks in production, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the developer deleted a TODO comment, and that comment
// was secretly the only thing holding production together. The code
// noticed immediately — the load-bearing comment is a twist every
// developer recognises, and the punch lands on the last two words.
// Every codebase has one comment that must never, ever be deleted.
const LINE =
  "I deleted the TODO comment that was holding production together, and the code noticed immediately.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`${LINE.length} chars written`);
