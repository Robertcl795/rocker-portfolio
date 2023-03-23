"use client";
import { motion } from "framer-motion";

const BgdCircles = () => {
  const diameters = [
    "h-[200px] w-[200px]",
    "h-[300px] w-[300px]",
    "h-[500px] w-[500px]",
    "h-[650px] w-[650px]",
    "h-[800px] w-[800px]",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      {diameters.map((d) => (
        <div
          key={`circle-${d}`}
          className={`
            absolute border rounded-full mt-52 opacity-50
            ${d} ${d.includes('200') && 'animate-ping'}
            ${d.includes('650') ? 'border-[#F7AB0A] animate-pulse' : 'border-[#333333]'}
        `}
        />
      ))}
    </motion.div>
  );
};

export default BgdCircles;
