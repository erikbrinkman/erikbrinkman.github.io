import type { Component } from "svelte";
import { render } from "svelte/server";

const EMPTY_ROOT = '<div id="root"></div>';

const pages = {
  "dist/index.html": "app",
  "dist/resume/index.html": "resume",
  "dist/resume/cv/index.html": "cv",
};

for (const [path, name] of Object.entries(pages)) {
  const page = Bun.file(path);
  const html = await page.text();
  if (!html.includes(EMPTY_ROOT)) {
    throw new Error(`${path} has no ${EMPTY_ROOT}`);
  }

  const built = new URL(`../.ssr/${name}.js`, import.meta.url).href;
  const { default: App } = (await import(built)) as { default: Component };
  const { body } = render(App);
  await Bun.write(
    page,
    html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`),
  );
}
