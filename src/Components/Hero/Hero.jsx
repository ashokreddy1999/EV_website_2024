
import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.jpg';
import pause_btn from '../../Assets/pause_btn.jpg';
import play_btn from '../../Assets/play_btn.jpg'
const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,PlayStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p> 
            <img src={arrow_btn} alt=" " />
        </div>
        <div className="hero-dot-paly">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot organge":"hero-dot"}></li><br />
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot organge":"hero-dot"}></li><br />
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot organge":"hero-dot"}></li><br />
            
            </ul>
            <div className="hero-play">
                <img onClick={() =>setPlayStatus(!PlayStatus)} src={PlayStatus ? pause_btn : play_btn} alt=" " />
                <p></p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Hero
