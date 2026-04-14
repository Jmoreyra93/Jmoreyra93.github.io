const STORAGE_KEY = "jm-portfolio-theme";
const root = document.body;
const toggle = document.querySelector("[data-theme-toggle]");
const revealItems = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};

if (toggle) {
  applyTheme(getPreferredTheme());

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
