import React from 'react'
import './MatchesTopMatchesPage.css'
function MatchesTopMatchesPage(props) {
    return (
        <div className='card-matches container px-0 p-0 m-0 row col-12'>
            <div className='match-date-time text-center'><p>{props.date}</p></div>
            <div className='teams-images d-flex gap-3'>
                <div className='d-flex flex-column align-items-center justify-content-center  p-0 m-0 '>
                    <img src={props.team1.logo} alt='team1' />
                    <div className='team-name11'>
                        <p>{props.team1.name}</p>
                    </div>
                    <div className='team-result11'>
                        <p>{props.result.first_team}</p>
                    </div>

                </div>
                <div className='d-flex flex-column align-items-center justify-content-center  p-0 m-0 '>
                    <img src={props.team2.logo} alt='team2' />
                    <div className='team-name11'>
                        <p>{props.team2.name}</p>
                    </div>
                    <div className='team-result11'>
                        <p>{props.result.second_team}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MatchesTopMatchesPage