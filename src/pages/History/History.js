import React, { useEffect, useState } from 'react';
import '../History/History.css';
import { About_team, ChampionChips, Championships, Footer, TopOfHistory } from '../../Sections';
import { Championship, Header, ImagesHistory, Navbar, Video } from '../../component';
import { config } from '../../Constant/environment';
import axios from 'axios';


function History() {

  
  return (
    <div className='History '>
      <div className='nav-his row col-12'>
        <Navbar />
      </div>
      <div className='row col-12  '>
        <TopOfHistory />
      </div>
      <div className='about-team1'>
        <div className='pb-5'>
          <Header name='تاريخ النادي' />
        </div>

        <About_team text='منذ تأسيسه ترأسه ساطع أتاسي- نورس السباعي -راتب خضري -عبد العزيز كالو- ساطع طليمات -محسن زين العابدين- مروان الأمين- طه المغربي -غازي زغيب -عبد الحميد السوقي- ومنذ بداية التسعينيات فاضل جنيد- نزار نجار- محمد ديب اليوسف- ساطع أتاسي -سيف الدين حسون- محمد حربة- ثم عاد نزار نجار- نور الدين التركماني - المهندس نصوح بارودي - الدكتور رياض الحبال- محمد حربا - المرتضى الدندشي'
          image={require('../../assets/images/creator.png')}
          image1={require('../../assets/images/history-cham-bg.png')}
          innerhead='مؤسس نادي الكرامة'
          header=' '
          fontSize='10'
        />
            </div>
      <div className='pb-5'>
        <Header name='الإنجازات في لعبة كرة القدم' />
      </div>
     <Championships/>
    </div>
  )
}

export default History