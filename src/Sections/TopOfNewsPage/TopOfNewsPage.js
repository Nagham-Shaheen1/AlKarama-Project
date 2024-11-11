import React from 'react'

import './TopOfNewsPage.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.min.css';
import 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function TopOfNewsPage(props) {
    const header=props.valid;
    return (
        <div className='swiper-card'>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 3000 }}
            >
                {props.a&& props.a.map((item, index) =>{
                    if(index<=5){
                        return (<SwiperSlide key={index+1}>
                        <div className='images' >
                            <img src={item.image} alt='dfsadfsaf' />
                            <div className='news-top-text' style={{display:header?'block':'none'}}>
                                <p className='news-top-header'>{item.title}</p>
                                <p className='news-top-text-inner'> {item.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>)}
                })
                }
            </Swiper>
        </div>
    )
}

export default TopOfNewsPage