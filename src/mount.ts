import { type Component, hydrate, mount } from "svelte";

/** attach a page to the document */
export function start(App: Component): void {
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
}
