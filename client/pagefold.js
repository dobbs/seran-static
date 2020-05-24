const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  display: block;
  height: 10px;
  border-top: 2px solid lightgray;
  margin-top: 24px;
  text-align: center;
  position: relative;
  clear: both;
}
slot {
  position: relative;
  top: -.8em;
  background: white;
  display: inline-block;
  color: gray;
}
</style>
<slot></slot>`;
export class PageFold extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  set json(json) {
    // Avoid use of innerHTML by using unicode escape for non-breaking space
    this.textContent = `\u00a0 ${json.text} \u00a0`;
  }
}
registerPlugin("pagefold", PageFold);
