"use client";
import React, { useState, useEffect } from 'react';
import { Telescope, Star, Satellite, Globe, Brain, Cpu, Users } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Description from '@/components/Description';
import Link from 'next/link';

// --- Components ---

const FeatureCard = ({ Icon, title, text, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-amber-500/50 hover:to-amber-500/10 transition-all duration-500"
    >
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/5 group-hover:border-amber-500/30 transition-all duration-500 flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-amber-500/10 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors font-['Orbitron']">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 font-light">{text}</p>
        </div>
    </motion.div>
);

const DomainCard = ({ title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-2xl h-80 md:h-96 cursor-pointer bg-zinc-900/50 border border-white/5 hover:border-amber-500/50 transition-all duration-500 flex flex-col"
    >
        {/* Placeholder Gradient Background mimicking high-res tech feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black z-0"></div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all duration-500"></div>

        {/* Content */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <div className="self-end p-3 bg-white/5 rounded-xl text-amber-500 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                {Icon && <Icon size={28} />}
            </div>

            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300 font-['Orbitron'] tracking-wide">{title}</h3>
                <div className="h-1 w-12 bg-amber-500 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {description}
                </p>
            </div>
        </div>

        {/* Hover Effect Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
    </motion.div>
);

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const phrases = ["INNOVATING", "BUILDING", "REDEFINING", "POWERING"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* --- HERO SECTION --- */}
            <div id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-0">
                {/* Background Image with Overlay and Parallax-like feel */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{ backgroundImage: "url('/bg.avif')" }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#050505]"></div>
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h2 className="text-xl md:text-3xl font-bold tracking-[0.5em] uppercase text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                            RaySync
                        </h2>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-['Orbitron'] tracking-wide leading-tight min-h-[1.5em] flex flex-wrap items-center justify-center gap-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                            {text}
                        </span>
                        <span className="animate-blink text-amber-500">|</span>
                        <span className="text-amber-500">THE FUTURE</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-300 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-light"
                    >
                        We engineer intelligent IoT solutions for a safer, synced future. <br className="hidden md:block" />
                        From smart infrastructure to STEM innovation, we turn ideas into impactful reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/services"
                            className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] uppercase tracking-wide"
                        >
                            Explore Solutions
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full transition-colors backdrop-blur-sm uppercase tracking-wide"
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-amber-500/70 hidden md:block"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </motion.div>
            </div>

            {/* --- WHY CHOOSE US SECTION --- */}
            <Description />

            {/* --- OUR DOMAINS SECTION --- */}
            <section className="w-full bg-[#050505] py-32 px-6 border-t border-white/5 relative overflow-hidden">
                {/* Subtle Background for Domains */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-20 md:flex md:justify-between md:items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 md:mb-0"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Orbitron']">Our <span className="text-amber-500">Domains</span></h2>
                            <p className="text-zinc-400 max-w-xl text-lg font-light">We operate at the intersection of hardware, software, and intelligence.</p>
                        </motion.div>
                        <Link
                            href="/services"
                            className="text-amber-500 hover:text-white transition-colors flex items-center gap-2 group font-medium"
                        >
                            {/* We use motion.span inside Link or just className animations */}
                            View All Services <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <DomainCard
                            title="IoT & Automation"
                            description="Smart devices, real-time monitoring, and industrial automation solutions."
                            icon={Globe}
                            index={0}
                        />
                        <DomainCard
                            title="Artificial Intelligence"
                            description="Predictive analytics, intelligent monitoring, and data-driven insights."
                            icon={Brain}
                            index={1}
                        />
                        <DomainCard
                            title="Embedded Systems"
                            description="Custom hardware development, sensor integration, and PCB design."
                            icon={Cpu}
                            index={2}
                        />
                        <DomainCard
                            title="Skill Development"
                            description="Technical workshops, bootcamps, and hands-on training programs."
                            icon={Users}
                            index={3}
                        />
                    </div>
                </div>
            </section>

            {/* --- EXPLORE UNIVERSE SECTION --- */}
            <motion.div
                className="container mx-auto px-6 py-32 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">Explore The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Universe</span></h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            Icon: Telescope,
                            title: "Observation",
                            text: "Access to advanced telescopes and imaging equipment for deep-space observation.",
                        },
                        {
                            Icon: Star,
                            title: "Research",
                            text: "Participate in groundbreaking astronomical research projects and make discoveries.",
                        },
                        {
                            Icon: Satellite,
                            title: "Technology",
                            text: "Learn about the cutting-edge space technology and satellite systems.",
                        },
                    ].map((feature, i) => (
                        <FeatureCard key={feature.title} {...feature} index={i} />
                    ))}
                </div>
            </motion.div>

        </>
    );
};
export default Home;
