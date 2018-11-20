class CustomButtonShdow extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
          :host {
            --main-color: #02a5a5;
            --padding: 1.5em;
            --background-hover: #026f6f;
            --text-color: white;
          }
          .btn-container {
            border: 2px dashed var(--main-color);
            padding: var(--padding);
            text-align: center;
          }
          .btn {
            background-color: var(--main-color);
            border: 0;
            border-radius: 5px;
            color: var(--text-color);
            padding: var(--padding);
            text-transform: uppercase;
          }

          .btn:hover {
            background-color: var(--background-hover);
            cursor: pointer;
          }

          #title{
              color: var(--main-color);
          }
        </style>
        <div class="btn-container">
          <h1 id="title">Esto es un titulo</h1>
          <button class="btn">Button</button>
        </div>
      `;
    }
  }
  
  window.customElements.define('custom-button-shadow', CustomButtonShdow);