<script lang="ts">
  import type { Snippet } from "svelte";
  import Link from "./link.svelte";

  let { href, children }: { href: string; children: Snippet } = $props();
</script>

<Link
  {href}
  class="text-link hover:underline focus-visible:underline underline-offset-4 decoration-link-line"
  >{@render children()}</Link
>
