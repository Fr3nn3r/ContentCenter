Yep — that makes perfect sense now. You already have **exactly the right assets** to fix the “premium / proof / momentum” gaps on **fredbrunner.com** without inventing anything new.

Here’s how to use what you shared (3 screenshots + 2 infographics + 2 demos + GitHub) to implement my earlier feedback — plus the **rewrite pack**, a **standout Astro-friendly interaction**, and a **developer brief** focused specifically on updating *fredbrunner.com*.

---

## 1) How to use your resources to upgrade fredbrunner.com (mapping)

### A) Replace “text-only credibility” with “proof you can see”

Use:

* **Screenshot: Document Review** → proves “human-in-the-loop + evidence-first UI”
* **Screenshot: Benchmark** → proves “metrics + error drivers + auditability”
* **Screenshot: Extraction Run Overview** → proves “pipeline thinking + operationalization”

Where:

* Home page: **Hero visual** + **Featured work** thumbnails
* Each case study: an **Artifacts** section (3 images + short captions)

---

### B) Turn the 2 infographics into “signature assets”

Use:

* **ContextBuilder (Outcome-Oriented) infographic** → becomes your “signature diagram”
* **ClaimEval QA scaling infographic** → becomes your “business case one-pager”

Where:

* Home page: “How I think” section (one image + 3 bullets)
* Case studies: top-of-page “1-min executive view” (embed the infographic)
* About page: “Operating principles” anchor visual

---

### C) Replace “coming soon” with real momentum

Use:

* The infographics + screenshots = instant source material for 3 posts (no new research required)

Where:

* Blog/Writing page: publish 3 short evergreen posts (titles below)

---

### D) Turn the demos into “live proof”

Use:

* `claimeval.vercel.app/claims` and `mira-travel-demo.vercel.app/simulator`

Where:

* Each case study: “Live demo” buttons (primary CTA)
* Home page: “See it running” strip under Featured Work

*(Bonus: don’t iframe these on the home page—just link them. iFrames make everything feel like a 2008 portal.)*

---

### E) GitHub = “builder legitimacy”

Use:

* GitHub profile link as a subtle “build credibility” cue, not the main pitch.

Where:

* Home page: in a “Proof” row (GitHub + location + focus)
* About page: “Selected repos / principles / toolchain” section

---

## 2) Rewrite pack (drop-in copy)

### Home page (hero)

**Headline options (pick one):**

1. **Audit-first AI for claims document workflows.**
2. **Evidence-first extraction you can defend in QA.**
3. **From messy claim packs to traceable outputs.**

**Subheadline:**
I build document intelligence systems that turn PDFs into structured claim data — with provenance, quality gates, and a human review console for exceptions.

**3 bullets (tight, outcome-y):**

* **Cut review time** by routing only the risky/uncertain cases to humans
* **Make outputs defensible** with evidence links back to source pages
* **Ship pragmatically**: prototype → measurable runs → production path

**CTAs:**

* Primary: **Book a call**
* Secondary: **View case studies**
* Tertiary (small link): **See live demos**

**Proof strip (one line, not a paragraph):**
Zurich-based • Insurance delivery + AI systems • Focus: traceability, QA, governance

---

### Featured work section (intro + cards)

**Section title:** Featured work
**Intro line:** Systems I ship when reliability matters more than demos.

For each project card add 2 buttons:

* **Case study**
* **Live demo** (if available)

And *always* show a thumbnail (use your screenshots/infographics).

---

### “Signature visual” section (new)

**Title:** How it works (in one view)
Embed the **ContextBuilder outcome infographic** with a short lead-in:

**Copy:**
Most AI demos stop at “it extracted something.”
I optimize for what matters in claims ops: **traceable fields, quality gates, and a review console** that makes exceptions fast.

Buttons:

* **Read the ContextBuilder case study**
* **See the review UI**

---

### Writing section (replace “coming soon”)

**Title:** Writing
**Copy:**
Short notes on building audit-friendly AI in regulated workflows — prompts, provenance, evaluation, and pragmatic delivery.

**Publish these 3 posts (fast):**

1. **Audit-first AI: what it means in practice**
2. **Evidence-first extraction: the missing layer in LLM apps**
3. **Benchmarks that drive action: error drivers, not vibes**

---

### Contact page (make inbound higher quality)

Add “What to include” checklist:

To make this productive, include:

* Line of business + country
* Document types + typical pack size
* What “success” means (speed, accuracy, auditability, cost)
* Your current system constraints (Guidewire, repository, exports)

---

### Case study template (upgrade with your assets)

At the top of each case study add:

**Hero block**

* One-liner outcome
* 3 “what you get” bullets
* Buttons: **Live demo**, **Download one-pager** (optional), **Book a call**

**Artifacts block (mandatory)**

