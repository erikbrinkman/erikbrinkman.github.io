"use client";

import { type ReactElement, useCallback, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { navItems } from "../utils/nav-items";
import ActionButton from "./action-button";

interface LinkItemProps {
  name: string;
  href: string;
  close: () => void;
}

function LinkItem({ name, href, close }: LinkItemProps): ReactElement {
  return (
    <a href={href} onClick={close} className="uppercase font-bold">
      {name}
    </a>
  );
}

export default function MobileNav(): ReactElement {
  const [collapsed, setCollapsed] = useState(true);
  const click = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  const close = useCallback(() => {
    setCollapsed(true);
  }, []);
  const className = collapsed ? "hidden" : "";

  const linkItems = navItems.map((item) => (
    <LinkItem {...item} close={close} key={`${item.name}:${item.href}`} />
  ));
  const icon = collapsed ? <MdMenu /> : <MdClose />;
  return (
    <div className="fixed z-10 w-full md:hidden">
      <ActionButton
        onClick={click}
        className="absolute m-6 z-50 bg-gray-800 text-white"
      >
        {icon}
      </ActionButton>
      <div
        className={`absolute h-screen w-full z-40 flex flex-col justify-center items-center space-y-2 bg-white text-xl ${className}`}
      >
        {linkItems}
      </div>
    </div>
  );
}
