import React from 'react';
import './DownOfNewsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DownOfNewsPage(props) {
    const news =  props.array&&props.array.map(
        function (item, index) {
            if (index >= 5) {
                return (<div className='row archive-news d-flex justify-content-center mt-1 ' key={index}>
                    <div className='archive-first-new2 col-12 img-fluid justify-content-end gap-3'>
                        <div className='d-flex flex-column-reverse align-items-end'>
                            <p className='new2-time p-0 m-0'> {((+props.array[index].time.getFullYear()))} {((+props.array[index].time.getUTCMonth() + 1))} {((+props.array[5].time.getDay()))}</p>

                            <p className='new2-header p-0   m-0'> عنوان الخبر {index + 1}</p>

                        </div>
                        <img src={props.array[index].src} alt='news-5-image5' />
                    </div>
                </div>)
            }
            
        })
    return (
        <div className='card-of-down-news-page container-fluid mt-4'>
            <div className='row'>
                <div className='col-8 '>
                    <div className='row space-right2 m-3  flex-row justify-content-center '>
                        <div className='new-pic1 col-6 img-fluid'> <img src={props.array &&props.array[0]&&props.array[0].image} alt='first image1 for news' /></div>
                        <div className='new-pic2 col-6 img-fluid'><img src={props.array&&props.array[1]&&props.array[1].image} alt='first image2 for news' /></div>

                    </div>
                    <div className='row space-right2 m-3 flex-row justify-content-center'>
                        {props.array&&props.array[2] && <div className='new-pic1 col-6 img-fluid'><img src={props.array[2].image} alt='first image1 for news' /></div>
                        }
                        {props.array&&props.array[3] && <div className='new-pic2 col-6 img-fluid'><img src={props.array[3].image} alt='first image1 for news' /></div>
                        }                    </div>
                    <div className='row space-right2 m-3 flex-row justify-content-center '>
                        {props.array&&props.array[4] && <div className='new-pic3 p-0 m-0 mx-0 col-12'><img src={props.array[4].image} alt='first image1 for news' /></div>
                        }                    </div>

                </div>

                <div className='col21 col-3 m-3 flex-row justify-content-center '>
                    <p className='archive-header'>أرشيف الأخبار</p>
                    {props.array&&props.array[5] && <div className='row archive-news mb-5'>
                        <div className='archive-first-new col-12 img-fluid'>
                            <img src={props.array[5].src} alt='news-5-image5' />
                            <p className='new2-header p-0 pt-1  m-0'> عنوان الخبر الخامس</p>
                            <p className='new2-time p-0 m-0'>منذ {((new Date()).getMinutes() - (+props.array[5].time.getMinutes()))} دقائق</p>

                        </div>
                    </div>}
                    {news}
                </div>
            </div>
        </div>
    )
}

export default DownOfNewsPage