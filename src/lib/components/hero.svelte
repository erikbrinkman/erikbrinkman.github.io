<script lang="ts">
  import Logo from "./logo.svelte";
  import Nav from "./nav.svelte";
</script>

<header class="w-full h-dvh relative overflow-hidden bg-hero text-hero-ink">
  <div
    class="absolute inset-0 flex justify-center items-center blur-sm opacity-50 text-black"
  >
    <Logo class="w-[min(400px,80vw)] h-auto" />
  </div>
  <div class="absolute inset-0 flex flex-col justify-between items-center p-6">
    <div></div>
    <h1
      class="relative font-section font-bold text-name leading-none text-center max-w-[90%]"
    >
      Erik Brinkman
    </h1>
    <div>
      <Nav class="decoration-violet-200" />
    </div>
  </div>
</header>
