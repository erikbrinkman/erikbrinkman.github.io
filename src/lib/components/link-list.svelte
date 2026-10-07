<script lang="ts" module>
  export interface LinkItem {
    name: string;
    href: string;
  }
</script>

<script lang="ts">
  import Link from "./link.svelte";

  let {
    links,
    class: className = "decoration-link-line justify-center",
    tag = "div",
  }: {
    links: readonly LinkItem[];
    class?: string;
    tag?: "div" | "nav";
  } = $props();
</script>

<svelte:element
  this={tag}
  class={[
    "flex flex-wrap items-baseline gap-x-4 uppercase no-underline text-sm tracking-wide decoration-2 underline-offset-8",
    className,
  ]}
>
  {#each links as { name, href }, index (href)}
    {#if index > 0}
      <span class="select-none px-1" aria-hidden="true">/</span>
    {/if}
    <Link
      {href}
      class="font-bold hover:underline focus-visible:underline decoration-inherit h-8"
    >
      <span class="inline-flex space-x-2 items-center">
        <span>{name}</span>
      </span>
    </Link>
  {/each}
</svelte:element>
