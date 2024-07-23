import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allPosts } from '../Constants/allposts'

function FriendsProfile() {
    const {userId}=useParams()
    const [userIndex,setuserIndex]=userIndex(null)
    useEffect(()=>{
        allPosts.map((post,i)=>{
            post.userhandleid === userId && setuserIndex(i)
        })
    },{userId})
    
    
  return (
    <div>
        <h1>userhandleid</h1>
        <img src='' alt=''/>
        <h3>India</h3>
    </div>
  )
}

export default FriendsProfile