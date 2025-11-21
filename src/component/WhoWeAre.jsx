// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// // import { IoDocumentTextOutline } from "react-icons/io5";
// // import { LuBookOpen, LuUserRoundCheck } from "react-icons/lu";
// import Bgimg from "../assets/bg2.jpg";
// // import { GiGraduateCap } from "react-icons/gi";
// import { motion } from "motion/react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// const WhoWeAre = () => {
//   return (
//     <div className="max-w-7xl w-full flex flex-col md:flex-row  mx-auto p-3 gap-8 mt-4 overflow-x-hidden">
//       {/* left side */}
//       <div className="w-full flex flex-col overflow-hidden">
//         <img
//           src={Bgimg}
//           alt=""
//           className="w-[628px] h-[650px] object-cover rounded-lg"
//         />
//       </div>
//       {/* right side */}
//       <div className="w-full flex flex-col  gap-4">
//         <div className="flex w-full  items-center md:items-start justify-center md:justify-start">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center justify-center font-hind font-medium text-[14px] sm:text-[16px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto"
//           >
//             Career Outcome
//           </motion.p>
//         </div>
//         <div className="flex items-center md:items-start justify-center md:justify-start text-center md:text-start">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
//           >
//             Transform <br /> <span className="text-green-600">Learning </span>
//             Into<span className="text-green-600"> Opportunity</span>{" "}
//           </motion.p>
//         </div>
//         <div className="w-full max-w-lg sm:max-w-2xl">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-hind text-[18px] text-[#39557E] text-justify"
//           >
//             Join us in shaping a smarter, digital tomorrow. We build pathways
//             for students to transition from classroom learning to corporate
//             success. Through real industry projects and expert mentorship, we
//             nurture talent that’s ready for the real world. Ensuring 100%
//             placement opportunities for every learner
//           </motion.p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-6">
//           {/* Card 1 */}
//           <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-400 p-3">
//               <IoMdCheckmarkCircleOutline className="text-3xl text-white" />
//             </div>
//             <div className="flex flex-col justify-center">
//               {/* <p className="text-2xl font-bold text-[#082A5E] leading-tight">
//                 50+
//               </p> */}
//               <p className="text-md  text-[#082A5E] font-semibold leading-snug font-hind">
//                 100% Placement opportunities
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-400 p-3">
//               <IoMdCheckmarkCircleOutline className="text-4xl text-white" />
//             </div>
//             <div className="flex flex-col justify-center">
//               {/* <p className="text-2xl font-bold text-[#082A5E] leading-tight">
//                 1000+
//               </p> */}
//               <p className="text-md font-semibold text-[#082A5E] leading-snug font-hind">
//                 Real Industry Projects
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-violet-300 rounded-xl shadow-lg">
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-400 p-3">
//               <IoMdCheckmarkCircleOutline className="text-4xl text-white" />
//             </div>
//             <div className="flex flex-col justify-center">
//               {/* <p className="text-2xl font-bold text-[#082A5E] leading-tight">
//                 8000+
//               </p> */}
//               <p className="text-md font-semibold text-[#082A5E] leading-snug font-hind">
//                 Mentorship from Experts
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="flex items-center gap-4 p-4 w-[260px] bg-white border-2 border-cyan-300 rounded-xl shadow-lg">
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-400 p-3">
//               <IoMdCheckmarkCircleOutline className="text-4xl text-white" />
//             </div>
//             <div className="flex flex-col justify-center">
//               {/* <p className="text-2xl font-bold text-[#082A5E] leading-tight">
//                 120+
//               </p> */}
//               <p className="text-md font-semibold text-[#082A5E] leading-snug font-hind">
//                 Reduced Academic Industry Gap
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full flex items-center md:items-start justify-center md:justify-start">
//           <button
//             className="relative overflow-hidden text-white rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
//              bg-gradient-to-b from-cyan-600 to-cyan-800
//              shadow-[0_4px_0_0_#0e7490,0_6px_10px_rgba(0,0,0,0.4)]
//              transform transition-all duration-300 ease-out
//              hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#0e7490,0_12px_20px_rgba(0,0,0,0.5)]
//              active:translate-y-[2px] active:shadow-[0_2px_0_0_#0e7490,0_3px_6px_rgba(0,0,0,0.3)]
//              hover:scale-105 w-fit group"
//           >
//             <span className="relative z-10">LEARN MORE</span>
//             <FaArrowRight className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />

//             {/* subtle reflection sheen */}
//             <span className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;

import React from "react";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Bgimg from "../assets/bg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";

/* ---------- Animation Variants (pure JS) ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i ?? 0) * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const WhoWeAre = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- HERO ---------- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left – Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={Bgimg}
              alt="Students collaborating on a real-world project"
              className="w-full h-[500px] md:h-[650px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Real-world learning in action</p>
            </div>
          </motion.div>

          {/* Right – Text */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              className="inline-block px-5 py-2 text-sm font-medium tracking-wider text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full w-fit mx-auto md:mx-0"
            >
              Career Outcome
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
            >
              Transform <br />
              <span className="text-green-600">Learning</span> Into{" "}
              <span className="text-green-600">Opportunity</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
            >
              Join us in shaping a smarter, digital tomorrow. We build pathways for students to transition from classroom learning to corporate success. Through real industry projects and expert mentorship, we nurture talent that’s ready for the real world—ensuring **100% placement opportunities** for every learner.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-cyan-600 to-cyan-800 px-6 py-3 text-white font-medium flex items-center gap-2 shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">LEARN MORE</span>
                <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>

              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-cyan-700 font-medium border border-cyan-700 rounded-lg px-6 py-3 hover:bg-cyan-50 transition"
              >
                <FaPlayCircle className="text-xl" />
                View Gallery
              </motion.a>
            </div>
          </div>
        </div>

        {/* ---------- STAT CARDS ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { title: "100% Placement opportunities", iconSize: "text-3xl" },
            { title: "Real Industry Projects", iconSize: "text-4xl" },
            { title: "Mentorship from Experts", iconSize: "text-4xl" },
            { title: "Reduced Academic-Industry Gap", iconSize: "text-4xl" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx}
              className="flex items-center gap-4 p-5 bg-white border-2 border-violet-200 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 p-3">
                <IoMdCheckmarkCircleOutline className={`${item.iconSize} text-white`} />
              </div>
              <p className="font-semibold text-[#082A5E] leading-snug">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- IMAGE GALLERY ---------- */}
        <div id="gallery" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10"
          >
            See Our Impact in Action
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[slideimg3, slideimg4, slideimg5].map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Student project showcase ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">
                    {i === 0 && "Live Industry Sprint"}
                    {i === 1 && "Mentor-Led Hackathon"}
                    {i === 2 && "Placement Success Story"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ---------- FINAL CTA ---------- */}
        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to turn your learning into a career? <br className="hidden sm:block" />
            <span className="font-semibold text-cyan-700">Join thousands of successful graduates.</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 group relative overflow-hidden rounded-lg bg-gradient-to-b from-green-600 to-green-800 px-8 py-3 text-white font-medium flex items-center gap-2 mx-auto shadow-lg transition-all"
          >
            <span className="relative z-10">GET STARTED TODAY</span>
            <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;