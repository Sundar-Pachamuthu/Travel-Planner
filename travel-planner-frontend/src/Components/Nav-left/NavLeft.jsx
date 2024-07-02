import React from 'react'
import { Link } from 'react-router-dom';
import './NavLeft.css'


const NavLeft = () => {
  return (
    <div>
      <div className="in">
        <pre>Login or signup to continue</pre>
      <Link to='/login' style={{textDecoration:"none"}} > <h5 className="login"> LOGIN </h5></Link>
      <Link to='/login' style={{textDecoration:"none"}} > <h5 className="login"> SIGNIN </h5></Link>
      </div>
    </div>
  )
}

export default NavLeft
