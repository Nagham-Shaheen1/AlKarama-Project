import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import useGet from './custom Hooks/useGet'
import { config } from './Constant/environment'
import Cookies from 'js-cookies'
const Root = () => {
  const sport=useSelector(state=>state.sport1.sport)
  const dispatch=useDispatch()
  const[data,loading]=useGet(config.allSport)
  console.log(data&&data.data[0].uuid);
  useEffect(() => {
   
      data && data.data.map((item) => {
        
        if (item.name=== sport) {
          Cookies.setItem('sport', item.uuid.toString());
          console.log(`its Okay the sport ${sport}adding item ${item.uuid.toString()} `)
        } 
      
      });
    
  }, [data]);
  return (
    <div className='App'><Outlet/>
    </div>
  )
}

export default Root