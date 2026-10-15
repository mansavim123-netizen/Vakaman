# VAKAMAN — PROJECT CONTROL

## Mission
Build a distinctive, commercially effective luxury real-estate experience for Vakaman Developers. The creative thesis is **Architecture With Mass**: the site should feel architectural, physical, materially considered and unmistakably Vakaman.

## Source of truth
- VAKAMAN-DESIGN-BIBLE.md — brand and creative system
- VAKAMAN-AI-ORCHESTRATION.md — studio responsibilities and handoffs
- docs/SITE-WIREFRAME.md — route and responsive information architecture
- package.json and installed framework documentation — technical truth
- client-approved data and assets — factual truth

## Core rule
AI may generate implementation. It may not invent client facts, project details, awards, completion/sold-out status, specifications, testimonials, prices, availability, director biographies, group history or official contact details.

## Antigravity agent hierarchy
Director: vakaman-director
- Creative Lead: vakaman-creative-lead
  - vakaman-creative-director
  - vakaman-ux-strategist
  - vakaman-art-director
  - vakaman-copy-strategist
  - vakaman-reference-scout
- Build Lead: vakaman-build-lead
  - vakaman-frontend-architect
  - vakaman-motion-engineer
  - vakaman-webgl-engineer
  - vakaman-3d-pipeline
  - vakaman-conversion-engineer
- Quality Lead: vakaman-quality-lead
  - vakaman-qa-engineer
  - vakaman-performance-engineer
  - vakaman-accessibility-engineer
  - vakaman-seo-engineer
  - vakaman-security-engineer

Workspace agent definitions live under .agents/agents/. Persistent project constraints live in AGENTS.md and .agents/rules/. The director should use available Antigravity subagent tools to delegate bounded, independent reviews; do not assume every role must be invoked for every change.

## Ownership
Creative roles propose and protect the visual language. Build roles implement their owned systems. Quality roles challenge and verify. The Director resolves cross-domain conflicts. Never allow two agents to write overlapping files concurrently; parallelize research/review, serialize shared-code changes.

## Workflow
DISCOVER -> DEFINE -> PROTOTYPE -> IMPLEMENT -> REVIEW -> OPTIMIZE -> SHIP

For major features: intent -> interaction specification -> physical model -> DOM/technical architecture -> implementation -> visual review -> quality review.

## Change discipline
Before editing, inspect the repository, name intended files, and identify risks. After editing, report exact files changed, commands actually run, outcomes, visual checks and unresolved risks. Never claim verification without evidence.

## Creative non-negotiables
- Preserve Hook -> World -> Trust -> Desire -> Story -> Proof -> Escape -> Resolution.
- The physical grammar is consistent: slow input = mass; fast input = force; sudden input = impact; sustained input = tension; release = recovery.
- Stillness is a design tool. Restraint is not an excuse for emptiness; experimentation is not an excuse for noise.
- DOM content remains authoritative; visual and GPU systems are progressive enhancement.
- Heavy 3D belongs in the dedicated virtual-tour experience unless a small homepage effect has a clear narrative benefit.

## Engineering non-negotiables
- Mobile-first, keyboard accessible, visible focus, readable contrast and reduced-motion support.
- Native scrolling remains available. No hover-only or custom-cursor-dependent core interactions.
- No heavyweight animation blocking initial paint or LCP.
- GPU/rendering systems need capability checks, cleanup, fallback and motion-reduction behavior.
- No secrets in client code. A form is not connected unless an actual endpoint has been implemented and tested.
- Avoid unnecessary dependencies and bloated abstractions.
- Keep main deployable. Day 1 work belongs on day-1/antigravity-foundation until verified and reviewed.
