// deadpan-forecasts — entry program for make.fun competition
// u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// Writes the chosen one-line deadpan weather forecast to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falls back to /output when the
// variable is not set). Plain JavaScript on purpose: the grader runs
// node directly on this file.

const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

const forecast = fs.readFileSync(sourcePath, "utf8");

// Gate checks mirroring the competition gate: the entry must be UTF-8
// text of 1 to 160 characters, not only white space, and a single
// line. Fail loudly here instead of shipping an entry the sealed
// scorer would reject.
if (forecast.length === 0 || forecast.trim().length === 0) {
  throw new Error("entry.txt is empty or only white space");
}
if (forecast.length > 160) {
  throw new Error("entry.txt is " + forecast.length + " chars, over the 160 limit");
}
if (forecast.indexOf("\n") !== -1 || forecast.indexOf("\r") !== -1) {
  throw new Error("entry.txt must be a single line");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, forecast, "utf8");

console.log("wrote " + outputPath + " (" + forecast.length + " chars)");
