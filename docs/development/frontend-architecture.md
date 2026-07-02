# Frontend Architecture

## Objective

Build a bilingual (EN/ES) landing page that positions the service as an AI-Assisted Risk-Based Quality Engineering solution.

The objective is to generate qualified business conversations, not to sell software directly.

---

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- App Router

---

## Principles

- Minimalistic
- Technical
- Professional
- Fast
- Accessible
- Mobile First

Avoid marketing clichés.

The interface should feel like an engineering product.

---

## Folder Structure

/app
/components
/components/layout
/components/sections
/components/ui
/lib
/public
/styles

---

## Sections

1. Navigation
2. Hero
3. How It Works
4. Why This Approach
5. Contact
6. Footer

No additional sections are allowed during MVP.

---

## Internationalization

The entire landing must support:

- English
- Spanish

Content must come from translation files.

Never hardcode text inside components.

---

## Component Rules

Components must:

- Be reusable.
- Receive data through props.
- Avoid duplicated code.
- Be responsive.
- Follow accessibility best practices.

---

## Styling

Use Tailwind CSS.

Rounded corners should be subtle.

Spacing should be generous.

Animations should be minimal.

Use a neutral color palette.

---

## Performance

Prioritize:

- Lighthouse score
- Accessibility
- SEO
- Performance

Avoid unnecessary dependencies.

---

## Development Rule

Copilot must never invent business content.

If content is missing, create TODO comments instead.