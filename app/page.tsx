import type { Metadata } from "next";
import type { PropsWithChildren, ReactElement } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiGooglescholar } from "react-icons/si";
import Authors from "../components/authors";
import ContactList from "../components/contact-list";
import Contents from "../components/contents";
import Details, { type DetailsItem } from "../components/details";
import Footer from "../components/footer";
import HafaIcon from "../components/hafa-icon";
import Hero from "../components/hero";
import Link from "../components/link";
import LinkList from "../components/link-list";
import MobileNav from "../components/mobile-nav";
import Section from "../components/section";
import goat from "../images/marek-piwnicki-WYtS0f4IaT8-unsplash.jpg";
import newyork from "../images/matteo-catanese-tr7PoBH0Aow-unsplash.jpg";
import { siteDescription, siteTitle, siteUrl } from "../utils/site";

const github = "https://github.com/erikbrinkman";
const scholar = "https://scholar.google.com/citations?user=4CerxXxb7KAC";
const linkedin = "https://www.linkedin.com/in/erikbrinkman";
const email = "erik.brinkman@gmail.com";
const hafa = "https://hafaio.github.io";
const headshot = "/headshot.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: headshot, width: 1280, height: 1280, alt: siteTitle }],
  },
  twitter: {
    // the headshot is square, so the large card would crop it
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [headshot],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteTitle,
  url: siteUrl,
  image: `${siteUrl}${headshot}`,
  jobTitle: "Researcher",
  description: siteDescription,
  sameAs: [github, scholar, linkedin],
};

function TextLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>): ReactElement {
  return (
    <Link
      href={href}
      className="text-link hover:underline focus-visible:underline underline-offset-4 decoration-link-line"
    >
      {children}
    </Link>
  );
}

function PaperMeta({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="pt-5 border-t border-rule flex flex-col gap-3">
      {children}
    </div>
  );
}

const research: DetailsItem[] = [
  {
    name: "goat",
    title: "GOAT",
    subtitle: "Automated Multi-turn Red Teaming",
    img: goat.src,
    contents: (
      <>
        <p>
          Red teaming assesses how large language models (LLMs) can produce
          content that violates norms, policies, and rules set during their
          safety training. However, most existing automated methods in the
          literature are not representative of the way humans tend to interact
          with AI models. Common users of AI models may not have advanced
          knowledge of adversarial machine learning methods or access to model
          internals, and they do not spend a lot of time crafting a single
          highly effective adversarial prompt. Instead, they are likely to make
          use of techniques commonly shared online and exploit the multi-turn
          conversational nature of LLMs. While manual testing addresses this
          gap, it is an inefficient and often expensive process. To address
          these limitations, we introduce the Generative Offensive Agent Tester
          (GOAT), an automated agentic red teaming system that simulates plain
          language adversarial conversations while leveraging multiple
          adversarial prompting techniques to identify vulnerabilities in LLMs.
          We instantiate GOAT with 7 red teaming attacks by prompting a
          general-purpose model in a way that encourages reasoning through the
          choices of methods available, the current target model’s response, and
          the next steps. Our approach is designed to be extensible and
          efficient, allowing human testers to focus on exploring new areas of
          risk while automation covers the scaled adversarial stress-testing of
          known risk territory. We present the design and evaluation of GOAT,
          demonstrating its effectiveness in identifying vulnerabilities in
          state-of-the-art LLMs, with an ASR@10 of 97% against Llama 3.1 and 88%
          against GPT-4-Turbo on the JailbreakBench dataset.
        </p>
        <PaperMeta>
          <Authors names={["M. Pavlova", "E. Brinkman", "et al."]} />
          <LinkList
            links={[
              { name: "arXiv", href: "https://arxiv.org/pdf/2410.01606" },
            ]}
          />
        </PaperMeta>
      </>
    ),
  },
  {
    name: "mechanism",
    title: "Empirical Mechanism Design",
    subtitle: "EC 2017",
    img: newyork.src,
    contents: (
      <>
        <p>
          Several recent authors have advocated for financial markets to move
          from continuous clearing to discrete or batched clearing, as a way to
          defeat the latency arms race: the never-ending quest for small
          advantages in time to access markets. How frequently should such a
          modern batch auction clear? We conduct a systematic simulation-based
          investigation on the relationship between clearing frequency and
          metrics of market quality, such as allocative efficiency, comparing
          the performance of discrete and continuous auction mechanisms under
          empirical equilibrium behavior of all participating traders. In effect
          we perform empirical mechanism design on frequent batch auctions. We
          find that in a wide array of environments, equilibrium efficiency is
          improved for small positive intervals but falls off dramatically when
          there are too few opportunities to trade. The result is a large range
          of batch frequencies that are near optimally efficient; this range is
          more pronounced in thick markets.
        </p>
        <PaperMeta>
          <Authors names={["E. Brinkman", "M. P. Wellman"]} />
          <LinkList
            links={[
              { name: "PDF", href: "https://dl.acm.org/authorize?N30521" },
              { name: "Video", href: "https://youtu.be/26djyL_5HsI" },
            ]}
          />
        </PaperMeta>
      </>
    ),
  },
];

