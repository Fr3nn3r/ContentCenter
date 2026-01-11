Yeah — this is **solid** but it still reads “well-executed template” instead of “signature Fred”. The good news: you’re *one* design pass away. Right now you’ve got the right ingredients, but they’re not “composed”.

Here’s what’s making it only *ok*, and exactly how to level it up.

---

## What’s holding it back

### 1) Hero feels like “text + screenshot”, not a designed moment

The screenshot is just… there. No depth, no framing, no relationship to the headline.

**Fix**

* Put the visual inside a **device/window frame** (or at least a “glass card” container) with:

  * subtle border
  * shadow
  * slight rotation (1–2°)
  * background gradient behind it
* Add **one** “interactive” cue (even if tiny): parallax tilt on hover.

### 2) Color system looks a bit arbitrary (pink as main accent = playful)

Pink can work, but in your domain it risks “consumer app vibes”.

**Fix**

* Switch to your “enterprise anchor” accent: **Blue (#3B5BDB)** for primary actions/links.
* Keep pink **only** as a secondary highlight (badges, tiny pills, small micro accents).

### 3) The bullets + CTAs are correct… but visually flat

Everything has the same “weight”. Premium sites create a clear hierarchy.

**Fix**

* Make bullets more scannable:

  * turn the red dash into a **check icon** (subtle)
  * reduce bullet text size slightly
  * keep bold only on the first 2–3 words
* Make the primary CTA unmistakable:

  * Primary: solid blue
  * Secondary: ghost/outline
  * Add a tiny line under CTAs: “Prefer async? Email me.”

### 4) The “Audit-first” badge is floating awkwardly

It’s centered on the screenshot like a sticker. Feels “marketing”.

**Fix**

* Attach it to a corner like a UI label (top-left of the visual container)
* Or integrate it into the visual card header (e.g. “Document Review UI — Audit-first mode”)

### 5) Featured Work cards are better, but still “grid of cards”

They need either:

* stronger art direction, or
* a more narrative layout.

**Fix**

* Reduce to **2 featured cards + 1 secondary** (or keep 3 but give them different weight)
* Add one line per card: **Outcome** (not description)

  * “Error drivers + benchmark drilldown”
  * “Prompt versioning + governance pack”
  * “Evidence-first context packs”
* Make the thumbnails consistent:

  * same crop ratio
  * same rounded radius
  * same background treatment

---

## The fastest “premium” upgrades (do these in order)

### Upgrade 1 — Give the hero a *signature background*

Right now the page background is a flat beige. Add depth:

* Subtle top radial gradient behind hero
* A tiny noise texture overlay (very low opacity)
* Very faint grid or “paper” pattern (optional)

This alone makes it feel designed.

### Upgrade 2 — Add “Proof strip” with *visual tokens*

Text-only proof reads like copy.

Add 3–4 small tokens under CTAs:

* “Zurich-based”
* “Claims QA + Document intelligence”
* “Evidence & provenance”
* “Live demos”

Each with a tiny icon. Small but high-trust.

### Upgrade 3 — Make the hero visual do one clever thing

Even without the full layered depth map, add **tilt + shadow response**:

* on mouse move: very subtle rotate + lift
* on mobile: static

This gives you “stand out” without going full circus.

---

## A better standout interaction (still Astro-friendly)

Your current hero image is a single screenshot. To make it “wow”:

### “3-mode evidence hero” (clickable pills)

Inside the visual card, add 3 pills:

* **Run**
* **Benchmark**
* **Review**

Clicking swaps the screenshot (crossfade) and updates a tiny caption:

* “Run → pipeline health & coverage”
* “Benchmark → error drivers & accuracy”
* “Review → human-in-the-loop evidence”

This is *very* on-brand: you’re not doing gimmicks, you’re showing an operating model.

Implementation is simple:

* 3 images stacked absolutely
* toggle `opacity` + `pointer-events`
* optional parallax tilt applies to the container, not the images

---

## Micro-copy tweaks (small, high impact)

Your headline is strong. Keep it. But tighten the subheadline slightly:

Current: “I build document intelligence systems that turn PDFs into structured claim data— with provenance, quality gates…”

Try:

> I build document intelligence that turns claim PDFs into structured outputs — with provenance, quality gates, and a fast review console for exceptions.

Also: change “View case studies” → **See the work** (more confident, less corporate).

---

## Brief update for your senior FE devs (what to change next)

Give them this punch list:

1. **Hero art direction**

* Wrap the screenshot in a “window frame” component (border, header dots optional)
* Add background gradient behind hero
* Move badge into frame header or corner label

2. **Accent color system**

* Primary buttons/links = blue (#3B5BDB)
* Pink restricted to badges/micro accents

3. **Hero interaction**

* Add subtle tilt/lift on hover (desktop only)
* Optional: 3-mode screenshot toggle (Run/Benchmark/Review)

4. **Featured work**

* Standardize thumbnail crop + add Outcome line
* Consider visual hierarchy (one larger “primary” card)

5. **Polish**

* Add noise overlay + softer shadows
* Increase typography contrast: headline slightly tighter tracking, body slightly darker

---

If you want, paste your current Astro/Tailwind hero component here (or just the JSX/MDX snippet), and I’ll rewrite it into a **drop-in v2**: improved structure + the 3-mode interactive hero + the exact Tailwind classes.
