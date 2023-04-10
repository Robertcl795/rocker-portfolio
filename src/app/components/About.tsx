'use client';
import { fadeIn } from '@/helpers/motion';
import { urlFor } from '@/helpers/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo;
};
type CardProps = {
  index: number;
  title: string;
  icon: string;
};

const cards = [
  { text: 'Frontend Expert', image: '/front-end.png' },
  { text: 'UI/UX Developer', image: '/ui.png' },
  { text: 'Backend Developer ', image: '/api.png' },
];

export default function About({ pageInfo }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='aboutSection'
    >
      <h3 className='aboutHeader sectionTitle'>About</h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='aboutImageContainer'
      >
        <motion.img
          alt='About me image'
          src={urlFor(pageInfo?.profilePic).url()}
          className='aboutImage'
        />
      </motion.div>
      <div className='aboutDescription space-y-10 px-0 md:px-10'>
        <h4 className='sectionHeader'>
          Here&apos;s my{' '}
          <span className='underline text-ice-500'>life story</span>
        </h4>
        <p className='sectionText'>{pageInfo.backgroundInformation}</p>
      </div>
      <div className='aboutCards px-10'>
        {cards.map((card, index) => (
          <ServiceCard
            key={card.text}
            index={index}
            title={card.text}
            icon={card.image}
          />
        ))}
      </div>
    </motion.section>
  );
}

const ServiceCard = ({ index, title, icon }: CardProps) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className='w-full bg-gradient-to-bl from-ice-500 to-darkPurple-500 p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-2 px-2 min-h-[260px] flex justify-evenly items-center flex-col bg-ice-950'>
      <div className='py-5 px-12 flex justify-evenly items-center flex-col'>
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          width={200}
          height={200}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);
