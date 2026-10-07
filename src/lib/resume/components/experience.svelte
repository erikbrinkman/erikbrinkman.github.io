<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    company,
    position,
    dates,
    href,
    children,
  }: {
    company: string;
    position: string;
    dates: string;
    href?: string;
    children: Snippet;
  } = $props();
</script>

<div class="break-inside-avoid">
  <div class="flex justify-between w-full items-baseline">
    <div class="space-x-2">
      <span class="text-lg font-bold"
        >{#if href}
          <a {href} target="_blank" rel="noreferrer" class="hover:underline"
            >{company}</a
          >
        {:else}
          {company}
        {/if}</span
      ><span>{position}</span>
    </div>
    <div class="shrink-0">{dates}</div>
  </div>
  <ul class="list-['▸'] ml-3 text-justify space-y-1">
    {@render children()}
  </ul>
</div>
