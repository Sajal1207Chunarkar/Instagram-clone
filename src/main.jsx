import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <div onContextMenu={(event)=>{event.preventDefault()

    }}> */}
    <App />
    {/* </div>  */}

  </React.StrictMode>,
)
