import React, { useEffect, useState } from 'react'
import './MatchTable.css'
import usePost from '../../custom Hooks/usePost';
import { config } from '../../Constant/environment';
import Cookies from 'js-cookies';
// .then( 
//     Cookies.setItem('token','id for token')
// )
function MatchTable() {
    const [tableDisplay ,settableDisplay]=useState(true)
const [data,postFunc]=usePost(config.tablePoint,
    {seasone:'39882892-af4f-4d6c-af9d-7a85458b8635',
    sport:'d56d7673-5e04-46a4-843c-65f1545c19c9'})
    useEffect(()=>{
        postFunc()
        console.log(data)
    },[])
    function settingDisplay (){
        settableDisplay(h=>!h);
    }
    const dataMatch =data && data.football.map(
        function (item, index) {
          return(  <tr key={item.uuid} className='col-12 d-flex justify-content-around '>
                   

                <td className='col-4'>
                <div className='d-flex justify-content-around '>
                <img src={item.src} alt='notfound' width='10%' />

                {item.name}
                    </div>
                </td>
                <td className=''>{item.play}</td>
                <td>{item.lose}</td>
                <td>{item.draw}</td>
                <td>{item.win}</td>
                <td>{item.diff}</td>
                <td>{item.points}</td>
            </tr>)
     }   

    )
    return (
        <div className='container-fluid m-0 p-0 px-0 mt-4 d-flex flex-column align-items-center justify-content-center'>
            <div className='row col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between align-items-center flex-row-reverse'>
                <div className='head-table col-3'><p>جدول الدوري السوري</p></div>
                <div className='burger-button col-1 m-4' onClick={settingDisplay}> </div>
            </div>
            <div className='row col-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='table1 col-12 ' style={{display:tableDisplay?'none':'flex'}}>
                    <table className='col-12'><thead className=' col-12 '>
                        <tr className='col-12 d-flex justify-content-around '>
                            <td className='col-4'>الفريق</td>
                            <td className=''>لعب</td>
                            <td>خسارة</td>
                            <td>تعادل</td>
                            <td>فاز</td>
                            <td>فرق</td>
                            <td>نقاط</td>
                        </tr>
                    </thead>
                        <tbody className=' col-12 '>
                            {dataMatch}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default MatchTable