// ============================================================
//  EDIT YOUR DATA HERE
// ============================================================
const CONFIG = {
  githubUser: "VK675",
  github: "https://github.com/VK675",
  email: "valeriikravchenko6@gmail.com",
  whatsapp: "", // country code + number, digits only — empty = hidden
};

const WHAT_I_DO = [
  {
    title: "FRONTEND",
    sub: "Websites & interfaces",
    desc: "Responsive, animated and accessible websites built with clean HTML, modern CSS and vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Animations"],
  },
  {
    title: "BACKEND",
    sub: "Servers & databases",
    desc: "APIs and server logic with Node.js, authentication and Postgres databases with Supabase, deployed on Vercel.",
    tags: ["Node.js", "Supabase", "REST APIs", "Vercel", "Git"],
  },
  {
    title: "DESKTOP & MOBILE",
    sub: "Apps beyond the browser",
    desc: "Windows desktop apps with C# and Windows Forms, and my first Android apps with Kotlin and Firebase.",
    tags: ["C#", "WinForms", ".NET", "Kotlin", "Firebase"],
  },
];

const CAREER = [
  {
    role: "Full Stack Projects",
    place: "Self-learning",
    year: "NOW",
    desc: "Building my own web apps with JavaScript, Node.js and Supabase, shipping them on Vercel and keeping everything on GitHub.",
  },
  {
    role: "PSI Student",
    place: "ESCO, Torres Vedras",
    year: "2025",
    desc: "Computer Systems Programming course at Escola de Comércio e Serviços do Oeste — C#, Windows Forms, databases, web and mobile development.",
  },
  {
    role: "First lines of code",
    place: "The beginning",
    year: "START",
    desc: "Got curious about how websites and apps actually work — opened a code editor and never stopped.",
  },
];

// `image` shows a screenshot, otherwise the emoji on the gradient cover.
// `status` adds a small badge (e.g. "In progress", "Private repo").
const PROJECTS = [
  {
    title: "Sunny",
    category: "Solar panel sizing platform",
    stack: "JavaScript, Supabase, PostgreSQL, Vercel",
    image: "img/sunny.jpg",
    cover: "linear-gradient(135deg, #5a3a0a, #0e5a6e)",
    github: "https://github.com/VK675/Sunny",
    demo: "https://sunny06.vercel.app/",
  },
  {
    title: "EscoTech",
    category: "Android app for my school",
    stack: "Kotlin, Firebase, Android",
    emoji: "📱",
    cover: "linear-gradient(135deg, #3b1a6b, #0e5a6e)",
    status: "Private repo",
    github: "",
    demo: "",
  },
  {
    title: "EU Explorer",
    category: "Interactive 3D globe of the EU — facts, culture & quiz",
    stack: "React, Three.js, WebGL",
    image: "img/europe-explorer.png",
    cover: "linear-gradient(135deg, #10306b, #1a1440)",
    github: "https://github.com/VK675/EUProject",
    demo: "https://euproject67.netlify.app/",
  },
  {
    title: "Yummly",
    category: "Recipe app",
    stack: "C#, WinForms, SQLite",
    image: "img/yummly.jpg",
    emoji: "🍜",
    cover: "linear-gradient(135deg, #6b3a10, #4a1a5e)",
    status: "In progress",
    github: "https://github.com/VK675/Yummly",
    demo: "",
  },
];

// Icons: devicon (https://devicon.dev), self-hosted in /icons — `icon` is the file name without .svg.
// `invert: true` for black logos so they show on the dark background.
// The pyramid is built bottom-up: tiers[0] is the base.
const PYRAMID = [
  { tier: "Languages & tools", items: [
    { name: "HTML", icon: "html5-original", url: "https://developer.mozilla.org/docs/Web/HTML", color: "#e34f26" },
    { name: "CSS", icon: "css3-original", url: "https://developer.mozilla.org/docs/Web/CSS", color: "#1572b6" },
    { name: "JavaScript", icon: "javascript-original", url: "https://developer.mozilla.org/docs/Web/JavaScript", color: "#f7df1e" },
    { name: "C#", icon: "csharp-original", url: "https://learn.microsoft.com/dotnet/csharp/", color: "#9b4f96" },
    { name: "Kotlin", icon: "kotlin-original", url: "https://kotlinlang.org", color: "#7f52ff" },
    { name: "Git", icon: "git-original", url: "https://git-scm.com", color: "#f05032" },
    { name: "GitHub", icon: "github-original", url: "https://github.com/VK675", color: "#eae5ec", invert: true },
  ] },
  { tier: "Frameworks & data", items: [
    { name: "React", icon: "react-original", url: "https://react.dev", color: "#61dafb" },
    { name: "Three.js", icon: "threejs-original", url: "https://threejs.org", color: "#eae5ec", invert: true },
    { name: "Node.js", icon: "nodejs-original", url: "https://nodejs.org", color: "#5fa04e" },
    { name: ".NET", icon: "dot-net-original", url: "https://dotnet.microsoft.com", color: "#512bd4" },
    { name: "PostgreSQL", icon: "postgresql-original", url: "https://www.postgresql.org", color: "#4169e1" },
  ] },
  { tier: "Mobile & cloud", items: [
    { name: "Android", icon: "android-original", url: "https://developer.android.com", color: "#3ddc84" },
    { name: "Firebase", icon: "firebase-original", url: "https://firebase.google.com", color: "#ffca28" },
    { name: "Supabase", icon: "supabase-original", url: "https://supabase.com", color: "#3ecf8e" },
  ] },
  { tier: "Deploy", items: [
    { name: "Vercel", icon: "vercel-original", url: "https://vercel.com", color: "#eae5ec", invert: true },
  ] },
];
const ICON_DIR = "icons/";

