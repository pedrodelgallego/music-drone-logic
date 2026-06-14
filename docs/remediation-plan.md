# Workshop Remediation Plan

Status: v2 — **Tiers 1–3 authored.** Derived from the deep assessment
(concept, sound design, sound engineering, audio path, gear, listening,
pedagogy). Ordered by **leverage**, not block number.

## Completion status (v2)

Authored in this pass (content written, navigation wired, scaffold text removed):

- **Tier 1** — DONE. lab-025b (Score as System), lab-022b (Loudness & the
  Master), lab-003b (Measurement Tools); VCV Rack / Pd-SuperCollider-TidalCycles
  / Scala escape-hatch callouts added across Block 6 + references.
- **Tier 2.1–2.2** — DONE. lab-006b (Drum Synthesis), lab-013b (FM & Inharmonic),
  lab-024b (West-Coast Voice), lab-007b (Reusable Instruments), lab-008b (Voice
  as Material), lab-033b (Near-Silence).
- **Tier 2.3** — DONE. Monitoring/room, recording fundamentals, physical layer,
  clock depth (jitter/PDC/word-clock/Link), CV/gate/MIDI/audio domains,
  compression/EQ principles, bus/group routing, re-amping, M/S + Haas + quad,
  granular instrument — added to the relevant labs/indexes.
- **Tier 2.4** — DONE. 40 new replication (`rep-…`) pages authored across blocks
  2/4/6/7/8 and wired into L2/L4/L6/L7/L8 (free improv/EAI, GRM, spectralism,
  Black experimental lineage, extended-vocal/feminist, historical pioneers,
  sound art, global breadth, turntablism, noise, livecoding).
- **Tier 2.5** — DONE. Contemplative pass, social/historical prompt, score-study
  prompts (L1–L3), optional lineage track added to the programmes.
- **Tier 2.6** — DONE. Lab Notes 003–008 each built out to a full 7-page deep
  reference (42 pages), nav-synced, linked back to their blocks. Overview page
  re-framed from "future" to available.
- **Tier 3** — DONE. Voice-development prompts (Blocks 4–8), large-scale-form
  (lab-030 + C7), release context (C7), excellence rubric tier (C1–C7),
  self-validation aids + tool fallbacks (references), sound-as-sign (L8),
  gear-honesty notes (tape B4 / no-input B7), hydrophone (B2), performance-rig
  depth (B7). Plan matrix in `docs/workshop-plan.md` updated with the 9 b-labs.

NOT yet authored (the one remaining big-ticket item):

- **MISSING DEEP-DIVE LAB NOTES** — the six *net-new* craft/method Lab Notes
  (The Score, The Finished Record, Synthesis from Zero, Concrète, Tuning,
  Feedback) are NOT built as standalone multi-page guides. Their paired *labs*
  exist (025b/022b/006b+013b+024b), but the full Lab-Note treatments (guide-009+)
  remain a future effort. See that section below.

Verification done structurally (no scaffold text remains, div/details tags
balance, nav blocks intact, internal links resolve). Browser spot-check still
recommended per CLAUDE.md.

---

(Original v1 framing follows; Tier 1 items are cheap, high-impact, and deepen
the systems spine; Tier 3 items are worth doing but lower urgency. A **Decline**
section records what is deliberately out of scope and why.)

## How to use this document

- Each `[ ]` is one discrete unit of authoring work.
- New build labs are added as **b-variants** (e.g. `lab-026b.html`) to avoid
  renumbering the 001–035 / R1–R8 sequence. Renumbering would force a hand
  edit of the nav block and page-nav in dozens of files (see CLAUDE.md).
- Every new HTML page must be wired by hand: the `<nav class="nav">` block,
  the hamburger toggle trio, the `.page-nav` prev/next, and the block
  `index.html` lab list. A checkbox is included for that wiring on each lab.
- Listening additions are `rep-<artist>-<work>.html` files following the
  existing kebab-case convention, plus an entry in the block's `listening-l*`
  programme page.
