import React, {useEffect,useState} from 'react';
import axios from "axios";
import "./Launches.css";
function Launches() {
    const [launch,setLaunch]=useState([]);
useEffect(()=>{
async function getData(){
const res=await axios.get("https://api.spacexdata.com/v3/launches")
//console.log(res.data[5].flight_number);
setLaunch(res.data);
return res;
}
getData();
},["https://api.spacexdata.com/v3/launches"])
console.log(launch);
return (
<div className="launch">
<table>
<tr key={launch[0].flight_number}>
  {Object.keys(launch[0]).map((key) => (
    <th>{key}</th>
  ))}
</tr>
{launch.map((item) => (
  <tr key={item.flight_number}>
    {Object.values(item).map((val) => (
      <td>{val}</td>
    ))}
  </tr>
))}
</table>


</div>
)
}

export default Launches;
// {launch.map((info)=>{
//     return(
//         <div className="content">
//         <h1 className="content">{info.flight_number}</h1>
//         <p className="content">{info.links.video_link}</p>
//         <h2 className="content">{info.flight_number}</h2>
        
//         </div>
//     )
// })}