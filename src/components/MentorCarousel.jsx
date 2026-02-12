"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Book, Globe, Linkedin, Twitter, Github,} from "lucide-react";
import { motion } from "framer-motion";

const VerticalMentorsList = () => {

  const SocialIcon = ({ Icon, href }) =>
    href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-200 hover:text-yellow-400 transition-colors"
      >
        <Icon size={30} />
      </a>
    ) : null;

  const mentors = [
    {
      id: 1,
      name: "Gaurav Tiwari",
      title: "Founder & CEO",
      background:
        "Dr. Manmohan Shukla, the Group Director at Pranveer Singh Institute of Technology (PSIT), is an esteemed mentor for our space club. With expertise in AI/ML projects and cutting-edge research, he has been instrumental in guiding students through various national and international competitions in technology and innovation. Under his mentorship, students have successfully engaged in groundbreaking projects, enhancing their technical knowledge and problem-solving skills.",
      achievements: [
        "Operations expert ensuring seamless execution and strategic growth..",
      ],
      image: "/gaurav.jpg",
      researchFocus: [
      ],
      links:[
        "https://www.psit.ac.in/institute/functionaries-details/2/Dr.-Man-Mohan-Shukla"
      ]
    },
    {
      id: 2,
      name: "Anshiika Singh",
      title: "Co-Founder & COO ",
    achievements: [
        "Technical architect behind our smart solutions and innovation systems.",
      ],
      image: "/anshiika.jpg",
      links:[
        "https://www.linkedin.com/in/raghvendra-singh-3a137a72/"
      ]
    },
    {
      id: 4,
      name: "Kumar Saurab",
      title: "Co-Founder and CPTO",
     achievements: [
        "Visionary leader driving technological innovation and business excellence."
      ],
      image: "/saurab.jpg",
      links:[
        "https://www.linkedin.com/in/raghuraj-suryavanshi-30914ba3/"
      ]
    },
  ];

  return (
    <div className="bg-transparent backdrop-blur-sm py-8 rounded-xl ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {mentors.map((mentor) => (
            <motion.div
              initial={{ opacity: 0, x: -200, filter: "blur(30px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={mentor.id}
              className="bg-zinc-800/50 border-[2px] border-blue-400/20 rounded-lg p-6 cursor-pointer shadow-[rgb(96, 165, 250)] hover:shadow-[0_0_50px_rgba(96,165,250,7.25)] transition-all duration-300 hover:border-blue-400"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Mentor Image */}
                <div className="sm:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-indigo-400/20 hover:border-yellow-400/30 transition-colors duration-300 h-full">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all min-h-[300px]"
                    />
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="sm:w-2/3 space-y-4">
                  <div>
                    <div className="flex items-center justify-between md:gap-2 gap-[30px]">
                      <h2 className="text-2xl font-bold bg-blue-400 bg-clip-text text-transparent">
                        {mentor.name}
                      </h2>
                      <div className="flex gap-4 mt-3">
                            {/* Assuming the first link is LinkedIn for now, based on icon usage */}
                            <SocialIcon
                              Icon={Linkedin}
                              href={mentor.links[0]}
                            />
                        </div>
                    </div>
                    <h3 className="text-lg text-indigo-300">{mentor.title}</h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {mentor.background}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {mentor.achievements && mentor.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                          <Award className="mr-2 text-indigo-400" size={16} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          {mentor.achievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2 text-blue-400">•</span>
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {mentor.researchFocus && mentor.researchFocus.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                          <Book className="mr-2 text-indigo-400" size={16} />
                          Research Focus
                        </h4>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          {mentor.researchFocus.map((focus, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-blue-400">•</span>
                              {focus}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMentorsList;
