# The open frontier is Chinese

Where open-weight AI models come from in 2026, in numbers: adoption, production usage, capability, distillation lineage, the closing of flagship tiers, and the safety research around them.

Live site: https://ggrazianoknapp.github.io/open-weights-china/

## What it shows

- **Adoption** — Hugging Face downloads, derivative models and local-inference traffic by family. Qwen is the base the open ecosystem builds on.
- **Usage** — OpenRouter and Vercel token shares: Chinese open models carry the volume, closed US models the premium slice.
- **Capability** — the US–China gap on Arena (Stanford AI Index) and how each country releases its models.
- **Distillation** — Anthropic's 2026 disclosures of Claude distillation by named Chinese labs, with a timeline.
- **Openness** — flagship-by-flagship status of nine Chinese labs, filterable by licence.
- **Research** — Concordia AI's count of Chinese frontier safety papers, where the research groups sit, and what runs through Tsinghua.
- **Why it matters** — the argument in four lines: interpretability needs weights, the readable weights near the frontier are Chinese, and the window may be narrowing.

Every chart is drawn from `data.js`; every number there carries a `src`. The as-of date is 8 November 2026.

## Structure

- `index.html` — the whole site (markup, styles, hand-rolled SVG charts).
- `data.js` — the data. Edit this to update or correct a figure.

No build step. Open `index.html` locally or serve the folder.

## Caveats the page states

- Hugging Face says downloads are concentrated (top 200 models = 49.6%) and can be inflated by bots; derivative counts are the harder number.
- Distillation figures are Anthropic's attributions; the labs have not confirmed them.
- Leaderboard scores are from secondary roundups and move monthly.
