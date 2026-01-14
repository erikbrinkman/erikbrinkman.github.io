import type { Metadata } from "next";
import Image from "next/image";
import type { PropsWithChildren, ReactElement } from "react";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiGooglescholar,
  SiLinkedin,
} from "react-icons/si";
import Contents from "../components/contents";
import Details, { type DetailsItem } from "../components/details";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Link from "../components/link";
import LinkList from "../components/link-list";
import MobileNav from "../components/mobile-nav";
import Section from "../components/section";
import cdc from "../images/cdc-W7L6KCaNfRU-unsplash.jpg";
import d3dag from "../images/d3-dag.png";
import mountains from "../images/jon-r8AFUpRp0J0-unsplash.jpg";
import goat from "../images/marek-piwnicki-WYtS0f4IaT8-unsplash.jpg";
import newyork from "../images/matteo-catanese-tr7PoBH0Aow-unsplash.jpg";

export const metadata: Metadata = {
  title: "Erik Brinkman",
  description: "Researcher in AI Fairness and Safety",
};

function TextLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>): ReactElement {
  return (
    <Link
      href={href}
      className="text-violet-400 hover:underline underline-offset-4 decoration-violet-200"
    >
      {children}
    </Link>
  );
}

const projects: DetailsItem[] = [
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
        <LinkList
          links={[{ name: "arXiv", href: "https://arxiv.org/pdf/2410.01606" }]}
          className="decoration-violet-200 justify-center"
        />
      </>
    ),
  },
  {
    name: "d3dag",
    title: "D3 DAG",
    subtitle: "DAG layout library",
    img: cdc.src,
    contents: (
      <>
        <p>
          D3 DAG is is an open source typescript library for rendering directed
          acyclic graphs using a few different layout methods. It&apos;s based
          around the layered dag methodology from Sugiyama.
        </p>
        <p>Using D3 Dag you can render DAGs like:</p>
        <div className="max-w-xs mx-auto">
          <Image {...d3dag} alt="example dag" />
        </div>
        <LinkList
          links={[
            { name: "NPM", href: "https://www.npmjs.com/package/d3-dag" },
            { name: "Github", href: "https://github.com/erikbrinkman/d3-dag" },
          ]}
          className="decoration-violet-200 justify-center"
        />
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
        <div className="flex justify-around uppercase">
          <span>E. Brinkman</span>
          <span>M. P. Wellman</span>
        </div>
        <LinkList
          links={[
            { name: "PDF", href: "https://dl.acm.org/authorize?N30521" },
            { name: "Video", href: "https://youtu.be/26djyL_5HsI" },
          ]}
          className="decoration-violet-200 justify-center"
        />
      </>
    ),
  },
  {
    name: "repub",
    // eslint-disable-next-line spellcheck/spell-checker
    title: "reMarkable ePub",
    // eslint-disable-next-line spellcheck/spell-checker
    subtitle: "ePub render for reMarkable",
    img: mountains.src,
    contents: (
      <>
        <p>
          rePub is a chrome extension that provides website to epub conversion
          specifically tailored to viewing on remarkable. In includes several
          improvements over the standard reMarkable extension for saving
          websites:
        </p>
        <ul className="list-[square] pl-4">
          <li>
            It saves images, making many articles much more detailed. This
            extension also provides options to tweak the uploaded images, making
            them much more readable.
          </li>
          <li>
            It uses the page capture api, allowing it to require fewer
            permissions than the default Read on reMarkable extension.
          </li>
          <li>
            It provides many other options like adjusting the default
            justification or margins.
          </li>
          <li>
            It&apos;s open source so it can be improved and modified if
            it&apos;s not working as desired.
          </li>
        </ul>
        <LinkList
          links={[
            {
              name: "Chrome",
              href: "https://chrome.google.com/webstore/detail/repub/blkjpagbjaekkpojgcgdapmikoaolpbl",
            },
            { name: "Github", href: "https://github.com/hafaio/repub" },
          ]}
          className="decoration-violet-200 justify-center"
        />
      </>
    ),
  },
];

export default function Home(): ReactElement {
  return (
    <div>
      <MobileNav />
      <div
        className="h-screen overflow-y-scroll scroll-smooth overflow-x-clip"
        style={{ perspective: "1px" }}
      >
        <Hero />
        <Section
          name="about"
          headerClass="bg-violet-200"
          navClass="decoration-white"
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
              className="decoration-violet-200 justify-center"
            />
          </Contents>
        </Section>
        <Details
          name="projects"
          items={projects}
          headerClass="text-gray-800 bg-white"
          navClass="decoration-violet-200"
        />
        <Section
          name="contact"
          headerClass="text-white bg-gray-800"
          navClass="decoration-violet-200"
        >
          <Contents>
            <p>
              You can find more information about me via any of the following
              services:
            </p>
            <LinkList
              links={[
                {
                  name: "Github",
                  href: "https://github.com/erikbrinkman",
                  icon: <SiGithub />,
                },
                {
                  name: "Google Scholar",
                  href: "https://scholar.google.com/citations?user=4CerxXxb7KAC",
                  icon: <SiGooglescholar />,
                },
                {
                  name: "email",
                  // eslint-disable-next-line spellcheck/spell-checker
                  href: "mailto:erik.brinkman@gmail.com",
                  icon: <SiGmail />,
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/erikbrinkman",
                  icon: <SiLinkedin />,
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/erik.brinkman",
                  icon: <SiFacebook />,
                },
              ]}
              className="decoration-violet-200 justify-center"
            />
            <p className="pt-16">
              Thanks to{" "}
              <TextLink href="https://www.alisonwilcoxdesign.com/">
                Alison Wilcox
              </TextLink>{" "}
              for the logo design,{" "}
              <TextLink href="https://www.melaniedaveid.com/">
                Melanie David
              </TextLink>{" "}
              for inspiring the design of this website, and{" "}
              <TextLink href="https://www.sarforre.com">Sarah Forrest</TextLink>{" "}
              for design guidance.
            </p>
            <p>
              All project hero images come from{" "}
              <TextLink href="https://unsplash.com/">Unsplash</TextLink>{" "}
              courtesy of{" "}
              <TextLink href="https://unsplash.com/@cdc">CDC</TextLink>,{" "}
              <TextLink href="https://unsplash.com/@matteocatanese">
                Matteo Catanese
              </TextLink>
              , <TextLink href="https://unsplash.com/@j_mk18">Jon</TextLink>,{" "}
              <TextLink href="https://unsplash.com/@zoltantasi">
                Zoltan Tasi
              </TextLink>
              ,{" "}
              <TextLink href="https://unsplash.com/@yogidan2012">
                Daniele Levis Pelusi
              </TextLink>
              , and{" "}
              <TextLink href="https://unsplash.com/@marekpiwnicki">
                Marek Piwnicki
              </TextLink>
              .
            </p>
          </Contents>
        </Section>
        <Footer />
      </div>
    </div>
  );
}
