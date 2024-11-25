import React from 'react'
import './TopOfHistory.css'
function TopOfHistory() {
    return (
        <div className='top-of-history d-flex align-items-center
         justify-content-center'>
            <div className='left-part  col-6 row'>
                <div className='bg-circles'></div>
                <div className='image-musium'></div>
                <div className='square-image'></div>
            </div>
            <div className='right-part col-6 row'>
                <div className='headre-page row col-12'>
                    <div className='square-image'></div>
                    <p>متحف النادي</p>

                </div>
            </div>

        </div>
    )
}

export default TopOfHistory