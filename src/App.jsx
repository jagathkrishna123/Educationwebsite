import React, { useState } from 'react'
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
// import Cursor from './component/Cursor'

const App = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomeLayout/>}/>
          <Route path="/contactus" element={<Contactwithus/>}/>
          <Route path="/courses" element={<OurCourses/>}/>
          <Route path="/courses/:crsId" element={<Coursedetailpage />} /> 
      </Routes>
      
      <Footer/>
      {/* <Coursedetailpage/> */}
      
    </div>
  )
}

export default App