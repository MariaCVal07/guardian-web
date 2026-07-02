# Section Specifications

## Purpose

This document defines the implementation contract for every section of the Guardian landing page.

Each section has a single business objective.

Each section answers one customer question.

Implementation must follow this specification.

---

# 1. Navbar

## Objective

Provide simple and intuitive navigation while keeping the primary call to action always visible.

## Business Question

"Where can I go?"

## Required Components

- Logo
- Navigation menu
- Language switcher
- Primary CTA button

## Content Source

src/messages/

## Success Criteria

Visitors can easily navigate the landing and always have access to the primary CTA.

---

# 2. Hero

## Objective

Explain Guardian in less than ten seconds.

## Business Question

"What does Guardian do?"

## Required Components

- Badge
- Headline
- Supporting paragraph
- Primary CTA
- Secondary CTA
- Engineering visualization

## Content Source

src/messages/

## Success Criteria

Visitors immediately understand:

- Who Guardian helps.
- What problem Guardian solves.
- Why the approach is different.
- What to do next.

---

# 3. The Problem

## Objective

Expose the limitations of traditional QA approaches.

Help visitors understand that the real problem is poor prioritization rather than lack of automation.

## Business Question

"Why do current QA approaches fail?"

## Required Components

- Section badge
- Headline
- Supporting paragraph
- Problem flow visualization

### Flow

Traditional QA

↓

Everything gets tested

↓

Critical business risks remain uncovered

↓

Lower release confidence

↓

Higher business risk

## Content Source

src/messages/

## Success Criteria

Visitors recognize the problem before seeing the solution.

---

# 4. Why Guardian

## Objective

Explain why Guardian follows a different engineering approach.

## Business Question

"Why is Guardian different?"

## Required Components

- Section title
- Introduction
- Three value cards

### Value Cards

- Risk First
- AI-Assisted Engineering
- Release Confidence

## Content Source

src/messages/

## Success Criteria

Visitors understand Guardian's unique value proposition.

---

# 5. Guardian Methodology

## Objective

Present the RBQE methodology in a simple and structured way.

## Business Question

"How does Guardian work?"

## Required Components

- Methodology title
- Process visualization
- Supporting explanation

### Workflow

Requirements

↓

Risk Analysis

↓

AI-Assisted Reasoning

↓

Test Strategy

↓

Execution

↓

Release Confidence

## Content Source

src/messages/

## Success Criteria

Visitors understand the complete engineering workflow.

---

# 6. Services

## Objective

Present Guardian consulting services.

## Business Question

"What services are available?"

## Required Components

Three service cards:

- Technical Review
- Risk-Based Quality Engineering
- AI-Assisted Quality Engineering

## Content Source

src/messages/

## Success Criteria

Visitors clearly understand the available consulting services.

---

# 7. About

## Objective

Present Guardian's engineering philosophy and professional credibility.

## Business Question

"Why should I trust Guardian?"

## Required Components

- Section title
- Brief introduction
- Engineering principles

## Content Source

src/messages/

## Success Criteria

Visitors perceive Guardian as an engineering partner rather than a freelancer.

---

# 8. FAQ

## Objective

Reduce uncertainty before the visitor schedules a meeting.

## Business Question

"What questions might I still have?"

## Required Components

- Frequently asked questions
- Expandable answers

## Content Source

src/messages/

## Success Criteria

The most common objections are addressed before the CTA.

---

# 9. Final CTA

## Objective

Encourage qualified visitors to start a conversation.

## Business Question

"What should I do next?"

## Required Components

- Strong headline
- Supporting text
- Primary CTA
- Secondary CTA

### Primary CTA

Book a Technical Review

### Secondary CTA

Visit LinkedIn

## Content Source

src/messages/

## Success Criteria

Visitors clearly understand the next action.

---

# 10. Footer

## Objective

Provide secondary navigation and contact information.

## Business Question

"Where can I find more information?"

## Required Components

- Navigation links
- Email
- LinkedIn
- GitHub
- Copyright

## Content Source

src/messages/

## Success Criteria

Visitors can access additional information without distracting from the main conversion goal.

---

# Global Rules

Every section must:

- Answer one business question.
- Support the primary conversion goal.
- Read all user-facing text from `src/messages/`.
- Follow the design system.
- Be fully responsive.
- Use reusable components.
- Avoid duplicated content.
- Maintain a clear information hierarchy.
- Guide visitors naturally toward the next section.