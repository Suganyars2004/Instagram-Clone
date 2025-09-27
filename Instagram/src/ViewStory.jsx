import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function ViewStory() {
    const {id} =useParams();
    const [story,setStory]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/story")
    })
  return (
    <div></div>
  )
}

export default ViewStory