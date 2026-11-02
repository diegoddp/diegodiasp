// Mobile menu toggle + active section highlight in the sidebar.
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".menu-toggle");
const links = [...document.querySelectorAll(".sidebar nav a")];

toggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.forEach((a) => a.addEventListener("click", () => {
  sidebar.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => s && observer.observe(s));
