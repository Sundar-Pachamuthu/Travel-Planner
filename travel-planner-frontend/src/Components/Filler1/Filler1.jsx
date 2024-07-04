import React from 'react';
import './Filler1.css'
import mw from '../Assets/waterFall.jpg'

const Filler1 = () => {
  return (
    <div className='filler1'>
      <div className="f11">
        <img src={mw} alt="" />
        <h1>Welcome to <br /> <span>Trip-Up </span> </h1>
        <h2> Your Ultimate Travel Companion</h2>
      </div>
      <div className="intro">
        <h2>introduction</h2>
        <p>Welcome to Trip Up, where your adventures begin! Whether you're planning a weekend getaway or a month-long expedition, we're here to help you explore the world with ease and confidence. Discover hidden gems, top destinations, and travel tips from experts and fellow travelers.</p>
      </div>
      <div className="about">
        <h2>About Us</h2>
        <p> Founded by a group of passionate travelers, Trip Up was created to make travel planning easier and more enjoyable. We believe that travel enriches lives and broadens horizons, and we are committed to providing the best resources and tools for travelers of all kinds.</p>
        <h2>Our Mission:</h2>
        <p>To inspire and empower travelers to explore the world with confidence and curiosity.</p>
      </div>
   </div>
  )
}

export default Filler1
