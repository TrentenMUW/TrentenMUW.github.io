// Edit this file to update the portfolio. One object per artifact.
// status: "complete" | "planned"
const ARTIFACTS = [
  {
    id: 1,
    title: "This Portfolio Site",
    status: "complete",
    link: "https://trentenmuw.github.io",
    description: "A static portfolio built with plain HTML, CSS and JavaScript, planned and drafted with Claude and deployed on GitHub Pages. It holds a card for every artifact this quarter.",
    reflection: "This artifact was startlingly easy to complete! On one hand I'm guilty of starting late, and on the other I'm almost proud of how it turned out. I can't say proud exactly, because a computer did it for me, so my bar for what I expect from my time with LLMs is immediately raised again. I used Claude Code about a year ago and was surprised by how fast, and also how clunky and slow, it was. Now I'm blown away by how many of those bumps have been smoothed over. I look forward to using it all quarter!",
    ideas: []
  },
  {
    id: 2,
    title: "Continuum",
    status: "complete",
    link: "https://trentenmuw.github.io/continuum/",
    description: "A lifelong timeline that replaces the calendar grid with one continuous line you can zoom from minutes to decades, with category lanes, repeating events, milestones, and .ics/.csv import. It's built with React and TypeScript and keeps all of its data in the browser.",
    reflection: "The biggest lesson for me in this project was the value of front loading my design specifications. It was very obvious to me as soon as I started, and I even remember learning in previous classes that starting work before having a completely finished specifications document is bad practice, but I still needed the reminder. I also feel that I got almost too much help from AI in design choices, and would actually like to make a point of sitting down to face those boring decisions myself, or else lose some part of myself to the automation.",
    ideas: []
  },
  { id: 3, title: "AI Capabilities News Feed", status: "planned", link: "", description: "", reflection: "",
    ideas: [
      "Since the last Monday of September I've been more surprised every day by the projects people are completing with AI.",
      "Scrape common posting sites to see where AI is advancing day to day and week to week.",
      "Look for useful insights to be gleaned from that information."
    ] },
  { id: 4, title: "Tracking People in Power", status: "planned", link: "", description: "", reflection: "",
    ideas: [
      "A live tracker of people in power and their stated intentions and stances.",
      "I spend too much time looking up who said what and when, and who met with whom. An AI could scrape and interpret that as well as I can, so why not build something that does?",
      "It's a prickly topic to build on, so I may not prioritize it."
    ] },
  { id: 5, title: "Decomp / Recomp Project", status: "planned", link: "", description: "", reflection: "",
    ideas: [
      "Take on one of the decompilation/recompilation projects I've been seeing everywhere, where people turn machine code back into a working copy of a game or an app like Photoshop.",
      "It looks like a big threat to the status quo, which makes it a valuable niche to learn."
    ] }
];
