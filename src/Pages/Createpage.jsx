import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'

function Createpage() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
        <h1>This is create page</h1>
      
      
      </div>
    </div>
  )
}

export default Createpage