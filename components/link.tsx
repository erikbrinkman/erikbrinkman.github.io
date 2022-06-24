import Link from "next/link";
import { PropsWithChildren, ReactElement } from "react";

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
  const opts = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <span className={className}>
      <Link href={href}>
        <a {...opts}>{children}</a>
      </Link>
    </span>
  );
}