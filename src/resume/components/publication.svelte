<script lang="ts">
  let {
    title,
    authors,
    conference,
    url,
    maxAuthors = Infinity,
  }: {
    title: string;
    authors: readonly string[];
    conference?: string;
    url: string;
    maxAuthors?: number;
  } = $props();

  const byline = $derived(
    authors.length > maxAuthors ? `${authors[0]} et al.` : authors.join(", "),
  );
</script>

<div>
  <div class="text-lg hover:underline">
    <a target="_blank" rel="noreferrer" href={url}>{title}</a>
  </div>
  <div class="w-full flex justify-between">
    <div>{byline}</div>
    <div class="shrink-0">{conference}</div>
  </div>
</div>
