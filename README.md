# Vakaman

A considered digital experience for Vakaman Developers, built around the creative thesis **Architecture With Mass**.

## Start here
1. Read AGENTS.md.
2. Read VAKAMAN-DESIGN-BIBLE.md and VAKAMAN-AI-ORCHESTRATION.md.
3. Read docs/SITE-WIREFRAME.md and docs/DAY-1-DEFINITION-OF-DONE.md.
4. In Antigravity, start with the custom agent vakaman-director. Ask it to inspect this repository and delegate bounded reviews before making changes.

## Run locally
```bash
npm install
npm run dev
```

Checks:
```bash
npm run typecheck
npm run lint
npm run build
```

## Antigravity workspace agents
Project-scoped custom agents are defined in .agents/agents/. Persistent design and engineering rules live in .agents/rules/. Confirm agent discovery in Antigravity's agent panel before relying on the hierarchy.

## Day 1 implementation notes
- The homepage, route scaffold and responsive visual system are a first-pass wireframe.
- Abstract architectural geometry is a design study, not a depiction of a real Vakaman property.
- Project data contains only names and places from the supplied brief. All specs, imagery, project status, client history and official contact details require client approval.
- The enquiry form is deliberately not connected. Do not represent it as a working lead endpoint until email + WhatsApp delivery is implemented and tested.
- The full 3D viewer is not implemented yet. Its route establishes the experience and performance boundary.

Do not invent property details.
