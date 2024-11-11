import React from 'react'
import './AboutTeam.css'
import { Link } from 'react-router-dom'
import MyLinkComponent from './MyLinkComponent'
function AboutTeam(props) {
    return (
         <div className='parent row col-12'>
            <div><p className='head'>{props.header}</p> </div>
            <div className='rw row col-12'>
                <div className='pic row col-6' style={{padding:'40px'}}>
                    <img src={props.image} className='img1' alt='pic for team' />
                    <img src={props.image1} className='img2' alt='' />
</div>
                    
                <div className='text row col-6'>
                    <div className='innerhead'>
                        <p>{props.innerhead} </p>
                    </div>
                    <div className='innertext'>
                    <p style={{fontSize: props.textSize || '20px'}}>{props.text}</p>
                    </div>
                    {props.showLink && (
                        <div className='formore'>
                            <MyLinkComponent to={props.linkTo} />
                        </div>
                    )}
                    </div>
                </div>
            </div>


    )
}

export default AboutTeam