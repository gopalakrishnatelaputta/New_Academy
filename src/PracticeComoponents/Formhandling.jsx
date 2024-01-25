import React from 'react'
import { useState } from 'react'

export default function Formhandling() {

    const[formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

     const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
     }

     const  handleSubmit=(event)=>
     {
        event.preventDefault();
        console.log('successfully Submitted',formData)
     }
   
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" >FirstName :</label>
            <input type="text" name='firstName' value={formData.firstName} onChange={handleInputChange} />
            <br />
            <label htmlFor="">LastName :</label>
            <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleInputChange} />
            <br />
            <button type='submit'>Submit</button>
        </form>
 

    </div>
  )
}
