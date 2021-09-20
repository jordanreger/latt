import { LitElement, html, css } from "lit-element";

/* latt-router */
export class Router extends LitElement {
  firstUpdated(){
    global.routes = [];
    for (var i = 0; i < this.shadowRoot.host.children.length; i++) {
      if (this.shadowRoot.host.children[i].path) {
        global.routes.push(this.shadowRoot.host.children[i].path);
      }
    }
  }
  render() {
    return html`<slot />`;
  }
}

/* latt-route */
export class Route extends LitElement {
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

/* latt-redirect */

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

/* latt-link */

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

export class Catchall extends LitElement {
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
    var redirect = true;
    for (var i = 0; i < global.routes.length; i++) {
      if (
        window.location.pathname === this.to ||
        window.location.pathname === global.routes[i]
      ) {
        redirect = false;
      }
    }
    if (redirect) {
      window.location.href = this.to;
    }
  }
}

customElements.get("latt-router") ||
  customElements.define("latt-router", Router);
customElements.get("latt-route") || customElements.define("latt-route", Route);
customElements.get("latt-redirect") ||
  customElements.define("latt-redirect", Redirect);
customElements.get("latt-link") || customElements.define("latt-link", Link);
customElements.get("latt-catch") ||
  customElements.define("latt-catch", Catchall);
