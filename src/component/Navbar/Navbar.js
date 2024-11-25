import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { handleChangeSport } from '../../Redux/sportSlice';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const sport=useSelector(state=>state.sport1.sport)
  const dispatch=useDispatch()
  
  return (<div className='navigation-bar'>
    <div className='links'>
      
        <li>
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} >الرئيسية</NavLink>

        </li>
        <li>
            <NavLink to="/news" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>الاخبار</NavLink>

        </li>

        <li >

            <NavLink to="/matches" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>المباريات</NavLink>
        </li>
        <li >

            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>حول النادي</NavLink>

        </li>
        <li>
  
            <NavLink to="/history" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>متحف النادي </NavLink>
  
        </li>
        <li>
            <NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>تواصل معنا </NavLink>
         
        </li>
    </div>
    <div className='logo'>
      <li className='image1'>
        <img src={require('../../assets/images/logo_alkarama.png')} onClick={()=>{dispatch(handleChangeSport())}} alt='noimage' />
      </li>
    </div>

  </div>
  )
}

export default Navbar