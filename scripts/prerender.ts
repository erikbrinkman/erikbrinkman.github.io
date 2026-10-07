import type { Component } from "svelte";
import { render } from "svelte/server";

const EMPTY_ROOT = '<div id="root"></div>';

const page = Bun.file("dist/index.html");
const html = await page.text();
if (!html.includes(EMPTY_ROOT)) {
  throw new Error(`dist/index.html has no ${EMPTY_ROOT}`);
}

const built = new URL("../.ssr/app.js", import.meta.url).href;
const { default: App } = (await import(built)) as { default: Component };
const { body } = render(App);
await Bun.write(page, html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`));
