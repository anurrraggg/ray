"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Shield, Cpu, Users, Star } from "lucide-react";

const VerticalSpaceCards = () => {
  const { ref: secondRef, inView: chooseView } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-8 w-full bg-black">
        {/* Why Choose Us */}
        <div className="relative top-[140px] left-[-9px] md:left-[20px]">
          <h2 className="text-[35px] md:text-6xl font-bold text-[#facc15] flex justify-center items-center gap-2 md:gap-3">
            <Star className="pt-[8px] md:pt-0 h-10 w-10 md:w-14 md:h-14" />
            Why Choose Us?
          </h2>
        </div>
      </div>

      <div
        ref={secondRef}
        className="relative z-[5] top-[5px] left-[20px] md:left-[40px] w-full h-[900px] md:h-[800px] text-center overflow-hidden"
      >
        <motion.svg
          className="relative hidden md:flex md:w-[1650px] md:h-[650px] h-[450px] w-[400px] left-[-300px] md:left-[180px]"
          width="1650"
          height="650"
          viewBox="0 0 6201 1238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2068 0V449.5M2068 449.5H1043.5M2068 449.5V906.5M2068 449.5H3100.5M3.5 906.5V449.5H1043.5M1043.5 449.5V906.5M3100.5 449.5V906.5M3100.5 449.5H4046V906.5"
            stroke="#facc15"
            className="stroke-[10px] md:stroke-[3px]"
            strokeDasharray="3000"
            strokeDashoffset={chooseView ? "0" : "3000"}
            initial={{ strokeDashoffset: 3000 }}
            animate={{ strokeDashoffset: chooseView ? 0 : 3000 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>

        <div className="md:flex grid grid-rows-2 md:flex-row flex-col md:items-center md:justify-center md:gap-[30px] w-full max-w-[345px] md:max-w-none md:w-[1370px] h-[700px] md:absolute md:left-[50px] md:bottom-[100px] md:h-[300px] mx-auto md:mx-0">

          {/* Reusable Card Style */}
          {[
            { Icon: Rocket, text: "Hands-on experience in real-world space and defense projects." },
            { Icon: Star, text: "Opportunities to participate in top competitions." },
            { Icon: Cpu, text: "Strong focus on innovation and research." },
            { Icon: Shield, text: "Contribution to India's space ecosystem." },
            { Icon: Users, text: "Mentorship from industry experts and academicians." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: -110, opacity: 0, filter: "blur(30px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-lg
                shadow-[0_0_25px_rgba(250,204,21,0.5)]
                hover:shadow-[0_0_50px_rgba(250,204,21,1)]
                hover:z-[50]
                md:hover:w-[235px] md:hover:h-[315px]
                hover:h-[215px] hover:w-[160px]
                relative transition-all duration-300 cursor-pointer
                h-[210px] w-[155px] md:h-full md:w-[230px]
                bg-[rgba(250,204,21,0.08)]
                rounded-[20px] border-[2px] border-[#facc15]
                flex items-center justify-start flex-col gap-[35px]
                pt-[30px] md:pt-[20px]"
            >
              <div className="text-[#facc15] w-full flex items-center justify-center h-[20%] md:h-[40%] transition-transform duration-300">
                <item.Icon className="h-16 w-12 md:w-20 md:h-20" />
              </div>

              <p className="text-[14px] md:text-[15px] md:tracking-wider font-audioWide text-center font-light md:font-semibold text-white w-[140px] md:w-[180px]">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </>
  );
};

export default VerticalSpaceCards;
