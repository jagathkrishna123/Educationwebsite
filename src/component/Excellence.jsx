import { motion } from "motion/react";
import React from "react";
import { FaArrowRight, FaLaptopCode } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between cards
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Excellence = () => {
  return (
    <div className="max-w-7xl w-full  mx-auto flex flex-col mt-16 mb-8">
      <div className=" flex flex-col p-6 gap-8">
        <div className="flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-hind font-medium text-[14px] sm:text-[16px] md:text-[18px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto md:mx-0 mt-4 sm:mt-6"
          >
            Excellence in Education
          </motion.p>
        </div>
        <div className="max-w-3xl flex text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-800 text-[22px] md:text-[36px] font-bold font-lexend"
          >
            Why Scanntek Edu is the <br />{" "}
            <span className="text-green-600">Best Software Training</span>{" "}
            Institute in Calicut
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-4 font-lexend justify-between gap-4"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4  shadow-lg"
          >
            <FaHandshakeAngle className="text-blue-800 text-[30px]" />
            <div className="max-w-sm  text-center text-[#082A5E]">
              <p className="font-bold text-[16px] md:text-[22px] font-lexend">
                100% Placement <br /> Assistance
              </p>
            </div>
            <div className="max-w-xs  text-center font-hind text-[#39557E]">
              <p className="text-[14px] md:text-[16px]">
                Dedicated placement cell with strong industry connections to
                help you secure your dream job.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg"
          >
            <IoPerson className="text-blue-800 text-[30px]" />
            <div className="max-w-sm  text-center text-[#082A5E] ">
              <p className="font-bold text-[16px] md:text-[22px] font-lexend">
                Industry-Expert <br /> Trainers
              </p>
            </div>
            <div className="max-w-xs text-center font-hind text-[#39557E] mt-2">
              <p className="text-[14px] md:text-[16px]">
                Learn from certified professionals with extensive real-world
                industry experience and knowledge.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4  shadow-lg"
          >
            <FaLaptopCode className="text-blue-800 text-[30px]" />
            <div className="max-w-sm text-center text-[#082A5E]">
              <p className="font-bold text-[16px] md:text-[22px] font-lexend">
                Real-World Projects
              </p>
            </div>
            <div className="max-w-xs  text-center font-hind text-[#39557E] mt-6">
              <p className="text-[14px] md:text-[16px]">
                Hands-on experience with industry-relevant projects to build a
                professional portfolio..
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg"
          >
            <PiMedalFill className="text-blue-800 text-[30px]" />
            <div className="max-w-sm text-center text-[#082A5E]">
              <p className="font-bold text-[16px] md:text-[22px] font-lexend">
                ISO-Certified Institute
              </p>
            </div>
            <div className="max-w-xs text-center font-hind text-[#39557E] mt-6">
              <p className="text-[14px] md:text-[16px]">
                Quality education guaranteed through ISO certification and
                standardized training methods.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center">
          <button
            className="relative overflow-hidden text-white rounded-lg px-5 py-2.5 font-semibold text-[15px] flex items-center gap-2
             bg-gradient-to-b from-cyan-600 to-cyan-800
             shadow-[0_4px_0_0_#0e7490,0_6px_10px_rgba(0,0,0,0.4)]
             transform active:translate-y-[2px] active:shadow-[0_2px_0_0_#0e7490,0_3px_6px_rgba(0,0,0,0.3)]
             transition-all duration-300 ease-out
             hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#0e7490,0_12px_20px_rgba(0,0,0,0.5)]
             group"
          >
            <span className="relative z-10">EXPLORE COURSES</span>
            <FaArrowRight className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />

            {/* Subtle light reflection sheen */}
            <span className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
