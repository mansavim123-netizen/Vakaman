# Vakaman AI Agent Studio

Drop the `.kimi-code/agents/` directory into the Vakaman repository after cloning. Keep `AGENT-REGISTRY.md`, `STUDIO-PROTOCOL.md`, and `PROMPTING-PLAYBOOK.md` at the repository root or `.kimi-code/` documentation area.

The system contains 19 roles: 1 Director, 3 Leads, and 15 specialists. Each specialist prompt is designed to be a bounded system prompt with a distinct personality, domain mission, decision framework, first task, failure modes, and handoff contract.

These files are intentionally project-scoped so the agent behavior can be reviewed, versioned, and changed with the codebase. Kimi's documentation states that project-level `.kimi-code/agents/` files are auto-discovered and can define custom delegation allowlists.