<script lang="ts">
  import type { Component } from "svelte";

  let {
    icon: Icon,
    footer,
    href,
  }: { icon: Component; footer: string; href: string } = $props();
</script>

<a {href} target="_blank" rel="noreferrer" class="h-full hover:invert">
  <div class="flex flex-col items-center gap-1">
    <div class="text-3xl"><Icon /></div>
    <div class="text-[.3rem] font-bold">{footer}</div>
  </div>
</a>
