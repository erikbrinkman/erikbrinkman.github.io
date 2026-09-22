import type { PropsWithChildren, ReactElement } from "react";

/** a default block of text and images about things */
export default function Contents({
  children,
  className = "",
  id,
}: PropsWithChildren<{ className?: string; id?: string }>): ReactElement {
  return (
    <div
      id={id}
      className={`space-y-4 max-w-2xl p-10 md:px-12 md:py-16 lg:px-16 lg:py-20 ${className}`}
    >
      {children}
    </div>
  );
}
