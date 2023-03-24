"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    description: "LinkedIn URL",
    url: "https://www.linkedin.com/in/robertocarrillo95/",
  },
  {
    description: "Facebook URL",
    url: "https://www.facebook.com/RockerLab/",
  },
  {
    description: "Github URL",
    url: "https://github.com/robertcl795",
  },
  {
    description: "Youtube URL",
    url: "https://www.youtube.com/@rocker-labs",
  },
];

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

type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 px-5 flex items-start justify-between max-w-7-xl mx-auto z-20 xl:items-center">
      <motion.div
        {...getItemsAnimationProps(-1)}
        className="flex flex-row items-center"
      >
        {socials.map(({ description, url }) => (
          <SocialIcon
            key={`${description}`}
            url={url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <a className="" href="#contact">
        <motion.div {...getItemsAnimationProps(1)}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
};

export default Header;
