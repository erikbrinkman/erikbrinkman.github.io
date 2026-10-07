<script lang="ts">
  import MdClose from "~icons/ic/baseline-close";
  import MdMenu from "~icons/ic/baseline-menu";
  import { navItems } from "../nav-items";
  import ActionButton from "./action-button.svelte";

  let collapsed = $state(true);

  function closeOnEscape(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      collapsed = true;
    }
  }
</script>

<svelte:window onkeydown={closeOnEscape} />

<div class="fixed z-10 w-full md:hidden">
  <ActionButton
    label={collapsed ? "Open menu" : "Close menu"}
    expanded={!collapsed}
    onclick={() => {
      collapsed = !collapsed;
    }}
    class="absolute m-6 z-50 bg-menu text-menu-ink"
  >
    {#if collapsed}
      <MdMenu />
    {:else}
      <MdClose />
    {/if}
  </ActionButton>
  <div
    class={[
      "absolute h-dvh w-full z-40 flex flex-col justify-center items-center space-y-2 bg-ground text-ink text-xl",
      collapsed && "hidden",
    ]}
  >
    {#each navItems as { name, href } (href)}
      <a
        {href}
        onclick={() => {
          collapsed = true;
        }}
        class="uppercase font-bold hover:underline focus-visible:underline underline-offset-8 decoration-2 decoration-link-line"
      >
        {name}
      </a>
    {/each}
  </div>
</div>
