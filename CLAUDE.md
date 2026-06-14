# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static HTML/CSS course ("Lab Note B1-001") teaching how to produce an original hypnotic techno track with Ableton Live 12 Suite, Arturia MicroFreak, and Elektron Digitakt II. There is no build system, no JavaScript, no dependencies — these are hand-authored HTML files styled by a single stylesheet. "Running" it means opening the HTML in a browser; the entry point is `guide-b1-001/index.html`.

## Structure

- `guide-b1-001/` — the original, canonical multi-page course (formerly `guide/`; renamed to fit the per-block `guide-bN-NNN` deep-dive naming scheme). It is Block 1's first deep-dive ("Lab Note B1-001 — Repetition as Engine") and also **hosts the shared `styles.css` that every other `guide-*` deep-dive links to** (`../guide-b1-001/styles.css`) — do not move it. Seven content pages navigated in sequence: `index.html` (01 Overview) → `decisions.html` → `studio.html` → `palette.html` → `arrangement.html` → `build.html` → `reflection.html`.
- `guide-bN-NNN/` — per-block deep-dive "Lab Notes" linked from the matching `workshop/block-N/` labs. Most follow a 7-page systematic template (`index` → `listen` → `decisions` → `setup` → `palette` → `build` → `reflection`). All share `guide-b1-001/styles.css`.
- `hypnotic-techno-guide.html` (repo root) — the older single-file version of the same course, kept for reference. The README points readers to `guide-b1-001/index.html`, so treat `guide-b1-001/` as the source of truth and update the root file only if explicitly asked.

## How the pages are wired together

Every page in a `guide-*` folder is a self-contained HTML document that repeats the same scaffolding. When adding or editing a page, keep these in sync by hand (there is no templating):

- **Navigation**: the `<nav class="nav">` block (lines ~16–25 in each file) lists all seven pages with `<span class="nav-num">NN</span>` numbers. The current page's link gets `class="active"`. Adding/reordering/renaming a page means editing this identical block in *all* pages plus the numbering.
- **Hamburger menu**: a CSS-only toggle using `#nav-toggle` checkbox + `.hamburger` label + `.nav-backdrop`. Copy this three-element block verbatim at the top of `<body>`.
- **Page footer nav**: `<div class="page-nav">` at the bottom links to previous/next page with `← NN / Title` and `NN / Title →`. Keep the sequence numbers and titles consistent with the nav block.

## Styling conventions

All styling lives in `guide-b1-001/styles.css` (the shared stylesheet every `guide-*` deep-dive links to). There are no inline `<style>` blocks; one-off layout tweaks use inline `style="..."` sparingly.

- **Design tokens** are CSS custom properties in `:root` (colors, `--accent: #7dd3c0`, `--mono`/`--sans` font stacks). Use these variables rather than hardcoding colors — e.g. `color: var(--text-muted)`.
- **Reuse existing components** instead of inventing markup. The stylesheet is organized into commented sections (`/* === CARDS === */`, `=== CALLOUT ===`, `=== STEP ===`, `=== SIGNAL FLOW ===`, `=== PARAM TABLE ===`, `=== CHECKLIST ===`, etc.). Common building blocks: `.cards` (with `.two`/`.three` for column count) containing `.card` > `.card-icon` + `.card-title` + `.card-points`; `.callout` with `.callout-label`; `.step` sequences; `.signal-flow` of `.signal-node`/`.signal-arrow`; `.param-table`. Match the existing block before creating a new class.
- **Icons** are inline `<svg viewBox="0 0 44 44">` using `stroke`/`currentColor`, not an icon font or external assets.
- Dark theme is the only theme; `--bg: #0d1117` (GitHub-dark palette).

## Editing notes

- Content is the substance here — the prose teaches music production. Preserve the instructional tone, the "do less but make each element evolve" philosophy, and the originality constraint (the track must be fully original, not a copy of any reference track).
- No tests, linters, or formatters are configured. Verify changes by opening the affected page in a browser and checking the nav, hamburger menu, and prev/next links still work across the set.
