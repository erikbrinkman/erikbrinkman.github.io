<script lang="ts">
  import DotList from "./components/dot-list.svelte";
  import Experience from "./components/experience.svelte";
  import ExperienceItem from "./components/experience-item.svelte";
  import Footing from "./components/footing.svelte";
  import Heading from "./components/heading.svelte";
  import HeadingSpacer from "./components/heading-spacer.svelte";
  import LevelSkills from "./components/level-skills.svelte";
  import Publication from "./components/publication.svelte";
  import School from "./components/school.svelte";
  import Section from "./components/section.svelte";
</script>

<div class="overflow-hidden w-full min-h-screen [page:nomargin]">
  <div class="max-w-3xl mx-auto w-full min-h-screen relative print:max-w-none">
    <Heading />
    <HeadingSpacer />
    <div class="p-6 md:pt-10 print:pt-10 space-y-4 min-h-screen">
      <Section title="Summary">
        Responsible AI Researcher focusing on fairness, but with skills across
        machine learning, micro-economics, and finance.
      </Section>
      <Section title="Employment">
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
          <ExperienceItem>
            Created framework and tools for measuring and understanding the
            efficacy of policy compliance
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
            Developed and analyzed diffusion models for systemic bias, including
            bridging between policy and product to ensure successful model
            launch
          </ExperienceItem>
          <ExperienceItem>
            Developed SOTA calibration-based recommendation based fairness
            metrics, and applied them to internal systems.
          </ExperienceItem>
          <ExperienceItem>
            Researched, created, and deployed state-of-the-art large-scale
            sparse user-author-content models across Instagram, Integrity,
            Content-Understanding, and more.
          </ExperienceItem>
          <ExperienceItem>
            Developed transformer-based two-tower user-content models for
            cold-start unconnected content discovery that achieved half of our
            topline goals.
          </ExperienceItem>
          <ExperienceItem>
            Regularly conducted offline and online model analysis using SQL,
            python, and other necessary tools.
          </ExperienceItem>
          <ExperienceItem>
            Led project to learn hierarchical structure on top of existing
            user-content modeling.
          </ExperienceItem>
          <ExperienceItem>
            Mentored two PhD interns to successful project completion and return
            offers.
          </ExperienceItem>
        </Experience>
        <Experience
          company="University of Michigan"
          href="https://umich.edu"
          position="Graduate Student Research Assistant"
          dates="2012–2018"
        >
          <ExperienceItem>
            Studied auction settings where having access to public information
            is bad for all agents (AAMAS 2014)
          </ExperienceItem>
          <ExperienceItem>
            Demonstrated surprising efficiency of continuous double auctions in
            the presence of strategic agents (Submitted TEAC)
          </ExperienceItem>
          <ExperienceItem>
            Investigated how to design a modern frequent call market using
            empirical mechanism design (EC)
          </ExperienceItem>
          <ExperienceItem>
            Analyzing "Flash Crash", metrics that indicate susceptibility, and
            policies that mitigate risk in the presence of strategic traders
          </ExperienceItem>
        </Experience>
        <Experience
          company="Meta (then Facebook)"
          href="https://meta.com"
          position="Intern"
          dates="Summer 2017"
        >
          <ExperienceItem>
            Trained content embedding model of job openings using caffe2
          </ExperienceItem>
          <ExperienceItem>
            Doubled click-through rate for suggested jobs surface
          </ExperienceItem>
        </Experience>
        <Experience
          company="Yelp"
          href="https://yelp.com"
          position="Intern"
          dates="Summer 2015"
        >
          <ExperienceItem>
            Modified auto-bidder to increase advertiser return on investment
          </ExperienceItem>
          <ExperienceItem>
            Ran live experiments to determine modification effects and optimal
            parameters
          </ExperienceItem>
        </Experience>
        <Experience
          company="Upwork (then Elance/oDesk)"
          href="https://upwork.com"
          position="Research Intern"
          dates="Summer 2014"
        >
          <ExperienceItem>
            Developed search ranking optimization based on click-through data
          </ExperienceItem>
          <ExperienceItem>
            Built profile photo categorizer for demographics and search ranking
          </ExperienceItem>
        </Experience>
        <Experience
          company="University of Michigan"
          href="https://umich.edu"
          position="Graduate Student Instructor"
          dates="Fall 2013"
        >
          <ExperienceItem>
            TA'd introductory Algorithms and Data Structures course
          </ExperienceItem>
        </Experience>
        <Experience
          company="MIT Lincoln Laboratory"
          href="https://www.ll.mit.edu"
          position="Researcher"
          dates="2010–2012"
        >
          <ExperienceItem>
            Implemented an efficient topic modeling algorithm (PLSA) in
            MapReduce
          </ExperienceItem>
          <ExperienceItem>
            Prototyped real time entity resolving and disambiguation system for
            news corpora
          </ExperienceItem>
          <ExperienceItem>
            Designed a database that supports general queries on geographic
            descriptions
          </ExperienceItem>
          <ExperienceItem>
            Adapted aggregate movement model between data modalities
          </ExperienceItem>
        </Experience>
        <Experience
          company="JHU Applied Physics Laboratory"
          href="https://jhuapl.edu"
          position="Intern"
          dates="Summer 2009"
        >
          <ExperienceItem>
            Studied the Cramér-Rao Lower Bound (CRLB), and its implications on
            polar coordinate tracking with both continuous and discrete noise
          </ExperienceItem>
          <ExperienceItem>
            Built a Matlab simulation to investigate the relation between
            Extended Kalman Filter tracking error and CRLB for important target
            trajectories
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
          gpa={3.81}
        >
          <p class="text-justify">
            <span class="italic">Thesis:</span>
            Understanding Financial Market Behavior through Empirical
            Game-Theoretic Analysis
          </p>
          <p class="text-justify">
            <span class="italic">Honors:</span>
            <DotList
              elems={[
                "STIET Summer Research Grant Recipient",
                "Eta Kappa Nu",
                "Microsoft College Puzzle Challenge Finalist (2015)",
              ]}
            />
          </p>
          <p class="text-justify">
            <span class="italic">Selected Courses:</span>
            <DotList
              elems={[
                "Machine Learning",
                "Online Learning",
                "Reinforcement Learning",
                "Social Networks",
              ]}
            />
          </p>
        </School>
        <School
          name="Washington University"
          href="https://wustl.edu"
          years="2006–2010"
          degree="BS in Systems Science"
          honors="Magna cum Laude"
          gpa={3.88}
        >
          <p class="text-justify">
            <span class="italic">Honors:</span>
            <DotList
              elems={[
                "Gregory Sullivan Award for Professional Achievement",
                "Tau Beta Pi",
                "Theta Xi",
                "Dean's List",
              ]}
            />
          </p>
          <p class="text-justify">
            <span class="italic">Selected Courses:</span>
            <DotList
              elems={[
                "Algorithms for Nonlinear Optimization",
                "Nonlinear Dynamic Systems",
              ]}
            />
          </p>
        </School>
      </Section>
      <Section title="Publications">
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
        />
        <Publication
          title="Gradient-based Jailbreak Images for Multimodal Fusion Models"
          authors={[
            "J. Rando",
            "H. Korevaar",
            "E. Brinkman",
            "I. Evtimov",
            "F. Tramèr",
          ]}
          url="https://arxiv.org/pdf/2410.03489"
        />
        <Publication
          title="The Llama 3 Herd of Models"
          authors={["Llama Team"]}
          url="https://arxiv.org/pdf/2407.21783"
        />
        <Publication
          title="Matched Pair Calibration for Ranking Fairness"
          authors={[
            "H. Korevaar",
            "C. McConnell",
            "E. Tong",
            "E. Brinkman",
            "A. Shine",
            "M. Abbas",
            "B. Metevier",
            "S. Corbett-Davies",
            "K. El-Arini",
          ]}
          url="https://arxiv.org/pdf/2306.03775"
        />
        <Publication
          title="Data Structures for Deviation Payoffs"
          authors={["B. Wiedenbeck", "E. Brinkman"]}
          conference="AAMAS 2023"
          url="https://www.southampton.ac.uk/~eg/AAMAS2023/pdfs/p670.pdf"
        />
        <Publication
          title="Empirical Mechanism Design for Optimizing Clearing Interval in Frequent Call Markets"
          authors={["E. Brinkman", "M. P. Wellman"]}
          conference="EC 2017"
          url="https://dl.acm.org/authorize?N30521"
        />
        <Publication
          title="Signal Structure and Strategic Information Acquisition"
          authors={["E. Brinkman", "M. P. Wellman", "S. E. Page"]}
          conference="AAMAS 2014"
          url="http://www.ifaamas.org/Proceedings/aamas2014/aamas/p229.pdf"
        />
      </Section>
      <Section title="Skills">
        <LevelSkills horizontal />
      </Section>
    </div>
    <Footing />
  </div>
</div>
