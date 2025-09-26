import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
// import Footer from './component/Footer'
import Home from './component/Home'
import OurCourses from './component/OurCourses'
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
    </div>
  )
}

export default App