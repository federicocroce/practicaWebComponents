class CustomButton extends HTMLElement {
  constructor () {
    super();
  }
  
  connectedCallback () {
    this.innerHTML = `
      <div>
        <button>Button</button>
      </div>
    `;
  }
}

window.customElements.define('custom-button', CustomButton)