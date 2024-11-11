import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './BossOfTeam.css';
import Line from '../../component/Line/Line';
import Header from '../../component/Header/Header';

function BossOfTeam() {
    return (
        <div>
            <div className='bos-field'>
<Header name=' رئيس النادي'/> 
            <span className='line1'> <Line /></span> 
                <div className='content'>
                    <div className='text1'>
                        <p className='name'>الأستاذ عهد خزام</p>
                        <p className='inner-name'> رئيس نادي الكرامة</p>
                    </div>
                    <div></div>
                    <div className='pic4'>
                    <div className='square'></div>
                    <div className='pic3'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BossOfTeam