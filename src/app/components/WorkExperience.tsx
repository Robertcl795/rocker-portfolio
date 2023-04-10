'use client';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { textVariant } from '@/helpers/motion';

type Props = {
  experiences: Experience[];
};
export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.section className='padding' variants={textVariant(100)}>
      <p className={`text-center`}>What I have done so far</p>
      <h3 className={`experienceHeader text-center`}>Work Experience.</h3>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}
