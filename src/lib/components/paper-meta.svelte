<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="pt-5 border-t border-rule flex flex-col gap-3">
  {@render children()}
</div>
