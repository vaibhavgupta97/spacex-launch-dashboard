import React from 'react';
import "./Simulator.css";
// import simulatorImg from "../images/iss_game.jpg";
function Simulator() {
    return (
<div className="simulator">
<div className="simulator__container"> 
<div className="simulator__left">
<h2 className="simulator__heading">DRAGON DOCKING SIMULATOR</h2>
<p className="simulator__para" >Dragon is designed to autonomously dock and undock with the International 
Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
<a className="test__btn" tabIndex="0" href="https://iss-sim.spacex.com/" 
target="_blank" rel="noopener noreferrer">
<span  className="testText">TRY NOW</span>
</a>
</div>
</div>   
</div>
)
}

export default Simulator;
