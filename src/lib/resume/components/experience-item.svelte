<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<li>
  <div class="pl-1">{@render children()}</div>
</li>
