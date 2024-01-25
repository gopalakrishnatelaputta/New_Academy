import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DatafectingCompo() {

    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idFromButtonClick,setIdFromButtonClick]=useState(1)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    } ,[idFromButtonClick])


    const buttonClickHandler=()=>
    {
        setIdFromButtonClick(id)
    }
 
  return (
   <div>
        <input type="text" value={id} onChange={e=>setId( e.target.value)}/>
        <button type='button' onClick={buttonClickHandler}> FetchPost</button>
        <h3>{post.title}</h3>
   </div>

  )
}

export default DatafectingCompo
