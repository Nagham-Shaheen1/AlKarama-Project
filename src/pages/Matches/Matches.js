import React, { useEffect } from 'react'
import './Matches.css'
import { Navbar } from '../../component'
import { CenterOfMatchingGame, Footer, MatchTable, SwiperMatches, TopOfAboutPage } from '../../Sections'


function Matches(props) {
  
  return (
    <div><div className='nav container-fluid flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0 ' ><Navbar /></div>
      <div className='container-fluid flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0  position-relative' >
        <div className='top-header-of-matches-page '>
          <p>المباريات</p>
        </div>
        <TopOfAboutPage />
        <div className='swiper-of-matches position-relative p-0 m-0 px-0 row col-12'>
          <div className='position-absolute col-12 p-0 m-0 px-0 '>
          <SwiperMatches  /> </div>

        </div>
      </div>
      <div>
          <CenterOfMatchingGame/>
      </div>
      <div><MatchTable  /></div>
      <div className='footer'><Footer /></div>

    </div>
  )
}

export default Matches