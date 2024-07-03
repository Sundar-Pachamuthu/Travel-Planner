import React from 'react'

const Update = () => {
  return (
    <div className='update'>
        <form action="" className='create-form'>
            <h1>update trip</h1>
            <div className="input-create">
              <h6>start</h6>
              <input type="text" placeholder='enter the start location' className='input' />
            </div>

            <div className="input-create">
              <h6>destination</h6>
              <input type="text" placeholder='enter the destination' className='input' />
            </div>

            <div className="input-create">
              <h6>start date</h6>
              <input type="date" placeholder='enter the start date' className='input' />
            </div>

            <div className="input-create">
              <h6>end date</h6>
              <input type="date" placeholder='enter the end date' className='input' />
            </div>

            <div className="input-create">
              <h6>mode of travel</h6>
              <select name="" id="">
                <option value="bike">bike</option>
                <option value="train">train</option>
                <option value="car">car</option>
                <option value="travelBus">travel bus</option>
                <option value="airplane">airplane</option>
              </select>
            </div>

            <div className="input-create">
              <h6>notes</h6>
              <input type="text" placeholder='notes about this trip' className='input' />
            </div>

            <button type='submit'> add trip</button>
            
        </form>
        
      
    </div>
  )
}

export default Update
