import React from 'react'
import Trophyimg from "../assets/trophy.png"
import { FiPhoneCall } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import Javascripticon from "../assets/javascript.png"
import Pythonicon from "../assets/python.png"
import Reacticon from "../assets/react.png"
import Htmlicon from "../assets/html.png"
import Angularicon from "../assets/angular.png"
import Mainimg from "../assets/mainimg.png"
import Mainimg2 from "../assets/mainimg2.png"
import Scholar from "../assets/scholar.png"
import Icicon from "../assets/icicon.png"







const Header = () => {
  return (
    <div className='relative w-full flex flex-col h-auto mt-2 md:mt-8 items-center justify-center min-h-[660px]'>
      <img src={Javascripticon} alt="JS" className="absolute top-10 left-1/4 md:w-18 w-12 rounded animate-float1" />
      <img src={Pythonicon} alt="Python" className="absolute top-10 right-1/4 md:w-16 w-12 animate-float2" />
      <img src={Reacticon} alt="React" className="absolute top-2/3 md:top-1/3 left-1/2 md:w-16 w-12 animate-float3" />
      <img src={Htmlicon} alt="HTML" className="absolute bottom-20 left-1/3 md:w-20 w-12 animate-float4" />
      <img src={Angularicon} alt="Angular" className="absolute bottom-10 right-1/3 md:w-14 w-12 animate-float5" />

      <div className='absolute w-[200px] h-auto p-2 border rounded-lg bg-slate-300 mt-[100px] hidden md:flex'>
        <div className='flex flex-col w-full items-center justify-center'>
          <div className='bg-green-400 items-center justify-center p-2 rounded-full'><img src={Scholar} alt="" className='w-[50px]'/></div>
          <p className='text-[14px] font-hind text-[#39557E]'>Placements</p>
          <p className='text-[30px] font-lexend font-bold text-[#082A5E]'>8000+</p>
        </div>
      </div>

      <div className='absolute right-10 w-[150px] h-auto p-2 border rounded-lg bg-slate-300 hidden md:flex'>
      <div className='flex flex-col w-full items-center justify-center'>
        <div className='bg-blue-400 items-center justify-center p-2 rounded-full'>
          <img src={Icicon} alt="" className='w-[30px] invert'/>
        </div>
        <p className='text-[14px] font-hind text-[#39557E]'>Total Technologies</p>
        <p className='text-[30px] font-lexend font-bold text-[#082A5E]'>30+</p>
      </div>
    </div>

        <div className='max-w-7xl w-full flex flex-col md:flex-row mx-auto mt-8'>
          {/* left........................ */}
            <div className='flex flex-col w-full mt-12  p-1'>
              <p className='text-[16px] font-hind text-[#9116A1] flex gap-1 items-center justify-center md:items-start md:justify-start'> <img src={Trophyimg} alt="" className='w-5' />Leaders in Education Since 6 Years</p>
              <div className="max-w-lg text-center md:text-left mt-6 md:mt-0">
                <h2 className="font-lexend text-[32px] md:text-[55px] text-[#082A5E] font-bold leading-tight">
                  Kerala's <span className="text-[#9116A1]">No.1</span> Software Training Institute
                </h2>
            </div>
              <div className="flex max-w-md text-center md:text-start mt-8 md:mt-0 pr-8 md:p-1">
                <p className="font-hind text-[14px] md:text-[16px] text-[#39557E] leading-relaxed md:leading-7">
                  Best software training institute in Kochi, Trivandrum & Calicut. Job-ready tech skills for your career. As the best software training institute in Kochi, we're committed to your career success through industry-relevant curriculum and hands-on training.
                </p>
            </div>
              
              <div className='w-full flex flex-col md:flex-row gap-3 mt-5'>
                <div className='flex items-center justify-center'>
                  <button className="relative overflow-hidden text-white rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
                  bg-gradient-to-r from-violet-800 via-violet-600 to-violet-800
                  bg-[length:200%_200%] bg-left-top
                  transition-all duration-300
                  hover:bg-right-bottom hover:scale-105 hover:shadow-lg">
                  EXPLORE COURSES <FaArrowRight />
                </button>

                </div>
                <div className='max-w-[250px] md:max-w-lg flex flex-row gap-3 mx-auto md:mx-0 items-center justify-center md:items-start md:justify-start border border-gray-400 rounded p-2 md:border-none bg-gray-200 md:bg-white '>
                  <div className='flex flex-col items-center justify-center my-auto'>
                    <FiPhoneCall className='text-[#9116A1] text-[30px]'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                      <p className='font-hind text-[15px] text-[#39557E]'>Have any questions?</p>
                      <p className='text-[#082A5E] text-[20px] font-bold font-lexend'>80 86 65 16 51</p>
                  </div>
                </div>
              </div>

            </div>

            {/* right............................ */}
            <div className='w-full flex flex-col mt-12 justify-center items-center'>
              <img src={Mainimg2} alt="" className='w-[500px]'/>
            </div>
        </div>
    </div>
  )
}

export default Header