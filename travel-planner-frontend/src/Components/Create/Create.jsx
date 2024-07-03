import React, { useState } from 'react'

const Create = () => {

  // const [start,setStart] = useState;
  // const [destination,setDestination] = useState;
  // const [sdate,setSdate] = useState;
  // const [edate,setEdate] = useState;
  // const [mode,setMode] = useState;
  // const [notes,setNotes] = useState;


  const [tripDetails,setTripDetails] = useState({
    // user_id:"",
    start:"",
    destination:"",
    start_date:"",
    end_date:"",
    mode:"bike",
    notes:"  ",
  })

  const submit =(e) =>{
    e.preventDefault();
  }

  const changehandler = (e) =>{
    setTripDetails({...tripDetails,[e.target.name]:e.target.value})
  }


    const addTrip = async ()=>{
      console.log("Add Trip function exicuted", tripDetails);
      let responseData;
      await fetch('http://localhost:3030/createTrip',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(tripDetails),
      }).then((response)=> response.json())
      .then((data)=>responseData=data)
      if(responseData.success){
        alert("SUCCESS");
        window.location.replace("/page1");
      }
      else{
        alert("FAILED" + responseData.errors )
      }
  
    }
  
  return (
    <div className='create'>
      <form onSubmit={submit} className='create-form'>
            <h1>add trip</h1>
            <div className="input-create">
              <h6>start</h6>
              <input type="text" placeholder='enter the start location' name='start' className='input' onChange={changehandler} required />
            </div>

            <div className="input-create">
              <h6>destination</h6>
              <input type="text" placeholder='enter the destination' name='destination' className='input'onChange={changehandler} required />
            </div>

            <div className="input-create">
              <h6>start date</h6>
              <input type="date" placeholder='enter the start date' name='start_date' className='input' onChange={changehandler}  required />
            </div>

            <div className="input-create">
              <h6>end date</h6>
              <input type="date" placeholder='enter the end date' name='end_date' className='input' onChange={changehandler}  required />
            </div>

            <div className="input-create">
              <h6>mode of travel</h6>
              <select name="mode" id=""  onChange={changehandler} >
                <option value="bike">bike</option>
                <option value="train">train</option>
                <option value="car">car</option>
                <option value="travelBus">travel bus</option>
                <option value="airplane">airplane</option>
              </select>
            </div>

            <div className="input-create" >
              <h6>notes</h6>
              <input type="text" placeholder='notes about this trip' name='notes' className='input' onChange={changehandler}  />
            </div>

            <button type='submit' onClick={() => {addTrip()}} > add trip</button>
            
        </form>
      </div>
  )
}
export default Create
