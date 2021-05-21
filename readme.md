# Latt

A simple [Lit Element](http://lit.dev) router. (latt: Swedish for "light")

## Installation

```jsx
npm install latt
```

Then, in your JS file:

```jsx
import "latt";
```

## Usage

```jsx
import { LitElement, html } from "lit-element";
import "latt";

class App extends LitElement {
  render() {
    return html`
      <latt-router path="/">
        home
      </latt-router>
      <latt-router path="/asdf">
        <latt-router-redirect to="/test" />
      </latt-router>
      <latt-router path="/test">
        test
      </latt-router>
    `;
  }
}
customElements.get("app-root") || customElements.define("app-root", App);
```

See? Simple.

## Contact

[Message me on Discord](http://itslaunchti.me/discord) **(Quickest way)**

[Email me](mailto:jordanreger@gmail.com)
