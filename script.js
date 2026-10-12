// Renders the cards in artifacts.js into #grid.
(function () {
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Only allow http(s) or relative links in href.
  const safeUrl = u => /^(https?:\/\/|\.{0,2}\/|[\w-]+(\.html)?$)/i.test(u || "") ? esc(u) : "#";

  const badge = a => a.status === "complete"
    ? '<span class="badge done">Complete</span>'
    : '<span class="badge plan">Planned</span>';

  const top = a => `<div class="top"><span class="num">Artifact ${esc(a.id)}</span>${badge(a)}</div>`;

  const viewBtn = a => a.link ? `<a class="btn" href="${safeUrl(a.link)}">View artifact</a>` : "";

  function featureCard(a) {
    return `
      <article class="card feature">
        ${top(a)}
        <h3>${esc(a.title)}</h3>
        <div class="cols">
          <div><p class="label">What it is</p><p>${esc(a.description)}</p></div>
          <div><p class="label">Reflection</p><p>${esc(a.reflection)}</p></div>
        </div>
        ${a.link ? `<div class="foot">${viewBtn(a)}</div>` : ""}
      </article>`;
  }

  function plannedCard(a) {
    const ideas = (a.ideas || []).length
      ? `<div><p class="label">Ideas</p><ul class="ideas">${a.ideas.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`
      : "";
    const desc = a.description ? `<p>${esc(a.description)}</p>` : "";
    const refl = a.reflection ? `<div><p class="label">Reflection</p><p>${esc(a.reflection)}</p></div>` : "";
    const foot = (a.link || a.reflection)
      ? (a.link ? `<div class="foot">${viewBtn(a)}</div>` : "")
      : '<div class="foot"><span class="slot">Link and reflection added when finished</span></div>';
    return `
      <article class="card">
        ${top(a)}
        <h3>${esc(a.title)}</h3>
        ${desc}${ideas}${refl}
        ${foot}
      </article>`;
  }

  document.getElementById("grid").innerHTML = ARTIFACTS
    .map(a => a.status === "complete" ? featureCard(a) : plannedCard(a))
    .join("");
})();
