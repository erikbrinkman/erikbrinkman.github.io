<script lang="ts">
  import type { Snippet } from "svelte";
  import Nav from "./nav.svelte";

  let {
    name,
    headerClass = "",
    navClass = "",
    expanded = false,
    centered = false,
    children,
  }: {
    name: string;
    headerClass?: string;
    navClass?: string;
    expanded?: boolean;
    centered?: boolean;
    children: Snippet;
  } = $props();

  const headingId = $derived(`${name}-heading`);
</script>

<section
  class="flex flex-col md:flex-row"
  id={name}
  aria-labelledby={headingId}
>
  <div
    class={[
      "h-dvh w-full transition-all duration-700 ease-reveal grow md:sticky top-0 flex flex-col p-6 justify-between items-center",
      expanded ? "md:basis-1/4" : "md:basis-1/2",
      headerClass,
    ]}
  >
    <div></div>
    <h2
      id={headingId}
      class="font-section text-8xl leading-none text-center capitalize"
    >
      {name}
    </h2>
    <div>
      <Nav class={["hidden md:flex", navClass].join(" ")} />
    </div>
  </div>
  <div
    class={[
      "md:min-h-dvh w-full transition-all duration-700 ease-reveal md:basis-1/2 grow",
      centered && "md:flex md:items-center",
    ]}
  >
    {@render children()}
  </div>
</section>
