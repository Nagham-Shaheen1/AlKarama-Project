import React from 'react'
import './Championship.css'
const Championship = (props) => {
    return (
        <div className='row col-12'>
            <div className='texting row col-8'>
            <p>{props.champ}</p>
           <div>{props.text}</div> </div>
            <div className='champion-image row col-4'>
                <img src={props.image} alt='pic-for-chapionship' />
            </div>

        </div>
    )
}

export default Championship