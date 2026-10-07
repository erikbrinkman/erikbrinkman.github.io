<script lang="ts">
  import type { Snippet } from "svelte";
  import Header from "./header.svelte";

  let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div>
  <Header text={title} />
  <div class="space-y-2">{@render children()}</div>
</div>
