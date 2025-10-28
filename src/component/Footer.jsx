import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-cyan-900 p-2 mt-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row mx-auto justify-between mt-12 mb-12 gap-6 md:gap-0 px-3">
        {/* ---------------- LEFT LOGO SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col text-white gap-6 sm:gap-8"
        >
          <div className="flex items-center space-x-1">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#242a35]">
              Scanntek
            </span>
            <div className="bg-white px-2 sm:px-3 py-1 rounded-lg h-fit">
              <span className="text-green-600 text-base sm:text-lg font-bold -tracking-normal">
                Edu
              </span>
            </div>
          </div>
          <div className="max-w-xs">
            <p className="text-[14px] sm:text-[16px]">
              Trusted Solutions for a Secure & Connected Future
            </p>
          </div>
          <div className="flex flex-row text-[22px] sm:text-[30px] text-gray-200 gap-2 sm:gap-3">
            <BiLogoFacebook className="border border-gray-200 p-1 rounded-md" />
            <FaTwitter className="border border-gray-200 p-1 rounded-md" />
            <PiInstagramLogoFill className="border border-gray-200 p-1 rounded-md" />
            <AiFillYoutube className="border border-gray-200 p-1 rounded-md" />
            <AiFillLinkedin className="border border-gray-200 p-1 rounded-md" />
          </div>
        </motion.div>

        {/* ---------------- RESOURCES SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 sm:gap-4 text-white"
        >
          <p className="font-lexend font-bold text-[20px] sm:text-[24px]">
            Resources
          </p>
          <ul className="flex flex-col gap-2 sm:gap-4 font-hind font-medium text-[13px] sm:text-[15px]">
            <li>Python Data Analytics with Power BI</li>
            <li>Best Flutter Training In Calicut (Kozhikode)</li>
            <li>Asp.net MVC with Angular - Full Stack</li>
            <li>Python Django - React - Full Stack</li>
            <li>Web Development Expert</li>
            <li>PYTHON DATA SCIENCE - ML - AI</li>
            <li>Software Testing Training Manual & Automation</li>
            <li>MEA(R)N Stack Web Development</li>
            <li>Robotics with AI & IoT Training</li>
            <li>Java Spring Full Stack Development</li>
          </ul>
        </motion.div>

        {/* ---------------- USEFUL LINKS SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-col gap-3 sm:gap-4 hidden md:flex"
        >
          <p className="font-lexend font-bold text-[20px] sm:text-[24px] text-white">
            Useful Links
          </p>
          <ul className="flex flex-col gap-2 sm:gap-3 font-hind font-medium text-gray-300 text-[13px] sm:text-[15px]">
            <li>Refund & Cancellation Policy</li>
            <li>Certification & Affiliation</li>
            <li>Our Trainers</li>
            <li>Our Courses</li>
            <li>Gallery</li>
          </ul>
        </motion.div>

        {/* ---------------- CONTACT SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:gap-4 text-white"
        >
          <p className="font-lexend font-bold text-[20px] sm:text-[24px]">
            Contact Us
          </p>
          <ul className="flex flex-col gap-4 sm:gap-8 font-bold text-gray-300 text-[13px] sm:text-[15px]">
            <li>Calicut</li>
            <li>Kochi ( H Q )</li>
            <li>Trivandrum</li>
            <li>Thrissur</li>
          </ul>
        </motion.div>
      </div>

      {/* ---------------- COPYRIGHT SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col text-center mb-6 text-white font-hind gap-2 sm:gap-4"
      >
        <p className="text-[12px] sm:text-sm tracking-widest">
          Copyright © {new Date().getFullYear()} Scanntek-IT Solution
        </p>
        <p className="text-[12px] sm:text-sm tracking-widest">
          Best Software Training Institute in Calicut. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
