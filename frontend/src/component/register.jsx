// import React, { useState } from 'react'
// import './register.css'
// import { application } from 'express';
// function register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('')
//   const [update, setUpdate] = useState('');
//   const tryRegister = async () =>{
//     if(password.length>= 8){
//       const data = await fetch('http://localhost:3001/register',{
//         method:'POST',
//         body: JSON.stringify({
//           username: username,
//           email: email,
//           password: password
//         }),
//         headers:{'content-type': 'application/json'}
//       })
//        console.log('---------->data', data);
//     const jsonData = await data.json();

//     console.log('---------->jsonData', jsonData);
//     setUpdate(jsonData.msg);
//     }else{
//       setUpdate('A Password must contain 8 characters')
//     }
//   }
//   return (
// <div className='register-container'>
//     <div className='register-form'>
//      <h1>Register</h1>
//      <div className='input-group'>
//       <label htmlFor='username'>Your UserName</label>
//       <input 
//       type='text'
//       id='username'
//       required
//       placeholder='Enter Your Username'
//       className='input-field'
//       onChange={(e)=>{
//         setUsername(e.target.value)
//       }}
//       value={username}
//       />

//      </div>
//       <div className='input-group'> 
//       <label htmlFor='email'>Email</label>
//       <input
//       type='email'
//       id='email'
//       required
//       placeholder='Enter your Email'
//       onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
//     </div>
//     <div className='input-group'>
//       <label htmlFor='password'>PassWord</label>
//       <input type='password'
//       id='password' required 
//       placeholder='Enter Your Password'className='input-field'
//       onChange={(e)=>{setPassword(e.target.value)}}value={password}/>
//     </div>
//     <button type='submit' className='register-button' onClick={tryRegister}>Register</button>
//     <p className='login-link'>
//       Already have an accounnt?<a href='/login'>Login</a>
//     </p>
//     {update && <p style={{color:'red'}}>{update}</p>}
//   </div>
// </div>


//   )
// }

// export default register