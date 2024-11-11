import './ChampionChips.css'
const ChampionChips = ({active,active1,active2,handleAvtive,handleAvtive1,handleAvtive2}) => {
 

    return (
    <div >
        <div className='d-flex row col-12'>
            <div className='ch col-4' style={{backgroundColor:active?'white':'#194e95',color:active?'#194e95':'white'}} onClick={handleAvtive}>2007</div>
            <div className='ch col-4' style={{backgroundColor:active1?'white':'#194e95',color:active1?'#194e95':'white'}} onClick={handleAvtive1}>2014</div>
            <div className='ch col-4' style={{backgroundColor:active2?'white':'#194e95',color:active2?'#194e95':'white'}} onClick={handleAvtive2}>2023</div>
            <div></div>
        </div>

    </div>
  )
}

export default ChampionChips