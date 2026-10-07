<script lang="ts" module>
  import type { Snippet } from "svelte";

  export interface DetailsItem {
    name: string;
    title: string;
    subtitle: string;
    img: string;
    contents: Snippet;
  }

  type TileState = "idle" | "open" | "folded";

  /** how long a tile takes to settle; matches duration-700 on everything that moves with it */
  const revealMs = 700;

  function tileHeight(state: TileState): string {
    if (state === "open") {
      return "h-96";
    } else if (state === "folded") {
      return "h-0";
    } else {
      return "h-dvh";
    }
  }

  /** eases the element's top from where it sits now to `toOffset` in the viewport */
  function glide(element: HTMLElement, toOffset: number): void {
    // reading the element's position every frame keeps it put while the tiles above it fold
    // and the heading column narrows, which a one-shot scroll or a hash jump cannot do
    const scrollTo = (offset: number) => {
      window.scrollTo(
        0,
        element.getBoundingClientRect().top + window.scrollY - offset,
      );
    };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollTo(toOffset);
    } else {
      const from = element.getBoundingClientRect().top;
      const start = performance.now();
      const root = document.documentElement;
      const step = (now: number) => {
        const fraction = Math.min(1, (now - start) / revealMs);
        const eased = 1 - (1 - fraction) ** 4;
        scrollTo(from + (toOffset - from) * eased);
        if (fraction < 1) {
          requestAnimationFrame(step);
        } else {
          root.style.scrollBehavior = "";
        }
      };
      // the page scrolls smoothly, which would fight a per-frame scroll
      root.style.scrollBehavior = "auto";
      requestAnimationFrame(step);
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { pushState } from "$app/navigation";
  import MdClose from "~icons/ic/baseline-close";
  import ActionButton from "./action-button.svelte";
  import Contents from "./contents.svelte";
  import Section from "./section.svelte";

  let {
    name,
    items,
    headerClass = "",
    navClass = "",
  }: {
    name: string;
    items: readonly DetailsItem[];
    headerClass?: string;
    navClass?: string;
  } = $props();

  let selected = $state<number | null>(null);
  // transitions stay off until after the first paint, so a paper linked to by url
  // is simply open rather than unfolding on arrival
  let animated = $state(false);
  const projects = $state<(HTMLDivElement | undefined)[]>([]);
  const expanded = $derived(selected !== null);
  const motion = $derived(
    animated ? "transition-all duration-700 ease-reveal" : "",
  );

  // keep the expanded item in sync with the url hash, including back/forward nav
  function syncHash(): void {
    const index = items.findIndex((item) => `#${item.name}` === location.hash);
    selected = index === -1 ? null : index;
  }

  onMount(() => {
    syncHash();
    // two frames: one to paint whatever the url asked for, one to arm the transitions
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        animated = true;
      });
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  });

  function tileState(index: number): TileState {
    if (selected === index) {
      return "open";
    } else if (expanded) {
      return "folded";
    } else {
      return "idle";
    }
  }

  function expand(index: number): void {
    const element = projects[index];
    selected = index;
    pushState(`#${items[index].name}`, {});
    if (element) {
      glide(element, 0);
    }
  }

  function collapse(): void {
    const element = selected === null ? undefined : projects[selected];
    // hold the paper where it is while the tile grows back and the other one unfolds
    const resting = element?.getBoundingClientRect().top;
    selected = null;
    // drop the fragment without leaving a dangling "#" in the url
    pushState(location.pathname + location.search, {});
    if (element && resting !== undefined) {
      glide(element, resting);
    }
  }
</script>

<svelte:window onhashchange={syncHash} onpopstate={syncHash} />

{#snippet tile(
  item: DetailsItem,
  state: TileState,
)}
  <div
    class="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
    style:background-image="url({item.img})"
  ></div>
  <div class="tile-scrim absolute inset-0"></div>
  <div
    class={[
      "relative px-6 capitalize drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] transition-opacity duration-300",
      state === "folded" ? "opacity-0" : "opacity-100",
    ]}
  >
    <h3 class="text-4xl font-bold leading-tight">{item.title}</h3>
    <div class="text-2xl leading-tight">{item.subtitle}</div>
    <!-- the bottom padding keeps the offset underline inside the box that the fold clips -->
    <span
      class={[
        "block w-fit mx-auto pb-2 overflow-hidden font-sans uppercase font-bold text-[0.8125rem] tracking-[0.08em] underline decoration-2 decoration-violet-200 underline-offset-8",
        motion,
        state === "open"
          ? "max-h-0 mt-0 opacity-0"
          : "max-h-9 mt-5 opacity-85 group-hover:opacity-100",
      ]}
    >
      Read the abstract
    </span>
  </div>
{/snippet}

<!-- TODO the close button extends a little beyond the bottom due to
  artificially setting the height of the parent to 0. We should fix that
  eventually, but it's not clear how -->
<Section {name} {headerClass} {navClass} {expanded}>
  <div class="w-full relative">
    <div class="sticky top-0 h-0 z-10">
      <ActionButton
        label="Close project"
        hide={!expanded}
        onclick={collapse}
        class="ml-auto md:ml-0 -translate-x-6 translate-y-6 md:translate-y-24 bg-button text-button-ink"
      >
        <MdClose />
      </ActionButton>
    </div>
    {#each items as item, index (item.name)}
      {@const state = tileState(index)}
      {@const open = state === "open"}
      {@const tileClass = [
        "group relative w-full flex flex-col justify-center items-center overflow-clip text-center text-white font-details",
        motion,
        tileHeight(state),
      ]}
      <div bind:this={projects[index]} id={item.name}>
        {#if expanded}
          <div class={tileClass} aria-hidden={state === "folded"}>
            {@render tile(item, state)}
          </div>
        {:else}
          <button
            type="button"
            class={[tileClass, "cursor-pointer"]}
            aria-expanded="false"
            aria-controls="{item.name}-contents"
            onclick={() => {
              expand(index);
            }}
          >
            {@render tile(item, state)}
          </button>
        {/if}
        <div
          class={[
            "grid",
            animated &&
              "transition-[grid-template-rows] duration-700 ease-reveal",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ]}
          inert={!open}
        >
          <div class="overflow-hidden">
            <Contents
              id="{item.name}-contents"
              class={[
                motion,
                open
                  ? "opacity-100 translate-y-0 delay-[250ms]"
                  : "opacity-0 translate-y-5",
              ].join(" ")}
            >
              {@render item.contents()}
            </Contents>
          </div>
        </div>
      </div>
    {/each}
  </div>
</Section>
