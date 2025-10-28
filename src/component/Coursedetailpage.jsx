// import React, { useState } from 'react'
// import { COURSESDATA } from '../contants'
// import { useParams } from 'react-router-dom'

// const Coursedetailpage = () => {
//     const {crsId} = useParams()
//     const [courseInfo, setCourseInfo] = useState(null)

//     const fetchCourseInfo = async () => {
//       const courseInfo = COURSESDATA.find(doc => doc._id === docId)
//       setDocInfo(docInfo)
//     }
//   return (
//     <div className='w-full bg-blue-300 flex flex-col'>
//         <div className='bg-blue-600 max-w-7xl w-full flex flex-col mx-auto'>
//             <div className='flex flex-col items-center w-full'>
//                 <p>{}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Coursedetailpage

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { COURSESDATA } from "../contants";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Contactwithus from "./Contactwithus";
import { motion } from "motion/react";

const Coursedetailpage = () => {
  const { crsId } = useParams(); // route param like /courses/:crsId
  const [courseInfo, setCourseInfo] = useState(null);

  const fetchCourseInfo = async () => {
    const course = COURSESDATA.find((c) => c.id === parseInt(crsId)); // match with course id
    setCourseInfo(course);
  };

  useEffect(() => {
    // Scroll to top when this component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchCourseInfo();
  }, [crsId]);

  if (!courseInfo) {
    return <p className="text-center mt-10">Loading course details...</p>;
  }

  return (
    <div className="w-full mx-auto bg-slate-100 overflow-x-hidden">
      <section
        className="w-full h-[350px] bg-cover bg-center flex items-center justify-start px-6 relative"
        style={{ backgroundImage: `url(${courseInfo.image})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-[36px] md:text-[50px] font-ark w-full md:w-7xl px-2 md:px-3 z-10"
        >
          {courseInfo.title}
        </motion.h1>
      </section>
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-3 mt-6">
        {/* left div */}
        <div className="md:w-1/3 max-w-md mx-3 md:mx-0 flex flex-col bg-white shadow-lg p-4 rounded-lg gap-3 h-fit font-hind">
          <div className="w-full flex items-center justify-center">
            <button className="max-w-xs w-full font-lexend  bg-cyan-800 text-white rounded-lg px-3 py-2 font-medium text-[15px]">
              APPLY NOW
            </button>
          </div>
          <p className="text-center text-[14px] font-hind text-[#6B7385]">
            🏆 100% Placement assistance 🏆
          </p>
          <div className="flex flex-col text-[#6B7385] text-[16px] mx-6 font-hind">
            <div className="flex flex-row justify-between py-3">
              <p>Duration</p>
              <p className="bg-slate-500 px-2 py-[2px] rounded-lg text-[13px] text-center inline-block text-white">{courseInfo.duration}</p>
            </div>{" "}
            <hr />
            <div className="flex flex-row justify-between py-3">
              <p>Session Duration</p>
              <p className="bg-slate-100 px-2 rounded-lg text-[13px]">{courseInfo.sessionduration}</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-3">
              <p>Class Schedule</p>
              <p className="bg-slate-100 px-2 rounded-lg text-[13px]">{courseInfo.scheduleddays}</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-3">
              <p>Mode</p>
              <p className="bg-slate-100 px-2 rounded-lg text-[13px]">{courseInfo.mode}</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-3">
              <p>Enrolled</p>
              <p className="bg-slate-100 px-2 rounded-lg text-[13px]">{courseInfo.Enrolled}</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-3">
              <p>Languages & Tools</p>
              <p className="bg-slate-100 px-2 rounded-lg text-[12px]">{courseInfo.languagAndTools}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[#6B7385] text-[14px] font-hind">
              For details about the course
            </p>
            <div>
              <button className="bg-gray-300 px-6 py-2 rounded-full text-gray-600 font-semibold text-[12px]">
                Call us:{" "}
                <span className="text-[#8101BD] font-semibold">7306749597</span>
              </button>
            </div>
          </div>
        </div>

        {/* right div */}
        <div className="md:w-2/3 w-full p-3 md:p-0 flex flex-col gap-3 mb-4 md:overflow-y-auto h-screen hide-scrollbar">
          <div className=" flex flex-col bg-white shadow-lg rounded-lg p-3 px-6 h-fit">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-lexend font-bold text-[#192335] text-[20px]"
              >
                What you'll learn
              </motion.p>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <p className="font-hind text-[15px] md:text-[18px] text-[#39557E] ">
                  {courseInfo.courseDescription}
                </p>
              </motion.div>
              <div className="flex flex-row justify-between max-w-xl">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col leading-loose"
                >
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Comprehensive Curriculum
                  </p>
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Hands-on Learning
                  </p>
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Job-Ready Skills
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col leading-loose"
                >
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Interview Preparation
                  </p>
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Networking Opportunities
                  </p>
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Supportive Community
                  </p>
                  <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                    <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                    Lifetime Access
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg flex flex-col rounded-lg p-3 px-6">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-lexend font-bold text-[#192335] text-[18px] md:text-[20px]"
              >
                Course Content
              </motion.p>
              <ul className="font-lexend text-[16px] md:text-[18px] text-gray-700 font-medium">
                {courseInfo.topics?.map((topic, index) => (
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    key={index}
                    className="p-3"
                  >
                    {topic} <hr />
                  </motion.p>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-3 px-6 justify-between gap-4 md:gap-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2 leading-loose"
            >
              <p className="font-lexend font-bold text-[#192335] text-[18px] md:text-[20px]">
                Program Structure
              </p>
              <div className="flex flex-col">
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Designed for freshers and early career professionals
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Dedicated Program Support
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Network with people of similar interests
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Comprehensive curriculum and hands-on learning
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2 leading-loose"
            >
              <p className="font-lexend font-bold text-[#192335] text-[18px] md:text-[20px]">
                Dedicated Career Support
              </p>
              <div className="flex flex-col">
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  1:1 mock interviews with industry experts
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Career mentorship with industry experts
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Access to 150+ job postings every month
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Personalised Resume & Linkedin Review
                </p>
                <p className="flex flex-row items-center gap-1 text-[#39557E] text-[14px] md:text-[18px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-green-500 text-[18px]" />
                  Break into in-demand Mern Stack roles with guaranteed job
                  opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* <div>
            <Contactwithus/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Coursedetailpage;
