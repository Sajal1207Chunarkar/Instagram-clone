import React from 'react'
import OnePost from './OnePost'


function Allposts() {
  const allPosts = [
    {
        postImage: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: '_the_tech_nik',
        postTimestamp: '1h',
        postLocation: 'India',
        userAvatar: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1464160551369-33c49e545109?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGh1bWFucyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
        userHandleId: 'manthan_mandwe',
        postTimestamp: '10h',
        postLocation: 'Canada',
        userAvatar: 'https://images.unsplash.com/photo-1573016576115-86acce6323d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },

    {
        postImage: 'https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'tejaswini_bais_07',
        postTimestamp: '10h',
        postLocation: 'Mumbai',
        userAvatar: 'https://images.unsplash.com/photo-1663404068665-a45ff4c324dd?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1712337646541-d0c6f85447f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'sajal_chunarkar',
        postTimestamp: '1D',
        postLocation: 'Nagpur',
        userAvatar: 'https://plus.unsplash.com/premium_photo-1661580998017-8e6a23c1d60e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'vedant_shelki',
        postTimestamp: '1D',
        postLocation: 'Pune',
        userAvatar: 'https://images.unsplash.com/photo-1718879278576-7753855c69c9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'ayush5599',
        postTimestamp: '1D',
        postLocation: 'Nashik',
        userAvatar: 'https://images.unsplash.com/photo-1706496366816-f589fadff1cd?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'ashus_webdev',
        postTimestamp: '1D',
        postLocation: 'New York',
        userAvatar: 'https://images.unsplash.com/photo-1715622053361-4baf5ad2c51a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
    {
        postImage: 'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userHandleId: 'saurabh',
        postTimestamp: '1D',
        postLocation: 'New York',
        userAvatar: 'https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        likesCount: 0,
        postCaption: '',
        commentCount: 10
    },
]
  
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

export default Allposts