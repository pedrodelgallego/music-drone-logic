# Plain-language rewrite — style guide

Goal: make every page readable by a **beginner** with little music-production or
engineering knowledge. Cut unnecessary text. Keep all the real instruction.

This is a **prose rewrite only**. The HTML scaffolding, structure, and meaning stay.

## NEVER touch (leave byte-for-byte unless the rule below says otherwise)

- The `<head>`, stylesheet link, `<title>` text may be simplified ONLY if it is a long
  marketing-style title; keep it short and descriptive otherwise.
- The whole nav block, hamburger (`#nav-toggle` + `.hamburger` + `.nav-backdrop`),
  `.page-nav` prev/next block, and `.footer`. Do not change link text in nav/page-nav,
  hrefs, numbers, or order.
- Every `href`, `src`, `id`, `class`, `<svg>…</svg>`, `<kbd>`, `<span class="code">`,
  `<span class="menu">`, table STRUCTURE (rows/cols), and form/checkbox elements.
- Technical facts and exact values: gear names (MicroFreak, Digitakt II, MOTU M4,
  Live 12, DT 990 Pro, Launchpad), numbers (−12 dBFS, 48 kHz, 256 samples, 75 %, BPM),
  signal-path facts, button names, menu paths, lab/step numbers, deliverable names.
- Don't add or remove links, steps, table rows, or whole sections. Same teaching, simpler words.

## DO change the prose

1. **One idea per sentence.** Break long multi-clause sentences (especially em-dash
   chains) into short ones. Aim for sentences a beginner reads once and gets.
2. **Kill literary/poetic phrasing.** Replace evocative writing with plain meaning:
   - "geologic patience" → "changes so slowly you only notice it over minutes"
   - "the fader is the score" → "the volume balance is the whole composition"
   - "duration as the instrument" → "the length of the sound is the point"
   - "the desk as performer" → "you play the mixer live, like an instrument"
   Keep the teaching point; drop the flourish.
3. **Explain jargon in everyday words, the first time it appears on a page.** Examples:
   - gain stage → a point where you can turn the volume up or down
   - nominal level → the target volume you pick and write down
   - unity gain → the "change nothing" setting (0 dB)
   - clipping → when a sound is too loud and the top gets cut off, adding a harsh edge
   - saturation → gentle overload that adds warmth/grit
   - LFO → a slow automatic knob-mover that adds movement
   - p-lock (parameter lock) → a setting saved to one single step
   - resampling → recording your own sound back in to reshape it
   - concrète → music built from recordings of real-world sounds
   Keep the real term in **bold or once in parentheses** so it's still learnable, then use
   plain words. Do not strip a term the lab is explicitly teaching — define it instead.
4. **Cut redundancy and filler.** If a point is made twice, keep the clearest one.
   Remove throat-clearing ("It is worth noting…", "Importantly…"), and sentences that
   add mood but no instruction. Tighten "What this lab certifies / The point" boxes to the
   essential sentence or two.
5. **Plain connectors.** Prefer "so / because / then / but" over "—" pile-ups and semicolons.
6. **Keep a warm, direct, encouraging voice.** Talk to the student as "you." Short paragraphs.

## Tone target

Before: "A near-skeleton of low pulse and sine, and almost nothing else — all the body,
dirt, and articulation come from how hard the signal hits each stage."

After: "There's almost nothing here: a low pulse and a plain sine tone. All the weight and
grit come from how hard that signal is pushed through each stage of the chain."

## Practical rules

- Don't rename a page's `<h1>` topic; you may simplify its wording.
- Keep `.lede` paragraphs but make them plainer and often shorter.
- Tables of links/labs: you may simplify the short description cells, but keep every row,
  every link, and the # / numbering. Don't make them longer.
- After editing, the page must still open and work: nav, hamburger, prev/next, all links.
- Do not introduce new CSS classes or inline styles beyond what's already used.
