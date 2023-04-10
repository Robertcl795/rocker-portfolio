'use client';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const getItemsAnimationProps = (xDir: 1 | -1) => ({
  initial: {
    x: xDir * 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 1.5,
  },
});

const sections = [
  { title: 'About', url: '#about' },
  { title: 'Experience', url: '#experience' },
  { title: 'Skills', url: '#skills' },
  { title: 'Projects', url: '#projects' },
  { title: 'Contact', url: '#contact' },
];

type Props = {
  socials: Social[];
};
const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 px-5 flex items-start justify-between max-w-7-xl mx-auto z-20 xl:items-center'>
      <motion.div
        {...getItemsAnimationProps(-1)}
        className='flex flex-row items-center gap-1'
      >
        <a href="#hero">
          <Image className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/profile.jpg" alt="Logo" width={200} height={200} />
        </a>
        {socials.map(({ title, url }) => (
          <SocialIcon
            key={`${title}`}
            url={url}
            fgColor='gray'
            bgColor='transparent'
            className='hover:bg-ice-500 focus:bg-ice-500'
          />
        ))}
      </motion.div>
      <motion.div
        {...getItemsAnimationProps(1)}
        className='flex flex-row items-center'
      >
        {sections.map(({ title, url }) => (
          <a
            key={`${title}-${url}`}
            className='hover:bg-ice-500 focus:bg-ice-500 hover:text-ice-900 focus:text-ice-900 cursor-pointer p-3 uppercase hidden md:inline-flex text-sm text-gray-400'
            href={url}
          >
            {title}
          </a>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
