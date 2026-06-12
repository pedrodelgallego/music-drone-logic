# Experimental Music Workshop — Curriculum Plan

Status: v8.2 — active authoring spec. v7 plus five execution edits:
listening-as-hypothesis (the loop now opens with comparative listening),
minimum pass gate, Phase 0 exit gate, Year 2 buffer rule, and the
`faultType` metadata field. v8.1 adds replication labs (R1–R8) as a fourth
lab type — replication as method, originality as output. The plan is
driven by authoring friction now, not another abstract review round. This
document is the working spec for expanding Lab Note 001 into a
full workshop. The curriculum matrix below is the source of truth
until lab front matter exists; once Eleventy is in place, the matrix is
generated from per-lab metadata and this section becomes documentation.

## Identity

A multi-year workshop in experimental electronic music, taught as **systems
thinking and sound engineering**, not genre recipes. Students build small
sound systems — clock, routing, sources, modulation, sequencing logic,
performance gestures, recording strategy — and develop their ear and voice
in parallel through a structured listening practice.

**North star.** The graduate is not someone who knows 35 techniques. The
graduate can walk into an unfamiliar electronic music setup, draw the audio
path, identify the control path, calibrate levels, understand clock and
monitoring, make a musical system, diagnose failure, print the result, and
explain what happened.

The workshop runs as **three strands**:

1. **Build labs (001–035 + R1–R8)** — track labs, études, bench labs, and
   one replication lab per block, in sequence
2. **Listening programme (L1–L8)** — one programme per block, plus listening
   assignments attached to every build lab; each programme's Samples session
   feeds the block's replication lab
3. **Capstones (C1–C7)** — tiered integration works placed at pedagogical
   integration points, not on a fixed cadence

- **Lab types**: Track lab (T) — a full original piece around one technique.
  Étude (É) — a short focused exercise. Bench lab (B) — engineering;
  output is a working setup plus reference documentation. Replication lab
  (R) — a reference passage rebuilt from the student's own listening
  analysis; output is a replica filed as study plus a corrected analysis.
- Lab titles foreground the **experimental method**; genre is a context tag.
- The originality constraint from Lab Note 001 governs **portfolio output**:
  track labs and capstones file fully original pieces, and nothing copied
  migrates from a replication session into filed work. Replication itself
  is a first-class learning method with **no material restriction**:
  lessons and labs replicate sections of real records as closely as the
  rig allows — sounds, notes, levels — because closeness is the measure of
  hearing. Replica audio stays in the logbook and outside portfolio work.
  Copy to learn; compose your own.

## Workload accounting

Intended pace: **one cycle every 2–3 weeks** of part-time work → ~3 years.
Documentation is part of the lab, not additional work.

- A **standard cycle** = one build lab + its attached listening, report, and
  logbook entry.
- **Block listening programmes** (3 sessions) count as one cycle.
- **Gate capstones** count as one cycle; **year capstones and the final
  capstone count as two**.
- **Études and replication labs are half-cycles**; études pair with a
  listening session, bench maintenance, or a review week; replication labs
  pair with their block's Samples session.

Resulting shape: **Year 1 ≈ 18–19 cycles** (12 build labs + R1–R3 + L1–L3 +
C1–C2), **Year 2 ≈ 22–23 cycles** (14 build labs + R4–R6 + L4–L6 + C3–C5) —
the densest year, plan for it — **Year 3 ≈ 14 cycles** (9 build labs +
R7–R8 + L7–L8 + C6–C7), fewer but heavier items (long form, live set,
release).

**Year 2 buffer rule.** After C4 or after Lab 024 (whichever lands when
fatigue shows), insert one non-portfolio cycle: repair, remix,
documentation cleanup, or a Studio Signal Map revision. The buffer is part
of the plan, not a failure of it.

## The operating loop

Every track lab, bench lab, and capstone runs the same mental loop:

> **comparative listening → system hypothesis → draw the path →
> calibrate → build → inject a fault → diagnose → print →
> explain the delta between plan and reality**

The loop is the pedagogy; techniques are the occasions for running it.

**The hypothesis comes from listening.** The loop's first step is not
invented from nothing: every track lab opens with its comparative listening
assignment, and the System Spec hypothesis must name what was stolen from
the comparison (see *The listening curriculum*). Listening is the loop's
opening move, not an assignment on top of it.

**Minimum visible loop.** Every lab page displays the loop as a compact
checklist near the top — listening · hypothesis · path drawing ·
calibration · build · fault · diagnosis · print · delta — so the loop reads
as workflow, not bureaucracy. A lab page that hides the loop in prose is
mis-authored.

**Guardrail: the loop deepens; the paperwork must not.** Specs and reports
stay compact, arrive pre-filled in Year 1, and are authored blank by Year 3.

## Multi-year structure

- **Year 1 — Foundations** (Blocks 1–3): the bench, sources, time.
  Hidden curriculum: *"I can trace and capture."*
- **Year 2 — Transformation & Systems** (Blocks 4–6): transformation,
  space & mix, decision systems. Hidden curriculum: *"I can transform and
  diagnose — every transformation is path-dependent."*
- **Year 3 — Performance & Voice** (Blocks 7–8): performance & curation,
  synthesis. Hidden curriculum: *"I can operate and author."*

Mechanics for a multi-year course:

- **Reprise**: year capstones include reworking an earlier piece with the
  newer toolkit — spaced repetition built into assessment.
- **Logbook**: one continuous journal across the whole workshop; lab reports
  and listening analyses file into it.
- **Studio Signal Map**: drawn as v1 in Block 1, re-versioned at every gear
  arrival and every capstone.
- **Scaffolding fades by year**: Year 1 ≈ S1–S2, Year 2 ≈ S2–S3, Year 3 ≈ S4.
- The site stays static; progress tracking is journal-based with a printable
  curriculum checklist.

## Primary technique domains

Blocks map onto technique domains (primary lenses, not a strict partition;
each lab declares one primary domain plus an `alsoTouches` field):

| Block | Domain |
|---|---|
| 1 | Spine — the bench + the worked exemplar |
| 2 | A — Sources (where sound originates) |
| 3 | B — Time (how events are organized) |
| 4 | C — Transformation (how sound is altered) |
| 5 | D — Space & Mix (where sound sits) |
| 6 | E — Decision Systems (what generates the choices) |
| 7 | F — Performance & Curation (what the human does in real time) |
| 8 | G — Synthesis & Voice (integration) |

