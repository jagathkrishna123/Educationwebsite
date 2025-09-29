import React from 'react'
import { FaArrowRight, FaLaptopCode } from 'react-icons/fa'
import { FaHandshakeAngle } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'
import { PiMedalFill } from 'react-icons/pi'

const Excellence = () => {
  return (
    <div className='max-w-7xl w-full  mx-auto flex flex-col mt-16 mb-8'>
        <div className=' flex flex-col p-6 gap-8'>
            <div className='flex flex-col items-center justify-center'>
                <p className="font-hind text-[16px] bg-slate-200 px-1 max-w-xs rounded text-[#9116A1] font-medium">Excellence in Education</p>
            </div>
            <div className='max-w-3xl flex text-center mx-auto'>
                <p className='text-[#082A5E] text-[22px] md:text-[36px] font-bold font-lexend'>Why Luminar Technolab is the <br /> <span className='text-[#9116A1]'>Best Software Training</span> Institute in Kochi</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 font-lexend justify-between gap-4'>
                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg'>
                    <FaHandshakeAngle className='text-blue-800 text-[30px]'/>
                    <div className='max-w-sm  text-center text-[#082A5E]'>
                        <p className='font-bold text-[16px] md:text-[22px] font-lexend'>100% Placement <br /> Assistance</p>
                    </div>
                    <div className='max-w-xs  text-center font-hind text-[#39557E]'>
                        <p className='text-[14px] md:text-[16px]'>Dedicated placement cell with strong industry connections to help you secure your dream job.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg'>
                    <IoPerson className='text-blue-800 text-[30px]'/>
                    <div className='max-w-sm  text-center text-[#082A5E] '>
                        <p className='font-bold text-[16px] md:text-[22px] font-lexend'>Industry-Expert <br /> Trainers</p>
                    </div>
                    <div className='max-w-xs text-center font-hind text-[#39557E] mt-2'>
                        <p className='text-[14px] md:text-[16px]'>Learn from certified professionals with extensive real-world industry experience and knowledge.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg'>
                    <FaLaptopCode className='text-blue-800 text-[30px]'/>
                    <div className='max-w-sm text-center text-[#082A5E]'>
                        <p className='font-bold text-[16px] md:text-[22px] font-lexend'>Real-World Projects</p>
                    </div>
                    <div className='max-w-xs  text-center font-hind text-[#39557E] mt-6'>
                        <p className='text-[14px] md:text-[16px]'>Hands-on experience with industry-relevant projects to build a professional portfolio..</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 md:p-4 shadow-lg'>
                    <PiMedalFill className='text-blue-800 text-[30px]'/>
                    <div className='max-w-sm text-center text-[#082A5E]'>
                        <p className='font-bold text-[16px] md:text-[22px] font-lexend'>ISO-Certified Institute</p>
                    </div>
                    <div className='max-w-xs text-center font-hind text-[#39557E] mt-6'>
                        <p className='text-[14px] md:text-[16px]'>Quality education guaranteed through ISO certification and standardized training methods.</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                              <button className="relative overflow-hidden text-white rounded-lg px-3 py-2 font-medium text-[15px] flex items-center gap-2
                              bg-gradient-to-r from-violet-800 via-violet-600 to-violet-800
                              bg-[length:200%_200%] bg-left-top
                              transition-all duration-300
                              hover:bg-right-bottom hover:scale-105 hover:shadow-lg">
                              EXPLORE COURSES <FaArrowRight />
                            </button>
            
                            </div>
        </div>
    </div>
  )
}

export default Excellence