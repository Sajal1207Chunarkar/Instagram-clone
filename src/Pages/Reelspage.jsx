import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'

function Reelspage() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
        <h1>This is reels page</h1>
      
      
      </div>
    </div>
  )
  
}

export default Reelspage