Cross-cutting spines through every lab: **audio engineering**, **listening**,
**assessment**.

## The two specs (before any gear is touched)

Every track lab and capstone opens with both specs.

**System Spec** (composition-facing):

1. **Inputs** — what raw material enters the system
2. **Transforms** — what changes it, in what order
3. **Feedback / variation** — what keeps it alive over time
4. **Constraints** — what prevents clutter (track budget, one-variable rule)
5. **Human role** — what is performed, decided, or curated

**Engineering Spec** (path-facing):

| Field | The student specifies |
|---|---|
| Signal path | Full path: source → recorder, and source → ears |
| Gain plan | Nominal level, peak level, where gain is added/subtracted |
| Clock / sync | Master clock, followers, possible drift points |
| Latency | What is monitored live, what is delayed, what is compensated |
| Stereo / phase | Mono vs stereo sources, widening points, mono check |
| Noise budget | Expected noisy stages: preamp, contact mic, tape, pedals, mixer, resample |
| Print strategy | What gets committed to audio, when, and why |
| Failure mode | One thing likely to go wrong and how it will be diagnosed |
| Safety | Feedback, headphone level, field work, live rigs |

**Scaffolding modes for specs** — the S axis is page behavior, not
philosophy:

- **S1 — Verify**: both specs are provided; the student checks them against
  reality.
- **S2 — Complete**: most fields provided; the student fills the gaps and
  corrects the path after building.
- **S3 — Author from prompts**: the student authors both specs from guided
  questions.
- **S4 — Author from constraints**: the student authors both specs from the
  brief alone.

The lab 003 retrofit produces a **worked example of both specs** — a filled
spec teaches the expected granularity; a blank one is abstract.

## Fault injection

Every track lab, bench lab, and capstone includes **one controlled
breakage**, run as a ritual, never as punishment:

> predict the symptom → create the fault → observe → diagnose the
> location → fix → write the rule learned

Études prescribe one small fault without the full write-up.

Front matter separates the audit category from the specific fault:
`faultType:` is one of the matrix classes below (gain, monitoring, clock,
phase, state, …); `failureMode:` is the lab's concrete fault. The master
Fault-Finding Tree is generated by grouping `failureMode` entries under
`faultType`, so coverage can be audited per class.

**Fault-coverage matrix** — each block emphasizes the fault classes its
material naturally produces, so coverage doesn't collapse into gain faults:

| Block | Primary fault emphasis |
|---|---|
| 1 | gain, monitoring, latency |
| 2 | noise, field level, source handling |
| 3 | clock, drift, reset |
| 4 | gain into processing, cumulative degradation |
| 5 | phase, feedback routing, translation |
| 6 | state, seed, reproducibility |
| 7 | performance failure, panic path |
| 8 | integration failure, archive/print ambiguity |

## The seven layers — the graduate frame

Used at **capstone reviews, L8, and the final defense** — not per-lab
paperwork. A one-page seven-layer worksheet exists for capstones only.

| Layer | What the student learns to see |
|---|---|
| Material | What the sound is: oscillator, sample, field recording, tape, feedback |
| Signal | Where audio travels, changes level, clips, degrades, widens, sums |
| Control | MIDI, CV, automation, modulation, probability, gestures |
| Time | Clock, latency, phase, groove, loop length, drift, reset |
| Decision | Rules, constraints, chance, generative behavior, selection |
| Human | What is played, ridden, curated, muted, recovered, decided |
| Archive | What is printed, named, versioned, documented, reusable |

## The listening curriculum

Listening is a first-class strand. Two layers:

**1. Per-lab comparative listening — the hypothesis source.** Every build
lab's front matter carries a `listening` field: **at least 10 recordings**
(no upper limit) chosen
as contrasting implementations of the lab's system — each teaching a
**distinct facet of the lab's lens** — plus one video. One reference is
never enough, and three is still too few: a single example teaches its own
surface; only a spread of contrasts reveals the system's full range. Each reference gets a short worksheet pass
(the six-question frame below, a few lines per question), and the lab's
System Spec hypothesis must name what was stolen from the comparison. The
lab report cites the comparison — which reference contributed what — not a
single observation. This is the loop's first step, so it adds no load on
top of the build: it *is* the start of the build.

**2. Block listening programmes (L1–L8).** Three sessions each:

- **Records session** — canonical works analyzed with the system frame
- **Samples session** — deconstruction: raw material and processing chain;
  its worksheet becomes the blueprint for the block's replication lab
- **Video session** — watch the hands: studio footage, live sets, archives

**3. Replication lessons — one per listening reference.** Every listening
reference is paired with a **step-by-step replication lesson** (60–120
minutes): immediately after the After-verify step, the student replicates
a section of the reference as closely as the rig allows — sounds, notes,
patterns, levels — on their own rig, following exact numbered actions
(knobs, menus, values), with the lesson's concept as the lens. One lesson page
per reference (model: The point · The system you are replicating · Before
you start · Steps · Verify against the record · Logbook), linked from the
reference's accordion entry. With at least 10 references per build lab, a
block carries 40+ replication lessons — the listening strand is the
workshop's center of gravity, and the lessons spread across the lab's
cycle as its listening work; the student need not complete every lesson
before building, but every lesson completed sharpens the hypothesis.
Lessons are **optional drills by default**; a lab may promote specific
lessons to **required drills** when its build assumes their moves — the
promotion is named in the lab's Before-you-start and in the block hub's
required path. (Lab 003 requires three: machine-tight grid + clock,
p-lock vocabulary + mutes, sends + mapping + riding.)

**4. Replication labs (R1–R8) — the analysis, verified.** One per block, a
half-cycle paired with the programme's Samples session. The student rebuilds
a short passage (≈8 bars) of one programme reference **from their own
worksheet analysis** — never from a tutorial, preset pack, or breakdown
video, because the point is testing the student's analysis, not someone
else's. The replica is the empirical test of the sixth question: where it
sounds close, the analysis was right; where it fails is exactly what the
student could not yet hear, and that **miss list** feeds the block's next
hypothesis. Rules: timeboxed (two sessions, three at most) · judged on
closeness to the record, never polish — match everything you can hear,
including notes and timbre; every compromise the rig forces is a finding,
not a failure · filed as study evidence in the logbook, never as portfolio
output · the session is quarantined: nothing copied migrates into filed
work. R8 turns the method
inward: the student rebuilds one of their own Year 1 pieces from its print
map and documentation alone — the archive's reproducibility test.

