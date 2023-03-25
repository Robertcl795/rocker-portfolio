"use client";
import { urlFor } from "@/helpers/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  projects: Project[]
}
export default function Projects({ projects }: Props) {
    return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map(({ _id, image, linkToBuild, summary, technologies, title }, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={_id}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src={urlFor(image).url()}
              alt={`${title} project image`}
              className="xl:h-[400px] xl:w-[750px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}
                </span>{" "}
                {title}
              </h4>

              <p className="text-lg text-center md:text-left">
                {summary}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}
