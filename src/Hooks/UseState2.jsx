import React, { useState } from 'react'

function UseState2() {

    const [name,setName]=useState({firstName:'',lastName:''})

  return (
    <div>
      <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})} />
      <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
      <br />
      <h3> FirstName :{name.firstName}</h3>
      <h3> LastName :{name.lastName}</h3>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default UseState2
