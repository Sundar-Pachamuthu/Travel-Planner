import React from 'react'
import './NavTop.css';
import { Link } from 'react-router-dom';
import logo from '../../Components/Assets/TRIP-UP.webp'

const NavTop = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
        <p>TRIP-UP</p>
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