The analysis frame is the five System Spec questions **plus a sixth**:
**likely audio path** — what had to be routed, recorded, mixed, or performed
for this work to exist?

Video sessions answer: where are the hands? what is being monitored? what
is pre-planned vs ridden live? what is the failure risk? what is being
recorded? what is impossible to recover later?

Deliverable per programme: written system analyses + **one stolen principle**
— a structural idea (never material) named in advance and evaluated in the
block's capstone.

**Canon breadth rule**: during authoring, each programme includes at least
one contemporary, non-obvious, or regionally relevant reference alongside
the canon — not for representation's own sake, but so students don't mistake
one historical lineage for the whole field of possible systems.

| # | Block | Programme focus | Example programme (curated fully during authoring) |
|---|---|---|---|
| L1 | 1 | Repetition & hypnosis | Basic Channel; Plastikman *Consumed*; Donato Dozzy — plus a hardware-techno live-set video, watched for restraint |
| L2 | 2 | Concrète & field | Schaeffer études; Westerkamp; Chris Watson; Éliane Radigue — plus field-recording documentary footage |
| L3 | 3 | Process & pattern | Reich *Drumming* / *Piano Phase* (with ensemble film); Jlin; early Autechre |
| L4 | 4 | Material under stress | Basinski *Disintegration Loops*; Fennesz; Aphex Twin — plus tape-music interviews; samples session traces one sample-based work to its sources |
| L5 | 5 | Space as instrument | King Tubby; Rhythm & Sound; Pole; Deepchord — plus dub-desk footage (Scientist at the console) watched for send/return choreography |
| L6 | 6 | Systems & chance | Cage (chance-operations lectures); Eno *Music for Airports* + generative talks; Lucier *I Am Sitting in a Room* (film) |
| L7 | 7 | Performance practice | David Tudor archival footage; contemporary hardware live sets; rig-breakdown videos — watched for recovery from failure, not just flow |
| L8 | 8 | The student's own archive | Three years of output heard as a stranger, through the seven layers; one artist retrospective as a model of a voice evolving |

### Listening taxonomy — categories per block

Each block's references are organized into named **listening categories**:
facets of the block's lens that the lab's references (minimum 10 per lab,
no upper limit) must cover between them. Every category needs at least two
references; beyond that, depth is welcome. Rules:

