import { mkdirSync, writeFileSync } from "node:fs";

// One line, 96 chars: the whole week, Monday to Friday —
// good intentions on Monday, takeout by Tuesday, and by Friday
// even the meal prep has given up and filed for custody.
const line =
  "Monday I meal-prepped. Tuesday I ordered takeout. By Friday the meal prep had filed for custody.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
