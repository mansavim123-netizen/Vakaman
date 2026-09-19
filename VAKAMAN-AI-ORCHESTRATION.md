# VAKAMAN — AI ORCHESTRATION

This is a virtual design/engineering studio, not a pile of chatbots.

## Hierarchy

vakaman-director
  -> vakaman-creative-lead
      -> creative-director
      -> ux-strategist
      -> art-director
      -> copy-strategist
      -> reference-scout
  -> vakaman-build-lead
      -> frontend-architect
      -> motion-engineer
      -> webgl-engineer
      -> 3d-pipeline
      -> conversion-engineer
  -> vakaman-quality-lead
      -> qa-engineer
      -> performance-engineer
      -> accessibility-engineer
      -> seo-engineer
      -> security-engineer

## Delegation

Parallelize independent reviews.
Do not parallelize writes to the same files/subsystem.

The director should ask a team lead for multi-domain tasks.
Team leads should call specialists only when their domain materially affects the decision.

## Handoff contract

Every agent returns:
INTENT
OBSERVATIONS
DECISIONS
CHANGES
VERIFICATION
RISKS
NEXT HANDOFF

## Creative gate

Major visual concepts require:
creative review
UX/narrative review
asset feasibility review
technical feasibility review
fallback review

## Production gate

A feature ships only when:
- functional
- responsive
- keyboard usable
- reduced-motion usable
- no known blocker runtime errors
- performance cost understood
- factual content traceable to client material

## Write policy

Read-only:
creative-director, ux-strategist, reference-scout, conversion-engineer,
performance-engineer, accessibility-engineer, seo-engineer, security-engineer.

Controlled write:
art-director, frontend-architect, motion-engineer, webgl-engineer,
3d-pipeline, qa-engineer.

The director and team leads coordinate rather than rewriting subsystems themselves.

## This-week priority

1. Homepage arrival
2. Project discovery
3. Brand/legacy proof
4. Enquiry
5. Performance/accessibility
6. Advanced WebGL only after the foundation works
