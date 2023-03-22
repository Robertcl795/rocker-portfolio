"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi, i'm Robert Carrillo!",
      "RandomFrontendDeveloper.tsx",
      "<CinemaEnthusiast/>",
      "coffee-music-enjoyer.py",
    ],
    loop: false,
    delaySpeed: 2000
  });
  return <div>
    <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
    </h1>
  </div>;
};
