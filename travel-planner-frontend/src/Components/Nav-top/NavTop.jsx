import React from 'react'
import './NavTop.css';
import { Link } from 'react-router-dom';
import logo from '../../Components/Assets/TRIP-UP.webp'

const NavTop = () => {

  const removeToken = ()=> {localStorage.removeItem('auth-token')};
  // removeToken();




  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
        <p>TRIP-UP</p>
        <div className="login-btn">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location .replace('/')}}>Logout</button>:
            <Link style={{textDecoration: 'none' }} to='/login'><button >Login</button></Link>}
        </div>

      {/* <div className="welcome">
        <p>
        A travel planner for everyone<br/>
        Build Your Own Customized Trip Plan
        </p>
      </div> */}
      </div>
      
    </div>
  )
}

export default NavTop