- **One home per reference.** A reference appears in exactly one block and
  gets exactly one replication lesson there. Later blocks may *cite* an
  earlier lesson as prerequisite (e.g. Spiegel in Block 6 building on
  Block 1's *Patchwork*), never duplicate it. Block 1's authored lessons
  already claim a wide slice of the canon; later blocks pick fresh works.
- **The category names the lens, not the genre.** Where a work could live
  in several blocks, its category decides what the worksheet listens for
  (Eleh in Block 1 is a *monitoring* study, not a drone study).
- Example references below are seeds, curated fully during authoring;
  the canon breadth rule applies per category.

| Block | Categories → example references |
|---|---|
| 1 | All authored (41 lessons). **hypnotic / deep techno** (DBX *Losing Control*; Mike Parker *Spiral Snare*; Plastikman *Spastik*; Rrose *Waterfall*; Function *Voiceprint*; Mulero *Black Propaganda*; Adonis *No Way Back*; Sleeparchive *Elephant Island*; Surgeon *Magneze*; …) · **noise floor as lead** (Pole *Tanzen 2*) · **signal-path pressure** (SOPHIE *Faceshopping*; Gesaffelstein *Pursuit*; Sunn O))); Emptyset *Demiurge*) · **clock & groove studies** (Dilla *Donuts*; Villalobos *Easy Lee*; Kraftwerk *Numbers*; D'Angelo *Playa Playa*; …) · **low-end monitoring study** (Eleh *Floating Frequencies*; Thomas Köner *Permafrost*; LFO *LFO*) |
| 2 | All authored (40 lessons, 10 per lab). **sustained tone / drone** — lab 005 (Radigue *Kyema*; Oliveros *Horse Sings from Cloud*; Stars of the Lid; Kali Malone *No Sun to Burn*; Folke Rabe *What??*; Palestine *Strumming Music*; Hecker *Chimeras*; Niblock *Sethwork*; Davachi *All My Circles Run*; Lucier *Music on a Long Thin Wire*) · **concrète & capture** — lab 006 (Schaeffer; Ferrari *Presque Rien No. 1*; Westerkamp *Kits Beach Soundwalk*; Watson *El Tren Fantasma*; Lockwood *A Sound Map of the Hudson River*; Matmos *Lipostudio*; Ruttmann *Weekend*; Henry *Variations pour une porte et un soupir*; Parmegiani *De Natura Sonorum*; Herbert *Around the House*) · **resampling texture** — lab 007 (Burial *Archangel*; OPN *Replica*; The Caretaker *An Empty Bliss Beyond This World*; Akufen *Deck the House*; Actress *Hubble*; DJ Shadow *Building Steam*; Four Tet *Unspoken*; Fennesz *Endless Summer*; Jelinek *Loop-Finding-Jazz-Records*; Vladislav Delay *Multila*) · **field / contact / EM** — lab 008 (Winderen *Energy Field*; Kubisch *Five Electrical Walks*; López *La Selva*; Tsunoda *Extract from Field Recording Archive*; Kirkegaard *Eldfjall*; Nilsen *The Invisible City*; Watson *Stepping into the Dark*; Vitiello *WTC Recordings*; Lucier *Sferics*; Jenssen *Cho Oyu 8201m*) |
| 3 | **minimal** (Villalobos *Dexter*; Studio 1) · **broken techno** (Blawan; Shed *The Traveller*) · **phasing techno** (Voices from the Lake) · **polyrhythm** (Burnt Friedman & Liebezeit) · **pulse minimalism** (Reich *Piano Phase*, *Clapping Music*; Riley *A Rainbow in Curved Air*) · **percussion/process study** (Reich *Drumming I*; Midori Takada) · **machine funk** (Drexciya; Model 500 *No UFO's*) · **ritual percussion** (Konono Nº1; Jajouka; Olatunji) |
| 4 | **acid** (Plastikman *Plasticity*; Hardfloor *Acperience 1*) · **industrial** (Regis *Gymnastics*; Throbbing Gristle) · **ambient IDM** (Boards of Canada; Autechre *Amber*) · **breaks** (Photek *Ni Ten Ichi Ryu*; Source Direct) · **tape music** (Reich *It's Gonna Rain*; Le Caine *Dripsody*; Oram) · **tape loop decay — analog/generational** (Basinski *Disintegration Loop 1.1*; Philip Jeck; The Caretaker *Everywhere at the End of Time* — citing Block 2's *Empty Bliss* lesson) · **sample degradation system — digital** (Oval *Do While*; Yasunao Tone *Solo for Wounded CD*) — worksheets name the contrast: erosion vs error · **granular ambient** (Tim Hecker *In the Fog I*; Belong) · **resonance study** (Lucier *I Am Sitting in a Room*; Rrose *Vanishing Pools*) |
| 5 | **dub techno** (Maurizio *M5*; Porter Ricks *Port Gentil*; Echospace) · **deep ambient** (Biosphere *Kobresia*; Deathprod; Oliveros *Deep Listening* as the reverb-as-instrument anchor) · **dub** (Pablo/Tubby *King Tubby Meets Rockers Uptown*; Scientist) · **subtractive minimalism** (Alva Noto & Sakamoto *Uoon I*; Monolake *Hongkong*) · **shimmer ambient** (Eno *An Ending (Ascent)*; Budd & Eno) · **feedback dub system** (King Tubby *Dub Fi Gwan*; Porter Ricks *Biokinetics 1*) · **delay-as-composition, incl. loop systems** (Fripp & Eno *Evening Star*; Eno *Discreet Music*; Riley *Poppy Nogood* — the time-lag accumulator, rebuildable on the rig) |
| 6 | **generative ambient** (Eno *Music for Airports 1/1*, *Reflection*) · **self-playing patch** (Ciani *Buchla Concerts 1975*; K. F. Whitman *Generator 1*) · **aleatoric** (Cage *Music of Changes*, *Imaginary Landscape No. 4*) · **microtonal drone** (La Monte Young *The Well-Tuned Piano*; Hennix *The Electric Harpsichord*; Kali Malone) · **generative counterpoint** (Spiegel *The Expanding Universe*, citing Block 1's *Patchwork* lesson; Hiller *Illiac Suite*) · **autonomous drone installation** (Neuhaus *Times Square*; Kayn *Tektra*; Dream House footage for the video session) · **chance loop system** (Eno *Music for Airports 2/1* — co-prime loop lengths; Hainbach, rig-relatable for the video session) |
| 7 | **Tudor / live experimental electronics** (Tudor *Rainforest IV*; Mumma *Hornpipe*) · **sampler performance** (Araabmuzik live MPC video; KiNK Boiler Room Sofia) · **long form** (Villalobos *Fizheuer Zieheuer*; Mills *Exhibitionist* for the video session) · **live hardware techno** (Surgeon live — Elektron-centric, this workshop's hardware; Octave One; 999999999 as a panic-path case study) · **live resampling system** (Tim Exile's Flow Machine; Colin Benders) · **feedback performance** (Nakamura no-input mixing board — the 029 safety reference; Lucier *Bird and Person Dyning*) · **long-form drone performance** (Radigue *Naldjorlak*, live cello; Tony Conrad *Four Violins*; Palestine performance footage citing Block 2's *Strumming Music* lesson) |
| 8 | **personal system** (Autechre; Mark Fell *Multistability*) · **cross-domain composition** (Andy Stott *Luxury Problems*; Actress *R.I.P* — *Archangel* and *Hubble* are homed in Block 2) · **signature piece** (Jlin *Black Origami*) · **teaching/documentation & archive practice** (*Sisters with Transistors*; Oblique Strategies as a decision archive) · **hybrid personal system** (Caterina Barbieri *Fantas*; Kaitlyn Aurelia Smith *First Flight*) · **three-track EP system** (Maurizio M-series — one system, numbered variations, the model for C7; Skee Mask *ISS* series) · **personal constraint language** (Lorenzo Senni *Superimpositions* — one constraint as an identity, the lab 032 reference; Mark Fell's rule-sets, cross-referencing the personal-system lesson) |

## Page models (per lab type)

- **Track lab**: 5 pages — Overview · System & Engineering Specs · Bench
  (routing diagram, recording plan, gain plan) · Build (incl. the fault
  ritual) · Diagnosis & Report
- **Étude**: 2 pages — Brief & System · Build & Report
- **Replication lab**: 2 pages — Target & Analysis · Rebuild & Verdict
- **Replication lesson**: 1 page — The point · The system you are
  replicating (+ YouTube/Spotify links) · Before you start · **Reference
  pass** (≈10 minutes: 4–5 questions answered in writing before touching
  gear) · Sound target (what success sounds like — never "louder") ·
  **Phased steps** (3–5 .step phases, each with a plain-words why, exact
  actions, expected result, and failure table; at least one routing
  diagram and one further visual — pattern grid, level table, timeline, or
  SVG; one **Observe** step that shows the effect on a meter, spectrum,
  zoomed waveform, or automation lane) · Safety note where a step runs hot ·
  Verify against the record · **Miss list** (matched · missed · change
  next — feeds the block's replication lab). Lessons replicate the record's
  section closely — sounds, notes, levels; there is no material
  restriction in study. The restriction lives at the portfolio boundary,
  not in the lesson.
- **Bench lab**: 3 pages — Overview · Procedure · Reference & Diagnosis
- **Listening session**: 1 page — Brief + worksheet
- **Capstone**: 3 pages — Brief & Constraints · Bench delta · Report &
  Synthesis (incl. seven-layer worksheet and defense)

**Section budgets** (track labs) — fixed, so labs stay rituals, not essays:
Overview 400–600 words · Specs 1–2 compact tables · Bench diagrams +
checklist · Build 8–14 steps · Diagnosis & Report checklist + prompts.

Shared workshop-level pages: **Studio Reference (a living operating manual,
versioned alongside the Studio Signal Map)**, Glossary, Curriculum Map, Gear
Roadmap, Listening Index, prerequisite graph, master Fault-Finding Tree,
Portfolio & Logbook guide.

## Engineering spine

Competencies recur as **required behaviors** — every track lab and capstone
files an Engineering Spec and runs one fault — not just as topics. Each
competency also has a home lab where it is taught explicitly:

- Signal flow, gain staging → **001**; clock, latency, monitoring, and the
  control path (MIDI notes vs CC, mapping with ranges) → **002**
- Sampling paths → **006**; field technique → **008**
- Resampling paths (internal vs USB vs analog loop) → **007**, deepened in
  015–017 and 028
- Mono/stereo, phase, doubled audio, translation → intro **001–002**,
  deep dive **021**
- Sends, returns, feedback loops → **018–020**; audio feedback systems → **029**
- Printing/committing audio → **003**, formalized in **027**
- Mixing by subtraction → **022**, at release scale in **C7**
- Tape/analog degradation path → **017**
- Performance routing & failure rehearsal → **031**
- Noise/hum/clipping diagnosis → every Diagnosis page; aggregated into the
  master fault-finding tree

Internally, every lab's front matter lists `competencies:` (e.g.
gain-staging, monitoring, print-strategy, fault-diagnosis) so coverage can
be audited; badges are not shown publicly unless useful.

### Safety

- **Feedback labs (020, 029)**: visible in-lab checklist before any sound —
  limiter location, emergency mute, send amount, return level, monitoring
  level, pre/post-fader status, maximum safe test procedure.
- **Field work (008)**: compact field safety & ethics checklist — consent
  and privacy when recording people; batteries and storage; weather and
  moisture; traffic and public-space awareness; cable strain and trip
  hazards; caution with electromagnetic pickups around unknown electrical
  installations. A checklist, not a legal lecture.

## Capstones — tiered, placed at integration points

Three tiers: **Gate** (closes one block; constraints-only brief), **Year**
(major work + reprise + year synthesis), **Final** (release + portfolio
defense). Every capstone applies the block's stolen principle and files the
seven-layer worksheet.

**Defense prompts** (every capstone, scaled to tier):

1. Draw the final audio path from memory.
2. Draw the control path separately.
3. Identify the most fragile part of the system.
4. Explain one failure and its fix.
5. Explain what was printed, what remains live, and what cannot be recovered.
6. Name the stolen principle and where it appears structurally.
7. Name one thing you removed and why.

| # | Tier | After | Brief |
|---|---|---|---|
| C1 | Gate | Block 1 | A second hypnotic piece from a constraint menu; bench certification renewed |
| C2 | **Year 1** | Blocks 2–3 | Captured sources organized by probabilistic/polymetric time — sources × time as one system; reprise of C1; year synthesis |
| C3 | Gate | Block 4 | Score for an Imagined Scene — brief-driven sound design, transformation-heavy |
| C4 | Gate | Block 5 | A dub-system piece, mixed and translation-tested across monitors/mono/phone |
| C5 | **Year 2** | Block 6 | Autonomous installation piece: runs 30+ minutes unattended; full system spec documented; reprise of a Year 1 piece; year synthesis |
| C6 | Gate | Block 7 | The Live Set — 30 minutes, performed and recorded |
| C7 | **Final** | Block 8 | The release: 3–4 piece EP, sequenced, mastered, published; portfolio defense through the seven layers |

## Curriculum — build labs

Legend — Type: T track · É étude · B bench · R replication. **S** scaffolding: S1 verify ·
S2 complete · S3 author from prompts · S4 author from constraints (applies
to specs and build instructions alike). **D** system depth: D1 played · D2
sequenced · D3 conditional · D4 rule-generated · D5 autonomous. **E**
engineering load: E1 single path · E2 multi-source + staging · E3
sends/returns/resampling · E4 feedback or hybrid routing · E5 full
performance routing. **M** material: M1 synth engine · M2 self-sampled · M3
recorded world · M4 reprocessed · M5 emergent. **F** form: F1 étude ≤3 min ·
F2 piece 6–8 min · F3 long form 15+ min · F4 performed · F5 multi-piece.
"—" = not applicable.

### Year 1

**Block 1 — The Bench** *(programme L1)* — runs as a **bench
certification**. By C1 the student can: draw the full studio path, identify
every gain stage, distinguish input/track/bus/master clipping, state what
they are monitoring (direct, software, pre/post-FX, printed), and record the
same source cleanly at three levels and defend one.

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 001 | Signal Path & Gain Staging — outputs: **Studio Signal Map v1**, gain ledger, three-level recording, clipping diagnosis table. Fault: clip at the wrong stage, locate it. | B | S1 | — | E2 | — | — |
| 002 | Clock, Latency & Monitoring — outputs: round-trip latency measurement (loopback), monitoring-mode comparison, "what I hear vs what is printed" table. Fault: doubled-monitoring comb filter, then fix it. | B | S1 | — | E2 | — | — |
| 003 | Repetition as Engine (hypnotic techno) — *existing Lab Note 001, retrofit; yields the worked example of both specs* | T | S1 | D3 | E2 | M1 | F2 |
| 004 | One Oscillator, One Filter (deep techno) | É | S1 | D2 | E1 | M1 | F1 |
| R1 | Rebuild the Loop — ≈8 bars of one L1 record, rebuilt from the Samples-session worksheet; output: replica + miss list | R | S1 | — | E2 | M1 | F1 |
| → C1 | | | | | | | |

**Block 2 — Sources** *(programme L2)* — engineering focus: a source is an
**entry condition**, not just content (impedance, noise, handling, level,
distance, environment). Required comparisons: the same source too quiet /
correct / too hot (006); the same object via air mic, contact mic, and
electromagnetic pickup (008).

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 005 | Sustained Tone & Slow Modulation (ambient drone) | T | S1 | D2 | E2 | M1 | F2 |
| 006 | Capturing the World — the sampling path (concrète) | É | S1 | D2 | E2 | M3 | F1 |
| 007 | The Sampler Eats Itself — resampling architectures: internal vs USB/DAW vs analog loop; deliverable: the same source through all three paths with notes on noise, latency, image, degradation (texture) | T | S2 | D2 | E3 | M4 | F2 |
| 008 | The Field Kit — recorder, contact mics, coil; gain in the field; field safety & ethics checklist | B | S2 | — | E2 | M3 | — |
| R2 | Rebuild the Gesture — one concrète passage from an L2 reference, re-made with own captures through the analyzed chain | R | S2 | — | E2 | M3 | F1 |

**Block 3 — Time** *(programme L3)* — engineering focus: musical time is
**system time under constraint**. Each lab requires a timing diagram, a
master-clock declaration, a "what happens after 64 bars?" prediction, one
recorded drift/flam/latency test, and a reset strategy (what returns the
system to state zero?).

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 009 | Micro-Variation & Groove (minimal) | T | S2 | D3 | E2 | M2 | F2 |
| 010 | Probability Grammar (broken techno) | T | S2 | D3 | E2 | M2 | F2 |
| 011 | Polymeter & Phase (phasing techno) | T | S2 | D3 | E2 | M1 | F2 |
| 012 | Euclidean Logic (polyrhythm) | T | S2 | D4 | E2 | M2 | F2 |
| R3 | Rebuild the Process — a phasing or pattern-logic passage from L3, reimplemented as sequencer rules | R | S2 | — | E2 | M2 | F1 |
| → C2 (Year 1 capstone) | | | | | | | |

### Year 2

**Block 4 — Transformation** *(programme L4)* — engineering focus: **level
into transformation**. Every lab asks: what level enters and leaves the
processor? linear or nonlinear? does processor order matter? is the
degradation reversible, cumulative, or generational — after one pass, three,
ten?

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 013 | Resonance as Melody (acid) | T | S2 | D2 | E2 | M1 | F2 |
| 014 | Saturation Staging — the canonical "gain is composition" lab: same chain at low/nominal/hot input, processor-order comparison, pre/post gain compensation, intended distortion vs accidental clipping (industrial) | T | S2 | D3 | E3 | M2 | F2 |
| 015 | Granular Reconstruction (ambient IDM) | T | S3 | D3 | E3 | M4 | F2 |
| 016 | Slice & Reassemble (breaks) | T | S3 | D3 | E3 | M4 | F2 |
| 017 | Generation Loss — the canonical "history is audible in the path" lab: degradation loops on real tape (tape music) | T | S3 | D4 | E3 | M4 | F3 |
| R4 | Rebuild the Decay — a degradation passage from L4, re-run as a generation-loss process on own material | R | S3 | — | E3 | M4 | F1 |
| → C3 | | | | | | | |

**Block 5 — Space & Mix** *(programme L5)* — engineering focus: effects are
**routing architectures**, not inserts. Required concepts: insert vs send,
pre vs post-fader, return level vs feedback amount, wet/dry ambiguity, phase
and correlation, mono collapse, room vs headphones, translation.

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 018 | Delay as Composition (dub techno) | T | S3 | D3 | E3 | M1 | F2 |
| 019 | Reverb as Instrument (deep ambient) | T | S3 | D3 | E3 | M4 | F2 |
| 020 | Feedback Paths — drawn as both a musical system and a safety-critical system; in-lab safety checklist before sound is made (dub) | T | S3 | D4 | E4 | M5 | F2 |
| 021 | Monitoring & Translation — mono, width, phase, room | B | S3 | — | E3 | — | — |
| 022 | Subtractive Arrangement — mixing by removal (minimal) | T | S3 | D3 | E3 | M2 | F2 |
| R5 | Rebuild the Dub — a send/return choreography passage from L5, re-performed on own mixer routing | R | S3 | — | E3 | M2 | F1 |
| → C4 | | | | | | | |

**Block 6 — Decision Systems** *(programme L6)* — engineering focus:
**audio path vs control path**, drawn as two separate diagrams. Every lab
declares: **state** (what does the system remember?), **seed /
repeatability** (can the result be reproduced?), and **boundary** (what may
the system decide; what is forbidden?). Self-running labs include a
10-minute unattended test.

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 023 | Rule-Based Sequencing — generative logic (ambient) | T | S3 | D4 | E2 | M1 | F2 |
| 024 | The Modulation Organism — self-playing patch | T | S3 | D5 | E3 | M1 | F3 |
| 025 | Chance Operations (aleatoric) | T | S3 | D4 | E3 | M2 | F2 |
| 026 | Tuning as System — microtonality (drone) | T | S3 | D3 | E2 | M1 | F3 |
| R6 | Rebuild the Rules — a generative system from L6, reimplemented and left to run; compare behavior, not output | R | S3 | — | E2 | M1 | F1 |
| → C5 (Year 2 capstone) | | | | | | | |

### Year 3

**Block 7 — Performance & Curation** *(programme L7)* — engineering focus:
**operational engineering**. Every performance lab requires a live
signal-flow diagram, a panic path (mute, limiter, bypass, stop, fallback
loop), a failure rehearsal, a recording strategy, and a post-performance
fault report. The question is not "did the set go well?" but "when the
system became unstable, did the performer understand it well enough to
recover musically?"

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 027 | Printed Movement — riding as performance | T | S4 | D3 | E3 | M2 | F2 |
| 028 | Live Resampling — sampler as instrument | T | S4 | D4 | E4 | M4 | F4 |
| 029 | Audio Feedback Systems — sound from nothing (Tudor) | T | S4 | D5 | E4 | M5 | F3 |
| 030 | The Long Form — curation at scale | T | S4 | D4 | E3 | M4 | F3 |
| 031 | The Performance Rig — a full technical rehearsal lab: live routing diagram, failure-rehearsal checklist, emergency procedures, set recording plan, cable/power/clock/gain checklist, post-rehearsal fault log | B | S4 | — | E5 | — | — |
| R7 | Rebuild the Set Moment — two minutes of an L7 live set, re-performed on own rig with matching panic paths | R | S4 | — | E4 | M2 | F4 |
| → C6 | | | | | | | |

**Block 8 — Synthesis & Voice** *(programme L8)* — "voice" means: the
student can **design, operate, troubleshoot, perform, record, explain, and
teach** a system that sounds like them.

| # | Lab (context) | Type | S | D | E | M | F |
|---|---|---|---|---|---|---|---|
| 032 | Constraint Design — author your own system + engineering spec | É | S4 | — | — | — | — |
| 033 | Hybrid Systems — a piece from your own spec, crossing two domains | T | S4 | D4 | E3 | — | F2 |
| 034 | The Signature Piece | T | S4 | — | — | — | F3 |
| 035 | Write the Lab Note — produce the teaching materials for 034 | É | S4 | — | — | — | — |
| R8 | Rebuild Your Own — one Year 1 piece reconstructed from its print map and documentation alone; the archive's reproducibility test | R | S4 | — | — | — | F1 |
| → C7 (Final capstone) | | | | | | | |

Prerequisites are linear with explicit extras: three required drills → 003
(see the listening curriculum); 020 → 029; 027 → 028, C6;
032 → 033; each replication lab requires its block's Samples session; year
capstones require their year's blocks and listening programmes complete.

## Gear roadmap (proposed)

The workshop optimizes for learning, not savings; gear is acquired when the
curriculum demands it.

**Gear principle.** Gear entries are **capability targets, not fixed
endorsements**. The lab requirement is the path opened, not the brand. A
different device is valid if it supports the same routing, control, failure
mode, and documentation requirement.

**Purchase test** — before buying, the student answers: What new path does
this open? Which lab requires that path? What can it do that the current rig
cannot? What failure modes does it introduce? How will it appear in the
Studio Signal Map? What is the core-rig fallback?

Owned core: Ableton Live 12 Suite, MicroFreak, Digitakt II, MOTU M4,
Launchpad Pro MK3, DT 990 Pro. Every gear-dependent lab documents a core-rig
fallback, so the sequence never hard-blocks on a pending purchase. Each
arrival triggers a Studio Signal Map re-version.

| When | Capability | Primary pick | Alternative | What it unlocks |
|---|---|---|---|---|
| Year 1 start | Trustworthy monitoring path + treated first reflections | Kali LP-6 v2 pair + panels | Genelec 8010A | Every mixing decision for three years; deep-dive in 021. Buy first. |
| Year 1 start | Playable keys + CV control path | Arturia KeyStep 37 | any CV-capable keyboard | Ergonomics from day one; CV feeds the Block 6 semi-modular |
| Block 2 | Portable capture path with owned gain decisions | Zoom H5studio | Sony PCM-A10 | Labs 006/008 — the recorded world as source |
| Block 2 | Solid-borne + electromagnetic capture paths | AKG C411 / piezo kit + LOM Elektrosluch / telephone coil | DIY piezo kit | Lab 008 — surfaces and EM fields as sources |
| Block 4 | Real magnetic tape record/playback path | Used Tascam Porta-class 4-track | any cassette recorder with record head | Lab 017 — generational degradation, not emulation |
| Block 5 | Physical aux send/return + feedback-capable summing | Mackie 802VLZ4-class mixer | any mixer with ≥1 aux send | Labs 018/020 — hardware routing, no-input feedback |
| Block 5 | Unstable hardware delay inside the send loop | Strymon El Capistan | EHX Deluxe Memory Man | A feedback voice with its own instability |
| Block 6 | Hardware generative/stochastic control path | Torso T-1 | OXI One | Labs 023/025 — sequencing rules as an instrument |
| Block 6 | Patchable unstable voice with CV | Make Noise Strega | Make Noise 0-Coast | Labs 024/029 — drone and feedback by design |
| Block 7 | Scene-based performance sampling + live looping | Elektron Octatrack MKII | Roland SP-404 MK2 | Labs 028/031, C6 — the performance backbone |
| Block 7 | Multi-parameter ride surface | Faderfox EC4 | Behringer X-Touch Compact | Lab 027 and the live set |

Ballpark total over three years: ≈ €4,000–5,000 at primary picks.

## Assessment

### The Lab Report (track labs and capstones — full bundle)

1. Rendered piece (24-bit WAV, −3 dBFS)
2. Routing diagram **drawn by the student** — before patching, corrected
   after; the diff is the lesson
3. Recording plan (what gets printed, when, at what stage)
4. Patch notes (the settings that mattered)
5. Session notes
6. Reflection answers, including the listening comparison — which
   reference contributed what to the hypothesis
7. One **removal decision** — what was cut from the finished piece and why
8. **Fault entry** — the injected (or encountered) fault: symptom, cause,
   fix, prevention rule
9. **Print map** — what now exists as audio, MIDI, automation, patch state,
   or device memory; what is reproducible and what is gone
10. **System diff** — the required sentence: *"I thought the system worked
    like X; after building it, I discovered it worked like Y."*

### Étude assessment (abbreviated bundle)

Exercise output · mini routing sketch · one prescribed-fault rule · one
constraint/removal note · one sentence of reflection. Études do not file the
full report unless explicitly marked as a portfolio étude.

### Replication lab assessment (study bundle)

The replica render (≈8 bars) · the worksheet analysis it was rebuilt from ·
A/B notes at matched loudness · the **miss list** — every audible difference,
each assigned to the layer where it lives (material, signal, control, time)
and what it reveals about the analysis · the corrected worksheet. Judged on
closeness to the record, never polish. Replica audio stays in the logbook
and outside the portfolio; the corrected analysis, not the audio, is the
artifact that lasts.

Bench labs file the routing/reference documentation itself. Listening
programmes file system analyses plus the block's stolen principle. Capstones
add the block synthesis, the seven-layer worksheet, and the defense prompts;
year capstones add the year synthesis; C7 requires the full portfolio.

### Minimum pass gate (track labs and capstones)

Before any quality judgment, the bundle must contain:

- audible output
- routing diagram
- one diagnosed fault entry
- print map
- system diff sentence

Missing any of these, the lab is incomplete regardless of how the piece
sounds — a musically strong piece cannot bypass the engineering spine.
Audio quality is assessed only after the engineering evidence exists.

### Self-assessment rubric (every track lab)

Four axes; the student grades themselves honestly against the north star —
the rubric's job is to make "did I actually get this?" answerable:

| Axis | Pass | Strong | Excellent |
|---|---|---|---|
| System clarity | Path is mostly correct | Path and control roles are clear | Can explain tradeoffs and alternate routings |
| Audio result | Piece meets constraints | Coherent and controlled | Identity, restraint, intentional instability |
| Diagnosis | Fault is described | Fault located and fixed | A reusable principle is extracted |
| Documentation | Required artifacts present | Artifacts show before/after change | Artifacts could teach the system to another person |

## Infrastructure (Phase 0 — before any new lab is authored)

1. **Adopt Eleventy.** Lab front matter carries
   `id, title, context, type, domain, alsoTouches, S, D, E, M, F,
   prerequisites, gear, listening, deliverables, hours, competencies`
   **plus the seven behavior fields**: `systemInvariant`, `audioPathFocus`,
   `controlPathFocus`, `faultType`, `failureMode`, `measurement`,
   `benchArtifact`.
   Example (lab 007): systemInvariant: "a sound can become source material
   for its own next generation"; audioPathFocus: internal vs USB vs analog
   resampling; controlPathFocus: automated vs manually performed;
   faultType: routing;
   failureMode: doubling, howl, input clipping, phase smear; measurement:
   compare first- and third-generation renders; benchArtifact: three-path
   resampling diagram with level notes.
   The public Curriculum Map, Gear Roadmap, Listening Index, prerequisite
   graph, printable checklist, and fault-finding tree are generated from
   front matter. Page model varies by `type` via per-type templates.
2. **Build the shared shell and components** from the existing CSS: nav,
   metadata header, **operating-loop checklist**, signal-flow diagram, param
   table, diagnosis table, deliverables checklist, listening worksheet,
   safety checklist, engineering-spec table, rubric table, seven-layer
   worksheet (capstones).
3. **Write the Studio Reference as a living operating manual** (extracted
   from the existing studio.html), versioned alongside the Studio Signal
   Map; labs 001–002 are its teaching companions.
4. **Migrate and retrofit the existing Lab Note 001** into the track-lab
   page model as lab **003 — Repetition as Engine** — gaining both specs
   (filled, as the worked example), a fault ritual, and the new report
   items. This validates the template on real content.
5. **Author labs 001–002 (bench certification), programme L1, and étude
   004** to complete Block 1.

**Phase 0 exit gate** — do not author Block 2 until the template has
survived one real pass. Required evidence:

- Lab 003 migrated into the track-lab page model
- Lab 001 completed end-to-end, producing Studio Signal Map v1
- Lab 002 completed end-to-end, producing the loopback and monitoring tables
- One full track-lab report bundle and one abbreviated étude bundle filed
- One listening worksheet produced from a comparative assignment
- The template revised once based on actual friction

Then author block by block, with a template retrospective at each capstone.

A static scaffold of the site already exists at `workshop/` and is replaced
by the Eleventy build when Phase 0 lands. Its structure — which the
Eleventy build should preserve as its URL scheme — is one folder per block:

```
workshop/
  index.html            overview
  references.html
  styles.css            the single stylesheet
  block-1/ … block-8/   one folder per block
    index.html          the block hub (labs table, programme, capstone)
    lab-*.html          labs, études, bench labs (block 1: 001–004, r1)
    listening-l*.html   the block's listening programme
    capstone-c*.html    the block's capstone
    rep-*.html          replication lessons, one per listening reference
```

Block 1 is authored in this shape (33 pages); blocks 2–8 are hub pages
awaiting content.

## Authoring conventions

- Preserve the original voice: principle-driven, "why" before "how",
  decision checkpoints, troubleshooting tables, restraint philosophy.
- **S1 pages are recipe pages.** The lower the S value, the more explicit
  the actions: S1 steps name the exact control, cable, and menu path, state
  the expected result (which meter moves, what number is normal), carry a
  symptom → cause → fix table where failure is plausible, and end with the
  logbook line to file. Every lab opens with a "Before you start" checklist
  (cables, power state, set name, level discipline, expected time). The
  page must answer "what do I click next" at every moment; explicitness
  fades with S, never within a page.
- **Diagram-heavy by default.** Routing appears as a drawn diagram (signal
  flow with cable types, or an inline SVG wiring drawing), not only prose;
  configurations as tables with a "set it to" column; rhythm as pattern
  grids; form as timelines or an arc diagram.
- **Pyramid structure on every lab page.** The point first, in one sentence
  a beginner fully understands ("The point" callout); then the two or three
  ideas that organize the lab ("How this lab works" cards, each naming its
  steps); then the details. No page opens with a conclusion the reader
  can't parse yet.
- **Every concept defined before it is used.** Each lab carries a "New
  concepts — in plain words" table: each term in one or two sentences with
  an everyday analogy (gain stage = a volume knob in the chain; converter
  clipping vs float overs = scissors vs calculator). The new-concept budget
  (3–6) is this table. Prose assumes no prior audio vocabulary — any term
  not in the table is said in plain words.
- **Listening references teach how to listen.** Every build lab carries
  **at least 10 references** (no upper limit), each teaching a distinct
  facet of the lab's lens,
  and every reference carries: one plain sentence on why it is here ·
  "Listen for" (2–3 concrete things, named before listening) · "After —
  verify" (questions with hinted answers and a relisten pointer for
  anything missed). A reference without a pre-listen
  focus and a post-listen check is a name-drop, not an assignment. Each
  reference also links its replication lesson — the step-by-step rig
  exercise that makes the verify physical.
- **Listening references render as one accordion box per assignment** (the
  `.listen-acc` component: native `details`/`summary`, no JavaScript): the
  summary row shows number, title, and a system tag; the body opens to
  why · Listen for · After — verify · YouTube/Spotify links · the
  replication-lesson link. All references for an assignment live in a
  single box.
- **Every question gets a model answer.** Any question a page asks the
  student (reference-pass, verify) carries a collapsible answer directly
  beneath it (the `details.reveal` component) — 2–4 sentences of confident
  listening guidance, ending with what to relisten for.
- **Music links are search URLs**, never hand-typed video or track IDs
  (which rot): YouTube `results?search_query=…`, Spotify app links
  `spotify:search:…`. Direct video links are reserved for
  curator-verified picks (e.g. the video sessions).
- **The operating loop is visible on every lab page** as a checklist, never
  buried in prose.
- **Section budgets are hard limits** — if a lab exceeds them, cut content,
  not the ritual.
- New-concept budget: 3–5 per lab, listed in the metadata header.
- **The loop deepens; the paperwork must not** — specs stay one table,
  reports stay one bundle, études stay light.
- Per-block accent colors on the shared stylesheet (Block 1 keeps `#7dd3c0`).
- What crosses into *original filed work* is systems, never material; video
  sessions are watched for hands and decisions, not aesthetics; each
  programme includes at least one reference from outside the obvious canon.
- Replication pages (lessons and labs) replicate sections of real records
  closely — there is no material restriction in study. Labs rebuild from
  the student's own worksheet, never from tutorials or breakdowns. Replica
  sessions stay quarantined from portfolio work.
- The full matrix lives here and in front matter only; the public site shows
  the simplified curriculum map.
