import { PropsWithChildren, ReactElement } from "react";

export default function Code({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return (
    <code className="block whitespace-pre overflow-x-auto p-6 bg-gray-600 text-white">
      {children}
    </code>
  );
}
