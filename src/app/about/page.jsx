"use client";
import { Award, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import VerticalMentorsList from "@/components/MentorCarousel";


const AboutUsPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-zinc-100">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-extrabold mb-6 bg-blue-400 bg-clip-text text-transparent">
          Founding Pillars
        </h1>
        <VerticalMentorsList />

        <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-[rgb(253, 224, 71)] hover:shadow-[0_0_50px_rgba(253,224,71,7.25)] hover:scale-[102%] transition-all duration-300 bg-gradient-to-br from-zinc-900 to-black py-16 mt-16 rounded-xl border border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div 
            className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <Rocket size={48} className="mx-auto text-amber-400 mb-4" />
                  ),
                  title: "Innovation",
                  description:
                    "We continuously push the boundaries of scientific discovery and technological advancement.",
                },
                {
                  icon: (
                    <Globe size={48} className="mx-auto text-yellow-400 mb-4" />
                  ),
                  title: "Collaboration",
                  description:
                    "Fostering global partnerships to solve complex challenges and accelerate research.",
                },
                {
                  icon: (
                    <Award size={48} className="mx-auto text-amber-500 mb-4" />
                  ),
                  title: "Excellence",
                  description:
                    "We uphold the highest standards of scientific rigor and ethical research practices.",
                },
              ].map((value, index) => (
                <motion.div
                initial={{opacity: 0, filter: "blur(20px)", scale: 1.1}}
                whileInView={{opacity: 1, filter: "blur(0px)", scale: 1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.3}}
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl transition-all duration-300 p-8 hover:bg-zinc-800/50 cursor-pointer border border-zinc-800 hover:border-yellow-400/50"
                >
                  {value.icon}
                  <h3 className="text-xl font-bold text-zinc-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;
