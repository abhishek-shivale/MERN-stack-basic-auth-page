import React, { useState } from 'react';
import './login.css';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [update, setUpdate] = useState('');

  const tryLogin = async () => {
    if(password.length >= 8){
      const data = await fetch(`http://localhost:3001/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { 'Content-type': 'application/json' },
    });
    console.log('---------->data', data);
    const jsonData = await data.json();

    console.log('---------->jsonData', jsonData);
    setUpdate(jsonData.msg);
    }else{
      setUpdate('A Password must contain 8 characters')
    }
    // .then(async function (res) {
    //     const json = await res.json();
    //     console.log(json);
    //     setUpdate(json);
    //   });
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h1>Login</h1>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
            placeholder='Enter Your E-mail'
            className='input-field'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            placeholder='Enter Your Password'
            className='input-field'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <button type='submit' className='login-button' onClick={tryLogin}>
          Login
        </button>
        <p className='register-link'>
          Don't have an account? <a href='/register'>Register</a>
        </p>
        {update && <p style={{ color: 'red' }}>{update}</p>}
      </div>
    </div>
  );
}

export default login;