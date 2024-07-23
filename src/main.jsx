import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Searchpage from './Pages/Searchpage.jsx'
import Authentication from './Pages/Authentication.jsx'
import Explore from './Pages/Explore.jsx'
import Reelspage from './Pages/Reelspage.jsx'
import Messagespage from './Pages/Messagespage.jsx'
import Profilepage from './Pages/Profilepage.jsx'
import Notificationpage from './Pages/Notificationpage.jsx'
import Createpage from './Pages/Createpage.jsx'
import Threadspage from './Pages/Threadspage.jsx'
import ErrorsPage from './Pages/ErrorsPage.jsx'
import FriendsProfile from './Pages/FriendsProfile.jsx'

//Create steps
const routes=createBrowserRouter([
  {path:'/',element:<HomePage/>},
  {path:'/home',element:<HomePage/>},
  {path:'/search',element:<Searchpage/>},
  {path:'/login',element:<Authentication/> },
  {path:'/explore',element:<Explore/> },
  {path:'/reels',element:<Reelspage/> },
  {path:'/messages',element:<Messagespage/> },
  {path:'/profile',element:<Profilepage/> },
  {path:'/notifications',element:<Notificationpage/> },
  {path:'/create',element:<Createpage/> },
  {path:'/threads',element:<Threadspage/> } ,
  {path:'/friend/:userId',element:<FriendsProfile/>},
  {path:'*',element:<ErrorsPage/> } ,



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <div onContextMenu={(event)=>{event.preventDefault() }}>  
        <RouterProvider router={routes}>
    <App />
    </RouterProvider>
      </div>   

  </React.StrictMode>,
)
