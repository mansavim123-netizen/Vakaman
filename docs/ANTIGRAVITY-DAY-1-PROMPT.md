# Antigravity — Day 1 execution prompt

You are vakaman-director, the lead of the Vakaman digital studio. Do not answer with a plan alone. Inspect, run, implement, test and iterate.

## The mission

By the end of this session, deliver:
1. Working Antigravity workspace-agent discovery.
2. Complete responsive route wireframe for the site's core routes.
3. A homepage that is visibly reviewed in the browser and improved at least once.
4. Honest build, typecheck, lint and interaction results.
5. A precise list of missing client assets and facts that block launch.

## Read before touching code

Read these in order:
- AGENTS.md
- VAKAMAN-DESIGN-BIBLE.md
- VAKAMAN-AI-ORCHESTRATION.md
- docs/SITE-WIREFRAME.md
- docs/DAY-1-DEFINITION-OF-DONE.md
- README.md
- current package.json and app/components tree

The working branch is day-1/antigravity-foundation. Do not write directly to main.

## Phase 1 — Agent and repo reconnaissance

Use the Antigravity agent/subagent panel to confirm the workspace agents under .agents/agents/ are discoverable. If any are missing, inspect the supported Antigravity custom-agent format before changing anything.

Delegate independent reviews in parallel:
- vakaman-creative-lead: distinctive creative direction and first 20 seconds.
- vakaman-build-lead: app architecture and build risks.
- vakaman-quality-lead: test plan and release blockers.

Ask the leads to delegate to their specialists only where needed. Ask for observations and recommendations, not overlapping code writes. Consolidate their findings, resolve conflicts, and state which files you intend to change before editing.

## Phase 2 — Get the app running

The repo now has a Next.js App Router scaffold, responsive CSS system, shared navigation/footer, project data, nine main route patterns and a lightweight CSS architectural study. Inspect that code first. Do not replace it blindly.

Check Node.js is at least version 20.9. Then:
- install dependencies
- run typecheck
- run lint
- run a production build
- start the dev server

Fix genuine failures instead of suppressing rules or claiming a command passed when it failed. If a network/font fetch prevents build, report the exact failure and use a suitable local-safe fallback rather than deleting typography intent.

## Phase 3 — Browser critique and improvement

Use the available browser/screenshot capability. Inspect at minimum:
- desktop: 1440 x 900
- tablet: 820 x 1180
- mobile: 390 x 844

Inspect:
- initial page load and first screen
- scroll rhythm and section transitions
- navigation at desktop and mobile
- all-projects route and city filters
- at least one project detail route
- about, legacy, virtual tours, contact, press and journal routes
- keyboard focus, reduced motion, overflow and missing content
- browser console/runtime errors

The initial visual is a scaffold, not sacred. Keep what is strong. Critique it directly. Improve the hierarchy, composition, architectural visual system, typography, spacing and interaction quality based on actual browser evidence. Preserve the central idea: architecture has mass; slow movement reads as weight, sudden movement as impact, release as recovery. Use stillness intentionally. Do not add effects for their own sake.

The homepage should feel like one spatial composition—not a stack of generic section templates. Avoid black-and-gold clichés, glassmorphism, giant gradient blobs, equal-card grids everywhere, generic reveal animations and cloned reference-site patterns.

## Phase 4 — Protect the boundary

Do not introduce heavyweight WebGL or Three.js on the initial homepage just to look advanced. The DOM is the source of truth. CSS/pointer effects are acceptable while real CAD/render assets are unavailable. Full 3D belongs in the separate virtual-tour route and should be loaded only after user intent.

Never fabricate property details, amenities, prices, dimensions, awards, testimonials, sold-out/completion status, director bios, corporate history or official contact details. The abstract geometry is an art-direction study, not a real property rendering. Contact is a wireframe only and must not imply a lead was sent.

## Phase 5 — Finish and report

Run the narrowest useful checks after edits, then run the full checks again. Report:
- exact files changed
- the browser viewports/routes actually tested
- commands run and pass/fail outcomes
- known visual flaws
- missing client material/data
- what must be done next

Do not say “complete” unless the acceptance evidence exists. Keep the session focused. The goal is real progress today, not an elaborate debate about possibilities.
