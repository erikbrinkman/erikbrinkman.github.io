import type { PropsWithChildren, ReactElement } from "react";

export default function ActionButton({
  label,
  hide = false,
  expanded,
  className = "",
  onClick,
  children,
}: PropsWithChildren<{
  label: string;
  hide?: boolean;
  expanded?: boolean;
  className?: string;
  onClick?: () => void;
}>): ReactElement {
  // appearing waits for the layout behind it to settle
  const scale = hide ? "scale-0" : "scale-100 delay-[400ms]";
  const cursor = onClick ? "cursor-pointer" : "";
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      tabIndex={hide ? -1 : undefined}
      onClick={onClick}
      className={`transition-transform duration-300 ease-reveal ${scale} w-12 h-12 ${cursor} flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
