// One Sentence for a Traveler from 1800 — make.fun entry.
// The program writes one single sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "Imagine every letter ever written, kept in one great library, and any man on earth can read any page of it in the time it takes to blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
