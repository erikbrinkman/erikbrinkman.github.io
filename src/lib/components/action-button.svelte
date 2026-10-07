<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    label,
    hide = false,
    expanded,
    class: className = "",
    onclick,
    children,
  }: {
    label: string;
    hide?: boolean;
    expanded?: boolean;
    class?: string;
    onclick?: () => void;
    children: Snippet;
  } = $props();
</script>

<button
  type="button"
  aria-label={label}
  aria-expanded={expanded}
  tabindex={hide ? -1 : undefined}
  {onclick}
  class={[
    "transition-transform duration-300 ease-reveal w-12 h-12 flex flex-col justify-center items-center",
    // appearing waits for the layout behind it to settle
    hide ? "scale-0" : "scale-100 delay-[400ms]",
    onclick && "cursor-pointer",
    className,
  ]}
>
  {@render children()}
</button>
