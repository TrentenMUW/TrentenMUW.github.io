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
- Had me sign in to the GitHub CLI (`gh auth login`, browser login as TrentenMUW) → it created the public repo `TrentenMUW.github.io`, pushed, and confirmed Pages was already enabled. Site went live at https://trentenmuw.github.io within about a minute.
- Checked the live page: all 5 cards render, no console errors, no horizontal scroll at phone width, and light and dark mode both look right.
- I chose to deploy with the placeholder text (tagline, About, card 1 reflection, ideas for cards 2–5) for now and fill it in later.
- Gave Claude my tagline, About text, card 1 reflection, and one rough paragraph of ideas per card for Artifacts 2–5 → it tidied the wording (typos, splitting each paragraph into 2–3 idea bullets) and gave cards 2–5 working titles from my notes. No `TODO(Trenten)` placeholders remain.

## Oct 19, 2026: Artifact 2 card (Claude Code, from the Continuum session)
- Asked Claude Code to update the Artifact 2 card now that Continuum is finished, leaving placeholder text for my reflection → it edited only `artifacts.js` (card `id: 2`): title "Continuum", status "complete", link https://trentenmuw.github.io/continuum/, a drafted factual description, `ideas: []`, and `reflection: "TODO(Trenten): …"`.
- My earlier working title ("Strictly speaking, am I still on track?") and its three idea bullets were replaced per the Continuum handoff; they remain in git history.
- I chose to push it with the `TODO(Trenten)` reflection placeholder for now and fill it in later.
- Gave Claude my Artifact 2 reflection and asked for minimal changes → it entered it verbatim in card 2. No `TODO(Trenten)` placeholders remain.
- Asked Claude to update the footer date → "Last updated" now reads Oct 19, 2026.

## Nov 1, 2026: Swap Artifacts 3 and 4, start Scrawdle card (Claude Code)
- Decided to swap my Artifact 3 and 4 plans → "Tracking People in Power" moved to card 3. The "AI Capabilities News Feed" ideas were removed (still in git history).
- Card 4 is now "Scrawdle", my team's daily drawing game, still in progress. It links to https://scrawdle.vercel.app and has my reflection entered verbatim. Footer date updated to Nov 1, 2026.

## Nov 7, 2026: Tagline update (Claude Code)
- Asked Claude to change the tagline → it now reads "working on artifact 5". Footer date updated to Nov 7, 2026.

## Nov 9, 2026: Mark Artifact 4 (Scrawdle) complete (Claude Code)
- Asked Claude to show Scrawdle as complete, like the other finished cards → status set to "complete" so it renders as a full-width feature card. Claude drafted a short "What it is" description from my reflection; the reflection itself is unchanged. Footer date updated to Nov 9, 2026.

## Nov 17, 2026: Artifact 5 is now TERRA (Claude Code)
- Gave Claude our Artifact 5 brainstorm doc (GlobeProject) and the project link → card 5 now points to TERRA (https://globe-project-sigma.vercel.app/), with a short description and four idea bullets summarized from the doc. It's still "planned", with no reflection yet. The Decomp/Recomp ideas were removed (still in git history). Footer date updated to Nov 17, 2026.

## Nov 24, 2026: TERRA reflection (Claude Code)
- Last week's feedback asked for a few sentences on what I worked on and which part is mine, since card 5 only listed ideas. I told Claude what I contributed (features from earth.nullschool.net, plus ideas pulled from Decision Desk HQ and Google's map services) → it drafted a short reflection from that and added it to card 5. Card 5 stays "planned". Footer date updated to Nov 24, 2026.
- Gave Claude specifics on what I took from each site (nullschool's 3D approach for wind direction and country borders; Decision Desk HQ's highlighting and info panel) → it rewrote the reflection with those details and corrected the site name to Decision Desk HQ.
- Asked Claude to widen the TERRA card to match the completed cards while keeping the "not complete" look → planned cards that have a reflection now span the full grid width with the same two-column layout ("What it is" + ideas on the left, Reflection on the right), but keep the plain background and gold Planned badge. Changed `script.js` and `styles.css`; no card data changed.
- Asked Claude for questions to expand the TERRA reflection and answered five of them (how the nullschool code was adapted, how the highlighting works, why Google's approach only partly applied, learning 3D, and the trouble with older data) → it worked my answers into the reflection, keeping my wording.
