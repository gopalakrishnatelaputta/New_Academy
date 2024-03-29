import React, { useEffect, useState } from 'react'

function UseEffect2() {

    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Use Effect Called...')
        window.addEventListener('mousemove',logMousePosition)
    },[])

  return (
    <div>
      Hooks X - {x} Hooks Y - {y}
    </div>
  )
}

export default UseEffect2

