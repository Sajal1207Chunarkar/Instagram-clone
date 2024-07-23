import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'

function Explore() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
        <h1>This is explore page</h1>
      
      
      </div>
    </div>
  )
}

export default Explore