"use client";
import { urlFor } from "@/helpers/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience
}
export default function ExperienceCard({ experience }: Props) {
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
        className="w-32 h-32 object-cover object-center xl:h-[200px] xl:w-[400px]"
        src={urlFor(experience?.companyImage).url()}
        alt="Experience card image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
        { experience.technologies?.map(technology => (
          <motion.img
            key={`${experience._id}-${technology._id}`}
            className="w-10 h-10 rounded-full object-cover object-center xl:h-[50px] xl:w-[50px]"
            src={urlFor(technology.image).url()}
            alt={`${technology.title} Logo`}
          />
        ))}
        </div>
        <p>{`Started working ${experience.dateStarted} - ${experience.isCurrentlyWorkingHere ? "Currently Working here" : `Ended in ${experience.dateEnded}`}`}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map((point, i) => (
              <li key={`point-${i}`}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  );
}
