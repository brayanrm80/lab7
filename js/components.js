// PLAYER CARD
class PlayerCard extends HTMLElement {
  static get observedAttributes() {
    return ['position', 'name', 'rating', 'role', 'phase'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  render() {
    const name = this.getAttribute('name');
    const rating = this.getAttribute('rating');
    const pos = this.getAttribute('position');

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #111;
          padding: 10px;
          border: 1px solid #333;
          text-align: center;
          cursor: pointer;
        }
      </style>

      <div class="card">
        <div>${rating}</div>
        <div>${pos}</div>
        <div>${name}</div>
      </div>
    `;
  }
}

customElements.define('player-card', PlayerCard);


// HIGHLIGHT ITEM
class HighlightItem extends HTMLElement {
  connectedCallback() {
    const time = this.getAttribute('time');
    const name = this.getAttribute('name');

    this.innerHTML = `
      <div>${time} - ${name}</div>
    `;
  }
}

customElements.define('highlight-item', HighlightItem);