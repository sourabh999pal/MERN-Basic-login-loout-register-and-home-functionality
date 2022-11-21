import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div className='head'>
      <ul className='headder'>
        {auth ? <> <li><Link to='/' >Home </Link></li>
          <li><Link onClick={logout} to='/login' >Logout  </Link></li> </> :
          <>  <li><Link to='/login' >Login </Link></li>
            <li><Link to='/signup' >signup page </Link></li> </>
        }
      </ul>
    </div>
  )
}

export default Header