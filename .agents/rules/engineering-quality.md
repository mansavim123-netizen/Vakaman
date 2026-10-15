# Engineering quality — non-negotiable

- Inspect the repository and current framework versions before changing architecture.
- Keep semantic React/Next.js content authoritative. Visual/GPU layers are progressive enhancement.
- Reuse sound components and data sources. Avoid unnecessary dependencies and duplicate abstractions.
- Mobile-first, keyboard-accessible, visible focus, readable contrast and reduced-motion support are required.
- Touch and pointer interactions must be intentional; hover is never the only way to use a feature.
- Never block LCP with a heavy animation, 3D scene, remote call or synchronous work.
- Every GPU effect needs capability checks, cleanup, reduced-motion behavior and a fallback.
- No secrets in browser code. Validate form input server-side; never claim a form sent when no backend exists.
- Do not edit overlapping files from parallel agents. Use separate worktrees where available; otherwise parallelize reviews and serialize code writes.
- Before edits, state intended files and risk. After edits, report exact files, commands actually run, test results and unresolved risks.
- Never claim a build, lint or browser check passed unless the command/inspection was actually performed.
- Keep main deployable. Work on day-1/antigravity-foundation, then verify and open a pull request.
