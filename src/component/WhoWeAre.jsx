import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUserRoundCheck } from "react-icons/lu";
import Bgimg from "../assets/bg2.jpg"
import { GiGraduateCap } from "react-icons/gi";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl w-full flex flex-col md:flex-row  mx-auto p-3 gap-8 mt-4 overflow-x-hidden">
      {/* left side */}
      <div className="w-full flex flex-col overflow-hidden">
        <img src={Bgimg} alt="" className="w-[628px] h-[650px] object-cover rounded-lg"/>
      </div>
      {/* right side */}
      <div className="w-full flex flex-col  gap-4">
        <div className="flex w-full  items-center md:items-start justify-center md:justify-start">
          <p className="flex font-hind font-medium text-[16px] text-[#9116A1] bg-gray-300 px-3 rounded-sm">
            Who We Are
          </p>
        </div>
        <div className="flex items-center md:items-start justify-center md:justify-start text-center md:text-start">
          <p className="font-lexend text-[22px] md:text-[36px] font-bold text-[#082A5E]">
            Learn From <span className="text-[#9116A1]">Industry Experts</span>{" "}
            Across the Globe
          </p>
        </div>
        <div className="w-full max-w-lg sm:max-w-2xl">
  <p className="font-hind text-[16px] text-[#39557E] text-justify">
    We are a Best software training institute in kochi, empowering
    individuals with skills and knowledge to excel in the tech industry.
    Our expert instructors, comprehensive lessons, and global reach make
    us the ideal choice for professional growth. As the best software
    training institute in Kochi, we pride ourselves on our industry
    collaborations and exceptional placement record.
  </p>
</div>
        <div className="flex flex-row max-w-lg  gap-3 justify-between">
          <div className="flex flex-row gap-3  p-3">
            <div className="flex items-center">
              <LuUserRoundCheck className="text-[50px] text-[#A724E4] font-bold" />
            </div>
            <div className="flex max-w-[80px] bg-slate-100 p-3">
              <p className="font-hind font-semibold text-[18px] text-[#082A5E]">
                50+ Expert Trainers
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 p-3">
            <div className="flex items-center">
              <IoDocumentTextOutline className="text-[50px] text-[#A724E4] font-bold" />
            </div>
            <div className="flex max-w-[120px] bg-slate-100 p-3">
              <p className="font-hind font-semibold text-[18px] text-[#082A5E]">
                1000+ Specialized Modules
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3  p-3 mt-1">
          <div className="flex items-center">
            <GiGraduateCap className="text-[50px] text-[#A724E4] font-bold" />
          </div>
          <div className="flex max-w-[120px] bg-slate-100 p-3">
            <p className="font-hind font-semibold text-[18px] text-[#082A5E]">
              8000+ Successful Graduates
            </p>
          </div>
        </div>

       <div className="w-full flex items-center md:items-start justify-center md:justify-start">
         <button
          className="relative overflow-hidden text-white rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
                          bg-gradient-to-r from-violet-800 via-violet-600 to-violet-800
                          bg-[length:200%_200%] bg-left-top
                          transition-all duration-300
                          hover:bg-right-bottom hover:scale-105 hover:shadow-lg w-fit"
        >
          LEARN MORE <FaArrowRight />
        </button>
       </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
