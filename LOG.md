# Build Log: TCSS 490 Artifact 1

## Oct 11, 2026: Planning and drafts (Claude, web chat / Cowork)
- Asked Claude to read the assignment page and list the required tasks.
- Asked for a plan: GitHub Pages hosting on my account, plain HTML/CSS/JS, UW purple/gold, clean and minimal.
- Claude produced two layout drafts (Grid and Timeline). I picked Draft A (Grid).
- Claude wrote this handoff doc for Claude Code.

## Oct 11, 2026: Build and deploy (Claude Code)
- Asked Claude Code to read the assignment, handoff doc and draft → it summarized them and listed what it still needed from me (tagline, About, reflection, ideas).
- Asked it to start building → the original project folder was under `C:\Program Files` and not writable, so it built the repo in `C:\Users\trent\TrentenMUW.github.io` instead. `gh` (GitHub CLI) wasn't installed, so it installed it with winget.
- Scaffolded `index.html`, `styles.css`, `artifacts.js`, `script.js`, `README.md`, `.nojekyll` from Draft A, dropping Draft B and the draft switcher. Card content lives only in `artifacts.js`; `script.js` escapes all text before rendering.
- Changed from the draft: the grid uses `minmax(min(300px,100%),1fr)` so cards can't overflow at 375px, and planned cards show a link/reflection as soon as those fields are filled in (not only when status is "complete").
