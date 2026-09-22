"use client";

import { type ReactElement, useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import ActionButton from "./action-button";
import Contents from "./contents";
import Section from "./section";

export interface DetailsItem {
  name: string;
  title: string;
  subtitle: string;
  img: string;
  contents: ReactElement;
}

interface DisplayProps extends DetailsItem {
  expanded: boolean | null;
  expand: () => void;
}

function DetailsDisplay({
  name,
  title,
  subtitle,
  img,
  expanded,
  expand,
  contents,
}: DisplayProps): ReactElement {
  // navigate to start for smooth transitions
  const navExpand = useCallback(() => {
    expand();
    location.hash = `#${name}`;
  }, [name, expand]);

  const show = expanded === false ? "hidden" : "";
  const showContent = expanded ? "block" : "hidden";
  const titleHeight = expanded ? "h-96" : "h-dvh";
  const titleClass = `group relative transition-all duration-1000 ${titleHeight} w-full flex flex-col justify-center items-center text-white font-details overflow-clip`;
  const titleContents = (
    <>
      {/* this div is necessary so that the scrolling pins appropriately */}
      <div className="w-full h-full absolute" />
      <div
        className="w-full h-full absolute bg-cover bg-center -z-10 group-hover:scale-110 transition-all duration-1000"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="text-center capitalize drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
        <h3 className="text-4xl font-bold">{title}</h3>
        <div className="text-2xl">{subtitle}</div>
      </div>
    </>
  );
  return (
    <div className={show} id={name}>
      {expanded === null ? (
        <button
          type="button"
          className={`${titleClass} cursor-pointer`}
          aria-expanded={false}
          aria-controls={`${name}-contents`}
          onClick={navExpand}
        >
          {titleContents}
        </button>
      ) : (
        <div className={titleClass}>{titleContents}</div>
      )}
      <Contents className={showContent} id={`${name}-contents`}>
        {contents}
      </Contents>
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
  const collapse = useCallback(() => {
    setSelected(null);
    // drop the fragment without leaving a dangling "#" in the url
    history.replaceState(null, "", location.pathname + location.search);
  }, []);
  const expanded = selected !== null;

  // keep the expanded item in sync with the url hash, including back/forward nav
  useEffect(() => {
    const syncHash = () => {
      const ind = items.findIndex((item) => `#${item.name}` === location.hash);
      setSelected(ind === -1 ? null : ind);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [items]);

  const details = [];
  for (const [ind, item] of items.entries()) {
    const expand = () => {
      setSelected(ind);
    };
    details.push(
      <DetailsDisplay
        {...item}
        expanded={selected === null ? null : selected === ind}
        expand={expand}
        key={item.name}
      />,
    );
  }

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
            className="ml-auto md:ml-0 -translate-x-6 translate-y-6 md:translate-y-24 bg-violet-200"
          >
            <MdClose />
          </ActionButton>
        </div>
        {details}
      </div>
    </Section>
  );
}
