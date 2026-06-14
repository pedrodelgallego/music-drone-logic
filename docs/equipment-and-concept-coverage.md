# Equipment and Concept Coverage Framework

This audit answers one question: does the workshop teach the category as a working practice, or only mention it?

It reads each category through **two lenses**:

- **Concept** — how well the idea/system is taught (design, routing, failure, deliverable).
- **Hands-on** — whether the student can actually practise it now, with owned gear or a provided free substitute, and whether that practice is assessed.

The audit is based on the workshop pages — especially Block 0 rig pages, build labs, listening programmes, capstones, and the recurring Engineering Spec. Optional replication lessons add reinforcement, but the score is based mainly on required or structural workshop coverage.

## The key idea: concept-first, substrate-interchangeable

The workshop is **concept-first**. It teaches a system, then gives a free way to practise it. So a topic can score high on **Concept** while its matching hardware is intentionally not owned — and the Hands-on score still holds up, because a free substitute is supplied:

| Missing hardware | Free substitute the workshop already uses |
|---|---|
| Eurorack / semi-modular (0-Coast) | **VCV Rack** (Lab 024b builds a west-coast voice in it) |
| Generative / rule-based systems | **Pure Data / SuperCollider / TidalCycles** |
| Microtonal tuning hardware | **Scala** + Live 12 microtuning |
| No-input mixer / hardware mixer | A **DAW or VCV feedback loop** with the same safety checklist |
| Tape machine | Block 4 **Lab 017 Generation Loss** (software generational decay) |

> "The system is the lesson; the substrate is interchangeable." Read every row twice: how well is the *idea* taught, and do you have a way to *practise* it?

## Scoring (1–5)

Each category gets a **Concept** score and a **Hands-on** score on the same scale.

| Score | Label | Meaning |
|---|---|---|
| 1 | Missing | No meaningful coverage / no way to practise. |
| 2 | Mentioned | Appears as a term or option, but no student proof. |
| 3 | Partial | Covered through adjacent work or a free substitute; no dedicated lab or assessment. |
| 4 | Strong | Dedicated pages/labs, repeated use, and a clear deliverable. |
| 5 | Core spine | Reappears across blocks as a required operating skill, with proof. |

A **Practice path** column names how you actually do the work today: *Owned* hardware, *Free* software (named), *Partial*, or *None (hardware gap)*.

## Executive summary

The workshop is already a very strong, near-complete course **for the current rig**:

- **Ableton Live 12 Suite** — recorder, arranger, lab, mixer, MIDI generator, Max for Live host, release workspace.
- **Digitakt II** — drum machine, sampler, step sequencer, conditional-logic engine, performance box.
- **MicroFreak** — a single expressive synth voice for bass, lead, drone, tuning, and modulation studies.
- **MOTU M4** — the signal hub: interface, headphone output, input calibration point, and MIDI DIN bridge.
- **Launchpad Pro MK3** — the "hands" layer: clip launching, note/chord modes, custom control, standalone sequencing.
- **DT 990 Pro / playback systems** — the monitoring reference and translation-test environment.

The weak areas are almost all **future hardware categories**, not conceptual gaps:

- Dedicated analog-poly synth work.
- Hardware modular and semi-modular work, especially Make Noise / 0-Coast.
- External mixer and performance-mixer workflows.
- Pedals and outboard hardware effects.
- Standalone hardware-recorder workflows.
- Budgeting and acquisition logic for growing the rig.

Three genuine *teaching* gaps (all fixable with no purchase) stand out: **polyphonic synthesis as a system**, a **MIDI-CC / controller mapping proof**, and — the largest and most structural — a missing **fundamentals ("atoms") layer**. The course teaches the advanced/systems layer of each domain brilliantly while assuming the beginner building blocks beneath it (see "The fundamentals layer" section below). The workshop already teaches routing, signal flow, clock, gain, monitoring, feedback, state, performance failure, and print strategy — the missing work is mostly translating those strong concepts onto additional hardware, plus the no-buy primer and proof pages.

## Coverage by workshop area

| Workshop area | Main coverage |
|---|---|
| Block 0 — The Rig | Current equipment roles, signal/clock paths, Live setup, Digitakt, MicroFreak, Launchpad, M4, monitoring, rig growth (Day 1 → Year 1). |
| Block 1 — The Bench | Signal path, gain staging, audio interface, latency, monitoring, MIDI note/CC/clock, first synth voice (Lab 004), first drum/synth loop. |
| Block 2 — Sources | Drones (005, 005b), field recording (008), sampling, resampling, reusable instruments (007b), drum synthesis (006b), voice as material. |
| Block 3 — Time | Sequencing, groove, probability, polymeter, phase, Euclidean logic, reset, clock discipline. |
| Block 4 — Transformation | Resonance (013), **FM (013b)**, saturation (014), granular reconstruction (015), slicing (016), generation loss (017). |
| Block 5 — Space & Mix | Delay, reverb, feedback paths, monitoring/translation, loudness, subtractive arrangement, dub-system thinking. |
| Block 6 — Decision Systems | Rule-based sequencing (023), modulation organism (024), **west-coast voice (024b)**, chance (025), score systems (025b), **tuning (026)**, autonomous installation. |
| Block 7 — Performance | Printed movement (027), live resampling (028), **audio feedback / no-input (029)**, long form (030), performance rig (031), panic/recovery paths. |
| Block 8 — Synthesis & Voice | Constraint design (032), hybrid systems (033), **near-silence (033b)**, signature piece (034), teaching/proof (035), release and defense. |

## Coverage table

Scores are **Concept (C)** and **Hands-on (H)**, each 1–5.

