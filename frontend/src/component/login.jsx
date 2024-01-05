import React, { useState } from 'react'
import './login.css'
function login() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [update, setUpdate] = useState('')
async function btnHandler() {
  console.log(email,password)
  try {
    const response = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })

    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const json = await response.json();
    console.log(json);
    setUpdate(json);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

  return (
    <div className='login-container'>
    <form className='login-form'>
        <h1>Login</h1>
        <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder='Enter Your E-mail' 
            className='input-field' onChange={(e)=>{setEmail(e.target.value)}} 
            value={email}/>
        </div>
        <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required 
            placeholder='Enter Your Password' className='input-field' 
            onChange={(e)=>{setPassword(e.target.value)}} 
            value={password}
            />
        </div>
        <button type="submit" className='login-button'onClick={()=>{btnHandler}}>Login</button>
        <p className='register-link'>Don't have an account? <a href="/register">Register</a></p>
        <p>{update}</p>
    </form>
</div>


  )
}

export default login