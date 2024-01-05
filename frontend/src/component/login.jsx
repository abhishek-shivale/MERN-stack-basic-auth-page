import React, { useState } from 'react'
import './login.css'
function login() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [update, setUpdate] = useState('')
async function tryLogin(){
  await fetch(`http://localhost:3001/login`,{
          method: "POST",
          body: JSON.stringify({
              email: email,
              password: password
          }), headers: {"Content-type":"application/json"}
      })
  .then(async function(res){
          const json = await res.json();
          setUpdate(json)
   })
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
        <button type="submit" className='login-button' onClick={tryLogin}>Login</button>
        <p className='register-link'>Don't have an account? <a href="/register">Register</a></p>
        <p>{update}</p>
    </form>
</div>


  )
}

export default login