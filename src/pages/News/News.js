import React, { useEffect, useState } from 'react';
import './News.css'
import TopOfNewsPage from '../../Sections/TopOfNewsPage/TopOfNewsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DownOfNewsPage from '../../Sections/DownOfNewsPage/DownOfNewsPage';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import { config } from '../../Constant/environment';
const News = () => {
  const [news,setNews]=useState()
  useEffect(() => {
    axios.get(`${config.baseUrl}/${config.newsAll}`)
    .then(res => {
      console.log(res.data.data)
      setNews(res.data.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <>     <div className='nav container-fluid flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0 ' ><Navbar/></div>
    
    <div className='container-fluid '>
      <div className='row'>
        <div className='p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0'>

          {<TopOfNewsPage a={news&&news} valid={true} />}

        </div>
        <div className='row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0'>

         { <DownOfNewsPage array={news&&news} />}

        </div>
      </div>
    </div>
    <div className='footer'><Footer /></div>
</>
  );
}
export default News;
