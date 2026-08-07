(() => {
  "use strict";

  const DRAW_AT = new Date("2026-08-09T11:00:00-03:00");

  const FIRST_NAMES = [
    "Ana",
    "Bruno",
    "Carla",
    "Diego",
    "Elena",
    "Felipe",
    "Gabriela",
    "Henrique",
    "Isabela",
    "João",
    "Karen",
    "Lucas",
    "Marina",
    "Nicolas",
    "Olivia",
    "Pedro",
    "Queila",
    "Rafael",
    "Sofia",
    "Thiago",
    "Úrsula",
    "Victor",
    "Wendy",
    "Xavier",
    "Yasmin",
    "Zeca",
  ];

  const LAST_NAMES = [
    "Almeida",
    "Barbosa",
    "Costa",
    "Dias",
    "Esteves",
    "Ferreira",
    "Gomes",
    "Hahn",
    "Ibrahim",
    "Junqueira",
    "Klein",
    "Lima",
    "Moura",
    "Nogueira",
    "Oliveira",
    "Pereira",
    "Queiroz",
    "Rocha",
    "Santos",
    "Teixeira",
    "Uchoa",
    "Vieira",
    "Wagner",
    "Xavier",
    "Yamamoto",
    "Zanetti",
  ];

  /** @returns {{ number: number, owner: string }[]} */
  function buildEntries() {
    // Example list 0–299 — replace this array with real owners when ready.
    const entries = [];
    for (let n = 0; n <= 299; n += 1) {
      const first = FIRST_NAMES[n % FIRST_NAMES.length];
      const last = LAST_NAMES[Math.floor(n / FIRST_NAMES.length) % LAST_NAMES.length];
      entries.push({
        number: n,
        owner: `${first} ${last}`,
      });
    }
    return entries;
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function updateCountdown() {
    const root = document.getElementById("countdown");
    const done = document.getElementById("countdown-done");
    if (!root || !done) return;

    const diff = DRAW_AT.getTime() - Date.now();

    if (diff <= 0) {
      root.classList.add("is-done");
      done.hidden = false;
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const map = { days, hours, minutes, seconds };
    for (const [unit, value] of Object.entries(map)) {
      const el = root.querySelector(`[data-unit="${unit}"]`);
      if (el) el.textContent = pad2(value);
    }
  }

  function setupPhotoPlaceholders() {
    document.querySelectorAll(".gallery__frame img").forEach((img) => {
      const frame = img.closest(".gallery__frame");
      if (!frame) return;

      const markEmpty = () => {
        img.classList.add("is-missing");
        frame.classList.add("is-empty");
      };

      img.addEventListener("error", markEmpty, { once: true });

      if (img.complete && img.naturalWidth === 0) {
        markEmpty();
      }
    });
  }

  function renderNumbers(entries) {
    const grid = document.getElementById("numbers-grid");
    const meta = document.getElementById("numbers-meta");
    const search = document.getElementById("numbers-search");
    if (!grid) return;

    const frag = document.createDocumentFragment();

    entries.forEach(({ number, owner }) => {
      const card = document.createElement("article");
      card.className = "number-card";
      card.dataset.number = String(number);
      card.dataset.owner = owner.toLowerCase();

      const numEl = document.createElement("span");
      numEl.className = "number-card__num";
      numEl.textContent = String(number).padStart(3, "0");

      const ownerEl = document.createElement("span");
      ownerEl.className = "number-card__owner";
      ownerEl.textContent = owner;
      ownerEl.title = owner;

      card.append(numEl, ownerEl);
      frag.append(card);
    });

    grid.replaceChildren(frag);

    const applyFilter = () => {
      const q = (search?.value || "").trim().toLowerCase();
      let visible = 0;

      grid.querySelectorAll(".number-card").forEach((card) => {
        const num = card.dataset.number || "";
        const owner = card.dataset.owner || "";
        const padded = num.padStart(3, "0");
        const match =
          !q ||
          num.includes(q) ||
          padded.includes(q) ||
          owner.includes(q);
        card.hidden = !match;
        if (match) visible += 1;
      });

      if (meta) {
        meta.textContent = q
          ? `${visible} de ${entries.length} números`
          : `${entries.length} números`;
      }
    };

    search?.addEventListener("input", applyFilter);
    applyFilter();
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupPhotoPlaceholders();
  renderNumbers(buildEntries());
  setupReveal();
})();
