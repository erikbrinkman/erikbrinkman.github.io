<script lang="ts">
  import "./resume.css";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Erik Brinkman</title>
</svelte:head>

{@render children()}
