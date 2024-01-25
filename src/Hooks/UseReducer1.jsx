import React, { useReducer } from 'react'
import { act } from 'react-dom/test-utils'


const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment' :
            return {...state,firstCounter: state.firstCounter+action.value}
        case 'decrement' :
            return {...state,firstCounter: state.firstCounter-action.value}
            
        case 'reset' :
            return initialState

        case 'increment2' :
                return {...state,secondCounter: state.secondCounter+action.value}
        case 'decrement2' :
                return {...state,secondCounter: state.secondCounter-action.value}    
        default :
        return state    
            }
}



function UseReducer1() {
   const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <div>{count.firstCounter}</div>
        <br>
        </br>
        <div>{count.secondCounter}</div>
      <button type='button' onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button type='button' onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
      <button type='button' onClick={()=>dispatch({type:'increment',value:5})}>Increment2</button>
      <button type='button' onClick={()=>dispatch({type:'decrement',value:5})}>Decrement2</button>
      <button type='button' onClick={()=>dispatch({type:'increment2',value:5})}>Increment5</button>
      <button type='button' onClick={()=>dispatch({type:'decrement2',value:5})}>Decrement5</button>
      <button type='button' onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducer1
