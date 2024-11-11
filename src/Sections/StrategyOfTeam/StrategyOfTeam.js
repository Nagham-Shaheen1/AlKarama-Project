import React from 'react'
import Header from '../../component/Header/Header'
import Line from '../../component/Line/Line'
import './StrategyOfTeam.css'
function StrategyOfTeam() {
    return (
        <div className='fulling-sec'>
            <div><Header name='إستراتيجية النادي' /></div>
            <div className='line11'><Line /></div>
            <div className='forth-strategy'>
                <div className='col1'>
                    <div className='str1'>
                        <div className='str-number'>
                            01
                        </div>                       
                         <p className='str-header'>الرؤية</p>
                        <p>أن يكون نادي الكرامة الأميز رياضياً,إجتماعياً مؤسسياً وفي طليعة الاندية العالمية ،</p>
                    </div>
                    <div className='str3'>
                        <div className='str-number'>
                            03
                        </div>
                        <p className='str-header'>القيم</p>

                        <ul>
                            <li>الكفاءة</li>
                            <li>المصداقية</li>
                            <li>التميز</li>
                            <li>روح الفريق</li>
                            <li>الإستمرارية</li></ul>
                    </div>
                </div>
                <div className='col2'>
                    <div className='str2'>
                        <div className='str-number'>02
                        </div>
                        <p className='str-header'>الرسالة</p>
                        <p>تحقيق الريادة الرياضية والاثر الاجتماعي من خلال تطوير وتمكين العمل المؤسسي وبناء قاعدة تجارية فعالة</p></div>
                    <div className='str4'>
                        <div className='str-number'>
                            04
                        </div>
                        <p className='str-header'>الركائز</p>
                        <ul>
                            <li>الريادة الرياضية</li>
                            <li>النمو التجاري</li>
                            <li>المسؤولية الإجتماعية</li>
                            <li>العمل المؤسسي</li>
                        </ul></div>
                        
                </div>

            </div>
        </div>
    )
}

export default StrategyOfTeam