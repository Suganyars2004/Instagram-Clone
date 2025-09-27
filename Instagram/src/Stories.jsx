import React, { useEffect, useState } from 'react'

function Stories() {
  const [stories,setStories]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/story")
    .then((data)=>data.json())
    .then((data)=>setStories(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className='story d-flex '>
      {stories.length >0?(
        stories.map((story)=>(<div key={story.id} className='mx-1'>
          <div className='gradient-border'>
            <img src={story.user.profilePic} alt="dp" className='story-dp rounded-circle'/>
          </div>
          <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
        </div>))
      ):(
        <p>Loading</p>
      )}
    </div>
  )
}

export default Stories