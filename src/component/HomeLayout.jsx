import React from 'react'
import Header from './Header'
import Home from './Home'
import OurCourses from './OurCourses'
import WhoWeAre from './WhoWeAre'
import Excellence from './Excellence'
const HomeLayout = () => {
  return (
    <div>
              <div className='pt-20'>
                <Header/>
              </div>
              {/* <Footer/> */}
              <Home/>
              <OurCourses/>
              <WhoWeAre/>
              <Excellence/>
    </div>
  )
}

export default HomeLayout