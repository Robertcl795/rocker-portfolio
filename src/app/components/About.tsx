"use client";
import { urlFor } from '@/helpers/sanity';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className="aboutSection">
      <h3 className="aboutHeader top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        alt="About me image" src={urlFor(pageInfo?.profilePic).url()} 
        className="aboutImage -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-85 xl:w-[500px] xl:h-[600px]"/>
      <div className="aboutDescription space-y-10 px-0 md:px-10">
        <h4 className='text-4xl font-semibold'>Here&apos;s my <span className='underline decoration-[#F7AB0A]/50'>life</span> story</h4>
        <p className="text-sm">
        {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.section>
  );
}
