# UI Specification

## Purpose

This document defines the implementation rules for every UI component used in the Guardian project.

Components should prioritize consistency, clarity and reusability over visual complexity.

---

# General Principles

Every component must:

- Have a single responsibility.
- Be reusable.
- Be responsive.
- Be accessible.
- Support future localization.
- Be production-ready.

Avoid creating one-off components.

---

# Layout Components

## Container

Purpose:

Maintain a consistent maximum content width across the entire application.

Rules:

- Reuse everywhere.
- Never redefine page width.
- Center all page sections.

---

## Section

Purpose:

Provide consistent vertical spacing.

Rules:

- Every landing block should use the same spacing system.
- Avoid custom margins for individual sections.

---

# Navigation

The navigation should always contain:

- Brand logo
- Navigation links
- Language switcher
- Primary CTA

Behavior:

- Responsive
- Sticky on desktop
- Simple mobile navigation

---

# Buttons

Two button variants are allowed.

## Primary

Purpose:

Drive the primary conversion.

Characteristics:

- Highest visual priority
- Solid appearance
- Clear hover feedback

---

## Secondary

Purpose:

Provide alternative navigation.

Characteristics:

- Lower emphasis
- Outline or subtle appearance

---

# Cards

Cards communicate structured information.

Rules:

- Equal padding
- Consistent border radius
- Minimal decoration
- Clear typography hierarchy

Cards should never become decorative elements.

---

# Section Titles

Every section title should include:

- Small badge (optional)
- Main heading
- Supporting paragraph

The hierarchy must remain consistent throughout the landing.

---

# Icons

Icons should:

- Reinforce understanding
- Use a single icon style
- Never replace descriptive text

---

# Forms

Forms should request only essential information.

Rules:

- Clear labels
- Visible validation
- Accessible inputs
- Large interaction targets

Reduce friction.

---

# Responsive Behavior

Every component must support:

- Mobile
- Tablet
- Desktop

Components may resize.

They should never lose functionality.

---

# Accessibility

Every component must provide:

- Keyboard navigation
- Visible focus state
- Semantic HTML
- Screen reader compatibility
- Sufficient color contrast

---

# Internationalization

No visible text may be hardcoded.

Every label, button, title and message must come from:

src/messages/

Components must remain language-independent.

---

# Reusability Rules

Before creating a new component, verify:

- Can an existing component be reused?
- Can it be extended?
- Is it already documented?

Duplicate UI patterns should not exist.

---

# Definition of Done

A UI component is complete only if it is:

- Responsive
- Accessible
- Reusable
- Typed with TypeScript
- Internationalized
- Consistent with the design system
- Free of duplicated logic
