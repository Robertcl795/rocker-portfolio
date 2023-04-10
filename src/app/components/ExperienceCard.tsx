'use client';
import { urlFor } from '@/helpers/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type Props = {
  experience: Experience;
};
export default function ExperienceCard({ experience }: Props) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={`${experience.dateStarted}-${experience.dateEnded || 'Current'}`}
      iconStyle={{ background: '' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={urlFor(experience.companyImage).url()}
            alt={experience.company}
            className='w-[60px] h-[60px] object-contain'
            width={200}
            height={200}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.jobTitle}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}
