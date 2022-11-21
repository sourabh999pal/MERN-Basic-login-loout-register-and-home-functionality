import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';

import Home from './Component/Home';



import SignUp from './Component/SignUp';
import Header from './Component/Header';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import Pryvate from './Component/Pryvate';

const App = () => {
  const auth = localStorage.getItem('user');

  return (


    <BrowserRouter>
      <Header />
      <Routes >

        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/logout' element={<div>logout</div>} />
        </Route>

        <Route element={<Pryvate />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}



export default App