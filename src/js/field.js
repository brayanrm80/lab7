import { COURSE } from './data.js';

const POSITIONS = {
  GK: { left: 50, top: 90 },
  CB: { left: 40, top: 70 },
  LB: { left: 20, top: 70 },
  RB: { left: 80, top: 70 },
  CM: { left: 50, top: 50 },
  LW: { left: 20, top: 20 },
  ST: { left: 50, top: 15 },
  RW: { left: 80, top: 20 },
};

const ALL_TOPICS = COURSE.phases.flatMap(p =>
  p.topics.map(t => ({ ...t, phaseName: p.name }))
);

export function buildField() {
  const field = document.getElementById("field");

  ALL_TOPICS.forEach(topic => {
    const pos = POSITIONS[topic.pos];
    if (!pos) return;

    const card = document.createElement("player-card");

    card.setAttribute("name", topic.name);
    card.setAttribute("rating", topic.rating);
    card.setAttribute("position", topic.pos);

    card.style.position = "absolute";
    card.style.left = pos.left + "%";
    card.style.top = pos.top + "%";

    card.addEventListener("click", () => selectTopic(topic));

    field.appendChild(card);
  });
}

function selectTopic(topic) {
  const view = document.getElementById("topic-view");
  const welcome = document.getElementById("welcome-screen");

  welcome.style.display = "none";
  view.style.display = "block";

  view.innerHTML = `
    <h2>${topic.name}</h2>

    <iframe width="100%" height="300"
      src="https://www.youtube.com/embed/${topic.videoId}">
    </iframe>

    <h3>Highlights</h3>
    ${topic.highlights.map(h => `
      <highlight-item
        time="${h.time}"
        name="${h.name}">
      </highlight-item>
    `).join("")}
  `;
}