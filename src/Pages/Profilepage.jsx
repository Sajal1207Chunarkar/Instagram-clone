import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'

function Profilepage() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
        <h1>This is profile page</h1>
      
      
      </div>
    </div>
  )
}

export default Profilepage