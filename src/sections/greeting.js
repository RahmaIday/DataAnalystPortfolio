import landingImage from '../assets/images/landingImage.jpg'
import wave from '../assets/images/wave.png'
import './greeting.css';

function Greeting(){
    return(
        <div className='greeting-main'>
            <div className='greeting-text-div'>
                <h1 className='greeting-text'>Hello, I'm Rahma 
                    <span class="wave-emoji">
                    <img
                        alt="👋"
                        draggable="false"
                        src={wave}
                        class="wave-img"
                    />
                    </span>
                </h1>
                <div className='greeting-text-p'>A ..... data analyst with experience in ....... </div>
            </div>
            <div className='greeting-image-div'>
            <img alt='landingImage' className='data-image' src={landingImage}/>            
            </div>
        </div>
    )
}

export default Greeting;