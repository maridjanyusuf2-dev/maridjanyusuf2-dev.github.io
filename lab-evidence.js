const reportId = new URLSearchParams(location.search).get("lab");
const lab = window.portfolio.labs.find((entry) => entry.id === reportId);
const evidenceByLab = window.labEvidence || {};
const report = Object.hasOwn(evidenceByLab, reportId) ? evidenceByLab[reportId] : undefined;

if (lab && report) {
  document.title = `${lab.title} | Lab Portfolio`;
  document.getElementById("report-title").textContent = lab.title;
  document.getElementById("report-summary").textContent = lab.summary;

  const category = document.getElementById("report-category");
  category.textContent = lab.category;
  category.hidden = false;

  const notes = document.getElementById("report-notes");
  for (const [heading, paragraph] of report.sections) {
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const text = document.createElement("p");
    title.textContent = heading;
    text.textContent = paragraph;
    section.append(title, text);
    notes.append(section);
  }

  const images = document.getElementById("report-images");
  document.getElementById("report-evidence").hidden = report.images.length === 0;
  for (const [filename, description, width, height] of report.images) {
    const figure = document.createElement("figure");
    const caption = document.createElement("figcaption");
    const link = document.createElement("a");
    const image = document.createElement("img");
    link.href = filename;
    link.setAttribute("aria-label", `Open full-size image. ${description}`);
    image.src = filename;
    image.alt = description;
    image.loading = "lazy";
    image.width = width;
    image.height = height;
    link.append(image);
    caption.textContent = description;
    figure.append(link, caption);
    images.append(figure);
  }
}
