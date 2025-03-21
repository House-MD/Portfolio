import '../styles/Hero.css';
import stackGraphic from '../assets/stack.svg';
import pipeGraphic from '../assets/Pipe.svg';

function Hero(){
    return (
        <div className='hero-container'>
            <img 
                src={stackGraphic}
                alt="stack graphic" 
                className="stack-graphic" 
            />
            <img
                src={pipeGraphic}
                alt="pipe graphic"
                className="pipe-graphic"
            />
            <div className='hero'>
                <div className='main-text'>
                    <h1>Full-Stack Developer,</h1>
                    <h1>Data Analyst,</h1>
                    <h1>Designer</h1>
                </div>
                <div className='description-check-wrapper'>
                    <div className='description'>
                        <p>Hi! I’m Ahmed, a passionate Comp-Sci student with wide-ranging interests and hobbies based in Toronto.</p>
                    </div>
                    <p className='check'>check out my projects!</p>
                </div>
            </div>
        </div>

    );
}

export default Hero;