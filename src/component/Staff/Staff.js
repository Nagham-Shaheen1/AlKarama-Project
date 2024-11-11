import React from 'react'
import './Staff.css'
function Staff(props) {
  return (
    <div className='card-staff'>
    <div className='square-staff'></div>
    <div className='square1-staff'></div>

    <img src={props.img} alt='player1' className='img3'/>
    </div>
  )
}

export default Staff