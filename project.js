// Project page: shows one project from PROJECTS (projects.js).
// Which one comes from the address, e.g. project.html?id=folio

// 1. Read the id from the address
const id = new URLSearchParams(location.search).get("id");

// 2. Find the project with that id (like list.Find(p => p.Id == id) in C#)
const project = PROJECTS.find((p) => p.id === id);

const main = document.querySelector("#project");

// 3. Show it, or a message if the id is missing or wrong
if (project) {
  document.title = `${project.title} — Valerii Kravchenko`;

  // Optional fields: add `description` (text) and `features` (list) to a project in projects.js
  const description = project.description ? `<p class="project-desc">${project.description}</p>` : "";
  const features = project.features
    ? `<h2 class="project-label">Features</h2><ul class="project-features">${project.features.map((f) => `<li>${f}</li>`).join("")}</ul>`
    : "";

  const tags = project.stack.split(",").map((t) => `<li>${t.trim()}</li>`).join("");

  const links = [
    project.demo ? `<a class="pill-btn" href="${project.demo}" target="_blank" rel="noopener">Live site ↗</a>` : "",
    project.download ? `<a class="pill-btn" href="${project.download}">Download APK ↓</a>` : "",
    project.github ? `<a class="project-btn" href="${project.github}" target="_blank" rel="noopener">Source code ↗</a>` : "",
  ].join("");

  const picture = project.image
    ? `<img src="${project.image}" alt="${project.title} screenshot">`
    : `<span class="emoji">${project.emoji || ""}</span>`;

  main.innerHTML = `
    <div class="container project">
      <a class="project-back" href="index.html#work">← All projects</a>

      <div class="project-head">
        <h1>${project.title}</h1>
        <p class="project-category">${project.category}</p>
        ${project.status ? `<span class="work-badge">${project.status}</span>` : ""}
      </div>

      <div class="work-image project-image" style="--cover:${project.cover}">${picture}</div>

      <div class="project-body glass">
        <div>
          ${description}
          <h2 class="project-label">Tools & features</h2>
          <ul class="project-tags">${tags}</ul>
          ${features}
        </div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </div>
    </div>`;
} else {
  main.innerHTML = `
    <div class="container project project-missing">
      <h1>Project not found</h1>
      <p class="muted">This project does not exist or the link is wrong.</p>
      <a class="pill-btn" href="index.html#work">← See all projects</a>
    </div>`;
}
