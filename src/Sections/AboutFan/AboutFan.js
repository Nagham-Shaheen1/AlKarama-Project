import React from 'react'
import './AboutFan.css'
import Line from '../../component/Line/Line'
import VideosFan from '../VideosFan/VideosFan'
function AboutFan({data}) {
    const videos=  data && data.map(
        (item) => (
       item.videos&& item.videos.map((i) => (
            <div key={i.uuid}>
              <VideosFan img={require('../../assets/images/top_home_page.jpg')} url={i.url} watches='2ألف مشاهدة' header={i.description} time='قبل 5 أشهر' />
            </div>
          ))
        )
      )  
    return (
        <div className='card-about-fan'>
            <div className='header-about-fan'>
                <p>لمحة عن الرابطة</p>
            </div>
            <div className='line-fans'>
                <Line />
            </div>
            <div className='text-about-fun'><p>تعدّ رابطة مشجعي الكرامة من أوائل روابط المشجعين التي تشكلت بالقطر فقد تشكلت عام 1975، ولها شعار من تلك الأيام وترأسها آنذاك المشجع عمر الشاغوري، وكان اهتمامها بالتشجيع وتوجيه الجماهير واختيار الهتافات الجميلة البعيدة عن الاستفزاز</p></div>
            <div className='header-about-fan'><p>مؤسسين الرابطة</p></div>
            <div className='line-fans'>
                <Line />
            </div>
            <div className='founder-name'>
                <div className='header-founder'>
                    <div className='header-boss-founder'>
                        <p><span className='sp2'>    </span>   رئيس الرابطة  <span className='sp1'>   </span></p>
                    </div>
                    <div className='header-logo'>
                        <img src={require('../../assets/images/logo_alkarama.png')} alt='log alkarama' />
                    </div>
                </div>
                <div className='namming'><p>السيد باسم محمد نزار زهرة</p></div>
                <hr></hr>
                <div className='header-founder'>
                    <div className='header-boss-founder'>
                        <p><span className='sp2'>  
                          </span>   أعضاء الرابطة<span className='sp1'>   </span></p>
                    </div>
                </div>
                <div className='row-for-names'>
                    <div className='namming-of-group'>
                        <div><p>الدكتور ايهاب القاضي</p></div>
                        <div><p>السيد عبدالله المغربي</p></div>
                        <div><p>السيد نبيل الزامل</p></div>
                    </div>
                    <div className='namming-of-group'>
                        <div><p>الدكتور كنان بيرقدار</p></div>
                        <div><p>السيد عمار حاضري</p></div>
                        <div><p>المهندس وسيم أحمد الريس</p></div>
                    </div>
                </div>
            </div>
            <div className='header-vid-fan'><p >أجمل لقطات مشجعي نادي الكرامة</p></div>
            <div className='fans-line'> </div>
            <div className='videos-fans'>
            {videos}
            </div>
        </div>
    )
}
export default AboutFan