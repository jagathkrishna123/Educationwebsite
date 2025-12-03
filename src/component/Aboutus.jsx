// import { FaArrowRight } from "react-icons/fa";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { LuBookOpen, LuUserRoundCheck } from "react-icons/lu";
// import Bgimg from "../assets/bg2.jpg";
// import { GiGraduateCap } from "react-icons/gi";
// import { motion } from "motion/react";
// import Contactimg from "../assets/contact.jpg";
// import slideimg1 from "../assets/slideimg1.jpg";
// import slideimg2 from "../assets/slideimg2.jpg";
// import slideimg3 from "../assets/slideimg3.jpg";
// import slideimg4 from "../assets/slideimg4.jpg";
// import slideimg5 from "../assets/slideimg5.jpg";
// import slideimg6 from "../assets/slideimg6.jpg";

// const Aboutus = () => {
//   return (
//     <div className="w-full flex flex-col mb-5 mt-8 overflow-x-hidden">
      
//       <section
//         className="w-full h-[300px] bg-cover bg-center flex items-center justify-start px-6"
//         style={{ backgroundImage: `url(${Contactimg})` }}
//       >
//         <h1 className="text-white text-[36px] md:text-[50px] font-mont w-full md:w-7xl px-2 md:px-3 z-10 font-lexend">
//           About Us
//         </h1>
//         {/* <div className="absolute inset-0 bg-black/30"></div> */}
//       </section>


// <div className="max-w-7xl w-full flex flex-col md:flex-row  mx-auto p-3 gap-8 mt-4 overflow-x-hidden">

//     <div className="w-full flex flex-col  gap-4">
//         <div className="flex w-full  items-center md:items-start justify-center md:justify-start">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex font-hind font-medium text-[16px] text-[#9116A1] bg-gray-300 px-3 rounded-sm"
//           >
//             Who We Are
//           </motion.p>
//         </div>
//         <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
//           >
//             Provide <span className="text-green-600">Quality</span>{" "}
//             Tranining services for you
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="font-lexend text-[17px] md:text-[22px] font-medium text-gray-800"
//           >
//             Scanntek solution - Certified Software Training Institute.
//           </motion.p>
//         </div>
//         <div className="w-full max-w-lg sm:max-w-2xl">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-hind text-[16px] text-[#39557E] text-justify"
//           >
//             We are a Best software training institute in Calicut, empowering individuals with skills and knowledge to excel in the tech industry. Our expert instructors, comprehensive lessons, and global reach make us the ideal choice for professional growth. As the best software training institute in Kochi, we pride ourselves on our industry collaborations and exceptional placement record. <br />
// With flexible learning options, mentorship support, and career guidance sessions, we make sure every student receives personalized attention. Our alumni network spans across top IT companies, creating opportunities and connections worldwide. We don’t just teach — we shape confident, skilled professionals ready to lead in the digital era.
//           </motion.p>
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

            
//             <span className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
//           </button>
//         </div>
//       </div>
      
//       <div className="w-full flex flex-col overflow-hidden">
//         <img
//           src={Bgimg}
//           alt=""
//           className="w-[628px] h-[650px] object-cover rounded-lg"
//         />
//       </div>
      
      
//     </div>
      
//       </div>
//   )
// }

// export default Aboutus

import { motion } from "framer-motion";
import { FaArrowRight, FaAward, FaGraduationCap, FaUsers, FaChalkboardTeacher, FaLaptopCode, FaDatabase, FaMobile, FaCloud, FaRegGem, FaPython } from "react-icons/fa";
import Contactimg from "../assets/contact.jpg";
import Bgimg from "../assets/slideimg1.jpg";
import slideimg2 from "../assets/slideimg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";
import slideimg6 from "../assets/slideimg6.jpg";
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";


