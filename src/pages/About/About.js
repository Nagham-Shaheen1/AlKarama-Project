import React, { useEffect, useState } from 'react';
import './About.css'

import Navbar from '../../component/Navbar/Navbar';
import { config } from '../../Constant/environment';
import useGet from '../../custom Hooks/useGet';
import axios from 'axios';
import { AboutFan, About_team, Advertisements, BossOfTeam, Fans, Footer, StrategyOfTeam, TeamPlayers, TechnicalStaff, TopOfAboutPage } from '../../Sections';

const About = () => {
  const [assosiations, setAssosiations] = useState()

  useEffect(() => {
    axios.get(`${config.baseUrl}/${config.associations}`)
      .then(res => {
        console.log(res.data.data)
        setAssosiations(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (<div className='page'>
    <div className='nav  flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0 ' style={{ display: 'block' }}>
      <Navbar />
    </div>
    <div><Advertisements/></div>
    <div className="top container-fluid row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0"><TopOfAboutPage /></div>
    <div className="about-team ">
      <About_team
        header="حول النادي"
         image={require('../../assets/images/time_with_slide_card.png')}
        innerhead='فكرة تأسيس نادي الكرامة الرياضي'
        text='بتاريخ 18 شباط /1971/ أصدر الرئيس حافظ الأسد المرسوم التشريعي رقم /38 / الناظم للحركة الرياضية في الجمهورية العربية السورية وعلى أثره تم دمج الأندية الرياضية بقرار من المكتب التنفيذي للاتحاد الرياضي العام رقم /59/ تاريخ 18آب 1972 ونادي الكرامة هو حصيلة دمج عدة أندية أهلية '
        page='About'
        linkTo="/more" 
        showLink={true} 
      />
    </div>
    <div className='boss'><BossOfTeam /></div>
    <div className='technical-staff'><TechnicalStaff /></div>
    <div className='team-players'> <TeamPlayers /></div>
    <div className='strategy-of-team'><StrategyOfTeam /></div>
    <div className='fans'><Fans /></div>
    <div className='about-fan'><AboutFan data={assosiations && assosiations} /></div>
    <div className='footer'><Footer /></div>
  </div>
  );
}
export default About;
