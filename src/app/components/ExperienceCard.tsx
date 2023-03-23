"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <article
      className="
            flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
        "
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-32 h-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="/profile.jpg"
        alt="Experience card image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Rocker Labs</h4>
        <p className="font-bold text-2xl mt-1">Rocker Labs</p>
        <div className="flex space-x-2 my-2">
        <motion.img
            className="w-10 h-10 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            src="/profile.jpg"
            alt="Tech item"
        />
        <motion.img
            className="w-10 h-10 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            src="/profile.jpg"
            alt="Tech item"
        />
        <motion.img
            className="w-10 h-10 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            src="/profile.jpg"
            alt="Tech item"
        />
        </div>
        <p>Started working... - Ended in...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
