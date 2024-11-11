import React from 'react'
import './ImagesHistory.css'
const ImagesHistory = ({news}) => {
  return (
    <div className=' container-fluid row col-12'>
        <div className='image row col-6'>
        <div><img src={news&&news[0].image} alt='asdf'
        /></div>
        </div>
        <div className='image row col-6 d-flex flex-column justify-content-between gap-3'>
        <div><img src={news&&news[1].image} alt='sad'/></div>
        <div><img src={news&&news[2]&&news[2].image} alt='asd'/></div>
        </div>
    </div>
  )
}

export default ImagesHistory