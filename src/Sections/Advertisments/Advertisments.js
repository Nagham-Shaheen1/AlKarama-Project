import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../../../node_modules/swiper/swiper.min.css';
import 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Advertisments.css';
import { config } from '../../Constant/environment';

const Advertisements = () => {
    const [advertisements, setAdvertisements] = useState([]);
    const [showAd, setShowAd] = useState(true);

    useEffect(() => {
        axios
            .get(`${config.baseUrl}/${config.sliders}`)
            .then((res) => {
                setAdvertisements(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleCloseAd = () => {
        setShowAd(false);
        setTimeout(() => {
            setShowAd(true);
        }, 60000); // 60 seconds (1 minute)
    };

    const handleAdClick = (advertisement) => {
        // Perform the navigation to the advertiser's page using advertisement.content
        window.location.href = advertisement.content;
    };

    return (
        <div className={`advertisements ${showAd ? '' : 'hidden'}`}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 3000 }}
            >
                {advertisements.map((advertisement) => (
                    <SwiperSlide key={advertisement.id}>
                        <div className="advertisement-item" onClick={() => handleAdClick(advertisement)}>
                            <h4>{advertisement.title}</h4>
                            <p>{advertisement.content}</p>
                            <p>{advertisement.type}</p>
                            <img src={advertisement.image} alt="Advertisement" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="close-button" style={{display:advertisements.length>0?'block':'none'}} onClick={handleCloseAd}>
                X
            </button>
        </div>
    );
};

export default Advertisements;