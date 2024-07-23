import React from 'react'
import Leftsidebar from '../Components/LeftSidebar/Leftsidebar'

function Searchpage() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* left sidebar */}
      <Leftsidebar/>

      <div className='homeRight'>
        <h1>This is Searchpage </h1>
      
      
      </div>
    </div>
  )
}

export default Searchpage