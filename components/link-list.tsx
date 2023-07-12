import { ReactElement } from "react";
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
      className="font-bold hover:underline decoration-inherit h-8"
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
  className = "",
  tag = "div",
}: {
  links: readonly LinkItem[];
  className?: string;
  tag?: "div" | "nav";
}): ReactElement {
  const [first, ...rest] = links;
  const items = [<Item {...first} key="0" />];
  for (const [i, item] of rest.entries()) {
    items.push(
      <span className="select-none" key={`sep-${i}`}>
        /
      </span>,
    );
    items.push(<Item {...item} key={i + 1} />);
  }
  const Tag = tag;
  return (
    <Tag
      className={`flex flex-wrap space-x-4 uppercase no-underline text-sm decoration-2 underline-offset-8 ${className}`}
    >
      {items}
    </Tag>
  );
}