const Aboutus = () => {
  const courses = [
    { icon: <FaLaptopCode />, title: "Full Stack Development", students: "500+" },
    { icon: <FaPython />, title: "Python Development", students: "350+" },
    { icon: <FaMobile />, title: "Mobile App Development", students: "400+" },
    { icon: <FaCloud />, title: "Cloud Computing", students: "300+" }
  ];

  const achievements = [
    { number: "2500+", label: "Students Trained", icon: <FaGraduationCap /> },
    { number: "95%", label: "Placement Rate", icon: <FaAward /> },
    { number: "50+", label: "Expert Trainers", icon: <FaChalkboardTeacher /> },
    { number: "100+", label: "Partner Companies", icon: <FaUsers /> }
  ];

  const facultyMembers = [
    { image: slideimg2, name: "Industry Expert", experience: "10+ Years" },
    { image: slideimg3, name: "Senior Developer", experience: "8+ Years" },
    { image: slideimg4, name: "Tech Lead", experience: "12+ Years" }
  ];

    // Extract only numeric part (e.g., "2500+" → 2500, "95%" → 95)
  const targets = achievements.map((a) => parseInt(a.number));

  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    const intervals = targets.map((finalNumber, i) => {
      let current = 0;
      const increment = Math.ceil(finalNumber / 60); // control speed
      const interval = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
          current = finalNumber;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 40); // update every 40ms for fast smooth counting
      return interval;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);



  return (
    <div className="w-full flex flex-col mb-5 mt-8 overflow-x-hidden">
      <section
  className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-start px-6"
  style={{ backgroundImage: `url(${Contactimg})` }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text Content */}
  <h1 className="relative text-white text-[36px] md:text-[50px] font-mont w-full md:w-7xl px-2 md:px-3 z-10 font-lexend">
    About Us
  </h1>
</section>

      {/* Who We Are Section */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row mx-auto p-3 gap-8 mt-8 overflow-x-hidden">
  {/* LEFT SIDE CONTENT */}
  <div className="w-full flex flex-col gap-4">
    <div className="flex w-full items-center md:items-start justify-center md:justify-start">
<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="font-hind font-medium text-[16px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-6 py-2 inline-block"
>
  Who We Are
</motion.p>













    </div>

    <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
      >
        Provide <span className="text-green-600">Quality</span> Training Services
        for You
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-lexend text-[17px] md:text-[22px] font-medium text-gray-800"
      >
        Scanntek Solution - Certified Software Training Institute
      </motion.p>
    </div>

    <div className="w-full max-w-lg sm:max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-hind text-[16px] text-[#39557E] text-justify"
      >
        We are a Best software training institute in Calicut, empowering
        individuals with skills and knowledge to excel in the tech industry. Our
        expert instructors, comprehensive lessons, and global reach make us the
        ideal choice for professional growth. As the best software training
        institute in Kochi, we pride ourselves on our industry collaborations
        and exceptional placement record. <br />
        With flexible learning options, mentorship support, and career guidance
        sessions, we make sure every student receives personalized attention.
      </motion.p>
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
        <span className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
      </button>
    </div>
  </div>

  {/* RIGHT SIDE IMAGE GRID */}
  <div className="w-full grid grid-cols-2 gap-3 md:gap-4">
    <img
      src={slideimg3}
      alt="slideimg3"
      className="w-full h-[190px] md:h-[220px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
    />
    <img
      src={slideimg4}
      alt="slideimg4"
      className="w-full h-[190px] md:h-[220px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
    />
    <img
      src={slideimg5}
      alt="slideimg5"
      className="w-full h-[190px] md:h-[220px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
    />
    <img
      src={slideimg6}
      alt="slideimg6"
      className="w-full h-[190px] md:h-[220px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>

      {/* Mission Section */}
      <div className="max-w-7xl w-full mx-auto p-3 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="font-hind font-medium text-[16px] text-[#9116A1] bg-white px-4 py-2 rounded-full shadow-sm">
              Our Mission
            </span>
          </div>
          <h2 className="font-lexend text-[28px] md:text-[42px] font-bold text-gray-800 text-center mb-6">
            Transforming Lives Through <span className="text-cyan-600">Technology Education</span>
          </h2>
          <p className="font-hind text-[17px] text-[#39557E] text-center max-w-4xl mx-auto leading-relaxed">
            Our mission is to bridge the gap between academic learning and industry requirements by providing cutting-edge training programs. We are committed to nurturing talent, fostering innovation, and creating opportunities for aspiring professionals to achieve their career goals in the ever-evolving technology landscape.
          </p>
        </motion.div>
      </div>

      {/* Achievements Section */}
       <div className="max-w-7xl w-full mx-auto p-3 mt-16">
      <div className="flex items-center justify-center mb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-hind font-medium text-[16px] text-[#9116A1] bg-gray-300 px-4 py-2 rounded-sm"
        >
          Our Achievements
        </motion.span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-lexend text-[28px] md:text-[40px] font-bold text-gray-800 text-center mb-12"
      >
        Numbers That Speak for Themselves
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
          >
            <div className="text-4xl text-cyan-600 mb-4 flex justify-center">
              {achievement.icon}
            </div>
            <h3 className="font-lexend text-[32px] md:text-[40px] font-bold text-gray-800 mb-2">
              {counts[index]}
              {achievement.number.includes("+") && "+"}
              {achievement.number.includes("%") && "%"}
            </h3>
            <p className="font-hind text-[14px] md:text-[16px] text-gray-600">
              {achievement.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Courses Section */}
      <div className="max-w-7xl w-full mx-auto p-3 mt-16">
        <div className="flex items-center justify-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-hind font-medium text-[16px] text-[#9116A1] bg-gray-300 px-4 py-2 rounded-sm"
          >
            Popular Courses
          </motion.span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-lexend text-[28px] md:text-[40px] font-bold text-gray-800 text-center mb-12"
        >
          Industry-Ready <span className="text-green-600">Training Programs</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="font-lexend text-[20px] font-bold mb-3">
                {course.title}
              </h3>
              <p className="font-hind text-[14px] opacity-90">
                {course.students} Students Enrolled
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Faculty Section */}
      <div className="max-w-7xl w-full mx-auto p-3 mt-16">
        <div className="flex items-center justify-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-hind font-medium text-[16px] text-[#9116A1] bg-gray-300 px-4 py-2 rounded-sm"
          >
            Our Faculty
          </motion.span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-lexend text-[28px] md:text-[40px] font-bold text-gray-800 text-center mb-4"
        >
          Learn from the <span className="text-purple-600">Best in the Industry</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-hind text-[16px] text-[#39557E] text-center max-w-3xl mx-auto mb-12"
        >
          Our faculty comprises seasoned professionals with extensive industry experience, dedicated to mentoring the next generation of tech leaders.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-lexend text-[22px] font-bold text-gray-800 mb-2">
                  {faculty.name}
                </h3>
                <p className="font-hind text-[15px] text-cyan-600 font-medium">
                  {faculty.experience} Experience
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl w-full mx-auto p-3 mt-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <h2 className="font-lexend text-[28px] md:text-[44px] font-bold mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="font-hind text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of successful students who have transformed their careers with our expert training programs. Take the first step towards your dream tech career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="relative overflow-hidden text-cyan-600 bg-white rounded-lg px-6 py-3 font-lexend font-semibold text-[16px] flex items-center gap-2 shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl group">
                <span className="relative z-10">ENROLL NOW</span>
                <FaArrowRight className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="relative overflow-hidden text-white border-2 border-white rounded-lg px-6 py-3 font-lexend font-semibold text-[16px] flex items-center gap-2 transform transition-all duration-300 ease-out hover:bg-white hover:text-cyan-600 hover:scale-105">
                <span className="relative z-10">CONTACT US</span>
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-[14px] opacity-90">
              <span className="flex items-center gap-2">
                <FaGraduationCap className="text-xl" />
                Free Demo Classes
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <FaAward className="text-xl" />
                Industry Certification
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <FaUsers className="text-xl" />
                100% Placement Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;