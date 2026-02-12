"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SplashScreen = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Glow Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 1], opacity: [0.2, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl"
        />

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          className="relative z-10 w-40 h-40 md:w-56 md:h-56"
        >
            <div className="relative w-full h-full"> 
             <Image
                src="/circular_raysync.png"
                alt="RaySync Loading"
                fill
                className="object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]"
                priority
             />
          </div>
        </motion.div>

        {/* Text Reveal */}
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-2xl md:text-3xl font-bold text-white tracking-[0.3em] font-['Orbitron']"
        >
            RAYSYNC
        </motion.h1>
        
         {/* Loading Bar */}
         <motion.div 
            className="mt-6 h-1 bg-zinc-800 w-48 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
         >
             <motion.div 
                className="h-full bg-amber-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                onAnimationComplete={onFinish}
             />
         </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
