import { LitElement, html, css } from "lit-element";

/* latt-router */
export class Router extends LitElement {
  static get properties() {
    return {
      path: { type: String }
    };
  }

  constructor() {
    super();
    this.path = "/";
  }

  render() {
    global.from = this.path;
    if (window.location.pathname === this.path) {
      return html`<slot />`;
    } else {
      return null;
    }
  }
}

/* latt-router-redirect */

export class Redirect extends LitElement {
  static get properties() {
    return {
      to: { type: String }
    };
  }

  constructor() {
    super();
    this.to = "/";
  }

  render() {
    if (window.location.pathname === global.from) {
      if (window.location.pathname !== this.to) {
        window.location.href = this.to;
      }
    }
  }
}

/* latt-router-link */

export class Link extends LitElement {
  static get properties() {
    return {
      to: { type: String }
    };
  }

  static get styles() {
    return css`
      a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }

  constructor() {
    super();
    this.to = "/";
  }

  render() {
    return html`<a href="${this.to}"><slot /></a>`;
  }
}

customElements.get("latt-router") ||
  customElements.define("latt-router", Router);
customElements.get("latt-router-redirect") ||
  customElements.define("latt-router-redirect", Redirect);
customElements.get("latt-router-link") ||
  customElements.define("latt-router-link", Link);
