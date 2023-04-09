"use client";
import { urlFor } from '@/helpers/sanity';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo
}
type CardProps = {
  index: string;
  title: string;
  icon: string;
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
        <h4 className='sectionHeader'>Here&apos;s my <span className='underline text-ice-500'>life story</span></h4>
        <p className="sectionText">
        {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.section>
  );
}

const ServiceCard = ({ index, title, icon }: CardProps) => (
  <>
    {/* <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div> */}
  </>
);

const AboutSection = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};
