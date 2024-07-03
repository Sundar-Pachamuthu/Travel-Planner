import React from 'react'
import { Link } from 'react-router-dom';
import './NavLeft.css'


const NavLeft = () => {
  return (
    <div>
      <div className="in">
      <Link to='/login' style={{textDecoration:"none"}} > <h5 className="login"> LOGIN </h5></Link>
        <h2>Login or signup to continue</h2>
      <Link to='/login' style={{textDecoration:"none"}} > <h5 className="signup"> SIGNIN </h5></Link>
      </div>
    </div>
  )
}

export default NavLeft
