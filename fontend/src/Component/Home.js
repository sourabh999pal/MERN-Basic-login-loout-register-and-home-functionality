import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
import { useState, useEffect } from 'react';

const Home = () => {


  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <h1 > welcome back :  {items.name}</h1>
      <h4>here some details belongs to you </h4>
      <h3>Your full name is : {items.name}</h3>
      <h3>Your last Name is : {items.last_name} </h3>
      <h3>Your Gmail Id is : {items.email} </h3>


      <h2>here is login is missing because you are already login if you visit to login page <br /> than logout and you redirect on login/register page</h2>
    </>
  )
}

export default Home