import React from 'react';
import './MatchingDetails.css'

function MatchingDetails(props) {
    return (
        <div className='card-matching d-flex flex-column align-items-center justify-content-center'>

            <div><p className='match-date'>{props.data.date}</p></div>
            <div><p className='match-time'>{props.data.time}</p></div>
            <div className=' items-for-two-teams d-flex justify-content-center align-items-center gap-4 '>
                <div className='team-details d-flex flex-column align-items-center justify-content-center'>
                    <div><img className='imaging'  src={props.data.team1.logo} alt='team1-pic'/></div>
                    <div><p className='team1-name'>{props.data.team1.name}</p></div>
                    <div><p className='status'></p></div>
                </div>

                <div className='d-flex flex-column justify-content-around align-items-center'>
                    <div><p className='stage p-0 m-0'>{props.data.play_ground}</p></div>
                    <div><p className='the-result'>{props.data.result}</p></div>

                </div>
                <div className='team-details d-flex flex-column align-items-center justify-content-center'>
                <div><img className='imaging' src={props.data.team2.logo} alt='team2-pic'/></div>
                    <div><p className='team1-name'>{props.data.team2.name}</p></div>
                    <div><p className='status'></p></div>

                </div>

            </div>
        </div>
    )
}

export default MatchingDetails