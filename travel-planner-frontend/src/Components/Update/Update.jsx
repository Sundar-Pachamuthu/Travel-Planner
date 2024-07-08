import {React , useEffect, useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Update = () => {

  const {id} = useParams();
  const [start,setStart] = useState();
  const [destination,setDestination] = useState();
  const [start_date,setSdate] = useState();
  const [end_date,setEdate] = useState();
  const [mode,setMode] = useState();
  const [notes,setNotes] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://travel-planner-4mrm.onrender.com/getTripId/'+id)
    .then(result => {console.log(result)
      setStart(result.data.start)
      setDestination(result.data.destination)
      setSdate(result.data.start_date)
      setEdate(result.data.end_date)
      setMode(result.data.mode)
      setNotes(result.data.notes)
    })
    .catch(err => console.log(err))
  }, [])

  // const updateTrip = async ()=>{
  //   console.log("Add Trip function exicuted", tripDetails);
  //   let responseData;
  //   await fetch('https://travel-planner-4mrm.onrender.com/updateTrip',{
  //     method:'PUT',
  //     headers:{
  //       Accept:'application/form-data',
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify(tripDetails),
  //   }).then((response)=> response.json())
  //   .then((data)=>responseData=data)
  //   if(responseData.success){
  //     alert("TRIP PLAN UPDATED");
  //     window.location.replace("/page1");
  //   }
  //   else{
  //     alert("FAILED" + responseData.errors )
  //   }

  // }

  const submit =(e) =>{
    e.preventDefault();
  }


  const updateTrip = async ()=> {
    console.log("update function called");
    axios.put("https://travel-planner-4mrm.onrender.com/updateTrip" + id, {start,destination,start_date,end_date,mode,notes})
    .then(result =>{
      console.log(result)
      navigate('/page1')
    })
    .catch(err => console.log(err))
  }

  // const [tripDetails,setTripDetails] = useState({
  //   // user_id:"",
  //   start:"",
  //   destination:"",
  //   start_date:"",
  //   end_date:"",
  //   mode:"bike",
  //   notes:"  ",
  // })

  // const submit =(e) =>{
  //   e.preventDefault();
  // }

  // const changehandler = (e) =>{
  //   setTripDetails({...tripDetails,[e.target.name]:e.target.value})
  // }



  return (
    <div className='create'>
        <form action="" onSubmit={submit} className='create-form'>
            <h1>update trip</h1>
            <div className="input-create">
              <h6>start</h6>
              <input type="text" placeholder='enter the start location' className='input' value={start} onChange={(e)=>{setStart(e.target.value)}} />
            </div>

            <div className="input-create">
              <h6>destination</h6>
              <input type="text" placeholder='enter the destination' className='input' value={destination} onChange={(e)=>{setDestination(e.target.value)}}  />
            </div>

            <div className="input-create">
              <h6>start date</h6>
              <input type="text" placeholder='enter the start date' className='input' value={start_date} onChange={(e)=>{setSdate(e.target.value)}} />
            </div>

            <div className="input-create">
              <h6>end date</h6>
              <input type="text" placeholder='enter the end date' className='input' value={end_date} onChange={(e)=>{setEdate(e.target.value)}}  />
            </div>

            <div className="input-create">
              <h6>mode of travel</h6>
              <select name="" id="" value={mode} onChange={setMode} >
                <option value="bike">bike</option>
                <option value="train">train</option>
                <option value="car">car</option>
                <option value="travelBus">travel bus</option>
                <option value="airplane">airplane</option>
              </select>
            </div>

            <div className="input-create">
              <h6>notes</h6>
              <input type="text" placeholder='notes about this trip' className='input' value={notes} onChange={(e)=>{setNotes(e.target.value)}} />
            </div>

            <button type='submit' className='addtripbtn' onClick={() => {updateTrip()}} > update trip</button>
            
        </form>
        
      
    </div>
  )
}

export default Update
