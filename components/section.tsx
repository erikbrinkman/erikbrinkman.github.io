import { PropsWithChildren, ReactElement } from "react";
import Nav from "./nav";

export default function Section({
  name,
  headerClass = "",
  navClass = "",
  expanded = false,
  children,
}: PropsWithChildren<{
  name: string;
  headerClass?: string;
  navClass?: string;
  expanded?: boolean;
}>): ReactElement {
  const titleBasis = expanded ? "md:basis-1/4" : "md:basis-1/2";

  return (
    <div className="flex flex-col md:flex-row" id={name}>
      <div
        className={`h-screen w-full transition-all duration-1000 grow md:sticky top-0 flex flex-col p-6 justify-between items-center ${titleBasis} ${headerClass}`}
      >
        <div />
        <h2 className="font-section text-8xl text-center capitalize">{name}</h2>
        <div>
          <Nav className={`hidden md:block ${navClass}`} />
        </div>
      </div>
      <div className="md:min-h-screen w-full transition-all duration-1000 md:basis-1/2 grow">
        {children}
      </div>
    </div>
  );
}
