import { ReactElement } from "react";
import StaticImage from "../components/static-image";
import logo from "../images/logo.svg";

function Logo({ clipPath }: { clipPath?: string }): ReactElement {
  const { src } = logo as { src: string };
  return (
    <StaticImage
      alt="logo"
      src={src}
      width="300"
      height="300"
      style={{ clipPath }}
    />
  );
}

function Parallax({
  parallax = 0,
  clipPath,
}: {
  parallax?: number;
  clipPath?: string;
}): ReactElement {
  // NOTE ideally we want parallax to be positive, but that places elements
  // behind the background and extends y beyond the area we want. I'm not sure
  // if there's a way to address that in an elegant way
  // TODO why this is this translate x necessary, and still not aligned, in
  // google mobile dev, it's not necessary, so it's not clear what's causing
  // it...
  return (
    <div
      className="absolute w-full h-full flex flex-col justify-center items-center"
      style={{
        transform: `translate3d(0, 0, ${-parallax}px) scale(${parallax + 1})`,
      }}
    >
      <div>
        <Logo clipPath={clipPath} />
      </div>
    </div>
  );
}

export default function Footer(): ReactElement {
  // TODO get a sliced parallax working
  return (
    <div
      className="w-full h-screen relative bg-violet-200"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Parallax parallax={-0.8} />
    </div>
  );
}
