"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { id: 1, name: "Netflix clone" },
    { id: 2, name: "Audio API Lab" },
    { id: 3, name: "Spotify clone" },
    { id: 4, name: "Python Dataviz Dashboard" },
  ];
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map(({ id, name }) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={id}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src="/profile.jpg"
              alt="Project image"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {id} of {projects.length}
                </span>{" "}
                {name}
              </h4>

              <p className="text-lg text-center md:text-left">
                Netflix ASDF is an app with Authentication implemented with
                Google. It has a stylish home screen responsive for all devices
                displaying a lot of movie covers, similar to Netflix.
                There&apos;s also a subscription page where you can watch your
                active monthly subscription. Even has Stripe Payments for the
                subscription!
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}