- Reuse existing CSS components (`.cards`, `.callout`, `.step`, `.signal-flow`,
  `.param-table`, `.checklist`). Do not invent classes.
- Acceptance criterion for any new lab: a **solo learner can complete it at
  the bench and self-assess the result** (against a reference, a re-run, or a
  measurement). If it needs other people or a venue, it goes in Decline.

---

## TIER 1 — Fix first (cheap, highest leverage, deepens the spine)

### 1.1 Score-as-System lab — the single highest-leverage addition
Closes the largest conceptual gap (proposition / notation / indeterminacy /
authored voice). Uses repertoire already present in Block 6 (Wolff, Brown,
Cage). A score *is* a system, so this deepens rather than dilutes the frame.

- [ ] Author `workshop/block-6/lab-025b.html` — **"The Score as System"** (Track/É lab).
  <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] Step sequence: write a text/graphic/event score (rule set, not audio).
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] Realize the score once at the bench; print it.
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] Realize the **same** score a second time with different material/decisions; print it.
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] Compare the two realizations; the delta between them is the lesson.
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] Pass gate: two prints from one score + a written statement of which rule produced the difference.
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
  - [ ] `faultType` metadata: ambiguity/under-specification of the score.
    <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
- [ ] Add listening callout linking the existing Block 6 score works (Wolff `for-1-2-or-3-people`, Brown `december-1952`, Cage `music-of-changes`).
  <!-- Scaffold contennt at workshop/block-6/lab-025b.html -->
- [ ] Wire nav, hamburger, page-nav, and the Block 6 `index.html` lab list.
  <!-- Scaffold contennt at workshop/block-6/index.html; workshop/block-6/lab-023.html; workshop/block-6/lab-024.html; workshop/block-6/lab-025.html; workshop/block-6/lab-026.html -->
- [ ] Update `docs/workshop-plan.md` curriculum matrix with the new lab.
  <!-- Scaffold contennt at docs/workshop-plan.md -->

### 1.2 Measurement & mastering spine — the engineering gap most at odds with the course's own promise
The course promises "make clean recordings, diagnose what fails, defend one,"
but prints to "−3 dBFS peak" with no external standard to defend against.

