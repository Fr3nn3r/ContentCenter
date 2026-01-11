---
title: "Prompt Management Playbook"
oneLiner: "Versioned, testable, reviewable prompts treated as real software"
tags: ["AI", "DevOps", "LLM"]
industry: "Technology"
stack: ["Markdown", "Python", "Git"]
problem: "Prompts and model settings scattered across codebases make audits painful and changes brittle."
constraints: "Must support multiple workflows, evolving schemas, and multiple models without rewriting half the app."
approach: "Put prompt text + config + schema expectations into a single versioned template file, loaded by a strict runtime."
results: "Faster iteration, fewer regressions, and a clean review workflow where changes are obvious."
outcomes:
  - "Zero mystery breakages—when prompts change, everyone knows"
  - "Faster onboarding—'here is the prompt file; everything is inside'"
  - "Easier audits—'which prompt version generated this?' has an answer"
artifacts:
  - type: image
    url: "/Prompt Management Playbook.jpg"
    label: "Prompt Management Playbook Overview"
    caption: "Single source of truth for prompts: metadata, inputs, outputs, and text together."
thumbnail: "/Prompt Management Playbook.jpg"
featured: true
draft: false
---

![Prompt Management Playbook Overview](/Prompt%20Management%20Playbook.jpg)

## Context

This playbook is for teams building LLM features that must be maintainable—and ideally compliant. It emerged from watching too many projects fail in predictable ways.

**My role:** Designed the approach + templates + runtime contract.

## The Problem

Classic LLM implementations fail in predictable ways:

- **Scattered configuration.** Prompt text lives in one file, model settings in another, schema expectations somewhere else.
- **Silent breakages.** Engineers "just tweak the temperature" and the output format breaks downstream.
- **No version history.** Nobody knows which prompt version produced which output.
- **Archaeology debugging.** "Which string concatenation did this come from?" becomes a real question.

When you can't trace outputs back to inputs, you can't debug. When you can't debug, you can't iterate. When you can't iterate, you ship broken things.

## Key Decisions

1. **Single source of truth per prompt.** Configuration + instructions + expected output live together in one file.

2. **Version control by default.** Prompt changes are code changes—reviewable diffs, not Slack messages.

3. **Strict interfaces.** Prompts produce a known structure. Failures are detected early, not in production.

4. **Separation of roles.** Writers can refine text; engineers can enforce contracts. Neither blocks the other.

## Solution Overview

Each prompt is a **template artifact** with:

- **Metadata:** Purpose, version, model constraints
- **Input requirements:** What context must be provided
- **Output requirements:** Schema / structure expected
- **Prompt text:** Human-readable, editable

The runtime:

- Loads the template
- Injects context safely
- Validates output shape
- Logs prompt version + config used

## What I Built

- **Prompt template format:** Human-readable with structured metadata
- **Loader contract:** Consistent API to render prompts with context
- **Validation hooks:** Detect malformed outputs early
- **Change workflow:** Prompt updates via PRs with reviewable diffs

## Outcome

- **Reduced mystery breakages.** When prompts change, everyone knows.
- **Faster onboarding.** "Here is the prompt file; everything is inside."
- **Easier audits.** "Which prompt version generated this?" has an answer.
- **Clearer collaboration.** Product, domain experts, and engineering can all contribute.

## What I Learned

The playbook works, but it's the beginning, not the end:

- **Prompt tests are worth it.** Golden inputs with expected structure catch regressions before they ship.
- **Eval harness is next.** Regression detection across model upgrades requires systematic comparison.
- **Stakeholder visibility matters.** A small prompt catalog UI (read-only) lets non-engineers see what's deployed.
- **Schema evolution is hard.** When output requirements change, you need a migration strategy—not just a new prompt.
