## 1) ClaimEval — Claims QA Copilot for Motor & Home

**One-liner**
ClaimEval is a QA copilot that helps claims leaders review more files with higher consistency by combining structured checklists, evidence capture, and “why” explanations.

**TL;DR (Problem → Approach → Outcome)**

* **Problem:** Claims QA is slow, inconsistent, and hard to audit at scale—especially across lines like Motor and Home.
* **Approach:** A structured QA workflow: ingest a claim file → extract key facts → run rule/checklist validations → produce a QA report with evidence and gaps.
* **Outcome:** Faster QA cycles, clearer audit trail, and a repeatable process that works across different claim types. *(Initial outcomes: [insert metrics or qualitative results])*

### Context

* **Who it’s for:** Claims QA leaders, QA auditors, team managers, and adjusters needing feedback loops
* **Where it fits:** Post-settlement review, sampling audits, training feedback, and process compliance checks
* **My role:** Product + architecture + workflow design + prototype implementation
* **Constraints:** No access to full SOP library at start; must work with partial guidance and be adaptable across lines

### The problem

QA teams often face a nasty combo:

* High volume and limited reviewer capacity
* Inconsistent judgement across reviewers
* Weak evidence capture (“why did we pass/fail this file?”)
* Hard to train new reviewers without a repeatable rubric

When QA becomes a bottleneck, you either sample too little (risk) or drown your best people in manual review (burnout).

### Key decisions

1. **Structure beats vibes:** Every QA output is grounded in a checklist/rubric (per LOB, configurable) rather than free-form “LLM review.”
2. **Evidence-first outputs:** Every “issue” links to the supporting document excerpt or claim field (so QA is defensible).
3. **Gap detection as a first-class feature:** Missing docs / inconsistent facts / unanswered questions are surfaced explicitly.
4. **LOB adaptability:** Motor and Home share workflow primitives (coverage, liability, documentation, settlement rationale) but differ in rubrics—so rubrics must be modular.

### Solution overview

ClaimEval produces a **QA Report** per file that includes:

* Claim summary (key facts, dates, parties, loss description)
* Checks performed (by category: documentation, coverage, liability, settlement, compliance)
* Findings (pass/fail/needs review)
* Evidence links (citations/snippets)
* Recommendations (what to correct, what to request, what to escalate)

### What I built

* **QA workflow skeleton:** ingest → extract → validate → report
* **Rubric-driven evaluation:** configurable checklists per line of business
* **Report format:** consistent, scannable, audit-friendly
* **Operator UX concept:** reviewers can approve, add notes, override with rationale

### Artifacts (add links/screens)

* **Screenshots:**

  * [Home / Dashboard]
  * [Claim file view]
  * [QA report view]
  * [Issues & evidence panel]
* **Demo:** [link]
* **Sample QA report (PDF/HTML):** [link]
* **Rubric example (Motor/Home):** [link]

### Outcome

* **Efficiency:** [e.g., “reduced review time from X to Y”]
* **Consistency:** [e.g., “standardized checks across reviewers”]
* **Auditability:** [e.g., “every decision has evidence + rationale”]
* **Operational learnings:** [what surprised you]

### What I learned / what I’d do next

* Build a small **rubric editor** so QA leaders can iterate without engineering.
* Add **calibration mode**: compare reviewer decisions vs copilot suggestions to tune rubrics.
* Add **sampling intelligence**: prioritize files that look risky (inconsistencies, missing docs, edge cases).
* Add **trend analytics**: recurring issues by adjuster/team/claim type.

---

## 2) Prompt Management Playbook — Markdown-First, Versioned, Auditable Prompts

**One-liner**
A prompt management system that treats prompts like real software: versioned, testable, and reviewable—so upgrades don’t silently break production.

**TL;DR (Problem → Approach → Outcome)**

* **Problem:** Prompts and model settings scattered across codebases make audits painful and changes brittle.
* **Approach:** Put prompt text + config + schema expectations into a single versioned template file, loaded by a strict runtime.
* **Outcome:** Faster iteration, fewer regressions, and a clean review workflow where changes are obvious.

### Context

* **Who it’s for:** teams building LLM features that must be maintainable (and ideally compliant)
* **My role:** designed the approach + templates + runtime contract
* **Constraints:** must support multiple workflows, evolving schemas, and multiple models without rewriting half the app

### The problem

Classic LLM implementations fail in predictable ways:

* Prompt text lives in one file, model settings in another, schema expectations somewhere else
* Engineers “just tweak the temperature” and the output format breaks
* Nobody knows which prompt version produced which output
* Debugging becomes archaeology: “which string concatenation did this come from?”

### Key decisions

1. **Single source of truth per prompt:** configuration + instructions + expected output live together.
2. **Version control by default:** prompt changes are code changes (reviewable diffs).
3. **Strict interfaces:** prompts produce a known structure, and failures are detected early.
4. **Separation of roles:** writers can refine text; engineers can enforce contracts.

### Solution overview

Each prompt is a **template artifact** with:

* metadata (purpose, version, model constraints)
* input requirements (what context must be provided)
* output requirements (schema / structure)
* the actual prompt text (human-readable, editable)

The runtime:

* loads the template
* injects context safely
* validates output shape
* logs prompt version + config used

### What I built

* **Prompt template format:** human-readable + structured metadata
* **Loader contract:** consistent API to render prompts with context
* **Validation hooks:** detect malformed outputs early
* **Change workflow:** prompt updates via PRs with reviewable diffs

### Artifacts (add links/screens)

* Prompt template example: [link]
* “Prompt anatomy” diagram: [link]
* Before/after diff screenshot (why this is reviewable): [link]
* Example of a failing output caught by validation: [link]

### Outcome

* Reduced “mystery breakages” when prompts change
* Faster onboarding (“here is the prompt file; everything is inside”)
* Easier audits (“which prompt version generated this?”)
* Clearer collaboration between product, domain experts, and engineering

### What I learned / what I’d do next

* Add lightweight **prompt tests** (golden inputs → expected structure).
* Add **eval harness** for regression detection across model upgrades.
* Add a small **prompt catalog UI** (read-only) for stakeholders.

---

## 3) Agentic Context Builder — Turning Messy Inputs into Reliable LLM Work Units

**One-liner**
A pipeline that converts messy, real-world inputs (docs, emails, notes, tables) into structured, versioned context blocks so LLM workflows stay reliable and debuggable.

**TL;DR (Problem → Approach → Outcome)**

* **Problem:** LLM workflows fail when context is inconsistent, too long, or assembled ad-hoc at runtime.
* **Approach:** Build a “context compiler” that normalizes inputs into modular context blocks with strict rules and traceability.
* **Outcome:** Higher reliability, easier debugging, and reusable context across workflows.

### Context

* **Who it’s for:** anyone building multi-step agent workflows that need repeatability (claims, ops, research, content pipelines)
* **My role:** designed the architecture and patterns; built working workflows around it
* **Constraints:** context sources vary wildly; output must be consistent across runs

### The problem

Most agent systems die by a thousand papercuts:

* inputs come from multiple places and formats
* context gets concatenated differently each run
* token limits cause truncation in the worst possible place
* “why did the model answer that?” becomes unanswerable

When you can’t trust the context, you can’t trust the output.

### Key decisions

1. **Normalize first:** turn raw inputs into a clean intermediate representation (IR) before prompting.
2. **Modular context blocks:** separate “facts”, “policy/rules”, “history”, “constraints”, “open questions”.
3. **Traceability:** every block has a source and a purpose (“why is this included?”).
4. **Budgeting:** context is assembled with explicit priorities (what gets dropped first, and why).

### Solution overview

The Agentic Context Builder produces:

* **Context Pack**: a structured bundle of blocks, each with

  * name / purpose
  * content
  * source references
  * priority
  * size budget
* A deterministic assembly step that produces the final context for each LLM task.

This makes agent workflows:

* composable (reuse the same context pack across steps)
* debuggable (inspect blocks)
* safer (less accidental leakage / less irrelevant noise)

### What I built

* A repeatable pattern to:

  * ingest messy inputs
  * extract and normalize
  * build a context pack
  * assemble task-specific prompts using the pack
* Clear conventions for block naming, priority, and budgets
* A debugging view concept (“show me the exact context sent to the model”)

### Artifacts (add links/screens)

* Context Pack example (redacted): [link]
* Diagram: raw inputs → normalized IR → context pack → tasks: [link]
* Debug view screenshot/mock: [link]
* Example workflow that reuses the same pack across steps: [link]

### Outcome

* Fewer “random” failures caused by context issues
* Faster iteration (swap blocks, not entire prompts)
* Better explainability (“this answer came from these blocks”)
* Easier expansion to new workflows (same pattern, new blocks)

### What I learned / what I’d do next

* Add automated **context quality checks** (missing key fields, contradictions, stale info).
* Add **context diffing** between runs to spot why behavior changed.
* Add metrics: which blocks correlate with success/failure.

---