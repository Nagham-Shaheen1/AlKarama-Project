import React from 'react'
import './Fans.css'
import Header from '../../component/Header/Header'
function Fans() {
    return (
        <div className='fan-card'>

            <div className='fan-header '>
                <Header name='رابطة مشجعي النادي' />
            </div>
            <div className='fan-contain'>
                
                <div className='fan-bg'></div>
                <div className='fan-pic'>

                </div>
            </div>

        </div>
    )
}

export default Fans