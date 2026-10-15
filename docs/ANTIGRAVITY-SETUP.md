# Open the Vakaman Day 1 build in Antigravity

## If the repo is not cloned on this computer

1. In Antigravity, choose Open Folder after cloning the Day 1 branch with this command from a terminal:

    git clone -b day-1/antigravity-foundation https://github.com/mansavim123-netizen/Vakaman.git
    cd Vakaman

2. Open the new Vakaman folder as the workspace.
3. Confirm Node.js is version 20.9 or newer.
4. In the integrated terminal run:

    npm install
    npm run dev

5. Open the agent panel and verify the workspace agents under .agents/agents. In Antigravity CLI, the documented /agents command opens the Agent Manager. In the IDE, use the agent/customizations panel. If they do not appear, reopen the workspace and inspect the agent format before duplicating files.
6. Open docs/ANTIGRAVITY-DAY-1-PROMPT.md and paste it into the main agent chat.

## If this repository is already cloned

From the repo root, run:

    git fetch origin
    git switch --track origin/day-1/antigravity-foundation

If Git says the local branch already exists, switch to it with:

    git switch day-1/antigravity-foundation

Then run npm install and npm run dev.

## Workspace agents

Antigravity workspace agents live in .agents/agents/; workspace rules are stored in AGENTS.md and .agents/rules/. The Day 1 branch contains a director, three leads and fifteen specialists.

## Important

The website scaffold and wireframe are first-pass implementations. Run build, typecheck, lint and browser checks on this computer; the remote file writes have not executed those commands. The enquiry form is not connected to email or WhatsApp, project artwork is abstract placeholder geometry, and client-specific facts/assets still need approval.
