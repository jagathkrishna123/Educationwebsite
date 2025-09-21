import React from 'react'
import Trophyimg from "../assets/trophy.png"
import { FiPhoneCall } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='w-full flex flex-col bg-gray-800 h-screen items-center justify-center'>
        <div className='max-w-7xl w-full bg-amber-600 flex flex-row mx-auto h-[600px]'>
          {/* left........................ */}
            <div className='flex flex-col w-full mt-12 bg-teal-700 p-1'>
              <p className='text-[16px] font-hind text-[#9116A1] flex gap-1'> <img src={Trophyimg} alt="" className='w-5' />Leaders in Education Since 6 Years</p>
              <div className='max-w-lg'>
                <h2 className='font-lexend text-[55px] text-[#082A5E] font-bold'>Kerala's <span className='text-[#9116A1]'>No.1</span> Software Training Institute</h2>
              </div>
              <div className='max-w-md'>
                <p className='font-hind text-[16px] text-[#39557E]'>Best software training institute in Kochi, Trivandrum & Calicut. Job-ready tech skills for your career As the best software training institute in Kochi, we're committed to your career success through industry-relevant curriculum and hands-on training.</p>
              </div>
              
              <div className='w-full flex flex-row gap-2 mt-3 bg-slate-500'>
                <div className='flex items-center justify-center'>
                  <button className="bg-gradient-to-b from-violet-800 via-violet-600 to-violet-800 text-white rounded-lg px-3 py-2 font-medium text-[15px] flex flex-row items-center gap-2">EXPLORE COURSES <FaArrowRight /> </button>
                </div>
                <div className='max-w-lg flex flex-row gap-2 bg-orange-400'>
                  <div className='flex flex-col bg-red-500 items-center justify-center'>
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
            <div className='w-full flex flex-col mt-12 bg-lime-600'>
              <p>xxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
        </div>
    </div>
  )
}

export default Header