import {useEffcet} from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import Authentication from './Pages/Authentication'

function App() {
  const user=true
  

  return (
    
      <div>
        {
          user?<HomePage/>:<Authentication/>
        }
        
      </div>
      
    
  )
}

export default App
