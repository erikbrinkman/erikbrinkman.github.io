<script lang="ts" module>
  import type { Component } from "svelte";

  export interface ContactItem {
    name: string;
    handle: string;
    href: string;
    icon: Component;
  }
</script>

<script lang="ts">
  import Link from "./link.svelte";

  let { contacts }: { contacts: readonly ContactItem[] } = $props();
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none">
  {#each contacts as { name, handle, href, icon: Icon } (href)}
    <li>
      <Link
        {href}
        class="group grid grid-cols-[1.25rem_1fr] items-start gap-x-3 py-1"
      >
        <span class="mt-1 text-[1.125rem]" aria-hidden="true">
          <Icon />
        </span>
        <span>
          <span
            class="block uppercase font-bold text-sm tracking-wide decoration-2 decoration-link-line underline-offset-[6px] group-hover:underline group-focus-visible:underline"
          >
            {name}
          </span>
          <span
            class="block text-[0.9375rem] text-muted [overflow-wrap:anywhere]"
          >
            {handle}
          </span>
        </span>
      </Link>
    </li>
  {/each}
</ul>
