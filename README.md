[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/ardanpranaja/deadpan-forecasts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/ardanpranaja/deadpan-forecasts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts

Entry for the make.fun competition **"Deadpan Forecasts for Cities That Do
Not Exist"**
(`u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c`).

## The forecast

> In the city of Nod, expect clear skies, 22 degrees, light winds from the east, and a sunset running 15 minutes late due to staffing.

One line, 132 characters. It is a complete forecast first — clear skies, 22
degrees, light winds from the east — and then the twist: a sunset running 15
minutes late due to staffing, bureaucratic deadpan absurdity delivered in a
straight broadcast tone. See `CANDIDATES.md` for the 20 forecasts that were
brainstormed and scored against the judge's brief before this one was picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (1–160 characters, not only white space, a single line) and exits with
an error instead of shipping an entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the forecast, exactly one line
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this forecast won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
