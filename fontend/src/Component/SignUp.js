import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let [data, setData] = useState(false);

  const navigate = useNavigate();

  const collectData = async () => {
    console.log(name, email, password, last_name);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password, last_name }),
      headers: {
        'content-type': 'application/json'
      },
    })
    result = await result.json();
    alert("you register succesfully");

    setName('');
    setLast_name('');
    setEmail('');
    setPassword('');
    if (result) {
      navigate('/login')
    }
  }

  return (
    <div className='registerpage'>
      <input value={name} onChange={(e) => setName(e.target.value)} className='signupinput' type='text' placeholder='enter Your name' /> <br /><br />
      <input value={last_name} onChange={(e) => setLast_name(e.target.value)} className='signupinput' type='text' placeholder='enter Your last name' /> <br /><br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} className='signupinput' type='text' placeholder='enter Your email' /><br /><br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} className='signupinput' type='password' placeholder='enter Your password' /><br /><br />
      <button onClick={collectData} className='appbutton' type='button'>Signup</button>
      {data && <div>register succesfull </div>}
    </div>
  )
}

export default SignUp