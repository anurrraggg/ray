"use client";
import React from 'react';
import { Server, Code, Shield, Globe, Cpu, Smartphone, BookOpen, PenTool, Satellite, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServiceSection = ({ title, description, items, align = 'left' }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`flex flex-col md:flex-row gap-12 items-center mb-32 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
  >
    <div className="flex-1 space-y-6">
      <h3 className="text-3xl md:text-4xl font-bold text-white font-['Orbitron']">
        {title}
      </h3>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-amber-500 rounded-full"
      />
      <p className="text-zinc-400 text-lg leading-relaxed">
        {description}
      </p>
      
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl hover:border-amber-500/30 hover:bg-zinc-800 transition-all duration-300 cursor-default"
          >
            <div className="text-amber-500 bg-amber-500/10 p-2 rounded-lg">
              {item.icon}
            </div>
            <span className="text-zinc-200 font-medium">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
    <div className="flex-1 w-full">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative h-[400px] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Placeholder for section images - using abstract gradients for now */}
        <div className={`absolute inset-0 bg-gradient-to-br ${align === 'left' ? 'from-blue-900/20' : 'from-purple-900/20'} to-black transition-transform duration-700 group-hover:scale-110`}></div>
        
        {/* Decorative Elements - Animated */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        />
        <div className="absolute top-10 left-10 p-6 border border-white/10 rounded-xl bg-black/30 backdrop-blur-md group-hover:border-amber-500/50 transition-colors duration-500">
           {React.cloneElement(items[0].icon, { size: 32, className: "text-white group-hover:text-amber-500 transition-colors" })}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div id="services" className="relative w-full py-24 px-6 bg-[#050505] text-zinc-100 overflow-hidden">
        
        {/* Background Atmosphere - Floating Animations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <motion.div 
                animate={{ y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px]" 
            />
            <motion.div 
                animate={{ y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[100px]" 
            />
        </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-amber-500 tracking-[0.6em] text-sm uppercase font-bold mb-6">WHAT WE DO</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-['Orbitron'] text-white">
              End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Innovation</span>
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
              RaySync Innovation LLP develops intelligent IoT and AI-powered solutions for smart infrastructure, safety monitoring, and industrial automation.
            </p>
          </motion.div>
        </div>

        {/* Introduction Cards */}
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-32"
        >
            {[
                { icon: <Globe size={32} />, title: "Smart Infrastructure", text: "Building connected ecosystems for modern cities." },
                { icon: <Shield size={32} />, title: "Safety Monitoring", text: "Real-time surveillance and alert systems." },
                { icon: <Cpu size={32} />, title: "Industrial Automation", text: "Optimizing production with intelligent control." }
            ].map((card, i) => (
                <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10, borderColor: "rgba(245, 158, 11, 0.3)" }}
                    className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group"
                >
                    <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{card.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Orbitron']">{card.title}</h3>
                    <p className="text-zinc-400">{card.text}</p>
                </motion.div>
            ))}
        </motion.div>

        {/* Detailed Sections */}
        
        <ServiceSection 
            title="Product Development & R&D"
            description="We design and manufacture custom hardware systems tailored to specific industrial needs. From proof-of-concept to final production, our R&D team ensures robust and scalable solutions."
            items={[
                { icon: <Cpu size={20} />, text: "Custom Hardware Systems" },
                { icon: <Radio size={20} />, text: "Smart Sensing Modules" },
                { icon: <Satellite size={20} />, text: "GPS Tracking Devices" },
                { icon: <PenTool size={20} />, text: "Prototype Engineering" }
            ]}
            align="left"
        />

        <ServiceSection 
            title="Software & Analytics"
            description="Hardware is only half the equation. We build powerful cloud-based platforms that turn raw data into actionable insights, accessible from anywhere in the world."
            items={[
                { icon: <Globe size={20} />, text: "Cloud-based Dashboards" },
                { icon: <Server size={20} />, text: "Analytics Platforms" },
                { icon: <Code size={20} />, text: "Custom IoT Middleware" },
                { icon: <Smartphone size={20} />, text: "Mobile Control Apps" }
            ]}
            align="right"
        />

        <ServiceSection 
            title="STEM Innovation & Education"
            description="We are committed to nurturing the next generation of innovators. Through hands-on learning and practical exposure, we bridge the gap between theory and industry application."
            items={[
                { icon: <BookOpen size={20} />, text: "DIY Innovation Kits" },
                { icon: <Cpu size={20} />, text: "Technical Bootcamps" },
                { icon: <Code size={20} />, text: "Workshops & Hackathons" },
                { icon: <PenTool size={20} />, text: "Hands-on Training" }
            ]}
            align="left"
        />

        {/* CTA Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron']">Ready to Innovate?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                Whether you need a custom IoT solution or want to upskill your team, RaySync is your partner in technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors">
                    Start a Project
                </button>
                <button className="bg-transparent border border-zinc-700 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors">
                    Explore STEM Programs
                </button>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
