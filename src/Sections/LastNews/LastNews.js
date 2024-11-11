import React from 'react';
import './LastNews.css';

function LastNews(props) {
    return (
        <div className='last-news-card container-fluid flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0'>
            <div className='header row col-12'>
                <p>آخر الأخبار</p>
            </div>
            <div className='row cf'>
                {props.data &&props.data[0] && (
                    <div className='col-4 images-and-text d-flex justify-content-center position-relative'>
                        <img src={props.data[0].image} alt='news image1' className='position-absolute' />
                        <div className='news-top-text1'>
                            <p className='news-top-header1'>{props.data[0].title}</p>
                        </div>
                    </div>
                )}
                {props.data &&props.data[1] && (
                    <div className='col-8 images-and-text d-flex justify-content-center position-relative'>
                        <img src={props.data[1].image} alt='news image2' className='position-absolute' />
                        <div className='news-top-text1'>
                            <p className='news-top-header1'>{props.data[1].title}</p>
                        </div>
                    </div>
                )}
            </div>
            {props.data&&props.data[2] && (
                <div className='row cf'>
                    <div className='col-8 images-and-text d-flex justify-content-center position-relative'>
                        <img src={props.data[2].image} alt='news image1' className='position-absolute' />
                        <div className='news-top-text1'>
                            <p className='news-top-header1'>{props.data[2].title}</p>
                        </div>
                    </div>
                    {props.data &&props.data[3] && (
                        <div className='col-4 images-and-text d-flex justify-content-center position-relative'>
                            <img src={props.data[3].image} alt='news image2' className='position-absolute' />
                            <div className='news-top-text1'>
                                <p className='news-top-header1'>{props.data[3].title}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default LastNews;