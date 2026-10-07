<script lang="ts">
  import Experience from "#lib/resume/components/experience.svelte";
  import ExperienceItem from "#lib/resume/components/experience-item.svelte";
  import Footing from "#lib/resume/components/footing.svelte";
  import Heading from "#lib/resume/components/heading.svelte";
  import HeadingSpacer from "#lib/resume/components/heading-spacer.svelte";
  import LevelSkills from "#lib/resume/components/level-skills.svelte";
  import Publication from "#lib/resume/components/publication.svelte";
  import School from "#lib/resume/components/school.svelte";
  import Section from "#lib/resume/components/section.svelte";
</script>

<div class="overflow-hidden w-full min-h-screen [page:nomargin]">
  <div
    class="max-w-3xl mx-auto w-full min-h-screen print:h-screen relative print:max-w-none"
  >
    <Heading />
    <div
      class="w-full min-h-screen print:h-screen flex flex-col md:flex-row print:flex-row"
    >
      <div
        class="flex flex-col justify-between p-6 pb-4 md:pt-10 print:pt-10 md:pb-44 print:pb-[calc(200vw/9)] space-y-4 print:space-y-2"
      >
        <Section title="Summary">
          <!-- NOTE adjustments to get float to still wrap text at an angle -->
          <div class="-mt-[4.5rem]">
            <HeadingSpacer />
          </div>
          <p class="pt-16">
            Responsible AI Researcher driving positive social impact through
            expertise spanning fairness and Generative AI safety, fueled by a
            strong foundation in machine learning, micro economics, and finance.
          </p>
        </Section>
        <Section title="Recent Experience">
          <Experience
            company="LinkedIn"
            href="https://linkedin.com"
            position="Responsible AI Researcher"
            dates="2025–present"
          >
            <ExperienceItem>
              Created AI policy guidelines and governance for safe LLM model
              deployment
            </ExperienceItem>
          </Experience>
          <Experience
            company="Meta"
            href="https://meta.com"
            position="Research Scientist"
            dates="2018–2025"
          >
            <ExperienceItem>
              Enabled release of llama3 through red teaming to measure and
              fine-tune against adversarial risks [<a
                class="hover:underline"
                href="https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md"
                >github.com/meta-llama/llama3</a
              >]
            </ExperienceItem>
            <ExperienceItem>
              Pioneered applying high dimensional Bayesian optimization towards
              finding system level adversarial prompts for SOTA models
            </ExperienceItem>
            <ExperienceItem>
              Designed and developed key metrics for hyper-spherical point
              diversity, which were used to understand relative coverage of
              prompts and unsafe responses for model evaluation
            </ExperienceItem>
            <ExperienceItem>
              Developed SOTA calibration-based recommendation based fairness
              metrics, and applied them to internal systems.
            </ExperienceItem>
          </Experience>
        </Section>
        <Section title="Education">
          <School
            name="University of Michigan"
            href="https://umich.edu"
            years="2012–2018"
            degree="PhD in Computer Science and Engineering"
            honors="Magna cum Laude"
          >
            <p class="text-justify">
              Understanding Financial Market Behavior through Empirical
              Game-Theoretic Analysis
            </p>
          </School>
          <School
            name="Washington University"
            href="https://wustl.edu"
            years="2006–2010"
            degree="BS in Systems Science"
            honors="Magna cum Laude"
          />
        </Section>
        <Section title="Selected Publications">
          <Publication
            title="Automated Red Teaming with GOAT: the Generative Offensive Agent Tester"
            authors={[
              "M. Pavlova",
              "E. Brinkman",
              "K. Iyer",
              "V. Albiero",
              "J. Bitton",
              "H. Nguyen",
              "J. Li",
              "C. Ferrer",
              "I. Evtimov",
              "A. Grattafiori",
            ]}
            url="https://arxiv.org/pdf/2410.01606"
            maxAuthors={3}
          />
          <Publication
            title="The Llama 3 Herd of Models"
            authors={["Llama Team"]}
            url="https://arxiv.org/pdf/2407.21783"
          />
        </Section>
      </div>
      <div
        class="flex flex-col shrink-0 justify-between p-6 pt-0 space-y-4 md:pt-40 print:pt-[calc(200vw/9)] md:pb-8 print:pb-8"
      >
        <Section title="Info">
          <div>/ˈɛrɪk/</div>
          <div>he/him</div>
        </Section>
        <Section title="Skills">
          <LevelSkills />
        </Section>
      </div>
    </div>
    <Footing upward />
  </div>
</div>
