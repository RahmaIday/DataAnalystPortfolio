import landingImage from '../assets/images/landingImage.jpg'
import wave from '../assets/images/wave.png'
import './greeting.css';
import Socials from '../components/socials';
import { Fade } from 'react-reveal';

function Greeting(){
    return(
        <Fade bottom duration={1000} distance="40px">
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
                <div className='greeting-text-p'>A graduating computer science student with data analyst experience using Python, SQL and more. Here lies my digital portfolio of all my projects and the skills I used to create them. </div>
                <br></br>
                <Socials></Socials>
            </div>
            <div className='greeting-image-div'>
                <img alt='landingImage' className='data-image' src={landingImage}/>            
            </div>
        </div>
        </Fade>
    )
}

export default Greeting;