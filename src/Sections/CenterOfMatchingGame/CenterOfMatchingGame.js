import React, { useEffect, useState } from 'react';
import './CenterOfMatchingGame.css';
import usePost from '../../custom Hooks/usePost';
import { config } from '../../Constant/environment';
import Cookies from 'js-cookies';
import { MatchesTopMatchesPage } from '../../component';
function CenterOfMatchingGame() {
  const [search,setSearch]=useState();
  const [data, postFunc] = usePost(config.matchNotStarted,
    {
      sport: Cookies.getItem('sport')
    })
  useEffect(() => {
    postFunc()
    console.log(data)
  }, [])

  const [data1, postFunc1] = usePost(config.nextMatches,
    {
      sport: Cookies.getItem('sport')
    })
  useEffect(() => {
    postFunc1()
    console.log(data1)
  }, [])
  const [fullData,setFullData]= useState([]);
  const [filterArray,setFilteredArray]= useState([]);

useEffect(()=>{
  data && data1 && setFullData(prev=>prev.concat(data.football.concat(data1.football)))
},[])
useEffect(()=>{
  if(search!=null&&data&&data1){
 
    
      const final=fullData&&  fullData.filter(item=>{item.team1.name.includes(search)||item.team2.name.includes(search)||item.channel.includes(search)})
      setFilteredArray(final)
}},[search,data,data1])
const matches=filterArray&&filterArray.map(item=>(
  <div className='card-of-matches-page d-flex flex-column'>
  <MatchesTopMatchesPage team1={item.team1} result={item.result} team2={item.team2} date={item.date}/>
</div>
))
  return (
    <div className='container-fluid px-0 p-0 m-0 d-flex justify-content-center align-items-center'>
      <div className='card-for-center-matche-page row col-8  mt-2 mb-2'>
        <div className='row col-8'>
          <input
          type='text'
          placeholder='ابحث عن مباراة'
          value={search}
          onChange={(e)=>{setSearch(prev=>e.target.value)}} />
           <img src={require('../../assets/images/search.png')}  alt='search ' />
        </div>

       
      </div>
    </div>
  )
}

export default CenterOfMatchingGame