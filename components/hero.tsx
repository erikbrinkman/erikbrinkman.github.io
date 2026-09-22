import type { ReactElement } from "react";
import Logo from "./logo";
import Nav from "./nav";

export default function Hero(): ReactElement {
  return (
    <header className="w-full h-dvh relative overflow-hidden bg-hero text-hero-ink">
      <div className="absolute inset-0 flex justify-center items-center blur-sm opacity-50 text-black">
        <Logo className="w-[min(400px,80vw)] h-auto" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between items-center p-6">
        <div />
        <h1 className="relative font-section font-bold text-name leading-none text-center max-w-[90%]">
          Erik Brinkman
        </h1>
        <div>
          <Nav className="decoration-violet-200" />
        </div>
      </div>
    </header>
  );
}
