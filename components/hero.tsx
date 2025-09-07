import Image from "next/image";
import type { ReactElement } from "react";
import logo from "../images/logo.svg";
import Nav from "./nav";

export default function Hero(): ReactElement {
  const { src } = logo as { src: string };
  return (
    <div className="w-full h-screen relative bg-gray-600">
      <div className="w-full h-screen absolute flex flex-col justify-center items-center blur-sm opacity-50">
        <Image alt="blurred logo" src={src} width="400" height="400" />
      </div>
      <div className="w-full h-screen absolute flex flex-col justify-between items-center p-6 text-white">
        <div className="uppercase font-bold text-sm" />
        <h1 className="relative font-section font-bold text-name text-center max-w-[90%]">
          Erik Brinkman
        </h1>
        <div>
          <Nav className="decoration-violet-200" />
        </div>
      </div>
    </div>
  );
}
