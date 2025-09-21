import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
// import Cursor from './component/Cursor'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-20'>
        <Header/>
      </div>
    </div>
  )
}

export default App