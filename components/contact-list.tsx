import type { ReactElement } from "react";
import Link from "./link";

export interface ContactItem {
  name: string;
  handle: string;
  href: string;
  icon: ReactElement;
}

function Item({ name, handle, href, icon }: ContactItem): ReactElement {
  return (
    <li>
      <Link
        href={href}
        className="group grid grid-cols-[1.25rem_1fr] items-start gap-x-3 py-1"
      >
        <span className="mt-1 text-[1.125rem]" aria-hidden="true">
          {icon}
        </span>
        <span>
          <span className="block uppercase font-bold text-sm tracking-wide decoration-2 decoration-link-line underline-offset-[6px] group-hover:underline group-focus-visible:underline">
            {name}
          </span>
          <span className="block text-[0.9375rem] text-muted [overflow-wrap:anywhere]">
            {handle}
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function ContactList({
  contacts,
}: {
  contacts: readonly ContactItem[];
}): ReactElement {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none">
      {contacts.map((contact) => (
        <Item {...contact} key={contact.href} />
      ))}
    </ul>
  );
}
