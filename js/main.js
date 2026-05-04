import { renderTopicView } from './topicView.js';

// Posiciones en el campo (coordenadas %)
const POSITIONS = {
  GK: { x: 50, y: 92 },
  LB: { x: 15, y: 75 },
  CB1: { x: 35, y: 78 },
  CB2: { x: 65, y: 78 },
  RB: { x: 85, y: 75 },
  CM1: { x: 25, y: 55 },
  CM2: { x: 50, y: 60 },
  CM3: { x: 75, y: 55 },
  LW: { x: 20, y: 25 },
  ST: { x: 50, y: 20 },
  RW: { x: 80, y: 25 }
};

// Render jugadores en el campo
export function renderField(course) {
  const field = document.getElementById("field");

  course.phases.forEach(phase => {
    phase.topics.forEach((topic, index) => {

      const posKeys = Object.keys(POSITIONS);
      const posKey = posKeys[index];

      const pos = POSITIONS[posKey];

      const player = document.createElement("player-card");

      player.setAttribute("name", topic.name);
      player.setAttribute("position", topic.pos);
      player.setAttribute("rating", topic.rating);
      player.setAttribute("phase", phase.color);
      player.setAttribute("topic-id", topic.id);

      player.style.left = pos.x + "%";
      player.style.top = pos.y + "%";

      player.addEventListener("click", () => {
        document.querySelectorAll("player-card").forEach(p => p.classList.remove("selected"));
        player.classList.add("selected");

        renderTopicView(topic);
      });

      field.appendChild(player);
    });
  });
}