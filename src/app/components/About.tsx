"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        alt="About me image" src="/profile.jpg" className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-85 xl:w-[500px] xl:h-[600px]"/>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className='text-4xl font-semibold'>Here&apos;s my <span className='underline decoration-[#F7AB0A]/50'>life</span> story</h4>
        <p className="text-sm">
        👋I&apos;m Robert. I&apos;ve been coding for over 7 years now, and i&apos;m the creator of Rocker Labs, a place where everyone can share knowledge to grow an active learning community. I started as a frontend developer back in 2016, working in large international companies, in small and large teams. I discovered my passion is in mentoring, so that i can help future developers acquire skills that can take them to the next level. 💻
        </p>
      </div>
    </motion.div>
  );
}
