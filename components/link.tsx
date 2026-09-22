import Link from "next/link";
import type { PropsWithChildren, ReactElement } from "react";

// only web links leave the site; mailto and friends hand off to another app
function isExternal(url: string): boolean {
  try {
    const { protocol } = new URL(url);
    return protocol === "http:" || protocol === "https:";
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
    <Link href={href} className={className} {...opts}>
      {children}
    </Link>
  );
}
