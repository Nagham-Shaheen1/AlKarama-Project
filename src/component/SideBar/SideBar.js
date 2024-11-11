import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo_alkarama.png';
import axios from 'axios';
import { config } from '../../Constant/environment';
import Cookies from 'js-cookies'
const SideBar = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  const logout=async()=>{
   await axios.post(`${config.baseUrl}/${config.logout}`,null,
    { headers: {
      Authorization: `Bearer ${Cookies.getItem('token')}`,
  }}).then(
    res=> { 
      setData(res.data.data)
      Cookies.removeItem('token')
      
    }
  ).
  catch(err=>console.log(err))
  }
  useEffect(()=>{
    if(data!=='')
    {
      navigate('/login')
    }
  },[data])
  return (
    <div className='left-nav'>
    <img src={Logo}  alt='logo'/>
    <h2 className='team-name-dash p-0 m-0 px-0'>نادي الكرامة</h2>
              <NavLink to="/dashboard/home" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >  <p>الرئيسية</p> </NavLink>
              <NavLink to="/dashboard/news" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >  <p>الأخبار</p> </NavLink>
              <NavLink to="/dashboard/matches" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >  <p>المباريات</p> </NavLink>
              <NavLink to="/dashboard/about" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >  <p>حول النادي</p> </NavLink>
              <NavLink to="/dashboard/history" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >  <p>متحف النادي</p> </NavLink>
    <p style={{color:'orange',cursor:'pointer'}} onClick={()=>{logout()}}>Logout</p>
    </div>
  )
}

export default SideBar