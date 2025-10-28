import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBookOpen, LuUserRoundCheck } from "react-icons/lu";
import Bgimg from "../assets/bg2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { motion } from "motion/react";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl w-full flex flex-col md:flex-row  mx-auto p-3 gap-8 mt-4 overflow-x-hidden">
      {/* left side */}
      <div className="w-full flex flex-col overflow-hidden">
        <img
          src={Bgimg}
          alt=""
          className="w-[628px] h-[650px] object-cover rounded-lg"
        />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col  gap-4">
        <div className="flex w-full  items-center md:items-start justify-center md:justify-start">
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-center font-hind font-medium text-[14px] sm:text-[16px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto"
>
  Who We Are
</motion.p>

        </div>
        <div className="flex items-center md:items-start justify-center md:justify-start text-center md:text-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
          >
            Learn From <span className="text-green-600">Industry Experts</span>{" "}
            Across the Globe
          </motion.p>
        </div>
        <div className="w-full max-w-lg sm:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-hind text-[16px] text-[#39557E] text-justify"
          >
            We are a Best software training institute in kochi, empowering
            individuals with skills and knowledge to excel in the tech industry.
            Our expert instructors, comprehensive lessons, and global reach make
            us the ideal choice for professional growth. As the best software
            training institute in Kochi, we pride ourselves on our industry
            collaborations and exceptional placement record.
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400">
              <LuUserRoundCheck className="text-4xl text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#082A5E] leading-tight">
                50+
              </p>
              <p className="text-base font-light text-[#082A5E] leading-snug font-hind">
                Expert Trainers
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400">
              <IoDocumentTextOutline className="text-4xl text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#082A5E] leading-tight">
                1000+
              </p>
              <p className="text-base font-light text-[#082A5E] leading-snug font-hind">
                Specialized Modules
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400">
              <GiGraduateCap className="text-4xl text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#082A5E] leading-tight">
                8000+
              </p>
              <p className="text-base font-light text-[#082A5E] leading-snug font-hind">
                Successful Graduates
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-cyan-300 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400">
              <LuBookOpen className="text-4xl text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#082A5E] leading-tight">
                120+
              </p>
              <p className="text-base font-light text-[#082A5E] leading-snug font-hind">
                Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center md:items-start justify-center md:justify-start">
          <button
            className="relative overflow-hidden text-white rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
             bg-gradient-to-b from-cyan-600 to-cyan-800
             shadow-[0_4px_0_0_#0e7490,0_6px_10px_rgba(0,0,0,0.4)]
             transform transition-all duration-300 ease-out
             hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#0e7490,0_12px_20px_rgba(0,0,0,0.5)]
             active:translate-y-[2px] active:shadow-[0_2px_0_0_#0e7490,0_3px_6px_rgba(0,0,0,0.3)]
             hover:scale-105 w-fit group"
          >
            <span className="relative z-10">LEARN MORE</span>
            <FaArrowRight className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />

            {/* subtle reflection sheen */}
            <span className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
