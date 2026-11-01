// ============================================================
//  EDIT YOUR DATA HERE
// ============================================================
const CONFIG = {
  github: "https://github.com/VK675",
  email: "valeriikravchenko6@gmail.com",
};

// `image` shows a screenshot, otherwise `emoji` is shown.
// `status` adds a small badge (e.g. "In progress", "Private repo").
const PROJECTS = [
  {
    title: "Sunny",
    desc: "Solar panel sizing platform",
    stack: "JavaScript · Supabase · PostgreSQL · Vercel",
    image: "img/sunny.jpg",
    github: "https://github.com/VK675/Sunny",
    demo: "https://sunny06.vercel.app/",
  },
  {
    title: "EU Explorer",
    desc: "Interactive 3D globe of the EU — facts, culture and a quiz",
    stack: "React · Three.js · WebGL",
    image: "img/europe-explorer.png",
    github: "https://github.com/VK675/EUProject",
    demo: "https://euproject67.netlify.app/",
  },
  {
    title: "EscoTech",
    desc: "Android app for my school",
    stack: "Kotlin · Firebase · Android",
    emoji: "📱",
    status: "Private repo",
  },
  {
    title: "PiPiLaBu",
    desc: "English learning desktop app for kids",
    stack: "Electron · JavaScript · Ollama",
    image: "img/Pipilabu.png",
    status: "In progress",
    github: "https://github.com/VK675/PiPiLaBu",
  },
  {
    title: "Yummly",
    desc: "Recipe app",
    stack: "C# · WinForms · SQLite",
    image: "img/yummly.jpg",
    status: "In progress",
    github: "https://github.com/VK675/Yummly",
  },
];

const WHAT_I_DO = [
  { title: "Frontend", desc: "Responsive, accessible websites with HTML, CSS and vanilla JavaScript." },
  { title: "Backend", desc: "APIs with Node.js, auth and Postgres databases with Supabase, deployed on Vercel." },
  { title: "Desktop & mobile", desc: "Windows apps with C# and WinForms, Android apps with Kotlin and Firebase." },
];

const CAREER = [
  {
    year: "Now",
    role: "Full stack projects",
    place: "Self-learning",
    desc: "Building my own web apps with JavaScript, Node.js and Supabase, shipping them on Vercel.",
  },
  {
    year: "2025",
    role: "PSI student",
    place: "ESCO, Torres Vedras",
    desc: "Computer Systems Programming — C#, databases, web and mobile development.",
  },
  {
    year: "Start",
    role: "First lines of code",
    place: "The beginning",
    desc: "Got curious about how websites and apps work, opened a code editor and never stopped.",
  },
];

// Icons are self-hosted in /icons (from devicon.dev) — `icon` is the file name without .svg.
const TECH = [
  { group: "Languages", items: [
    ["HTML", "html5-original"], ["CSS", "css3-original"], ["JavaScript", "javascript-original"],
    ["C#", "csharp-original"], ["Kotlin", "kotlin-original"],
  ] },
  { group: "Frameworks & data", items: [
    ["React", "react-original"], ["Three.js", "threejs-original"], ["Node.js", "nodejs-original"],
    [".NET", "dot-net-original"], ["PostgreSQL", "postgresql-original"],
  ] },
  { group: "Tools & cloud", items: [
    ["Git", "git-original"], ["GitHub", "github-original"], ["Android", "android-original"],
    ["Firebase", "firebase-original"], ["Supabase", "supabase-original"], ["Vercel", "vercel-original"],
  ] },
];

const SOFT_SKILLS = [
  { title: "Adaptability", desc: "Moved to Portugal with zero Portuguese and zero English — now I study and code in both." },
  { title: "Fast learner", desc: "I learn new languages and frameworks by building real projects." },
  { title: "Teamwork", desc: "I share ideas, take feedback and help classmates when they get stuck." },
];

const LANGUAGES = [
  ["Ukrainian", "Native"],
  ["Russian", "Native"],
  ["Romanian", "Native"],
  ["Portuguese", "B1–B2"],
  ["English", "B1"],
];

// ============================================================
//  RENDER
// ============================================================
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

$("#year").textContent = new Date().getFullYear();
$$("[data-email]").forEach((a) => { a.href = `mailto:${CONFIG.email}`; a.textContent = CONFIG.email; });
$$("[data-github]").forEach((a) => { a.href = CONFIG.github; });

$("#projects").innerHTML = PROJECTS.map((p) => `
  <article class="project">
    <div class="project-img">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : `<span>${p.emoji}</span>`}
    </div>
    <div class="project-body">
      <div class="project-head">
        <h3>${p.title}</h3>
        ${p.status ? `<span class="badge">${p.status}</span>` : ""}
      </div>
      <p class="project-desc">${p.desc}</p>
      <p class="project-stack">${p.stack}</p>
      <div class="project-links">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live ↗</a>` : ""}
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Code ↗</a>` : ""}
      </div>
    </div>
  </article>`).join("");

$("#what").innerHTML = WHAT_I_DO.map((w) => `
  <div class="what-item"><h4>${w.title}</h4><p>${w.desc}</p></div>`).join("");

$("#timeline").innerHTML = CAREER.map((c) => `
  <li>
    <span class="year">${c.year}</span>
    <div><h4>${c.role}</h4><span class="place">${c.place}</span><p>${c.desc}</p></div>
  </li>`).join("");

$("#tech").innerHTML = TECH.map((g) => `
  <div class="tech-group">
    <h4>${g.group}</h4>
    <div class="chips">${g.items.map(([name, icon]) =>
      `<span class="chip"><img src="icons/${icon}.svg" alt="" loading="lazy">${name}</span>`).join("")}
    </div>
  </div>`).join("");

$("#soft").innerHTML = SOFT_SKILLS.map((s) => `<li><b>${s.title}</b><span>${s.desc}</span></li>`).join("");
$("#langs").innerHTML = LANGUAGES.map(([name, level]) => `<li>${name}<span>${level}</span></li>`).join("");
