"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgdCircles from "./BgdCircles";
import Image from "next/image";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi, i'm Robert Carrillo!",
      "RandomDeveloper.tsx",
      "<CinemaEnthusiast/>",
      "coffee-music-enjoyer.py",
    ],
    loop: false,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0">
      <BgdCircles />
      <Image
        className="relative rounded-full h-32 w-32 items-center justify-center"
        alt="Hero Image"
        src="/profile.jpg"
        width={400}
        height={400}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}
