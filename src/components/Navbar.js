import React,{useState} from 'react';
import "./Navbar.css";
import {auth} from "../firebase";
import {logout} from '../features/userSlice';
import {useDispatch} from 'react-redux';
//import logo from "../images/spacexlogo.png";
import {FaBars } from 'react-icons/fa';
import * as  AiIcons  from "react-icons/ai";
import {Link} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


function Navbar() {
const[sidebar,setSidebar]=useState(false);
const showSidebar=()=>{setSidebar(!sidebar);
}
const dispatch=useDispatch(); 
const logOutOfApp=()=>{
dispatch(logout())
auth.signOut();
}

return (
<div className="nav nav_black">
<div className="navbar_left">
<Tooltip title="Home">
<Link to="/">
<img className="logo" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTM5uorRXeT8JwikDKEupMk9N9Iwd7NKMSkw&usqp=CAU" 
alt="home" />
</Link>
</Tooltip>
</div>
<div className="navbar_middle">
<h5>FALCON 9</h5>
<h5>FALCON HEAVY</h5>
<h5>DRAGON</h5>
<h5>STARSHIP</h5>
<h5>HUMAN SPACEFLIGHT</h5>
<h5>RIDESSHARE</h5>
</div>
<div className="navbar_right">
    <h5 style={{marginTop:"12px", cursor:"pointer"}}>SHOP</h5>
    <IconButton><FaBars className="bars" onClick={showSidebar}/></IconButton>
</div>

<nav className={sidebar ?"nav-menu active" :"nav-menu"}>

<ul className="nav-menu-items" onClick={showSidebar}>
<li className="nav-toggle">
<IconButton>
<Link to="#" className="menu-bars">
<AiIcons.AiOutlineClose/> 
</Link>
</IconButton></li>

{Sidebar.map((item,index)=>{
    return(<li key={index} className={item.cName}>
        <Link to={item.path}>
        <span>{item.title}</span>
        </Link></li>);
})}
<li className="logout" onClick={logOutOfApp} 
>
SIGN OUT</li>
</ul>
</nav>
</div>
)
}

export default Navbar
