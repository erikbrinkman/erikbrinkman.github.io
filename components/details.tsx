"use client";

import {
  type ReactElement,
  type Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdClose } from "react-icons/md";
import ActionButton from "./action-button";
import Contents from "./contents";
import Section from "./section";

/** how long a tile takes to settle; matches duration-700 on everything that moves with it */
const revealMs = 700;

export interface DetailsItem {
  name: string;
  title: string;
  subtitle: string;
  img: string;
  contents: ReactElement;
}

type TileState = "idle" | "open" | "folded";

function tileHeight(state: TileState): string {
  if (state === "open") {
    return "h-96";
  } else if (state === "folded") {
    return "h-0";
  } else {
    return "h-dvh";
  }
}

/** eases the element's top from where it sits now to `toOffset` in the viewport */
function glide(element: HTMLElement, toOffset: number): void {
  // reading the element's position every frame keeps it put while the tiles above it fold
  // and the heading column narrows, which a one-shot scroll or a hash jump cannot do
  const scrollTo = (offset: number) => {
    window.scrollTo(
      0,
      element.getBoundingClientRect().top + window.scrollY - offset,
    );
  };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollTo(toOffset);
  } else {
    const from = element.getBoundingClientRect().top;
    const start = performance.now();
    const root = document.documentElement;
    const step = (now: number) => {
      const fraction = Math.min(1, (now - start) / revealMs);
      const eased = 1 - (1 - fraction) ** 4;
      scrollTo(from + (toOffset - from) * eased);
      if (fraction < 1) {
        requestAnimationFrame(step);
      } else {
        root.style.scrollBehavior = "";
      }
    };
    // the page scrolls smoothly, which would fight a per-frame scroll
    root.style.scrollBehavior = "auto";
    requestAnimationFrame(step);
  }
}

interface DisplayProps extends DetailsItem {
  state: TileState;
  animated: boolean;
  expand: (() => void) | null;
  ref: Ref<HTMLDivElement>;
}

function DetailsDisplay({
  name,
  title,
  subtitle,
  img,
  state,
  animated,
  expand,
  contents,
  ref,
}: DisplayProps): ReactElement {
  const open = state === "open";
  const folded = state === "folded";
  // transitions stay off until after the first paint, so a paper linked to by url
  // is simply open rather than unfolding on arrival
  const motion = animated ? "transition-all duration-700 ease-reveal" : "";
  const cue = open
    ? "max-h-0 mt-0 opacity-0"
    : "max-h-9 mt-5 opacity-85 group-hover:opacity-100";
  // the bottom padding keeps the offset underline inside the box that the fold clips
  const cueClass = `block w-fit mx-auto pb-2 overflow-hidden font-sans uppercase font-bold text-[0.8125rem] tracking-[0.08em] underline decoration-2 decoration-violet-200 underline-offset-8 ${motion} ${cue}`;
  const tileClass = `group relative w-full flex flex-col justify-center items-center overflow-clip text-center text-white font-details ${motion} ${tileHeight(state)}`;
  const tileContents = (
    <>
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="tile-scrim absolute inset-0" />
      <div
        className={`relative px-6 capitalize drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] transition-opacity duration-300 ${folded ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-4xl font-bold leading-tight">{title}</h3>
        <div className="text-2xl leading-tight">{subtitle}</div>
        <span className={cueClass}>Read the abstract</span>
      </div>
    </>
  );

  return (
    <div ref={ref} id={name}>
      {expand === null ? (
        <div className={tileClass} aria-hidden={folded}>
          {tileContents}
        </div>
      ) : (
        <button
          type="button"
          className={`${tileClass} cursor-pointer`}
          aria-expanded={false}
          aria-controls={`${name}-contents`}
          onClick={expand}
        >
          {tileContents}
        </button>
      )}
      <div
        className={`grid ${animated ? "transition-[grid-template-rows] duration-700 ease-reveal" : ""} ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <Contents
            id={`${name}-contents`}
            className={`${motion} ${open ? "opacity-100 translate-y-0 delay-[250ms]" : "opacity-0 translate-y-5"}`}
          >
            {contents}
          </Contents>
        </div>
      </div>
    </div>
  );
}

export default function Details({
  name,
  items,
  headerClass = "",
  navClass = "",
}: {
  name: string;
  items: DetailsItem[];
  headerClass?: string;
  navClass?: string;
}): ReactElement {
  const [selected, setSelected] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);
  const projects = useRef<(HTMLDivElement | null)[]>([]);
  const expanded = selected !== null;

  // keep the expanded item in sync with the url hash, including back/forward nav
  useEffect(() => {
    const syncHash = () => {
      const ind = items.findIndex((item) => `#${item.name}` === location.hash);
      setSelected(ind === -1 ? null : ind);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [items]);

  // two frames: one to paint whatever the url asked for, one to arm the transitions
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        setAnimated(true);
      });
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, []);

  const collapse = useCallback(() => {
    const element = selected === null ? null : projects.current[selected];
    // hold the paper where it is while the tile grows back and the other one unfolds
    const resting = element?.getBoundingClientRect().top;
    setSelected(null);
    // drop the fragment without leaving a dangling "#" in the url
    history.pushState(null, "", location.pathname + location.search);
    if (element && resting !== undefined) {
      glide(element, resting);
    }
  }, [selected]);

  const details = items.map((item, ind) => {
    const expand = () => {
      const element = projects.current[ind];
      setSelected(ind);
      history.pushState(null, "", `#${item.name}`);
      if (element) {
        glide(element, 0);
      }
    };
    let state: TileState = "idle";
    if (selected === ind) {
      state = "open";
    } else if (expanded) {
      state = "folded";
    }
    return (
      <DetailsDisplay
        {...item}
        state={state}
        animated={animated}
        expand={expanded ? null : expand}
        ref={(element) => {
          projects.current[ind] = element;
        }}
        key={item.name}
      />
    );
  });

  // TODO the close button extends a little beyond the bottom due to
  // artificially setting the height of the parent to 0. We should fix that
  // eventually, but it's not clear how
  return (
    <Section
      name={name}
      headerClass={headerClass}
      navClass={navClass}
      expanded={expanded}
    >
      <div className="w-full relative">
        <div className="sticky top-0 h-0 z-10">
          <ActionButton
            label="Close project"
            hide={!expanded}
            onClick={collapse}
            className="ml-auto md:ml-0 -translate-x-6 translate-y-6 md:translate-y-24 bg-button text-button-ink"
          >
            <MdClose />
          </ActionButton>
        </div>
        {details}
      </div>
    </Section>
  );
}
