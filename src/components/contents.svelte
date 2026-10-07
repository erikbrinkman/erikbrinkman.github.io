<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    class: className = "",
    id,
    children,
  }: { class?: string; id?: string; children: Snippet } = $props();
</script>

<div
  {id}
  class={[
    "space-y-4 max-w-2xl p-10 md:px-12 md:py-16 lg:px-16 lg:py-20",
    className,
  ]}
>
  {@render children()}
</div>
