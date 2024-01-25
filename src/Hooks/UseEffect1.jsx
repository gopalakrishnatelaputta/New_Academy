import React, { useEffect, useState } from 'react'

function UseEffect1() {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`You Clicked ${count} times`
    })

    

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffect1
