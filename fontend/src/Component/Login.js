import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const collectData = async () => {
    console.log(email, password);
    let result = await fetch('http://localhost:5000/Login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-type': 'application/json'
      },
    })
    result = await result.json()
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    setEmail('');
    setPassword('');
    if (result) {
      navigate('/')
    }

  }

  return (
    <div className='registerpage'>


      <input value={email} onChange={(e) => setEmail(e.target.value)} className='signupinput' type='text' placeholder='enter Your email' /><br /><br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} className='signupinput' type='password' placeholder='enter Your password' /><br /><br />
      <button onClick={collectData} className='appbutton' type='button'>Login</button>
      <div>
        New user ? <Link to='/signup' >register here</Link>
      </div>
    </div>
  )
}

export default Login