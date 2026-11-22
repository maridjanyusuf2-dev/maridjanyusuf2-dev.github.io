const portfolio = window.portfolio;
const byId = (id) => document.getElementById(id);
const dateFormat = new Intl.DateTimeFormat(document.documentElement.lang, {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function setLink(link, href, label) {
  if (!href) return;

  try {
    const url = new URL(href, location.href);
    const isWebLink = ["https:", "http:"].includes(url.protocol);
    const isLocalPreview = location.protocol === "file:" && url.protocol === "file:";
    if (!isWebLink && !isLocalPreview) return;
    link.href = url.href;
    link.hidden = false;
    if (label) link.setAttribute("aria-label", label);
  } catch (error) {
    console.warn("Could not load portfolio link", error);
  }
}

function renderLab(lab) {
  const card = byId("lab-template").content.cloneNode(true);
  card.querySelector("h3").textContent = lab.title;
  card.querySelector(".lab-category").textContent = lab.category || "Lab";
  card.querySelector(".summary").textContent = lab.summary;

  const date = new Date(lab.date);
  if (lab.date && !Number.isNaN(date.getTime())) {
    const time = card.querySelector("time");
    time.dateTime = lab.date;
    time.textContent = dateFormat.format(date);
    time.hidden = false;
  }

  if (lab.outcome) {
    const outcome = card.querySelector(".outcome");
    outcome.querySelector("span").textContent = lab.outcome;
    outcome.hidden = false;
  }

  const tools = card.querySelector(".tools");
  for (const tool of lab.tools || []) {
    const item = document.createElement("li");
    item.textContent = tool;
    tools.append(item);
  }
  tools.hidden = !tools.childElementCount;

  setLink(card.querySelector(".writeup"), lab.writeup, `Read write-up for ${lab.title}`);
  const evidence = card.querySelector(".evidence");
  if (Object.hasOwn(window.labEvidence || {}, lab.id)) {
    const title = window.labEvidence[lab.id].images.length ? "View evidence" : "Read lab notes";
    evidence.textContent = title;
    setLink(evidence, `lab-evidence.html?lab=${encodeURIComponent(lab.id)}`, `${title} for ${lab.title}`);
  } else {
    setLink(evidence, lab.evidence, `View evidence for ${lab.title}`);
  }
  return card;
}

function renderArchive(labs) {
  if (!labs.length) return;

  const search = byId("search");
  const category = byId("category");
  const empty = byId("empty");
  const count = byId("count");
  const list = byId("lab-list");
  const categories = [...new Set(labs.map((lab) => lab.category).filter(Boolean))].sort();
  for (const name of categories) category.add(new Option(name, name));
  category.closest(".control").hidden = categories.length < 2;
  byId("filters").hidden = false;
  count.hidden = false;

  function update() {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/);
    const matches = labs.filter((lab) => {
      const text = [lab.title, lab.category, lab.summary, lab.outcome, ...(lab.tools || [])]
        .join(" ")
        .toLocaleLowerCase();
      return (!category.value || category.value === lab.category) && terms.every((term) => text.includes(term));
    });

    list.replaceChildren(...matches.map(renderLab));
    count.textContent = `${matches.length}${matches.length === labs.length ? "" : ` of ${labs.length}`} ${labs.length === 1 ? "lab" : "labs"}`;
    empty.textContent = "No labs match your search or category.";
    empty.hidden = matches.length > 0;
  }

  search.addEventListener("input", update);
  category.addEventListener("change", update);
  update();
}

if (portfolio) {
  if (portfolio.name) {
    byId("owner").textContent = portfolio.name;
    byId("footer-owner").textContent = portfolio.name;
    document.title = `${portfolio.name} | Lab Portfolio`;
  }
  if (portfolio.focus) {
    byId("focus").textContent = portfolio.focus;
    byId("focus").hidden = false;
  }
  if (portfolio.intro) byId("intro").textContent = portfolio.intro;
  setLink(byId("github"), portfolio.github);
  setLink(byId("linkedin"), portfolio.linkedin);
  renderArchive(portfolio.labs || []);
}
