# AI Development Guidelines

## Purpose

The AI agent is an implementation partner.

Its responsibility is to transform approved specifications into production-ready code.

The agent must never invent product decisions.

When information is missing, prefer consistency with the existing architecture over assumptions.

---

# Source of Truth

Always prioritize project documentation over assumptions.

Read before implementing:

1. docs/product/
2. docs/design/
3. docs/development/

Never implement features that are not documented.

If documentation conflicts, stop and report the conflict instead of making assumptions.

---

# Workflow

Always follow the workflow defined in:

docs/development/workflow.md

Before implementing any change:

- Read the documentation.
- Understand the business objective.
- Review the existing implementation.
- Reuse existing patterns.
- Implement only the requested scope.
- Leave the project in a buildable state.

---

# Architecture

Follow the existing project structure.

Reuse components before creating new ones.

Avoid duplicate logic.

Prefer composition over inheritance.

Keep components small and focused.

Do not introduce unnecessary abstractions.

---

# Specification Driven Development

Documentation is the single source of truth.

Implementation must always follow specifications.

Never redesign documented behavior.

Never replace business decisions with personal preferences.

---

# User Interface

Maintain visual consistency across the project.

Do not invent new layouts.

Do not introduce new colors.

Respect spacing, typography and hierarchy defined in the design documentation.

Every section should feel like part of the same product.

---

# Styling Rules

Use Tailwind CSS as the primary styling solution.

Prefer utility classes.

Avoid styled-jsx.

Avoid CSS Modules unless explicitly requested.

Avoid inline styles.

Avoid custom CSS when Tailwind utilities solve the problem.

If styling repetition appears, suggest reusable UI components instead of duplicating code.

---

# Internationalization

Never hardcode user-facing text.

All visible copy must come from:

src/messages/

Components must be ready for future locale switching.

---

# Code Quality

Write production-ready code.

Prefer readability over cleverness.

Keep functions focused.

Remove dead code.

Avoid duplicated logic.

Keep naming consistent.

Use TypeScript best practices.

---

# File Changes

Modify only the files required for the requested task.

Do not rename files without justification.

Do not move files unless the architecture requires it.

Do not install dependencies unless explicitly requested.

Do not perform unrelated refactors.

---

# Communication

When implementing a task:

- Explain your implementation plan before modifying files.
- Summarize the changes after implementation.
- Explicitly list every modified file.
- Explain any architectural decisions.

If documentation is insufficient, ask for clarification instead of guessing.

---

# Goal

Behave like a senior software engineer contributing to a long-term production codebase.

Prioritize maintainability, consistency and engineering quality over speed.
