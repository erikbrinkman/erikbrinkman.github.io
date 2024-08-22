import { Metadata } from "next";
import { PropsWithChildren, ReactElement } from "react";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiGooglescholar,
  SiLinkedin,
} from "react-icons/si";
import Code from "../components/code";
import Contents from "../components/contents";
import Details, { DetailsItem } from "../components/details";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Link from "../components/link";
import LinkList from "../components/link-list";
import MobileNav from "../components/mobile-nav";
import Section from "../components/section";
import StaticImage from "../components/static-image";
import cdc from "../images/cdc-W7L6KCaNfRU-unsplash.jpg";
import d3dag from "../images/d3-dag.png";
import mountains from "../images/jon-r8AFUpRp0J0-unsplash.jpg";
import newyork from "../images/matteo-catanese-tr7PoBH0Aow-unsplash.jpg";
import faraday from "../images/zoltan-tasi-XM40OT9lIFM-unsplash.jpg";

export const metadata: Metadata = {
  title: "Erik Brinkman",
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
          <StaticImage {...d3dag} alt="example dag" />
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
  {
    // eslint-disable-next-line spellcheck/spell-checker
    name: "asciimath",
    // eslint-disable-next-line spellcheck/spell-checker
    title: "Ascii Math Unicode",
    subtitle: "Render Unicode Math",
    img: faraday.src,
    contents: (
      <>
        <p>
          AsciiMath Unicode is a chrome extension for converting AsciiMath into
          its formatted unicode representation. This representation is easier to
          read and can still be sent as plain text in almost any format without
          otherwise requiring advanced rendering.
        </p>
        <p>This extension will turn the somewhat legible expression</p>
        <Code>sum_k phi(k)^2</Code>
        <p>into</p>
        <Code>∑ₖ ϕ(k)²</Code>
        <p>
          Which is closer to the mathematical rendering, but also pure unicode
          and easily transferred between rendering environments.
        </p>
        <p>
          This extension uses a custom AsciiMath parser that allows it to
          preserve white space, which all other parsers inherently strip.
        </p>
        <LinkList
          links={[
            {
              name: "Chrome",
              href: "https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab",
            },
            {
              name: "Github",
              href: "https://github.com/hafaio/ascii-math-unicode",
            },
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
              I am a research scientist at{" "}
              <TextLink href="https://meta.com">Meta</TextLink> currently
              working on LLM safety, but with projects ranging from ML fairness
              to user representation in recommendation systems. Before joining
              Meta I completed my PhD in Computer Science at the{" "}
              <TextLink href="https://umich.edu">
                University of Michigan
              </TextLink>{" "}
              from 2012 to 2018. There I was advised by{" "}
              <TextLink href="https://strategicreasoning.org/michael-p-wellman/">
                Michael Wellman
              </TextLink>
              .
            </p>
            <p>
              My research interests include the incentives and dynamics in
              complex systems. This relates to embedding learning, user
              representation, fairness, recommender systems as markets, and
              general learning.
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
              , and{" "}
              <TextLink href="https://unsplash.com/@yogidan2012">
                Daniele Levis Pelusi
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
