import type { PropsWithChildren, ReactElement } from "react";
import Nav from "./nav";

export default function Section({
  name,
  headerClass = "",
  navClass = "",
  expanded = false,
  centered = false,
  children,
}: PropsWithChildren<{
  name: string;
  headerClass?: string;
  navClass?: string;
  expanded?: boolean;
  centered?: boolean;
}>): ReactElement {
  const titleBasis = expanded ? "md:basis-1/4" : "md:basis-1/2";
  const bodyLayout = centered ? "md:flex md:items-center" : "";
  const headingId = `${name}-heading`;

  return (
    <section
      className="flex flex-col md:flex-row"
      id={name}
      aria-labelledby={headingId}
    >
      <div
        className={`h-dvh w-full transition-all duration-700 ease-reveal grow md:sticky top-0 flex flex-col p-6 justify-between items-center ${titleBasis} ${headerClass}`}
      >
        <div />
        <h2
          id={headingId}
          className="font-section text-8xl leading-none text-center capitalize"
        >
          {name}
        </h2>
        <div>
          <Nav className={`hidden md:flex ${navClass}`} />
        </div>
      </div>
      <div
        className={`md:min-h-dvh w-full transition-all duration-700 ease-reveal md:basis-1/2 grow ${bodyLayout}`}
      >
        {children}
      </div>
    </section>
  );
}
