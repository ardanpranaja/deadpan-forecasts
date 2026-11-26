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

let forecast = fs.readFileSync(sourcePath, "utf8");

// Defensive normalisation: strip a leading UTF-8 byte-order mark and
// one trailing newline, so an editor's stray BOM or newline cannot trip
// the gate or leak into the output. The entry itself is a single line
// either way, so this never changes a well-formed entry.
if (forecast.charCodeAt(0) === 0xfeff) {
  forecast = forecast.slice(1);
}
if (forecast.endsWith("\n")) {
  forecast = forecast.slice(0, -1);
  if (forecast.endsWith("\r")) {
    forecast = forecast.slice(0, -1);
  }
}

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

// Round-trip check: read the output back and refuse to report success
// unless it matches the validated line exactly, byte for byte.
const roundTrip = fs.readFileSync(outputPath, "utf8");
if (roundTrip !== forecast) {
  throw new Error("round-trip check failed: output differs from the validated forecast");
}

console.log("wrote " + outputPath + " (" + forecast.length + " chars)");
