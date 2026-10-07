<script lang="ts">
  import { navItems } from "../nav-items";
  import LinkList from "./link-list.svelte";

  let { class: className = "" }: { class?: string } = $props();
</script>

<LinkList links={navItems} class={className} tag="nav" />
