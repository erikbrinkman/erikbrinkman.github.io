<script lang="ts">
  import type { Snippet } from "svelte";

  // only web links leave the site; mailto and friends hand off to another app
  function isExternal(url: string): boolean {
    try {
      const { protocol } = new URL(url);
      return protocol === "http:" || protocol === "https:";
    } catch {
      return false;
    }
  }

  let {
    href,
    class: className = "",
    external = isExternal(href),
    children,
  }: {
    href: string;
    class?: string;
    external?: boolean;
    children: Snippet;
  } = $props();
</script>

<a
  {href}
  class={className}
  target={external ? "_blank" : undefined}
  rel={external ? "noreferrer" : undefined}
  >{@render children()}</a
>
