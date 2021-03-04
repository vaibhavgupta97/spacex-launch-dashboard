import React,{useState} from 'react';
import "./Register.css";
import {useDispatch} from 'react-redux';
import{login} from '../features/userSlice';
import {auth} from "../firebase";
// import {Link} from "react-router-dom";

function Register() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const dispatch=useDispatch();
    const register=()=>{
        if(!name){
               return alert("Please enter your name")
           }
           auth.createUserWithEmailAndPassword(email,password)
           .then((userAuth)=>{
           userAuth.user
           .updateProfile({
               displayName:name,
           })
           .then(()=> {
               dispatch(
                   login({
                   email: userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:name,
                   
               })
               );
           }); 
               })
               .catch((error)=>alert(error));
           };
    return (
        <div className="register">
        <div className="login">
        <p>Please fill in the information below:</p>
        <form>
        <input value={name} onChange={e=>setName(e.target.value)}
         type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <input value={email} onChange={e=>setEmail(e.target.value)}
         type="text" placeholder="Email"/>
        <input  value={password} onChange={e=>setPassword(e.target.value)}
         type="password" placeholder="Password"/>
        <button className="loginBtn" type="submit" onClick={register}>Sign In</button>
        </form>
        
        </div>
        </div>
    )
}

export default Register
