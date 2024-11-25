import React, { useEffect } from 'react';
import './SwiperMatches.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.min.css';
import 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Cookies from 'js-cookies'
import MatchesTopMatchesPage from '../../component/MatchesTopMatchesPage/MatchesTopMatchesPage';
import usePost from '../../custom Hooks/usePost';
import { config } from '../../Constant/environment';
function SwiperMatches() {
    const [data,postFunc]=usePost(config.matchNotStarted,
        {
        sport:Cookies.getItem('sport')})
        useEffect(()=>{
            postFunc()
            console.log(data)
        },[])
    return (
        <div> <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={5.75}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        {data&&data.football.map(
            function (item,index){
                return (
                    <SwiperSlide key={index}>
                    <div className='card-of-matches-page'>
                    <MatchesTopMatchesPage team1={item.team1} result={item.result} team2={item.team2} date={item.date}/>
                </div>
                </SwiperSlide>
                );
            }
            
        )}
        </Swiper></div>
    )
}

export default SwiperMatches