# Vakaman — Complete Site Wireframe (Day 1)

Status: structure is implemented as a responsive first wireframe. Client-specific copy, renderings, specifications, status and contact details remain inputs, not assumptions.

## Experience premise

**Architecture With Mass.** One physical grammar governs the experience: slow input = mass; fast input = force; sudden input = impact; sustained input = tension; release = recovery. DOM is authoritative. Lightweight visual interactions are progressive enhancement; full 3D belongs in the dedicated virtual-tour experience.

## Global frame

- Persistent wordmark and navigation: Portfolio, Our perspective, Legacy, Virtual tours, Begin a conversation.
- Mobile menu with keyboard-accessible expanded state.
- Skip-to-content link; focus indicators; semantic headings and landmarks.
- Global footer: portfolio, legacy, tours, perspective, press, contact, locations, copyright.
- Palette: Void #08080A, Obsidian #0E0D0B, Surface #141210, Ivory #F0EBE1, Stone #2E2A25, rare Gold #C9A84C.
- Typography: Fraunces display; DM Sans utility/body.
- Abstract geometry is an art-direction concept, not a depiction of a real project. Replace/rebuild it with client-approved CAD-derived renders or photography before publication.

## Route 1 — Homepage

1. Arrival / Hero — editorial headline, brand point of view, portfolio CTA, secondary About link, pointer-responsive architectural composition, index and scroll cue.
2. Point of view — brand belief and explanatory paragraph.
3. Portfolio — selected studies: Amber / Coimbatore, Aureus / Chennai, Riva / Anaikatti; all-projects CTA.
4. A sense of place — Coimbatore, Chennai, Nilgiris, Anaikatti.
5. Legacy — permanence narrative and archive CTA; no projects labeled sold-out without confirmation.
6. Approach — Proportion, Material, Context.
7. Enquiry resolution — invitation and Contact CTA.
8. Footer — global destinations and locations.

## Route 2 — Portfolio

- Page intro, location filters (All places / Coimbatore / Chennai / Nilgiris / Anaikatti), live project count and responsive project list.
- Project names from client brief: Amber, Altin Square, Kota Goldfields, S3, Sankalp, Aureus, Silver Oak, Aishwarya Apartments, Svenska Estate, Riva.
- No invented size, price, completion date, amenity, award, status or availability.

## Route 3 — Project detail

- Back-to-portfolio navigation; project name and confirmed city; hero artwork; project story/specifications/location; project enquiry CTA; return to portfolio.
- Story, specifications, approved renderings and all factual claims remain to be populated from client material.

## Route 4 — Legacy

- Retrospective tone; archive introduction and featured art region.
- Include only client-confirmed completed/sold-out works. Do not infer status from age or lack of availability.

## Route 5 — Virtual tours

- Explain an optional spatial experience; preview stage and project selector when models exist.
- Viewer loads after explicit user intent and must not block homepage LCP.
- Add keyboard fallback, reduced-motion mode, touch controls and normal-content fallback.
- CAD -> cleanup -> optimized GLB -> material reconstruction -> lighting -> viewer.

## Route 6 — About

- Brand point of view and principles: judgement, context, permanence.
- Director biographies and Surabhi Group history only after client supplies and approves those details.

## Route 7 — Contact

- Name, email, optional phone, interest/location, optional message; privacy copy to review.
- Email and WhatsApp are not connected yet. Do not tell a user an enquiry was sent.
- Official phone, email, address and map must come from verified client details.

## Route 8 — Press

- Press contact, approved media kit, announcements, awards/publications only when sourced.
- No invented press coverage or awards.

## Route 9 — Blog / Journal

- Editorial landing and later article index/template.
- Only editor-approved stories, sourced claims and cleared image rights.

## Responsive behavior

### Desktop, 1024px and above
- Asymmetric editorial composition; dominant hero type shares a spatial frame with architecture study.
- Staggered project composition rather than generic equal-card template.
- Hover can add controlled response but is not needed for comprehension.

### Tablet, 768–1023px
- Keep type dominant and reduce composition complexity.
- Two-column portfolio where viable.
- Collapse navigation by available width.

### Mobile, 767px and below
- Designed state, not compressed desktop.
- No custom cursor or hover-only interactions.
- Hero copy stays clear; art moves below and behind without reducing contrast.
- Single-column portfolio; touch controls; stable artwork ratios.
- Keyboard-accessible menu; native scrolling remains available.

## Acceptance

- Navigation works with keyboard and touch.
- Reduced-motion users receive a stable composition.
- Abstract art is hidden from screen readers; informative imagery gets meaningful alt text once supplied.
- No heavy GPU scene on initial load.
- Contact wireframe explicitly states it is not connected.
- Project-specific claims are traceable to approved client sources.
