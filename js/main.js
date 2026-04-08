(function () {
  "use strict";

  var THEME_KEY = "jm-portfolio-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      applyTheme(stored === "light" ? "light" : "dark");
      return;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      applyTheme("light");
    }
  }

  function toggleTheme() {
    var isLight = document.documentElement.getAttribute("data-theme") === "light";
    var next = isLight ? "dark" : "light";
    applyTheme(next);
    setStoredTheme(next);
  }

  function initHeader() {
    var header = document.querySelector("[data-header]");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }

    function open() {
      toggle.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) close();
      else open();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) close();
    });
  }

  function initReveal() {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length || !("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach(function (el) {
      io.observe(el);
    });
  }

  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initThemeToggle() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.addEventListener("click", toggleTheme);
  }

  function initModal() {
    var modal = document.querySelector("[data-modal]");
    if (!modal) return;

    function openModal() {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }

    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    document.querySelectorAll("[data-placeholder-demo]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  initTheme();
  document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initNav();
    initReveal();
    initYear();
    initThemeToggle();
    initModal();
  });
})();
