<script lang="ts">
  let { elems }: { elems: readonly string[] } = $props();
</script>

<span>{elems.join(" · ")}</span>