* Screenshot(s) + infographic(s) with captions like:

  * *“Benchmark view: top error drivers + drill-down to exact evidence.”*
  * *“Document review: confirm/set/skip with provenance.”*
  * *“Run overview: ingestion → classification → extraction → quality gates.”*

---

## 3) Standout interaction concept that fits Astro (and uses your assets)

### Concept: **“Evidence Depth Hero”** (cursor-reactive, subtle, premium)

A hero visual built from **3 layered images** (your screenshots) that moves with cursor to create depth:

* Back layer: **Benchmark** screenshot (blurred slightly)
* Middle layer: **Extraction run overview**
* Front layer: **Document Review** (sharpest)
* Overlay: a small label like **“Traceability → QA → Operational metrics”**

On hover (or click), it snaps to 3 “modes”:

1. **Run** (Extraction)
2. **Benchmark**
3. **Review**

This becomes your “signature” without screaming. It says: *this isn’t a landing page; it’s a cockpit.*

### Astro-friendly implementation (no React required)

* Use an `.astro` component that renders a `div` with three absolutely-positioned layers.
* Add a tiny vanilla JS module that:

  * listens to `pointermove`
  * sets CSS variables (`--mx`, `--my`)
  * layers use `transform: translate3d(calc(var(--mx) * …), …)`
* Respect `prefers-reduced-motion` (disable motion automatically)
* Use `requestAnimationFrame` throttling to keep it smooth (and not turn laptops into space heaters)

**Skeleton code (dev-ready):**

```html
<!-- HeroDepth.astro -->
<section class="hero">
  <div class="depth" data-depth-hero>
    <img class="layer layer-back" src="/img/benchmark.webp" alt="Benchmark UI" />
    <img class="layer layer-mid" src="/img/extraction.webp" alt="Run overview UI" />
    <img class="layer layer-front" src="/img/review.webp" alt="Document review UI" />

    <div class="label">
      <span class="pill">Audit-first</span>
      <h2>Evidence → QA → Metrics</h2>
      <p>Traceable document intelligence for claims workflows.</p>
    </div>
  </div>
</section>

<script>
  const el = document.querySelector("[data-depth-hero]");
  if (!el) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  let raf = 0;
  el.addEventListener("pointermove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
      raf = 0;
    });
  });
</script>

<style>
  .depth { position: relative; --mx: 0; --my: 0; }
  .layer { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border-radius: 16px; }
  .layer-back  { transform: translate3d(calc(var(--mx) * 12px), calc(var(--my) * 12px), 0) scale(1.02); filter: blur(2px); opacity:.55; }
  .layer-mid   { transform: translate3d(calc(var(--mx) * 20px), calc(var(--my) * 20px), 0) scale(1.02); opacity:.75; }
  .layer-front { transform: translate3d(calc(var(--mx) * 30px), calc(var(--my) * 30px), 0) scale(1.02); box-shadow: 0 20px 60px rgba(0,0,0,.18); }
</style>
```

### Asset prep (quick)

look into: ressources

---

## 4) Brief for senior front-end devs (specific to updating fredbrunner.com)

### Goal

Make fredbrunner.com feel **premium + memorable** by adding:

1. A signature interactive hero (above)
2. Proof-driven case studies (artifacts + live demos)
3. “Momentum” via 3 short posts
4. Stronger contact/inbound quality

### Assumed stack

Astro + Tailwind + MDX content collections (your current approach)

### Work items (implementation)

1. **Add “HeroDepth” component**

   * Drop-in on home page
   * Uses 3 UI screenshots as layers
   * Reduced-motion compliant

2. **Create a consistent “CaseStudyLayout”**

   * Top: Outcome summary + CTAs
   * Middle: Problem / Approach / Results (existing)
   * Add **Artifacts** section (required)

     * Include: 3 screenshots + 1 infographic (ContextBuilder)
   * Add **Live demo** links where available

3. **Update Featured Work cards**

   * Must include thumbnail images (no more text-only)
   * Each has: “Case study” + “Live demo” button

4. **Writing**

   * Publish 3 posts (use infographics as anchors)
   * Add “Writing” preview on home page showing latest 3

5. **Contact improvements**

   * Add “What to include” checklist block

### Content schema suggestion (Astro content collections)

Case study frontmatter:

```yaml
title:
slug:
one_liner:
outcomes:
  - ...
ctas:
  - label: Live demo
    href: ...
  - label: Case study
    href: ...
artifacts:
  - src: /img/...
    caption: ...
```

### Acceptance criteria

* Home page has a distinctive hero interaction (subtle, fast, not gimmicky)
* Every featured project has:

  * thumbnail
  * at least 2 artifacts on the page
  * clear CTA
* Writing section is no longer “coming soon”
* Deep links are stable; images are optimized; Lighthouse stays clean
