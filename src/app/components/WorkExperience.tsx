"use client";
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {
    experiences: Experience[]
}
export default function WorkExperience({ experiences }: Props) {

    return(
        <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className="experienceSection">
            <h3 className='experienceHeader'>Experience</h3>
            <div className="experienceCarousel">
                {experiences.sort((exp1, exp2) => exp1.dateStarted > exp2.dateStarted ? 1 : -1).map((exp) => (
                    <ExperienceCard key={exp._id} experience={exp} />
                ))}
            </div>
        </motion.section>
    )
}