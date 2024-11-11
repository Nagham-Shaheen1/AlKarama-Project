import React, { memo, useEffect, useState } from 'react'
import './TeamPlayers.css'
import Player from '../../component/Player/Player'
import axios from 'axios';
import { config } from '../../Constant/environment';

function TeamPlayers() {
  const [players, setPlayers] = useState();
  useEffect(() => {
    axios.get(`${config.baseUrl}/${config.allPlayers}`)
    .then(res => {
      console.log(res.data.data)
      setPlayers(res.data.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='contain'>
      <div className='head2'>
        <h2>اللاعبون</h2>
      </div>
      <div className='players d-felx'>
        <div className='flexing-players'>
          {players && players.map((item, index) => (
            <div 
              style={{ translate: index+1 % 3 === 0 ? '0 20px' : '0 0' }}
              key={item.uuid}>
              <Player
                img={item.image}
                name={item.name}
                position='123'
                number={item.number}
                age={item.age}
                cm={item.high} />
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
export default memo(TeamPlayers)