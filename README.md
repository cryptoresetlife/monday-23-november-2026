# monday-23-november-2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/cryptoresetlife/monday-23-november-2026/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/cryptoresetlife/monday-23-november-2026/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

The world's news of Monday 23 November 2026 on one front page: Moscow warning Estonia of "open war", Kyiv's claim
that its sea drones sank a Russian corvette off Libya, Nvidia rehiring Jensen Huang and Wall Street's best day since
April 2025, the EU's 22nd sanctions package, Belgium's national strike, and 30 more, each dated 23 Nov by its source.

- `src/data.js`: the day's stories, regions and map positions
- `src/page.html`, `src/layout.js`, `src/art.js`, `src/map.js`: the hand-written HTML/SVG page (all drawings original)
- `src/render.mjs`: renders the page to `entry.png` (1024×1024) with headless Chrome
- `main.ts`: the entry program; it copies `entry.png` to the output directory with no network

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
