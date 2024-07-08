import React, { useState } from 'react'
import './CSS/Login.css'
import mm from '../Components/Assets/mountain.jpg'
const Login = () => {

  const [statee,setState] = useState("Login");
  const[formData,setFormData] = useState({
    name:"",
    password:"",
    email:""
  })

  const onChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const signup = async ()=>{
    console.log("signup function exicuted", formData);
      let responseData;
      await fetch('https://travel-planner-4mrm.onrender.com/signup',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((response)=> response.json())
      .then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/page1");
      }
      else{
        alert(responseData.errors )
      }

  }

  const login = async ()=>{
    console.log("login function exicuted", formData);
    let responseData;
    await fetch('https://travel-planner-4mrm.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json())
    .then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/page1");
    }
    else{
      alert(responseData.errors )
    }

  }
  



  return (
    <div className='loginForm'>
      <form action="" className="formTU">
        <h1>{statee}</h1>
        {statee=== "Sign Up"? <input name='name' value={formData.name} onChange={onChange} type='text' placeholder='YOUR NAME' /> : <></>  }
        <input type="email" name='email' value={formData.email} onChange={onChange} placeholder='YOUR EMAIL' />
        <input type="password" name='password' value={formData.password} onChange={onChange} placeholder='YOUR PASSWORD' />
        <button type='button' onClick={() => {statee === "Sign Up"? signup() : login() }}  > {statee} </button>
        {statee === "Sign Up"?<p className="loginsignup-login">
        Already have an account? <span onClick={()=>{setState("Login")}} > Login here </span>
        </p> :<p className="loginsignup-login">
        Create an account? <span onClick={()=>{setState("Sign Up")}} > Click here </span></p>}

      </form> 
    </div>
  )
}

export default Login
