import React from 'react';
import "./CrewMission.css";

function CrewMission() {
    return (
<div className="crewMission">
<div className="crew__container">
<div className="crew__left">
<h2 className="crewHeading">
CREW-1 MISSION</h2>
<p className="crew__para">Watch the Crew-1 mission from the beginning.</p>
<a className="crew__btn" tabIndex="0" 
href="/updates/crew-1-docks-to-iss">
<span className="crewText">LEARN MORE</span>
</a>
</div>
</div>
</div>
    )
}

export default CrewMission;
