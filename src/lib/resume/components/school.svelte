<script lang="ts">
  import type { Snippet } from "svelte";
  import DotList from "./dot-list.svelte";

  let {
    name,
    years,
    degree,
    href,
    honors,
    gpa,
    children,
  }: {
    name: string;
    years: string;
    degree: string;
    href?: string;
    honors?: string;
    gpa?: number;
    children?: Snippet;
  } = $props();

  const gpas = $derived([
    ...(honors === undefined ? [] : [honors]),
    ...(gpa === undefined
      ? []
      : [gpa.toLocaleString(undefined, { minimumFractionDigits: 2 })]),
  ]);
</script>

<div class="break-inside-avoid">
  <div class="flex justify-between w-full items-baseline">
    <div class="text-lg font-bold">
      {#if href}
        <a {href} target="_blank" rel="noreferrer" class="hover:underline">
          {name}
        </a>
      {:else}
        {name}
      {/if}
    </div>
    <div class="shrink-0">{years}</div>
  </div>
  <div
    class="flex flex-col sm:flex-row print:flex-row justify-between w-full items-baseline"
  >
    <div>{degree}</div>
    <DotList elems={gpas} />
  </div>
  {@render children?.()}
</div>
