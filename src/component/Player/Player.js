import React from 'react'
import './player.css'
function Player(props) {
    return (
        <div className='carding'>
            <div className='player-image'> <img src={props.img} alt='playerimage '/>
            <div className='skills'>
                <div className='position'><p>المركز </p><p>{props.position}</p></div>
                <div className='number'><p>الرقم </p><p>{props.number}</p></div>
                <div className='cm'><p>{props.cm.toString().slice(0,3)} </p> <p> CM</p></div>
                <div className='age'><p>{props.age}</p><p>عام </p> </div>
            </div>
            <div className='name-player'> {props.name}</div>
        </div></div>
    )
}

export default Player