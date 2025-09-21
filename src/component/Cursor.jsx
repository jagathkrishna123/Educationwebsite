
import {gsap} from 'gsap'
import React, { useEffect } from 'react'

const Cursor = () => {
    useEffect(()=> {
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event;
            gsap.to("#cursor", {
                x: clientX - 20/2,
                y:clientY - 20/2,
                duration: 1,
                delay: 0,
                ease: "power4.out",
            })
        }
        window.addEventListener("mousemove", handleMouseMove);
        return ()=> {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])
  return (
    <>
    <div id='cursor' className='absolute top-0 left-0 h-[20px] w-[20px] bg-black rounded-full z-10 pointer-events-none mix-blend-difference'/>
    <div className='w-full h-screen flex justify-center items-center'>
        <h1 onMouseEnter={()=> gsap.to("#cursor", {scale:8, duration:0.3})}
        onMouseLeave={()=> gsap.to("#cursor", {scale:1, duration:0.3})} className='text-9xl'>HOVER ME</h1>
    </div>
    </>
  )
}

export default Cursor