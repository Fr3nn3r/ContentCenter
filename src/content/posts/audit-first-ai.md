---
title: "Audit-first AI: what it means in practice"
datePublished: 2025-01-10
summary: "Most AI demos ignore the question regulators and QA teams actually ask: 'How do I know this is right?' Here's how to build systems that answer it."
tags: ["AI", "Governance", "Insurance"]
heroImage: "/img/benchmark.png"
draft: false
---

## The demo trap

Every AI vendor can show you a demo where the model extracts a field correctly. What they don't show is what happens when it's wrong—or when an auditor asks for proof.

In regulated industries like insurance, "it usually works" isn't good enough. You need to answer:

- **Where did this value come from?** (Source page, paragraph, exact text)
- **How confident is the system?** (And what triggers human review?)
- **What changed between runs?** (Version control for outputs)
- **Who approved this?** (Audit trail for exceptions)

## What audit-first means

Audit-first is a design philosophy, not a feature checkbox. It means:

1. **Provenance is mandatory.** Every extracted field links back to its source. No "the model said so" answers.

2. **Uncertainty is surfaced.** Low-confidence extractions are flagged for human review—not silently passed through.

3. **Outputs are versioned.** When you re-run extraction, you can diff the results. No mystery changes.

4. **Exceptions are logged.** Human overrides have rationale attached. The audit trail is complete.

## The practical difference

Consider a claims document workflow. A non-audit-first system might extract:

```
claim_amount: 12,500
```

An audit-first system extracts:

```
claim_amount: 12,500
  source: "invoice_2024_03.pdf", page 2, paragraph 4
  confidence: 0.94
  extracted_text: "Total amount due: CHF 12,500.00"
  review_status: auto_approved (threshold: 0.90)
```

The second version can answer an auditor's question. The first cannot.

## Building for audit

If you're building AI for regulated workflows, ask these questions early:

1. Can I trace every output to a source document?
2. Can I explain why a value was flagged (or not flagged) for review?
3. Can I reproduce the exact extraction from a month ago?
4. Can I show who approved an exception and why?

If the answer to any of these is "no," you're building a demo, not a production system.

## Next steps

This is why I build systems with evidence trails built in from day one. If you're working on document intelligence for insurance or other regulated industries, [let's talk](/contact).
