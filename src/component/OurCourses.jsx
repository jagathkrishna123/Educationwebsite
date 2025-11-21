// import React from "react";
// import { COURSESDATA } from "../contants";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { CiTimer } from "react-icons/ci";
// import { motion } from "motion/react";
// import { useNavigate } from "react-router-dom";

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const childVariant = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const OurCourses = () => {
//   const navigate = useNavigate()
//   return (
//     <div className="max-w-7xl mx-auto p-2 overflow-x-hidden">
//       <div className="flex flex-col w-full p-2">
//         <div className="flex items-center md:items-start justify-center md:justify-start">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="font-hind text-[16px] bg-slate-200 px-1 max-w-xs rounded text-[#9116A1] font-medium mt-6"
//           >
//             10+ Unique Online & Offline Courses
//           </motion.p>
//         </div>
//         <div className="w-full flex flex-col md:flex-row mt-8 px-1">
//           <div className="w-full flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-[24px] md:text-[36px] font-bold font-lexend text-gray-800"
//             >
//               Our <span className="text-green-600">Featured</span> Courses
//             </motion.h2>
//           </div>
//           <div className="w-full flex flex-row items-center justify-center  md:justify-end gap-6 font-hind text-[12px] md:text-[17px] text-[#39557E] cursor-pointer">
//             <p>All Courses</p>
//             <p>New One</p>
//             <p>Recommended</p>
//             <p>Most Placed</p>
//           </div>
//         </div>
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4"
//         >
//           {COURSESDATA.map((item, index) => (
//             <div
//               onClick={()=>navigate(`/courses/${item.id}`)}
//               key={index}
//               className="flex flex-col items-center rounded-xl border border-gray-300 shadow-lg cursor-pointer"
//             >
//               {/* <div className="w-full overflow-hidden rounded-t-xl">
//                 <img src={item.image} alt="" className="w-full bg-cover h-60" />
//               </div> */}
//               <div className="w-full overflow-hidden rounded-t-xl relative">
//                 <img src={item.image} alt="" className="w-full bg-cover h-60" />
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Title Badge */}
//                 <p className="absolute top-2 left-2 bg-cyan-800 text-white text-sm md:text-base font-hind px-3 py-1 rounded">
//                   {item.status}
//                 </p>
//                 <motion.p
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   className="absolute inset-0 flex items-center justify-start pl-6 text-white text-[35px] font-bold font-ark"
//                 >
//                   {item.title}
//                 </motion.p>
//               </div>

//               <div className="flex flex-col w-full items-start p-6">
//                 <div className="w-full flex flex-row justify-start self-start gap-4 text-[#39557E] font-hind text-[16px]">
//                   <p className="flex flex-row items-center w-full gap-2">
//                     <IoDocumentTextOutline />
//                     {item.modules}
//                   </p>
//                   <p className="flex flex-row w-full gap-2 items-center">
//                     <CiTimer />
//                     {item.duration}
//                   </p>
//                 </div>
//                 <div className="w-full flex items-start">
//                   <p className="font-lexend text-[20px] text-gray-700">
//                     {item.coursename}
//                   </p>
//                 </div>
//                 <div className="w-full items-start flex flex-col">
//                   <div className="flex flex-row items-center text-yellow-400 text-lg gap-2">
//                     {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
//                     <p className="text-[#39557E] font-hind text-[16px]">
//                       {item.rating}
//                     </p>
//                   </div>

//                   <p className="flex flex-row font-hind text-[13px] text-[#39557E] items-center gap-2 w-full">
//                     <span>🏆</span>
//                     {item.subtitle}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurCourses;
import React, { useState } from "react";
import { COURSESDATA } from "../contants";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import EnrollBadge from "./EnrollBadge";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const OurCourses = () => {
  const navigate = useNavigate();

  // 🟢 New: State for active filter
  const [activeFilter, setActiveFilter] = useState("All Courses");

  // 🟢 New: Filtered course list
  const filteredCourses =
    activeFilter === "All Courses"
      ? COURSESDATA
      : COURSESDATA.filter(
          (item) => item.status.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="max-w-7xl mx-auto p-2 overflow-x-hidden">
      <div className="flex flex-col w-full p-2">
        <div className="flex items-center md:items-start justify-center md:justify-start">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-hind font-medium text-[14px] sm:text-[16px] md:text-[18px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto md:mx-0 mt-4 sm:mt-6"
          >
            10+ Unique Online & Offline Courses
          </motion.p>
        </div>

        <div className="w-full flex flex-col md:flex-row mt-8 px-1">
          <div className="w-full flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[24px] md:text-[36px] font-bold font-lexend text-gray-800"
            >
              Our <span className="text-green-600">Program</span> for Students
            </motion.h2>
          </div>

          {/*  Filter buttons */}
          <div className="w-full flex flex-row items-center justify-center md:justify-end gap-6 font-hind text-[14px] md:text-[17px] text-[#39557E] cursor-pointer mt-5">
            {["All Courses", "New", "Recommended", "Most placed"].map(
              (filter) => (
                <p
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`${
                    activeFilter === filter
                      ? "text-green-600 font-semibold underline underline-offset-4"
                      : ""
                  }`}
                >
                  {filter}
                </p>
              )
            )}
          </div>
        </div>

        {/* Use filteredCourses instead of COURSESDATA */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"
        >
          {filteredCourses.map((item, index) => (
            <div
              onClick={() => navigate(`/courses/${item.id}`)}
              key={index}
              className="flex flex-col items-center rounded-xl border border-gray-300 shadow-lg cursor-pointer"
            >
              <div className="w-full overflow-hidden rounded-t-xl relative">
                <img src={item.image} alt="" className="w-full bg-cover h-[300px]" />
                <div className="absolute inset-0 bg-black/60"></div>

                {/* <p className="absolute top-2 left-2 bg-cyan-800 text-white text-sm md:text-base font-hind px-3 py-1 rounded"> */}
                  {/* {item.status} */}
                  {/* Enroll now */}
                {/* </p> */}
{/* <p className="absolute top-2 left-2 rounded-full overflow-hidden p-[2px] animate-spin-border">
  <span className="block bg-cyan-800 text-white text-sm md:text-base font-hind rounded-full px-3 py-1">
    Enroll nowk
  </span>
</p> */}
<EnrollBadge/>

                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-start pl-6 text-white text-[35px] font-bold font-ark"
                >
                  {item.title}
                </motion.p>

                <p className="absolute bottom-3 left-6 font-lexend text-[16px] text-gray-200">
                  {item.coursename}
                </p>
              </div>

              <div className="flex flex-col w-full items-start p-6">
                <div className="w-full flex flex-row justify-start self-start gap-4 text-[#39557E] font-hind text-[16px]">
                  <p className="flex flex-row items-center w-full gap-2">
                    <IoDocumentTextOutline />
                    {item.modules}
                  </p>
                  <p className="flex flex-row w-full gap-2 items-center">
                    <CiTimer />
                    {item.duration}
                  </p>
                </div>
                <div className="w-full flex items-start">
                  <p className="font-lexend text-[20px] text-gray-700">
                    {item.coursename}
                  </p>
                </div>
                <div className="w-full items-start flex flex-col">
                  {/* <div className="flex flex-row items-center text-yellow-400 text-lg gap-2">
                    {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
                    <p className="text-[#39557E] font-hind text-[16px]">
                      {item.rating}
                    </p>
                  </div> */}

                  {/* <p className="flex flex-row font-hind text-[13px] text-[#39557E] items-center gap-2 w-full">
                    <span>🏆</span>
                    {item.subtitle}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurCourses;
