import type { ReactElement } from "react";

export default function Authors({
  names,
}: {
  names: readonly string[];
}): ReactElement {
  const items = [];
  for (const name of names) {
    if (items.length) {
      items.push(
        <span className="select-none" aria-hidden="true" key={`sep-${name}`}>
          &middot;
        </span>,
      );
    }
    items.push(<span key={name}>{name}</span>);
  }
  return (
    <div className="flex flex-wrap justify-center gap-x-3 uppercase text-[0.9375rem] tracking-wide text-muted">
      {items}
    </div>
  );
}
