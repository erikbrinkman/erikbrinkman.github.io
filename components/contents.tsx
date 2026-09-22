import type { PropsWithChildren, ReactElement } from "react";

/** a default block of text and images about things */
export default function Contents({
  children,
  className = "",
  id,
}: PropsWithChildren<{ className?: string; id?: string }>): ReactElement {
  return (
    <div id={id} className={`space-y-4 p-10 text-lg ${className}`}>
      {children}
    </div>
  );
}
