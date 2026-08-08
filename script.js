(() => {
  "use strict";

  const DRAW_AT = new Date("2026-08-09T11:00:00-03:00");

  const RAFFLE_ENTRIES = [
    { number: 0, owner: "Matheus Endo" },
    { number: 1, owner: "Maivê Masera" },
    { number: 2, owner: "Alexandre Zeitune" },
    { number: 3, owner: "Guilherme França" },
    { number: 4, owner: "Marcos A S Carneiro" },
    { number: 5, owner: "Gabriela Felipe" },
    { number: 6, owner: "Roberta Mundim" },
    { number: 7, owner: "Luciana Capuzzo" },
    { number: 8, owner: "Roberta Mundim" },
    { number: 9, owner: "Rodrigo e Lara" },
    { number: 10, owner: "Roberta Mundim" },
    { number: 11, owner: "Maivê Masera" },
    { number: 12, owner: "Glauco Martins" },
    { number: 13, owner: "Alisson Quintanilha" },
    { number: 14, owner: "Rodrigo e Lara" },
    { number: 15, owner: "Elyn Navia" },
    { number: 16, owner: "Rodrigo e Lara" },
    { number: 17, owner: "Letícia Mundim" },
    { number: 18, owner: "Rodrigo e Lara" },
    { number: 19, owner: "Elyn Navia" },
    { number: 20, owner: "Karina Silva bambini" },
    { number: 21, owner: "Neide Mundim" },
    { number: 22, owner: "Lucy Mary Rocha" },
    { number: 23, owner: "Rafael de Melo Souza Cruz" },
    { number: 24, owner: "Rafael de Melo Souza Cruz" },
    { number: 25, owner: "Rodrigo e Lara" },
    { number: 26, owner: "Régis Humberto" },
    { number: 27, owner: "Luciana Capuzzo" },
    { number: 28, owner: "João Vitor Masera" },
    { number: 29, owner: "Luciana Capuzzo" },
    { number: 30, owner: "Regis Humberto" },
    { number: 31, owner: "Rafael de Melo Souza Cruz" },
    { number: 32, owner: "Rodrigo e Lara" },
    { number: 33, owner: "Luciana Capuzzo" },
    { number: 34, owner: "Rafael de Melo Souza Cruz" },
    { number: 35, owner: "Maivê Masera" },
    { number: 36, owner: "Thayne Lopes de Faria" },
    { number: 37, owner: "Leonardo Cavalcante da Silva" },
    { number: 38, owner: "Rafaela Condori Araujo" },
    { number: 39, owner: "Rafaela Condori Araujo" },
    { number: 40, owner: "Guilherme França" },
    { number: 41, owner: "Matheus Bittencourt" },
    { number: 42, owner: "Bruna Dos Santos Bezerra" },
    { number: 43, owner: "Romulo Lins" },
    { number: 44, owner: "Rafaela Calado" },
    { number: 45, owner: "Carolina Rodovalho da Silva Bento" },
    { number: 46, owner: "Mary Luce Barbosa da Silva" },
    { number: 47, owner: "Alex Capuzzo" },
    { number: 48, owner: "Alex Capuzzo" },
    { number: 49, owner: "Alex Capuzzo" },
    { number: 50, owner: "Danielle Tokarski" },
    { number: 51, owner: "Alex Capuzzo" },
    { number: 52, owner: "Luiz Felipe Marques" },
    { number: 53, owner: "Leidiene Cristina" },
    { number: 54, owner: "Cristiane Masera" },
    { number: 55, owner: "Acrizio de Moura" },
    { number: 56, owner: "Maivê Masera" },
    { number: 57, owner: "Leidiene Cristina" },
    { number: 58, owner: "Camila Masera" },
    { number: 59, owner: "Camila Masera" },
    { number: 60, owner: "Camila Masera" },
    { number: 61, owner: "Milena Alves Gomes" },
    { number: 62, owner: "Matheus Bittencourt" },
    { number: 63, owner: "Kelly Dias Botelho" },
    { number: 64, owner: "Kelly Dias Botelho" },
    { number: 65, owner: "Bianca Alves Gomes" },
    { number: 66, owner: "Rodrigo e Lara" },
    { number: 67, owner: "Marcos André" },
    { number: 68, owner: "Gustavo Tokarski" },
    { number: 69, owner: "Rodrigo e Lara" },
    { number: 70, owner: "Roberta Correa Sousa" },
    { number: 71, owner: "Felipe Breno" },
    { number: 72, owner: "Lucy Mary Rocha" },
    { number: 73, owner: "Felipe Breno" },
    { number: 74, owner: "Anna L Z L Albuquerque" },
    { number: 75, owner: "Anna L Z L Albuquerque" },
    { number: 76, owner: "Lorena Sales Rocha" },
    { number: 77, owner: "Lorena Sales Rocha" },
    { number: 78, owner: "Maivê Masera" },
    { number: 79, owner: "Tatiana Cavalcanti" },
    { number: 80, owner: "Eduarda Lins Batista" },
    { number: 81, owner: "Eduarda Lins Batista" },
    { number: 82, owner: "Michele Barbosa" },
    { number: 83, owner: "Roberta Mundim" },
    { number: 84, owner: "Michele Barbosa" },
    { number: 85, owner: "Flavinha C R Almeida" },
    { number: 86, owner: "Izabela R S Lima" },
    { number: 87, owner: "Daniela Garcia" },
    { number: 88, owner: "Fernanda e Sergio" },
    { number: 89, owner: "Fernanda e Sergio" },
    { number: 90, owner: "Ricardo Masera" },
    { number: 91, owner: "Ricardo Masera" },
    { number: 92, owner: "Ricardo Masera" },
    { number: 93, owner: "Ricardo Masera" },
    { number: 94, owner: "Thais Mesquita" },
    { number: 95, owner: "Thais Mesquita" },
    { number: 96, owner: "Wendel Lelis Chagas Brito" },
    { number: 97, owner: "Diego Rodrigues da Silva" },
    { number: 98, owner: "Bruno Soares Santos" },
    { number: 99, owner: "Matheus Bittencourt" },
    { number: 100, owner: "Eduardo Gomes Moreira" },
    { number: 101, owner: "Eduardo Gomes Moreira" },
    { number: 102, owner: "Bruno Soares Santos" },
    { number: 103, owner: "Barbara Pires Irineu Holanda" },
    { number: 104, owner: "João Vitor Masera" },
    { number: 105, owner: "Flavio Bonini Campos" },
    { number: 106, owner: "Wenderson Alexandre" },
    { number: 107, owner: "Wenderson Alexandre" },
    { number: 108, owner: "Alexandre Maia Carvalheira" },
    { number: 109, owner: "Alexandre Maia Carvalheira" },
    { number: 110, owner: "Alexandre Lemos" },
    { number: 111, owner: "Alexandre Lemos" },
    { number: 112, owner: "Alessandra Camargo" },
    { number: 113, owner: "Alessandra Camargo" },
    { number: 114, owner: "Maivê Masera" },
    { number: 115, owner: "Joaquim Trindade" },
    { number: 116, owner: "Denise Masera" },
    { number: 117, owner: "Maivê Masera" },
    { number: 118, owner: "Igor Crossfit" },
    { number: 119, owner: "Magno Junior" },
    { number: 120, owner: "Magno Junior" },
    { number: 121, owner: "Artur Hugo" },
    { number: 122, owner: "Dani Billy" },
    { number: 123, owner: "Thatiana M Sanches" },
    { number: 124, owner: "Thatiana M Sanches" },
    { number: 125, owner: "Thatiana M Sanches" },
    { number: 126, owner: "Thatiana M Sanches" },
    { number: 127, owner: "Cristiane Matos da Costa" },
    { number: 128, owner: "Barbara Cicuto" },
    { number: 129, owner: "Barbara Cicuto" },
    { number: 130, owner: "Norton Masera" },
    { number: 131, owner: "Julie Marie F Vittone" },
    { number: 132, owner: "Matheus Bittencourt" },
    { number: 133, owner: "Gustavo Tokarski" },
    { number: 134, owner: "Marco Aurelio Rodovalho" },
    { number: 135, owner: "Maivê Masera" },
    { number: 136, owner: "Thiago Lagares" },
    { number: 137, owner: "Thiago Lagares" },
    { number: 138, owner: "Thiago Lagares" },
    { number: 139, owner: "Thiago Lagares" },
    { number: 140, owner: "Thiago Lagares" },
    { number: 141, owner: "Thiago Lagares" },
    { number: 142, owner: "Thiago Lagares" },
    { number: 143, owner: "Thiago Lagares" },
    { number: 144, owner: "Thiago Lagares" },
    { number: 145, owner: "Thiago Lagares" },
    { number: 146, owner: "Cristiano Godoy" },
    { number: 147, owner: "Cristiano Godoy" },
    { number: 148, owner: "Kelly Pereira Galvao" },
    { number: 149, owner: "Gustavo Tokarski" },
    { number: 150, owner: "Fernanda Navia" },
    { number: 151, owner: "Fernanda Navia" },
    { number: 152, owner: "Fernanda Navia" },
    { number: 153, owner: "Fernanda Navia" },
    { number: 154, owner: "Fernanda Navia" },
    { number: 155, owner: "Régis Humberto" },
    { number: 156, owner: "Regis Humberto" },
    { number: 157, owner: "Fernanda Navia" },
    { number: 158, owner: "Fernanda Navia" },
    { number: 159, owner: "Fernanda Navia" },
    { number: 160, owner: "Fernanda Navia" },
    { number: 161, owner: "Raquel de Farias Pena" },
    { number: 162, owner: "Fernanda Navia" },
    { number: 163, owner: "Fernanda Navia" },
    { number: 164, owner: "Régis Humberto" },
    { number: 165, owner: "Fernanda Navia" },
    { number: 166, owner: "Fernanda Navia" },
    { number: 167, owner: "Fernanda Navia" },
    { number: 168, owner: "Rafael Barroso" },
    { number: 169, owner: "Fernanda Navia" },
    { number: 170, owner: "Fernanda Navia" },
    { number: 171, owner: "Amauri José de Araújo" },
    { number: 172, owner: "Fernanda Navia" },
    { number: 173, owner: "Fernanda Navia" },
    { number: 174, owner: "Fernanda Navia" },
    { number: 175, owner: "Fernanda Navia" },
    { number: 176, owner: "Fernanda Navia" },
    { number: 177, owner: "Fernanda Navia" },
    { number: 178, owner: "Fernanda Navia" },
    { number: 179, owner: "Fernanda Navia" },
    { number: 180, owner: "Fernanda Navia" },
    { number: 181, owner: "Fernanda Navia" },
    { number: 182, owner: "Fernanda Navia" },
    { number: 183, owner: "Fernanda Navia" },
    { number: 184, owner: "Fernanda Navia" },
    { number: 185, owner: "Fernanda Navia" },
    { number: 186, owner: "Fernanda Navia" },
    { number: 187, owner: "Fernanda Navia" },
    { number: 188, owner: "Fernanda Navia" },
    { number: 189, owner: "Fernanda Navia" },
    { number: 190, owner: "Fernanda Navia" },
    { number: 191, owner: "Gustavo Tokarski" },
    { number: 192, owner: "Fernanda Navia" },
    { number: 193, owner: "Fernanda Navia" },
    { number: 194, owner: "Fernanda Navia" },
    { number: 195, owner: "Fernanda Navia" },
    { number: 196, owner: "Fernanda Navia" },
    { number: 197, owner: "Romulo Lins" },
    { number: 198, owner: "Maivê Masera" },
    { number: 199, owner: "Maivê Masera" },
    { number: 200, owner: "Matheus Endo" },
    { number: 201, owner: "Matheus Endo" },
    { number: 202, owner: "Matheus Endo" },
    { number: 203, owner: "Rosa De Belem" },
    { number: 204, owner: "Rosa De Belem" },
    { number: 205, owner: "Rosa De Belem" },
    { number: 206, owner: "Rosa De Belem" },
    { number: 207, owner: "Denise Navia" },
    { number: 208, owner: "Denise Navia" },
    { number: 209, owner: "Denise Navia" },
    { number: 210, owner: "Francisca Melo Sinhá" },
    { number: 211, owner: "Fernanda Horne" },
    { number: 212, owner: "Fernanda Horne" },
    { number: 213, owner: "Fernanda Horne" },
    { number: 214, owner: "Fernanda Horne" },
    { number: 215, owner: "Maria José Santos Alves" },
    { number: 216, owner: "Fabiana Cristina de Sousa" },
    { number: 217, owner: "Fabiana Cristina de Sousa" },
    { number: 218, owner: "Carolina Kozue" },
    { number: 219, owner: "Carolina Kozue" },
    { number: 220, owner: "André Luiz Freitas" },
    { number: 221, owner: "André Luiz Freitas" },
    { number: 222, owner: "André Luiz Freitas" },
    { number: 223, owner: "André Luiz Freitas" },
    { number: 224, owner: "Otávio Frederico Francisco de Brito" },
    { number: 225, owner: "Otávio Frederico Francisco de Brito" },
    { number: 226, owner: "Otávio Frederico Francisco de Brito" },
    { number: 227, owner: "Dagoberto Faria Gomes" },
    { number: 228, owner: "Dagoberto Faria Gomes" },
    { number: 229, owner: "Adriana Alves Santana" },
    { number: 230, owner: "Tamara S Menuzzi" },
    { number: 231, owner: "Regiane Mundim" },
    { number: 232, owner: "Regiane Mundim" },
    { number: 233, owner: "Regiane Mundim" },
    { number: 234, owner: "Regiane Mundim" },
  ];

  /** @returns {{ number: number, owner: string }[]} */
  function buildEntries() {
    return RAFFLE_ENTRIES;
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
