<script lang="ts">
  let { names }: { names: readonly string[] } = $props();
</script>

<div
  class="flex flex-wrap justify-center gap-x-3 uppercase text-[0.9375rem] tracking-wide text-muted"
>
  {#each names as name, index (name)}
    {#if index > 0}
      <span class="select-none" aria-hidden="true">&middot;</span>
    {/if}
    <span>{name}</span>
  {/each}
</div>
