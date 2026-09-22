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
  const scale = hide ? "scale-0" : "scale-100";
  const cursor = onClick ? "cursor-pointer" : "";
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      onClick={onClick}
      className={`transition-transform duration-1000 ${scale} w-12 h-12 ${cursor} flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
