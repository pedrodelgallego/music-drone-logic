---
title: "Implementation Roadmap: Closing the Coverage Gaps (Fundamentals Primers + Gear Integration)"
type: implementation-roadmap
variant: agentic
status: draft
version: "1.0"
author: Pedro
date: 2026-06-13
upstream: docs/equipment-and-concept-coverage.md
downstream: workshop/coverage.html, workshop/block-0/, workshop/references.html
horizon: "H1 (no-buy primers) → H2 (Digitone II) → H3 (deferred hardware)"
effort: "12–18 build sessions for the no-buy layer; deferred hardware is purchase-gated"
topics: [fundamentals, primers, synthesis, gear-integration, governance]
---

# Implementation Roadmap — Closing the Coverage Gaps

> Executor: **Claude Code**, building static HTML pages anchored to owned gear (MicroFreak, Digitakt II, incoming Digitone II, MOTU M4, Launchpad Pro MK3, Ableton Live 12 Suite). No build system, no JS. Source of truth for *what* to build: `docs/equipment-and-concept-coverage.md`.

*(Note: requested output path is `docs/implementation-roadmap.md`, used here instead of the skill's default `strategy/` location — this repo has no strategy vault.)*

---

## 1. Executive Summary (SCR)

**Situation.** The workshop is a near-complete experimental-music course. Concept coverage is strong (most topics 4–5/5); the assessment in `equipment-and-concept-coverage.md` scored every domain on **Concept** and **Hands-on** axes and surfaced **39 proposed additions**.

**Complication.** Two structural gaps remain, both *no-buy*: (1) a missing **fundamentals ("atoms") layer** — the course teaches the systems layer of synthesis, rhythm, harmony, mixing, effects, and ear training while *assuming* the beginner building blocks (verified: pulse-width = 0 lessons, time-signature/counting = 0, named scales = 0, keys = 0, compression-params = 1); and (2) gear-tied gaps activated by the **incoming Digitone II** (polyphony, deep FM, rig integration). Today **1 of 8 primers exists** (12%) and the Digitone II is uncovered (0%).

**Resolution.** Build an optional **primer layer (Block 00 / "Lab Note 000")** beneath Block 0, then a **Digitone II integration wave**, governed by a one-time **Gear Purchase Gate**, then operating-discipline and navigation pages — all anchored to gear already owned. Deferred hardware pages stay parked behind the purchase gate. Build first what is highest-leverage and free: the **Synthesis-from-Scratch primer** and the **Gear Purchase Gate**.

---

## 2. From → To (with Gap)

| Dimension | From (today) | To (target) | Gap |
|---|---|---|---|
| Fundamentals primers live | 0 of 8 (0%) | 8 of 8 (100%) | **8 primers** |
| "Atoms" domains taught from scratch | 1 of 9 (11%) — audio engineering only | 9 of 9 (100%) | **8 domains** |
| Synthesis Concept score (fundamentals row) | 3/5 | 5/5 | **+2** |
| Rhythm / Harmony Concept | 2/5, 2/5 | 4/5, 4/5 | **+2 each** |
| Digitone II coverage | 0 pages (0%) | rig + FM + polyphony (3 pages) | **3 pages** |
| No-buy governance pages (gate, survival, controller map…) | 0 of 6 (0%) | 6 of 6 (100%) | **6 pages** |
| Gear purchases with a pass/fail gate | 0% (ad hoc) | 100% (gated) | **the gate itself** |
| Deferred hardware pages | 0 (correctly parked) | built on purchase only | trigger-gated |

**Headline:** close **~20 no-buy pages** across H1–H2; defer **~6 hardware pages** to H3 (purchase-gated). The constraint is **Pedro's review bandwidth + token budget**, not money.

---

## 3. The Thesis

The workshop already proves one thing decisively: when a domain's **atoms are taught from scratch with a proof gate** (Block 1 — gain, signal path, monitoring), that domain scores 5/5 and never needs revisiting. **The core mechanism of this roadmap is to replicate the Block 1 pattern across every other domain** — a thin, optional "Lab Note 000" primer per domain, each one isolating the building blocks one control at a time and ending in a single recreate-it proof, every lesson welded to a specific owned device. Build the highest-leverage free primer first (Synthesis, on the MicroFreak), validate it against the bar, then stamp the proven template across the rest; let real gear purchases — starting with the Digitone II — *pull* their integration pages into existence rather than speculatively building for hardware not yet owned.

**Closing principle:** *Teach the atoms the way Block 1 already does; let owned gear pull its pages; gate every purchase before it earns a lesson.*

---

## 4. MECE Issue Tree

```
Closing the coverage gaps
├── A. The atoms are missing (no-buy curriculum)
│   ├── A1 Synthesis fundamentals (PWM=0, no isolated ADSR/LFO, no recipe cookbook)
│   ├── A2 Rhythm fundamentals (time-sig/counting=0, note values, swing%)
│   ├── A3 Harmony fundamentals (scales=0, keys=0, intervals, chords, voicing)
│   ├── A4 Mixing — dynamics (comp params=1, sidechain not built)
│   ├── A5 Mixing — EQ (bands/Q/shelf-vs-bell thin)
│   ├── A6 Effects parameters (reverb params thin; delay ok)
│   ├── A7 Ear training (analysis ≠ recreate-by-ear)
│   └── A8 Arrangement (conventional forms — partly intentional non-goal)
├── B. Gear-tied depth gaps (pulled by owned/incoming gear)
│   ├── B1 Digitone II rig integration (stereo into 4-in M4, two-Elektron clock/MIDI)
│   ├── B2 Digitone II FM deepening (algorithms/operators, extends Lab 013b)
│   └── B3 Polyphony as a system (voice allocation, voicing — Digitone forces it)
├── C. Operating discipline & reliability (no-buy)
│   ├── C1 Session survival & export discipline
│   ├── C2 Sample library & release hygiene
│   ├── C3 M4 troubleshooting appendix
│   ├── C4 Digitakt project hygiene & performance patterns
│   ├── C5 Performance controller map (Launchpad)
│   └── C6 CC-mapping lab
├── D. Governance & navigation (no-buy)
│   ├── D1 Gear purchase gate (governs all of E)
│   ├── D2 Drone pathway map (index across blocks)
│   ├── D3 "Who should sequence what?" decision page
│   ├── D4 Finish the Gear Roadmap stub (References)
│   ├── D5 Synthesis index by method + Room-acoustics page
│   └── D6 Coverage-doc + coverage.html upkeep (keep scores live)
└── E. Deferred hardware pages (purchase-gated — may never trigger)
    ├── E1 Hardware modular path / utilities + 0-Coast voice
    ├── E2 External mixer as routing architecture + performance-mixer cert
    ├── E3 First pedal / hardware FX chain
    ├── E4 Standalone recorder workflow
    └── E5 Analog poly / hardware polyphony expansion
```

MECE check: A = teach missing atoms; B = gear-tied depth; C = operate the rig reliably; D = govern + navigate; E = hardware-conditional. No item fits two branches; together they cover all 39 proposed additions.

---

## 5. Weighted Prioritization (ICE)

Impact / Confidence / Ease each **1–10**; **ICE = I × C × E** (higher = do sooner). Ranked.

| Rank | Deliverable | Branch | I | C | E | ICE | Note |
|--:|---|:--:|:--:|:--:|:--:|--:|---|
| 1 | Gear Purchase Gate | D1 | 9 | 9 | 9 | **729** | Cheap, governs all hardware spend; build before any E. |
| 2 | Synthesis from Scratch (+cookbook) | A1 | 9 | 9 | 8 | **648** | Biggest no-buy gap; foundation under Block 1; free on MicroFreak+Live. |
| 3 | Block 00 hub + shared page contract | — | 9 | 9 | 8 | **648** | Unblocks every primer; one-time scaffolding (Phase 0). |
| 4 | Session Survival & Export | C1 | 7 | 9 | 9 | **567** | Protects every project/sample/release; trivial to write. |
| 5 | Digitone II rig page | B1 | 7 | 9 | 8 | **504** | Pulled by incoming gear; concrete routing problem (stereo into 4-in M4). |
| 6 | Rhythm from Scratch | A2 | 7 | 9 | 9 | **567** | time-sig/counting=0; Digitakt is the perfect teacher. |
| 7 | "Who should sequence what?" | D3 | 6 | 9 | 9 | **486** | Prevents clock/reset confusion; cheap. |
| 8 | Harmony from Scratch | A3 | 8 | 8 | 7 | **448** | scales=0,keys=0; Digitone makes it daily. |
| 9 | Mixing — Dynamics (sidechain) | A4 | 8 | 8 | 8 | **512** | Sidechain = the techno move; stock Live devices. |
| 10 | Polyphony as a System | B3 | 7 | 8 | 7 | **392** | Software-first; deepened by Digitone. |
| 11 | Drone Pathway Map | D2 | 5 | 9 | 9 | **405** | Index; surfaces an existing strength. |
| 12 | Performance Controller Map | C5 | 6 | 8 | 8 | **384** | Launchpad already owned; strengthens Block 7. |
| 13 | Mixing — EQ | A5 | 6 | 8 | 8 | **384** | Pairs with Spectrum drilled in Lab 003b. |
| 14 | Digitone FM deepening | B2 | 6 | 8 | 7 | **336** | Extends Lab 013b onto the device. |
| 15 | M4 Troubleshooting Appendix | C3 | 5 | 8 | 8 | **320** | Reduces recurring setup friction. |
| 16 | Sample Hygiene | C2 | 5 | 8 | 8 | **320** | Closes the release gap. |
| 17 | Effects from Scratch | A6 | 5 | 7 | 8 | **280** | Architecture already strong; params only. |
| 18 | CC-Mapping Lab | C6 | 6 | 7 | 7 | **294** | Makes MIDI control assessable. |
| 19 | Finish Gear Roadmap stub | D4 | 5 | 8 | 8 | **320** | References page is a stub today. |
| 20 | Ear Training | A7 | 6 | 6 | 6 | **216** | Recurring drill; harder to self-assess. |
| 21 | Synthesis index + Room acoustics | D5 | 4 | 8 | 8 | **256** | Light reference pages. |
| 22 | Digitakt Project Hygiene | C4 | 4 | 7 | 7 | **196** | Live reliability. |
| 23 | Arrangement from Scratch | A8 | 4 | 6 | 7 | **168** | Partly an intentional non-goal. |
| — | E1–E5 deferred hardware | E | var | 3* | 3* | **<120** | *Confidence/Ease low until the gear is bought; parked behind D1. |

---

## 6. Mechanism Design

### Architecture (where the new pages sit)

```
workshop/
  index.html ──────────────► overview (links Block 00 + Block 0)
  block-00/                  ◄── NEW: the fundamentals primer layer (optional)
    index.html (hub)            ── routes by weakness; "do these before Block 1 if new"
    synth-from-scratch.html     A1  ─┐
    rhythm-from-scratch.html    A2   │ each = PrimerPage contract
    harmony-from-scratch.html   A3   │ (anchor gear + atoms + proof gate)
    mixing-dynamics.html        A4   │
    mixing-eq.html              A5   │
    effects-from-scratch.html   A6   │
    ear-training.html           A7   │
    arrangement.html            A8  ─┘
  block-0/  (The Rig)        ◄── add digitone.html (B1), extend instruments/signal-and-clock
  block-4/  (Transformation) ◄── link Digitone FM deepening (B2) from Lab 013b
  references.html            ◄── add: Gear Purchase Gate (D1), Session Survival (C1),
                                  Who-Sequences-What (D3), Drone Pathway (D2),
                                  Sample Hygiene (C2), M4 Troubleshooting (C3),
                                  finished Gear Roadmap (D4)
  coverage.html              ◄── upkeep: tick scores as primers ship (D6)

Flow:  beginner → Block 00 primers (atoms + proof) → Block 1 (bench) → Blocks 2–8 (systems)
       Pedro buys gear → Gear Purchase Gate (D1) → only then build the matching E-page
```

### Key interface — the `PrimerPage` contract (every Block 00 page MUST satisfy)

```ts
type PrimerPage = {
  scaffolding: {                 // copied verbatim from an existing block page
    nav; hamburger; breadcrumb;  // Workshop / Block 00 / <primer>
    pageNav; footer;             // prev/next chain through the primer set
  };
  anchorGear: "MicroFreak" | "Digitakt II" | "Digitone II" | "Live"
            | "Launchpad" | "MOTU M4";        // the owned device every step uses
  atoms: AtomLesson[];           // isolated, ONE control at a time (the Block-1 pattern)
  recipes?: Recipe[];            // Synthesis only: the from-init cookbook
  freeCompanions: string[];      // Learning Synths / VCV / Syntorial / Scala …
  proofGate: { task: string; deliverable: string };   // exactly ONE, assessable
  validation: {                  // automated check before "done"
    singleNavFooterPageNav: true;
    divBalanced: true;
    internalLinksResolve: true;
    proofGatePresent: true;
    anchorGearCalloutPresent: true;
  };
};
```

### Interaction with existing systems
- **Nav is tooling-managed.** New top-level entries (Block 00) may be auto-rewritten; treat nav as additive and re-verify after each session (see Risk R1).
- **Reuse, don't invent CSS.** Primers use existing components (`.callout`, `.step`, `.checklist`, `.param-table`, `.signal-flow`, `.timeline`, `.note-block`); only add a CSS block if a genuinely new component is needed (as was done for `.glossary`).
- **Voice contract.** Plain-language style guide (`docs/simplify-style-guide.md`) is binding — beginner-facing, one idea per sentence.

---

## 7. Roadmap by Workstream

Targets are **session-based** or **trigger-based** (no wall-clock dates; the only external trigger is the Digitone II arriving).

### WS-A — Fundamentals Primers (atoms) · no-buy

| Step | Deliverable | Actor | Acceptance criteria | Gate |
|---|---|---|---|---|
| A0 | Block 00 hub + `PrimerPage` contract proven on one page | Agent (session) | Hub routes by weakness; contract documented; validation script passes | **DP-1** (Pedro approves the template — one-way door) |
| A1 | Synthesis from Scratch + recipe cookbook | Agent (session) | PWM, isolated A/D/S/R, LFO drills, ≥8 recipes from init; proof gate present | DP-2 |
| A2 | Rhythm from Scratch | Agent (session) | beat/bar/subdivision/note-values/swing%; "count 8 grooves" gate | — |
| A3 | Harmony from Scratch | Agent (session) | intervals/scales/chords/keys/voicing; "voice a progression 3 ways" gate | — |
| A4 | Mixing — Dynamics (sidechain) | Agent (session) | threshold/ratio/attack/release/knee + audible sidechain pump gate | — |
| A5 | Mixing — EQ | Agent (session) | bands/Q/shelf-vs-bell; "fix muddy & harsh by named moves" gate | — |
| A6 | Effects from Scratch | Agent (session) | reverb/delay/mod params; "recreate 3 effect sounds" gate | — |
| A7 | Ear Training | Agent (session) | recreate-by-ear set of 5 targets | — |
| A8 | Arrangement (optional) | Agent (session) | labelled-sections + energy-curve gate; flagged partly-intentional | — |

### WS-B — Gear Integration & Depth · trigger: Digitone II in hand

| Step | Deliverable | Actor | Acceptance criteria | Gate |
|---|---|---|---|---|
| B1 | `block-0/digitone.html` (rig integration) | Agent (session) | Stereo routing options into 4-in M4; two-Elektron clock/MIDI; division of labour; added to Block 0 diagrams | **DP-3** (Digitone trigger) |
| B3 | Polyphony as a System | Agent (session) | voice allocation, shared-vs-per-voice filter, voicing; 3-way build gate | — |
| B2 | Digitone FM deepening (from Lab 013b) | Agent (session) | algorithms/operators/ratios on-device; bridge from Operator | — |

### WS-C — Operating Discipline & Reliability · no-buy

| Step | Deliverable | Actor | Acceptance criteria |
|---|---|---|---|
| C1 | Session Survival & Export | Agent (session) | reopen-clean, stems/master export, audio-vs-MIDI-vs-state map |
| C5 | Performance Controller Map | Agent (session) | map 8 controls, record a pass, document a panic control |
| C6 | CC-Mapping Lab | Agent (session) | recordability + recall proof |
| C3 | M4 Troubleshooting Appendix | Agent (session) | diagnoses: no-input, doubled-monitoring, wrong SR, latency, channel-config |
| C2 | Sample Hygiene | Agent (session) | trace every sample to source/license/chain/print |
| C4 | Digitakt Project Hygiene | Agent (session) | bank (intro/main/var/breakdown/recovery) + backup + state map |

### WS-D — Governance & Navigation · no-buy

| Step | Deliverable | Actor | Acceptance criteria |
|---|---|---|---|
| D1 | **Gear Purchase Gate** | Agent (session) | 5-question gate (problem / path-changed / replaces / proof / new-failure); referenced by every E-page |
| D2 | Drone Pathway Map | Agent (session) | choose a drone study by weakness across Blocks 1/2/6/8 |
| D3 | Who Should Sequence What? | Agent (session) | one sequencer per role + clock/reset rationale |
| D4 | Finish Gear Roadmap stub | Agent (session) | purchase test + per-block adds + tiered budget |
| D5 | Synthesis index + Room acoustics | Agent (session) | method index; basic treatment/monitor page |
| D6 | Coverage upkeep | Agent (scheduled) | scores in `coverage.html` + doc match shipped pages |

### WS-E — Deferred Hardware · purchase-gated (H3, may never trigger)

| Step | Deliverable | Actor | Trigger / Gate |
|---|---|---|---|
| E1 | Modular path + 0-Coast voice | Agent (session) | 0-Coast/Eurorack passes **D1** |
| E2 | External mixer + perf-mixer cert | Agent (session) | mixer passes **D1** |
| E3 | First pedal / hardware FX chain | Agent (session) | pedal passes **D1** |
| E4 | Standalone recorder workflow | Agent (session) | recorder passes **D1** |
| E5 | Analog poly / HW polyphony | Agent (session) | analog poly passes **D1** (and B3 done first) |

### Dependency graph (critical path in **bold**)

```
              ┌─────────────────────────────────────────────┐
**A0 (Block 00 hub + contract)** ──► **A1 Synthesis** ──► DP-2 ──► A2 Rhythm
   │                                    │                          A4/A5/A6/A7/A8 (parallel)
   │                                    └──► (template proven, fan out)
   ▼
 DP-1 (approve template)
                                  Digitone II arrives ──► DP-3 ──► B1 ──► B3 ──► B2
 D1 Gear Purchase Gate (independent, early) ───────────────────────────────► gates all E1–E5
 WS-C, WS-D (independent of A; schedule in gaps) 
```

**Critical path:** `A0 → DP-1 → A1 → DP-2 → (fan out A2–A8)`. Everything else is parallelizable or trigger-gated. D1 should land in Phase 0 alongside A0 because it is cheap and unblocks all future hardware decisions.

### Phasing / Milestones

| Milestone | Contents | Exit criterion |
|---|---|---|
| **M0 — Foundation** | A0 (hub+contract), D1 (purchase gate) | DP-1 passed; one primer renders & validates |
| **M1 — Highest-leverage atoms** | A1 Synthesis, A2 Rhythm, C1 Session Survival, D3 Sequencer decision | A1 passes DP-2; pattern proven |
| **M2 — Digitone wave** *(trigger)* | B1 rig, A3 Harmony, B3 Polyphony, B2 FM | Digitone integrated end-to-end |
| **M3 — Sound-shaping atoms** | A4 Dynamics, A5 EQ, A6 Effects, A7 Ear Training | All mix/fx primers live |
| **M4 — Discipline & navigation** | C2–C6, D2, D4, D5, A8, D6 upkeep | No-buy backlog cleared |
| **M5 — Deferred hardware** *(per purchase)* | E1–E5 as gear passes D1 | Built only on trigger |

---

## 8. Decision Points (solo strategic review)

| ID | Target (trigger) | Topic | Decision required | Output |
|---|---|---|---|---|
| **DP-1** | After A0 | The `PrimerPage` template | Does the shared contract (anchor-gear + atoms + single proof gate) meet the bar? **One-way door** — it stamps 8 pages. | Approve / revise template |
| **DP-2** | After A1 | First full primer | Does Synthesis-from-Scratch actually teach a beginner the atoms and end in a usable cookbook? Gate before scaling. | Go / fix-then-go on A2–A8 |
| **DP-3** | Digitone II arrives | Gear trigger | Start WS-B; confirm routing choice (Overbridge vs analog-into-M4 vs through-Digitakt). | Start B1; pick routing default |
| **DP-G** | Any gear purchase | Purchase gate | Run D1's 5 questions before buying *and* before building the E-page. | Buy+build / don't |

Decision-Point output each time = updated **Tracker** table (below) + a one-line log entry.

---

## 9. Tracker

- **Location:** a progress table appended to this file (below) — wiki-native, no Jira.
- **What is tracked:** per deliverable → status (`todo / building / shipped / parked`), proof-gate present (y/n), validated (y/n), milestone.
- **By whom:** Agent (session) ticks on ship; Pedro reviews at each Decision Point.
- **Rethink gate:** if two consecutive primers fail DP-style review, stop and revise the template (DP-1) before continuing.

Status as of the implementation build: **M0–M4 shipped (26 pages); WS-E pre-built but parked behind the gate.** All pages validated (single nav/footer/page-nav, divs balanced) and wired into navigation. The proof gates remain *the learner's* to complete — "proof gate" below = the gate is present on the page.

| ID | Deliverable | Page(s) | Status | Proof gate | Validated | Milestone |
|---|---|---|---|---|---|---|
| A0 | Block 00 hub + contract | block-00/index.html | **shipped** | n/a | y | M0 |
| D1 | Gear Purchase Gate | gear-purchase-gate.html | **shipped** | n/a | y | M0 |
| A1 | Synthesis from Scratch | block-00/synth-from-scratch.html | **shipped** | y | y | M1 |
| A2 | Rhythm from Scratch | block-00/rhythm-from-scratch.html | **shipped** | y | y | M1 |
| C1 | Session Survival | session-survival.html | **shipped** | y | y | M1 |
| D3 | Who Sequences What | who-sequences-what.html | **shipped** | y | y | M1 |
| B1 | Digitone II rig page | block-0/digitone.html | **shipped** (pre-built; DP-3 = Overbridge default) | n/a | y | M2 |
| A3 | Harmony from Scratch | block-00/harmony-from-scratch.html | **shipped** | y | y | M2 |
| B3 | Polyphony as a System | block-00/polyphony.html | **shipped** | y | y | M2 |
| B2 | Digitone FM deepening | block-0/digitone-fm.html | **shipped** (pre-built) | y | y | M2 |
| A4 | Mixing — Dynamics | block-00/mixing-dynamics.html | **shipped** | y | y | M3 |
| A5 | Mixing — EQ | block-00/mixing-eq.html | **shipped** | y | y | M3 |
| A6 | Effects from Scratch | block-00/effects-from-scratch.html | **shipped** | y | y | M3 |
| A7 | Ear Training | block-00/ear-training.html | **shipped** | y | y | M3 |
| A8 | Arrangement | block-00/arrangement.html | **shipped** | y | y | M4 |
| C2 | Sample Hygiene | sample-hygiene.html | **shipped** | y | y | M4 |
| C3 | M4 Troubleshooting | m4-troubleshooting.html | **shipped** | n/a | y | M4 |
| C4 | Digitakt Hygiene | digitakt-hygiene.html | **shipped** | y | y | M4 |
| C5 | Controller Map | controller-map.html | **shipped** | y | y | M4 |
| C6 | CC-Mapping | cc-mapping.html | **shipped** | y | y | M4 |
| D2 | Drone Pathway | drone-pathway.html | **shipped** | n/a | y | M4 |
| D4 | Gear Roadmap | gear-roadmap.html | **shipped** | n/a | y | M4 |
| D5 | Synthesis index + Room acoustics | synthesis-index.html, room-acoustics.html | **shipped** | n/a | y | M4 |
| D6 | Coverage upkeep | coverage.html, references.html | **shipped** | n/a | y | M4 |
| E1 | Modular & 0-Coast | hardware/modular.html | **built · parked** (gate D1) | y | y | M5 |
| E2 | External / perf mixer | hardware/mixer.html | **built · parked** (gate D1) | y | y | M5 |
| E3 | Pedals / hardware FX | hardware/pedals.html | **built · parked** (gate D1) | y | y | M5 |
| E4 | Standalone recorder | hardware/recorder.html | **built · parked** (gate D1) | y | y | M5 |
| E5 | Analog poly | hardware/analog-poly.html | **built · parked** (gate D1) | y | y | M5 |

---

## 10. Cost Model

Unit = **build session** (one focused Claude Code session ≈ one substantial page, matching the observed cost of the Block 0 pages and existing primers).

| Bundle | Sessions | Token order | Notes |
|---|---:|---|---|
| M0 Foundation (A0 + D1) | 1–2 | ~80–120k | Scaffolding + gate; one-time |
| M1 (A1, A2, C1, D3) | 3–4 | ~200k | A1 is the largest (cookbook) |
| M2 Digitone wave (B1, A3, B3, B2) | 3–4 | ~220k | Trigger-gated |
| M3 (A4–A7) | 3–4 | ~200k | Stock-Live primers, lighter |
| M4 (C2–C6, D2, D4, D5, A8, D6) | 4–5 | ~250k | Many small pages |
| **No-buy total (M0–M4)** | **14–19** | **~1.0M** | The whole atoms+ops+gov layer |
| M5 deferred hardware | 1/page on purchase | — | Only if gear bought |

**Status quo cost:** $0 tokens, but the gaps persist — beginners hit Block 1 without the atoms, the Digitone II ships uncovered, and gear gets bought without a gate. **Recommendation:** spend M0+M1 first (≈5 sessions) — highest leverage, fully free.

---

## 11. Metrics — L1 / L2 / L3

**L1 — Outcome (Pedro's strategic dashboard).**
- *Atoms-gap closure:* primers live ÷ 8. From **12% (1/8)** → target **100% (8/8)**.
- *Coverage scores:* count of fundamentals-domain Concept scores ≥ 4. From **1/9** → **9/9**.
- *Gear governed:* purchases passing D1 ÷ purchases. Target **100%**.

**L2 — Driver (what moves L1).**
- Pages shipped that pass the full `PrimerPage` contract (incl. a proof gate). Causal chain: *contract-passing pages → primers live → atoms-gap closes.*
- Digitone pages shipped ÷ 3 (rig, FM, polyphony).

**L3 — Operational (per page, automated check).**
- `singleNavFooterPageNav`, `divBalanced`, `internalLinksResolve`, `proofGatePresent`, `anchorGearCalloutPresent` — each boolean. Causal chain: *L3 booleans all true → page is L2-countable.*

**Dashboards.**
- *Pedro (L1):* the Tracker table + the two ratios above; reviewed at each Decision Point.
- *Agent session (L2+L3):* the post-build validation output (the same grep/balance checks already used for Block 0 and the glossary).

**Quality gates (the content equivalent of latency alerts — pass/fail, not percentiles).**

| Check | Threshold | Action on fail |
|---|---|---|
| Internal links resolve | 100% | block ship |
| `<div>`/nav/footer/page-nav balance | 100% | block ship |
| Proof gate present | 100% of A/B primers | block ship |
| Anchor-gear callout present | 100% of primers | block ship |
| Voice (plain-language) spot-check | Pedro sample at DP-2 | revise template |

*(p99/p95-style histograms do not apply to a static-content build; the booleans above are the operative gates.)*

---

## 12. Observability & Instrumentation

Lightweight, file-based. Each ship emits one JSONL line to a build log (or simply updates the Tracker):

```json
{"event":"page_shipped","id":"A1","page":"block-00/synth-from-scratch.html",
 "workstream":"A","proofGate":true,"validated":true,"session":"<n>","milestone":"M1"}
```

| Event | Frequency | Source | Consumer |
|---|---|---|---|
| `page_shipped` | per page [automated check, manual log] | session validation | Tracker, L2 |
| `validation_run` | per page [automated] | grep/balance script | L3 booleans |
| `decision_point` | per DP [manual] | Pedro | L1, log.md-equivalent |
| `coverage_synced` | per milestone [semi-automated] | D6 upkeep | coverage.html/doc |

Every process above is labelled: validation = **[automated]**; logging/coverage-sync = **[semi-automated]**; Decision Points = **[manual]**.

---

## 13. What This Is NOT (non-scope)

- **Not** a music-theory degree — Harmony/Rhythm primers teach the *working atoms*, not conservatory depth.
- **Not** new hardware curriculum before purchase — E-pages stay parked behind D1.
- **Not** a build system, JS, or framework — static HTML + the one shared stylesheet only.
- **Not** a rewrite of the experimental workshop's voice or the existing labs — primers sit *beneath* them as optional prerequisites.
- **Not** a replacement for `coverage.html` — this roadmap is the *how/when*; coverage is the *what/why*.
- **Not** auto-merged into nav assumptions — nav is tooling-managed; we add and verify, we don't fight it.

---

## 14. Risks & Mitigations

| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | Tooling rewrites/clobbers nav when Block 00 is added | Med | Med | Treat nav as additive; re-verify after each session; wire Block 00 from landing + Block 1 as the durable entry (as done for Block 0). |
| R2 | Primer scope creep (each balloons into a full course) | High | Med | The contract caps each at *atoms + one proof gate*; DP-1 enforces the template. |
| R3 | Digitone II spec inaccuracy (machines/voice count) | Med | Med | Anchor B-pages to verified facts; flag any unconfirmed spec; Pedro confirms against firmware at DP-3. |
| R4 | Primer voice clashes with the experimental tone | Low | Med | Bind to `simplify-style-guide.md`; primers are explicitly "before Block 1," a different register by design. |
| R5 | Over-building deferred hardware for gear never bought | Med | High (waste) | D1 gate is mandatory before any E-page; ICE parks E at <120. |
| R6 | Polyphony/Harmony stall waiting on the Digitone | Low | Low | Both ship **software-first** (Live instruments) and deepen on arrival. |
| R7 | Coverage scores drift from reality as pages ship | Med | Low | D6 scheduled upkeep ties each ship to a score update. |

---

## 15. Success Criteria

- **8/8 fundamentals primers live**, each anchored to owned gear and ending in a working proof gate (from **1/8**).
- **9/9 atoms domains** scored Concept ≥ 4 in `coverage.html` (from **1/9**).
- **Block 00 hub** wired from the landing page and Block 1; a beginner can route by weakness.
- **Digitone II fully integrated**: rig page + FM deepening + polyphony lesson; Block 0 diagrams updated.
- **Gear Purchase Gate live** and referenced by every deferred-hardware page; **100% of future purchases run it**.
- **No-buy backlog (M0–M4) cleared** in ~14–19 sessions; deferred hardware parked, not built.
- All shipped pages pass the L3 quality gates (links, balance, proof-gate, anchor-gear) at **100%**.

---

## 16. Next Steps

| Actor | Step | Target | Status | Rethink Trigger |
|---|---|---|---|---|
| Agent (session) | Build Block 00 hub + prove the `PrimerPage` contract on one page (A0) | Next session | todo | If the scaffolding can't be shared cleanly across primers, redesign the contract before any A-page. |
| Agent (session) | Build the Gear Purchase Gate (D1) | Next session (parallel) | todo | If Pedro won't gate purchases, drop E-planning entirely. |
| Pedro | **DP-1** — approve/revise the primer template | After A0 | pending | — |
| Agent (session) | Build Synthesis from Scratch + cookbook (A1) | After DP-1 | todo | If A1 can't both teach atoms *and* deliver a cookbook in one page, split into two. |
| Pedro | **DP-2** — does A1 hit the bar? | After A1 | pending | If no, fix the template before fanning out A2–A8. |
| Agent (session) | Fan out A2 Rhythm, then A3/A4… per ICE | After DP-2 | todo | Two consecutive weak primers → return to DP-1. |
| Pedro | **DP-3** — on Digitone II arrival, start WS-B; pick routing default | Trigger: gear in hand | pending | If Overbridge proves flaky, default to analog-into-M4. |

### Tracker subsection
- **Review trigger:** each Decision Point (DP-1, DP-2, DP-3, and DP-G per purchase).
- **Tracking location:** the Tracker table in §9 of this file.
- **Rethink gate:** two consecutive primers failing review ⇒ stop, revise the template (DP-1).

---

## Appendix

### A. `PrimerPage` config (authoring checklist)
```
[ ] Scaffolding copied verbatim (nav, hamburger, breadcrumb, page-nav, footer)
[ ] Body class + breadcrumb: Workshop / Block 00 / <primer>
[ ] Anchor-gear callout near the top (which owned device drives every step)
[ ] Atoms taught ONE control at a time (the Block-1 pattern)
[ ] (Synthesis only) recipe cookbook from an init patch
[ ] Free companions listed (Learning Synths / VCV / Syntorial / Scala)
[ ] Exactly ONE proof gate, assessable, at the end
[ ] page-nav chains within the primer set; links to Block 1
[ ] Validation: single nav/footer/page-nav, divs balanced, links resolve
[ ] coverage.html + coverage doc score updated (D6)
```

### B. References
- `docs/equipment-and-concept-coverage.md` — the assessment (what/why); §"The fundamentals (atoms) layer" and §"Ranked roadmap".
- `workshop/coverage.html` — reader-facing coverage map + fundamentals table.
- `docs/simplify-style-guide.md` — binding plain-language voice.
- `workshop/block-0/` — the proven page pattern to copy.

## See Also
- `docs/workshop-plan.md`
- `docs/remediation-plan.md`
- `docs/extensions-needs-other-people.md`
