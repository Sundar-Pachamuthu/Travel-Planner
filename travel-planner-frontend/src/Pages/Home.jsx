import React from 'react'
import NavLeft from '../Components/Nav-left/NavLeft'
import Filler1 from '../Components/Filler1/Filler1'

const Home = () => {
  return (
    <div style={{display:"flex", alignItems:"center" , justifyContent:"center" , flexDirection:"column"}} >
      <Filler1/>
      <NavLeft/>

    </div>
  )
}

export default Home