| Category | C | H | Practice path | What is covered now (grounded) | What is strong already | What to add |
|---|:--:|:--:|---|---|---|---|
| Sampling & resampling | 5 | 5 | Owned: Digitakt II + Live | Block 2 (capture, resampling), Lab 015/016 (granular/slice), Lab 028 (live resampling), C7 print maps. | Resampling as a compositional engine; three architectures compared. | A sample-legality / library-hygiene checklist for release work. |
| Drum machine & drum synthesis | 4 | 5 | Owned: Digitakt II | Lab 006b builds a kit from oscillators + noise; p-locks, conditional trigs, per-track lengths; hypnotic-techno worked example. | Synthesising drums, not just loading them; deep Digitakt practice. | A Digitakt project-hygiene / performance-pattern page (banks, mutes, fills, backup). |
| Sequencing | 5 | 5 | Owned: Digitakt / Launchpad / Live | Block 3 entire (groove, probability, polymeter, phase, Euclidean); rule-based sequencing (023); Live 12 MIDI tools. | Sequencing as a compositional language across devices. | One "who should sequence what?" decision chart (Live vs Digitakt vs MicroFreak vs Launchpad). |
| MIDI & control | 4 | 4 | Owned: M4 DIN/USB, Launchpad | Block 0 signal & clock; audio-vs-control split; MIDI note/CC/clock (Lab 002); Live mapping. | Clock vs transport; DIN vs USB; the control/audio distinction. | A focused **CC-mapping lab** with a recordability/recall proof. |
| DAW integration | 5 | 5 | Owned: Live 12 Suite | Live as recorder, clock master, arranger, MIDI generator, Max for Live host, mixer, template, resampling + release workspace; Block 0 deep page. | Live as tape **and** laboratory; build-don't-buy. | A "session survival" page: backups, Collect All & Save, stems, exports, recovery. |
| Audio interface | 5 | 5 | Owned: MOTU M4 | Labs 001–002; gain staging, converter clipping, latency, loopback, direct vs software monitoring, MIDI DIN. | The bench foundation; the M4's MIDI DIN ports. | A short driver/sample-rate/channel-config troubleshooting appendix. |
| Monitoring | 5 | 5 | Owned: DT 990 Pro | Block 1 lab 002; Block 5 "Monitoring & Translation"; monitoring discipline; mono/phase; near-silence. | Translation across systems; one-listening-path rule. | A speaker-calibration sheet if monitors are added. |
| Experimental synthesis | 4 | 4 | Owned: MicroFreak + Live | MicroFreak engines; resonance (013), granular (015); west-coast (024b), modulation organism (024); near-silence (033b). | Synthesis as behaviour/system, not preset browsing. | A synthesis index by method (subtractive / FM / wavetable / physical / west-coast / sample / feedback / tuning). |
| Analog (mono) synthesis | 4 | 4 | Owned: MicroFreak | MicroFreak analog filter; Lab 004 one-oscillator étude; resonance, saturation staging (014); beating; tuning stability. | Subtractive voice design; the filter as performer. | A short "analog behaviour" bench note (drift, calibration, self-oscillation). |
| FM synthesis | 4 | 4 | Owned: Operator + MicroFreak (2-op) | **Lab 013b "FM & Inharmonic Spectra"** (Ableton Operator); MicroFreak's two-operator FM engine introduced in Block 0. | FM as inharmonic spectrum design, with a named lab and proof. | One bridge exercise: translate an Operator patch to the MicroFreak's 2-op limits. Optional 6-op (DX) deep dive. |
| **Synthesis fundamentals primer** | 3 | 4 | Owned: MicroFreak + Live Analog/Wavetable | The atoms exist as applied vocabulary (glossary defines oscillator/filter/cutoff/resonance/ADSR/LFO/FM/wavetable; Labs 004/005/006b/013b *use* them). | Concepts are present and correctly named. | **A ground-up primer** that isolates each atom and ends in a patch-recipe cookbook. Missing outright: **pulse width / PWM** (zero coverage), isolated A/D/S/R and LFO drills, and the recipe cookbook. |
| Polyphonic synthesis | 2 | 3 | Free: Live instruments (poly) | MicroFreak paraphony explained; Live instruments supply polyphonic material; chords appear incidentally (Lab 028 and others). | The mono/paraphonic emphasis is pedagogically clear. | **A dedicated polyphony lab**: voice allocation, shared filter vs filter-per-voice, chord voicing, register, stereo placement. |
| Analog poly synth (hardware) | 1 | 1 | None (hardware gap) | Not owned. The only analog circuit in the rig is the MicroFreak's single filter. | — | Either declare out of scope, or an optional page: analog-poly architecture, VCO/DCO, filter-per-voice, tuning drift, patch memory. Teach poly in software first. |
| Modular / semi-modular | 4 | 3 | Free: VCV Rack | Block 6 "West-Coast Voice" (Lab 024b in VCV), "Modulation Organism" (024); signal/control-path discipline; state/seed/boundary. | West-coast / modular *thinking* taught as a system and practised free. | A hardware-modular path page (CV/gate, attenuation, mults, clock/reset, patch docs, safety) **only if** real modular enters the rig. |
| CV / gate / voltage control | 3 | 2 | Partial: MicroFreak CV out / VCV | MicroFreak CV/Gate/Mod outs; Block 6 modulation systems; VCV patching. | Modulation routing as a concept (mod matrix, modulation organism). | A short CV/gate page, and hardware to patch into (ties to modular). |
| Mixer (routing & mix) | 5 | 4 | Owned: Live + Digitakt | Block 5 entire — insert vs send, pre/post-fader, return vs feedback, wet/dry, mono collapse; Live mixer; Digitakt summing/FX. | Routing-as-architecture; sends/returns; the mix as decisions. | A hardware-mixer page (gain, aux, inserts, subgroups, cue bus) only when a mixer is acquired. |
| Performance mixer / no-input | 4 | 3 | Free: DAW / VCV feedback loop | Block 7 "Audio Feedback Systems" (Lab 029) + Toshimaru Nakamura no-input references; modelled as a software feedback loop with a panic path. | No-input mixing as an instrument, with a safety path. | **A small analog mixer** for real no-input feedback + live sub-mixing; a performance-mixer certification page. |
| Hardware FX / pedals | 4 | 2 | Owned (software FX); hardware None | All processing taught in software — Blocks 4 (transformation) & 5 (space). Digitakt delay/reverb/chorus used in practice. | Effects *as systems* (order, feedback, generation loss) — substrate-independent. | A "first pedal / outboard FX chain" bench lab (level, mono/stereo, reamp/DI, power noise, print/recall) — only if hardware is bought. |
| Master clock / sync | 5 | 5 | Owned: Live / Digitakt / M4 DIN | Block 0 clock setups; Block 1 lab 002; Block 3 master-clock declaration; DIN vs USB; drift vs latency; reset. | "One clock master" discipline — a best-covered spine. | A live-set "clock authority" checklist (master, followers, reset, failure). Dedicated hardware clock unnecessary. |
| Performance controllers | 4 | 4 | Owned: Launchpad Pro MK3 | Launchpad in Block 0 + Block 7 "Performance Rig"; Session/Note/Chord/Custom/Sequencer modes; standalone sequencing; riding; panic paths. | Controllers as hands; the standalone sequencer; live riding. | A **controller-mapping proof** (8 controls, recorded automation, a panic control). |
| Recorder (hardware) | 3 | 2 | Owned: Live + field recorder | Live is the recorder; print strategy; field recorder in Lab 008; recording plan in the performance rig. | Recording as proof — central to the whole workshop. | A standalone-recorder workflow (redundant capture, 24-bit headroom, test tone, drift, import) — only if hardware capture matters. |
| Tuning / microtonal | 5 | 4 | Free: Scala + Live; MicroFreak | Block 6 Lab 026 "Tuning as System"; Scala in References; Live 12 microtuning; drone-as-tuning. | Tuning as a compositional system, not a preset. | Nothing required. |
| Generative / decision systems | 5 | 4 | Free: Pd / SC / Tidal + VCV | Block 6 entire (rules 023, chance 025, score-as-system 025b); the 10-minute unattended test. | Self-running systems with a real proof gate. | Nothing required. |
| Field recording / concrète | 5 | 3 | Needs mic/recorder (some via phone) | Block 2 entire (Lab 008 field kit; contact mic, hydrophone, induction coil; ethics). | Capture as an entry condition; the world as source. | Location hardware (recorder / contact mic / coil) if you go on site. |
| Tape / lo-fi / generation loss | 4 | 4 | Software (Live); hardware optional | Block 4 Lab 017 "Generation Loss"; Caretaker/Basinski-style references. | Degradation as a repeatable, generational process. | Optional real tape / 4-track for the hands-on version. |
| Drones & sustain | 5 | 5 | Owned: MicroFreak + Live | Block 2 Labs 005/005b (beatless long-form); the Held Tone Test; Lab Note 002; Block 8 "Near-Silence" (033b); many drone references. | Making stillness compelling — a flagship strength. | A drone-pathway index (across Blocks 1, 2, 6, 8) so the arc is visible. |
| Make Noise / 0-Coast (ecosystem) | 2 | 1 | None (VCV gives foundation) | Not covered as a specific ecosystem; west-coast concepts in Lab 024b give the foundation. | The west-coast *thinking* is already taught. | An optional 0-Coast page (MIDI-to-CV, slope/contour, LPG, clock/random, recording) **only if** the 0-Coast is bought. |
| Budget / gear roadmap | 2 | — | Meta (page / doc) | Block 0 "buy nothing for a year"; References lists a Gear Roadmap + purchase test — currently a stub. | The anti-gear-churn stance. | **Finish the Gear Roadmap:** a purchase gate, per-block adds, and a tiered budget. |

