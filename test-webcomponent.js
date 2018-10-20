class TestWebcomponent extends HTMLElement {
  connectedCallback() {
    this.innerText = 'I am version 1.0.0';
  }
}

customElements.define('test-webcomponent', TestWebcomponent);