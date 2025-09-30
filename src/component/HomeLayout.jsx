import React from 'react'

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