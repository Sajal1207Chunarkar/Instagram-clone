import React from 'react'
import OnePost from './OnePost'
import { allPosts } from '../../Constants/allposts'


function Allposts() {
  
  
  return (
    <div>
      {
        allPosts.map((post,i)=>(
          <OnePost
          key={i}
          postImage={post.postImage}
          userHandleId={post.userHandleId}
          postTimestamp={post.postTimestamp}
          postLocation={post.postLocation}
          userAvatar={post.userAvatar}
          likesCount={post.likesCount}
          postCaption={post.postCaption}
          commentCount={post.commentCount}/>
        ))
      }
    </div>
  )
}

export default Allposts;