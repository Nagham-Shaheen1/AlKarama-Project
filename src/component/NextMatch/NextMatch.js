import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NextMatch.css'
function NextMatch({data}) {
 

    return ((data &&
<div className='card-for-next-match d-flex flex-column justify-content-between align-items-center'>
    {data.data}
    <div className='header-next-match p-0 m-0 px-0'> المبارات القادمة</div>
    <div className='d-flex all-teams align-items-center justify-content-around p-0 px-0 '>
        <div className='first-team d-flex flex-column justify-content-center align-items-center'>
            <img src={require('../../assets/images/team-logo.png')} alt='border-team' />
            <img src={data.team1.logo} className='img-for-teams' alt='image1-team' />
            <p className='team-name'>{data.team1.name}</p>
        </div>
        <div className='center-card d-flex flex-column justify-content-center align-items-center'>
            <p className='vs'>VS</p> <p className='timming-next-match'>{data.time}</p>
        </div>
        <div className='second-team d-flex flex-column justify-content-center align-items-center'>
            <img src={require('../../assets/images/team-logo.png')} alt='border-team' />
            <img src={data.team2.logo} className='img-for-teams' alt='image1-team' />
            <p className='team-name'>{data.team2.name}</p>
        </div>
    </div>
</div>)
    )
}

export default NextMatch