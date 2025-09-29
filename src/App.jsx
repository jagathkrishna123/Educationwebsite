import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
// import Footer from './component/Footer'
import Home from './component/Home'
import OurCourses from './component/OurCourses'
import WhoWeAre from './component/WhoWeAre'
import Footer from './component/Footer'
import Excellence from './component/Excellence'
// import Cursor from './component/Cursor'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-20'>
        <Header/>
      </div>
      {/* <Footer/> */}
      <Home/>
      <OurCourses/>
      <WhoWeAre/>
      <Excellence/>
      <Footer/>
      
    </div>
  )
}

export default App