const SOFT_SKILLS = [
  {
    title: "Adaptability",
    emoji: "🧭",
    desc: "I moved to Portugal knowing zero Portuguese and zero English. Today I study, code and work in both.",
    proof: "0 → B1-B2 Portuguese · 0 → B1 English",
  },
  {
    title: "Fast learner",
    emoji: "⚡",
    desc: "New language, new framework, new platform — I pick things up quickly and learn by building real projects.",
    proof: "Web, desktop (C#) and Android apps",
  },
  {
    title: "Teamwork",
    emoji: "🤝",
    desc: "I work well in a team: I share ideas, listen to feedback and help classmates when they get stuck.",
    proof: "Group projects at ESCO",
  },
];

// level: 0–100, drives the bar width.
const LANGUAGES = [
  { name: "Ukrainian", code: "UK", level: 100, label: "Native" },
  { name: "Russian", code: "RU", level: 100, label: "Native" },
  { name: "Romanian", code: "RO", level: 100, label: "Native" },
  { name: "Portuguese", code: "PT", level: 70, label: "B1–B2" },
  { name: "English", code: "EN", level: 60, label: "B1" },
];

// ============================================================
//  RENDER
// ============================================================
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.35-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.66L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
};

const SOCIALS = [
  { key: "github", label: "GitHub", href: CONFIG.github, on: CONFIG.github },
  { key: "whatsapp", label: "WhatsApp", href: `https://wa.me/${CONFIG.whatsapp}`, on: CONFIG.whatsapp },
  { key: "email", label: "Email", href: `mailto:${CONFIG.email}`, on: CONFIG.email },
].filter((s) => s.on);

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

$("#year").textContent = new Date().getFullYear();
$$("[data-email]").forEach((a) => { a.href = `mailto:${CONFIG.email}`; a.textContent = CONFIG.email; });
$$("[data-github]").forEach((a) => { a.href = CONFIG.github; });


$("#socials").innerHTML = SOCIALS.map((s) =>
  `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${ICONS[s.key]}</a>`).join("");
$("#contact-socials").innerHTML = SOCIALS.filter((s) => s.key !== "email").map((s) =>
  `<a href="${s.href}" target="_blank" rel="noopener">${s.label} ↗</a>`).join("");

$("#what-boxes").innerHTML = WHAT_I_DO.map((w, i) => `
  <div class="what-box${i === 0 ? " active" : ""}">
    <div class="what-head">
      <div><h3>${w.title}</h3><h4>${w.sub}</h4></div>
      <span class="what-arrow">↓</span>
    </div>
    <div class="what-body"><div>
      <p>${w.desc}</p>
      <div class="what-tags">${w.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div></div>
  </div>`).join("");

$("#career-list").innerHTML = CAREER.map((c) => `
  <div class="career-item">
    <div class="career-left">
      <div><h4>${c.role}</h4><h5>${c.place}</h5></div>
      <span class="year">${c.year}</span>
    </div>
    <p>${c.desc}</p>
  </div>`).join("");

