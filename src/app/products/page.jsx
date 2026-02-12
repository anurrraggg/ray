"use client";
import React, { useRef } from 'react';
import { ShoppingBag, Zap, Shield, Cpu, ArrowRight, Star } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 5; // Reduced for subtle effect
const HALF_ROTATION_RANGE = 5 / 2;

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative h-full rounded-xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 p-8 shadow-xl group hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500"
    >
      <div 
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 flex flex-col h-full"
      >
        {/* Icon Container - Cleaner look */}
        <div className="relative mb-8 w-fit">
          <div className="relative p-3 bg-zinc-800/80 rounded-xl text-amber-500 group-hover:text-amber-400 group-hover:bg-zinc-800 transition-all duration-300 ring-1 ring-white/5">
            {product.icon}
          </div>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 font-['Orbitron'] text-white group-hover:text-amber-500 transition-colors tracking-wide">
            {product.title}
          </h2>
          <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
            {product.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-400 mb-8 leading-7 text-sm font-light">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-8 space-y-4 flex-grow border-t border-zinc-800/50 pt-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
              <div className="w-1 h-1 rounded-full bg-amber-500/80" />
              <span className="font-light tracking-wide">{feature}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
             <span className="text-[10px] text-zinc-500 block mb-1 font-medium bg-zinc-900/50 px-2 py-1 rounded w-fit">STARTING AT</span>
            <div className="text-xl font-bold text-white font-['Orbitron'] tracking-wide">
              {product.price}
            </div>
          </div>
          <button className="bg-zinc-100 text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center gap-2 text-xs uppercase tracking-wider">
            <span>Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

       {/* Subtle Highlight Gradient - Professional & Sleek */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-800/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
    </motion.div>
  );
};

const Products = () => {
  const products = [
    {
      title: "RaySync Core",
      tagline: "Enterprise Processing",
      description: "Our flagship AI processor, engineered for high-performance computing tasks and scalable machine learning infrastructure.",
      icon: <Cpu size={32} />,
      price: "$999",
      features: ["32-Core Neural Engine", "256TB/s Bandwidth", "Enterprise Cooling"]
    },
    {
      title: "RayGuard",
      tagline: "Cybersecurity Suite",
      description: "Military-grade infrastructure protection. Deploy zero-trust architecture with autonomous threat neutralization.",
      icon: <Shield size={32} />,
      price: "$499/mo",
      features: ["Quantum Encryption", "Real-time Sentinel", "24/7 SOC Access"]
    },
    {
      title: "RaySpeed",
      tagline: "Network Acceleration",
      description: "Global network acceleration grid. Eliminate latency and optimize data transfer protocols for mission-critical operations.",
      icon: <Zap size={32} />,
      price: "$299",
      features: ["Global CDN Edge", "AI Traffic Shaping", "Sub-1ms Latency"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 pt-24 pb-20 px-6 relative overflow-hidden">
      
      {/* Refined Background - Subtle and professional */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[0%] right-[0%] w-[800px] h-[800px] bg-amber-500/3 rounded-full blur-[120px]" />
          <div className="absolute bottom-[0%] left-[0%] w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-500 tracking-[0.6em] text-xs uppercase font-bold mb-4">TECHNOLOGY SUITE</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] text-white">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Solutions</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Engineering masterpieces designed for visionary organizations. Performance, security, and speed without compromise.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 text-center border-t border-zinc-900 pt-12"
        >
          <p className="text-zinc-600 text-sm tracking-widest uppercase mb-6 font-medium">Trusted by Industry Leaders</p>
          <div className="flex justify-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos if needed, or just stars for now but simplified */}
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
