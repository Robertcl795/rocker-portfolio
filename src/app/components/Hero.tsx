"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { urlFor } from '@/helpers/sanity';
import BgdCircles from "./BgdCircles";
import Image from "next/image";
import Link from "next/link";
import ComputersCanvas from './canvas-3d/Computer';

type Props = {
  pageInfo: PageInfo
}
export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "<CinemaEnthusiast/>",
      "coffee-music-enjoyer.py",
      "UI/UX Designer"
    ],
    loop: false,
    delaySpeed: 2000,
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-ice-600' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-ice-500' />
        </div>

        <div>
          <h1 className="heroHeader">
            Hi, I&apos;m <span className='text-ice-600'>Robert Rocker!</span>
          </h1>
          <p className={`text-3xl mt-2 text-ice-50`}>
            {text}
          </p>
        </div>
      </div>

      <ComputersCanvas />
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-ice-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}
