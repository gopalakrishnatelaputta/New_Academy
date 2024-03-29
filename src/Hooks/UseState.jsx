import React, { useState } from 'react'

function UseState() {

    // const [count,setCount]=useState(0)
    const initialCount=0;
    const [count,setCount]=useState(initialCount);

    const incrementFive=()=>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount=>prevCount+1);
        }
    }



  return (
    <div>
      {/* <button onClick={()=>setCount(count+1)}> Click {count}</button> */}

        <button onClick={()=>setCount(initialCount)}> Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>incrementFive()}>IncrementFive</button>
        <br />
        <br />
        {count}
    </div>
  )
}

export default UseState
