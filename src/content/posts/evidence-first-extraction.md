---
title: "Evidence-first extraction: the missing layer in LLM apps"
datePublished: 2025-01-08
summary: "LLMs can extract data from documents. But without evidence linking, you've just built a fancy black box. Here's the layer most teams skip."
tags: ["AI", "LLM", "Architecture"]
heroImage: "/img/review.png"
draft: false
---

## The extraction illusion

Modern LLMs are remarkably good at extracting structured data from unstructured documents. Give GPT-4 or Claude a claims form, and it'll pull out policyholder names, dates, amounts, and coverage types with impressive accuracy.

But here's the problem: **extraction without evidence is just a fancy guess.**

When someone asks "where did this claim amount come from?", pointing at the model isn't an answer. You need to show the exact text, the exact page, the exact paragraph.

## What evidence-first means

Evidence-first extraction treats source linking as a first-class requirement, not an afterthought. Every extracted value comes with:

- **Source document ID** — which file this came from
- **Location** — page number, bounding box, or text span
- **Extracted text** — the exact snippet the value came from
- **Confidence** — how certain the model is about this extraction

This transforms extraction from "the model said so" to "here's exactly where this came from, verify it yourself."

## The architecture

A typical evidence-first pipeline looks like:

1. **Document preprocessing** — Convert to searchable text, preserve layout
2. **Chunking with metadata** — Split text while keeping source coordinates
3. **Extraction with citations** — Model extracts AND cites the source chunk
4. **Evidence verification** — Validate that cited text actually contains the value
5. **Human review console** — UI shows extraction + evidence side by side

The key insight: the model must output citations alongside values, and the system must verify those citations are valid.

## Why most teams skip this

Evidence linking is extra work:

- You need to maintain document coordinates through the pipeline
- You need to prompt the model to output citations (not just values)
- You need a verification step to catch hallucinated citations
- You need a UI that makes evidence visible

It's easier to just extract values and hope for the best. Until an auditor asks questions.

## The review console pattern

The most valuable output of evidence-first extraction isn't the data—it's the **review console**. A UI where:

- Extracted values appear next to their source snippets
- Low-confidence extractions are highlighted
- Reviewers can approve, reject, or correct with one click
- Every action is logged for audit

This turns human review from "re-read the whole document" to "verify these specific extractions." That's the efficiency win.

## Getting started

If you're building document extraction, start with evidence from day one:

1. Add source metadata to your document chunks
2. Prompt the model to output citations, not just values
3. Build verification into your pipeline
4. Design your UI around evidence display

It's more work upfront. It's much less work when you need to explain your outputs.

---

Want to see this in action? Check out the [ClaimEval case study](/projects/claimeval) or [book a call](/contact) to discuss your use case.
