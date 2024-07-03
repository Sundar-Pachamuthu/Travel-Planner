import React, { useEffect, useState } from 'react'
import { Await, Link } from 'react-router-dom';


const AddTrip = () => {


  // const [trip, setTrip] = useState([{
  //   user_id:"",
  //   start:"coimbatore",
  //   destination:"kasol",
  //   start_date:"02/04/2024",
  //   end_date:"08/04/2024",
  //   mode_of_travel:"bike",
  //   notes:" lorem20 dhcbhwd iyguywvcd ",
  // }])

  const [allTripPlans, setAllTripPlans] = useState([]);

  const fetchTripPlans = async () => {
    await fetch('http://localhost:3030/allTripPlans')  
    .then((res)=>res.json())
    .then((data=>{setAllTripPlans(data)}));
  }

  useEffect(()=>{
    fetchTripPlans();
  },[])

  const deleteTripPlan = async(id) =>{
    await fetch('http://localhost:3030/deleteTripPlan',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchTripPlans();
  }

  



  return (
    <div  className='addtrip'>
      <div className="displaytrip">
        <Link to='/create' > Add Trip+</Link>
        <table>
          <thread>
            <tr>
              <th>START</th>
              <th>DESTINATION</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>MODE OF TRAVEL</th>
              <th>NOTES</th>
              <th>ACTION</th>
            </tr>
            </thread>
            <tbody>
              {allTripPlans.map((trip,i)=>{
                return <tr key={i}>
                  <td> $ {trip.start} </td>
                  <td> {trip.destination} </td>
                  <td> {trip.start_date} </td>
                  <td> {trip.end_date} </td>
                  <td> {trip.mode} </td>
                  <td> {trip.notes} </td>
                  <td> <p> <Link to='/update' > update </Link> </p>
                  <p onClick={()=>{deleteTripPlan(trip.id)}} >delete</p> </td>

                  </tr>
              })}
            </tbody>

        </table>
      </div>
       
      
    </div>
  )
}

export default AddTrip