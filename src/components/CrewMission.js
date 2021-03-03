import React from 'react';
import "./CrewMission.css";
import crewImg from "../images/dragon-window-desktop.jpg";
function CrewMission() {
    return (
<div className="crewMission">
<div className="crew__background">
<img  className="crew__image" src={crewImg} 
alt="crew"/>
<div className="inner__sections">

<h2 class="animate shadowed">
CREW-1 MISSION</h2>
<p >Watch the Crew-1 mission from the beginning.</p>
<a className="simulatorBtn" tabindex="0" href="/updates/crew-1-docks-to-iss">
<div></div>
<span>LEARN MORE</span>
</a>
</div>
</div>
</div>
    )
}

export default CrewMission;
