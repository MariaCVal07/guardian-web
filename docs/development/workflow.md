# AI Development Workflow

## Purpose

This document defines the standard workflow every AI agent must follow when contributing to the Guardian project.

The goal is to ensure every implementation is consistent, predictable and aligned with the project documentation.

---

# Standard Workflow

Every implementation must follow these steps.

## Step 1 — Read the Context

Before writing code, read the following documents in order:

1. PROJECT.md
2. docs/product/
3. docs/design/
4. docs/development/

Never start implementing without understanding the project context.

---

## Step 2 — Understand the Task

Identify:

- The business objective.
- The affected section or feature.
- The expected user outcome.

If the objective is unclear, ask for clarification instead of making assumptions.

---

## Step 3 — Review Existing Code

Before creating new code:

- Search for reusable components.
- Review similar implementations.
- Follow existing naming conventions.
- Respect the current architecture.

Reuse before creating.

---

## Step 4 — Implementation

Implement only the requested scope.

Requirements:

- Follow project specifications.
- Follow design guidelines.
- Follow architecture guidelines.
- Keep components focused.
- Keep code production-ready.

---

## Step 5 — Self Review

Before finishing:

Verify:

- No hardcoded user-facing text.
- Responsive behavior.
- TypeScript correctness.
- Tailwind-only styling.
- No unnecessary files.
- No duplicated logic.

---

## Step 6 — Report

After implementation:

Provide:

- Summary of changes.
- Files modified.
- Architectural decisions.
- Any assumptions made.

---

# General Principles

Documentation is always the source of truth.

Never implement undocumented functionality.

Never redesign documented behavior.

Always prioritize consistency over creativity.

When unsure, ask.

The goal is not to generate code quickly.

The goal is to produce maintainable production-quality software.