- [ ] Author `workshop/block-5/lab-022b.html` — **"Loudness & the Master"** (Bench lab).
  <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Teach peak vs. RMS vs. LUFS vs. true-peak; install/route a LUFS meter (Live's own or a free plugin).
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Measure a finished piece's integrated LUFS and true-peak.
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Targets for streaming (~−14 LUFS) vs. club/loud masters; why they differ.
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Dither: when and why (24→16-bit delivery).
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Reference-track method: match loudness/spectral balance to a chosen reference.
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Limiting strategy and the loudness-vs-dynamics trade-off.
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
  - [ ] Pass gate: one piece delivered at a named LUFS target with a metering screenshot and a defended decision.
    <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
- [ ] Add a "translation test" checklist (monitors / headphones / phone / mono) and cross-link from C4 and C7.
  <!-- Scaffold contennt at workshop/block-5/lab-022b.html -->
- [ ] Add metering/analysis tools to the Block 5 gear tags and `references.html`.
  <!-- Scaffold contennt at workshop/references.html -->
- [ ] Wire nav, hamburger, page-nav, Block 5 `index.html`.
  <!-- Scaffold contennt at workshop/block-5/index.html -->

### 1.3 Name the software escape hatches (no new labs — callouts + references)
The modular/generative/microtonal practice is silently gated behind hardware
the learner may not own.

- [ ] Add a **VCV Rack (free)** callout to Block 6 `index.html` and labs 023–026 as the software modular path.
  <!-- Scaffold contennt at workshop/block-6/index.html; workshop/block-6/lab-023.html; workshop/block-6/lab-024.html; workshop/block-6/lab-025.html; workshop/block-6/lab-026.html -->
- [ ] Add a **Pure Data / SuperCollider / TidalCycles** callout to the generative labs (023, 024) as the code path for algorithmic work.
  <!-- Scaffold contennt at workshop/block-6/lab-023.html; workshop/block-6/lab-024.html -->
- [ ] Add **Scala** (the tuning editor) to Lab 026 and `references.html`; stop assuming hand-calculated `.ascl` files.
  <!-- Scaffold contennt at workshop/block-6/lab-026.html; workshop/references.html -->
- [ ] Add a one-paragraph "tool fallbacks" note to `references.html` mapping each Year 2–3 practice to a free software equivalent.
  <!-- Scaffold contennt at workshop/references.html -->

---

## TIER 2 — Substantial value, moderate effort

### 2.1 Synthesis-from-scratch (sound-design depth)
The course admires Buchla/FM/drum-design with its ears but cannot build them.

- [ ] Author `workshop/block-2/lab-006b.html` — **"Drum Synthesis from Scratch"** (Track/É).
  <!-- Scaffold contennt at workshop/block-2/lab-006b.html -->
  - [ ] Synthesize kick, hat, clap from oscillators + envelopes + noise (Ableton Operator/Drum Synths or MicroFreak), not samples.
    <!-- Scaffold contennt at workshop/block-2/lab-006b.html -->
  - [ ] Pass gate: a 3-voice kit built entirely from synthesis + a signal-flow diagram per voice.
    <!-- Scaffold contennt at workshop/block-2/lab-006b.html -->
- [ ] Author `workshop/block-4/lab-013b.html` — **"FM & Inharmonic Spectra"** (Track/É) using Ableton **Operator**.
  <!-- Scaffold contennt at workshop/block-4/lab-013b.html -->
  - [ ] Teach phase modulation, operator ratios, harmonic vs. inharmonic results.
    <!-- Scaffold contennt at workshop/block-4/lab-013b.html -->
- [ ] Author `workshop/block-6/lab-024b.html` — **"West-Coast Voice"** (É): wavefolding + low-pass gate behavior (software modular or Strega), tying to the Buchla/Ciani listening.
  <!-- Scaffold contennt at workshop/block-6/lab-024b.html -->
- [ ] Add an **Ableton Suite synthesis tour** callout (Operator, Wavetable, Sampler, Granulator, Corpus) to Block 2 `index.html` — these are owned and unused.
  <!-- Scaffold contennt at workshop/block-2/index.html -->
- [ ] Author `workshop/block-2/lab-007b.html` — **"Reusable Instruments"** (Bench/É): crystallize a built voice into a Rack with Macros for re-use.
  <!-- Scaffold contennt at workshop/block-2/lab-007b.html -->

### 2.2 Voice, silence, and body as material
- [ ] Author `workshop/block-2/lab-008b.html` — **"Voice as Material"** (Track): your own voice via the field kit; formant/processing/resynthesis; no melodic-instrument crutch.
  <!-- Scaffold contennt at workshop/block-2/lab-008b.html -->
- [ ] Author `workshop/block-8/lab-033b.html` — **"Near-Silence"** (É): compose with silence and threshold-level material as designed states; ties to the listening-transformation lineage.
  <!-- Scaffold contennt at workshop/block-8/lab-033b.html -->

### 2.3 Engineering & audio-path depth (beyond the Tier-1 spine)
- [ ] Expand Block 1 or add `workshop/block-1/lab-003b.html` — **"Measurement Tools"**: spectrum analyzer + correlation/phase meter as proactive instruments (currently phase is learned only by accident).
  <!-- Scaffold contennt at workshop/block-1/lab-003b.html -->
- [ ] Add a **compression & EQ principles** section (knee, lookahead, makeup, Q, shelf vs. bell, parallel compression) to Block 5 — replace the single copy-paste compressor recipe.
  <!-- Scaffold contennt at workshop/block-5/index.html; workshop/block-5/lab-021.html; workshop/block-5/lab-022.html -->
- [ ] Add **monitoring & room** content to Block 1: monitor calibration, reference SPL, room treatment basics, listening-fatigue/hearing-health note.
  <!-- Scaffold contennt at workshop/block-1/index.html; workshop/block-1/lab-001.html -->
- [ ] Add **recording fundamentals** explanation to Block 1 (why 48 kHz/24-bit, A/D-D/A, noise floor, crest factor — make lab-004b's crest comparison explicit).
  <!-- Scaffold contennt at workshop/block-1/lab-001.html; workshop/block-1/lab-004b.html -->
- [ ] Add **clock depth** to Block 1 lab-002: jitter measurement, PDC (plugin delay compensation), word-clock/Link.
  <!-- Scaffold contennt at workshop/block-1/lab-002.html -->
- [ ] Add a **CV / gate / MIDI / audio domain** explainer to Block 1 and cross-link from Block 6 (modular) — currently the control-voltage domain has no mental model.
  <!-- Scaffold contennt at workshop/block-1/lab-002.html; workshop/block-6/index.html -->
- [ ] Add **bus/group/parallel routing** and Racks/Macros topology to Block 5 (currently a flat track list).
  <!-- Scaffold contennt at workshop/block-5/index.html; workshop/block-5/lab-022.html -->
- [ ] Add a **re-amping / external-FX-loop** procedure (out → hardware → in → latency compensation) to Block 5.
  <!-- Scaffold contennt at workshop/block-5/lab-020.html; workshop/block-5/lab-022.html -->
- [ ] Add **M/S, Haas/precedence, and multichannel/quad** to Block 5 stereo content (Block 7 references Ciani's quadraphonic sets).
  <!-- Scaffold contennt at workshop/block-5/lab-021.html -->
- [ ] Add **physical-layer** depth to Block 1: impedance-balancing, line vs. instrument level, DI, cable length, ground loops.
  <!-- Scaffold contennt at workshop/block-1/lab-001.html -->

### 2.4 Listening — genuine repertoire gaps (verified absent)
Each is a `rep-<artist>-<work>.html` page + an entry in the relevant
`listening-l*` programme. Group by strand.

- [ ] **Free improvisation / EAI** (most structurally important — Block 7 has no improv tradition behind it). Add to L7:
  <!-- Scaffold contennt at workshop/block-1/lab-001.html -->
  - [ ] `rep-amm-*`, `rep-derek-bailey-*`, `rep-evan-parker-*`, `rep-keith-rowe-*`, `rep-ikue-mori-*`, `rep-otomo-yoshihide-*`, `rep-cecil-taylor-*`.
    <!-- Scaffold contennt at workshop/block-7/rep-amm-selected-work.html; workshop/block-7/rep-derek-bailey-selected-work.html; workshop/block-7/rep-evan-parker-selected-work.html; workshop/block-7/rep-keith-rowe-selected-work.html; workshop/block-7/rep-ikue-mori-selected-work.html; workshop/block-7/rep-otomo-yoshihide-selected-work.html; workshop/block-7/rep-cecil-taylor-selected-work.html -->
- [ ] **Acousmatic / GRM lineage** (add to L2 or L4):
  <!-- Scaffold contennt at workshop/block-7/rep-amm-selected-work.html; workshop/block-7/rep-derek-bailey-selected-work.html; workshop/block-7/rep-evan-parker-selected-work.html; workshop/block-7/rep-keith-rowe-selected-work.html; workshop/block-7/rep-ikue-mori-selected-work.html; workshop/block-7/rep-otomo-yoshihide-selected-work.html; workshop/block-7/rep-cecil-taylor-selected-work.html -->
  - [ ] `rep-karlheinz-stockhausen-*`, `rep-bernard-parmegiani-*`, `rep-francois-bayle-*`, `rep-luc-ferrari-*`, `rep-pierre-henry-*`.
    <!-- Scaffold contennt at workshop/block-2/rep-karlheinz-stockhausen-selected-work.html; workshop/block-2/rep-de-natura.html; workshop/block-2/rep-francois-bayle-selected-work.html; workshop/block-2/rep-presque-rien.html; workshop/block-2/rep-variations.html -->
- [ ] **Spectralism** (add to L6 or L8): `rep-gerard-grisey-*`, `rep-tristan-murail-*`, `rep-kaija-saariaho-*`.
  <!-- Scaffold contennt at workshop/block-6/rep-gerard-grisey-selected-work.html; workshop/block-6/rep-tristan-murail-selected-work.html; workshop/block-6/rep-kaija-saariaho-selected-work.html -->
- [ ] **Black experimental traditions** — add names + reframe existing Drexciya/Jlin/Sun Ra as a named lineage in the programme prose:
  <!-- Scaffold contennt at workshop/block-6/rep-gerard-grisey-selected-work.html; workshop/block-6/rep-tristan-murail-selected-work.html; workshop/block-6/rep-kaija-saariaho-selected-work.html -->
  - [ ] `rep-julius-eastman-*`, `rep-george-lewis-*`, `rep-moor-mother-*`.
    <!-- Scaffold contennt at workshop/block-8/rep-julius-eastman-selected-work.html; workshop/block-8/rep-george-lewis-selected-work.html; workshop/block-8/rep-moor-mother-selected-work.html -->
- [ ] **Extended vocal / feminist electronic** (add to L2/L8): `rep-meredith-monk-*`, `rep-joan-la-barbara-*`, `rep-diamanda-galas-*`, `rep-pamela-z-*`, `rep-beatriz-ferreyra-*`, `rep-else-marie-pade-*`, `rep-maryanne-amacher-*`.
  <!-- Scaffold contennt at workshop/block-8/rep-meredith-monk-selected-work.html; workshop/block-8/rep-joan-la-barbara-selected-work.html; workshop/block-8/rep-diamanda-galas-selected-work.html; workshop/block-8/rep-pamela-z-selected-work.html; workshop/block-8/rep-beatriz-ferreyra-selected-work.html; workshop/block-8/rep-else-marie-pade-selected-work.html; workshop/block-8/rep-maryanne-amacher-selected-work.html -->
- [ ] **Historical pioneers** (add to L4/L6): `rep-wendy-carlos-*`, `rep-clara-rockmore-*`, `rep-raymond-scott-*`, `rep-tod-dockstader-*`.
  <!-- Scaffold contennt at workshop/block-4/rep-wendy-carlos-selected-work.html; workshop/block-4/rep-clara-rockmore-selected-work.html; workshop/block-4/rep-raymond-scott-selected-work.html; workshop/block-4/rep-tod-dockstader-selected-work.html -->
- [ ] **Sound art / acoustic ecology** (add to L2): `rep-francisco-lopez-*`, `rep-annea-lockwood-*`, `rep-bernie-krause-*`, `rep-bill-fontana-*`, `rep-christina-kubisch-*`.
  <!-- Scaffold contennt at workshop/block-2/rep-la-selva.html; workshop/block-2/rep-sound-map.html; workshop/block-2/rep-bernie-krause-selected-work.html; workshop/block-2/rep-bill-fontana-selected-work.html; workshop/block-2/rep-christina-kubisch-selected-work.html -->
- [ ] **Geographic breadth** (add across blocks): gamelan, deeper Hindustani, continental African polyrhythm, Arabic/maqam, Latin-American electroacoustic — at least one focused entry each.
  <!-- Scaffold contennt at workshop/block-2/rep-la-selva.html; workshop/block-2/rep-sound-map.html; workshop/block-2/rep-bernie-krause-selected-work.html; workshop/block-2/rep-bill-fontana-selected-work.html; workshop/block-2/rep-christina-kubisch-selected-work.html -->
- [ ] **Turntablism / plunderphonics** (add to L4): `rep-christian-marclay-*`, `rep-john-oswald-*`.
  <!-- Scaffold contennt at workshop/block-4/rep-christian-marclay-selected-work.html; workshop/block-4/rep-john-oswald-selected-work.html -->
- [ ] **Livecoding / Algorave** (add to L6): one Algorave/TidalCycles/Sonic Pi performance.
  <!-- Scaffold contennt at workshop/block-6/lab-023.html; workshop/block-6/lab-024.html -->
- [ ] **Noise depth** (add to L4): `rep-hijokaidan-*`, `rep-prurient-*`, `rep-puce-mary-*` (Merzbow currently a single entry).
  <!-- Scaffold contennt at workshop/block-4/rep-hijokaidan-selected-work.html; workshop/block-4/rep-prurient-selected-work.html; workshop/block-4/rep-puce-mary-selected-work.html -->

### 2.5 Listening — method additions
- [ ] Add a **contemplative listening pass** to the programme method (sit with a work for 20 min; what changes in *you*, not the sound) — Lucier/Oliveros lineage already in repertoire.
  <!-- Scaffold contennt at workshop/block-2/listening-l2.html; workshop/block-4/listening-l4.html; workshop/block-6/listening-l6.html -->
- [ ] Add a **social/historical context prompt** (one per block): who made this, for whom, with access to what, at whose expense.
  <!-- Scaffold contennt at workshop/block-1/listening-l1.html; workshop/block-2/listening-l2.html; workshop/block-3/listening-l3.html; workshop/block-4/listening-l4.html; workshop/block-5/listening-l5.html; workshop/block-6/listening-l6.html; workshop/block-7/listening-l7.html; workshop/block-8/listening-l8.html -->
- [ ] Add **score-study** prompts to L1–L3 (what does the score look like; why does notation matter) — feeds 1.1.
  <!-- Scaffold contennt at workshop/block-1/listening-l1.html; workshop/block-2/listening-l2.html; workshop/block-3/listening-l3.html -->
- [ ] Add an **optional lineage track**: follow one artist or tradition across 30 years (counterweight to the technique-only organization).
  <!-- Scaffold contennt at workshop/references.html; workshop/block-8/listening-l8.html -->

### 2.6 Write the missing deep references
- [ ] Author full content for **Lab Note 003** (`guide-003/`, Time Systems) — currently a stub.
  <!-- Scaffold contennt at guide-003/ -->
- [ ] Author **Lab Note 004** (Transformation Systems).
  <!-- Scaffold contennt at guide-004/index.html -->
- [ ] Author **Lab Note 005** (Space as Instrument).
  <!-- Scaffold contennt at guide-005/index.html -->
- [ ] Author **Lab Note 006** (Generative Decision Systems).
  <!-- Scaffold contennt at guide-006/index.html -->
- [ ] Author **Lab Note 007** (Performance Systems).
  <!-- Scaffold contennt at guide-007/index.html -->
- [ ] Author **Lab Note 008** (Authoring the System).
  <!-- Scaffold contennt at guide-008/index.html -->
- [ ] OR, if not authoring soon: downgrade the "Deep reference" links on `workshop/index.html` to clearly mark them as not-yet-written, so they don't over-promise.
  <!-- Scaffold contennt at workshop/index.html -->

---

## TIER 3 — Worth doing, lower urgency

- [ ] Add **voice-development scaffolding earlier than Block 8**: a recurring "what are you refusing?" reflection prompt from Block 4 onward, so the signature isn't first examined in L8.
  <!-- Scaffold contennt at workshop/block-4/index.html; workshop/block-5/index.html; workshop/block-6/index.html; workshop/block-7/index.html; workshop/block-8/listening-l8.html -->
- [ ] Add a **large-scale-form lab** (20–40 min arc / album-as-statement) distinct from Lab 030's curation focus.
  <!-- Scaffold contennt at workshop/block-7/lab-030.html; workshop/block-8/capstone-c7.html -->
- [ ] Add a **release-context** unit to Block 8 / C7: distribution, artist statement, positioning, audience.
  <!-- Scaffold contennt at workshop/block-8/capstone-c7.html -->
- [ ] Add an **"excellence" rubric tier** to each capstone (currently only a minimum pass gate exists).
  <!-- Scaffold contennt at workshop/block-1/capstone-c1.html; workshop/block-3/capstone-c2.html; workshop/block-4/capstone-c3.html; workshop/block-5/capstone-c4.html; workshop/block-6/capstone-c5.html; workshop/block-7/capstone-c6.html; workshop/block-8/capstone-c7.html -->
- [ ] Add **self-validation aids** for the solo learner: reference recordings, example specs, and "is this fault real / is my gain right?" comparison worksheets.
  <!-- Scaffold contennt at workshop/references.html; docs/workshop-plan.md -->
- [ ] Add a **sound-as-sign** prompt (quotation, reference, meaning) somewhere in Block 8 listening.
  <!-- Scaffold contennt at workshop/block-8/listening-l8.html -->
- [ ] Add **gear mismatch honesty** notes: flag the no-input-board (Block 7) and tape-machine (Block 4) approximations explicitly, with the software/hardware fallback stated.
  <!-- Scaffold contennt at workshop/block-4/index.html; workshop/block-7/index.html -->
- [ ] Add **hydrophone** to the Block 2 field-kit options (water works appear in the listening list).
  <!-- Scaffold contennt at workshop/block-2/index.html; workshop/block-2/lab-008.html -->
- [ ] Add a **dedicated granular instrument** option to Block 4 (currently stock-Live/Digitakt tricks only).
  <!-- Scaffold contennt at workshop/block-4/lab-015.html -->
- [ ] Add **performance-rig depth** to Block 7: faders-per-channel mixer, expression pedals, outboard spring/tape for the dub/feedback work.
  <!-- Scaffold contennt at workshop/block-7/lab-031.html -->

---

## MISSING DEEP-DIVE LAB NOTES — craft/method verticals

Distinct from "write the stub Lab Notes 003–008" (Tier 2.6). Those notes are
the **systems spine** — one per block, organized by mechanism (Time,
Transformation, Space, Decision, Performance, Authoring) — and are *owned but
unwritten*. The notes below are **craft/method verticals that no single block
owns end-to-end**: a systems note teaches a mechanism, but never takes one
craft from zero to a finished, defensible result. Lab Notes 001/002 are the
template (full multi-page courses producing a finished piece).

**Design principle:** add *method* deep-dives, not *genre* deep-dives. A dub
note / footwork note / ambient note would drift into recipes — the thing the
workshop exists to avoid ("genre is a context tag"). Each note below must pass
the workshop's own test: a solo learner takes the method to a finished,
self-assessable result, and it deepens the systems frame rather than competing
with it.

Numbering: assign new notes 009+ (or named), parallel to 001/002; do not
overload the block-mapped 003–008.

Ordered by leverage:

- [ ] **Lab Note — *The Score*** (concept). *Net-new.* Instruction-based composition: text / graphic / event / open-form scores; realize one twice; compare deltas; defend the rule. Closes the #1 conceptual gap (proposition / notation / indeterminacy / authored voice). Uses Block 6 repertoire (Wolff, Brown, Cage) already present. Pairs with Tier 1.1.
  <!-- Scaffold contennt at workshop/block-7/lab-031.html -->
- [ ] **Lab Note — *The Finished Record*** (engineering / delivery). *Net-new.* The back half of production: mixing principles, metering (LUFS / true-peak / correlation), mastering, dither, reference-matching, translation, delivery at a named target. Closes the biggest engineering gap. Pairs with Tier 1.2. (No existing note covers delivery — 005 is effects routing.)
  <!-- Scaffold contennt at workshop/block-7/lab-031.html -->
- [ ] **Lab Note — *Synthesis from Zero*** (sound design). *Net-new.* Build every sound from oscillators + envelopes: subtractive → FM/phase-mod (Operator) → drum synthesis (no samples) → west-coast (wavefolding, low-pass gates) → additive/spectral. Produces a piece with no sampled material. Closes the biggest sound-design gap. Pairs with Tier 2.1.
  <!-- Scaffold contennt at workshop/block-7/lab-031.html -->
- [ ] **Lab Note — *Concrète*** (field-to-finished). *Net-new.* The Schaeffer/GRM method end-to-end: capture → reduced listening → typo-morphology → montage → the acousmatic piece. Closes musique-concrète depth + the sound-as-material-vs-meaning gap. The non-beat, non-drone exemplar counterpart to 001/002.
  <!-- Scaffold contennt at workshop/block-7/lab-031.html -->
- [ ] **Lab Note — *Tuning*** (just intonation / microtonality). *Expansion candidate* (deep arm of 006, strong enough to stand alone). Harmonic series, JI, drones-in-tune, Scala, a finished piece in non-12-TET. Closes the microtonal gap Lab 026 only touches. La Monte Young / Hennix / Arkbro lineage already in the listening list.
  <!-- Scaffold contennt at workshop/block-6/lab-026.html; workshop/references.html -->
- [ ] **Lab Note — *Feedback*** (no-input / self-oscillating systems). *Expansion candidate* (deep arm of 007, strong enough to stand alone). Build, tune, stabilize, and safely perform an unstable feedback instrument. Closes the no-input gap Block 7 references but the gear/method under-serve.
  <!-- Scaffold contennt at workshop/block-6/lab-026.html; workshop/references.html -->

Priority sequence: **The Score → The Finished Record → Synthesis from Zero**
(close concept, engineering, sound-design — the three biggest gaps), then
**Concrète**, then fold or write **Tuning / Feedback**.

---

## DECLINE — deliberately out of scope (different course; breaks the solo, self-assessable model)

Recorded so it is not re-litigated. The *content* is valid; it belongs to the
social-practice / performance-art tradition, which depends on people and
venues the workshop does not assume. Where a fragment survives translation to
solo bench work, it has already been absorbed above (text score → 1.1;
no-electronics / voice-body → 2.2; site-as-collaborator → could extend Block 2).

- [ ] **DECLINED** — a standalone "Experimental Music as Situation" block.
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] **DECLINED** — "audience changes the result" labs (need an audience; no solo self-assessment loop).
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] **DECLINED** — "re-perform one score with three people" labs (need three people).
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] **DECLINED** — public-space / transmission / broadcast pieces as *core* (infrastructure, permits, no bench self-assessment).
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] **DECLINED** — theatricality / performance-art / ritual as core (optional electives only).
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] **DECLINED** — ensemble-improvisation *as practice* (keep as listening + reframe improv as a real-time decision system you run solo against an autonomous patch).
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->
- [ ] Optionally: add an **"Extensions (needs other people)"** appendix listing the declined labs honestly as cohort/elective work with the prerequisite stated.
  <!-- Scaffold contennt at docs/extensions-needs-other-people.md -->

---

## CROSS-CUTTING / INFRASTRUCTURE

- [ ] Maintain the nav/hamburger/page-nav sync discipline for every new page (CLAUDE.md).
  <!-- Scaffold contennt at all new scaffold pages -->
- [ ] Keep `docs/workshop-plan.md` curriculum matrix in sync as labs are added.
  <!-- Scaffold contennt at docs/workshop-plan.md -->
- [ ] Add all new tools/instruments to `workshop/references.html` and per-block gear tags.
  <!-- Scaffold contennt at workshop/references.html -->
- [ ] Verify each new page in a browser: nav active state, hamburger toggle, prev/next links.
  <!-- Scaffold contennt at workshop/references.html -->
- [ ] Decide b-variant vs. renumber policy up front and apply consistently (this plan assumes b-variants).
  <!-- Scaffold contennt at docs/remediation-plan.md -->
