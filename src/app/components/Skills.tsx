"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  skills: Technology[]
}
export default function Skills({ skills }: Props) {
  return (
    <motion.div className="skillsSection">
      <h3 className="skillsHeader">
        Skills
      </h3>
      <h3 className="skillsHint">
        Hover over a skill for current proficiency
      </h3>
      <div className="skillsGrid">
        {skills.map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
