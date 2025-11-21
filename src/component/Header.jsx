// // import Trophyimg from "../assets/trophy.png";
// // import { FiPhoneCall } from "react-icons/fi";
// // import { FaArrowRight } from "react-icons/fa";
// // import Javascripticon from "../assets/javascript.png";
// // import Pythonicon from "../assets/python.png";
// // import Reacticon from "../assets/react.png";
// // import Htmlicon from "../assets/html.png";
// // import Angularicon from "../assets/angular.png";
// // import Mainimg from "../assets/mainimg.png";
// // import Mainimg2 from "../assets/mainimg2.png";
// // import Scholar from "../assets/scholar.png";
// // import Icicon from "../assets/icicon.png";
// // import Flutter from "../assets/flutter2.png";
// // import { motion } from "motion/react";
// // import { useEffect, useState } from "react";

// // const Header = () => {
// //   const [isContactOpen, setIsContactOpen] = useState(false);
// //   useEffect(() => {
// //     if (isContactOpen) {
// //       document.documentElement.style.overflow = "hidden";
// //       document.body.style.overflow = "hidden";
// //       document.body.style.position = "fixed";
// //       document.body.style.width = "100%";
// //     } else {
// //       document.documentElement.style.overflow = "auto";
// //       document.body.style.overflow = "auto";
// //       document.body.style.position = "";
// //       document.body.style.width = "";
// //     }

// //     return () => {
// //       document.documentElement.style.overflow = "auto";
// //       document.body.style.overflow = "auto";
// //       document.body.style.position = "";
// //       document.body.style.width = "";
// //     };
// //   }, [isContactOpen]);

// //   const [result, setResult] = useState("");

// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     setResult("Sending....");
// //     const formData = new FormData(event.target);

// //     formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
// //     formData.append("to_email", "jagathkrishna900@gmail.com");

// //     const response = await fetch("https://api.web3forms.com/submit", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     const data = await response.json();
// //     console.log("Web3Forms Response:", data);

// //     if (data.success) {
// //       setResult("Form Submitted Successfully");
// //       event.target.reset();
// //     } else {
// //       setResult(" Something went wrong: " + data.message);
// //     }
// //   };
// //   return (
// //     <div className="relative max-w-7xl w-full mx-auto flex flex-col h-auto mt-0 md:mt-8 items-center  justify-center min-h-[660px] overflow-x-hidden">
// //       <motion.img
// //         src={Javascripticon}
// //         alt="JS"
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         viewport={{ once: true }}
// //         className="absolute top-24 left-1/3 md:w-18 w-8 rounded animate-float1"
// //       />
// //       <motion.img
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         src={Pythonicon}
// //         alt="Python"
// //         className="absolute top-10 right-1/4 md:w-16 w-6 animate-float2"
// //       />
// //       <img
// //         src={Reacticon}
// //         alt="React"
// //         className="absolute top-2/3 md:top-1/3 left-1/2 md:w-16 w-12 animate-float3"
// //       />
// //       <img
// //         src={Htmlicon}
// //         alt="HTML"
// //         className="absolute bottom-20 left-1/3 md:w-20 w-12 animate-float4"
// //       />
// //       <img
// //         src={Flutter}
// //         alt="Angular"
// //         className="absolute bottom-10 right-1/5 md:w-8 w-12 animate-float5"
// //       />
// //       <img
// //         src={Angularicon}
// //         alt="Angular"
// //         className="absolute bottom-10 right-1/3 md:w-14 w-12 animate-float5"
// //       />

// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 0.6, delay: 1 }}
// //         // viewport={{once: true}}
// //         className="absolute w-[200px] h-auto p-2 border rounded-lg bg-green-400 mt-[100px] hidden md:flex z-10 shadow-md"
// //       >
// //         <div className="flex flex-col w-full items-center justify-center">
// //           <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
// //             <img src={Scholar} alt="" className="w-[50px]" />
// //           </div>
// //           <p className="text-[14px] font-hind text-[#39557E]">Placements</p>
// //           <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
// //             8000+
// //           </p>
// //         </div>
// //       </motion.div>

// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 0.6, delay: 1 }}
// //         // viewport={{once: true}}
// //         className="absolute right-10 top-8 w-[150px] h-auto p-2 border rounded-lg bg-green-400 hidden md:flex shadow-md"
// //       >
// //         <div className="flex flex-col w-full items-center justify-center">
// //           <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
// //             <img src={Icicon} alt="" className="w-[30px] invert" />
// //           </div>
// //           <p className="text-[14px] font-hind text-[#39557E]">
// //             Total Technologies
// //           </p>
// //           <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
// //             30+
// //           </p>
// //         </div>
// //       </motion.div>

