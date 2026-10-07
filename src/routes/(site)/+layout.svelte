<script lang="ts">
  import "@fontsource/josefin-sans/latin-400.css";
  import "@fontsource/josefin-sans/latin-700.css";
  import "@fontsource/lato/latin-400.css";
  import "../../app.css";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