## If you do buy: the hardware shortlist

None of this is required — every gap above has a free software path. But if you want hands on real hardware, this is the order that adds the most new *concept surface* per dollar.

| # | Add | Fills the gap in | Free substitute you already have | Priority |
|--:|---|---|---|---|
| 1 | Make Noise 0-Coast (or a starter Eurorack) | Modular, semi-modular, CV/gate, west-coast synthesis | VCV Rack | High |
| 2 | A small analog mixer | Hardware mixer, performance mixer, no-input feedback | DAW / VCV feedback loop | High |
| 3 | 1–2 FX pedals (delay + reverb/spring) | Hardware FX, pedals, feedback play | Live's audio effects | Medium |
| 4 | Portable recorder + contact mic | Hardware recorder, field recording / concrète | Live + any USB mic | Medium |
| 5 | Analog poly synth (used) | Analog poly, polyphonic synthesis | Live's Wavetable / Operator (poly) | Low |
| 6 | Tape machine / 4-track | Tape, generation loss (hands-on) | Block 4 Lab 017 (software) | Low |

## The fundamentals ("atoms") layer — a structural gap

This is the most important pattern in the whole audit, and it is easy to miss because the workshop is so strong.

The course is a **systems / experimental** workshop. In domain after domain it teaches the *advanced, architectural* layer superbly while **assuming the beginner "atoms"** — the isolated, one-control-at-a-time building blocks, and the recreate-it-yourself drills that cement them. Synthesis is the clearest case (no pulse-width lesson, no isolated ADSR/LFO drills, no patch-recipe cookbook), but the same shape repeats across rhythm, harmony, mixing, effects, and ear training.

The exception proves the rule: **audio engineering (Block 1)** *does* teach its atoms from the ground up — gain, levels, signal path, monitoring, one stage at a time, with a proof. That is exactly why those areas score 5/5. Block 1 is the model for what every other "primer" should look like.

