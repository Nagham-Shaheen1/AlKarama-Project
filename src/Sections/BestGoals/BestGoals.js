import React, { useEffect, useState } from 'react'
import './BestGoals.css'
import VideosFan from '../VideosFan/VideosFan'
import { Video } from '../../component'
function BestGoals( {data} ) {
  const [video, setVideo] = useState([])
  const videos = data && data.map(
    (item) => (
      item.videos && item.videos.map((i) => (
        <div key={i.uuid}>
          <VideosFan img={require('../../assets/images/top_home_page.jpg')} url={i.url} watches='2ألف مشاهدة' header={i.description} time='قبل 5 أشهر' />
        </div>
      ))
    )
  )
  useEffect(() => {
    if (data && data.length > 0) {
      const videos = data&&data.reduce((prev, item) => {
        if (item.videos) {
          return [...prev, ...item.videos];
        }
        return prev;
      }, []);
      setVideo(videos);
    }
  }, [data]);
  return (
    <div className='container-fluid p-0 px-0 m-0'>
      <div className='row col-12'>
        <div className='headding-best-videos'>
          <p>اجمل الأهداف{data&&data.videos && data.videos}</p>
        </div></div>
      <div className='row col-12'>

        <div className=' row col-6'>
          <Video url={video[0] && video[0].url} width={'100%'} height={'100%'} />
        </div>
        <div className=' sub-videos row col-6'>
          {videos}
        </div>

      </div>
    </div>
  )
}

export default BestGoals