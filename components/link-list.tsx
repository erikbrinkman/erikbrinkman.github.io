import type { ReactElement } from "react";
import Link from "./link";

export interface LinkItem {
  name: string;
  href: string;
  icon?: ReactElement;
}

function Item({ name, href, icon }: LinkItem): ReactElement {
  return (
    <Link
      href={href}
      className="font-bold hover:underline focus-visible:underline decoration-inherit h-8"
    >
      <span className="inline-flex space-x-2 items-center">
        {icon}
        <span>{name}</span>
      </span>
    </Link>
  );
}

export default function LinkList({
  links,
  className = "decoration-link-line justify-center",
  tag = "div",
}: {
  links: readonly LinkItem[];
  className?: string;
  tag?: "div" | "nav";
}): ReactElement {
  const items = [];
  for (const item of links) {
    if (items.length) {
      items.push(
        <span
          className="select-none px-1"
          aria-hidden="true"
          key={`sep-${item.href}`}
        >
          /
        </span>,
      );
    }
    items.push(<Item {...item} key={item.href} />);
  }
  const Tag = tag;
  return (
    <Tag
      className={`flex flex-wrap items-baseline gap-x-4 uppercase no-underline text-sm tracking-wide decoration-2 underline-offset-8 ${className}`}
    >
      {items}
    </Tag>
  );
}