$("#work-track").innerHTML = PROJECTS.map((p, i) => `
  <article class="work-box">
    <div class="work-info">
      <span class="work-num">${String(i + 1).padStart(2, "0")}</span>
      <div><h3>${p.title}</h3><h5>${p.category}</h5>${p.status ? `<span class="work-badge">${p.status}</span>` : ""}</div>
    </div>
    <div>
      <p class="work-tools">Tools & features</p>
      <p class="work-stack">${p.stack}</p>
    </div>
    <div class="work-image" style="--cover:${p.cover}">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : `<span class="emoji">${p.emoji}</span>`}
      <div class="work-links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Code ↗</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live ↗</a>` : ""}
      </div>
    </div>
  </article>`).join("") + `
  <article class="work-box work-cta">
    <h3>Want to see<br>more?</h3>
    <p>Explore all of my projects and experiments.</p>
    <a class="pill-btn" href="${CONFIG.github}" target="_blank" rel="noopener">See all on GitHub →</a>
  </article>`;

// Skills: pyramid (top tier rendered first)
const icon = (t) => `<img src="${ICON_DIR}${t.icon}.svg" alt="" width="34" height="34" loading="lazy"${t.invert ? ' class="invert"' : ""}>`;
let delay = 0;
$("#pyramid").innerHTML = [...PYRAMID].reverse().map((row) => `
  <div class="pyr-row">
    <span class="pyr-tier">${row.tier}</span>
    <div class="pyr-items">${row.items.map((t) => `
      <a class="pyr-tile" href="${t.url}" target="_blank" rel="noopener" title="${t.name}" style="--c:${t.color};transition-delay:${(delay++) * 45}ms">${icon(t)}<span>${t.name}</span></a>`).join("")}
    </div>
  </div>`).join("");

$("#soft-grid").innerHTML = SOFT_SKILLS.map((k) => `
  <article class="soft-card">
    <span class="soft-emoji">${k.emoji}</span>
    <h3>${k.title}</h3>
    <p>${k.desc}</p>
    <span class="soft-proof">${k.proof}</span>
  </article>`).join("");

$("#lang-list").innerHTML = LANGUAGES.map((l) => `
  <div class="lang-row">
    <span class="lang-code">${l.code}</span>
    <div class="lang-main">
      <div class="lang-head"><b>${l.name}</b><span>${l.label}</span></div>
      <div class="lang-bar"><i style="--w:${l.level}%"></i></div>
    </div>
  </div>`).join("");

// Skills tabs
const tabs = $$(".skill-tabs [role=tab]");
tabs.forEach((tab) => tab.addEventListener("click", () => {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", on);
    const panel = $("#" + t.getAttribute("aria-controls"));
    panel.hidden = !on;
    if (on) requestAnimationFrame(() => panel.classList.add("in"));
    else panel.classList.remove("in");
  });
}));


// ============================================================
//  EFFECTS
// ============================================================
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;

// ---------- Custom cursor ----------
if (finePointer && !reduceMotion) {
  const cursor = $(".cursor");
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
  (function loop() {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    cursor.classList.toggle("big", !!e.target.closest("a, button, .what-box, .work-box, .pyr-tile, .soft-card, .id-card"));
  });
} else {
  $(".cursor").remove();
}

// ---------- Split text into words ----------
$$(".split, .split-chars").forEach((el) => {
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(" "); return; }
          const w = document.createElement("span");
          w.className = "w";
          w.innerHTML = `<i>${part}</i>`;
          frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== "BR") {
        walk(child);
      }
    });
  };
  walk(el);
  el.querySelectorAll(".w > i").forEach((w, i) => { w.style.transitionDelay = `${i * 40}ms`; });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
  });
}, { threshold: 0.2 });
$$(".split, .split-chars, .skill-panel:not([hidden])").forEach((el) => {
  if (!el.closest(".landing")) io.observe(el);
});

// ---------- What I do accordion ----------
$$(".what-box").forEach((box) => {
  box.addEventListener("click", () => {
    $$(".what-box").forEach((b) => b.classList.toggle("active", b === box && !b.classList.contains("active")));
  });
});

// ---------- Scroll-driven effects ----------
const careerWrap = $(".career-wrap");
const careerLine = $(".career-line");
const work = $("#work");
const workTrack = $("#work-track");
const isDesktop = () => matchMedia("(min-width: 901px)").matches;

function sizeWork() {
  if (!isDesktop()) { work.style.height = ""; return; }
  const extra = workTrack.scrollWidth - innerWidth + innerWidth * 0.1;
  work.style.height = `${innerHeight + Math.max(0, extra)}px`;
}

function onScroll() {
  const vh = innerHeight;

  // Career: glowing line grows
  const c = careerWrap.getBoundingClientRect();
  const cp = Math.min(1, Math.max(0, (vh * 0.6 - c.top) / c.height));
  careerLine.style.height = `${cp * (c.height + 40)}px`;

  // Work: horizontal scroll
  if (isDesktop()) {
    const w = work.getBoundingClientRect();
    const max = work.offsetHeight - vh;
    const p = Math.min(1, Math.max(0, -w.top / max));
    const dist = workTrack.scrollWidth - innerWidth + innerWidth * 0.1;
    workTrack.style.transform = `translateX(${-p * Math.max(0, dist)}px)`;
  }
}

addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", () => { sizeWork(); onScroll(); });
addEventListener("load", () => { sizeWork(); onScroll(); });
sizeWork();
onScroll();

// ---------- ID card tilt ----------
(function idCard() {
  const card = $("#id-card");
  if (!finePointer || reduceMotion) return;
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 18}deg`);
    card.style.setProperty("--sx", `${x * 100}%`);
    card.style.setProperty("--sy", `${y * 100}%`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
})();
