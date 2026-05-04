export function renderTopicView(topic) {
  const container = document.getElementById("topic-view");
  const welcome = document.getElementById("welcome-screen");

  welcome.style.display = "none";
  container.style.display = "block";

  container.innerHTML = `
    <h2>${topic.name}</h2>

    <div class="main-video-wrap">
      <iframe src="https://www.youtube.com/embed/${topic.videoId}" allowfullscreen></iframe>
    </div>

    <h3>Highlights</h3>
    <div>
      ${topic.highlights.map(h => `
        <highlight-item
          time="${h.time}"
          name="${h.name}"
          desc="${h.desc}"
          video-id="${topic.videoId}">
        </highlight-item>
      `).join("")}
    </div>
  `;
}