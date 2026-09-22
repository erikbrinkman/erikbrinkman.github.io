import { Josefin_Sans, Lato } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-josefin-sans",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className={`${josefinSans.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
