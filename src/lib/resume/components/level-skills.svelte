<script lang="ts">
  import DotList from "./dot-list.svelte";

  let {
    skills = {
      python: 3,
      pytorch: 3,
      jax: 2,
      sql: 3,
      "scikit-learn": 2,
      rust: 2,
      java: 2,
      "c++11": 2,
      lua: 1,
      hack: 1,
      haskell: 1,
      cuda: 1,
      typescript: 2,
    },
    names = ["Novice", "Competent", "Proficient"],
    horizontal = false,
  }: {
    skills?: Record<string, number>;
    names?: readonly string[];
    horizontal?: boolean;
  } = $props();

  const levels = $derived(
    names
      .map((name, index) => ({
        name,
        skills: Object.keys(skills).filter(
          (skill) => skills[skill] === index + 1,
        ),
      }))
      .reverse(),
  );
</script>

<div
  class={[
    "space-y-3 grid grid-cols-1 sm:grid-cols-2",
    horizontal ? "print:grid-cols-2" : "md:grid-cols-1 print:grid-cols-1",
  ]}
>
  {#each levels as level (level.name)}
    <div>
      <div class="text-lg font-bold">{level.name}</div>
      {#if horizontal}
        <DotList elems={level.skills} />
      {:else}
        <div class="flex flex-col space-y-1">
          {#each level.skills as skill (skill)}
            <div>{skill}</div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>
