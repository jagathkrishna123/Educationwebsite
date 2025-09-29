import React from 'react'
import Luminarlogo from "../assets/lumlogo.png"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { BiLogoFacebook } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-[#39557E] p-2 mt-8'>
        <div className='w-full max-w-7xl flex flex-col md:flex-row mx-auto justify-between mt-12 mb-12 gap-6 md:gap-0'>
            <div className='flex flex-col  text-white gap-8'>
                <img src={Luminarlogo} alt="" className='w-[250px] invert brightness-0' />
                <div className='max-w-xs'>
                  <p className='text-[16px]'>Trusted Solutions for a Secure & Connected Future</p>
                </div>
                <div className='flex flex-row text-[30px] text-gray-200 gap-3'>
                    <BiLogoFacebook  className='border border-gray-500 p-1 rounded-md'/>
                    <FaTwitter className='border border-gray-500 p-1 rounded-md'/>
                    <PiInstagramLogoFill className='border border-gray-500 p-1 rounded-md'/>
                    <AiFillYoutube className='border border-gray-500 p-1 rounded-md'/>
                    <AiFillLinkedin className='border border-gray-500 p-1 rounded-md'/>
                </div>
            </div>

            <div className='flex flex-col gap-4 text-white'>
              <p className='font-lexend font-bold text-[24px]'>Resources</p>
              <ul className='flex flex-col gap-4 font-hind font-medium'>
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
            </div>

            <div className='flex flex-col gap-4'>
              <p className='font-lexend font-bold text-[24px] text-white'>Usefull Links</p>
              <ul className='flex flex-col gap-3 font-hind font-medium text-gray-300'>
                <li>Refund & Cancellation Policy</li>
                <li>Certification & Affiliation</li>
                <li>Our Trainers</li>
                <li>Our Courses</li>
                <li>Gallery</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4 text-white'>
              <p className='font-lexend font-bold text-[24px]'>Contact Us</p>
              <ul className='flex flex-col gap-8 font-bold text-gray-300'>
                <li>Calicut</li>
                <li>Kochi ( H Q )</li>
                <li>Trivandrum</li>
                <li>Thrissur</li>
              </ul>
            </div>
        </div>
        <div className='flex flex-col text-center mb-6 text-white font-hind gap-4'>
          <p className="text-sm tracking-widest">Copyright © {new Date().getFullYear()} Scanntek-IT solution</p>
          <p className='text-sm tracking-widest'>Best Software Training Institute in Calict. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer