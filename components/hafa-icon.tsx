import type { ReactElement } from "react";

// monochrome version of hafa.io's logo: two hexagons with their right side filled
export default function HafaIcon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.866666 33.866666"
      height="1em"
      width="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        fill="none"
        d="M10.584 2.910 4.234 9.261l6.350 6.350h12.700l6.349-6.350-6.349-6.351z"
      />
      <path
        fill="none"
        d="M10.583 18.256l-6.350 6.350 6.350 6.350h12.700l6.349-6.350-6.349-6.350z"
      />
      <path d="M17.066 2.910v12.701h6.218l6.349-6.350-6.349-6.351z" />
      <path d="M17.066 18.256v12.700h6.218l6.349-6.350-6.349-6.350z" />
    </svg>
  );
}
