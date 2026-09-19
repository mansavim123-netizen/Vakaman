# VAKAMAN — DESIGN BIBLE v1.1

## NORTH STAR
Architecture With Mass.

Vakaman should feel like a digital architectural object with weight, materiality, scale, permanence and memory.

The surface is restrained.
The system underneath can be sophisticated.

## EMOTIONAL ARC
Established -> Architectural -> Expensive -> Trustworthy -> Desirable -> Enquiry

## VISUAL GRAMMAR
Architecture + physics + editorial typography + cinematic composition + material science + controlled luxury.

Do not imitate a region.
Do not imitate a European luxury template.
Do not imitate an "Awwwards WebGL site."

## MATERIALS
Void #08080A
Obsidian #0E0D0B
Surface #141210
Gold #C9A84C
Gold-dim #8B7240
Ivory #F0EBE1
Stone #2E2A25

Gold is a rare signal, not decoration.

## TYPE
Fraunces: display, 100–300.
DM Sans: UI/body, 200–400.

Display-xl: clamp(72px,10vw,140px)
Display-lg: clamp(52px,7vw,108px)
H1: clamp(36px,4.5vw,64px)
H2: clamp(24px,3vw,42px)
H3: clamp(18px,2vw,26px)
Body: clamp(13px,1.2vw,15px)
UI: 9–11px, uppercase, 0.22–0.4em tracking

## COMPOSITION
Prefer dominant architectural subjects, quiet negative space, asymmetric editorial alignments, deep crops, precise metadata, selective large type and visual pauses.

Avoid generic three-card grids, centered-everything, glassmorphism, gradient blobs, noise-only backgrounds, fake luxury cliches, constant gold and gratuitous rounding.

## MOTION
Baseline easing:
cubic-bezier(0.16,1,0.3,1)

Normal UI motion:
0.8–1.4s

Physical vocabulary:
mass, inertia, resistance, tension, impact, attraction, recovery, occlusion, refraction, compression.

Slow input -> mass.
Fast input -> force.
Sharp input -> impact.
Sustained input -> tension.
Release -> recovery.

The same physical grammar should recur throughout the site.

## NARRATIVE
Hook -> World -> Trust -> Desire -> Story -> Proof -> Escape -> Resolution

Every section must have a narrative job.

## HOMEPAGE
Treat the page as one continuous spatial composition:
arrival -> architectural encounter -> worldview -> selected projects -> geography -> legacy/proof -> craftsmanship/story -> breathing space -> enquiry.

## GPU
DOM remains authoritative on the homepage.
GPU is progressive enhancement.
Heavy Three.js belongs to virtual-tour experiences unless a lightweight homepage GPU effect has a clear narrative purpose.

Every GPU feature needs capability detection, fallback and cleanup.

## CAD PIPELINE
CAD -> cleanup -> optimization -> GLB -> materials -> lighting -> composition -> web asset -> optional realtime.

Never invent architecture.

## RESPONSIVE
390px is the base.
Mobile is a designed state, not a shrunken desktop.
Pointer-only effects need touch equivalents or must disappear.

## ACCESSIBILITY
Semantic structure, visible focus, keyboard support, readable contrast and reduced motion are mandatory.

## PERFORMANCE
Never block LCP with heavy JavaScript.
Lazy-load noncritical scenes.
Dispose GPU resources.
Measure before adding expensive effects.

## COPY
Quiet, precise, confident and concrete.

Good:
"Designed for permanence."

Avoid:
"Experience an unparalleled world of luxury living."

## DEFINITION OF DONE
A visitor quickly thinks:
"This feels expensive."
"This is distinctive."
"I understand Vakaman."
"I want to explore the properties."
"I know how to enquire."
