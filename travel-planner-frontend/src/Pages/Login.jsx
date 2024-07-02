import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {

  const [state,setState] = useState("Sign Up");
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
      await fetch('http://localhost:3030/signup',{
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
        window.location.replace("/");
      }
      else{
        alert(responseData.errors )
      }

  }
  



  return (
    <div className='loginForm'>
      <form action="" className="formTU">
        <h1>{state}</h1>
        {state=== "Sign Up"? <input name='name' value={formData.name} onChange={onChange} type='text' placeholder='YOUR NAME' /> : <></>  }
        <input type="email" name='email' value={formData.email} onChange={onChange} placeholder='YOUR EMAIL' />
        <input type="password" name='password' value={formData.password} onChange={onChange} placeholder='YOUR PASSWORD' />
        <button type='button' onClick={() => {state === "Sign Up"? signup() : signup() }}  > {state} </button>
        {state === "Sign Up"?<p className="loginsignup-login">
        Already have an account? <span onClick={()=>{setState("Login")}} > Login here </span>
        </p> :<p className="loginsignup-login">
        Create an account? <span onClick={()=>{setState("Sign Up")}} > Click here </span></p>}

      </form>
      {formData.name}
      {formData.email}
      {formData.password}




    </div>
  )
}

export default Login
