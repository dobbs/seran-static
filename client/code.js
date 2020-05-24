const template = document.createElement('template');
template.innerHTML = `
<style>
:host {display: block;}
pre {
  background-color: #eee;
  padding: 6px;
  white-space: pre-wrap;
}
</style>
<pre><slot></slot></pre>`;
export class Code extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  set json(json) {
    this.textContent = json.text;
  }
}
registerPlugin("code", Code);
