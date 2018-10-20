class TestWebcomponent extends HTMLElement {
  connectedCallback() {
    this.innerText = 'I am version 2.0.0';
  }
}

customElements.define('test-webcomponent', TestWebcomponent);