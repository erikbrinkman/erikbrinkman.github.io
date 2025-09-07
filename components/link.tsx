import Link from "next/link";
import type { PropsWithChildren, ReactElement } from "react";

function isExternal(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function CustomLink({
  href,
  className = "",
  external = isExternal(href),
  children,
}: PropsWithChildren<{
  href: string;
  className?: string;
  external?: boolean;
}>): ReactElement {
  // eslint-disable-next-line spellcheck/spell-checker
  const opts = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <span className={className}>
      <Link href={href}>
        <span {...opts}>{children}</span>
      </Link>
    </span>
  );
}
