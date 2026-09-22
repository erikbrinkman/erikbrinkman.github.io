"use client";

import { type ReactElement, useEffect, useRef } from "react";
import Logo from "./logo";

// how far the logo trails the page, and how small it starts: the same numbers the
// footer-drift and footer-pop keyframes use
const driftVh = 20;
const startScale = 0.7;
// share of the remaining distance the logo covers each frame
const follow = 0.2;

export default function Footer(): ReactElement {
  const track = useRef<HTMLElement>(null);
  const logo = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const trackElement = track.current;
    const logoElement = logo.current;
    if (
      trackElement === null ||
      logoElement === null ||
      CSS.supports("animation-timeline: view()") ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    } else {
      // easing the drawn progress toward the scroll position, rather than jumping to it on
      // every scroll event, gives the logo the same lag the scroll timeline produces
      let shown = -1;
      let running = false;

      const settle = () => {
        const { top, height } = trackElement.getBoundingClientRect();
        const wanted = Math.min(
          1,
          Math.max(0, (window.innerHeight - top) / height),
        );
        const stepped = shown < 0 ? wanted : shown + (wanted - shown) * follow;
        const landed = Math.abs(wanted - stepped) < 0.001;
        shown = landed ? wanted : stepped;
        const popped = 1 - (1 - shown) ** 3;
        logoElement.style.translate = `0 ${(1 - shown) * driftVh}vh`;
        logoElement.style.scale = `${startScale + (1 - startScale) * popped}`;
        logoElement.style.opacity = `${popped}`;
        if (landed) {
          running = false;
        } else {
          requestAnimationFrame(settle);
        }
      };
      const wake = () => {
        if (!running) {
          running = true;
          requestAnimationFrame(settle);
        }
      };

      wake();
      window.addEventListener("scroll", wake, { passive: true });
      window.addEventListener("resize", wake);
      return () => {
        window.removeEventListener("scroll", wake);
        window.removeEventListener("resize", wake);
      };
    }
  }, []);

  return (
    <footer
      ref={track}
      className="footer-track w-full h-dvh relative overflow-hidden flex justify-center items-center bg-footer text-footer-ink"
    >
      <Logo
        ref={logo}
        label="Erik Brinkman"
        className="footer-logo w-[min(300px,60vw)] h-auto"
      />
    </footer>
  );
}
