"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


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

type Props = {
  socials: Social[]
};
const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 px-5 flex items-start justify-between max-w-7-xl mx-auto z-20 xl:items-center">
      <motion.div
        {...getItemsAnimationProps(-1)}
        className="flex flex-row items-center"
      >
        {socials.map(({ title, url }) => (
          <SocialIcon
            key={`${title}`}
            url={url}
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-white focus:bg-white"    
          />
        ))}
      </motion.div>

        <motion.a {...getItemsAnimationProps(1)} 
          className="hover:bg-white focus:bg-white cursor-pointer pr-3"
          href="#contact"
        >
          <SocialIcon
            className="" 
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="#contact"
            
          />
          <span  className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </span>
        </motion.a>
    </header>
  );
};

export default Header;
