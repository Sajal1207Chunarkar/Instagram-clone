import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'
import Feed from '../Components/Feed/Feed'
import Rightsidebar from '../Components/RightSidebar/Rightsidebar'
import '../styles/Homepage.css'

function HomePage() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
      {/* feed */}
      <Feed/>
      
      {/* right sidebar */}
      <Rightsidebar/>
      </div>
    </div>
  )
}

export default HomePage