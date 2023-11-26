import React, { useState } from 'react'
import './input.scss'
const Input = () => {
    const [firstname, setFirstname]= useState('')
    const [lastname, setLastName] =useState('')
    const [age, setAge]= useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form ={firstname,lastname, age}
        console.log(form);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <div className="input">
                <label htmlFor="first-name">First name</label>
                <input type="text" name='first-name' value={firstname} onChange={e=>setFirstname(e.target.value)} />
            </div>
            <div className="input">
                <label htmlFor="last-name">Last name</label>
                <input name='last-name' type="text" value={lastname} onChange={e=> setLastName(e.target.value)} />
            </div>
            <div className="input">
                <label  htmlFor="age">Age</label>
                <input type="number" name='age' value={age} onChange={e=>setAge(e.target.value)}/>
            </div>
<div className="buttn">
<button type='submit'>Submit</button>

    </div>        
    </form>
    </div>
  )
}

export default Input