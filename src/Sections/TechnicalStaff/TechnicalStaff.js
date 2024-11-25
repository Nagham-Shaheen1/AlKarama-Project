import React from 'react'
import Staff from '../../component/Staff/Staff'
import Header from '../../component/Header/Header'
import Line from '../../component/Line/Line'
import './TechnicalStaff.css'
import useGet from '../../custom Hooks/useGet'
import { config } from '../../Constant/environment'
function TechnicalStaff() {
    
    const [stuff, loading] = useGet(config.stuff);
    const stuffes = stuff && stuff.data && stuff.data.coaches && stuff.data.coaches.map(
      (item) => (
        <div className='d' title={'اسمه: ' + item.name + '، عمله: ' + item.work} key={item.uuid}>
          <Staff img={item.image} />
        </div>
      )
    );
    return (
        <div className='content-technical'>
            <div className='h23'><Header name='الطاقم الفني' /></div>
            <div className='line2' ><Line/></div>
            <div className='technicals1'>
              {stuffes}
            </div>
        </div>
    )
}

export default TechnicalStaff