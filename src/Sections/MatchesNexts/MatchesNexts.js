import React, { useEffect } from 'react'
import './MatchesNexts.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.min.css';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import  Cookies from 'js-cookies'
import MatchingDetails from '../../component/MatchingDetails/MatchingDetails';
import usePost from '../../custom Hooks/usePost';
import { config } from '../../Constant/environment';
function MatchesNexts() {
    const [data,postFunc]=usePost(config.nextMatches,
        {
        sport:Cookies.getItem('sport')})
        useEffect(()=>{
            postFunc()
            console.log(data)
        },[])
     
    return (

        <div className='card-matrches-next '>
            <div className=' textting row col-12'>
                <p> المباريات القادمة</p>

            </div>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3.5}
                    dir='rtl'
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data&&data.football.map(function (item, index) {
                        return (<SwiperSlide key={index}>
                            <MatchingDetails data={item} />
                        </SwiperSlide>)

                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default MatchesNexts