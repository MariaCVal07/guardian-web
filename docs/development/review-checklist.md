# Code Review Checklist

This checklist must be used before accepting any implementation.

---

# Specification

- [ ] The implementation follows the documented requirements.
- [ ] No undocumented functionality was introduced.
- [ ] The business objective is preserved.

---

# Architecture

- [ ] The project structure is respected.
- [ ] Existing components are reused when appropriate.
- [ ] No duplicated logic was introduced.
- [ ] The implementation follows the frontend architecture.

---

# User Interface

- [ ] The design is consistent with the existing UI.
- [ ] The implementation is responsive.
- [ ] Accessibility has been considered.
- [ ] The interface maintains the Guardian visual identity.

---

# Styling

- [ ] Tailwind CSS is used.
- [ ] No styled-jsx.
- [ ] No CSS Modules unless explicitly required.
- [ ] No unnecessary custom CSS.
- [ ] No inline styles.

---

# Internationalization

- [ ] No user-facing text is hardcoded.
- [ ] All visible text comes from src/messages.

---

# Code Quality

- [ ] TypeScript is correctly used.
- [ ] No unused imports.
- [ ] No dead code.
- [ ] Naming is consistent.
- [ ] Components remain focused and maintainable.

---

# Changes

- [ ] Only the expected files were modified.
- [ ] No unrelated refactoring was performed.
- [ ] The project builds successfully.

---

# Approval

Reviewer:

Date:

Decision:

- [ ] Approved
- [ ] Changes Requested