// //       <div className="max-w-7xl w-full flex flex-col md:flex-row mx-auto mt-8">
// //         {/* left........................ */}
// //         <div className="flex flex-col w-full mt-4 gap-6  p-1">
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.7 }}
// //             // viewport={{once: true}}
// //             className="text-[16px] font-hind text-[#9116A1] flex gap-1 items-center justify-center md:items-start md:justify-start"
// //           >
// //             {" "}
// //             <img src={Trophyimg} alt="" className="w-5" />
// //             Leaders in Education Since 6 Years
// //           </motion.p>
// //           <div className="max-w-lg text-center md:text-left mt-6 md:mt-0">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.8 }}
// //               // viewport={{once: true}}
// //               className="font-lexend text-[32px] md:text-[55px] text-gray-900 font-bold leading-tight"
// //             >
// //               Kerala's <span className="text-green-700">No.1</span> Software
// //               Training Institute
// //             </motion.h2>
// //           </div>
// //           {/* <div className="flex flex-col max-w-md mt-8 md:mt-0  md:p-1">
// //                 <p className="font-hind text-[14px] md:text-[16px] text-[#39557E] text-center md:text-start mx-auto leading-relaxed md:leading-7">
// //                   Best software training institute in Kochi, Trivandrum & Calicut. Job-ready tech skills for your career. As the best software training institute in Kochi, we're committed to your career success through industry-relevant curriculum and hands-on training.
// //                 </p>
// //             </div> */}
// //           <div className="flex flex-col max-w-md mt-8 md:mt-0">
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 1 }}
// //               // viewport={{once: true}}
// //               className="font-hind text-sm md:text-base text-[#39557E] text-center md:text-left leading-relaxed"
// //             >
// //               Best software training institute in Calicut. Job-ready tech skills
// //               for your career. As the best software training institute in Kochi,
// //               we're committed to your career success through industry-relevant
// //               curriculum and hands-on training.
// //             </motion.p>
// //           </div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 1.3 }}
// //             // viewport={{once: true}}
// //             className="w-full flex flex-col md:flex-row gap-3 mt-5"
// //           >
// //             <div className="flex flex-row gap-3 items-center justify-center">
// //               <button
// //                 className="relative overflow-hidden text-white font-ark rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
// //                   bg-cyan-900

// //                   bg-[length:200%_200%] bg-left-top
// //                   transition-all duration-300
// //                   hover:bg-right-bottom hover:scale-105 hover:shadow-lg"
// //               >
// //                 EXPLORE COURSESS <FaArrowRight />
// //               </button>
// //               <button
// //                 onClick={() => setIsContactOpen(true)}
// //                 className="border-2 border-cyan-900 bg-white text-cyan-900 rounded-lg px-3 py-2 font-medium font-ark text-[15px] bg-[length:200%_200%] bg-left-top
// //                   transition-all duration-300
// //                   hover:bg-right-bottom hover:scale-105 hover:shadow-lg z-10">
// //                 BOOK A CALLBACK
// //               </button>
// //             </div>
// //             {isContactOpen && (
// //               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-hind">
// //                 <div className="bg-white w-full max-w-sm md:max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative">
// //                   {/* Close Button................ */}
// //                   <button
// //                     onClick={() => setIsContactOpen(false)}
// //                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
// //                   >
// //                     ✕
// //                   </button>

// //                   <h2 className="text-2xl font-semibold mb-4 font-lexend text-[#082A5E] text-[20px]">
// //                     Callback Request
// //                   </h2>
// //                   <form onSubmit={onSubmit} className="flex flex-col gap-4">
// //                     <input
// //                       type="text"
// //                       placeholder="Your Name"
// //                       name="name"
// //                       className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     />
// //                     <input
// //                       type="phone"
// //                       placeholder="Phone"
// //                       name="phone"
// //                       className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     />
// //                     <input
// //                       type="email"
// //                       placeholder="Your Email"
// //                       name="email"
// //                       className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     />
// //                     <textarea
// //                       placeholder="Your Message"
// //                       rows="4"
// //                       name="message"
// //                       className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     ></textarea>
// //                     <button
// //                       type="submit"
// //                       className="bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
// //                     >
// //                       Send Messagee
// //                     </button>
// //                     <p className="text-gray-800 text-[14px]">{result}</p>
// //                   </form>
// //                 </div>
// //               </div>
// //             )}
// //             {/* <div className="md:hidden max-w-[250px] md:max-w-lg flex flex-row gap-3 mx-auto md:mx-0 items-center justify-center md:items-start md:justify-start border border-gray-400 rounded p-2 md:border-none bg-gray-200 md:bg-white ">
// //               <div className="flex flex-col items-center justify-center my-auto">
// //                 <FiPhoneCall className="text-[#9116A1] text-[30px]" />
// //               </div>
// //               <div className="flex flex-col gap-2">
// //                 <p className="font-hind text-[15px] text-[#39557E]">
// //                   Have any questions?
// //                 </p>
// //                 <p className="text-[#082A5E] text-[20px] font-bold font-lexend">
// //                   80 86 65 16 51
// //                 </p>
// //               </div>
// //             </div> */}
// //           </motion.div>
// //         </div>