| Domain | Atoms from scratch? (1–5) | Advanced layer the workshop already nails | Missing atoms (the primer that's absent) |
|---|:--:|---|---|
| **Audio engineering / signal & gain** | 5 | — *(this is the model)* | Block 1 already teaches the atoms: gain, levels, clipping, signal path, monitoring discipline. |
| **Synthesis** | 3 | Labs 004/005/006b/013b (compositional/experimental use) | **Pulse width / PWM (zero)**, isolated attack/decay/sustain/release drills, isolated LFO rate/depth/shape, oscillator + filter from an init patch, a patch-recipe cookbook. |
| **Rhythm / time** | 2 | Block 3 — polymeter, phase, Euclidean, probability | Beat, bar, subdivision, note values, time signatures, counting, basic swing %, reading the grid. (Block 3 *assumes* all of these.) |
| **Harmony / music theory** | 2 | Lab 026 tuning-as-system; microtonal/beating | Intervals, scales, chords, keys, inversions, voicing, voice-leading, progressions. **Now urgent — the polyphonic Digitone II makes this a daily need.** |
| **Mixing — dynamics** | 2 | Block 5 "Loudness & the Master"; limiting; saturation | Compression atoms (threshold, ratio, attack, release, knee, makeup) and **sidechain / ducking — the signature techno move**, barely present. |
| **Mixing — EQ** | 3 | Block 5 spectral tilt, masking, translation | Parametric bands, Q, shelf vs bell, subtractive vs additive, surgical vs broad strokes. |
| **Effects (per-device)** | 2 | Block 5 effects-as-architecture (insert/send, wet/dry, feedback) | Reverb atoms (predelay, decay, size, diffusion), delay atoms (time, sync, feedback, filtering), chorus/phaser/flanger parameters. |
| **Ear training** | 2 | Listening programmes (system *analysis*, six-question frame) | Interval/chord ID, "name the filter move", and **recreate-a-patch-by-ear** drills (Syntorial-style) — the same skill the synthesis recipes need. |
| **Arrangement** | 3 | Subtractive arrangement (Block 5); long-form (Block 7) | Conventional dance forms: intro/build/breakdown/drop, 8/16/32-bar phrasing, tension/release templates. |

### The fix: an optional "primer" layer

One no-buy layer *beneath* Block 0 closes all of it — a small set of **fundamentals courses (a "Lab Note 000" series / Block 00)**, each isolating the atoms and ending in recreate-it-yourself drills, every lesson anchored to gear you already own. They cost nothing to build and unlock everything above them.

| Primer | Atoms it drills | Anchor gear | Ends in (proof) |
|---|---|---|---|
| **Synthesis from Scratch** | oscillator + **PWM**, the filter, A/D/S/R one stage at a time, LFO rate/depth/shape | MicroFreak + Live Analog/Wavetable | A patch-recipe cookbook: pluck, sub, kick, hihat, siren, pad/strings, west-coast lead, "two sounds in one", set up your own macros. |
| **Rhythm from Scratch** | beat, bar, subdivision, note values, swing %, the grid | Digitakt II + Live | Program and count eight grooves; explain why each subdivision feels as it does. |
| **Harmony from Scratch** | intervals, scales, chords, keys, voicing, inversions | **Digitone II (poly!)** + Live | Voice one progression three ways; build a pad with deliberate voice-leading. |
| **Mixing from Scratch** | gain *(owned)*, EQ bands/Q/shelf, compression, **sidechain** | Live stock devices | A before/after mix and an audible sidechain pump with stated threshold/ratio/attack/release. |
| **Effects from Scratch** | reverb / delay / modulation parameters | Live + Digitakt FX | Recreate three named effect sounds from an init effect. |
| **Ear Training** | interval/chord/filter-move ID, recreate-by-ear | Syntorial (paid) / Live | Pass a recreate-by-ear set without looking. |

These slot below Block 0 as **optional** prerequisites — a learner who already knows the atoms skips them; a beginner does them first. Build the Synthesis primer first (highest leverage, and the MicroFreak + Live make it free), then Harmony (the Digitone II forces the issue), then Mixing (sidechain/compression for techno).

### Primer detail, domain by domain

Each primer is scored, grounded in a term-by-term search of the real lessons (rep/glossary/coverage pages excluded), and given a single proof gate. *Synthesis from Scratch* is detailed separately under **Expanded category notes** below.

#### Rhythm from Scratch

**Status: Concept 2 / Hands-on 5** (the Digitakt II is the perfect teacher; you can practise instantly). Block 3 jumps straight to polymeter, phase, Euclidean logic, and probability — all of which *assume* you can already feel a bar, count subdivisions, and read a 16-step grid.

Verified absences: **time signature / counting = 0**; note values (quarter / 8th / 16th) barely present (4, incidental); swing taught only as "50% = none" in one drill. The atoms beneath Block 3 are simply assumed.

- Missing atoms: what a beat and a bar are; note values and how they map to the 16 steps; downbeat vs offbeat; time signatures (4/4 and beyond); counting out loud; **swing as a measurable %**; straight vs triplet feel; how accent placement makes groove.
- Anchor gear: **Digitakt II** (16-step grid, per-step micro-timing, swing) + Live's metronome and warp grid.
- Free companions: Live's metronome; any drum grid; the Digitakt itself.

| Proposed page | Type | Proof gate |
|---|---|---|
| Rhythm from Scratch | Optional primer | Program and count **eight grooves** out loud — straight four-on-the-floor, offbeat hats, a 3/4, a swung 16th, a triplet shuffle — and explain why each subdivision feels as it does. |

#### Harmony from Scratch

**Status: Concept 2 / Hands-on 4** (and Hands-on jumps the moment the Digitone II arrives). The only harmony-adjacent lesson is Lab 026 (tuning as a system) — advanced microtonal work that assumes you already know intervals and scales.

Verified absences: **named scales = 0**, **keys / root / diatonic = 0**, named intervals barely (3), chords/triads barely (1). The "voicing" hits (8) are mostly synth *voices*, not chord voicing.

- Missing atoms: intervals and how they sound (the beating link is in Lab 004b, but intervals are never named); major/minor scales, modes, pentatonic; triads and sevenths; keys and the diatonic chords within a key; inversions and voicing; simple voice-leading; building a progression.
- **Why urgent:** the polyphonic **Digitone II** makes chords and voicing a daily decision — and nothing currently teaches them.
- Anchor gear: **Digitone II** (polyphonic, multitimbral) + Live 12's **Scale** and **Chord** MIDI devices.
- Free companions: Live 12 Scale/Chord/Stacks generators; musictheory.net; any on-screen piano.

| Proposed page | Type | Proof gate |
|---|---|---|
| Harmony from Scratch | Optional primer | Voice one four-chord progression **three ways** (close, open, with a passing inversion), explain each choice, and build a Digitone pad with deliberate voice-leading. |

#### Mixing — Dynamics & Compression (incl. sidechain)

**Status: Concept 2 / Hands-on 5** (all stock Live devices). Block 5 teaches *loudness and the master* (limiting) — the destination — not the compressor atoms or the move that defines the genre.

Verified absences: compression mentioned (9) but its **parameters drilled = 1**; sidechain / ducking mentioned (5) but never built from scratch.

- Missing atoms: what a compressor does; **threshold, ratio, attack, release, knee, makeup gain**; reading gain-reduction; serial vs parallel; glue vs control; **sidechain ducking** — the kick-pumps-the-bass/pad move at the heart of techno.
- Anchor gear: Live's **Compressor** and **Glue Compressor**; a kick routed to sidechain a pad/bass.
- Free companions: Live stock devices; "set attack/release by ear" drills.

| Proposed page | Type | Proof gate |
|---|---|---|
| Mixing — Dynamics from Scratch | Optional primer | A before/after on one bus showing controlled dynamics, **plus an audible sidechain pump** on a pad, with the threshold / ratio / attack / release you chose stated and defended. |

#### Mixing — EQ

**Status: Concept 3 / Hands-on 5.** Block 5 covers spectral tilt, masking, and translation (the *why*) well; the EQ atoms (the *how*) are thin — EQ device/curve = 1, EQ shape (shelf/bell/Q/notch) = 3.

- Missing atoms: parametric bands; **frequency, gain, Q (bandwidth)**; shelf vs bell vs high/low-pass vs notch; subtractive (cut first) vs additive; surgical (narrow) vs broad strokes; high-passing everything that doesn't need lows; carving space (the practical side of the masking concept already taught).
- Anchor gear: Live's **EQ Eight** + the **Spectrum** analyzer (already drilled in Lab 003b).
- Free companions: Live EQ Eight; any free analyzer.

| Proposed page | Type | Proof gate |
|---|---|---|
| Mixing — EQ from Scratch | Optional primer | Fix one muddy and one harsh sound with **named moves** (band, Q, type), and carve two clashing sounds apart — each confirmed on the analyzer. |

#### Effects from Scratch

**Status: Concept 4 / Hands-on 4.** This is the strongest of the gap domains: Block 5 teaches effects as a *routing architecture* (insert vs send, pre/post-fader, wet/dry, feedback) very well. What's thin is the per-device parameter layer.

Verified levels: reverb params (predelay/decay/size/diffusion) barely (3); delay better (9 — Block 5 "Delay as Composition"); modulation FX named (10) but not dissected.

- Missing atoms: **reverb** — predelay, decay time, size, diffusion, early vs late reflections; **delay** — time, sync to note values, feedback, filtering in the loop, ping-pong; **modulation** — chorus/phaser/flanger as rate + depth + feedback. (Dry/wet and pre/post-fader are already covered.)
- Anchor gear: Live's **Reverb, Delay, Chorus-Ensemble, Phaser-Flanger** + the Digitakt's delay/reverb/chorus sends.
- Free companions: Valhalla Supermassive (free reverb/delay); Live stock effects.

| Proposed page | Type | Proof gate |
|---|---|---|
| Effects from Scratch | Optional primer | Recreate **three named effect sounds** (a slap delay, a dub throw, a long ambient reverb) from an init effect, naming every parameter you set. |

#### Ear Training

**Status: Concept 2 / Hands-on 3.** The workshop's listening programmes are strong — but they are **system analysis** (the six-question frame), a different skill from atomic ear-training. The "ear training" hits (11) are all analysis, not drills.

- Missing atoms: interval and chord recognition; "name the filter move / the LFO rate"; spotting compression and reverb by ear; and the keystone that ties the whole primer layer together — **recreate a sound by ear**. This is exactly the skill the synthesis recipes and the replication labs both assume.
- Anchor gear: the whole rig + a target sound; the workshop's own replication labs are ear-training in disguise.
- Free companions: **Syntorial** (paid, the standard for synth ear-training); teoria.com / musictheory.net / functional-ear-trainer (free).

| Proposed page | Type | Proof gate |
|---|---|---|
| Ear Training | Optional primer / recurring drill | Pass a **recreate-by-ear set** — match five target sounds (a kick, a bass, a pad, a delay throw, a filter sweep) without looking at the source. |

#### Arrangement (partial — and partly intentional)

**Status: Concept 3 / Hands-on 4.** This is the one primer that is *partly a deliberate non-goal*: the workshop teaches **subtractive / experimental** arrangement (Block 5 "Subtractive Arrangement", Block 7 long-form) on purpose, instead of conventional dance forms. Still, a learner who wants club-ready tracks lacks the conventional atoms (dance forms = 12, phrasing = 5, both incidental).

- Missing atoms: intro / build / breakdown / drop; 8 / 16 / 32-bar phrasing; tension and release; energy curves; transition tools (risers, impacts, filter sweeps as arrangement); the "what changes every 8 bars" discipline (Block 1 listening touches this).
- Anchor gear: Live's Arrangement view + the Session-to-Arrangement workflow.
- Free companions: any reference track + Live's arrangement markers.

| Proposed page | Type | Proof gate |
|---|---|---|
| Arrangement from Scratch | Optional primer | Arrange one loop into a 3-minute track with **labelled sections and a stated energy curve** — then build the workshop's subtractive version of the same idea and compare. |

## Expanded category notes

### Modular synthesis

Current coverage is conceptually good but hardware-light (C4 / H3). The workshop already makes students think in modular terms: sources, transforms, control paths, clocks, feedback, modulation, state, and patch documentation. **Lab 024b** explicitly uses VCV Rack for west-coast synthesis — a good bridge into modular behaviour without a rack.

What is missing is the physical modular layer:

- CV vs gate vs trigger vs audio.
- Why attenuation, offset, mults, mixers, and utilities matter more than flashy modules.
- Clock/reset distribution.
- Patch memory by photograph and diagram.
- Safe gain levels between modular, pedals, interface, and mixer.
- How to record modular without confusing performance movement with patch state.

Suggested addition:

| Proposed page | Type | Proof gate |
|---|---|---|
| Optional Hardware Modular Path | Optional bench page | Student patches one simple voice, one modulation path, one clocked event, records it, and updates the Studio Signal Map. |
| Modular Utilities Before Modules | Optional reference | Student explains what attenuation, offset, mult, mixer, and clock divider do in their own signal/control path. |

### Make Noise / 0-Coast

Coverage is absent as a specific ecosystem (C2 / H1). This is fine unless the gear is actually bought. If it enters the rig, treat it not as "more synth" but as the **first hardware semi-modular system**.

| Skill | What to teach |
|---|---|
| MIDI-to-CV entry | How Live / Digitakt / Launchpad sends notes or clock into the 0-Coast. |
| Oscillator + overtone | How the raw tone is shaped before the dynamics section. |
| Slope / contour | Envelopes as modulation sources, not just note shapes. |
| Dynamics / LPG behaviour | Why west-coast amplitude and brightness are tied together. |
| Clock and random | How to make the patch move without drawing DAW automation. |
| Recording | 0-Coast into the M4 or Digitakt, level checked, printed as audio. |

| Proposed page | Type | Proof gate |
|---|---|---|
| 0-Coast as First Semi-Modular Voice | Optional track/bench hybrid | Student builds one drone, one pluck, and one clocked self-playing patch; documents audio path and control path separately. |

### Analog and analog poly

Analog synthesis is well covered through analog behaviour (C4 / H4): the MicroFreak's analog filter, resonance, saturation, beating, tuning, and sustained tones. The missing part is explicit analog *instrument* behaviour and, especially, **polyphony as a system** (C2 / H3 for poly; C1 / H1 for hardware analog poly).

What to add:

- VCO vs DCO vs digital oscillator as practical behaviour, not brand mythology.
- Tuning drift and warm-up; filter self-oscillation and calibration.
- Voice allocation; shared filter vs filter-per-voice.
- Chord voicing, register, and mud; pads as systems (movement, width, arrangement role).
- Patch memory and recall differences across analog instruments.

| Proposed page | Type | Proof gate |
|---|---|---|
| Polyphony as a System | Track lab or optional expansion | Student builds the same harmonic idea three ways: mono/paraphonic, software poly, analog-poly-style. They compare voice allocation, filter behaviour, mix space, and recall. |

### Synthesis from Scratch (fundamentals primer)

Status: Concept 3 / Hands-on 4. The atoms exist as *applied vocabulary* — the glossary defines oscillator, filter, cutoff, resonance, envelope/ADSR, LFO, modulation, mod matrix, detune, wavetable, and FM, and Labs 004 / 005 / 006b / 013b put them to work. What is missing is a **ground-up primer** that isolates each atom one at a time and ends in a recipe cookbook — the layer a beginner needs *before* Lab 004, and the layer this workshop currently assumes.

Verified absences (not just "light" — actually zero in real lessons):

- **Pulse width / PWM** — no coverage at all. A core oscillator topic.
- Isolated **attack / decay / sustain / release** drills (the terms are used everywhere, but never taught one stage at a time).
- Isolated **LFO** rate / depth / shape drills.
- Oscillator and filter explored from an **init patch**.
- A **patch-recipe cookbook** (the workshop's only from-scratch recipe is drums, Lab 006b).

Anchor every lesson to gear already owned: the **MicroFreak** (engines, analog filter + resonance, envelope, cycling envelope, LFO, 5×7 mod matrix) and **Live's Analog / Wavetable / Operator** — Analog and Wavetable are where PWM and classic subtractive actually live. Free companions: **Ableton Learning Synths** (interactive, same curriculum), **VCV Rack** (each block visible and patchable), **Vital** (visual modulation/PWM); **Syntorial** (paid) for recreate-by-ear. The Digitone II being bought is FM/digital — good for the FM section, not for the PWM/analog-filter atoms; learn those on the MicroFreak + Live first.

| Proposed page | Type | Proof gate |
|---|---|---|
| Synthesis from Scratch (Lab Note 000 / Block 00) | Optional primer + recipe cookbook | From an init patch, student builds one sound per recipe (pluck, sub, kick, hihat, siren, pad/strings, west-coast lead, "two-in-one") and recreates two target sounds by ear. |

See **"The fundamentals (atoms) layer — a structural gap"** above for the same problem across rhythm, harmony, mixing, effects, and ear training.

### Synths and drones

Already one of the strongest threads (C5 / H5). The workshop covers one oscillator / one filter, beatless sustained tone, slow modulation, drone gain staging and ear fatigue, microtonal drone and beating, tuning as system, near-silence, and long-form attention. It needs not another drone lab but an **index/pathway page**:

| Path stage | Existing workshop material |
|---|---|
| First held tone | Lab 004b |
| Slow modulation | Lab 005 |
| Long-form drone | Lab 005b |
| Drone as tuning proof | Lab 026 |
| Drone as threshold / silence | Lab 033b |
| Drone as personal voice | Lab 034 / C7 |

| Proposed page | Type | Proof gate |
|---|---|---|
| Drone Pathway Map | Index/reference | Student can choose a drone study by weakness: gain, modulation, tuning, form, silence, or release translation. |

### Sampling and resampling

Very strong (C5 / H5): sample packs, field recordings, voice, Digitakt sampling, resampling in Live, granular reconstruction (015), slicing (016), live resampling (028), release print maps. What could be added is mostly professional hygiene:

- Copyright / sample legality for released work; library organisation; naming and metadata.
- "Collect All and Save" discipline; sample-rate consistency; destructive vs non-destructive edits.
- What counts as original material in the portfolio.

| Proposed page | Type | Proof gate |
|---|---|---|
| Sample Library and Release Hygiene | Reference / bench | Student can trace every sample in a release candidate to source, license/status, processing chain, and final print. |

### Drum machine

Strong (C4 / H5): Digitakt II as rhythm brain, sampler, sequencer, p-lock machine, conditional-logic engine, and performance device. Missing areas are maintenance and live organisation:

- Pattern banks and project structure; kit/sample-pool discipline.
- Mutes and fills as performance design; backups and exports.
- Moving from one pattern to a live-set section; documenting Digitakt state in the print map.

| Proposed page | Type | Proof gate |
|---|---|---|
| Digitakt Project Hygiene and Performance Patterns | Optional bench/performance page | Student builds a small bank: intro, main, variation, breakdown, recovery; backs it up and documents what lives in project memory. |

### Sequencing

A core spine (C5 / H5): step sequencing, Live clips, Launchpad standalone sequencing, probability, Euclidean logic, polymeter, phase, rule-based sequencing, chance, reset/state. The only missing piece is a comparison page that prevents tool confusion:

| Sequencer | Best workshop role |
|---|---|
| Live | Long clips, arrangement, automation, MIDI generation, recall. |
| Digitakt II | Drums, p-locks, conditional trigs, per-track lengths, fast performance variation. |
| MicroFreak | Sound-tied melodic sketches and knob-motion sequences. |
| Launchpad | Human-facing clip launch, custom controls, and standalone hardware driving. |

| Proposed page | Type | Proof gate |
|---|---|---|
| Who Should Sequence What? | Reference / decision page | Student chooses one sequencer per role and explains why splitting the brain will not create clock/reset ambiguity. |

### MIDI control and performance controllers

MIDI note, CC, and clock are covered (C4 / H4), and the Launchpad is introduced well (modes, standalone sequencing). What is missing is a **required mapping proof**:

- MIDI Map mode in Live; Macro control banks; a Custom Launchpad mode.
- Clip launching vs note playing vs device control; recording automation from a controller.
- A footswitch / pedal option for hands-free looping or transport.
- Panic controls: mute, stop, dry signal, feedback kill.

| Proposed page | Type | Proof gate |
|---|---|---|
| Performance Controller Map | Bench/performance lab | Student maps eight controls, records a performance pass, proves automation/gestures were captured, and documents a panic control. |

### DAW integration

Excellent (C5 / H5). Live is explicitly a recorder, mixer, MIDI clock master, resampling tool, Max for Live environment, arrangement surface, and release workspace. Add only the operational survival pieces:

- Templates; backups; versioning; Collect All and Save.
- Freeze/flatten/print decisions; stems; export settings; recovery from missing samples/plugins.

| Proposed page | Type | Proof gate |
|---|---|---|
| Session Survival and Export Discipline | Bench/reference | Student reopens a project on a clean path, confirms all samples are present, exports stems and master, and documents what is audio vs MIDI vs device state. |

### Audio interface and monitoring

Core spine (both C5 / H5). Labs 001–002 teach signal path, gain staging, M4 routing, latency, monitoring, direct vs software monitoring, MIDI DIN, and headphone-level marking. Later labs reinforce translation, mono/phase, loudness, near-silence, and release testing. Possible additions:

- Speaker calibration if monitors enter the rig.
- A troubleshooting tree for driver/sample-rate/buffer/input-config faults.
- An interface-expansion decision: when the M4 is enough and when more inputs are truly needed.

| Proposed page | Type | Proof gate |
|---|---|---|
| M4 Troubleshooting Appendix | Reference | Student can diagnose no input, doubled monitoring, wrong sample rate, high latency, and missing channel config. |

### Mixer and performance mixer

Strong on mixing **concepts** inside Live and Digitakt (mixer C5 / H4): sends, returns, dub throws, feedback paths, translation, subtractive arrangement. Weak on external mixer hardware (no mixer in the defined rig), and no-input/performance mixing is concept-covered but hardware-absent (C4 / H3). If a mixer is added, teach channel gain vs fader, aux sends/returns, inserts, subgroups, cue/headphone bus, main vs record out, feedback safety, stereo returns, performance mutes, and recording main vs stems.

| Proposed page | Type | Proof gate |
|---|---|---|
| External Mixer as Routing Architecture | Optional bench lab | Student routes MicroFreak, Digitakt, a Live return, and one FX send; records a main mix and explains what cannot be changed after the print. |
| Performance Mixer Certification | Optional performance page | Student performs mutes, sends, cueing, panic mute, and a full recording test before C6-style live-set work. |

### Hardware effects and pedals

Mostly missing as hands-on hardware (C4 / H2), but the concepts are prepared by Block 5 (delay, reverb, feedback, saturation, routing, printing, noise budgets). What is missing is the electrical and recall reality of pedals/outboard: instrument vs line level, mono/stereo, reamp/DI, power noise, gain staging into pedals, wet/dry and latency, photographing settings, printing as commitment, feedback safety.

| Proposed page | Type | Proof gate |
|---|---|---|
| First Pedal / Hardware FX Chain | Optional bench lab | Student routes one pedal or outboard FX as insert and send/return, prints both, compares noise and level, and files recall photos. |

### Recorder and hardware recorder

Recording as proof is central (C3 / H2). A hardware recorder as a standalone capture device is not developed; Live currently carries the tape-machine role, with a field recorder in Lab 008. If a hardware recorder is added, teach main-mix capture, redundant recording for live sets, 24-bit headroom, file format/naming, battery/storage preflight, a calibration tone, sync drift on long takes, and import into Live.

| Proposed page | Type | Proof gate |
|---|---|---|
| Standalone Recorder Workflow | Optional bench/performance page | Student records the same pass into Live and a hardware recorder, imports both, checks level, drift, file naming, and recovery value. |

### Budget and gear growth

A strong anti-gear-churn stance (C2), but not yet a detailed buying framework. Since the current rig is already complete, this should be a **decision tool**, not a shopping list.

| Question | Pass condition |
|---|---|
| What problem does this gear solve? | It names a current workshop bottleneck, not an imagined future style. |
| Which path changes? | Audio, control, clock, monitoring, or print path is clearly updated. |
| What does it replace or simplify? | If it only adds options, it fails. |
| What proof will certify it? | A 30-minute integration test with a recorded print. |
| What new failure does it create? | Gain, clock, noise, latency, recall, or state failure is named. |

| Proposed page | Type | Proof gate |
|---|---|---|
| Gear Purchase Gate | Reference / checklist | Student cannot add a device to the official rig until it passes signal-map, clock, gain, monitoring, print, and failure tests. |

## Priority additions by need, cost, and risk

Priority means: high educational need, low or controlled cost, low integration risk, and strong reuse — not "most exciting."

### Decision factors

| Factor | High priority means |
|---|---|
| Educational need | The gap blocks or weakens several existing labs/capstones. |
| Money cost | Prefer no-buy or low-cost additions before new hardware. |
| Integration risk | Prefer additions that do not create many new clock, gain, noise, latency, recall, or routing failures. |
| Reuse | Prefer additions that improve many blocks, not one niche page. |
| Dependency | Prefer framework pages before gear-specific pages. |
| Assessment value | Prefer additions with a clear proof gate: record, diagnose, document, update the map. |

### Cost bands

| Cost band | Meaning | Examples |
|---|---|---|
| $0 | Uses current rig only | Live, Digitakt II, MicroFreak, M4, Launchpad, DT 990, existing sample packs. |
| Low | Small accessory or no permanent rig change | Cables, adapters, storage, cheap utility, free/stock software, VCV Rack. |
| Medium | One meaningful hardware addition | Pedal, small recorder, utility mixer, used controller, small monitor upgrade. |
| High | Major instrument or rig expansion | Analog poly synth, performance mixer, semi-modular synth, modular case/modules. |
| Ongoing | Creates a system that keeps demanding purchases | Eurorack/modular expansion, open-ended pedal chains. |

### Integration risk bands

| Risk | Meaning |
|---|---|
| Low | Fits the current rig and failure model with little new complexity. |
| Medium | Adds a new path or device state that must be documented. |
| High | Adds new gain standards, clock/reset behaviour, routing ambiguity, or expensive recall problems. |
| Very high | Opens an expandable ecosystem where the course can drift into gear management instead of music. |

## Ranked roadmap

| Rank | Addition | Need | Cost | Risk | Timing | Why this priority |
|--:|---|---|---|---|---|---|
| 1 | Gear Purchase Gate / Hardware Expansion Framework | Very high | $0 | Low | Add now | Protects the workshop from random gear growth; gives every later purchase a pass/fail test. |
| 2 | Session Survival and Export Discipline | High | $0 | Low | Add now | Release, sampling, recording, and long-term study all depend on project survival. Helps every block, costs nothing. |
| 3 | Performance Controller Map | High | $0 | Low | Before/inside Block 7 | The Launchpad is already owned. A mapping proof turns "performance controller" into an assessed skill. |
| 4 | Polyphony as a System (software-first) | High | $0 | Low | After one-voice foundations | The one real *teaching* gap. Teach with Live instruments before any analog-poly purchase. |
| 5 | Drone Pathway Map | Medium-high | $0 | Low | Add now | Drones are strong but spread across blocks; a pathway page makes the strength usable. |
| 6 | Who Should Sequence What? | Medium-high | $0 | Low | Before Block 3 or 6 | Prevents clock/reset confusion across the four sequencers. |
| 7 | Sample Library & Release Hygiene | Medium-high | $0–Low | Low | Before C7 | Closes the professional/release gap: source status, naming, archive discipline. |
| 8 | M4 Troubleshooting Appendix | Medium | $0 | Low | Near Block 1 | Reduces recurring setup friction on the central interface. |
| 9 | CC-Mapping Lab | Medium | $0 | Low | Block 1–7 | Makes MIDI control assessable, not just described. |
| 10 | Digitakt Project Hygiene & Performance Patterns | Medium | $0 | Low | Before Block 7 | Improves live reliability and recovery. |
| 11 | Standalone Recorder Workflow | Medium | Medium | Medium | Only if live capture matters | Useful for redundancy, but Live already records well. |
| 12 | External Mixer as Routing Architecture | Medium | Medium–High | Medium-high | Only when a mixer is acquired | Concepts already taught in Live; wait for real hardware. |
| 13 | First Pedal / Hardware FX Chain | Medium-low | Medium | Medium-high | After Block 5 | Musically useful, but creates level/noise/recall/power problems; teach with a strict print/recall gate. |
| 14 | 0-Coast as First Semi-Modular Voice | Low-med now; high if bought | High | High | Only if bought | West-coast concepts already in VCV; a hardware page becomes urgent only after purchase. |
| 15 | Hardware Modular Path | Low-med now | High / Ongoing | Very high | Defer | Conceptually aligned but expensive and expandable; stay in VCV until a specific commitment. |
| 16 | Analog Poly Synth Expansion | Low now | High | Medium-high | Defer | A clear gap, but not a current-rig need; teach poly in software first. |
| 17 | Performance Mixer Certification | Low now; high if live rig grows | High | High | Defer until C6 needs it | Block 7 works with Live/Digitakt/Launchpad; justify a mixer only when cueing/no-screen becomes a proven bottleneck. |

## Practical purchase priority

If the question is "what should be bought first?", the answer is **probably nothing yet**. The first priorities are documentation and workflow pages that use the current rig.

| Buy order | Category | Recommendation |
|--:|---|---|
| 0 | No-buy improvements | Add the Gear Purchase Gate, Session Survival, Controller Map, Polyphony lab, Drone Pathway, Sequencer Decision page, and Sample Hygiene page first. |
| 1 | Small utilities | Only cables/adapters/storage that fix a documented routing or archive problem. |
| 2 | Hardware recorder | Consider before mixer/modular if live-set redundancy becomes important. |
| 3 | Small / utility mixer | Only if input count, cueing, or hardware sends become a real bottleneck (also unlocks no-input feedback). |
| 4 | One pedal or hardware FX | After Block 5, with a specific send/return or print role. |
| 5 | Semi-modular / 0-Coast | After the VCV/west-coast material proves you want that physical workflow. |
| 6 | Analog poly synth | After a software polyphony lab proves a recurring harmonic need. |
| 7 | Eurorack modular | Last. Only after you can name the exact function missing from fixed-architecture gear. |

## Recommended next three additions

| Order | Add this | Why |
|--:|---|---|
| 1 | **Synthesis from Scratch primer** (Block 00) | The biggest no-buy gap and the foundation under Block 1; isolates the atoms (incl. PWM) and ends in a recipe cookbook; free to build on the MicroFreak + Live. |
| 2 | **Harmony from Scratch primer** | The polyphonic Digitone II makes intervals/chords/voicing a daily need; no purchase. |
| 3 | Performance Controller Map | Uses the Launchpad already owned; strengthens Block 7 immediately. |

*(Governance note: the **Gear Purchase Gate** remains the single highest-leverage non-lesson addition — add it alongside these to stop random gear churn. Polyphony as a System and the Mixing/sidechain primer are the next tier.)*

## What still needs assessment

This document assesses equipment and concept coverage. It does not yet fully assess whether each topic is taught at the right depth, in the right order, with enough proof. The next pass should add these columns.

| Assessment area | What to check | Suggested output |
|---|---|---|
| Required vs optional | Which categories are required, optional enrichment, or future-only. | A `Required / Optional / Future` column. |
| Evidence level | Mention, explanation, hands-on step, repeated practice, or assessed proof. | An `Evidence` column. |
| Prerequisites | What each proposed addition depends on. | Prerequisite rows per page. |
| Curriculum placement | Where each missing topic should land (Block 0, 1, 5, 7…). | A `Best placement` column. |
| Cost justification | Purchase, borrow, software-sim, or current-rig-only. | A `No-buy path` for every hardware addition. |
| Failure modes | What new faults each addition introduces (gain, noise, latency, state, clock, recall, safety). | A fault row per addition. |
| Assessment gate | What the student must produce to prove competence. | Proof gates on all future pages. |
| Maintenance burden | Future upkeep the topic creates. | Low/medium/high maintenance score. |
| Current-rig compatibility | Works with the six owned boxes only? | `Current rig` / `Needs accessory` / `Needs new gear`. |
| Student outcome | What a graduate can actually do. | A one-sentence outcome per category. |
| Depth target | Aware, usable, fluent, or specialist. | A `Depth target` column. |
| Redundancy | Does a proposed page repeat existing material? | `New page / index / link-only`. |

### Next assessment pass — requirements matrix (template)

| Category | Status | Evidence | Best placement | Cost | Risk | Proof gate | Outcome |
|---|---|---|---|---|---|---|---|
| Example: Performance Controller Map | Required for Block 7 | Practiced, not fully assessed | Block 7, in/before Lab 031 | $0 | Low | Map 8 controls, record a pass, document a panic control | Student can design and prove a playable control surface. |

Use the matrix to decide whether each addition becomes a new page, a section in an existing page, an index/pathway page, a checklist/reference, or a deliberate non-goal.

## Likely non-goals

Some areas should stay non-goals unless the rig changes:

| Topic | Why it may stay out |
|---|---|
| Full Eurorack curriculum | Too expensive and open-ended; teach modular thinking first, hardware later only if needed. |
| Deep analog-poly programming | Useful, but not necessary for the current rig or the workshop's experimental-systems goal. |
| Large-format mixing-desk workflow | Routing/mixing can be taught through Live/Digitakt until a real desk is present. |
| Broad pedal collecting | One pedal/FX chain may help; a general pedal course distracts from the system method. |
| Brand-specific gear tours | They age fast; prefer signal/control/failure principles unless a device is in the actual rig. |

## Short diagnosis

The workshop is strongest on the current core rig: Ableton Live, Digitakt II, MicroFreak, MOTU M4, DT 990 monitoring, Launchpad, clocking, routing, sampling, sequencing, drones, and recording as proof. As a **set of concepts**, coverage is near-complete.

The main weak spots split in two. First, **hardware expansion categories**: analog poly synths, external/performance mixers, outboard effects and pedals, hardware modular, semi-modular Make Noise gear, and standalone recorders — each with a free software substitute already in place. Second, and more important, a missing **fundamentals ("atoms") layer**: the course teaches the advanced/systems layer of synthesis, rhythm, harmony, mixing, effects, and ear training while assuming the ground-up building blocks beneath them (Block 1's audio-engineering atoms are the lone, excellent exception). The top no-buy fixes are the **fundamentals primers** (starting with Synthesis from Scratch), then **polyphonic synthesis as a system** and a **controller-mapping proof**.

The safest rule: do not add gear lessons until there is an actual rig decision to teach. When gear is added, teach it through the existing workshop method — draw the audio path, draw the control path, calibrate levels, declare the clock, run a fault, print proof, and update the Studio Signal Map.

---

*A reader-facing version of this assessment lives at `workshop/coverage.html` (linked from References).*
