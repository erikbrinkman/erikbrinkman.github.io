import "@fontsource/josefin-sans/latin-400.css";
import "@fontsource/josefin-sans/latin-700.css";
import "@fontsource/lato/latin-400.css";
import "./app.css";
import { hydrate, mount } from "svelte";
import App from "./app.svelte";

const root = document.getElementById("root");
if (!root) {
  throw new Error("missing #root");
}
// the dev server serves an empty root; the build fills it in ahead of time
if (root.firstChild) {
  hydrate(App, { target: root });
} else {
  mount(App, { target: root });
}
