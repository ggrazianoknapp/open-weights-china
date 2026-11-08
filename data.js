// Every number here is traceable to the `src` field. Dates are the data's as-of date, not the publication date.
// Edit this file to update the site. index.html reads it and draws every chart from it.

window.DATA = {
  asOf: "8 November 2026",

  // Hero stats
  stats: [
    { n: "41%", t: "of Hugging Face downloads went to Chinese models, Feb 2025–Feb 2026 (US: 36.5%)" },
    { n: "151k", t: "models on the Hub are built on Qwen, 2.6× Meta's whole footprint" },
    { n: "4 mo", t: "lag of the best open weights behind the best closed model (Epoch AI, May 2026)" },
    { n: "~200M", t: "Claude exchanges Anthropic attributes to distillation by Chinese labs, 2026" }
  ],

  // Hugging Face downloads by developer, Jan–Aug 2026, millions
  hfDownloads: {
    src: { t: "Hugging Face, State of Open Models: Summer 2026", u: "https://huggingface.co/blog/state-of-open-models-summer-2026" },
    rows: [
      { k: "Qwen (Alibaba)", v: 2045, cn: true },
      { k: "Google", v: 418, cn: false },
      { k: "Meta", v: 227, cn: false }
    ]
  },

  // Derivative models on the Hub, count
  derivatives: {
    src: { t: "Hugging Face, State of Open Models: Summer 2026", u: "https://huggingface.co/blog/state-of-open-models-summer-2026" },
    rows: [
      { k: "Qwen", v: 151448, cn: true },
      { k: "Google (Gemma etc.)", v: 82506, cn: false },
      { k: "Meta (all)", v: 58249, cn: false, note: "derived: Qwen ÷ 2.6" },
      { k: "Llama only", v: 32223, cn: false, note: "derived: Qwen ÷ 4.7" }
    ]
  },

  // Share of new fine-tunes on the Hub built on Qwen, %
  qwenShare: {
    src: { t: "The ATOM Report, arXiv 2604.07190 v2", u: "https://www.aboutchromebooks.com/qwen-ai-statistics/" },
    pts: [ { d: "2024-01", v: 1 }, { d: "2026-02", v: 69 } ]
  },

  // Local inference: GGUF downloads per month, millions
  gguf: {
    src: { t: "Hugging Face, State of Open Models: Summer 2026", u: "https://huggingface.co/blog/state-of-open-models-summer-2026" },
    rows: [ { k: "Qwen", v: 39.6, cn: true }, { k: "Gemma", v: 20.8, cn: false }, { k: "Llama", v: 7.5, cn: false } ]
  },

  // OpenRouter: share of tokens routed to Chinese open-weight models, %
  openrouter: {
    src: { t: "OpenRouter / a16z study, via Manhattan Institute; Newscord roundup", u: "https://manhattan.institute/article/an-american-answer-to-chinas-open-ai-models-a-safe-harbor-for-open-weights" },
    pts: [
      { d: "2024-11", v: 1.2, lbl: "late 2024" },
      { d: "2025-06", v: 30, lbl: "mid-2025 peak" },
      { d: "2026-04", v: 45, lbl: "Apr 2026, weekly" }
    ],
    us: [ { d: "2025-06", v: 70 }, { d: "2026-06", v: 30 } ],
    top6: ["Tencent", "Xiaomi", "DeepSeek", "MiniMax", "Z.ai", "+1 Chinese lab"],
    top6note: "The six most-used models on OpenRouter in late June 2026 were all Chinese open models."
  },

  // Vercel AI Gateway: open-weight share of tokens, %
  vercel: {
    src: { t: "Vercel AI Gateway Production Index, Jul 2026, via Newscord", u: "https://newscord.org/article/chinese-open-weight-models-surpass-us-models-on-hugging-face-and-openrouter--Story_20260626_ItsnotaboutAnthropice54000ee" },
    pts: [ { d: "2026-04", v: 11 }, { d: "2026-06", v: 29 } ],
    spend: 4
  },

  // Artificial Analysis Intelligence Index v4.3.2, late Sep 2026
  aaIndex: {
    src: { t: "Artificial Analysis Intelligence Index v4.3.2, read 25–26 Sep 2026, via slash-digital and Second Talent", u: "https://slash-digital.io/en/insights/open-weight-models-2026/" },
    rows: [
      { k: "Claude Opus 5.5 (max)", v: 58, open: false, cn: false },
      { k: "MiMo-V2.6-Pro (Xiaomi)", v: 46, open: true, cn: true },
      { k: "GLM-5.3 (Z.ai)", v: 45, open: true, cn: true },
      { k: "Kimi K3 (Moonshot)", v: 44, open: true, cn: true },
      { k: "DeepSeek V4.1 Flash", v: 45, open: true, cn: true, note: "Oct 2026 index" },
      { k: "Qwen 3.8 27B (Alibaba)", v: 34, open: true, cn: true, note: "Oct 2026 index" },
      { k: "Inkling Small (Thinking Machines)", v: 26.1, open: true, cn: false, note: "best US open-weight model" }
    ]
  },

  // US–China gap, top model on Arena, % (Stanford AI Index)
  gap: {
    src: { t: "Stanford AI Index 2026 (Arena Elo, Mar 2026) and 2025 edition", u: "https://www.digitalapplied.com/blog/stanford-ai-index-2026-numbers-that-matter-digest" },
    pts: [
      { d: "2023-05", v: 17.5, lbl: "May 2023 (17.5–31.6 range)" },
      { d: "2024-01", v: 9.26, lbl: "Jan 2024" },
      { d: "2025-02", v: 1.7, lbl: "Feb 2025" },
      { d: "2026-03", v: 2.7, lbl: "Mar 2026: 39 Elo, Opus 4.6 vs Dola-Seed-2.0" }
    ]
  },

  // Notable models 2025 and release type by country (Epoch AI via Stanford AI Index / Second Talent)
  releases: {
    src: { t: "Epoch AI data as read by Stanford AI Index 2026 and Second Talent (Jan 2025–Sep 2026)", u: "https://www.secondtalent.com/resources/countries-that-build-the-most-ai-models/" },
    notable2025: [ { k: "United States", v: 59, open: 11 }, { k: "China", v: 35, open: 28 }, { k: "South Korea", v: 8, open: null } ],
    openShare: [ { k: "China", open: 68, api: 18, none: 14 }, { k: "United States", open: 40, api: 42, none: 19 }, { k: "France", open: 72, api: 25, none: 3 } ],
    labs100b: { cn: 14, eu: 2, note: "labs that released open weights for a model of their own above 100B parameters in 2026 (mrkt30 count)" }
  },

  // Anthropic distillation disclosures
  distill: {
    src: { t: "Anthropic disclosures Feb and Sep 2026, via CNBC, TechCrunch, Quartz, The Hacker News", u: "https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html" },
    rows: [
      { k: "Alibaba (Qwen)", v: 151, period: "May–Jul 2026", note: "largest campaign Anthropic has documented; ~3M/day peak; 3,500+ accounts; used to train Qwen" },
      { k: "Moonshot (Kimi)", v: 23, period: "May–Jul 2026", note: "routed Kimi user requests to Claude; Feb disclosure: 3.4M" },
      { k: "MiniMax", v: 13, period: "to Feb 2026", note: "largest of the three named in February" },
      { k: "DeepSeek", v: 12, period: "14 days, Jul 2026", note: "Feb disclosure: 150k targeted exchanges on reasoning" }
    ],
    events: [
      { d: "2026-02-23", t: "Anthropic names DeepSeek, Moonshot, MiniMax: ~24,000 fake accounts, 16M+ exchanges" },
      { d: "2026-06", t: "Anthropic letter to US Commerce on distillation" },
      { d: "2026-09-08", t: "NSA, FBI and CISA jointly accuse six Chinese AI companies" },
      { d: "2026-09-10", t: "Anthropic names seven labs incl. Alibaba and Z.ai; ~200M exchanges total" }
    ],
    labsNamed: ["Alibaba", "Moonshot", "DeepSeek", "Z.ai (Zhipu)", "MiniMax", "+2 unnamed here"]
  },

  // Flagship openness, Chinese labs, Oct 2026
  openness: {
    src: { t: "Lab release notes via Digital Applied, InsiderLLM, geotoolbox, mrkt30, Forkast", u: "https://www.digitalapplied.com/blog/qwen-closed-flagship-pivot-open-weight-retreat-2026" },
    rows: [
      { lab: "DeepSeek", flagship: "V4 Pro / V4.1 Flash", status: "open", lic: "MIT", note: "Fully open at the top tier" },
      { lab: "Xiaomi", flagship: "MiMo-V2.6-Pro", status: "open", lic: "MIT", note: "Entered the AA open index at #1 on release day" },
      { lab: "Tencent", flagship: "Hy4 preview", status: "open", lic: "Apache 2.0", note: "" },
      { lab: "Moonshot", flagship: "Kimi K3", status: "custom", lic: "Kimi K3 licence", note: "Open weights, revenue-gated licence" },
      { lab: "Z.ai (Zhipu)", flagship: "GLM-5.3", status: "custom", lic: "GLM-5.3 licence", note: "Flash tier stays MIT; GLM-5 Turbo closed" },
      { lab: "MiniMax", flagship: "M3", status: "custom", lic: "community licence", note: "" },
      { lab: "Alibaba", flagship: "Qwen3.7/3.8 Max, Plus", status: "closed", lic: "API only", note: "Open mid-tier (3.6-27B) stays Apache 2.0, one generation behind; 3.8-2.4T text weights opened Aug 12 under a custom licence" },
      { lab: "Baidu", flagship: "ERNIE 5", status: "closed", lic: "API only", note: "Last open general model: ERNIE 4.5, Jun 2025" },
      { lab: "ByteDance", flagship: "Doubao Seed 2.1", status: "closed", lic: "API only", note: "Top Chinese model on Arena, Mar 2026" }
    ]
  },

  // Chinese frontier AI safety papers per month (Concordia AI database)
  safetyPapers: {
    src: { t: "Concordia AI, State of AI Safety in China 2026; ChinaTalk", u: "https://aisafetychina.com/" },
    pts: [ { d: "2023-06", v: 12 }, { d: "2025-06", v: 36 }, { d: "2026-04", v: 57 } ],
    interpShare: 15,
    groups: { univ: 20, state: 3, other: 5, total: 28, note: "Shanghai AI Lab alone co-authors about 1 in 10 papers" },
    topUniv: ["Tsinghua", "Peking", "Fudan"],
    pubs: { src: "Stanford AI Index 2026 (2024 data)", cnPub: 17.8, usPub: 7.5, cnCite: 20.6, usCite: 12.6 }
  },

  // Tsinghua links
  tsinghua: [
    { k: "Zhipu / Z.ai (GLM)", t: "founded by Tsinghua professors" },
    { k: "Moonshot (Kimi)", t: "founded by Tsinghua professors" },
    { k: "CnAISDA", t: "the Chinese AISI network; Tsinghua is its main institution" },
    { k: "Beijing AI Safety Hub (BASH)", t: "co-directed by Sören Mindermann and Xu Wei; Andrew Yao is Chief Scientist" }
  ],

  sources: [
    { t: "Hugging Face, State of Open Models: Summer 2026", u: "https://huggingface.co/blog/state-of-open-models-summer-2026" },
    { t: "Concordia AI, State of AI Safety in China 2026", u: "https://aisafetychina.com/" },
    { t: "Stanford AI Index 2026 (digest)", u: "https://www.digitalapplied.com/blog/stanford-ai-index-2026-numbers-that-matter-digest" },
    { t: "Stanford open-weight analysis, Jan 2026 (The Decoder)", u: "https://the-decoder.com/china-captured-the-global-lead-in-open-weight-ai-development-during-2025-stanford-analysis-shows/" },
    { t: "TechCrunch, The real AI race may no longer be at the frontier", u: "https://techcrunch.com/2026/07/14/the-real-ai-race-may-no-longer-be-at-the-frontier-open-models-hugging-face/" },
    { t: "Manhattan Institute, A Safe Harbor for Open Weights", u: "https://manhattan.institute/article/an-american-answer-to-chinas-open-ai-models-a-safe-harbor-for-open-weights" },
    { t: "Second Talent, Which countries build the most AI models", u: "https://www.secondtalent.com/resources/countries-that-build-the-most-ai-models/" },
    { t: "Second Talent, US vs China AI models: cost and performance", u: "https://www.secondtalent.com/resources/us-vs-china-ai-models-cost-performance-value/" },
    { t: "slash-digital, Open-weight models in 2026", u: "https://slash-digital.io/en/insights/open-weight-models-2026/" },
    { t: "CNBC, Feb 2026: Anthropic accuses DeepSeek, Moonshot, MiniMax", u: "https://www.cnbc.com/2026/02/24/anthropic-openai-china-firms-distillation-deepseek.html" },
    { t: "CNBC, Sep 2026: Chinese labs used millions of Claude exchanges", u: "https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html" },
    { t: "Quartz, Sep 2026: Alibaba campaign of 151M exchanges", u: "https://qz.com/anthropic-chinese-ai-labs-distillation-alibaba-deepseek-moonshot-091126" },
    { t: "The Hacker News, Sep 2026: seven labs named", u: "https://thehackernews.com/2026/09/anthropic-says-seven-china-based-ai.html" },
    { t: "Digital Applied, Qwen's closed-flagship pivot", u: "https://www.digitalapplied.com/blog/qwen-closed-flagship-pivot-open-weight-retreat-2026" },
    { t: "InsiderLLM, Is Qwen going closed?", u: "https://insiderllm.com/guides/qwen-open-weights-vs-closed-frontier-2026/" },
    { t: "Forkast, Five labs, thirty days", u: "https://forkast.news/chinese-open-weight-frontier-compresses-five-labs-thirty-days-two-licensing-models/" },
    { t: "mrkt30, Chinese LLMs 2026 map", u: "https://mrkt30.com/chinese-llms-2026-map/" },
    { t: "ChinaTalk, China's AI Safety Money Problem", u: "https://www.chinatalk.media/p/chinas-ai-safety-money-problem" },
    { t: "Sören Mindermann, Why I'm becoming a professor in AI safety in Beijing", u: "https://sorenmindermann.substack.com/p/why-im-becoming-a-professor-in-ai" },
    { t: "LessWrong, Tsinghua started an AI-safety residency", u: "https://www.lesswrong.com/posts/bgTP2SrFcTYBSwbxa/tsinghua-started-an-ai-safety-residency" }
  ]
};
