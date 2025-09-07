import type { PropsWithChildren, ReactElement } from "react";

export default function ActionButton({
  hide = false,
  className = "",
  onClick,
  children,
}: PropsWithChildren<{
  hide?: boolean;
  className?: string;
  onClick?: () => void;
}>): ReactElement {
  const scale = hide ? "scale-0" : "scale-100";
  const cursor = onClick ? "cursor-pointer" : "";
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyUp={() => {
        // TODO allow keyboard nav
      }}
      className={`transition-transform duration-1000 ${scale} w-12 h-12 ${cursor} flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
