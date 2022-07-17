import { ReactElement } from "react";
import { isMobile } from "react-device-detect";
import StaticImage from "../components/static-image";
import logo from "../images/logo.svg";

function Logo({ clipPath }: { clipPath: string }): ReactElement {
  return (
    <StaticImage
      alt="logo"
      src={logo.src}
      width="300"
      height="300"
      style={{ clipPath }}
    />
  );
}

function Paralax({
  parallax = 0,
  clipPath,
}: {
  parallax?: number;
  clipPath: string;
}): ReactElement {
  // NOTE ideally we want parallax to be positive, but that places elements
  // behind the background and extends y beyond the area we want. I'm not sure
  // if there's a way to address that in an elegant way
  // TODO why this is this translate x necessary, and still not aligned, in
  // google mobile dev, it's not necessary, so it's not clear what's causing
  // it...
  const xtrans = isMobile ? 0 : -8.5 * parallax;
  return (
    <div
      className="absolute w-full h-full flex flex-col justify-center items-center"
      style={{
        transform: `translate3d(${xtrans}px, 0, ${-parallax}px) scale(${
          parallax + 1
        })`,
      }}
    >
      <div>
        <Logo clipPath={clipPath} />
      </div>
    </div>
  );
}

export default function Footer(): ReactElement {
  return (
    <div
      className="w-full h-screen relative bg-violet-200"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* E top bar */}
      <Paralax
        clipPath="polygon(0 0, 55% 0, 55% 18%, 0 18%)"
        parallax={-0.25}
      />
      {/* E middle bar */}
      <Paralax
        clipPath="polygon(0 40%, 50% 40%, 50% 57%, 0 57%)"
        parallax={-0.8}
      />
      {/* E side bar */}
      <Paralax
        clipPath="polygon(34% 18%, 55% 18%, 55% 100%, 34% 100%)"
        parallax={-0.1}
      />
      {/* E bottom bar */}
      <Paralax
        clipPath="polygon(0 80%, 34% 80%, 34% 100%, 0 100%)"
        parallax={-0.6}
      />
      {/* 3 top */}
      <Paralax
        clipPath="polygon(100% 0, 55% 0, 55% 30%, 100% 30%)"
        parallax={-0.8}
      />
      {/* 3 middle */}
      <Paralax
        clipPath="polygon(100% 30%, 55% 30%, 55% 70%, 100% 70%)"
        parallax={-0.2}
      />
      {/* 3 bottom */}
      <Paralax
        clipPath="polygon(100% 70%, 55% 70%, 55% 100%, 100% 100%)"
        parallax={-0.65}
      />
    </div>
  );
}
