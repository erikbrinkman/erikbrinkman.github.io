<script lang="ts">
  import FaLinkedin from "~icons/fa6-brands/linkedin";
  import SiGithub from "~icons/simple-icons/github";
  import SiGooglescholar from "~icons/simple-icons/googlescholar";
  import ContactIcon from "./contact-icon.svelte";
  import Header from "./header.svelte";

  let {
    upward = false,
  }: {
    /** render the element upward instead of downward: useful for a single page */
    upward?: boolean;
  } = $props();
</script>

<div
  class={[
    "relative bottom-0 md:left-[calc(24rem-50vw)] break-inside-avoid w-[calc(50vw+24rem)] print:w-screen max-w-[100vw] md:aspect-9/2 [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)] md:[clip-path:polygon(0_0,0_100%,100%_100%,100%_100%)] bg-violet-200 transition-all",
    upward &&
      "md:absolute print:absolute md:bottom-0 print:bottom-0 print:aspect-9/2 print:[clip-path:polygon(0_0,0_100%,100%_100%)]",
  ]}
>
  <div class="p-6 max-w-3xl h-full ml-auto flex flex-col justify-end gap-1">
    <Header text="Find Me" />
    <div class="flex space-x-4">
      <ContactIcon
        icon={SiGithub}
        footer="@erikbrinkman"
        href="https://github.com/erikbrinkman"
      />
      <ContactIcon
        icon={SiGooglescholar}
        footer="4CerxXxb7KAC"
        href="https://scholar.google.com/citations?user=4CerxXxb7KAC"
      />
      <ContactIcon
        icon={FaLinkedin}
        footer="@erikbrinkman"
        href="https://www.linkedin.com/in/erikbrinkman/"
      />
    </div>
  </div>
</div>