// //         {/* right............................ */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6, delay: 1 }}
// //           // viewport={{once: true}}
// //           className="w-full flex flex-col mt-12 justify-center items-center"
// //         >
// //           <img src={Mainimg2} alt="" className="w-[500px]" />
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

import Trophyimg from "../assets/trophy.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Javascripticon from "../assets/javascript.png";
import Pythonicon from "../assets/python.png";
import Reacticon from "../assets/react.png";
import Htmlicon from "../assets/html.png";
import Angularicon from "../assets/angular.png";
import Mainimg from "../assets/mainimg.png";
import Mainimg2 from "../assets/mainimg2.png";
import Scholar from "../assets/scholar.png";
import Icicon from "../assets/icicon.png";
import Flutter from "../assets/flutter2.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    if (isContactOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isContactOpen]);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
    formData.append("to_email", "jagathkrishna900@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Web3Forms Response:", data);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong: " + data.message);
    }
  };

  return (
    <div className="relative max-w-7xl w-full mx-auto flex flex-col h-auto mt-0 md:mt-8 items-center justify-center min-h-[660px] overflow-x-hidden">
      <motion.img
        src={Javascripticon}
        alt="JS"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-24 left-1/3 md:w-18 w-8 rounded animate-float1"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src={Pythonicon}
        alt="Python"
        className="absolute top-10 right-1/4 md:w-16 w-6 animate-float2"
      />
      <img
        src={Reacticon}
        alt="React"
        className="absolute top-1/6 md:top-1/3 left-1/2 md:w-16 w-12 animate-float3"
      />
      <img
        src={Htmlicon}
        alt="HTML"
        className="absolute bottom-10 left-10 md:bottom-20 md:left-1/3 w-10 md:w-20 animate-float4"
      />

      <img
        src={Flutter}
        alt="Flutter"
        className="absolute bottom-6 right-6 md:bottom-10 md:right-1/5 w-8 md:w-12 animate-float5"
      />

      <img
        src={Angularicon}
        alt="Angular"
        className="absolute bottom-18 right-8 md:bottom-10 md:right-1/3 w-10 md:w-14 animate-float5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute w-[200px] h-auto p-2 border rounded-lg bg-green-400 mt-[100px] hidden md:flex z-10 shadow-md"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
            <img src={Scholar} alt="" className="w-[50px]" />
          </div>
          <p className="text-[14px] font-hind text-[#39557E]">Placements</p>
          <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
            8000+
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-10 top-8 w-[150px] h-auto p-2 border rounded-lg bg-green-400 hidden md:flex shadow-md"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
            <img src={Icicon} alt="" className="w-[30px] invert" />
          </div>
          <p className="text-[14px] font-hind text-[#39557E]">
            Total Technologies
          </p>
          <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
            30+
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row mx-auto mt-2 md:mt-5">
        {/* left........edit gap reponsive fully................ */}
        <div className="relative flex flex-col w-full mt-0 md:mt-4 gap-3 md:gap-6 p-1">
          {/* Background image only on mobile */}
          <img
            src={Mainimg2}
            alt="background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain opacity-20 md:hidden"
          />

          {/* Top Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center md:justify-start gap-2 font-hind font-medium text-[16px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-6 py-2 w-fit mx-auto md:mx-0"
          >
            <img src={Trophyimg} alt="" className="w-5 h-5" />
            Leaders in Education Since 6 Years
          </motion.p>

          {/* Heading */}
          <div className="flex max-w-lg w-full mx-auto md:mx-0 md:w-auto text-center md:text-left mt-5 md:mt-0 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-lexend text-[32px] md:text-[55px] text-gray-900 font-bold leading-tight"
            >
              Bridging the Gap Between{" "}
              <span className="text-green-700">Learning </span>&{" "}
              <span className="text-green-700">Working</span>
            </motion.h2>
          </div>

          {/* Description */}
          <div className="flex flex-col w-full md:w-[500px] mt-8 md:mt-0 relative z-10 mx-auto md:mx-0 ">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-hind text-sm md:text-base text-[#39557E] text-center md:text-left leading-relaxed"
            >
              Scanntek empowers learners to become skilled IT professionals
              through hands-on, project-based training. Learn from industry
              experts in Web Development, App Development. Our programs are
               crafted to build job-ready confidence and technical
              mastery. We help you bridge the gap between learning and working.
            </motion.p>
          </div>

          {/* Buttons + Popup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="w-full flex flex-col md:flex-row gap-3 mt-5 relative z-10 items-center md:items-start justify-center md:justify-start"
          >
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
              <button className="relative overflow-hidden text-white font-ark rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2 bg-cyan-900 bg-[length:200%_200%] bg-left-top transition-all duration-300 hover:bg-right-bottom hover:scale-105 hover:shadow-lg">
                EXPLORE COURSES <FaArrowRight />
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="border-2 border-cyan-900 bg-white text-cyan-900 rounded-lg px-3 py-2 font-medium font-ark text-[15px] bg-[length:200%_200%] bg-left-top transition-all duration-300 hover:bg-right-bottom hover:scale-105 hover:shadow-lg z-10"
              >
                BOOK A CALLBACK
              </button>
            </div>

            {isContactOpen && (
              <AnimatePresence>
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-hind"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white w-full max-w-sm md:max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    >
                      ✕
                    </button>

                    <h2 className="text-2xl font-semibold mb-4 font-lexend text-[#082A5E] text-[20px]">
                      Callback Request
                    </h2>

                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="phone"
                        placeholder="Phone"
                        name="phone"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows="4"
                        name="message"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>

                      <button
                        type="submit"
                        className="bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
                      >
                        Send Message
                      </button>
                      <p className="text-gray-800 text-[14px]">{result}</p>
                    </form>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </div>

        {/* right............................ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full  flex-col mt-12 justify-center items-center hidden lg:flex"
        >
          <img src={Mainimg2} alt="" loading="lazy" className="w-[500px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

// import Trophyimg from "../assets/trophy.png";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaArrowRight } from "react-icons/fa";
// import Javascripticon from "../assets/javascript.png";
// import Pythonicon from "../assets/python.png";
// import Reacticon from "../assets/react.png";
// import Htmlicon from "../assets/html.png";
// import Angularicon from "../assets/angular.png";
// import Mainimg2 from "../assets/mainimg2.png";
// import Scholar from "../assets/scholar.png";
// import Icicon from "../assets/icicon.png";
// import Flutter from "../assets/flutter2.png";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const Header = () => {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [result, setResult] = useState("");

//   useEffect(() => {
//     if (isContactOpen) {
//       document.documentElement.style.overflow = "hidden";
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.width = "100%";
//     } else {
//       document.documentElement.style.overflow = "auto";
//       document.body.style.overflow = "auto";
//       document.body.style.position = "";
//       document.body.style.width = "";
//     }

//     return () => {
//       document.documentElement.style.overflow = "auto";
//       document.body.style.overflow = "auto";
//       document.body.style.position = "";
//       document.body.style.width = "";
//     };
//   }, [isContactOpen]);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
//     formData.append("to_email", "jagathkrishna900@gmail.com");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully ✅");
//       event.target.reset();
//     } else {
//       setResult("❌ Something went wrong: " + data.message);
//     }
//   };

//   return (
//     <div className="relative max-w-7xl w-full mx-auto flex flex-col min-h-[660px] px-4 sm:px-6 lg:px-8 items-center justify-center overflow-hidden mt-0 md:mt-8">
//       {/* Floating Icons */}
//       <motion.img
//         src={Javascripticon}
//         alt="JS"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="absolute top-20 left-1/3 w-8 md:w-16 lg:w-20 animate-float1"
//       />
//       <motion.img
//         src={Pythonicon}
//         alt="Python"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="absolute top-10 right-1/4 w-6 md:w-14 lg:w-16 animate-float2"
//       />
//       <img
//         src={Reacticon}
//         alt="React"
//         className="absolute top-1/4 left-1/2 w-10 md:w-14 lg:w-16 animate-float3"
//       />
//       <img
//         src={Htmlicon}
//         alt="HTML"
//         className="absolute bottom-10 left-8 md:bottom-16 md:left-1/4 w-10 md:w-16 animate-float4"
//       />
//       <img
//         src={Flutter}
//         alt="Flutter"
//         className="absolute bottom-6 right-6 md:bottom-10 md:right-1/5 w-8 md:w-12 animate-float5"
//       />
//       <img
//         src={Angularicon}
//         alt="Angular"
//         className="absolute bottom-16 right-8 md:bottom-10 md:right-1/3 w-10 md:w-14 animate-float5"
//       />

//       {/* Floating Info Cards */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, delay: 1 }}
//         className="absolute w-[200px] h-auto p-2 border rounded-lg bg-green-400 mt-[100px] hidden md:flex z-10 shadow-md"
//       >
//         <div className="flex flex-col w-full items-center justify-center">
//           <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
//             <img src={Scholar} alt="" className="w-[50px]" />
//           </div>
//           <p className="text-[14px] font-hind text-[#39557E]">Placements</p>
//           <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
//             8000+
//           </p>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, delay: 0.5 }}
//         className="absolute hidden md:flex bg-green-400 border rounded-lg shadow-md w-[140px] md:w-[160px] lg:w-[180px] p-2 right-6 top-8"
//       >
//         <div className="flex flex-col items-center w-full">
//           <div className="bg-blue-400 p-2 rounded-full">
//             <img src={Icicon} alt="" className="w-6 invert" />
//           </div>
//           <p className="text-sm font-hind text-[#39557E] text-center">
//             Total Technologies
//           </p>
//           <p className="text-2xl font-lexend font-bold text-[#082A5E]">
//             30+
//           </p>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12 mt-4">
//         {/* Left Section */}
//         <div className="flex flex-col w-full md:w-1/2 gap-5 relative z-10 text-center md:text-left">
//           <img
//             src={Mainimg2}
//             alt="background"
//             loading="lazy"
//             className="absolute inset-0 w-full h-full object-contain opacity-20 md:hidden"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center justify-center md:justify-start gap-2 text-cyan-700 border border-cyan-700/30 bg-cyan-500/10 rounded-full px-6 py-2 w-fit mx-auto md:mx-0 text-sm sm:text-base font-hind font-medium"
//           >
//             <img src={Trophyimg} alt="" className="w-5 h-5" />
//             Leaders in Education Since 6 Years
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="font-lexend text-[28px] sm:text-[36px] md:text-[48px] lg:text-[55px] text-gray-900 font-bold leading-tight"
//           >
//             Bridging the Gap Between{" "}
//             <span className="text-green-700">Learning </span>&{" "}
//             <span className="text-green-700">Working</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-sm sm:text-base text-[#39557E] leading-relaxed"
//           >
//             Best software training institute in Calicut. Job-ready tech skills
//             for your career. As the best software training institute in Kochi,
//             we're committed to your career success through industry-relevant
//             curriculum and hands-on training.
//           </motion.p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
//             <button className="relative overflow-hidden text-white font-ark rounded-lg px-4 py-2 font-medium text-[15px] flex items-center gap-2 bg-cyan-900 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//               EXPLORE COURSES <FaArrowRight />
//             </button>
//             <button
//               onClick={() => setIsContactOpen(true)}
//               className="border-2 border-cyan-900 bg-white text-cyan-900 rounded-lg px-4 py-2 font-medium font-ark text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               BOOK A CALLBACK
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="hidden lg:flex w-full md:w-1/2 justify-center"
//         >
//           <img
//             src={Mainimg2}
//             alt="Main Visual"
//             loading="lazy"
//             className="w-[400px] md:w-[500px] lg:w-[600px]"
//           />
//         </motion.div>
//       </div>

//       {/* Contact Popup */}
//       <AnimatePresence>
//         {isContactOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-hind px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white w-full max-w-sm md:max-w-md lg:max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative"
//               initial={{ opacity: 0, scale: 0.9, y: 50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 50 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setIsContactOpen(false)}
//                 className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
//               >
//                 ✕
//               </button>

//               <h2 className="text-xl md:text-2xl font-semibold mb-4 font-lexend text-[#082A5E]">
//                 Callback Request
//               </h2>

//               <form onSubmit={onSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   name="name"
//                   className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="phone"
//                   placeholder="Phone"
//                   name="phone"
//                   className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   name="email"
//                   className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   rows="4"
//                   name="message"
//                   className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>

//                 <button
//                   type="submit"
//                   className="bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
//                 >
//                   Send Message
//                 </button>
//                 <p className="text-gray-800 text-sm">{result}</p>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Header;
