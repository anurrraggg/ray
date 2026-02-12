"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ESTIMATE: 2.5 seconds total load time
    // 100 steps * 25ms = 2500ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; 
      });
    }, 40); // Standard 4s duration 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small buffer at 100% before unmounting
      const timeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <motion.div
      // Key is important for AnimatePresence to track this element
      key="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ 
            opacity: [0.4, 0.6, 0.4], 
            scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
        >
          {/* Ensure path matches your public folder exactly */}
          <Image
            src="/circular_raysync.png"
            alt="RaySync"
            fill
            className="object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.5)]"
            priority
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-[0.2em] font-['Orbitron'] text-center mb-12"
        >
          RAYSYNC
        </motion.h1>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-amber-500 shadow-[0_0_15px_#f59e0b]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            // Important: Use linear ease for the bar so it doesn't stutter on every state update
            transition={{ ease: "linear", duration: 0.1 }} 
          />
        </div>
        
        {/* Optional Percentage Text */}
        <motion.p 
            className="mt-4 text-zinc-500 font-mono text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        >
            {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;