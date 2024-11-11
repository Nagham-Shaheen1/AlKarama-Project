import React, { useEffect } from 'react'
import './DashBoard.css'
import SideBar from '../../component/SideBar/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookies'
const DashBoard = () => {
  const navigate = useNavigate();
  const token = Cookies.getItem('token');

  useEffect(() => {

    if (!token) {
      // إذا لم يتم العثور على الرمز المميز في ملفات الـ cookies، قم بإعادة التوجيه إلى صفحة أخرى
      navigate('/login');
    }
  }, []);
  return (
    <div className='container-fluid m-0 p-0 mb-0 row  content-dash'>
    <div className='left-navbar  col-2'><SideBar/></div>
    <div className='col-2'></div>
    <div className="right-content  col-10"><Outlet/></div>
    </div>
  )
}

export default DashBoard