export default function Home(): ReactElement {
  return (
    <div>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must not be HTML-escaped
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <MobileNav />
      <Hero />
      <main>
        <Section
          name="about"
          headerClass="bg-about text-about-ink"
          navClass="decoration-about-line"
          centered
        >
          <Contents>
            <p>
              I am a researcher at{" "}
              <TextLink href="https://linkedin.com">LinkedIn</TextLink>{" "}
              currently working on LLM fairness and safety. Before joining
              LinkedIn, I did similar work at{" "}
              <TextLink href="https://meta.com">Meta</TextLink> from 2018 to
              2025, after completing my PhD in Computer Science at the{" "}
              <TextLink href="https://umich.edu">
                University of Michigan
              </TextLink>{" "}
              in 2018. I was advised by{" "}
              <TextLink href="https://strategicreasoning.org/michael-p-wellman/">
                Michael Wellman
              </TextLink>
              .
            </p>
            <p>
              I'm primarily interested in understanding and mitigating bias in
              AI systems, but my research interests include the incentives and
              dynamics in complex systems. My research often involves embedding
              learning, user representation, fairness, recommender systems as
              markets, and general learning.
            </p>
            <LinkList
              className="decoration-link-line justify-start"
              links={[
                {
                  name: "Resume",
                  href: "https://erikbrinkman.github.io/resume",
                },
                {
                  name: "Curriculum Vitae",
                  href: "https://erikbrinkman.github.io/resume/cv",
                },
              ]}
            />
          </Contents>
        </Section>
        <Details
          name="research"
          items={research}
          headerClass="bg-research text-research-ink"
          navClass="decoration-research-line"
        />
        <Section
          name="contact"
          headerClass="bg-contact text-contact-ink"
          navClass="decoration-contact-line"
          centered
        >
          <Contents>
            <p>
              You can find more information about me via any of the following
              services:
            </p>
            <ContactList
              contacts={[
                {
                  name: "GitHub",
                  handle: "github.com/erikbrinkman",
                  href: github,
                  icon: <SiGithub />,
                },
                {
                  name: "Google Scholar",
                  handle: "scholar.google.com",
                  href: scholar,
                  icon: <SiGooglescholar />,
                },
                {
                  name: "email",
                  handle: email,
                  href: `mailto:${email}`,
                  icon: <SiGmail />,
                },
                {
                  name: "LinkedIn",
                  handle: "linkedin.com/in/erikbrinkman",
                  href: linkedin,
                  icon: <FaLinkedin />,
                },
                {
                  name: "hafa.io",
                  handle: "hafaio.github.io",
                  href: hafa,
                  icon: <HafaIcon />,
                },
              ]}
            />
            <div className="mt-10 pt-6 border-t border-rule flex flex-col gap-3 text-[0.9375rem] text-muted">
              <p>
                Thanks to{" "}
                <TextLink href="https://www.alisonwilcoxdesign.com/">
                  Alison Wilcox
                </TextLink>{" "}
                for the logo design,{" "}
                <TextLink href="https://www.melaniedaveid.com/">
                  Melanie David
                </TextLink>{" "}
                for inspiring the design of this website, and{" "}
                <TextLink href="https://www.sarforre.com">
                  Sarah Forrest
                </TextLink>{" "}
                for design guidance.
              </p>
              <p>
                All project hero images come from{" "}
                <TextLink href="https://unsplash.com/">Unsplash</TextLink>{" "}
                courtesy of{" "}
                <TextLink href="https://unsplash.com/@matteocatanese">
                  Matteo Catanese
                </TextLink>{" "}
                and{" "}
                <TextLink href="https://unsplash.com/@marekpiwnicki">
                  Marek Piwnicki
                </TextLink>
                .
              </p>
            </div>
          </Contents>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
