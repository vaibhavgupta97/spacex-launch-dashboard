import React from 'react';
import "./Simulator.css";
import simulatorImg from "../images/iss_game.jpg";
function Simulator() {
    return (
<div className="simulator">
<div className="simulator__background">
<img  className="simulator__image" src={simulatorImg} 
alt="simulator"/>
<div className="inner__section">
<h2 >DRAGON DOCKING SIMULATOR</h2>
<p >Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>

<a className="simulatorBtn" tabindex="0" href="https://iss-sim.spacex.com/" 
target="_blank" rel="noopener noreferrer">
<div className="hover"></div>
<span className="text">TRY NOW</span>
</a>
</div>
</div>   
</div>
)
}

export default Simulator
