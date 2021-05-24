# Latt

A simple [Lit Element](http://lit.dev) router. (latt: Swedish for "light")

## Installation

---

```jsx
npm install latt
```

Then, in your JS file:

```jsx
import "latt";
```

## Usage

---

### `<latt-router>`

Used as a wrapper for your routes.

```jsx
import { LitElement, html } from "lit-element";
import "latt";

class App extends LitElement {
  render() {
    return html`
    **<latt-router>**
      <latt-route path="/">
        home
      </latt-route>
      <latt-route path="/test">
        test
        <latt-link to="/">Go home</latt-link>
      </latt-route>
      <latt-catch to="/test" />
    **</latt-router>**`;
  }
}

customElements.get("app-root") || customElements.define("app-root", App);
```

### `<latt-route>`

**Not** to be confused with `<latt-router>`, this is used for automatic redirects. Used with the `<latt-router>` as a routing tool.

```jsx
import { LitElement, html } from "lit-element";
import "latt";

class App extends LitElement {
  render() {
    return html`
    <latt-router>
      **<latt-route path="/">**
        home
      **</latt-route>**
      **<latt-route path="/test">**
        test
        <latt-link to="/">Go home</latt-link>
      **</latt-route>**
      <latt-catch to="/test" />
    </latt-router>`;
  }
}

customElements.get("app-root") || customElements.define("app-root", App);
```

### `<latt-catch>`

Used for catchall routes; will redirect every path (except ones already being used) to whatever path you'd like. **MUST** be used at the bottom of the list for it to work.

```jsx
import { LitElement, html } from "lit-element";
import "latt";

class App extends LitElement {
  render() {
    return html`
    <latt-router>
      <latt-route path="/">
        home
      </latt-route>
      <latt-route path="/test">
        test
        <latt-link to="/">Go home</latt-link>
      </latt-route>
      **<latt-catch to="/test" />**
    </latt-router>`;
  }
}

customElements.get("app-root") || customElements.define("app-root", App);
```

### `<latt-link>`

Used in pages for linking to other pages. Can be used in other Elements.

```jsx
import { LitElement, html } from "lit-element";
import "latt";

class App extends LitElement {
  render() {
    return html`
    <latt-router>
      <latt-route path="/">
        home
      </latt-route>
      <latt-route path="/test">
        test
        **<latt-link to="/">Go home</latt-link>**
      </latt-route>
      <latt-catch to="/test" />
    </latt-router>`;
  }
}

customElements.get("app-root") || customElements.define("app-root", App);
```

## Contact

---

[Message me on Discord](http://itslaunchti.me/discord) **(Quickest way)**

[Email me](mailto:jordanreger@gmail.com)
