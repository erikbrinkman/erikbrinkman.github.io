import type { PropsWithChildren, ReactElement } from "react";

/** a default block of text and images about things */
export default function Contents({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>): ReactElement {
  return (
    <div className={`space-y-4 p-10 text-lg text-justify ${className}`}>
      {children}
    </div>
  );
}
