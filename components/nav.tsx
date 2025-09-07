import type { ReactElement } from "react";
import { navItems } from "../utils/nav-items";
import LinkList from "./link-list";

export default function Nav({
  className = "",
}: {
  className?: string;
}): ReactElement {
  return <LinkList links={navItems} className={className} tag="nav" />;
}
