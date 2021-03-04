import React, { Component } from 'react'
import "./Launches.css";
export default class Launches extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            isLoading:false,
            isError:false
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true})
        const response=await fetch("https://api.spacexdata.com/v3/launches")
        
        if(response.ok){
            const users=await response.json();
            console.log(users);
            console.log(users[0].flight_number);
            console.log(users[0].mission_name)
            console.log(Object.keys(users[0]));
            console.log(users[0].links.video_link)
            this.setState({users,isLoading:false})
        }else{
            this.setState({isError:true,isLoading:false})
        }
    }
//     renderTableHeader(){
// return Object.keys(this.state.users[0]).map(attr=><th key={attr}>
//     {attr.toUpperCase()}
//     </th>)
//     }
    renderTableRows(){
this.state.users.map(user=>{
    return(
        <tr key={user.flight_number}>
        <td>{user.flight_number}</td>
        <td>{user.mission_name}</td>
        <td>{user.launch_year}</td>
        </tr>
    )
})
    }
        render() {
        const {users,isLoading,isError}=this.state;
        return (
            <div className="launch">
<table>
<thead>
<h1>table</h1>
</thead>
<tbody className="tbody">{this.renderTableRows()}</tbody></table>
            </div>
        )
    }
}
