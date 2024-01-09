import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/Logo.png";

const Loader = () => {
  return (
    <div className="w-screen h-screen absolute top-0 right-0 left-0 bottom-0 bg-[#000] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image 
        src={Logo} 
        alt="Loader"
        width={100}
        height={100}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
