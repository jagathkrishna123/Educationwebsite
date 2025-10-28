import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
// import Header from './component/Header'
// import Footer from './component/Footer'
// import Home from './component/Home'
// import OurCourses from './component/OurCourses'
// import WhoWeAre from './component/WhoWeAre'
import Footer from './component/Footer'
// import Excellence from './component/Excellence'
import Contactwithus from './component/Contactwithus'
import HomeLayout from './component/HomeLayout'
import { Route, Routes } from 'react-router-dom'
import OurCourses from './component/OurCourses'
import Coursedetailpage from './component/Coursedetailpage'
import Gallery from './component/Gallery'
import Lenis from '@studio-freight/lenis/types'
import Aboutus from './component/Aboutus'
import Gallerycomp from './component/Gallerycomp'
// import Cursor from './component/Cursor'

const App = () => {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomeLayout/>}/>
          <Route path="/contactus" element={<Contactwithus/>}/>
          <Route path="/courses" element={<OurCourses/>}/>
          <Route path="/courses/:crsId" element={<Coursedetailpage />} /> 
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/gallerycom" element={<Gallerycomp/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      
      <Footer/>
      {/* <Coursedetailpage/> */}
      
    </div>
  )
}

export default App